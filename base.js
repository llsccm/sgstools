function addStyle() {
  let style = document.createElement('style')
  style.innerText = `
    .ac-tooltip{
      position: fixed;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 16px;
      min-width: 360px;
      max-width: 560px;
      background-color: #fdf6ec;;
      border-left: 5px solid #F44336;
      color: #F44336;
      font-size: 16px;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 #0000001a;
      z-index: 9999;
      transition: top 0.4s;
    }
    .ac-tooltip.green{
      background-color: #f0f9eb;;
      border-left: 5px solid #4CAF50;
      color: #4CAF50;
    }
  `
  document.head.appendChild(style)
}

// 显示弹窗
function addTooltip(text, id = 'acTooltip', duration = 3000, className) {
  let ele = document.getElementById(id)
  ele && ele.remove()
  let div = document.createElement('div')
  div.id = id
  div.className = 'ac-tooltip ' + className
  div.innerHTML = text
  document.body.appendChild(div)
  setTimeout(() => {
    div.style.top = '20px'
  }, 50)
  if (duration) {
    setTimeout(() => {
      removeTooltip(id)
    }, duration)
  }
}

// 移除弹窗
function removeTooltip(id) {
  let div = document.getElementById(id)
  if (div) {
    div.style.top = '-100px'
    setTimeout(() => {
      div.remove()
    }, 1000)
  }
}

// const filteredClassList = [
//   'SsCChatmsgNtf',
//   'GsCModifyUserseatNtf',
//   'MsgReconnectGame',
//   'MsgGamePlayCardNtf',
//   'PubGsCUseSpell',
//   'ClientHappyGetFriendHandcardRep',
//   'GsCRoleOptTargetNtf',
//   'PubGsCMoveCard',
//   'GsCFirstPhaseRole',
//   'GsCGamephaseNtf',
//   'PubGsCUseCard',
//   'ClientGeneralSkinRep',
//   'ClientLoginRep',
//   'MsgReconnectGame',
//   'ClientRoleGeneralStarRep',
//   'SmsgGameStateData',
//   'CGsRoleSpellOptRep',
//   'ClientUserbaseinfoRep',
//   'GsClientSyncTablePersonalityCardSetRsp',
//   'MsgGameDealCharacter',
//   'ClientOfficerInfoRep',
//   'MsgNtfUseCardType',
//   'ClientRoleGeneralStarRep',
//   'GsCUpdateRoleDataExNtf',
//   'decodeRogueLikeDataSync',
//   'DbsCcUserGoodshintNtf',
//   'decodeClientSecretInfoRep',
//   'ClientLeavetableRep',
//   'ClientRecommendShopItemRep',
//   'MsgGameOver',
//   'decodeRougeBaseInfoRep',
//   'decodeClientTavernInfoRep',
//   'ClientActivitysetDataRep'
// ]

Array.isArray(window.SGSMODULE) || (window.SGSMODULE = [])

if (!console._log) {
  console._log = console.log
  console._log('%cBASE', 'font-weight: bold; color: white; background-color: #525288; padding: 1px 4px; border-radius: 4px;')
}

const _log = (...args) => {
  // 如果第一个参数是一个对象，并且它的 className 属性在 classList 中，那么执行 console._log 和 SGSMODULE 中的函数
  if (
    (typeof args[0] === 'object' && 'className' in args[0]) ||
    window.isLogAllClass ||
    args == '资源组加载完毕：selectSkin' ||
    (args[0].className == 'decodeSSCChatmsgNtf' && typeof args[0].ProtoObj.scene != 'undefined' && args[0].ProtoObj.scene == 11)
  ) {
    window.isLogAllClass && console._log(...args)
    SGSMODULE.forEach((fn) => fn(...args))
  }
}

Object.defineProperty(console, 'log', {
  get() {
    return _log
  },
  set() {
    return
  }
})

function main(...args) {
  let className = args[0].className

  // 监听decodeClientTavernInfoRep
  if (className == 'decodeClientTavernInfoRep') {
    let cnt = arguments[0].data?.protoObj?.tavern_info?.day_quest_finished_cnt
    if (cnt >= 30) {
      let text = `今日已获得紧密度：${cnt}，恭喜你完成任务~`
      addTooltip(text, 'acTooltip', 3000, 'green')
    } else if (cnt > 0) {
      addTooltip(`今日已获得紧密度：${cnt}，还差 ${30 - cnt} 亲密度，继续努力吧~`)
    }
  }
}

SGSMODULE.push(main)
addStyle()
