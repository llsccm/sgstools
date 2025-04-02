var createImageBitmapOK = self.createImageBitmap ? true : false
// var isSet = true
const CACHE_STATIC = 'caches-static'
const CACHE_UI = 'caches-ui'
const CACHE_SKIN = 'caches-skin'
const CACHE_GAME = 'caches-game'
const CACHE_ANIMATE = 'caches-animate'
const CACHE_WINDOW = 'caches-window'
const CACHE_RUNTIME = 'caches-runtime'
const paths = ['/runtime/', '/bigPng/', '/animate/', '/pc/general/', '/window/']

onmessage = function (evt) {
  var data = evt.data //通过evt.data获得发送来的数据
  loadImage2(data)

  // if (!isSet) {
  //   isSet = true
  //   setInterval(workerloop, 1000)
  // }
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

// 将部分图像视作静态
function isStatic(url) {
  if (!url.includes('?v=')) return true

  for (const path of paths) {
    if (url.includes(path)) {
      return true
    }
  }

  return false
}

async function loadImage2(link) {
  myTrace('load:' + link)

  const url = isStatic(link) ? removeVersion(link) : link

  try {
    const cacheName = getCacheName(link)
    const cache = await caches.open(cacheName)
    const response = await cache.match(url)

    if (response) {
      const arrayBuffer = await response.arrayBuffer()
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

function getCacheName(link) {
  if (link.includes('/window/')) return CACHE_WINDOW
  if (link.includes('/pc/general/')) return CACHE_SKIN
  if (link.includes('/animate/game/') || link.includes('/skinEffectNew/')) return CACHE_GAME
  if (link.includes('/animate/')) return CACHE_ANIMATE
  if (link.includes('/runtime/')) return CACHE_RUNTIME
  if (link.includes('/bigPng/')) return CACHE_STATIC

  if (link.includes('?v=')) return CACHE_UI

  return CACHE_STATIC
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
    if (!link.includes('/activity/AdBig/')) {
      const cacheName = getCacheName(link)
      const cache = await caches.open(cacheName)
      const url = isStatic(link) ? removeVersion(link) : link
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
    var startTime = getTimeNow()

    response = new self.Blob([response], { type: 'image/png' })

    self
      .createImageBitmap(response)
      .then(function (imageBitmap) {
        //showMsgToMain("imageBitmapCreated:");
        var data = {}
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
