const CACHE_STATIC = 'caches-static'
const CACHE_UI = 'caches-ui'
const CACHE_SKIN = 'caches-skin'
const CACHE_GAME = 'caches-game'
const CACHE_ANIMATE = 'caches-animate'
const CACHE_WINDOW = 'caches-window'
const CACHE_SHOW = 'caches-show'
const CACHE_FACE = 'caches-face'
const CACHE_RUNTIME = 'caches-runtime'
const CACHE_ACT = 'caches-act'
const CACHE_ROGUE = 'caches-rogue'
const CACHE_SHOP = 'caches-shop'
const STATIC_URL_REGEXP = /^https:\/\/web\.sanguosha\.com\/220\/h5_2\/res\/(runtime|assets\/(animate|window|roguelike|chat|bigPng))\/.*/
const CACHE_MAPPING = [
  ['/window/', CACHE_WINDOW],
  ['/pc/general/', CACHE_SKIN],
  ['/pc/shop/', CACHE_SHOP],
  ['/animate/game/', CACHE_GAME],
  ['/skinEffectNew/', CACHE_GAME],
  ['/animate/', CACHE_ANIMATE],
  ['/AvatarShow/', CACHE_SHOW],
  ['/Face/', CACHE_FACE],
  ['/pc/activity/', CACHE_ACT],
  ['/roguelike/', CACHE_ROGUE],
  ['/runtime/', CACHE_RUNTIME],
  ['/bigPng/', CACHE_STATIC]
]
const cacheInstances = {}
const cacheEtagChecked = new Set()

onmessage = function (evt) {
  var data = evt.data //通过evt.data获得发送来的数据
  loadImage2(data)
}

function workerloop() {
  myTrace('png:workerloop')
}

var enableTrace = false
var ifShowTraceToMain = false

function myTrace(msg) {
  if (!enableTrace) return
  console.log('png:' + msg)
  if (ifShowTraceToMain) {
    showMsgToMain(msg)
  }
}

function removeVersion(url) {
  return url.split('?')[0]
}

function getCacheInfo(link) {
  for (const [path, cacheName] of CACHE_MAPPING) {
    if (link.includes(path)) {
      return {
        cacheName,
        isStatic: isStatic(link)
      }
    }
  }

  return {
    cacheName: CACHE_STATIC,
    isStatic: isStatic(link)
  }
}

// 将部分图像视作静态
function isStatic(link) {
  return !link.includes('?v=') || STATIC_URL_REGEXP.test(link)
}

function getCacheUrl(link) {
  return isStatic(link) ? removeVersion(link) : link
}

async function getCache(name) {
  if (!cacheInstances[name]) {
    cacheInstances[name] = await caches.open(name)
  }
  return cacheInstances[name]
}

async function loadImage2(link) {
  myTrace('load:' + link)

  if (link.includes('/Ad')) {
    fetchImage(link)
    return
  }

  const cacheInfo = getCacheInfo(link)
  const url = getCacheUrl(link)

  try {
    const cacheName = cacheInfo.cacheName
    const cache = await getCache(cacheName)
    const response = await cache.match(url)

    if (response) {
      const latestResponse = cacheName === CACHE_WINDOW ? await updateCacheByEtag(link, url, cache, response) : response
      const arrayBuffer = await latestResponse.arrayBuffer()
      if (arrayBuffer) {
        doCreateImageBitmap(arrayBuffer, link)
        return
      }
    }

    fetchImage(link)
  } catch (e) {
    console.log(e)
    fetchImage(link)
  }
}

async function updateCacheByEtag(link, url, cache, cachedResponse) {
  if (cacheEtagChecked.has(url)) {
    return cachedResponse
  }

  const etag = cachedResponse.headers.get('etag')

  if (!etag) {
    return cachedResponse
  }

  try {
    const response = await fetch(link, {
      headers: {
        'If-None-Match': etag
      }
    })

    if (response.status === 304) {
      cacheEtagChecked.add(url)
      return cachedResponse
    }

    if (!response.ok) {
      return cachedResponse
    }

    const responseClone = response.clone()
    await cache.put(url, responseClone)
    cacheEtagChecked.add(url)
    return response
  } catch (e) {
    console.log(e)
    return cachedResponse
  }
}

function getCacheName(link) {
  return getCacheInfo(link).cacheName
}

async function checkCache() {
  try {
    const cache = await caches.open(CACHE_UI)
    // 缓存太多 matchAll keys 都耗时严重
    const cacheKeys = await cache.keys()
    const cacheSet = new Set()

    for (const key of cacheKeys) {
      cacheSet.add(removeVersion(key.url))
    }

    if (cacheKeys.length > cacheSet.size * 1.6) {
      for (const key of cacheKeys) {
        cache.delete(key.url)
      }

      console.log('worker:clearCache')
    }
  } catch (e) {
    console.log(e)
  }
}

async function fetchImage(link) {
  let failed = false

  if (link.startsWith('data:image/')) {
    createImageBitmapFromBase64(link)
    return
  }

  try {
    const response = await fetch(link)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    // 不缓存广告
    if (!link.includes('/Ad')) {
      const cacheInfo = getCacheInfo(link)
      const cache = await getCache(cacheInfo.cacheName)
      const url = getCacheUrl(link)
      const responseClone = response.clone()
      await cache.put(url, responseClone)
    }

    const arrayBuffer = await response.arrayBuffer()

    if (!arrayBuffer || arrayBuffer.byteLength < 10) {
      if (!failed) {
        failed = true
        pngFail(link, 'loadFail from onload')
      }
      return
    }

    const data = new Uint8Array(arrayBuffer)
    doCreateImageBitmap(data, link)
  } catch {
    if (!failed) {
      failed = true
      pngFail(link, 'loadFail')
    }
  }
}

function doCreateImageBitmap(response, url) {
  try {
    //showMsgToMain("hihidoCreateImageBitmap");
    //showMsgToMain("doCreateImageBitmap:"+response);
    //var startTime=getTimeNow();
    //showMsgToMain("new self.Blob");
    const startTime = getTimeNow()

    response = new self.Blob([response], { type: 'image/png' })

    self
      .createImageBitmap(response)
      .then(function (imageBitmap) {
        //showMsgToMain("imageBitmapCreated:");
        const data = {}
        data.url = url
        data.imageBitmap = imageBitmap
        data.dataType = 'imageBitmap'

        data.startTime = startTime
        data.decodeTime = getTimeNow() - startTime
        data.sendTime = getTimeNow()

        myTrace('png:Decode By createImageBitmap,' + data.decodeTime, url)

        data.type = 'Image'
        postMessage(data, [data.imageBitmap])
      })
      .catch(function (e) {
        showMsgToMain('catch e:' + e)
        pngFail(url, 'parse fail' + e + ':ya')
      })
  } catch (e) {
    pngFail(url, 'parse fail' + e.toString() + ':ya')
  }
}

function createImageBitmapFromBase64(url) {
  postMessage({
    type: 'Image',
    url: url,
    imagedata: null,
    msg: ''
  })
}

function getTimeNow() {
  return new Date().getTime()
}

function disableWorker(msg) {
  var data = {}
  data.url = url
  data.imagedata = null
  data.type = 'Disable'
  data.msg = msg
  postMessage(data)
}

function pngFail(url, msg) {
  var data = {}
  data.url = url
  data.imagedata = null
  data.type = 'Image'
  data.msg = msg
  console.log('png:' + msg + ' ' + url)
  postMessage(data)
}

function showMsgToMain(msg) {
  var data = {}
  data.type = 'Msg'
  data.msg = msg
  postMessage(data)
}
