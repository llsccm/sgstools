var createImageBitmapOK = self.createImageBitmap ? true : false
var isSet = true
const CACHE_NAME = 'caches-sgs'
const paths = ['/runtime/', '/bigPng/']

onmessage = function (evt) {
  var data = evt.data //通过evt.data获得发送来的数据
  loadImage2(data)

  if (!isSet) {
    isSet = true
    setInterval(workerloop, 1000)
  }
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
  for (const path of paths) {
    if (url.includes(path)) {
      return url.split('?')[0]
    }
  }
  return url
}

async function loadImage2(url) {
  myTrace('load:' + url)

  url = removeVersion(url)

  try {
    const cache = await caches.open(CACHE_NAME)
    const response = await cache.match(url)

    if (response) {
      const arrayBuffer = await response.arrayBuffer()
      if (arrayBuffer) {
        doCreateImageBitmap(arrayBuffer, url)
        return
      }
    }

    fetchImage(url)
  } catch {
    fetchImage(url)
  }
}

async function fetchImage(url) {
  let failed = false

  if (url.startsWith('data:image/')) {
    createImageBitmapFromBase64(url)
    return
  }

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseClone = response.clone()
    const cache = await caches.open(CACHE_NAME)
    await cache.put(url, responseClone)
    const arrayBuffer = await response.arrayBuffer()

    if (!arrayBuffer || arrayBuffer.byteLength < 10) {
      if (!failed) {
        failed = true
        pngFail(url, 'loadFail from onload')
      }
      return
    }

    let data = new Uint8Array(arrayBuffer)
    doCreateImageBitmap(data, url)
  } catch (_error) {
    if (!failed) {
      failed = true
      pngFail(url, 'loadFail')
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
