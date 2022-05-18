// let url ='https://saying.api.azwcl.com/saying/get'
const url = 'https://payment.sanguosha.com/ol/qr_pay/alipay/qrcode/info'
let options = {}
options.headers = {
  'accept': '*/*',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
  'content-type': 'application/x-www-form-urlencoded',
  'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'cross-site',
}
options.referrerPolicy = 'strict-origin-when-cross-origin'
//options.body = 'account=13640138515&yuanbao=3000&page_from=0&channelid=210000'
options.method = 'POST'
options.mode = 'cors'

let flag = false
let form = $('#recharge')
let yuanbao
let account = localStorage.getItem('account')
$('#account')[0].value = account

function info(){
  account = $('#account')[0].value
  yuanbao = $('#yuanbao')[0].value
  localStorage.setItem('account', account)
}
async function callback(e) {
  e.preventDefault()  
  //let thUrl = `http://web.sanguosha.com/login/area.html?account=${account}`
  info()
  let olUrl = `http://web.sanguosha.com/login/ol/nickname.html?account=${account}`
  //let yuanbao = document.querySelector('#yuanbao').value
  const res = await fetch(olUrl)
  const data = await res.json()
  if (data.code === 0) {
    flag = true
    const nickName = data.data.Name
    const level = data.data.Level
    const span = $('#res')[0]
    span.innerHTML = `Lv${level}.${nickName}`
    if (!yuanbao) yuanbao = $('#yuanbao')[0].value = 632
    const amount = $('#amount')[0]
    amount.innerHTML = `${yuanbao}`
  }
}

form.on('submit', callback)


$('.pay-list').on('click', function (e) {
  if (e.target.className.indexOf('btn') > -1) {
    let num = e.target.innerText
    console.log(e.target.innerText)
    $('#yuanbao')[0].value = Math.ceil(num / 0.95)
  }
})

$('#alipay').on('click', async function (e) {
  info()
  if (!flag) {
    alert('请进行账号检测')
    return
  }
  $('.code').empty()
  const qrcode = new Image()
  options.body = `account=${account}&yuanbao=${yuanbao}&page_from=0&channelid=210000`
  const res = await fetch(url, options)
  const data = await res.json()
  //console.log(data)
  if (data.result === 'SUCCESS') {
    qrcode.src = data.qrcode_img_url
    $('.code').append(qrcode)
  }
})