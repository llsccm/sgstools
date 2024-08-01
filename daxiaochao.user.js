// ==UserScript==
// @name         三国杀打小抄
// @namespace    https://greasyfork.org/scripts/448004
// @version      2.8.7
// @author       小麦
// @description  打小抄支持网页版和微端，微端文件请加群917826431
// @icon         https://i0.hdslb.com/bfs/new_dyn/17ec41a0ca79633b77399065ab80da3f2138912.png
// @match        *://game.4399iw2.com/yxsgs/*
// @match        *://my.4399.com/yxsgs/*
// @match        *://*.sanguosha.com/*
// @match        *://web.kuaiwan.com/kwsgsn/*
// @match        *://wan.baidu.com/microend?gameId=19793595/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const allCard = { "0": { "name": "?", "color": " ", "number": " ", "type": "1" }, "1": { "id": 1, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "2": { "id": 2, "name": "闪", "type": 1, "number": 2, "color": 2 }, "3": { "id": 3, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "4": { "id": 4, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "5": { "id": 5, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "6": { "id": 6, "name": "杀", "type": 1, "number": 6, "color": 2 }, "7": { "id": 7, "name": "杀", "type": 1, "number": 7, "color": 2 }, "8": { "id": 8, "name": "杀", "type": 1, "number": 8, "color": 2 }, "9": { "id": 9, "name": "杀", "type": 1, "number": 9, "color": 2 }, "10": { "id": 10, "name": "杀", "type": 1, "number": 10, "color": 2 }, "11": { "id": 11, "name": "闪", "type": 1, "number": 11, "color": 2 }, "12": { "id": 12, "name": "方天", "type": 3, "number": 12, "color": 2 }, "13": { "id": 13, "name": "减一", "type": 3, "number": 13, "color": 2 }, "14": { "id": 14, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "15": { "id": 15, "name": "闪", "type": 1, "number": 2, "color": 2 }, "16": { "id": 16, "name": "闪", "type": 1, "number": 3, "color": 2 }, "17": { "id": 17, "name": "闪", "type": 1, "number": 4, "color": 2 }, "18": { "id": 18, "name": "闪", "type": 1, "number": 5, "color": 2 }, "19": { "id": 19, "name": "闪", "type": 1, "number": 6, "color": 2 }, "20": { "id": 20, "name": "闪", "type": 1, "number": 7, "color": 2 }, "21": { "id": 21, "name": "闪", "type": 1, "number": 8, "color": 2 }, "22": { "id": 22, "name": "闪", "type": 1, "number": 9, "color": 2 }, "23": { "id": 23, "name": "闪", "type": 1, "number": 10, "color": 2 }, "24": { "id": 24, "name": "闪", "type": 1, "number": 11, "color": 2 }, "25": { "id": 25, "name": "桃", "type": 1, "number": 12, "color": 2 }, "26": { "id": 26, "name": "杀", "type": 1, "number": 13, "color": 2 }, "27": { "id": 27, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "28": { "id": 28, "name": "闪", "type": 1, "number": 2, "color": 1 }, "29": { "id": 29, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "30": { "id": 30, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "31": { "id": 31, "name": "减一", "type": 3, "number": 5, "color": 1 }, "32": { "id": 32, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "33": { "id": 33, "name": "无中", "type": 2, "number": 7, "color": 1 }, "34": { "id": 34, "name": "无中", "type": 2, "number": 8, "color": 1 }, "35": { "id": 35, "name": "无中", "type": 2, "number": 9, "color": 1 }, "36": { "id": 36, "name": "杀", "type": 1, "number": 10, "color": 1 }, "37": { "id": 37, "name": "无中", "type": 2, "number": 11, "color": 1 }, "38": { "id": 38, "name": "过河", "type": 2, "number": 12, "color": 1 }, "39": { "id": 39, "name": "闪", "type": 1, "number": 13, "color": 1 }, "40": { "id": 40, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "41": { "id": 41, "name": "闪", "type": 1, "number": 2, "color": 1 }, "42": { "id": 42, "name": "桃", "type": 1, "number": 3, "color": 1 }, "43": { "id": 43, "name": "桃", "type": 1, "number": 4, "color": 1 }, "44": { "id": 44, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "45": { "id": 45, "name": "桃", "type": 1, "number": 6, "color": 1 }, "46": { "id": 46, "name": "桃", "type": 1, "number": 7, "color": 1 }, "47": { "id": 47, "name": "桃", "type": 1, "number": 8, "color": 1 }, "48": { "id": 48, "name": "桃", "type": 1, "number": 9, "color": 1 }, "49": { "id": 49, "name": "杀", "type": 1, "number": 10, "color": 1 }, "50": { "id": 50, "name": "杀", "type": 1, "number": 11, "color": 1 }, "51": { "id": 51, "name": "桃", "type": 1, "number": 12, "color": 1 }, "52": { "id": 52, "name": "加一", "type": 3, "number": 13, "color": 1 }, "53": { "id": 53, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "54": { "id": 54, "name": "杀", "type": 1, "number": 2, "color": 4 }, "55": { "id": 55, "name": "杀", "type": 1, "number": 3, "color": 4 }, "56": { "id": 56, "name": "杀", "type": 1, "number": 4, "color": 4 }, "57": { "id": 57, "name": "杀", "type": 1, "number": 5, "color": 4 }, "58": { "id": 58, "name": "杀", "type": 1, "number": 6, "color": 4 }, "59": { "id": 59, "name": "杀", "type": 1, "number": 7, "color": 4 }, "60": { "id": 60, "name": "杀", "type": 1, "number": 8, "color": 4 }, "61": { "id": 61, "name": "杀", "type": 1, "number": 9, "color": 4 }, "62": { "id": 62, "name": "杀", "type": 1, "number": 10, "color": 4 }, "63": { "id": 63, "name": "杀", "type": 1, "number": 11, "color": 4 }, "64": { "id": 64, "name": "无懈", "type": 2, "number": 12, "color": 4 }, "65": { "id": 65, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "66": { "id": 66, "name": "诸葛", "type": 3, "number": 1, "color": 4 }, "67": { "id": 67, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "68": { "id": 68, "name": "过河", "type": 2, "number": 3, "color": 4 }, "69": { "id": 69, "name": "过河", "type": 2, "number": 4, "color": 4 }, "70": { "id": 70, "name": "加一", "type": 3, "number": 5, "color": 4 }, "71": { "id": 71, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "72": { "id": 72, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "73": { "id": 73, "name": "杀", "type": 1, "number": 8, "color": 4 }, "74": { "id": 74, "name": "杀", "type": 1, "number": 9, "color": 4 }, "75": { "id": 75, "name": "杀", "type": 1, "number": 10, "color": 4 }, "76": { "id": 76, "name": "杀", "type": 1, "number": 11, "color": 4 }, "77": { "id": 77, "name": "借刀", "type": 2, "number": 12, "color": 4 }, "78": { "id": 78, "name": "借刀", "type": 2, "number": 13, "color": 4 }, "79": { "id": 79, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "80": { "id": 80, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "81": { "id": 81, "name": "顺手", "type": 2, "number": 3, "color": 3 }, "82": { "id": 82, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "83": { "id": 83, "name": "加一", "type": 3, "number": 5, "color": 3 }, "84": { "id": 84, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "85": { "id": 85, "name": "杀", "type": 1, "number": 7, "color": 3 }, "86": { "id": 86, "name": "杀", "type": 1, "number": 8, "color": 3 }, "87": { "id": 87, "name": "杀", "type": 1, "number": 9, "color": 3 }, "88": { "id": 88, "name": "杀", "type": 1, "number": 10, "color": 3 }, "89": { "id": 89, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "90": { "id": 90, "name": "过河", "type": 2, "number": 12, "color": 3 }, "91": { "id": 91, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "92": { "id": 92, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "93": { "id": 93, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "94": { "id": 94, "name": "过河", "type": 2, "number": 3, "color": 3 }, "95": { "id": 95, "name": "过河", "type": 2, "number": 4, "color": 3 }, "96": { "id": 96, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "97": { "id": 97, "name": "乐不", "type": 2, "number": 6, "color": 3 }, "98": { "id": 98, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "99": { "id": 99, "name": "杀", "type": 1, "number": 8, "color": 3 }, "100": { "id": 100, "name": "杀", "type": 1, "number": 9, "color": 3 }, "101": { "id": 101, "name": "杀", "type": 1, "number": 10, "color": 3 }, "102": { "id": 102, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "103": { "id": 103, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "104": { "id": 104, "name": "减一", "type": 3, "number": 13, "color": 3 }, "105": { "id": 105, "name": "闪电", "type": 2, "number": 12, "color": 1 }, "106": { "id": 106, "name": "无懈", "type": 2, "number": 12, "color": 2 }, "107": { "id": 107, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "108": { "id": 108, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "109": { "id": 109, "name": "无懈", "type": 2, "number": 1, "color": 1 }, "110": { "id": 110, "name": "火攻", "type": 2, "number": 2, "color": 1 }, "111": { "id": 111, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "112": { "id": 112, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "113": { "id": 113, "name": "桃", "type": 1, "number": 5, "color": 1 }, "114": { "id": 114, "name": "桃", "type": 1, "number": 6, "color": 1 }, "115": { "id": 115, "name": "火杀", "type": 1, "number": 7, "color": 1 }, "116": { "id": 116, "name": "闪", "type": 1, "number": 8, "color": 1 }, "117": { "id": 117, "name": "闪", "type": 1, "number": 9, "color": 1 }, "118": { "id": 118, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "119": { "id": 119, "name": "闪", "type": 1, "number": 11, "color": 1 }, "120": { "id": 120, "name": "闪", "type": 1, "number": 12, "color": 1 }, "121": { "id": 121, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "122": { "id": 122, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "123": { "id": 123, "name": "桃", "type": 1, "number": 2, "color": 2 }, "124": { "id": 124, "name": "桃", "type": 1, "number": 3, "color": 2 }, "125": { "id": 125, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "126": { "id": 126, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "127": { "id": 127, "name": "闪", "type": 1, "number": 6, "color": 2 }, "128": { "id": 128, "name": "闪", "type": 1, "number": 7, "color": 2 }, "129": { "id": 129, "name": "闪", "type": 1, "number": 8, "color": 2 }, "130": { "id": 130, "name": "酒", "type": 1, "number": 9, "color": 2 }, "131": { "id": 131, "name": "闪", "type": 1, "number": 10, "color": 2 }, "132": { "id": 132, "name": "闪", "type": 1, "number": 11, "color": 2 }, "133": { "id": 133, "name": "火攻", "type": 2, "number": 12, "color": 2 }, "134": { "id": 134, "name": "加一", "type": 3, "number": 13, "color": 2 }, "135": { "id": 135, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "136": { "id": 136, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "137": { "id": 137, "name": "酒", "type": 1, "number": 3, "color": 3 }, "138": { "id": 138, "name": "雷杀", "type": 1, "number": 4, "color": 3 }, "139": { "id": 139, "name": "雷杀", "type": 1, "number": 5, "color": 3 }, "140": { "id": 140, "name": "雷杀", "type": 1, "number": 6, "color": 3 }, "141": { "id": 141, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "142": { "id": 142, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "143": { "id": 143, "name": "酒", "type": 1, "number": 9, "color": 3 }, "144": { "id": 144, "name": "兵粮", "type": 2, "number": 10, "color": 3 }, "145": { "id": 145, "name": "铁索", "type": 2, "number": 11, "color": 3 }, "146": { "id": 146, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "147": { "id": 147, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "148": { "id": 148, "name": "白银", "type": 3, "number": 1, "color": 4 }, "149": { "id": 149, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "150": { "id": 150, "name": "酒", "type": 1, "number": 3, "color": 4 }, "151": { "id": 151, "name": "兵粮", "type": 2, "number": 4, "color": 4 }, "152": { "id": 152, "name": "雷杀", "type": 1, "number": 5, "color": 4 }, "153": { "id": 153, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "154": { "id": 154, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "155": { "id": 155, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "156": { "id": 156, "name": "酒", "type": 1, "number": 9, "color": 4 }, "157": { "id": 157, "name": "铁索", "type": 2, "number": 10, "color": 4 }, "158": { "id": 158, "name": "铁索", "type": 2, "number": 11, "color": 4 }, "159": { "id": 159, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "160": { "id": 160, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "161": { "id": 161, "name": "木牛", "type": 3, "number": 5, "color": 2 }, "162": { "id": 162, "name": "声东", "type": 2, "number": 3, "color": 3 }, "163": { "id": 163, "name": "声东", "type": 2, "number": 4, "color": 3 }, "164": { "id": 164, "name": "声东", "type": 2, "number": 11, "color": 3 }, "165": { "id": 165, "name": "声东", "type": 2, "number": 3, "color": 2 }, "166": { "id": 166, "name": "声东", "type": 2, "number": 4, "color": 2 }, "167": { "id": 167, "name": "增兵", "type": 2, "number": 3, "color": 1 }, "168": { "id": 168, "name": "增兵", "type": 2, "number": 4, "color": 1 }, "169": { "id": 169, "name": "增兵", "type": 2, "number": 7, "color": 1 }, "170": { "id": 170, "name": "增兵", "type": 2, "number": 8, "color": 1 }, "171": { "id": 171, "name": "增兵", "type": 2, "number": 9, "color": 1 }, "172": { "id": 172, "name": "增兵", "type": 2, "number": 11, "color": 1 }, "173": { "id": 173, "name": "草木", "type": 2, "number": 10, "color": 3 }, "174": { "id": 174, "name": "草木", "type": 2, "number": 4, "color": 4 }, "175": { "id": 175, "name": "毒", "type": 1, "number": 9, "color": 2 }, "176": { "id": 176, "name": "毒", "type": 1, "number": 3, "color": 3 }, "177": { "id": 177, "name": "毒", "type": 1, "number": 9, "color": 3 }, "178": { "id": 178, "name": "毒", "type": 1, "number": 3, "color": 4 }, "179": { "id": 179, "name": "毒", "type": 1, "number": 9, "color": 4 }, "180": { "id": 180, "name": "毒", "type": 1, "number": 5, "color": 2 }, "181": { "id": 181, "name": "唯我", "type": 2, "number": 1, "color": 4 }, "182": { "id": 182, "name": "唯我", "type": 2, "number": 1, "color": 2 }, "183": { "id": 183, "name": "毒", "type": 1, "number": 8, "color": 4 }, "184": { "id": 184, "name": "毒", "type": 1, "number": 11, "color": 2 }, "185": { "id": 185, "name": "弃甲", "type": 2, "number": 12, "color": 4 }, "186": { "id": 186, "name": "弃甲", "type": 2, "number": 13, "color": 4 }, "187": { "id": 187, "name": "金蝉", "type": 2, "number": 12, "color": 4 }, "188": { "id": 188, "name": "金蝉", "type": 2, "number": 13, "color": 4 }, "189": { "id": 189, "name": "金蝉", "type": 2, "number": 11, "color": 3 }, "190": { "id": 190, "name": "金蝉", "type": 2, "number": 12, "color": 2 }, "191": { "id": 191, "name": "金蝉", "type": 2, "number": 1, "color": 1 }, "192": { "id": 192, "name": "金蝉", "type": 2, "number": 13, "color": 1 }, "193": { "id": 193, "name": "金蝉", "type": 2, "number": 13, "color": 3 }, "194": { "id": 194, "name": "浮雷", "type": 2, "number": 1, "color": 3 }, "195": { "id": 195, "name": "浮雷", "type": 2, "number": 12, "color": 1 }, "196": { "id": 196, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "197": { "id": 197, "name": "衠钢", "type": 3, "number": 5, "color": 3 }, "198": { "id": 198, "name": "烂银", "type": 3, "number": 2, "color": 4 }, "199": { "id": 199, "name": "烂银", "type": 3, "number": 2, "color": 3 }, "200": { "id": 200, "name": "洪荒", "type": 2, "number": 1, "color": 3 }, "201": { "id": 201, "name": "洪荒", "type": 2, "number": 12, "color": 1 }, "300": { "id": 300, "name": "同舟", "type": 2, "number": 9, "color": 1 }, "301": { "id": 301, "name": "同舟", "type": 2, "number": 8, "color": 1 }, "302": { "id": 302, "name": "同舟", "type": 2, "number": 7, "color": 1 }, "303": { "id": 303, "name": "力争", "type": 2, "number": 10, "color": 1 }, "304": { "id": 304, "name": "力争", "type": 2, "number": 11, "color": 1 }, "305": { "id": 305, "name": "力争", "type": 2, "number": 12, "color": 1 }, "312": { "id": 312, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "313": { "id": 313, "name": "国风", "type": 3, "number": 9, "color": 3 }, "314": { "id": 314, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "315": { "id": 315, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "316": { "id": 316, "name": "奇门", "type": 3, "number": 2, "color": 4 }, "317": { "id": 317, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "318": { "id": 318, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "319": { "id": 319, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "320": { "id": 320, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "321": { "id": 321, "name": "撒豆", "type": 2, "number": 7, "color": 1 }, "322": { "id": 322, "name": "撒豆", "type": 2, "number": 8, "color": 1 }, "323": { "id": 323, "name": "撒豆", "type": 2, "number": 9, "color": 1 }, "324": { "id": 324, "name": "撒豆", "type": 2, "number": 11, "color": 1 }, "325": { "id": 325, "name": "移花", "type": 2, "number": 12, "color": 4 }, "326": { "id": 326, "name": "移花", "type": 2, "number": 13, "color": 4 }, "327": { "id": 327, "name": "粽", "type": 1, "number": 12, "color": 2 }, "328": { "id": 328, "name": "粽", "type": 1, "number": 3, "color": 1 }, "329": { "id": 329, "name": "粽", "type": 1, "number": 4, "color": 1 }, "330": { "id": 330, "name": "粽", "type": 1, "number": 6, "color": 1 }, "331": { "id": 331, "name": "粽", "type": 1, "number": 7, "color": 1 }, "332": { "id": 332, "name": "粽", "type": 1, "number": 8, "color": 1 }, "333": { "id": 333, "name": "粽", "type": 1, "number": 9, "color": 1 }, "334": { "id": 334, "name": "粽", "type": 1, "number": 12, "color": 1 }, "335": { "id": 335, "name": "粽", "type": 1, "number": 5, "color": 1 }, "336": { "id": 336, "name": "粽", "type": 1, "number": 6, "color": 1 }, "337": { "id": 337, "name": "粽", "type": 1, "number": 2, "color": 2 }, "338": { "id": 338, "name": "粽", "type": 1, "number": 3, "color": 2 }, "339": { "id": 339, "name": "雄黄", "type": 1, "number": 9, "color": 2 }, "340": { "id": 340, "name": "雄黄", "type": 1, "number": 3, "color": 3 }, "341": { "id": 341, "name": "雄黄", "type": 1, "number": 9, "color": 3 }, "342": { "id": 342, "name": "雄黄", "type": 1, "number": 3, "color": 4 }, "343": { "id": 343, "name": "雄黄", "type": 1, "number": 9, "color": 4 }, "1001": { "id": 1001, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "1002": { "id": 1002, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "1003": { "id": 1003, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "1004": { "id": 1004, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "1005": { "id": 1005, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "1006": { "id": 1006, "name": "顺手", "type": 2, "number": 3, "color": 3 }, "1007": { "id": 1007, "name": "过河", "type": 2, "number": 3, "color": 3 }, "1008": { "id": 1008, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "1009": { "id": 1009, "name": "过河", "type": 2, "number": 4, "color": 3 }, "1010": { "id": 1010, "name": "加一", "type": 3, "number": 5, "color": 3 }, "1011": { "id": 1011, "name": "杀", "type": 1, "number": 5, "color": 3 }, "1012": { "id": 1012, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "1013": { "id": 1013, "name": "雷杀", "type": 1, "number": 6, "color": 3 }, "1014": { "id": 1014, "name": "杀", "type": 1, "number": 7, "color": 3 }, "1015": { "id": 1015, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "1016": { "id": 1016, "name": "杀", "type": 1, "number": 8, "color": 3 }, "1017": { "id": 1017, "name": "杀", "type": 1, "number": 8, "color": 3 }, "1018": { "id": 1018, "name": "酒", "type": 1, "number": 9, "color": 3 }, "1019": { "id": 1019, "name": "杀", "type": 1, "number": 9, "color": 3 }, "1020": { "id": 1020, "name": "杀", "type": 1, "number": 10, "color": 3 }, "1021": { "id": 1021, "name": "兵粮", "type": 2, "number": 10, "color": 3 }, "1022": { "id": 1022, "name": "杀", "type": 1, "number": 11, "color": 3 }, "1023": { "id": 1023, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "1024": { "id": 1024, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "1025": { "id": 1025, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "1026": { "id": 1026, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "1027": { "id": 1027, "name": "减一", "type": 3, "number": 13, "color": 3 }, "1028": { "id": 1028, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "1029": { "id": 1029, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "1030": { "id": 1030, "name": "闪", "type": 1, "number": 2, "color": 1 }, "1031": { "id": 1031, "name": "火攻", "type": 2, "number": 2, "color": 1 }, "1032": { "id": 1032, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "1033": { "id": 1033, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "1034": { "id": 1034, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "1035": { "id": 1035, "name": "桃", "type": 1, "number": 4, "color": 1 }, "1036": { "id": 1036, "name": "减一", "type": 3, "number": 5, "color": 1 }, "1037": { "id": 1037, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "1038": { "id": 1038, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "1039": { "id": 1039, "name": "桃", "type": 1, "number": 6, "color": 1 }, "1040": { "id": 1040, "name": "无中", "type": 2, "number": 7, "color": 1 }, "1041": { "id": 1041, "name": "桃", "type": 1, "number": 7, "color": 1 }, "1042": { "id": 1042, "name": "无中", "type": 2, "number": 8, "color": 1 }, "1043": { "id": 1043, "name": "桃", "type": 1, "number": 8, "color": 1 }, "1044": { "id": 1044, "name": "远交", "type": 2, "number": 9, "color": 1 }, "1045": { "id": 1045, "name": "桃", "type": 1, "number": 9, "color": 1 }, "1046": { "id": 1046, "name": "杀", "type": 1, "number": 10, "color": 1 }, "1047": { "id": 1047, "name": "桃", "type": 1, "number": 10, "color": 1 }, "1048": { "id": 1048, "name": "以逸", "type": 2, "number": 11, "color": 1 }, "1049": { "id": 1049, "name": "闪", "type": 1, "number": 11, "color": 1 }, "1050": { "id": 1050, "name": "杀", "type": 1, "number": 12, "color": 1 }, "1051": { "id": 1051, "name": "桃", "type": 1, "number": 12, "color": 1 }, "1052": { "id": 1052, "name": "过河", "type": 2, "number": 12, "color": 1 }, "1053": { "id": 1053, "name": "闪", "type": 1, "number": 13, "color": 1 }, "1054": { "id": 1054, "name": "加一", "type": 3, "number": 13, "color": 1 }, "1055": { "id": 1055, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "1056": { "id": 1056, "name": "白银", "type": 3, "number": 1, "color": 4 }, "1057": { "id": 1057, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "1058": { "id": 1058, "name": "杀", "type": 1, "number": 2, "color": 4 }, "1059": { "id": 1059, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "1060": { "id": 1060, "name": "杀", "type": 1, "number": 3, "color": 4 }, "1061": { "id": 1061, "name": "知己", "type": 2, "number": 3, "color": 4 }, "1062": { "id": 1062, "name": "杀", "type": 1, "number": 4, "color": 4 }, "1063": { "id": 1063, "name": "知己", "type": 2, "number": 4, "color": 4 }, "1064": { "id": 1064, "name": "杀", "type": 1, "number": 5, "color": 4 }, "1065": { "id": 1065, "name": "加一", "type": 3, "number": 5, "color": 4 }, "1066": { "id": 1066, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "1067": { "id": 1067, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "1068": { "id": 1068, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "1069": { "id": 1069, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "1070": { "id": 1070, "name": "杀", "type": 1, "number": 8, "color": 4 }, "1071": { "id": 1071, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "1072": { "id": 1072, "name": "酒", "type": 1, "number": 9, "color": 4 }, "1073": { "id": 1073, "name": "杀", "type": 1, "number": 9, "color": 4 }, "1074": { "id": 1074, "name": "兵粮", "type": 2, "number": 10, "color": 4 }, "1075": { "id": 1075, "name": "杀", "type": 1, "number": 10, "color": 4 }, "1076": { "id": 1076, "name": "杀", "type": 1, "number": 11, "color": 4 }, "1077": { "id": 1077, "name": "杀", "type": 1, "number": 11, "color": 4 }, "1078": { "id": 1078, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "1079": { "id": 1079, "name": "借刀", "type": 2, "number": 12, "color": 4 }, "1080": { "id": 1080, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "1081": { "id": 1081, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "1082": { "id": 1082, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "1083": { "id": 1083, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "1084": { "id": 1084, "name": "桃", "type": 1, "number": 2, "color": 2 }, "1085": { "id": 1085, "name": "闪", "type": 1, "number": 2, "color": 2 }, "1086": { "id": 1086, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "1087": { "id": 1087, "name": "闪", "type": 1, "number": 3, "color": 2 }, "1088": { "id": 1088, "name": "以逸", "type": 2, "number": 4, "color": 2 }, "1089": { "id": 1089, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "1090": { "id": 1090, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "1091": { "id": 1091, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "1092": { "id": 1092, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "1093": { "id": 1093, "name": "闪", "type": 1, "number": 6, "color": 2 }, "1094": { "id": 1094, "name": "闪", "type": 1, "number": 7, "color": 2 }, "1095": { "id": 1095, "name": "闪", "type": 1, "number": 7, "color": 2 }, "1096": { "id": 1096, "name": "闪", "type": 1, "number": 8, "color": 2 }, "1097": { "id": 1097, "name": "闪", "type": 1, "number": 8, "color": 2 }, "1098": { "id": 1098, "name": "酒", "type": 1, "number": 9, "color": 2 }, "1099": { "id": 1099, "name": "闪", "type": 1, "number": 9, "color": 2 }, "1100": { "id": 1100, "name": "杀", "type": 1, "number": 10, "color": 2 }, "1101": { "id": 1101, "name": "闪", "type": 1, "number": 10, "color": 2 }, "1102": { "id": 1102, "name": "杀", "type": 1, "number": 11, "color": 2 }, "1103": { "id": 1103, "name": "闪", "type": 1, "number": 11, "color": 2 }, "1104": { "id": 1104, "name": "杀", "type": 1, "number": 12, "color": 2 }, "1105": { "id": 1105, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "1106": { "id": 1106, "name": "无懈", "type": 2, "number": 12, "color": 2 }, "1107": { "id": 1107, "name": "减一", "type": 3, "number": 13, "color": 2 }, "1108": { "id": 1108, "name": "闪", "type": 1, "number": 13, "color": 2 }, "1109": { "id": 1109, "name": "联军", "type": 2, "number": 1, "color": 1 }, "1110": { "id": 1110, "name": "调虎", "type": 2, "number": 2, "color": 1 }, "1111": { "id": 1111, "name": "惊帆", "type": 3, "number": 3, "color": 1 }, "1112": { "id": 1112, "name": "闪", "type": 1, "number": 4, "color": 1 }, "1113": { "id": 1113, "name": "闪", "type": 1, "number": 5, "color": 1 }, "1114": { "id": 1114, "name": "闪", "type": 1, "number": 6, "color": 1 }, "1115": { "id": 1115, "name": "闪", "type": 1, "number": 7, "color": 1 }, "1116": { "id": 1116, "name": "桃", "type": 1, "number": 8, "color": 1 }, "1117": { "id": 1117, "name": "桃", "type": 1, "number": 9, "color": 1 }, "1118": { "id": 1118, "name": "杀", "type": 1, "number": 10, "color": 1 }, "1119": { "id": 1119, "name": "杀", "type": 1, "number": 11, "color": 1 }, "1120": { "id": 1120, "name": "火烧", "type": 2, "number": 12, "color": 1 }, "1121": { "id": 1121, "name": "水淹", "type": 2, "number": 13, "color": 1 }, "1122": { "id": 1122, "name": "挟天", "type": 2, "number": 1, "color": 2 }, "1123": { "id": 1123, "name": "桃", "type": 1, "number": 2, "color": 2 }, "1124": { "id": 1124, "name": "桃", "type": 1, "number": 3, "color": 2 }, "1125": { "id": 1125, "name": "挟天", "type": 2, "number": 4, "color": 2 }, "1126": { "id": 1126, "name": "木牛", "type": 3, "number": 5, "color": 2 }, "1127": { "id": 1127, "name": "闪", "type": 1, "number": 6, "color": 2 }, "1128": { "id": 1128, "name": "闪", "type": 1, "number": 7, "color": 2 }, "1129": { "id": 1129, "name": "火杀", "type": 1, "number": 8, "color": 2 }, "1130": { "id": 1130, "name": "火杀", "type": 1, "number": 9, "color": 2 }, "1131": { "id": 1131, "name": "调虎", "type": 2, "number": 10, "color": 2 }, "1132": { "id": 1132, "name": "无懈", "type": 2, "number": 11, "color": 2 }, "1133": { "id": 1133, "name": "方天", "type": 3, "number": 12, "color": 2 }, "1134": { "id": 1134, "name": "闪", "type": 1, "number": 13, "color": 2 }, "1135": { "id": 1135, "name": "挟天", "type": 2, "number": 1, "color": 3 }, "1136": { "id": 1136, "name": "明光", "type": 3, "number": 2, "color": 3 }, "1137": { "id": 1137, "name": "火烧", "type": 2, "number": 3, "color": 3 }, "1138": { "id": 1138, "name": "杀", "type": 1, "number": 4, "color": 3 }, "1139": { "id": 1139, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "1140": { "id": 1140, "name": "酒", "type": 1, "number": 6, "color": 3 }, "1141": { "id": 1141, "name": "杀", "type": 1, "number": 7, "color": 3 }, "1142": { "id": 1142, "name": "杀", "type": 1, "number": 8, "color": 3 }, "1143": { "id": 1143, "name": "雷杀", "type": 1, "number": 9, "color": 3 }, "1144": { "id": 1144, "name": "雷杀", "type": 1, "number": 10, "color": 3 }, "1145": { "id": 1145, "name": "雷杀", "type": 1, "number": 11, "color": 3 }, "1146": { "id": 1146, "name": "勠力", "type": 2, "number": 12, "color": 3 }, "1147": { "id": 1147, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "1148": { "id": 1148, "name": "玉玺", "type": 3, "number": 1, "color": 4 }, "1149": { "id": 1149, "name": "护心", "type": 3, "number": 2, "color": 4 }, "1150": { "id": 1150, "name": "敕令", "type": 2, "number": 3, "color": 4 }, "1151": { "id": 1151, "name": "杀", "type": 1, "number": 4, "color": 4 }, "1152": { "id": 1152, "name": "雷杀", "type": 1, "number": 5, "color": 4 }, "1153": { "id": 1153, "name": "杀", "type": 1, "number": 6, "color": 4 }, "1154": { "id": 1154, "name": "杀", "type": 1, "number": 7, "color": 4 }, "1155": { "id": 1155, "name": "杀", "type": 1, "number": 8, "color": 4 }, "1156": { "id": 1156, "name": "酒", "type": 1, "number": 9, "color": 4 }, "1157": { "id": 1157, "name": "勠力", "type": 2, "number": 10, "color": 4 }, "1158": { "id": 1158, "name": "火烧", "type": 2, "number": 11, "color": 4 }, "1159": { "id": 1159, "name": "水淹", "type": 2, "number": 12, "color": 4 }, "1160": { "id": 1160, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "1200": { "id": 1200, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "1201": { "id": 1201, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "1202": { "id": 1202, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "1203": { "id": 1203, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "1204": { "id": 1204, "name": "过河", "type": 2, "number": 4, "color": 3 }, "1205": { "id": 1205, "name": "加一", "type": 3, "number": 5, "color": 3 }, "1206": { "id": 1206, "name": "杀", "type": 1, "number": 5, "color": 3 }, "1207": { "id": 1207, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "1208": { "id": 1208, "name": "杀", "type": 1, "number": 7, "color": 3 }, "1209": { "id": 1209, "name": "酒", "type": 1, "number": 9, "color": 3 }, "1210": { "id": 1210, "name": "杀", "type": 1, "number": 9, "color": 3 }, "1211": { "id": 1211, "name": "兵粮", "type": 2, "number": 10, "color": 3 }, "1212": { "id": 1212, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "1213": { "id": 1213, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "1214": { "id": 1214, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "1215": { "id": 1215, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "1216": { "id": 1216, "name": "闪", "type": 1, "number": 2, "color": 1 }, "1217": { "id": 1217, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "1218": { "id": 1218, "name": "桃", "type": 1, "number": 4, "color": 1 }, "1219": { "id": 1219, "name": "减一", "type": 3, "number": 5, "color": 1 }, "1220": { "id": 1220, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "1221": { "id": 1221, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "1222": { "id": 1222, "name": "桃", "type": 1, "number": 6, "color": 1 }, "1223": { "id": 1223, "name": "桃", "type": 1, "number": 7, "color": 1 }, "1224": { "id": 1224, "name": "桃", "type": 1, "number": 8, "color": 1 }, "1225": { "id": 1225, "name": "远交", "type": 2, "number": 9, "color": 1 }, "1226": { "id": 1226, "name": "桃", "type": 1, "number": 9, "color": 1 }, "1227": { "id": 1227, "name": "杀", "type": 1, "number": 10, "color": 1 }, "1228": { "id": 1228, "name": "桃", "type": 1, "number": 10, "color": 1 }, "1229": { "id": 1229, "name": "以逸", "type": 2, "number": 11, "color": 1 }, "1230": { "id": 1230, "name": "闪", "type": 1, "number": 11, "color": 1 }, "1231": { "id": 1231, "name": "杀", "type": 1, "number": 12, "color": 1 }, "1232": { "id": 1232, "name": "桃", "type": 1, "number": 12, "color": 1 }, "1233": { "id": 1233, "name": "过河", "type": 2, "number": 12, "color": 1 }, "1234": { "id": 1234, "name": "闪", "type": 1, "number": 13, "color": 1 }, "1235": { "id": 1235, "name": "加一", "type": 3, "number": 13, "color": 1 }, "1236": { "id": 1236, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "1237": { "id": 1237, "name": "杀", "type": 1, "number": 2, "color": 4 }, "1238": { "id": 1238, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "1239": { "id": 1239, "name": "杀", "type": 1, "number": 3, "color": 4 }, "1240": { "id": 1240, "name": "知己", "type": 2, "number": 3, "color": 4 }, "1241": { "id": 1241, "name": "知己", "type": 2, "number": 4, "color": 4 }, "1242": { "id": 1242, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "1243": { "id": 1243, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "1244": { "id": 1244, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "1245": { "id": 1245, "name": "杀", "type": 1, "number": 8, "color": 4 }, "1246": { "id": 1246, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "1247": { "id": 1247, "name": "酒", "type": 1, "number": 9, "color": 4 }, "1248": { "id": 1248, "name": "杀", "type": 1, "number": 9, "color": 4 }, "1249": { "id": 1249, "name": "兵粮", "type": 2, "number": 10, "color": 4 }, "1250": { "id": 1250, "name": "杀", "type": 1, "number": 10, "color": 4 }, "1251": { "id": 1251, "name": "杀", "type": 1, "number": 11, "color": 4 }, "1252": { "id": 1252, "name": "杀", "type": 1, "number": 11, "color": 4 }, "1253": { "id": 1253, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "1254": { "id": 1254, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "1255": { "id": 1255, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "1256": { "id": 1256, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "1257": { "id": 1257, "name": "桃", "type": 1, "number": 2, "color": 2 }, "1258": { "id": 1258, "name": "闪", "type": 1, "number": 2, "color": 2 }, "1259": { "id": 1259, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "1260": { "id": 1260, "name": "闪", "type": 1, "number": 3, "color": 2 }, "1261": { "id": 1261, "name": "以逸", "type": 2, "number": 4, "color": 2 }, "1262": { "id": 1262, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "1263": { "id": 1263, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "1264": { "id": 1264, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "1265": { "id": 1265, "name": "闪", "type": 1, "number": 6, "color": 2 }, "1266": { "id": 1266, "name": "酒", "type": 1, "number": 9, "color": 2 }, "1267": { "id": 1267, "name": "闪", "type": 1, "number": 9, "color": 2 }, "1268": { "id": 1268, "name": "杀", "type": 1, "number": 10, "color": 2 }, "1269": { "id": 1269, "name": "闪", "type": 1, "number": 10, "color": 2 }, "1270": { "id": 1270, "name": "杀", "type": 1, "number": 11, "color": 2 }, "1271": { "id": 1271, "name": "闪", "type": 1, "number": 11, "color": 2 }, "1272": { "id": 1272, "name": "杀", "type": 1, "number": 12, "color": 2 }, "1273": { "id": 1273, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "1274": { "id": 1274, "name": "无懈", "type": 2, "number": 12, "color": 2 }, "1275": { "id": 1275, "name": "减一", "type": 3, "number": 13, "color": 2 }, "1276": { "id": 1276, "name": "闪", "type": 1, "number": 13, "color": 2 }, "1277": { "id": 1277, "name": "水淹", "type": 2, "number": 3, "color": 3 }, "1278": { "id": 1278, "name": "水淹", "type": 2, "number": 4, "color": 3 }, "1279": { "id": 1279, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "1280": { "id": 1280, "name": "杀", "type": 1, "number": 10, "color": 3 }, "1281": { "id": 1281, "name": "杀", "type": 1, "number": 11, "color": 3 }, "1282": { "id": 1282, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "1283": { "id": 1283, "name": "逐近", "type": 2, "number": 3, "color": 3 }, "1284": { "id": 1284, "name": "冰杀", "type": 1, "number": 6, "color": 3 }, "1285": { "id": 1285, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "1286": { "id": 1286, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "1287": { "id": 1287, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "1288": { "id": 1288, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "1289": { "id": 1289, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "1290": { "id": 1290, "name": "洞烛", "type": 2, "number": 7, "color": 1 }, "1291": { "id": 1291, "name": "洞烛", "type": 2, "number": 8, "color": 1 }, "1292": { "id": 1292, "name": "出其", "type": 2, "number": 2, "color": 1 }, "1293": { "id": 1293, "name": "出其", "type": 2, "number": 3, "color": 1 }, "1294": { "id": 1294, "name": "太公", "type": 3, "number": 2, "color": 3 }, "1295": { "id": 1295, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "1296": { "id": 1296, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "1297": { "id": 1297, "name": "杀", "type": 1, "number": 4, "color": 4 }, "1298": { "id": 1298, "name": "杀", "type": 1, "number": 5, "color": 4 }, "1299": { "id": 1299, "name": "护心", "type": 3, "number": 1, "color": 4 }, "1300": { "id": 1300, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "1301": { "id": 1301, "name": "逐近", "type": 2, "number": 12, "color": 4 }, "1302": { "id": 1302, "name": "五行", "type": 3, "number": 1, "color": 2 }, "1303": { "id": 1303, "name": "闪", "type": 1, "number": 7, "color": 2 }, "1304": { "id": 1304, "name": "闪", "type": 1, "number": 7, "color": 2 }, "1305": { "id": 1305, "name": "闪", "type": 1, "number": 8, "color": 2 }, "1306": { "id": 1306, "name": "闪", "type": 1, "number": 8, "color": 2 }, "1307": { "id": 1307, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "2001": { "id": 2001, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "2002": { "id": 2002, "name": "闪", "type": 1, "number": 2, "color": 1 }, "2003": { "id": 2003, "name": "桃", "type": 1, "number": 3, "color": 1 }, "2004": { "id": 2004, "name": "桃", "type": 1, "number": 4, "color": 1 }, "2005": { "id": 2005, "name": "闪", "type": 1, "number": 5, "color": 1 }, "2006": { "id": 2006, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "2007": { "id": 2007, "name": "无中", "type": 2, "number": 7, "color": 1 }, "2008": { "id": 2008, "name": "无中", "type": 2, "number": 8, "color": 1 }, "2009": { "id": 2009, "name": "桃", "type": 1, "number": 9, "color": 1 }, "2010": { "id": 2010, "name": "杀", "type": 1, "number": 10, "color": 1 }, "2011": { "id": 2011, "name": "杀", "type": 1, "number": 11, "color": 1 }, "2012": { "id": 2012, "name": "过河", "type": 2, "number": 12, "color": 1 }, "2013": { "id": 2013, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "2014": { "id": 2014, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "2015": { "id": 2015, "name": "闪", "type": 1, "number": 2, "color": 2 }, "2016": { "id": 2016, "name": "闪", "type": 1, "number": 3, "color": 2 }, "2017": { "id": 2017, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "2018": { "id": 2018, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "2019": { "id": 2019, "name": "杀", "type": 1, "number": 6, "color": 2 }, "2020": { "id": 2020, "name": "闪", "type": 1, "number": 7, "color": 2 }, "2021": { "id": 2021, "name": "闪", "type": 1, "number": 8, "color": 2 }, "2022": { "id": 2022, "name": "杀", "type": 1, "number": 9, "color": 2 }, "2023": { "id": 2023, "name": "闪", "type": 1, "number": 10, "color": 2 }, "2024": { "id": 2024, "name": "闪", "type": 1, "number": 11, "color": 2 }, "2025": { "id": 2025, "name": "桃", "type": 1, "number": 12, "color": 2 }, "2026": { "id": 2026, "name": "杀", "type": 1, "number": 13, "color": 2 }, "2027": { "id": 2027, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "2028": { "id": 2028, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "2029": { "id": 2029, "name": "过河", "type": 2, "number": 3, "color": 3 }, "2030": { "id": 2030, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "2031": { "id": 2031, "name": "杀", "type": 1, "number": 5, "color": 3 }, "2032": { "id": 2032, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "2033": { "id": 2033, "name": "杀", "type": 1, "number": 7, "color": 3 }, "2034": { "id": 2034, "name": "杀", "type": 1, "number": 8, "color": 3 }, "2035": { "id": 2035, "name": "寒冰", "type": 3, "number": 9, "color": 3 }, "2036": { "id": 2036, "name": "杀", "type": 1, "number": 10, "color": 3 }, "2037": { "id": 2037, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "2038": { "id": 2038, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "2039": { "id": 2039, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "2040": { "id": 2040, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "2041": { "id": 2041, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "2042": { "id": 2042, "name": "过河", "type": 2, "number": 3, "color": 4 }, "2043": { "id": 2043, "name": "杀", "type": 1, "number": 4, "color": 4 }, "2044": { "id": 2044, "name": "杀", "type": 1, "number": 5, "color": 4 }, "2045": { "id": 2045, "name": "杀", "type": 1, "number": 6, "color": 4 }, "2046": { "id": 2046, "name": "水淹", "type": 2, "number": 7, "color": 4 }, "2047": { "id": 2047, "name": "杀", "type": 1, "number": 8, "color": 4 }, "2048": { "id": 2048, "name": "杀", "type": 1, "number": 9, "color": 4 }, "2049": { "id": 2049, "name": "杀", "type": 1, "number": 10, "color": 4 }, "2050": { "id": 2050, "name": "杀", "type": 1, "number": 11, "color": 4 }, "2051": { "id": 2051, "name": "兵粮", "type": 2, "number": 12, "color": 4 }, "2052": { "id": 2052, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "3001": { "id": 3001, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "3002": { "id": 3002, "name": "闪", "type": 1, "number": 2, "color": 2 }, "3003": { "id": 3003, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "3004": { "id": 3004, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "3005": { "id": 3005, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "3006": { "id": 3006, "name": "杀", "type": 1, "number": 6, "color": 2 }, "3007": { "id": 3007, "name": "杀", "type": 1, "number": 7, "color": 2 }, "3008": { "id": 3008, "name": "杀", "type": 1, "number": 8, "color": 2 }, "3009": { "id": 3009, "name": "杀", "type": 1, "number": 9, "color": 2 }, "3010": { "id": 3010, "name": "杀", "type": 1, "number": 10, "color": 2 }, "3011": { "id": 3011, "name": "闪", "type": 1, "number": 11, "color": 2 }, "3012": { "id": 3012, "name": "方天", "type": 3, "number": 12, "color": 2 }, "3013": { "id": 3013, "name": "减一", "type": 3, "number": 13, "color": 2 }, "3014": { "id": 3014, "name": "连弩", "type": 3, "number": 1, "color": 2 }, "3015": { "id": 3015, "name": "闪", "type": 1, "number": 2, "color": 2 }, "3016": { "id": 3016, "name": "闪", "type": 1, "number": 3, "color": 2 }, "3017": { "id": 3017, "name": "闪", "type": 1, "number": 4, "color": 2 }, "3018": { "id": 3018, "name": "闪", "type": 1, "number": 5, "color": 2 }, "3019": { "id": 3019, "name": "闪", "type": 1, "number": 6, "color": 2 }, "3020": { "id": 3020, "name": "闪", "type": 1, "number": 7, "color": 2 }, "3021": { "id": 3021, "name": "闪", "type": 1, "number": 8, "color": 2 }, "3022": { "id": 3022, "name": "闪", "type": 1, "number": 9, "color": 2 }, "3023": { "id": 3023, "name": "闪", "type": 1, "number": 10, "color": 2 }, "3024": { "id": 3024, "name": "闪", "type": 1, "number": 11, "color": 2 }, "3025": { "id": 3025, "name": "桃", "type": 1, "number": 12, "color": 2 }, "3026": { "id": 3026, "name": "杀", "type": 1, "number": 13, "color": 2 }, "3027": { "id": 3027, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "3028": { "id": 3028, "name": "闪", "type": 1, "number": 2, "color": 1 }, "3029": { "id": 3029, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "3030": { "id": 3030, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "3031": { "id": 3031, "name": "减一", "type": 3, "number": 5, "color": 1 }, "3032": { "id": 3032, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "3033": { "id": 3033, "name": "无中", "type": 2, "number": 7, "color": 1 }, "3034": { "id": 3034, "name": "无中", "type": 2, "number": 8, "color": 1 }, "3035": { "id": 3035, "name": "无中", "type": 2, "number": 9, "color": 1 }, "3036": { "id": 3036, "name": "杀", "type": 1, "number": 10, "color": 1 }, "3037": { "id": 3037, "name": "无中", "type": 2, "number": 11, "color": 1 }, "3038": { "id": 3038, "name": "过河", "type": 2, "number": 12, "color": 1 }, "3039": { "id": 3039, "name": "闪", "type": 1, "number": 13, "color": 1 }, "3040": { "id": 3040, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "3041": { "id": 3041, "name": "闪", "type": 1, "number": 2, "color": 1 }, "3042": { "id": 3042, "name": "桃", "type": 1, "number": 3, "color": 1 }, "3043": { "id": 3043, "name": "桃", "type": 1, "number": 4, "color": 1 }, "3044": { "id": 3044, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "3045": { "id": 3045, "name": "桃", "type": 1, "number": 6, "color": 1 }, "3046": { "id": 3046, "name": "桃", "type": 1, "number": 7, "color": 1 }, "3047": { "id": 3047, "name": "桃", "type": 1, "number": 8, "color": 1 }, "3048": { "id": 3048, "name": "桃", "type": 1, "number": 9, "color": 1 }, "3049": { "id": 3049, "name": "杀", "type": 1, "number": 10, "color": 1 }, "3050": { "id": 3050, "name": "杀", "type": 1, "number": 11, "color": 1 }, "3051": { "id": 3051, "name": "桃", "type": 1, "number": 12, "color": 1 }, "3052": { "id": 3052, "name": "加一", "type": 3, "number": 13, "color": 1 }, "3053": { "id": 3053, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "3054": { "id": 3054, "name": "杀", "type": 1, "number": 2, "color": 4 }, "3055": { "id": 3055, "name": "杀", "type": 1, "number": 3, "color": 4 }, "3056": { "id": 3056, "name": "杀", "type": 1, "number": 4, "color": 4 }, "3057": { "id": 3057, "name": "杀", "type": 1, "number": 5, "color": 4 }, "3058": { "id": 3058, "name": "杀", "type": 1, "number": 6, "color": 4 }, "3059": { "id": 3059, "name": "杀", "type": 1, "number": 7, "color": 4 }, "3060": { "id": 3060, "name": "杀", "type": 1, "number": 8, "color": 4 }, "3061": { "id": 3061, "name": "杀", "type": 1, "number": 9, "color": 4 }, "3062": { "id": 3062, "name": "杀", "type": 1, "number": 10, "color": 4 }, "3063": { "id": 3063, "name": "杀", "type": 1, "number": 11, "color": 4 }, "3064": { "id": 3064, "name": "无懈", "type": 2, "number": 12, "color": 4 }, "3065": { "id": 3065, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "3066": { "id": 3066, "name": "连弩", "type": 3, "number": 1, "color": 4 }, "3067": { "id": 3067, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "3068": { "id": 3068, "name": "过河", "type": 2, "number": 3, "color": 4 }, "3069": { "id": 3069, "name": "过河", "type": 2, "number": 4, "color": 4 }, "3070": { "id": 3070, "name": "加一", "type": 3, "number": 5, "color": 4 }, "3071": { "id": 3071, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "3072": { "id": 3072, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "3073": { "id": 3073, "name": "杀", "type": 1, "number": 8, "color": 4 }, "3074": { "id": 3074, "name": "杀", "type": 1, "number": 9, "color": 4 }, "3075": { "id": 3075, "name": "杀", "type": 1, "number": 10, "color": 4 }, "3076": { "id": 3076, "name": "杀", "type": 1, "number": 11, "color": 4 }, "3077": { "id": 3077, "name": "借刀", "type": 2, "number": 12, "color": 4 }, "3078": { "id": 3078, "name": "借刀", "type": 2, "number": 13, "color": 4 }, "3079": { "id": 3079, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "3080": { "id": 3080, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "3081": { "id": 3081, "name": "顺手", "type": 2, "number": 3, "color": 3 }, "3082": { "id": 3082, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "3083": { "id": 3083, "name": "加一", "type": 3, "number": 5, "color": 3 }, "3084": { "id": 3084, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "3085": { "id": 3085, "name": "杀", "type": 1, "number": 7, "color": 3 }, "3086": { "id": 3086, "name": "杀", "type": 1, "number": 8, "color": 3 }, "3087": { "id": 3087, "name": "杀", "type": 1, "number": 9, "color": 3 }, "3088": { "id": 3088, "name": "杀", "type": 1, "number": 10, "color": 3 }, "3089": { "id": 3089, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "3090": { "id": 3090, "name": "过河", "type": 2, "number": 12, "color": 3 }, "3091": { "id": 3091, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "3092": { "id": 3092, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "3093": { "id": 3093, "name": "过河", "type": 2, "number": 3, "color": 3 }, "3094": { "id": 3094, "name": "过河", "type": 2, "number": 4, "color": 3 }, "3095": { "id": 3095, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "3096": { "id": 3096, "name": "乐不", "type": 2, "number": 6, "color": 3 }, "3097": { "id": 3097, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "3098": { "id": 3098, "name": "杀", "type": 1, "number": 8, "color": 3 }, "3099": { "id": 3099, "name": "杀", "type": 1, "number": 9, "color": 3 }, "3100": { "id": 3100, "name": "杀", "type": 1, "number": 10, "color": 3 }, "3101": { "id": 3101, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "3102": { "id": 3102, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "3103": { "id": 3103, "name": "减一", "type": 3, "number": 13, "color": 3 }, "3104": { "id": 3104, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "3105": { "id": 3105, "name": "寒冰", "type": 3, "number": 1, "color": 3 }, "3106": { "id": 3106, "name": "无懈", "type": 2, "number": 1, "color": 1 }, "3107": { "id": 3107, "name": "火攻", "type": 2, "number": 2, "color": 1 }, "3108": { "id": 3108, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "3109": { "id": 3109, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "3110": { "id": 3110, "name": "桃", "type": 1, "number": 5, "color": 1 }, "3111": { "id": 3111, "name": "桃", "type": 1, "number": 6, "color": 1 }, "3112": { "id": 3112, "name": "火杀", "type": 1, "number": 7, "color": 1 }, "3113": { "id": 3113, "name": "闪", "type": 1, "number": 8, "color": 1 }, "3114": { "id": 3114, "name": "闪", "type": 1, "number": 9, "color": 1 }, "3115": { "id": 3115, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "3116": { "id": 3116, "name": "闪", "type": 1, "number": 11, "color": 1 }, "3117": { "id": 3117, "name": "闪", "type": 1, "number": 12, "color": 1 }, "3118": { "id": 3118, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "3119": { "id": 3119, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "3120": { "id": 3120, "name": "桃", "type": 1, "number": 2, "color": 2 }, "3121": { "id": 3121, "name": "桃", "type": 1, "number": 3, "color": 2 }, "3122": { "id": 3122, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "3123": { "id": 3123, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "3124": { "id": 3124, "name": "闪", "type": 1, "number": 6, "color": 2 }, "3125": { "id": 3125, "name": "闪", "type": 1, "number": 7, "color": 2 }, "3126": { "id": 3126, "name": "闪", "type": 1, "number": 8, "color": 2 }, "3127": { "id": 3127, "name": "酒", "type": 1, "number": 9, "color": 2 }, "3128": { "id": 3128, "name": "闪", "type": 1, "number": 10, "color": 2 }, "3129": { "id": 3129, "name": "闪", "type": 1, "number": 11, "color": 2 }, "3130": { "id": 3130, "name": "火攻", "type": 2, "number": 12, "color": 2 }, "3131": { "id": 3131, "name": "加一", "type": 3, "number": 13, "color": 2 }, "3132": { "id": 3132, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "3133": { "id": 3133, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "3134": { "id": 3134, "name": "酒", "type": 1, "number": 3, "color": 3 }, "3135": { "id": 3135, "name": "雷杀", "type": 1, "number": 4, "color": 3 }, "3136": { "id": 3136, "name": "雷杀", "type": 1, "number": 5, "color": 3 }, "3137": { "id": 3137, "name": "雷杀", "type": 1, "number": 6, "color": 3 }, "3138": { "id": 3138, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "3139": { "id": 3139, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "3140": { "id": 3140, "name": "酒", "type": 1, "number": 9, "color": 3 }, "3141": { "id": 3141, "name": "兵粮", "type": 2, "number": 10, "color": 3 }, "3142": { "id": 3142, "name": "铁索", "type": 2, "number": 11, "color": 3 }, "3143": { "id": 3143, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "3144": { "id": 3144, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "3145": { "id": 3145, "name": "白银", "type": 3, "number": 1, "color": 4 }, "3146": { "id": 3146, "name": "酒", "type": 1, "number": 3, "color": 4 }, "3147": { "id": 3147, "name": "兵粮", "type": 2, "number": 4, "color": 4 }, "3148": { "id": 3148, "name": "雷杀", "type": 1, "number": 5, "color": 4 }, "3149": { "id": 3149, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "3150": { "id": 3150, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "3151": { "id": 3151, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "3152": { "id": 3152, "name": "酒", "type": 1, "number": 9, "color": 4 }, "3153": { "id": 3153, "name": "铁索", "type": 2, "number": 10, "color": 4 }, "3154": { "id": 3154, "name": "铁索", "type": 2, "number": 11, "color": 4 }, "3155": { "id": 3155, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "3156": { "id": 3156, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "4001": { "id": 4001, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "4002": { "id": 4002, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "4003": { "id": 4003, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "4004": { "id": 4004, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "4005": { "id": 4005, "name": "顺手", "type": 2, "number": 3, "color": 3 }, "4006": { "id": 4006, "name": "过河", "type": 2, "number": 3, "color": 3 }, "4007": { "id": 4007, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "4008": { "id": 4008, "name": "过河", "type": 2, "number": 4, "color": 3 }, "4009": { "id": 4009, "name": "绝影", "type": 3, "number": 5, "color": 3 }, "4010": { "id": 4010, "name": "兵粮", "type": 2, "number": 5, "color": 3 }, "4011": { "id": 4011, "name": "过河", "type": 2, "number": 6, "color": 3 }, "4012": { "id": 4012, "name": "乐不", "type": 2, "number": 6, "color": 3 }, "4013": { "id": 4013, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "4014": { "id": 4014, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "4015": { "id": 4015, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "4016": { "id": 4016, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "4017": { "id": 4017, "name": "酒", "type": 1, "number": 9, "color": 3 }, "4018": { "id": 4018, "name": "雷杀", "type": 1, "number": 9, "color": 3 }, "4019": { "id": 4019, "name": "雷杀", "type": 1, "number": 10, "color": 3 }, "4020": { "id": 4020, "name": "雷杀", "type": 1, "number": 10, "color": 3 }, "4021": { "id": 4021, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "4022": { "id": 4022, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "4023": { "id": 4023, "name": "过河", "type": 2, "number": 12, "color": 3 }, "4024": { "id": 4024, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "4025": { "id": 4025, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "4026": { "id": 4026, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4027": { "id": 4027, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "4028": { "id": 4028, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "4029": { "id": 4029, "name": "闪", "type": 1, "number": 2, "color": 1 }, "4030": { "id": 4030, "name": "闪", "type": 1, "number": 2, "color": 1 }, "4031": { "id": 4031, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "4032": { "id": 4032, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "4033": { "id": 4033, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "4034": { "id": 4034, "name": "火攻", "type": 2, "number": 4, "color": 1 }, "4035": { "id": 4035, "name": "火攻", "type": 2, "number": 5, "color": 1 }, "4036": { "id": 4036, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4037": { "id": 4037, "name": "无中", "type": 2, "number": 6, "color": 1 }, "4038": { "id": 4038, "name": "桃", "type": 1, "number": 6, "color": 1 }, "4039": { "id": 4039, "name": "无中", "type": 2, "number": 7, "color": 1 }, "4040": { "id": 4040, "name": "桃", "type": 1, "number": 7, "color": 1 }, "4041": { "id": 4041, "name": "无中", "type": 2, "number": 8, "color": 1 }, "4042": { "id": 4042, "name": "桃", "type": 1, "number": 8, "color": 1 }, "4043": { "id": 4043, "name": "无中", "type": 2, "number": 9, "color": 1 }, "4044": { "id": 4044, "name": "桃", "type": 1, "number": 9, "color": 1 }, "4045": { "id": 4045, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "4046": { "id": 4046, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "4047": { "id": 4047, "name": "无中", "type": 2, "number": 11, "color": 1 }, "4048": { "id": 4048, "name": "火杀", "type": 1, "number": 11, "color": 1 }, "4049": { "id": 4049, "name": "无中", "type": 2, "number": 12, "color": 1 }, "4050": { "id": 4050, "name": "过河", "type": 2, "number": 12, "color": 1 }, "4051": { "id": 4051, "name": "桃园", "type": 2, "number": 13, "color": 1 }, "4052": { "id": 4052, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4053": { "id": 4053, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "4054": { "id": 4054, "name": "白银", "type": 3, "number": 1, "color": 4 }, "4055": { "id": 4055, "name": "铁索", "type": 2, "number": 2, "color": 4 }, "4056": { "id": 4056, "name": "铁索", "type": 2, "number": 2, "color": 4 }, "4057": { "id": 4057, "name": "铁索", "type": 2, "number": 3, "color": 4 }, "4058": { "id": 4058, "name": "过河", "type": 2, "number": 3, "color": 4 }, "4059": { "id": 4059, "name": "铁索", "type": 2, "number": 4, "color": 4 }, "4060": { "id": 4060, "name": "过河", "type": 2, "number": 4, "color": 4 }, "4061": { "id": 4061, "name": "铁索", "type": 2, "number": 5, "color": 4 }, "4062": { "id": 4062, "name": "铁索", "type": 2, "number": 5, "color": 4 }, "4063": { "id": 4063, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "4064": { "id": 4064, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "4065": { "id": 4065, "name": "杀", "type": 1, "number": 7, "color": 4 }, "4066": { "id": 4066, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "4067": { "id": 4067, "name": "杀", "type": 1, "number": 8, "color": 4 }, "4068": { "id": 4068, "name": "杀", "type": 1, "number": 8, "color": 4 }, "4069": { "id": 4069, "name": "杀", "type": 1, "number": 9, "color": 4 }, "4070": { "id": 4070, "name": "酒", "type": 1, "number": 9, "color": 4 }, "4071": { "id": 4071, "name": "杀", "type": 1, "number": 10, "color": 4 }, "4072": { "id": 4072, "name": "杀", "type": 1, "number": 10, "color": 4 }, "4073": { "id": 4073, "name": "杀", "type": 1, "number": 11, "color": 4 }, "4074": { "id": 4074, "name": "杀", "type": 1, "number": 11, "color": 4 }, "4075": { "id": 4075, "name": "无懈", "type": 2, "number": 12, "color": 4 }, "4076": { "id": 4076, "name": "借刀", "type": 2, "number": 12, "color": 4 }, "4077": { "id": 4077, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "4078": { "id": 4078, "name": "借刀", "type": 2, "number": 13, "color": 4 }, "4079": { "id": 4079, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "4080": { "id": 4080, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "4081": { "id": 4081, "name": "铁索", "type": 2, "number": 2, "color": 2 }, "4082": { "id": 4082, "name": "决斗", "type": 2, "number": 2, "color": 2 }, "4083": { "id": 4083, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "4084": { "id": 4084, "name": "无懈", "type": 2, "number": 3, "color": 2 }, "4085": { "id": 4085, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "4086": { "id": 4086, "name": "兵粮", "type": 2, "number": 4, "color": 2 }, "4087": { "id": 4087, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "4088": { "id": 4088, "name": "闪", "type": 1, "number": 5, "color": 2 }, "4089": { "id": 4089, "name": "顺手", "type": 2, "number": 6, "color": 2 }, "4090": { "id": 4090, "name": "闪", "type": 1, "number": 6, "color": 2 }, "4091": { "id": 4091, "name": "杀", "type": 1, "number": 7, "color": 2 }, "4092": { "id": 4092, "name": "闪", "type": 1, "number": 7, "color": 2 }, "4093": { "id": 4093, "name": "杀", "type": 1, "number": 8, "color": 2 }, "4094": { "id": 4094, "name": "闪", "type": 1, "number": 8, "color": 2 }, "4095": { "id": 4095, "name": "酒", "type": 1, "number": 9, "color": 2 }, "4096": { "id": 4096, "name": "闪", "type": 1, "number": 9, "color": 2 }, "4097": { "id": 4097, "name": "火攻", "type": 2, "number": 10, "color": 2 }, "4098": { "id": 4098, "name": "闪", "type": 1, "number": 10, "color": 2 }, "4099": { "id": 4099, "name": "闪", "type": 1, "number": 11, "color": 2 }, "4100": { "id": 4100, "name": "闪", "type": 1, "number": 11, "color": 2 }, "4101": { "id": 4101, "name": "方天", "type": 3, "number": 12, "color": 2 }, "4102": { "id": 4102, "name": "桃", "type": 1, "number": 12, "color": 2 }, "4103": { "id": 4103, "name": "紫騂", "type": 3, "number": 13, "color": 2 }, "4104": { "id": 4104, "name": "火攻", "type": 2, "number": 13, "color": 2 }, "4200": { "id": 4200, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4201": { "id": 4201, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4202": { "id": 4202, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4203": { "id": 4203, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4204": { "id": 4204, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4205": { "id": 4205, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4206": { "id": 4206, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "4207": { "id": 4207, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4208": { "id": 4208, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4209": { "id": 4209, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4210": { "id": 4210, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4211": { "id": 4211, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4212": { "id": 4212, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4213": { "id": 4213, "name": "爪黄", "type": 3, "number": 13, "color": 1 }, "4214": { "id": 4214, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4215": { "id": 4215, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4216": { "id": 4216, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4217": { "id": 4217, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4218": { "id": 4218, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4219": { "id": 4219, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4220": { "id": 4220, "name": "大宛", "type": 3, "number": 13, "color": 3 }, "4300": { "id": 4300, "name": "屯粮", "type": 2, "number": 3, "color": 1 }, "4301": { "id": 4301, "name": "屯粮", "type": 2, "number": 4, "color": 1 }, "4302": { "id": 4302, "name": "援军", "type": 2, "number": 12, "color": 1 }, "4303": { "id": 4303, "name": "援军", "type": 2, "number": 11, "color": 1 }, "4304": { "id": 4304, "name": "援军", "type": 2, "number": 1, "color": 3 }, "4305": { "id": 4305, "name": "勠力", "type": 2, "number": 7, "color": 3 }, "4306": { "id": 4306, "name": "勠力", "type": 2, "number": 13, "color": 3 }, "4307": { "id": 4307, "name": "勠力", "type": 2, "number": 7, "color": 4 }, "4308": { "id": 4308, "name": "霹雳", "type": 3, "number": 9, "color": 2 }, "4309": { "id": 4309, "name": "爆竹", "type": 2, "number": 1, "color": 1 }, "4310": { "id": 4310, "name": "爆竹", "type": 2, "number": 6, "color": 1 }, "4311": { "id": 4311, "name": "爆竹", "type": 2, "number": 8, "color": 1 }, "4313": { "id": 4313, "name": "春联", "type": 2, "number": 1, "color": 2 }, "4314": { "id": 4314, "name": "春联", "type": 2, "number": 13, "color": 2 }, "4317": { "id": 4317, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "4318": { "id": 4318, "name": "决斗", "type": 2, "number": 12, "color": 1 }, "4319": { "id": 4319, "name": "决斗", "type": 2, "number": 1, "color": 1 }, "4320": { "id": 4320, "name": "决斗", "type": 2, "number": 12, "color": 2 }, "4321": { "id": 4321, "name": "火攻", "type": 2, "number": 7, "color": 3 }, "4322": { "id": 4322, "name": "火攻", "type": 2, "number": 7, "color": 4 }, "4323": { "id": 4323, "name": "火攻", "type": 2, "number": 13, "color": 3 }, "4324": { "id": 4324, "name": "联军", "type": 2, "number": 3, "color": 1 }, "4325": { "id": 4325, "name": "联军", "type": 2, "number": 4, "color": 1 }, "4326": { "id": 4326, "name": "联军", "type": 2, "number": 1, "color": 1 }, "4327": { "id": 4327, "name": "无双", "type": 3, "number": 12, "color": 2 }, "4328": { "id": 4328, "name": "束发", "type": 3, "number": 1, "color": 2 }, "4329": { "id": 4329, "name": "红棉", "type": 3, "number": 1, "color": 4 }, "4330": { "id": 4330, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "4331": { "id": 4331, "name": "玲珑", "type": 3, "number": 2, "color": 4 }, "4332": { "id": 4332, "name": "逆水", "type": 2, "number": 1, "color": 1 }, "4333": { "id": 4333, "name": "逆水", "type": 2, "number": 7, "color": 4 }, "4334": { "id": 4334, "name": "逆水", "type": 2, "number": 13, "color": 3 }, "4335": { "id": 4335, "name": "逆水", "type": 2, "number": 7, "color": 3 }, "4339": { "id": 4339, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "4340": { "id": 4340, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "4341": { "id": 4341, "name": "修罗", "type": 3, "number": 13, "color": 2 }, "4342": { "id": 4342, "name": "银月", "type": 3, "number": 2, "color": 3 }, "4343": { "id": 4343, "name": "镰钩", "type": 3, "number": 1, "color": 4 }, "4344": { "id": 4344, "name": "水淹", "type": 2, "number": 7, "color": 1 }, "4345": { "id": 4345, "name": "金鼓", "type": 2, "number": 8, "color": 2 }, "4346": { "id": 4346, "name": "厚积", "type": 2, "number": 2, "color": 1 }, "4347": { "id": 4347, "name": "桎梏", "type": 2, "number": 3, "color": 2 }, "4348": { "id": 4348, "name": "盈冲", "type": 2, "number": 4, "color": 3 }, "4349": { "id": 4349, "name": "背水", "type": 2, "number": 5, "color": 4 }, "4350": { "id": 4350, "name": "整肃", "type": 2, "number": 6, "color": 1 }, "4351": { "id": 4351, "name": "寸兵", "type": 2, "number": 7, "color": 2 }, "4352": { "id": 4352, "name": "护心", "type": 3, "number": 2, "color": 3 }, "4355": { "id": 4355, "name": "酗酒", "type": 1, "number": 9, "color": 2 }, "4356": { "id": 4356, "name": "酗酒", "type": 1, "number": 3, "color": 3 }, "4357": { "id": 4357, "name": "酗酒", "type": 1, "number": 9, "color": 3 }, "4358": { "id": 4358, "name": "酗酒", "type": 1, "number": 3, "color": 4 }, "4359": { "id": 4359, "name": "酗酒", "type": 1, "number": 9, "color": 4 }, "4400": { "id": 4400, "name": "回魂", "type": 2, "number": 3, "color": 1 }, "4401": { "id": 4401, "name": "回魂", "type": 2, "number": 4, "color": 4 }, "6000": { "id": 6e3, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "6001": { "id": 6001, "name": "太公", "type": 3, "number": 1, "color": 3 }, "6002": { "id": 6002, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "6003": { "id": 6003, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "6004": { "id": 6004, "name": "随机", "type": 2, "number": 2, "color": 3 }, "6005": { "id": 6005, "name": "逐近", "type": 2, "number": 3, "color": 3 }, "6006": { "id": 6006, "name": "水淹", "type": 2, "number": 3, "color": 3 }, "6007": { "id": 6007, "name": "逐近", "type": 2, "number": 4, "color": 3 }, "6008": { "id": 6008, "name": "水淹", "type": 2, "number": 4, "color": 3 }, "6009": { "id": 6009, "name": "三略", "type": 3, "number": 5, "color": 3 }, "6010": { "id": 6010, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "6011": { "id": 6011, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "6012": { "id": 6012, "name": "党同", "type": 2, "number": 7, "color": 3 }, "6013": { "id": 6013, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6014": { "id": 6014, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6015": { "id": 6015, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6016": { "id": 6016, "name": "杀", "type": 1, "number": 9, "color": 3 }, "6017": { "id": 6017, "name": "杀", "type": 1, "number": 9, "color": 3 }, "6018": { "id": 6018, "name": "杀", "type": 1, "number": 10, "color": 3 }, "6019": { "id": 6019, "name": "杀", "type": 1, "number": 10, "color": 3 }, "6020": { "id": 6020, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "6021": { "id": 6021, "name": "逐近", "type": 2, "number": 12, "color": 3 }, "6022": { "id": 6022, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "6023": { "id": 6023, "name": "天机", "type": 3, "number": 12, "color": 4 }, "6024": { "id": 6024, "name": "燎原", "type": 2, "number": 1, "color": 1 }, "6025": { "id": 6025, "name": "闪", "type": 1, "number": 2, "color": 1 }, "6026": { "id": 6026, "name": "闪", "type": 1, "number": 2, "color": 1 }, "6027": { "id": 6027, "name": "过河", "type": 2, "number": 2, "color": 1 }, "6028": { "id": 6028, "name": "出其", "type": 2, "number": 3, "color": 1 }, "6029": { "id": 6029, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "6030": { "id": 6030, "name": "洞烛", "type": 2, "number": 7, "color": 1 }, "6031": { "id": 6031, "name": "洞烛", "type": 2, "number": 8, "color": 1 }, "6032": { "id": 6032, "name": "洞烛", "type": 2, "number": 9, "color": 1 }, "6033": { "id": 6033, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "6034": { "id": 6034, "name": "洞烛", "type": 2, "number": 11, "color": 1 }, "6035": { "id": 6035, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "6036": { "id": 6036, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "6037": { "id": 6037, "name": "护心", "type": 3, "number": 1, "color": 4 }, "6038": { "id": 6038, "name": "杀", "type": 1, "number": 2, "color": 4 }, "6039": { "id": 6039, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "6040": { "id": 6040, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "6041": { "id": 6041, "name": "杀", "type": 1, "number": 3, "color": 4 }, "6042": { "id": 6042, "name": "逐近", "type": 2, "number": 3, "color": 4 }, "6043": { "id": 6043, "name": "杀", "type": 1, "number": 4, "color": 4 }, "6044": { "id": 6044, "name": "逐近", "type": 2, "number": 4, "color": 4 }, "6045": { "id": 6045, "name": "杀", "type": 1, "number": 5, "color": 4 }, "6046": { "id": 6046, "name": "燎原", "type": 2, "number": 7, "color": 4 }, "6047": { "id": 6047, "name": "雷杀", "type": 1, "number": 9, "color": 4 }, "6048": { "id": 6048, "name": "雷杀", "type": 1, "number": 9, "color": 4 }, "6049": { "id": 6049, "name": "雷杀", "type": 1, "number": 10, "color": 4 }, "6050": { "id": 6050, "name": "雷杀", "type": 1, "number": 10, "color": 4 }, "6051": { "id": 6051, "name": "杀", "type": 1, "number": 11, "color": 4 }, "6052": { "id": 6052, "name": "党同", "type": 2, "number": 12, "color": 4 }, "6053": { "id": 6053, "name": "铜雀", "type": 3, "number": 13, "color": 4 }, "6054": { "id": 6054, "name": "五行", "type": 3, "number": 1, "color": 2 }, "6055": { "id": 6055, "name": "闪", "type": 1, "number": 2, "color": 2 }, "6056": { "id": 6056, "name": "闪", "type": 1, "number": 2, "color": 2 }, "6057": { "id": 6057, "name": "党同", "type": 2, "number": 3, "color": 2 }, "6058": { "id": 6058, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "6059": { "id": 6059, "name": "杀", "type": 1, "number": 8, "color": 2 }, "6060": { "id": 6060, "name": "火杀", "type": 1, "number": 10, "color": 2 }, "6061": { "id": 6061, "name": "出其", "type": 2, "number": 12, "color": 2 }, "6062": { "id": 6062, "name": "乌铁", "type": 3, "number": 12, "color": 2 }, "6063": { "id": 6063, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "6064": { "id": 6064, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "6065": { "id": 6065, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "6066": { "id": 6066, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "6067": { "id": 6067, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "6068": { "id": 6068, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "6069": { "id": 6069, "name": "闪", "type": 1, "number": 4, "color": 2 }, "6100": { "id": 6100, "name": "水淹", "type": 2, "number": 3, "color": 3 }, "6101": { "id": 6101, "name": "水淹", "type": 2, "number": 4, "color": 3 }, "6102": { "id": 6102, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6103": { "id": 6103, "name": "杀", "type": 1, "number": 10, "color": 3 }, "6104": { "id": 6104, "name": "杀", "type": 1, "number": 11, "color": 3 }, "6105": { "id": 6105, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "6106": { "id": 6106, "name": "逐近", "type": 2, "number": 3, "color": 3 }, "6107": { "id": 6107, "name": "冰杀", "type": 1, "number": 6, "color": 3 }, "6108": { "id": 6108, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "6109": { "id": 6109, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6110": { "id": 6110, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "6111": { "id": 6111, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "6112": { "id": 6112, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "6113": { "id": 6113, "name": "洞烛", "type": 2, "number": 7, "color": 1 }, "6114": { "id": 6114, "name": "洞烛", "type": 2, "number": 8, "color": 1 }, "6115": { "id": 6115, "name": "出其", "type": 2, "number": 2, "color": 1 }, "6116": { "id": 6116, "name": "出其", "type": 2, "number": 3, "color": 1 }, "6117": { "id": 6117, "name": "太公", "type": 3, "number": 2, "color": 3 }, "6118": { "id": 6118, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "6119": { "id": 6119, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "6120": { "id": 6120, "name": "杀", "type": 1, "number": 4, "color": 4 }, "6121": { "id": 6121, "name": "杀", "type": 1, "number": 5, "color": 4 }, "6122": { "id": 6122, "name": "护心", "type": 3, "number": 1, "color": 4 }, "6123": { "id": 6123, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "6124": { "id": 6124, "name": "逐近", "type": 2, "number": 12, "color": 4 }, "6125": { "id": 6125, "name": "五行", "type": 3, "number": 1, "color": 2 }, "6126": { "id": 6126, "name": "闪", "type": 1, "number": 7, "color": 2 }, "6127": { "id": 6127, "name": "闪", "type": 1, "number": 7, "color": 2 }, "6128": { "id": 6128, "name": "闪", "type": 1, "number": 8, "color": 2 }, "6129": { "id": 6129, "name": "闪", "type": 1, "number": 8, "color": 2 }, "6130": { "id": 6130, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "6200": { "id": 6200, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "6201": { "id": 6201, "name": "铜雀", "type": 3, "number": 9, "color": 3 }, "6202": { "id": 6202, "name": "冰杀", "type": 1, "number": 4, "color": 4 }, "6203": { "id": 6203, "name": "冰杀", "type": 1, "number": 5, "color": 4 }, "6204": { "id": 6204, "name": "冰杀", "type": 1, "number": 6, "color": 4 }, "6205": { "id": 6205, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "6206": { "id": 6206, "name": "闪", "type": 1, "number": 2, "color": 1 }, "6207": { "id": 6207, "name": "洞烛", "type": 2, "number": 7, "color": 1 }, "6208": { "id": 6208, "name": "洞烛", "type": 2, "number": 8, "color": 1 }, "6209": { "id": 6209, "name": "杀", "type": 1, "number": 10, "color": 1 }, "6210": { "id": 6210, "name": "杀", "type": 1, "number": 11, "color": 1 }, "6211": { "id": 6211, "name": "闪", "type": 1, "number": 2, "color": 2 }, "6212": { "id": 6212, "name": "闪", "type": 1, "number": 3, "color": 2 }, "6300": { "id": 6300, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "6301": { "id": 6301, "name": "太公", "type": 3, "number": 1, "color": 3 }, "6303": { "id": 6303, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "6304": { "id": 6304, "name": "随机", "type": 2, "number": 2, "color": 3 }, "6305": { "id": 6305, "name": "逐近", "type": 2, "number": 3, "color": 3 }, "6306": { "id": 6306, "name": "水淹", "type": 2, "number": 3, "color": 3 }, "6308": { "id": 6308, "name": "水淹", "type": 2, "number": 4, "color": 3 }, "6310": { "id": 6310, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "6311": { "id": 6311, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "6313": { "id": 6313, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6314": { "id": 6314, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6315": { "id": 6315, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "6316": { "id": 6316, "name": "杀", "type": 1, "number": 9, "color": 3 }, "6317": { "id": 6317, "name": "杀", "type": 1, "number": 9, "color": 3 }, "6318": { "id": 6318, "name": "杀", "type": 1, "number": 10, "color": 3 }, "6319": { "id": 6319, "name": "杀", "type": 1, "number": 10, "color": 3 }, "6320": { "id": 6320, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "6321": { "id": 6321, "name": "逐近", "type": 2, "number": 12, "color": 3 }, "6322": { "id": 6322, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "6323": { "id": 6323, "name": "天机", "type": 3, "number": 12, "color": 4 }, "6325": { "id": 6325, "name": "闪", "type": 1, "number": 2, "color": 1 }, "6326": { "id": 6326, "name": "闪", "type": 1, "number": 2, "color": 1 }, "6327": { "id": 6327, "name": "过河", "type": 2, "number": 2, "color": 1 }, "6328": { "id": 6328, "name": "出其", "type": 2, "number": 3, "color": 1 }, "6329": { "id": 6329, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "6330": { "id": 6330, "name": "洞烛", "type": 2, "number": 7, "color": 1 }, "6331": { "id": 6331, "name": "洞烛", "type": 2, "number": 8, "color": 1 }, "6332": { "id": 6332, "name": "洞烛", "type": 2, "number": 9, "color": 1 }, "6333": { "id": 6333, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "6334": { "id": 6334, "name": "洞烛", "type": 2, "number": 11, "color": 1 }, "6335": { "id": 6335, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "6336": { "id": 6336, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "6337": { "id": 6337, "name": "护心", "type": 3, "number": 1, "color": 4 }, "6338": { "id": 6338, "name": "杀", "type": 1, "number": 2, "color": 4 }, "6339": { "id": 6339, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "6340": { "id": 6340, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "6341": { "id": 6341, "name": "杀", "type": 1, "number": 3, "color": 4 }, "6342": { "id": 6342, "name": "逐近", "type": 2, "number": 3, "color": 4 }, "6343": { "id": 6343, "name": "杀", "type": 1, "number": 4, "color": 4 }, "6344": { "id": 6344, "name": "逐近", "type": 2, "number": 4, "color": 4 }, "6345": { "id": 6345, "name": "杀", "type": 1, "number": 5, "color": 4 }, "6347": { "id": 6347, "name": "雷杀", "type": 1, "number": 9, "color": 4 }, "6348": { "id": 6348, "name": "雷杀", "type": 1, "number": 9, "color": 4 }, "6349": { "id": 6349, "name": "雷杀", "type": 1, "number": 10, "color": 4 }, "6350": { "id": 6350, "name": "雷杀", "type": 1, "number": 10, "color": 4 }, "6351": { "id": 6351, "name": "杀", "type": 1, "number": 11, "color": 4 }, "6353": { "id": 6353, "name": "铜雀", "type": 3, "number": 13, "color": 4 }, "6354": { "id": 6354, "name": "五行", "type": 3, "number": 1, "color": 2 }, "6355": { "id": 6355, "name": "闪", "type": 1, "number": 2, "color": 2 }, "6356": { "id": 6356, "name": "闪", "type": 1, "number": 2, "color": 2 }, "6358": { "id": 6358, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "6359": { "id": 6359, "name": "杀", "type": 1, "number": 8, "color": 2 }, "6360": { "id": 6360, "name": "火杀", "type": 1, "number": 10, "color": 2 }, "6361": { "id": 6361, "name": "出其", "type": 2, "number": 12, "color": 2 }, "6362": { "id": 6362, "name": "乌铁", "type": 3, "number": 12, "color": 2 }, "6364": { "id": 6364, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "6365": { "id": 6365, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "6366": { "id": 6366, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "6367": { "id": 6367, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "6368": { "id": 6368, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "6369": { "id": 6369, "name": "闪", "type": 1, "number": 4, "color": 2 }, "7001": { "id": 7001, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "7002": { "id": 7002, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "7003": { "id": 7003, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "7004": { "id": 7004, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "7005": { "id": 7005, "name": "杀", "type": 1, "number": 6, "color": 2 }, "7006": { "id": 7006, "name": "杀", "type": 1, "number": 7, "color": 2 }, "7007": { "id": 7007, "name": "杀", "type": 1, "number": 9, "color": 2 }, "7008": { "id": 7008, "name": "闪", "type": 1, "number": 11, "color": 2 }, "7009": { "id": 7009, "name": "减一", "type": 3, "number": 13, "color": 2 }, "7010": { "id": 7010, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "7011": { "id": 7011, "name": "闪", "type": 1, "number": 3, "color": 2 }, "7012": { "id": 7012, "name": "闪", "type": 1, "number": 5, "color": 2 }, "7013": { "id": 7013, "name": "闪", "type": 1, "number": 6, "color": 2 }, "7014": { "id": 7014, "name": "闪", "type": 1, "number": 7, "color": 2 }, "7015": { "id": 7015, "name": "闪", "type": 1, "number": 8, "color": 2 }, "7016": { "id": 7016, "name": "闪", "type": 1, "number": 9, "color": 2 }, "7017": { "id": 7017, "name": "闪", "type": 1, "number": 10, "color": 2 }, "7018": { "id": 7018, "name": "闪", "type": 1, "number": 11, "color": 2 }, "7019": { "id": 7019, "name": "桃", "type": 1, "number": 12, "color": 2 }, "7020": { "id": 7020, "name": "杀", "type": 1, "number": 13, "color": 2 }, "7021": { "id": 7021, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "7022": { "id": 7022, "name": "减一", "type": 3, "number": 5, "color": 1 }, "7023": { "id": 7023, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "7024": { "id": 7024, "name": "杀", "type": 1, "number": 10, "color": 1 }, "7025": { "id": 7025, "name": "过河", "type": 2, "number": 12, "color": 1 }, "7026": { "id": 7026, "name": "闪", "type": 1, "number": 13, "color": 1 }, "7027": { "id": 7027, "name": "桃", "type": 1, "number": 3, "color": 1 }, "7028": { "id": 7028, "name": "桃", "type": 1, "number": 4, "color": 1 }, "7029": { "id": 7029, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "7030": { "id": 7030, "name": "桃", "type": 1, "number": 6, "color": 1 }, "7031": { "id": 7031, "name": "桃", "type": 1, "number": 7, "color": 1 }, "7032": { "id": 7032, "name": "桃", "type": 1, "number": 8, "color": 1 }, "7033": { "id": 7033, "name": "桃", "type": 1, "number": 9, "color": 1 }, "7034": { "id": 7034, "name": "杀", "type": 1, "number": 10, "color": 1 }, "7035": { "id": 7035, "name": "杀", "type": 1, "number": 11, "color": 1 }, "7036": { "id": 7036, "name": "桃", "type": 1, "number": 12, "color": 1 }, "7037": { "id": 7037, "name": "加一", "type": 3, "number": 13, "color": 1 }, "7038": { "id": 7038, "name": "杀", "type": 1, "number": 6, "color": 4 }, "7039": { "id": 7039, "name": "杀", "type": 1, "number": 7, "color": 4 }, "7040": { "id": 7040, "name": "杀", "type": 1, "number": 8, "color": 4 }, "7041": { "id": 7041, "name": "杀", "type": 1, "number": 11, "color": 4 }, "7042": { "id": 7042, "name": "无懈", "type": 2, "number": 12, "color": 4 }, "7043": { "id": 7043, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "7044": { "id": 7044, "name": "诸葛", "type": 3, "number": 1, "color": 4 }, "7045": { "id": 7045, "name": "加一", "type": 3, "number": 5, "color": 4 }, "7046": { "id": 7046, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "7047": { "id": 7047, "name": "杀", "type": 1, "number": 8, "color": 4 }, "7048": { "id": 7048, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "7049": { "id": 7049, "name": "加一", "type": 3, "number": 5, "color": 3 }, "7050": { "id": 7050, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "7051": { "id": 7051, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "7052": { "id": 7052, "name": "过河", "type": 2, "number": 4, "color": 3 }, "7053": { "id": 7053, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "7054": { "id": 7054, "name": "乐不", "type": 2, "number": 6, "color": 3 }, "7055": { "id": 7055, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "7056": { "id": 7056, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "7057": { "id": 7057, "name": "减一", "type": 3, "number": 13, "color": 3 }, "7058": { "id": 7058, "name": "闪电", "type": 2, "number": 12, "color": 1 }, "7059": { "id": 7059, "name": "无懈", "type": 2, "number": 12, "color": 2 }, "7060": { "id": 7060, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "7061": { "id": 7061, "name": "无懈", "type": 2, "number": 1, "color": 1 }, "7062": { "id": 7062, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "7063": { "id": 7063, "name": "桃", "type": 1, "number": 5, "color": 1 }, "7064": { "id": 7064, "name": "桃", "type": 1, "number": 6, "color": 1 }, "7065": { "id": 7065, "name": "火杀", "type": 1, "number": 7, "color": 1 }, "7066": { "id": 7066, "name": "闪", "type": 1, "number": 8, "color": 1 }, "7067": { "id": 7067, "name": "闪", "type": 1, "number": 9, "color": 1 }, "7068": { "id": 7068, "name": "闪", "type": 1, "number": 11, "color": 1 }, "7069": { "id": 7069, "name": "闪", "type": 1, "number": 12, "color": 1 }, "7070": { "id": 7070, "name": "桃", "type": 1, "number": 2, "color": 2 }, "7071": { "id": 7071, "name": "桃", "type": 1, "number": 3, "color": 2 }, "7072": { "id": 7072, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "7073": { "id": 7073, "name": "闪", "type": 1, "number": 6, "color": 2 }, "7074": { "id": 7074, "name": "闪", "type": 1, "number": 7, "color": 2 }, "7075": { "id": 7075, "name": "闪", "type": 1, "number": 8, "color": 2 }, "7076": { "id": 7076, "name": "酒", "type": 1, "number": 9, "color": 2 }, "7077": { "id": 7077, "name": "闪", "type": 1, "number": 10, "color": 2 }, "7078": { "id": 7078, "name": "闪", "type": 1, "number": 11, "color": 2 }, "7079": { "id": 7079, "name": "加一", "type": 3, "number": 13, "color": 2 }, "7080": { "id": 7080, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "7081": { "id": 7081, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "7082": { "id": 7082, "name": "酒", "type": 1, "number": 3, "color": 3 }, "7083": { "id": 7083, "name": "雷杀", "type": 1, "number": 4, "color": 3 }, "7084": { "id": 7084, "name": "雷杀", "type": 1, "number": 5, "color": 3 }, "7085": { "id": 7085, "name": "雷杀", "type": 1, "number": 6, "color": 3 }, "7086": { "id": 7086, "name": "酒", "type": 1, "number": 9, "color": 3 }, "7087": { "id": 7087, "name": "兵粮", "type": 2, "number": 10, "color": 3 }, "7088": { "id": 7088, "name": "铁索", "type": 2, "number": 11, "color": 3 }, "7089": { "id": 7089, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "7090": { "id": 7090, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "7091": { "id": 7091, "name": "酒", "type": 1, "number": 3, "color": 4 }, "7092": { "id": 7092, "name": "兵粮", "type": 2, "number": 4, "color": 4 }, "7093": { "id": 7093, "name": "雷杀", "type": 1, "number": 5, "color": 4 }, "7094": { "id": 7094, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "7095": { "id": 7095, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "7096": { "id": 7096, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "7097": { "id": 7097, "name": "酒", "type": 1, "number": 9, "color": 4 }, "7098": { "id": 7098, "name": "铁索", "type": 2, "number": 10, "color": 4 }, "7099": { "id": 7099, "name": "铁索", "type": 2, "number": 11, "color": 4 }, "7100": { "id": 7100, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "7101": { "id": 7101, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "7102": { "id": 7102, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "7103": { "id": 7103, "name": "太公", "type": 3, "number": 1, "color": 3 }, "7104": { "id": 7104, "name": "随机", "type": 2, "number": 2, "color": 3 }, "7105": { "id": 7105, "name": "逐近", "type": 2, "number": 3, "color": 3 }, "7106": { "id": 7106, "name": "水淹", "type": 2, "number": 3, "color": 3 }, "7107": { "id": 7107, "name": "水淹", "type": 2, "number": 4, "color": 3 }, "7108": { "id": 7108, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "7109": { "id": 7109, "name": "冰杀", "type": 1, "number": 7, "color": 3 }, "7110": { "id": 7110, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "7111": { "id": 7111, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "7112": { "id": 7112, "name": "冰杀", "type": 1, "number": 8, "color": 3 }, "7113": { "id": 7113, "name": "杀", "type": 1, "number": 9, "color": 3 }, "7114": { "id": 7114, "name": "杀", "type": 1, "number": 9, "color": 3 }, "7115": { "id": 7115, "name": "杀", "type": 1, "number": 10, "color": 3 }, "7116": { "id": 7116, "name": "杀", "type": 1, "number": 10, "color": 3 }, "7117": { "id": 7117, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "7118": { "id": 7118, "name": "逐近", "type": 2, "number": 12, "color": 3 }, "7119": { "id": 7119, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "7120": { "id": 7120, "name": "天机", "type": 3, "number": 12, "color": 4 }, "7121": { "id": 7121, "name": "闪", "type": 1, "number": 2, "color": 1 }, "7122": { "id": 7122, "name": "闪", "type": 1, "number": 2, "color": 1 }, "7123": { "id": 7123, "name": "过河", "type": 2, "number": 2, "color": 1 }, "7124": { "id": 7124, "name": "出其", "type": 2, "number": 3, "color": 1 }, "7125": { "id": 7125, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "7126": { "id": 7126, "name": "洞烛", "type": 2, "number": 7, "color": 1 }, "7127": { "id": 7127, "name": "洞烛", "type": 2, "number": 8, "color": 1 }, "7128": { "id": 7128, "name": "洞烛", "type": 2, "number": 9, "color": 1 }, "7129": { "id": 7129, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "7130": { "id": 7130, "name": "洞烛", "type": 2, "number": 11, "color": 1 }, "7131": { "id": 7131, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "7132": { "id": 7132, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "7133": { "id": 7133, "name": "护心", "type": 3, "number": 1, "color": 4 }, "7134": { "id": 7134, "name": "杀", "type": 1, "number": 2, "color": 4 }, "7135": { "id": 7135, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "7136": { "id": 7136, "name": "杀", "type": 1, "number": 3, "color": 4 }, "7137": { "id": 7137, "name": "逐近", "type": 2, "number": 3, "color": 4 }, "7138": { "id": 7138, "name": "杀", "type": 1, "number": 4, "color": 4 }, "7139": { "id": 7139, "name": "逐近", "type": 2, "number": 4, "color": 4 }, "7140": { "id": 7140, "name": "杀", "type": 1, "number": 5, "color": 4 }, "7141": { "id": 7141, "name": "雷杀", "type": 1, "number": 9, "color": 4 }, "7142": { "id": 7142, "name": "雷杀", "type": 1, "number": 9, "color": 4 }, "7143": { "id": 7143, "name": "雷杀", "type": 1, "number": 10, "color": 4 }, "7144": { "id": 7144, "name": "雷杀", "type": 1, "number": 10, "color": 4 }, "7145": { "id": 7145, "name": "杀", "type": 1, "number": 11, "color": 4 }, "7146": { "id": 7146, "name": "铜雀", "type": 3, "number": 13, "color": 4 }, "7147": { "id": 7147, "name": "五行", "type": 3, "number": 1, "color": 2 }, "7148": { "id": 7148, "name": "闪", "type": 1, "number": 2, "color": 2 }, "7149": { "id": 7149, "name": "闪", "type": 1, "number": 2, "color": 2 }, "7150": { "id": 7150, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "7151": { "id": 7151, "name": "杀", "type": 1, "number": 8, "color": 2 }, "7152": { "id": 7152, "name": "火杀", "type": 1, "number": 10, "color": 2 }, "7153": { "id": 7153, "name": "出其", "type": 2, "number": 12, "color": 2 }, "7154": { "id": 7154, "name": "乌铁", "type": 3, "number": 12, "color": 2 }, "7155": { "id": 7155, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "7156": { "id": 7156, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "7157": { "id": 7157, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "7158": { "id": 7158, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "7159": { "id": 7159, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "7160": { "id": 7160, "name": "闪", "type": 1, "number": 4, "color": 2 }, "10020": { "id": 10020, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "10021": { "id": 10021, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "10022": { "id": 10022, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "10023": { "id": 10023, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "10024": { "id": 10024, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "10025": { "id": 10025, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "10026": { "id": 10026, "name": "白银", "type": 3, "number": 1, "color": 4 }, "10027": { "id": 10027, "name": "白银", "type": 3, "number": 1, "color": 4 }, "10028": { "id": 10028, "name": "秦弩", "type": 3, "number": 1, "color": 4 }, "10029": { "id": 10029, "name": "秦弩", "type": 3, "number": 1, "color": 4 }, "10030": { "id": 10030, "name": "商鞅", "type": 2, "number": 5, "color": 3 }, "10031": { "id": 10031, "name": "商鞅", "type": 2, "number": 7, "color": 3 }, "10032": { "id": 10032, "name": "商鞅", "type": 2, "number": 9, "color": 3 }, "10033": { "id": 10033, "name": "真龙", "type": 3, "number": 2, "color": 1 }, "10034": { "id": 10034, "name": "传国", "type": 3, "number": 7, "color": 1 }, "10035": { "id": 10035, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "10036": { "id": 10036, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "10037": { "id": 10037, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "10038": { "id": 10038, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "10039": { "id": 10039, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "10040": { "id": 10040, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "10041": { "id": 10041, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "10042": { "id": 10042, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "10043": { "id": 10043, "name": "故步", "type": 2, "number": 7, "color": 2 }, "10044": { "id": 10044, "name": "故步", "type": 2, "number": 5, "color": 4 }, "10045": { "id": 10045, "name": "四乘", "type": 3, "number": 5, "color": 1 }, "10046": { "id": 10046, "name": "铁蒺", "type": 3, "number": 5, "color": 4 }, "10047": { "id": 10047, "name": "飞轮", "type": 3, "number": 5, "color": 3 }, "10048": { "id": 10048, "name": "琼梳", "type": 3, "number": 12, "color": 3 }, "10049": { "id": 10049, "name": "犀梳", "type": 3, "number": 12, "color": 4 }, "10050": { "id": 10050, "name": "金梳", "type": 3, "number": 12, "color": 1 }, "11002": { "id": 11002, "name": "闪", "type": 1, "number": 2, "color": 2 }, "11008": { "id": 11008, "name": "杀", "type": 1, "number": 8, "color": 2 }, "11010": { "id": 11010, "name": "杀", "type": 1, "number": 10, "color": 2 }, "11012": { "id": 11012, "name": "方天", "type": 3, "number": 12, "color": 2 }, "11015": { "id": 11015, "name": "闪", "type": 1, "number": 2, "color": 2 }, "11017": { "id": 11017, "name": "闪", "type": 1, "number": 4, "color": 2 }, "11027": { "id": 11027, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "11028": { "id": 11028, "name": "闪", "type": 1, "number": 2, "color": 1 }, "11030": { "id": 11030, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "11033": { "id": 11033, "name": "无中", "type": 2, "number": 7, "color": 1 }, "11034": { "id": 11034, "name": "无中", "type": 2, "number": 8, "color": 1 }, "11035": { "id": 11035, "name": "无中", "type": 2, "number": 9, "color": 1 }, "11037": { "id": 11037, "name": "无中", "type": 2, "number": 11, "color": 1 }, "11040": { "id": 11040, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "11041": { "id": 11041, "name": "闪", "type": 1, "number": 2, "color": 1 }, "11053": { "id": 11053, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "11054": { "id": 11054, "name": "杀", "type": 1, "number": 2, "color": 4 }, "11055": { "id": 11055, "name": "杀", "type": 1, "number": 3, "color": 4 }, "11056": { "id": 11056, "name": "杀", "type": 1, "number": 4, "color": 4 }, "11057": { "id": 11057, "name": "杀", "type": 1, "number": 5, "color": 4 }, "11061": { "id": 11061, "name": "杀", "type": 1, "number": 9, "color": 4 }, "11062": { "id": 11062, "name": "杀", "type": 1, "number": 10, "color": 4 }, "11067": { "id": 11067, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "11068": { "id": 11068, "name": "过河", "type": 2, "number": 3, "color": 4 }, "11069": { "id": 11069, "name": "过河", "type": 2, "number": 4, "color": 4 }, "11072": { "id": 11072, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "11074": { "id": 11074, "name": "杀", "type": 1, "number": 9, "color": 4 }, "11075": { "id": 11075, "name": "杀", "type": 1, "number": 10, "color": 4 }, "11076": { "id": 11076, "name": "杀", "type": 1, "number": 11, "color": 4 }, "11077": { "id": 11077, "name": "借刀", "type": 2, "number": 12, "color": 4 }, "11078": { "id": 11078, "name": "借刀", "type": 2, "number": 13, "color": 4 }, "11079": { "id": 11079, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "11081": { "id": 11081, "name": "顺手", "type": 2, "number": 3, "color": 3 }, "11082": { "id": 11082, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "11085": { "id": 11085, "name": "杀", "type": 1, "number": 7, "color": 3 }, "11086": { "id": 11086, "name": "杀", "type": 1, "number": 8, "color": 3 }, "11087": { "id": 11087, "name": "杀", "type": 1, "number": 9, "color": 3 }, "11088": { "id": 11088, "name": "杀", "type": 1, "number": 10, "color": 3 }, "11089": { "id": 11089, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "11090": { "id": 11090, "name": "过河", "type": 2, "number": 12, "color": 3 }, "11091": { "id": 11091, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "11092": { "id": 11092, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "11094": { "id": 11094, "name": "过河", "type": 2, "number": 3, "color": 3 }, "11098": { "id": 11098, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "11099": { "id": 11099, "name": "杀", "type": 1, "number": 8, "color": 3 }, "11100": { "id": 11100, "name": "杀", "type": 1, "number": 9, "color": 3 }, "11101": { "id": 11101, "name": "杀", "type": 1, "number": 10, "color": 3 }, "11108": { "id": 11108, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "11110": { "id": 11110, "name": "火攻", "type": 2, "number": 2, "color": 1 }, "11111": { "id": 11111, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "11118": { "id": 11118, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "11121": { "id": 11121, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "11122": { "id": 11122, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "11125": { "id": 11125, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "11133": { "id": 11133, "name": "火攻", "type": 2, "number": 12, "color": 2 }, "11136": { "id": 11136, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "11141": { "id": 11141, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "11142": { "id": 11142, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "11147": { "id": 11147, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "11148": { "id": 11148, "name": "白银", "type": 3, "number": 1, "color": 4 }, "11149": { "id": 11149, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "12001": { "id": 12001, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "12002": { "id": 12002, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "12003": { "id": 12003, "name": "酒", "type": 1, "number": 3, "color": 3 }, "12004": { "id": 12004, "name": "雷杀", "type": 1, "number": 4, "color": 3 }, "12005": { "id": 12005, "name": "雷杀", "type": 1, "number": 5, "color": 3 }, "12006": { "id": 12006, "name": "雷杀", "type": 1, "number": 6, "color": 3 }, "12007": { "id": 12007, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "12008": { "id": 12008, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "12009": { "id": 12009, "name": "酒", "type": 1, "number": 9, "color": 3 }, "12010": { "id": 12010, "name": "攻守", "type": 2, "number": 10, "color": 3 }, "12011": { "id": 12011, "name": "铁索", "type": 2, "number": 11, "color": 3 }, "12012": { "id": 12012, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "12013": { "id": 12013, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "12014": { "id": 12014, "name": "白银", "type": 3, "number": 1, "color": 4 }, "12015": { "id": 12015, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "12016": { "id": 12016, "name": "酒", "type": 1, "number": 3, "color": 4 }, "12017": { "id": 12017, "name": "进退", "type": 2, "number": 4, "color": 4 }, "12018": { "id": 12018, "name": "雷杀", "type": 1, "number": 5, "color": 4 }, "12019": { "id": 12019, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "12020": { "id": 12020, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "12021": { "id": 12021, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "12022": { "id": 12022, "name": "酒", "type": 1, "number": 9, "color": 4 }, "12023": { "id": 12023, "name": "铁索", "type": 2, "number": 10, "color": 4 }, "12024": { "id": 12024, "name": "铁索", "type": 2, "number": 11, "color": 4 }, "12025": { "id": 12025, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "12026": { "id": 12026, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "12027": { "id": 12027, "name": "无懈", "type": 2, "number": 1, "color": 1 }, "12028": { "id": 12028, "name": "火攻", "type": 2, "number": 2, "color": 1 }, "12029": { "id": 12029, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "12030": { "id": 12030, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "12031": { "id": 12031, "name": "桃", "type": 1, "number": 5, "color": 1 }, "12032": { "id": 12032, "name": "桃", "type": 1, "number": 6, "color": 1 }, "12033": { "id": 12033, "name": "火杀", "type": 1, "number": 7, "color": 1 }, "12034": { "id": 12034, "name": "闪", "type": 1, "number": 8, "color": 1 }, "12035": { "id": 12035, "name": "闪", "type": 1, "number": 9, "color": 1 }, "12036": { "id": 12036, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "12037": { "id": 12037, "name": "闪", "type": 1, "number": 11, "color": 1 }, "12038": { "id": 12038, "name": "闪", "type": 1, "number": 12, "color": 1 }, "12039": { "id": 12039, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "12040": { "id": 12040, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "12041": { "id": 12041, "name": "桃", "type": 1, "number": 2, "color": 2 }, "12042": { "id": 12042, "name": "桃", "type": 1, "number": 3, "color": 2 }, "12043": { "id": 12043, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "12044": { "id": 12044, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "12045": { "id": 12045, "name": "闪", "type": 1, "number": 6, "color": 2 }, "12046": { "id": 12046, "name": "闪", "type": 1, "number": 7, "color": 2 }, "12047": { "id": 12047, "name": "闪", "type": 1, "number": 8, "color": 2 }, "12048": { "id": 12048, "name": "酒", "type": 1, "number": 9, "color": 2 }, "12049": { "id": 12049, "name": "闪", "type": 1, "number": 10, "color": 2 }, "12050": { "id": 12050, "name": "闪", "type": 1, "number": 11, "color": 2 }, "12051": { "id": 12051, "name": "火攻", "type": 2, "number": 12, "color": 2 }, "12052": { "id": 12052, "name": "加一", "type": 3, "number": 13, "color": 2 }, "12053": { "id": 12053, "name": "炸弹", "type": 2, "number": 1, "color": 3 }, "12054": { "id": 12054, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "12055": { "id": 12055, "name": "过河", "type": 2, "number": 3, "color": 3 }, "12056": { "id": 12056, "name": "过河", "type": 2, "number": 4, "color": 3 }, "12057": { "id": 12057, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "12058": { "id": 12058, "name": "继往", "type": 2, "number": 6, "color": 3 }, "12059": { "id": 12059, "name": "进退", "type": 2, "number": 7, "color": 3 }, "12060": { "id": 12060, "name": "杀", "type": 1, "number": 8, "color": 3 }, "12061": { "id": 12061, "name": "杀", "type": 1, "number": 9, "color": 3 }, "12062": { "id": 12062, "name": "杀", "type": 1, "number": 10, "color": 3 }, "12063": { "id": 12063, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "12064": { "id": 12064, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "12065": { "id": 12065, "name": "减一", "type": 3, "number": 13, "color": 3 }, "12066": { "id": 12066, "name": "诸葛", "type": 3, "number": 1, "color": 4 }, "12067": { "id": 12067, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "12068": { "id": 12068, "name": "杀", "type": 1, "number": 3, "color": 4 }, "12069": { "id": 12069, "name": "杀", "type": 1, "number": 4, "color": 4 }, "12070": { "id": 12070, "name": "加一", "type": 3, "number": 5, "color": 4 }, "12071": { "id": 12071, "name": "杀", "type": 1, "number": 6, "color": 4 }, "12072": { "id": 12072, "name": "杀", "type": 1, "number": 7, "color": 4 }, "12073": { "id": 12073, "name": "杀", "type": 1, "number": 8, "color": 4 }, "12074": { "id": 12074, "name": "杀", "type": 1, "number": 9, "color": 4 }, "12075": { "id": 12075, "name": "杀", "type": 1, "number": 10, "color": 4 }, "12076": { "id": 12076, "name": "杀", "type": 1, "number": 11, "color": 4 }, "12077": { "id": 12077, "name": "无懈", "type": 2, "number": 12, "color": 4 }, "12078": { "id": 12078, "name": "借刀", "type": 2, "number": 13, "color": 4 }, "12079": { "id": 12079, "name": "攻守", "type": 2, "number": 1, "color": 1 }, "12080": { "id": 12080, "name": "闪", "type": 1, "number": 2, "color": 1 }, "12081": { "id": 12081, "name": "无中", "type": 2, "number": 3, "color": 1 }, "12082": { "id": 12082, "name": "桃", "type": 1, "number": 4, "color": 1 }, "12083": { "id": 12083, "name": "减一", "type": 3, "number": 5, "color": 1 }, "12084": { "id": 12084, "name": "继往", "type": 2, "number": 6, "color": 1 }, "12085": { "id": 12085, "name": "桃", "type": 1, "number": 7, "color": 1 }, "12086": { "id": 12086, "name": "无中", "type": 2, "number": 8, "color": 1 }, "12087": { "id": 12087, "name": "桃", "type": 1, "number": 9, "color": 1 }, "12088": { "id": 12088, "name": "杀", "type": 1, "number": 10, "color": 1 }, "12089": { "id": 12089, "name": "无中", "type": 2, "number": 11, "color": 1 }, "12090": { "id": 12090, "name": "过河", "type": 2, "number": 12, "color": 1 }, "12091": { "id": 12091, "name": "加一", "type": 3, "number": 13, "color": 1 }, "12092": { "id": 12092, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "12093": { "id": 12093, "name": "闪", "type": 1, "number": 2, "color": 2 }, "12094": { "id": 12094, "name": "闪", "type": 1, "number": 3, "color": 2 }, "12095": { "id": 12095, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "12096": { "id": 12096, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "12097": { "id": 12097, "name": "杀", "type": 1, "number": 6, "color": 2 }, "12098": { "id": 12098, "name": "闪", "type": 1, "number": 7, "color": 2 }, "12099": { "id": 12099, "name": "闪", "type": 1, "number": 8, "color": 2 }, "12100": { "id": 12100, "name": "闪", "type": 1, "number": 9, "color": 2 }, "12101": { "id": 12101, "name": "杀", "type": 1, "number": 10, "color": 2 }, "12102": { "id": 12102, "name": "闪", "type": 1, "number": 11, "color": 2 }, "12103": { "id": 12103, "name": "桃", "type": 1, "number": 12, "color": 2 }, "12104": { "id": 12104, "name": "杀", "type": 1, "number": 13, "color": 2 }, "12105": { "id": 12105, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "12106": { "id": 12106, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "12107": { "id": 12107, "name": "炸弹", "type": 2, "number": 1, "color": 1 }, "12108": { "id": 12108, "name": "无懈", "type": 2, "number": 13, "color": 2 }, "12110": { "id": 12110, "name": "无双", "type": 3, "number": 12, "color": 2 }, "12111": { "id": 12111, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "12112": { "id": 12112, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "12113": { "id": 12113, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "12114": { "id": 12114, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "12115": { "id": 12115, "name": "五行", "type": 3, "number": 1, "color": 2 }, "12116": { "id": 12116, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "12117": { "id": 12117, "name": "红棉", "type": 3, "number": 1, "color": 4 }, "12118": { "id": 12118, "name": "国风", "type": 3, "number": 9, "color": 3 }, "12119": { "id": 12119, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "12120": { "id": 12120, "name": "护心", "type": 3, "number": 1, "color": 4 }, "12121": { "id": 12121, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "12122": { "id": 12122, "name": "束发", "type": 3, "number": 1, "color": 2 }, "12123": { "id": 12123, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "12124": { "id": 12124, "name": "天机", "type": 3, "number": 12, "color": 4 }, "12125": { "id": 12125, "name": "太公", "type": 3, "number": 2, "color": 3 }, "12126": { "id": 12126, "name": "三略", "type": 3, "number": 5, "color": 3 }, "12127": { "id": 12127, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "12128": { "id": 12128, "name": "调剂", "type": 2, "number": 6, "color": 4 }, "12129": { "id": 12129, "name": "远交", "type": 2, "number": 9, "color": 1 }, "12130": { "id": 12130, "name": "长安", "type": 3, "number": 10, "color": 1 }, "12131": { "id": 12131, "name": "长安", "type": 3, "number": 10, "color": 1 }, "12132": { "id": 12132, "name": "长安", "type": 3, "number": 10, "color": 1 }, "12133": { "id": 12133, "name": "长安", "type": 3, "number": 10, "color": 1 }, "12134": { "id": 12134, "name": "长安", "type": 3, "number": 10, "color": 1 }, "12135": { "id": 12135, "name": "长安", "type": 3, "number": 10, "color": 3 }, "12136": { "id": 12136, "name": "长安", "type": 3, "number": 10, "color": 3 }, "12137": { "id": 12137, "name": "长安", "type": 3, "number": 10, "color": 3 }, "12138": { "id": 12138, "name": "长安", "type": 3, "number": 10, "color": 3 }, "12139": { "id": 12139, "name": "长安", "type": 3, "number": 10, "color": 3 }, "12140": { "id": 12140, "name": "闪闪", "type": 1, "number": 3, "color": 2 }, "12141": { "id": 12141, "name": "闪闪", "type": 1, "number": 5, "color": 2 }, "12142": { "id": 12142, "name": "闪闪", "type": 1, "number": 6, "color": 2 }, "12143": { "id": 12143, "name": "闪闪", "type": 1, "number": 7, "color": 2 }, "12144": { "id": 12144, "name": "闪闪", "type": 1, "number": 8, "color": 2 }, "12145": { "id": 12145, "name": "闪闪", "type": 1, "number": 9, "color": 2 }, "12146": { "id": 12146, "name": "闪闪", "type": 1, "number": 10, "color": 2 }, "12147": { "id": 12147, "name": "闪闪", "type": 1, "number": 11, "color": 2 }, "12148": { "id": 12148, "name": "三首", "type": 3, "number": 12, "color": 2 }, "12201": { "id": 12201, "name": "继往", "type": 2, "number": 1, "color": 1 }, "12202": { "id": 12202, "name": "攻守", "type": 2, "number": 2, "color": 1 }, "12203": { "id": 12203, "name": "进退", "type": 2, "number": 3, "color": 1 }, "12204": { "id": 12204, "name": "炸弹", "type": 2, "number": 4, "color": 1 }, "12205": { "id": 12205, "name": "地契", "type": 3, "number": 13, "color": 4 }, "12210": { "id": 12210, "name": "炸弹", "type": 2, "number": 1, "color": 1 }, "13000": { "id": 13e3, "name": "杀", "type": 1, "number": 5, "color": 1 }, "13001": { "id": 13001, "name": "杀", "type": 1, "number": 6, "color": 1 }, "13002": { "id": 13002, "name": "杀", "type": 1, "number": 8, "color": 1 }, "13003": { "id": 13003, "name": "杀", "type": 1, "number": 9, "color": 1 }, "13004": { "id": 13004, "name": "酒", "type": 1, "number": 2, "color": 2 }, "13005": { "id": 13005, "name": "酒", "type": 1, "number": 3, "color": 2 }, "20001": { "id": 20001, "name": "杀", "type": 1, "number": 6, "color": 2 }, "20002": { "id": 20002, "name": "杀", "type": 1, "number": 7, "color": 2 }, "20003": { "id": 20003, "name": "杀", "type": 1, "number": 8, "color": 2 }, "20004": { "id": 20004, "name": "杀", "type": 1, "number": 9, "color": 2 }, "20005": { "id": 20005, "name": "杀", "type": 1, "number": 10, "color": 2 }, "20006": { "id": 20006, "name": "杀", "type": 1, "number": 13, "color": 2 }, "20007": { "id": 20007, "name": "杀", "type": 1, "number": 10, "color": 1 }, "20008": { "id": 20008, "name": "杀", "type": 1, "number": 10, "color": 1 }, "20009": { "id": 20009, "name": "杀", "type": 1, "number": 11, "color": 1 }, "20010": { "id": 20010, "name": "杀", "type": 1, "number": 2, "color": 4 }, "20011": { "id": 20011, "name": "杀", "type": 1, "number": 3, "color": 4 }, "20012": { "id": 20012, "name": "杀", "type": 1, "number": 4, "color": 4 }, "20013": { "id": 20013, "name": "杀", "type": 1, "number": 5, "color": 4 }, "20014": { "id": 20014, "name": "杀", "type": 1, "number": 6, "color": 4 }, "20015": { "id": 20015, "name": "杀", "type": 1, "number": 7, "color": 4 }, "20016": { "id": 20016, "name": "杀", "type": 1, "number": 8, "color": 4 }, "20017": { "id": 20017, "name": "杀", "type": 1, "number": 9, "color": 4 }, "20018": { "id": 20018, "name": "杀", "type": 1, "number": 10, "color": 4 }, "20019": { "id": 20019, "name": "杀", "type": 1, "number": 11, "color": 4 }, "20020": { "id": 20020, "name": "杀", "type": 1, "number": 8, "color": 4 }, "20021": { "id": 20021, "name": "杀", "type": 1, "number": 9, "color": 4 }, "20022": { "id": 20022, "name": "杀", "type": 1, "number": 10, "color": 4 }, "20023": { "id": 20023, "name": "杀", "type": 1, "number": 11, "color": 4 }, "20024": { "id": 20024, "name": "杀", "type": 1, "number": 7, "color": 3 }, "20025": { "id": 20025, "name": "杀", "type": 1, "number": 8, "color": 3 }, "20026": { "id": 20026, "name": "杀", "type": 1, "number": 9, "color": 3 }, "20027": { "id": 20027, "name": "杀", "type": 1, "number": 10, "color": 3 }, "20028": { "id": 20028, "name": "杀", "type": 1, "number": 8, "color": 3 }, "20029": { "id": 20029, "name": "杀", "type": 1, "number": 9, "color": 3 }, "20030": { "id": 20030, "name": "杀", "type": 1, "number": 10, "color": 3 }, "20031": { "id": 20031, "name": "雷杀", "type": 1, "number": 4, "color": 3 }, "20032": { "id": 20032, "name": "雷杀", "type": 1, "number": 5, "color": 3 }, "20033": { "id": 20033, "name": "雷杀", "type": 1, "number": 6, "color": 3 }, "20034": { "id": 20034, "name": "雷杀", "type": 1, "number": 7, "color": 3 }, "20035": { "id": 20035, "name": "雷杀", "type": 1, "number": 8, "color": 3 }, "20036": { "id": 20036, "name": "雷杀", "type": 1, "number": 5, "color": 4 }, "20037": { "id": 20037, "name": "雷杀", "type": 1, "number": 6, "color": 4 }, "20038": { "id": 20038, "name": "雷杀", "type": 1, "number": 7, "color": 4 }, "20039": { "id": 20039, "name": "雷杀", "type": 1, "number": 8, "color": 4 }, "20040": { "id": 20040, "name": "火杀", "type": 1, "number": 4, "color": 1 }, "20041": { "id": 20041, "name": "火杀", "type": 1, "number": 7, "color": 1 }, "20042": { "id": 20042, "name": "火杀", "type": 1, "number": 10, "color": 1 }, "20043": { "id": 20043, "name": "火杀", "type": 1, "number": 4, "color": 2 }, "20044": { "id": 20044, "name": "火杀", "type": 1, "number": 5, "color": 2 }, "20045": { "id": 20045, "name": "闪", "type": 1, "number": 2, "color": 2 }, "20046": { "id": 20046, "name": "闪", "type": 1, "number": 11, "color": 2 }, "20047": { "id": 20047, "name": "闪", "type": 1, "number": 2, "color": 2 }, "20048": { "id": 20048, "name": "闪", "type": 1, "number": 3, "color": 2 }, "20049": { "id": 20049, "name": "闪", "type": 1, "number": 4, "color": 2 }, "20050": { "id": 20050, "name": "闪", "type": 1, "number": 5, "color": 2 }, "20051": { "id": 20051, "name": "闪", "type": 1, "number": 6, "color": 2 }, "20052": { "id": 20052, "name": "闪", "type": 1, "number": 7, "color": 2 }, "20053": { "id": 20053, "name": "闪", "type": 1, "number": 8, "color": 2 }, "20054": { "id": 20054, "name": "闪", "type": 1, "number": 9, "color": 2 }, "20055": { "id": 20055, "name": "闪", "type": 1, "number": 10, "color": 2 }, "20056": { "id": 20056, "name": "闪", "type": 1, "number": 11, "color": 2 }, "20057": { "id": 20057, "name": "闪", "type": 1, "number": 2, "color": 1 }, "20058": { "id": 20058, "name": "闪", "type": 1, "number": 13, "color": 1 }, "20059": { "id": 20059, "name": "闪", "type": 1, "number": 2, "color": 1 }, "20060": { "id": 20060, "name": "闪", "type": 1, "number": 8, "color": 1 }, "20061": { "id": 20061, "name": "闪", "type": 1, "number": 9, "color": 1 }, "20062": { "id": 20062, "name": "闪", "type": 1, "number": 11, "color": 1 }, "20063": { "id": 20063, "name": "闪", "type": 1, "number": 12, "color": 1 }, "20064": { "id": 20064, "name": "闪", "type": 1, "number": 6, "color": 2 }, "20065": { "id": 20065, "name": "闪", "type": 1, "number": 7, "color": 2 }, "20066": { "id": 20066, "name": "闪", "type": 1, "number": 8, "color": 2 }, "20067": { "id": 20067, "name": "闪", "type": 1, "number": 10, "color": 2 }, "20068": { "id": 20068, "name": "闪", "type": 1, "number": 11, "color": 2 }, "20069": { "id": 20069, "name": "桃", "type": 1, "number": 12, "color": 2 }, "20070": { "id": 20070, "name": "桃", "type": 1, "number": 3, "color": 1 }, "20071": { "id": 20071, "name": "桃", "type": 1, "number": 4, "color": 1 }, "20072": { "id": 20072, "name": "桃", "type": 1, "number": 6, "color": 1 }, "20073": { "id": 20073, "name": "桃", "type": 1, "number": 7, "color": 1 }, "20074": { "id": 20074, "name": "桃", "type": 1, "number": 8, "color": 1 }, "20075": { "id": 20075, "name": "桃", "type": 1, "number": 9, "color": 1 }, "20076": { "id": 20076, "name": "桃", "type": 1, "number": 12, "color": 1 }, "20077": { "id": 20077, "name": "桃", "type": 1, "number": 5, "color": 1 }, "20078": { "id": 20078, "name": "桃", "type": 1, "number": 6, "color": 1 }, "20079": { "id": 20079, "name": "桃", "type": 1, "number": 2, "color": 2 }, "20080": { "id": 20080, "name": "桃", "type": 1, "number": 3, "color": 2 }, "20081": { "id": 20081, "name": "酒", "type": 1, "number": 9, "color": 2 }, "20082": { "id": 20082, "name": "酒", "type": 1, "number": 3, "color": 3 }, "20083": { "id": 20083, "name": "酒", "type": 1, "number": 9, "color": 3 }, "20084": { "id": 20084, "name": "酒", "type": 1, "number": 3, "color": 4 }, "20085": { "id": 20085, "name": "酒", "type": 1, "number": 9, "color": 4 }, "20086": { "id": 20086, "name": "顺手", "type": 2, "number": 3, "color": 2 }, "20087": { "id": 20087, "name": "顺手", "type": 2, "number": 4, "color": 2 }, "20088": { "id": 20088, "name": "顺手", "type": 2, "number": 3, "color": 3 }, "20089": { "id": 20089, "name": "顺手", "type": 2, "number": 4, "color": 3 }, "20090": { "id": 20090, "name": "顺手", "type": 2, "number": 11, "color": 3 }, "20091": { "id": 20091, "name": "过河", "type": 2, "number": 12, "color": 1 }, "20092": { "id": 20092, "name": "过河", "type": 2, "number": 3, "color": 4 }, "20093": { "id": 20093, "name": "过河", "type": 2, "number": 4, "color": 4 }, "20094": { "id": 20094, "name": "过河", "type": 2, "number": 12, "color": 3 }, "20095": { "id": 20095, "name": "过河", "type": 2, "number": 3, "color": 3 }, "20096": { "id": 20096, "name": "过河", "type": 2, "number": 4, "color": 3 }, "20097": { "id": 20097, "name": "五谷", "type": 2, "number": 3, "color": 1 }, "20098": { "id": 20098, "name": "五谷", "type": 2, "number": 4, "color": 1 }, "20099": { "id": 20099, "name": "决斗", "type": 2, "number": 1, "color": 2 }, "20100": { "id": 20100, "name": "决斗", "type": 2, "number": 1, "color": 4 }, "20101": { "id": 20101, "name": "决斗", "type": 2, "number": 1, "color": 3 }, "20102": { "id": 20102, "name": "南蛮", "type": 2, "number": 7, "color": 4 }, "20103": { "id": 20103, "name": "南蛮", "type": 2, "number": 13, "color": 3 }, "20104": { "id": 20104, "name": "南蛮", "type": 2, "number": 7, "color": 3 }, "20105": { "id": 20105, "name": "万箭", "type": 2, "number": 1, "color": 1 }, "20106": { "id": 20106, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "20107": { "id": 20107, "name": "闪电", "type": 2, "number": 12, "color": 1 }, "20108": { "id": 20108, "name": "桃园", "type": 2, "number": 1, "color": 1 }, "20109": { "id": 20109, "name": "无懈", "type": 2, "number": 12, "color": 4 }, "20110": { "id": 20110, "name": "无懈", "type": 2, "number": 13, "color": 4 }, "20111": { "id": 20111, "name": "无懈", "type": 2, "number": 11, "color": 3 }, "20112": { "id": 20112, "name": "无懈", "type": 2, "number": 12, "color": 2 }, "20113": { "id": 20113, "name": "无懈", "type": 2, "number": 1, "color": 1 }, "20114": { "id": 20114, "name": "无懈", "type": 2, "number": 13, "color": 1 }, "20115": { "id": 20115, "name": "无懈", "type": 2, "number": 13, "color": 3 }, "20116": { "id": 20116, "name": "乐不", "type": 2, "number": 6, "color": 1 }, "20117": { "id": 20117, "name": "乐不", "type": 2, "number": 6, "color": 4 }, "20118": { "id": 20118, "name": "乐不", "type": 2, "number": 6, "color": 3 }, "20119": { "id": 20119, "name": "铁索", "type": 2, "number": 11, "color": 3 }, "20120": { "id": 20120, "name": "铁索", "type": 2, "number": 12, "color": 3 }, "20121": { "id": 20121, "name": "铁索", "type": 2, "number": 10, "color": 4 }, "20122": { "id": 20122, "name": "铁索", "type": 2, "number": 11, "color": 4 }, "20123": { "id": 20123, "name": "铁索", "type": 2, "number": 12, "color": 4 }, "20124": { "id": 20124, "name": "铁索", "type": 2, "number": 13, "color": 4 }, "20125": { "id": 20125, "name": "兵粮", "type": 2, "number": 10, "color": 3 }, "20126": { "id": 20126, "name": "兵粮", "type": 2, "number": 4, "color": 4 }, "20127": { "id": 20127, "name": "借刀", "type": 2, "number": 12, "color": 4 }, "20128": { "id": 20128, "name": "借刀", "type": 2, "number": 13, "color": 4 }, "20129": { "id": 20129, "name": "火攻", "type": 2, "number": 2, "color": 1 }, "20130": { "id": 20130, "name": "火攻", "type": 2, "number": 3, "color": 1 }, "20131": { "id": 20131, "name": "火攻", "type": 2, "number": 12, "color": 2 }, "20132": { "id": 20132, "name": "无中", "type": 2, "number": 7, "color": 1 }, "20133": { "id": 20133, "name": "无中", "type": 2, "number": 8, "color": 1 }, "20134": { "id": 20134, "name": "无中", "type": 2, "number": 9, "color": 1 }, "20135": { "id": 20135, "name": "无中", "type": 2, "number": 11, "color": 1 }, "20201": { "id": 20201, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20202": { "id": 20202, "name": "诸葛", "type": 3, "number": 1, "color": 4 }, "20203": { "id": 20203, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "20204": { "id": 20204, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "20205": { "id": 20205, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "20206": { "id": 20206, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "20207": { "id": 20207, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "20208": { "id": 20208, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "20209": { "id": 20209, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "20210": { "id": 20210, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "20211": { "id": 20211, "name": "方天", "type": 3, "number": 12, "color": 2 }, "20212": { "id": 20212, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "20213": { "id": 20213, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "20214": { "id": 20214, "name": "八卦", "type": 3, "number": 2, "color": 3 }, "20215": { "id": 20215, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "20216": { "id": 20216, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "20217": { "id": 20217, "name": "藤甲", "type": 3, "number": 2, "color": 4 }, "20218": { "id": 20218, "name": "白银", "type": 3, "number": 1, "color": 4 }, "20219": { "id": 20219, "name": "减一", "type": 3, "number": 5, "color": 1 }, "20220": { "id": 20220, "name": "减一", "type": 3, "number": 13, "color": 2 }, "20221": { "id": 20221, "name": "减一", "type": 3, "number": 13, "color": 3 }, "20222": { "id": 20222, "name": "加一", "type": 3, "number": 5, "color": 3 }, "20223": { "id": 20223, "name": "加一", "type": 3, "number": 5, "color": 4 }, "20224": { "id": 20224, "name": "加一", "type": 3, "number": 13, "color": 1 }, "20225": { "id": 20225, "name": "加一", "type": 3, "number": 13, "color": 2 }, "20301": { "id": 20301, "name": "无双", "type": 3, "number": 12, "color": 2 }, "20302": { "id": 20302, "name": "束发", "type": 3, "number": 1, "color": 2 }, "20303": { "id": 20303, "name": "红锦", "type": 3, "number": 1, "color": 4 }, "20304": { "id": 20304, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "20305": { "id": 20305, "name": "玲珑", "type": 3, "number": 2, "color": 4 }, "20306": { "id": 20306, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "20307": { "id": 20307, "name": "国风", "type": 3, "number": 9, "color": 3 }, "20308": { "id": 20308, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "20309": { "id": 20309, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "20310": { "id": 20310, "name": "奇门", "type": 3, "number": 2, "color": 4 }, "20311": { "id": 20311, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "20312": { "id": 20312, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "20313": { "id": 20313, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "20314": { "id": 20314, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "20315": { "id": 20315, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "20316": { "id": 20316, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "20317": { "id": 20317, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "20318": { "id": 20318, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "20319": { "id": 20319, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20320": { "id": 20320, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "20321": { "id": 20321, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "20322": { "id": 20322, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "20323": { "id": 20323, "name": "五行", "type": 3, "number": 1, "color": 2 }, "20324": { "id": 20324, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "20325": { "id": 20325, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "20326": { "id": 20326, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "20327": { "id": 20327, "name": "天机", "type": 3, "number": 12, "color": 4 }, "20328": { "id": 20328, "name": "太公", "type": 3, "number": 2, "color": 3 }, "20329": { "id": 20329, "name": "三略", "type": 3, "number": 5, "color": 3 }, "20330": { "id": 20330, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20331": { "id": 20331, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "20332": { "id": 20332, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "20333": { "id": 20333, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "20334": { "id": 20334, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "20335": { "id": 20335, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "20336": { "id": 20336, "name": "三首", "type": 3, "number": 12, "color": 2 }, "20401": { "id": 20401, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20402": { "id": 20402, "name": "杀", "type": 1, "number": 1, "color": 1 }, "20403": { "id": 20403, "name": "杀", "type": 1, "number": 1, "color": 4 }, "20404": { "id": 20404, "name": "杀", "type": 1, "number": 1, "color": 2 }, "20405": { "id": 20405, "name": "雷杀", "type": 1, "number": 13, "color": 3 }, "20406": { "id": 20406, "name": "雷杀", "type": 1, "number": 13, "color": 4 }, "20407": { "id": 20407, "name": "火杀", "type": 1, "number": 13, "color": 1 }, "20408": { "id": 20408, "name": "火杀", "type": 1, "number": 13, "color": 2 }, "20409": { "id": 20409, "name": "闪", "type": 1, "number": 2, "color": 3 }, "20410": { "id": 20410, "name": "闪", "type": 1, "number": 2, "color": 1 }, "20411": { "id": 20411, "name": "闪", "type": 1, "number": 2, "color": 4 }, "20412": { "id": 20412, "name": "闪", "type": 1, "number": 2, "color": 2 }, "20413": { "id": 20413, "name": "桃", "type": 1, "number": 8, "color": 3 }, "20414": { "id": 20414, "name": "桃", "type": 1, "number": 8, "color": 1 }, "20415": { "id": 20415, "name": "桃", "type": 1, "number": 8, "color": 4 }, "20416": { "id": 20416, "name": "桃", "type": 1, "number": 8, "color": 2 }, "20417": { "id": 20417, "name": "酒", "type": 1, "number": 9, "color": 3 }, "20418": { "id": 20418, "name": "酒", "type": 1, "number": 9, "color": 1 }, "20419": { "id": 20419, "name": "酒", "type": 1, "number": 9, "color": 4 }, "20420": { "id": 20420, "name": "酒", "type": 1, "number": 9, "color": 2 }, "20421": { "id": 20421, "name": "顺手", "type": 2, "number": 6, "color": 3 }, "20422": { "id": 20422, "name": "顺手", "type": 2, "number": 6, "color": 1 }, "20423": { "id": 20423, "name": "顺手", "type": 2, "number": 6, "color": 4 }, "20424": { "id": 20424, "name": "顺手", "type": 2, "number": 6, "color": 2 }, "20425": { "id": 20425, "name": "过河", "type": 2, "number": 6, "color": 3 }, "20426": { "id": 20426, "name": "过河", "type": 2, "number": 6, "color": 1 }, "20427": { "id": 20427, "name": "过河", "type": 2, "number": 6, "color": 4 }, "20428": { "id": 20428, "name": "过河", "type": 2, "number": 6, "color": 2 }, "20429": { "id": 20429, "name": "五谷", "type": 2, "number": 5, "color": 3 }, "20430": { "id": 20430, "name": "五谷", "type": 2, "number": 5, "color": 1 }, "20431": { "id": 20431, "name": "五谷", "type": 2, "number": 5, "color": 4 }, "20432": { "id": 20432, "name": "五谷", "type": 2, "number": 5, "color": 2 }, "20433": { "id": 20433, "name": "决斗", "type": 2, "number": 12, "color": 3 }, "20434": { "id": 20434, "name": "决斗", "type": 2, "number": 12, "color": 1 }, "20435": { "id": 20435, "name": "决斗", "type": 2, "number": 12, "color": 4 }, "20436": { "id": 20436, "name": "决斗", "type": 2, "number": 12, "color": 2 }, "20437": { "id": 20437, "name": "南蛮", "type": 2, "number": 11, "color": 3 }, "20438": { "id": 20438, "name": "南蛮", "type": 2, "number": 11, "color": 1 }, "20439": { "id": 20439, "name": "南蛮", "type": 2, "number": 11, "color": 4 }, "20440": { "id": 20440, "name": "南蛮", "type": 2, "number": 11, "color": 2 }, "20441": { "id": 20441, "name": "万箭", "type": 2, "number": 10, "color": 3 }, "20442": { "id": 20442, "name": "万箭", "type": 2, "number": 10, "color": 1 }, "20443": { "id": 20443, "name": "万箭", "type": 2, "number": 10, "color": 4 }, "20444": { "id": 20444, "name": "万箭", "type": 2, "number": 10, "color": 2 }, "20445": { "id": 20445, "name": "闪电", "type": 2, "number": 1, "color": 3 }, "20446": { "id": 20446, "name": "闪电", "type": 2, "number": 1, "color": 1 }, "20447": { "id": 20447, "name": "闪电", "type": 2, "number": 1, "color": 4 }, "20448": { "id": 20448, "name": "闪电", "type": 2, "number": 1, "color": 2 }, "20449": { "id": 20449, "name": "桃园", "type": 2, "number": 8, "color": 3 }, "20450": { "id": 20450, "name": "桃园", "type": 2, "number": 8, "color": 1 }, "20451": { "id": 20451, "name": "桃园", "type": 2, "number": 8, "color": 4 }, "20452": { "id": 20452, "name": "桃园", "type": 2, "number": 8, "color": 2 }, "20453": { "id": 20453, "name": "无懈", "type": 2, "number": 7, "color": 3 }, "20454": { "id": 20454, "name": "无懈", "type": 2, "number": 7, "color": 1 }, "20455": { "id": 20455, "name": "无懈", "type": 2, "number": 7, "color": 4 }, "20456": { "id": 20456, "name": "无懈", "type": 2, "number": 7, "color": 2 }, "20457": { "id": 20457, "name": "乐不", "type": 2, "number": 4, "color": 3 }, "20458": { "id": 20458, "name": "乐不", "type": 2, "number": 4, "color": 1 }, "20459": { "id": 20459, "name": "乐不", "type": 2, "number": 4, "color": 4 }, "20460": { "id": 20460, "name": "乐不", "type": 2, "number": 4, "color": 2 }, "20461": { "id": 20461, "name": "铁索", "type": 2, "number": 3, "color": 3 }, "20462": { "id": 20462, "name": "铁索", "type": 2, "number": 3, "color": 1 }, "20463": { "id": 20463, "name": "铁索", "type": 2, "number": 3, "color": 4 }, "20464": { "id": 20464, "name": "铁索", "type": 2, "number": 3, "color": 2 }, "20465": { "id": 20465, "name": "兵粮", "type": 2, "number": 4, "color": 3 }, "20466": { "id": 20466, "name": "兵粮", "type": 2, "number": 4, "color": 1 }, "20467": { "id": 20467, "name": "兵粮", "type": 2, "number": 4, "color": 4 }, "20468": { "id": 20468, "name": "兵粮", "type": 2, "number": 4, "color": 2 }, "20469": { "id": 20469, "name": "借刀", "type": 2, "number": 3, "color": 3 }, "20470": { "id": 20470, "name": "借刀", "type": 2, "number": 3, "color": 1 }, "20471": { "id": 20471, "name": "借刀", "type": 2, "number": 3, "color": 4 }, "20472": { "id": 20472, "name": "借刀", "type": 2, "number": 3, "color": 2 }, "20473": { "id": 20473, "name": "火攻", "type": 2, "number": 11, "color": 3 }, "20474": { "id": 20474, "name": "火攻", "type": 2, "number": 11, "color": 1 }, "20475": { "id": 20475, "name": "火攻", "type": 2, "number": 11, "color": 4 }, "20476": { "id": 20476, "name": "火攻", "type": 2, "number": 11, "color": 2 }, "20477": { "id": 20477, "name": "无中", "type": 2, "number": 10, "color": 3 }, "20478": { "id": 20478, "name": "无中", "type": 2, "number": 10, "color": 1 }, "20479": { "id": 20479, "name": "无中", "type": 2, "number": 10, "color": 4 }, "20480": { "id": 20480, "name": "无中", "type": 2, "number": 10, "color": 2 }, "20501": { "id": 20501, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20502": { "id": 20502, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20503": { "id": 20503, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20504": { "id": 20504, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20505": { "id": 20505, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20506": { "id": 20506, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "20507": { "id": 20507, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "20508": { "id": 20508, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "20509": { "id": 20509, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "20510": { "id": 20510, "name": "雌雄", "type": 3, "number": 2, "color": 3 }, "20511": { "id": 20511, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "20512": { "id": 20512, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "20513": { "id": 20513, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "20514": { "id": 20514, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "20515": { "id": 20515, "name": "青釭", "type": 3, "number": 6, "color": 3 }, "20516": { "id": 20516, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "20517": { "id": 20517, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "20518": { "id": 20518, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "20519": { "id": 20519, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "20520": { "id": 20520, "name": "青龙", "type": 3, "number": 5, "color": 3 }, "20521": { "id": 20521, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "20522": { "id": 20522, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "20523": { "id": 20523, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "20524": { "id": 20524, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "20525": { "id": 20525, "name": "丈八", "type": 3, "number": 12, "color": 3 }, "20526": { "id": 20526, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "20527": { "id": 20527, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "20528": { "id": 20528, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "20529": { "id": 20529, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "20530": { "id": 20530, "name": "贯石", "type": 3, "number": 5, "color": 2 }, "20531": { "id": 20531, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "20532": { "id": 20532, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "20533": { "id": 20533, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "20534": { "id": 20534, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "20535": { "id": 20535, "name": "麒麟", "type": 3, "number": 5, "color": 1 }, "20536": { "id": 20536, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "20537": { "id": 20537, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "20538": { "id": 20538, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "20539": { "id": 20539, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "20540": { "id": 20540, "name": "古锭", "type": 3, "number": 1, "color": 3 }, "20541": { "id": 20541, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "20542": { "id": 20542, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "20543": { "id": 20543, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "20544": { "id": 20544, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "20545": { "id": 20545, "name": "朱雀", "type": 3, "number": 1, "color": 2 }, "20546": { "id": 20546, "name": "方天", "type": 3, "number": 12, "color": 2 }, "20547": { "id": 20547, "name": "方天", "type": 3, "number": 12, "color": 2 }, "20548": { "id": 20548, "name": "方天", "type": 3, "number": 12, "color": 2 }, "20549": { "id": 20549, "name": "方天", "type": 3, "number": 12, "color": 2 }, "20550": { "id": 20550, "name": "方天", "type": 3, "number": 12, "color": 2 }, "20551": { "id": 20551, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "20552": { "id": 20552, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "20553": { "id": 20553, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "20554": { "id": 20554, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "20555": { "id": 20555, "name": "寒冰", "type": 3, "number": 2, "color": 3 }, "20556": { "id": 20556, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "20557": { "id": 20557, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "20558": { "id": 20558, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "20559": { "id": 20559, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "20560": { "id": 20560, "name": "八卦", "type": 3, "number": 2, "color": 4 }, "20561": { "id": 20561, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "20562": { "id": 20562, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "20563": { "id": 20563, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "20564": { "id": 20564, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "20565": { "id": 20565, "name": "仁王", "type": 3, "number": 2, "color": 4 }, "20566": { "id": 20566, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "20567": { "id": 20567, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "20568": { "id": 20568, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "20569": { "id": 20569, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "20570": { "id": 20570, "name": "藤甲", "type": 3, "number": 2, "color": 3 }, "20571": { "id": 20571, "name": "白银", "type": 3, "number": 1, "color": 4 }, "20572": { "id": 20572, "name": "白银", "type": 3, "number": 1, "color": 4 }, "20573": { "id": 20573, "name": "白银", "type": 3, "number": 1, "color": 4 }, "20574": { "id": 20574, "name": "白银", "type": 3, "number": 1, "color": 4 }, "20575": { "id": 20575, "name": "白银", "type": 3, "number": 1, "color": 4 }, "20576": { "id": 20576, "name": "减一", "type": 3, "number": 5, "color": 1 }, "20577": { "id": 20577, "name": "减一", "type": 3, "number": 5, "color": 1 }, "20578": { "id": 20578, "name": "减一", "type": 3, "number": 5, "color": 1 }, "20579": { "id": 20579, "name": "减一", "type": 3, "number": 5, "color": 1 }, "20580": { "id": 20580, "name": "减一", "type": 3, "number": 5, "color": 1 }, "20581": { "id": 20581, "name": "减一", "type": 3, "number": 13, "color": 2 }, "20582": { "id": 20582, "name": "减一", "type": 3, "number": 13, "color": 2 }, "20583": { "id": 20583, "name": "减一", "type": 3, "number": 13, "color": 2 }, "20584": { "id": 20584, "name": "减一", "type": 3, "number": 13, "color": 2 }, "20585": { "id": 20585, "name": "减一", "type": 3, "number": 13, "color": 2 }, "20586": { "id": 20586, "name": "减一", "type": 3, "number": 13, "color": 3 }, "20587": { "id": 20587, "name": "减一", "type": 3, "number": 13, "color": 3 }, "20588": { "id": 20588, "name": "减一", "type": 3, "number": 13, "color": 3 }, "20589": { "id": 20589, "name": "减一", "type": 3, "number": 13, "color": 3 }, "20590": { "id": 20590, "name": "减一", "type": 3, "number": 13, "color": 3 }, "20591": { "id": 20591, "name": "加一", "type": 3, "number": 5, "color": 3 }, "20592": { "id": 20592, "name": "加一", "type": 3, "number": 5, "color": 3 }, "20593": { "id": 20593, "name": "加一", "type": 3, "number": 5, "color": 3 }, "20594": { "id": 20594, "name": "加一", "type": 3, "number": 5, "color": 3 }, "20595": { "id": 20595, "name": "加一", "type": 3, "number": 5, "color": 3 }, "20596": { "id": 20596, "name": "加一", "type": 3, "number": 5, "color": 4 }, "20597": { "id": 20597, "name": "加一", "type": 3, "number": 5, "color": 4 }, "20598": { "id": 20598, "name": "加一", "type": 3, "number": 5, "color": 4 }, "20599": { "id": 20599, "name": "加一", "type": 3, "number": 5, "color": 4 }, "20600": { "id": 20600, "name": "加一", "type": 3, "number": 5, "color": 4 }, "20601": { "id": 20601, "name": "加一", "type": 3, "number": 13, "color": 1 }, "20602": { "id": 20602, "name": "加一", "type": 3, "number": 13, "color": 1 }, "20603": { "id": 20603, "name": "加一", "type": 3, "number": 13, "color": 1 }, "20604": { "id": 20604, "name": "加一", "type": 3, "number": 13, "color": 1 }, "20605": { "id": 20605, "name": "加一", "type": 3, "number": 13, "color": 1 }, "20606": { "id": 20606, "name": "加一", "type": 3, "number": 13, "color": 2 }, "20607": { "id": 20607, "name": "加一", "type": 3, "number": 13, "color": 2 }, "20608": { "id": 20608, "name": "加一", "type": 3, "number": 13, "color": 2 }, "20609": { "id": 20609, "name": "加一", "type": 3, "number": 13, "color": 2 }, "20610": { "id": 20610, "name": "加一", "type": 3, "number": 13, "color": 2 }, "20611": { "id": 20611, "name": "无双", "type": 3, "number": 12, "color": 2 }, "20612": { "id": 20612, "name": "无双", "type": 3, "number": 12, "color": 2 }, "20613": { "id": 20613, "name": "无双", "type": 3, "number": 12, "color": 2 }, "20614": { "id": 20614, "name": "无双", "type": 3, "number": 12, "color": 2 }, "20615": { "id": 20615, "name": "无双", "type": 3, "number": 12, "color": 2 }, "20616": { "id": 20616, "name": "束发", "type": 3, "number": 1, "color": 2 }, "20617": { "id": 20617, "name": "束发", "type": 3, "number": 1, "color": 2 }, "20618": { "id": 20618, "name": "束发", "type": 3, "number": 1, "color": 2 }, "20619": { "id": 20619, "name": "束发", "type": 3, "number": 1, "color": 2 }, "20620": { "id": 20620, "name": "束发", "type": 3, "number": 1, "color": 2 }, "20621": { "id": 20621, "name": "红锦", "type": 3, "number": 1, "color": 4 }, "20622": { "id": 20622, "name": "红锦", "type": 3, "number": 1, "color": 4 }, "20623": { "id": 20623, "name": "红锦", "type": 3, "number": 1, "color": 4 }, "20624": { "id": 20624, "name": "红锦", "type": 3, "number": 1, "color": 4 }, "20625": { "id": 20625, "name": "红锦", "type": 3, "number": 1, "color": 4 }, "20626": { "id": 20626, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "20627": { "id": 20627, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "20628": { "id": 20628, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "20629": { "id": 20629, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "20630": { "id": 20630, "name": "玲珑", "type": 3, "number": 2, "color": 3 }, "20631": { "id": 20631, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "20632": { "id": 20632, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "20633": { "id": 20633, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "20634": { "id": 20634, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "20635": { "id": 20635, "name": "鬼龙", "type": 3, "number": 5, "color": 3 }, "20636": { "id": 20636, "name": "国风", "type": 3, "number": 9, "color": 3 }, "20637": { "id": 20637, "name": "国风", "type": 3, "number": 9, "color": 3 }, "20638": { "id": 20638, "name": "国风", "type": 3, "number": 9, "color": 3 }, "20639": { "id": 20639, "name": "国风", "type": 3, "number": 9, "color": 3 }, "20640": { "id": 20640, "name": "国风", "type": 3, "number": 9, "color": 3 }, "20641": { "id": 20641, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "20642": { "id": 20642, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "20643": { "id": 20643, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "20644": { "id": 20644, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "20645": { "id": 20645, "name": "赤炎", "type": 3, "number": 1, "color": 2 }, "20646": { "id": 20646, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "20647": { "id": 20647, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "20648": { "id": 20648, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "20649": { "id": 20649, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "20650": { "id": 20650, "name": "奇门", "type": 3, "number": 2, "color": 3 }, "20651": { "id": 20651, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "20652": { "id": 20652, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "20653": { "id": 20653, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "20654": { "id": 20654, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "20655": { "id": 20655, "name": "绝尘", "type": 3, "number": 5, "color": 3 }, "20656": { "id": 20656, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "20657": { "id": 20657, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "20658": { "id": 20658, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "20659": { "id": 20659, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "20660": { "id": 20660, "name": "修罗", "type": 3, "number": 12, "color": 2 }, "20661": { "id": 20661, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "20662": { "id": 20662, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "20663": { "id": 20663, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "20664": { "id": 20664, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "20665": { "id": 20665, "name": "虚妄", "type": 3, "number": 4, "color": 4 }, "20666": { "id": 20666, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "20667": { "id": 20667, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "20668": { "id": 20668, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "20669": { "id": 20669, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "20670": { "id": 20670, "name": "赤血", "type": 3, "number": 6, "color": 3 }, "20671": { "id": 20671, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "20672": { "id": 20672, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "20673": { "id": 20673, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "20674": { "id": 20674, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "20675": { "id": 20675, "name": "鸾凤", "type": 3, "number": 2, "color": 3 }, "20676": { "id": 20676, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "20677": { "id": 20677, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "20678": { "id": 20678, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "20679": { "id": 20679, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "20680": { "id": 20680, "name": "七彩", "type": 3, "number": 13, "color": 1 }, "20681": { "id": 20681, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "20682": { "id": 20682, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "20683": { "id": 20683, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "20684": { "id": 20684, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "20685": { "id": 20685, "name": "三尖", "type": 3, "number": 12, "color": 2 }, "20686": { "id": 20686, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "20687": { "id": 20687, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "20688": { "id": 20688, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "20689": { "id": 20689, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "20690": { "id": 20690, "name": "吴六", "type": 3, "number": 6, "color": 2 }, "20691": { "id": 20691, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20692": { "id": 20692, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20693": { "id": 20693, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20694": { "id": 20694, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20695": { "id": 20695, "name": "护心", "type": 3, "number": 1, "color": 4 }, "20696": { "id": 20696, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "20697": { "id": 20697, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "20698": { "id": 20698, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "20699": { "id": 20699, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "20700": { "id": 20700, "name": "七宝", "type": 3, "number": 6, "color": 3 }, "20701": { "id": 20701, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "20702": { "id": 20702, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "20703": { "id": 20703, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "20704": { "id": 20704, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "20705": { "id": 20705, "name": "百辟", "type": 3, "number": 2, "color": 3 }, "20706": { "id": 20706, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "20707": { "id": 20707, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "20708": { "id": 20708, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "20709": { "id": 20709, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "20710": { "id": 20710, "name": "镔铁", "type": 3, "number": 13, "color": 2 }, "20711": { "id": 20711, "name": "五行", "type": 3, "number": 1, "color": 2 }, "20712": { "id": 20712, "name": "五行", "type": 3, "number": 1, "color": 2 }, "20713": { "id": 20713, "name": "五行", "type": 3, "number": 1, "color": 2 }, "20714": { "id": 20714, "name": "五行", "type": 3, "number": 1, "color": 2 }, "20715": { "id": 20715, "name": "五行", "type": 3, "number": 1, "color": 2 }, "20716": { "id": 20716, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "20717": { "id": 20717, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "20718": { "id": 20718, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "20719": { "id": 20719, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "20720": { "id": 20720, "name": "乌铁", "type": 3, "number": 13, "color": 3 }, "20721": { "id": 20721, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "20722": { "id": 20722, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "20723": { "id": 20723, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "20724": { "id": 20724, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "20725": { "id": 20725, "name": "黑光", "type": 3, "number": 2, "color": 4 }, "20726": { "id": 20726, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "20727": { "id": 20727, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "20728": { "id": 20728, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "20729": { "id": 20729, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "20730": { "id": 20730, "name": "铜雀", "type": 3, "number": 5, "color": 4 }, "20731": { "id": 20731, "name": "天机", "type": 3, "number": 12, "color": 4 }, "20732": { "id": 20732, "name": "天机", "type": 3, "number": 12, "color": 4 }, "20733": { "id": 20733, "name": "天机", "type": 3, "number": 12, "color": 4 }, "20734": { "id": 20734, "name": "天机", "type": 3, "number": 12, "color": 4 }, "20735": { "id": 20735, "name": "天机", "type": 3, "number": 12, "color": 4 }, "20736": { "id": 20736, "name": "太公", "type": 3, "number": 2, "color": 3 }, "20737": { "id": 20737, "name": "太公", "type": 3, "number": 2, "color": 3 }, "20738": { "id": 20738, "name": "太公", "type": 3, "number": 2, "color": 3 }, "20739": { "id": 20739, "name": "太公", "type": 3, "number": 2, "color": 3 }, "20740": { "id": 20740, "name": "太公", "type": 3, "number": 2, "color": 3 }, "20741": { "id": 20741, "name": "三略", "type": 3, "number": 5, "color": 3 }, "20742": { "id": 20742, "name": "三略", "type": 3, "number": 5, "color": 3 }, "20743": { "id": 20743, "name": "三略", "type": 3, "number": 5, "color": 3 }, "20744": { "id": 20744, "name": "三略", "type": 3, "number": 5, "color": 3 }, "20745": { "id": 20745, "name": "三略", "type": 3, "number": 5, "color": 3 }, "20746": { "id": 20746, "name": "护心", "type": 3, "number": 2, "color": 4 }, "20747": { "id": 20747, "name": "护心", "type": 3, "number": 2, "color": 4 }, "20748": { "id": 20748, "name": "护心", "type": 3, "number": 2, "color": 4 }, "20749": { "id": 20749, "name": "护心", "type": 3, "number": 2, "color": 4 }, "20750": { "id": 20750, "name": "护心", "type": 3, "number": 2, "color": 4 }, "20751": { "id": 20751, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "20752": { "id": 20752, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "20753": { "id": 20753, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "20754": { "id": 20754, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "20755": { "id": 20755, "name": "禅让", "type": 3, "number": 13, "color": 3 }, "20756": { "id": 20756, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "20757": { "id": 20757, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "20758": { "id": 20758, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "20759": { "id": 20759, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "20760": { "id": 20760, "name": "蛇灵", "type": 3, "number": 12, "color": 4 }, "20761": { "id": 20761, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "20762": { "id": 20762, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "20763": { "id": 20763, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "20764": { "id": 20764, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "20765": { "id": 20765, "name": "金乌", "type": 3, "number": 5, "color": 1 }, "20766": { "id": 20766, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "20767": { "id": 20767, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "20768": { "id": 20768, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "20769": { "id": 20769, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "20770": { "id": 20770, "name": "刑天", "type": 3, "number": 5, "color": 2 }, "20771": { "id": 20771, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "20772": { "id": 20772, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "20773": { "id": 20773, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "20774": { "id": 20774, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "20775": { "id": 20775, "name": "照骨", "type": 3, "number": 1, "color": 2 }, "20776": { "id": 20776, "name": "三首", "type": 3, "number": 12, "color": 2 }, "20777": { "id": 20777, "name": "三首", "type": 3, "number": 12, "color": 2 }, "20778": { "id": 20778, "name": "三首", "type": 3, "number": 12, "color": 2 }, "20779": { "id": 20779, "name": "三首", "type": 3, "number": 12, "color": 2 }, "20780": { "id": 20780, "name": "三首", "type": 3, "number": 12, "color": 2 }, "20781": { "id": 20781, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20782": { "id": 20782, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20783": { "id": 20783, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20784": { "id": 20784, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20785": { "id": 20785, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20786": { "id": 20786, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20787": { "id": 20787, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20788": { "id": 20788, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20789": { "id": 20789, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20790": { "id": 20790, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20791": { "id": 20791, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20792": { "id": 20792, "name": "诸葛", "type": 3, "number": 1, "color": 2 }, "20794": { "id": 20794, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20795": { "id": 20795, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20796": { "id": 20796, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20797": { "id": 20797, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20798": { "id": 20798, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20799": { "id": 20799, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20800": { "id": 20800, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20801": { "id": 20801, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20802": { "id": 20802, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20803": { "id": 20803, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20804": { "id": 20804, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20805": { "id": 20805, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20806": { "id": 20806, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20807": { "id": 20807, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20808": { "id": 20808, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20809": { "id": 20809, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20810": { "id": 20810, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20811": { "id": 20811, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20812": { "id": 20812, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20813": { "id": 20813, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20814": { "id": 20814, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20815": { "id": 20815, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20816": { "id": 20816, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20817": { "id": 20817, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20818": { "id": 20818, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20819": { "id": 20819, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20820": { "id": 20820, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20821": { "id": 20821, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20822": { "id": 20822, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20823": { "id": 20823, "name": "杀", "type": 1, "number": 1, "color": 3 }, "20824": { "id": 20824, "name": "断魂", "type": 3, "number": 5, "color": 3 }, "20825": { "id": 20825, "name": "昆仑", "type": 3, "number": 12, "color": 3 }, "20826": { "id": 20826, "name": "螭纹", "type": 3, "number": 5, "color": 1 }, "20827": { "id": 20827, "name": "平安", "type": 3, "number": 13, "color": 2 }, "20828": { "id": 20828, "name": "雷震", "type": 3, "number": 1, "color": 4 }, "20829": { "id": 20829, "name": "暗器", "type": 3, "number": 5, "color": 1 }, "20830": { "id": 20830, "name": "铁甲", "type": 3, "number": 2, "color": 4 }, "20831": { "id": 20831, "name": "斩魂", "type": 3, "number": 2, "color": 3 }, "20832": { "id": 20832, "name": "妖刀", "type": 3, "number": 6, "color": 3 }, "20833": { "id": 20833, "name": "钩镶", "type": 3, "number": 2, "color": 3 }, "20836": { "id": 20836, "name": "断魂", "type": 3, "number": 5, "color": 1 }, "20837": { "id": 20837, "name": "断魂", "type": 3, "number": 5, "color": 2 }, "20838": { "id": 20838, "name": "断魂", "type": 3, "number": 5, "color": 3 }, "20839": { "id": 20839, "name": "断魂", "type": 3, "number": 5, "color": 4 }, "20840": { "id": 20840, "name": "断魂", "type": 3, "number": 5, "color": 3 }, "20841": { "id": 20841, "name": "昆仑", "type": 3, "number": 12, "color": 1 }, "20842": { "id": 20842, "name": "昆仑", "type": 3, "number": 12, "color": 2 }, "20843": { "id": 20843, "name": "昆仑", "type": 3, "number": 12, "color": 3 }, "20844": { "id": 20844, "name": "昆仑", "type": 3, "number": 12, "color": 4 }, "20845": { "id": 20845, "name": "昆仑", "type": 3, "number": 12, "color": 3 }, "20846": { "id": 20846, "name": "螭纹", "type": 3, "number": 5, "color": 1 }, "20847": { "id": 20847, "name": "螭纹", "type": 3, "number": 5, "color": 2 }, "20848": { "id": 20848, "name": "螭纹", "type": 3, "number": 5, "color": 3 }, "20849": { "id": 20849, "name": "螭纹", "type": 3, "number": 5, "color": 4 }, "20850": { "id": 20850, "name": "螭纹", "type": 3, "number": 5, "color": 1 }, "20851": { "id": 20851, "name": "平安", "type": 3, "number": 13, "color": 1 }, "20852": { "id": 20852, "name": "平安", "type": 3, "number": 13, "color": 2 }, "20853": { "id": 20853, "name": "平安", "type": 3, "number": 13, "color": 3 }, "20854": { "id": 20854, "name": "平安", "type": 3, "number": 13, "color": 4 }, "20855": { "id": 20855, "name": "平安", "type": 3, "number": 13, "color": 2 }, "20856": { "id": 20856, "name": "雷震", "type": 3, "number": 1, "color": 1 }, "20857": { "id": 20857, "name": "雷震", "type": 3, "number": 1, "color": 2 }, "20858": { "id": 20858, "name": "雷震", "type": 3, "number": 1, "color": 3 }, "20859": { "id": 20859, "name": "雷震", "type": 3, "number": 1, "color": 4 }, "20860": { "id": 20860, "name": "雷震", "type": 3, "number": 1, "color": 4 }, "20861": { "id": 20861, "name": "暗器", "type": 3, "number": 5, "color": 1 }, "20862": { "id": 20862, "name": "暗器", "type": 3, "number": 5, "color": 2 }, "20863": { "id": 20863, "name": "暗器", "type": 3, "number": 5, "color": 3 }, "20864": { "id": 20864, "name": "暗器", "type": 3, "number": 5, "color": 4 }, "20865": { "id": 20865, "name": "暗器", "type": 3, "number": 5, "color": 1 }, "20866": { "id": 20866, "name": "铁甲", "type": 3, "number": 2, "color": 1 }, "20867": { "id": 20867, "name": "铁甲", "type": 3, "number": 2, "color": 2 }, "20868": { "id": 20868, "name": "铁甲", "type": 3, "number": 2, "color": 3 }, "20869": { "id": 20869, "name": "铁甲", "type": 3, "number": 2, "color": 4 }, "20870": { "id": 20870, "name": "铁甲", "type": 3, "number": 2, "color": 4 }, "20871": { "id": 20871, "name": "斩魂", "type": 3, "number": 2, "color": 1 }, "20872": { "id": 20872, "name": "斩魂", "type": 3, "number": 2, "color": 2 }, "20873": { "id": 20873, "name": "斩魂", "type": 3, "number": 2, "color": 3 }, "20874": { "id": 20874, "name": "斩魂", "type": 3, "number": 2, "color": 4 }, "20875": { "id": 20875, "name": "斩魂", "type": 3, "number": 2, "color": 3 }, "20876": { "id": 20876, "name": "妖刀", "type": 3, "number": 6, "color": 1 }, "20877": { "id": 20877, "name": "妖刀", "type": 3, "number": 6, "color": 2 }, "20878": { "id": 20878, "name": "妖刀", "type": 3, "number": 6, "color": 3 }, "20879": { "id": 20879, "name": "妖刀", "type": 3, "number": 6, "color": 4 }, "20880": { "id": 20880, "name": "妖刀", "type": 3, "number": 6, "color": 3 }, "20881": { "id": 20881, "name": "钩镶", "type": 3, "number": 2, "color": 1 }, "20882": { "id": 20882, "name": "钩镶", "type": 3, "number": 2, "color": 2 }, "20883": { "id": 20883, "name": "钩镶", "type": 3, "number": 2, "color": 3 }, "20884": { "id": 20884, "name": "钩镶", "type": 3, "number": 2, "color": 4 }, "20885": { "id": 20885, "name": "钩镶", "type": 3, "number": 2, "color": 3 }, "30100": { "id": 30100, "name": "思召", "type": 3, "number": 6, "color": 2 } };
  function getCardNumAndSuit(cardID) {
    let cardNum = allCard[cardID] ? allCard[cardID]["number"] : 0;
    let cardSuit = "";
    let cardNumAndSuit = "";
    let cardNumAJQK = "";
    if (allCard[cardID]) {
      if (allCard[cardID]["color"] == 1) {
        cardSuit = "♥";
      } else if (allCard[cardID]["color"] == 2) {
        cardSuit = "♦";
      } else if (allCard[cardID]["color"] == 3) {
        cardSuit = "♠";
      } else if (allCard[cardID]["color"] == 4) {
        cardSuit = "♣";
      }
    } else {
      cardSuit = "";
    }
    if (cardNum == 12) {
      cardNumAJQK = "Q";
    } else if (cardNum == 13) {
      cardNumAJQK = "K";
    } else if (cardNum == 11) {
      cardNumAJQK = "J";
    } else if (cardNum == 1) {
      cardNumAJQK = "A";
    } else {
      cardNumAJQK = cardNum;
    }
    cardNumAndSuit = cardSuit + cardNumAJQK;
    let res = { cardNumAndSuit, cardNum, cardSuit };
    return res;
  }
  function allCardToCurrentMode(cardList) {
    let currentMode = {};
    currentMode["0"] = { ...allCard["0"] };
    for (const cid of cardList) {
      currentMode[cid] = allCard[cid] || { ...allCard["0"] };
    }
    return currentMode;
  }
  function currentModeCardType(cards) {
    const cardInfoMap = {};
    Object.values(cards).forEach((card2) => {
      const cardName = card2.name;
      const cardType = card2.type;
      if (cardName !== "?") {
        if (!cardInfoMap[cardName]) {
          cardInfoMap[cardName] = { cardNum: 1, cardType };
        } else {
          cardInfoMap[cardName].cardNum += 1;
        }
      }
    });
    return cardInfoMap;
  }
  function transformLetter(num) {
    switch (num) {
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return num;
    }
  }
  var variable = `<head>
    <title>三国杀打小抄</title>
    <meta charset=UTF-8>
    <style type=text/css>
        ::-webkit-scrollbar {
            width: 5px;
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            border: 1px solid rgb(5, 5, 5);
        }

        ::-webkit-scrollbar-thumb {
            background: rgb(95, 86, 63);
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgb(44, 44, 44);
        }

        * {
            width: 100%;
            margin: 0;
            padding: 0;
            font-size: 13px; /* 默认字体大小，可以根据需要调整 */
        }

        body {
            width: 100%;
            background: rgb(50, 50, 50);
            background-size: cover; /* 背景图的适应方式，可以根据需求调整 */
            color: #f2de9c;
            display: flex;
            flex-direction: column;
            margin: 0px;
            user-select: none;
            max-width: 100vw; /* 限制页面宽度不超过屏幕宽度 */
            overflow-x: hidden; /* 隐藏水平滚动条 */
        }

        .nav {
            width: 100%;
            background: rgb(50, 50, 50);
            text-align: center;
        }

        .nav1 {
            font-weight: bolder;
            height: 20px;
            width: 100%;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            margin-right: 15px;
            display: block;
        }
        #nav1:empty {
            display: none;
        }

        .nav2 {
            height: 20px;
            width: 49%;
            float: right;
            text-align: center;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            margin-left: 3px;
            border: 1px solid #f2de9c;
            display: block;
            border-radius: 5px;
        }

        .nav2:hover {
            color: #f2de9c;
            background: rgb(55, 40, 32);
            border: 1px solid #f2de9c;
        }

        .nav2:focus {
            background: rgb(55, 40, 32);
            box-shadow: 1px 1px 3px #f2de9c;
        }

        .content {
            width: 100%;
            float: right;
        }

        .orderAndShouPai {
            width: 100%;
            overflow: hidden;
            display: inline-block;
        }

        .order {
            width: 100%;
            overflow: hidden;
        }
        .ACContainer {
            width: 100%;
            overflow: hidden;
        }

        .AC-head {
            padding: 5px;
            font-weight: bolder;
            height: 55px;
            width: 11%;
            float: right;
            text-align: center;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            margin: 5px;
            display: block;
            border-radius: 5px;
            border: 1px rgb(50, 50, 50) solid;
            box-shadow: 1px 0px 3px;
            overflow: hidden;
        }
        .AC-head:hover {
            color: #f2de9c;
            background: rgb(55, 40, 32);
            border: 1px rgb(50, 50, 50) solid;
            animation: blink 2s;
            animation-iteration-count: infinite;
        }
        .AC-body {
            padding: 5px;
            height: 55px;
            width: 80%;
            float: left;
            display: block;
            box-shadow: 1px 0px 3px;
            border: 1px rgb(50, 50, 50) solid;
            color: #f2de9c;
            margin: 5px;
            overflow: hidden;
            border-radius: 5px;
            background: rgb(50, 50, 50);
            resize:none
        }
        .orderContainer {
            width: 100%;
            overflow: hidden;
            margin:1px
        }


        .order-head {
            font-weight: bolder;
            width: 10%;
            height: 25px;
            float: left;
            text-align: center;
            color: #f2de9c;
            margin-left: 3px;
        }

        .order-body:empty {
            padding: 5px;
            height: 35px;
            width: 81%;
            float: right;
            display: block;
            box-shadow: 1px 1px 3px;
            margin: 1px;
            overflow: hidden;
            border-radius: 5px;
        }

        .order-body {
            padding: 5px;
            height: auto;
            width: 81%;
            float: right;
            display: block;
            box-shadow: 1px 1px 3px;
            margin: 1px;
            overflow: hidden;
            border-radius: 5px;
        }
        /*.No1:after {*/
        /*    text-align: center;*/
        /*    content: '夏侯渊';*/
        /*    position: absolute;*/
        /*    bottom: 0;*/
        /*    right: 5px;*/
        /*    z-index: -1;*/
        /*    font: 800 20px 'Arial Black';*/
        /*    -webkit-text-fill-color: transparent;*/
        /*    -webkit-text-stroke-width: 1px;*/
        /*}*/

        .chain {
            /*background-image: linear-gradient(to right, black 20%, red 20%, red 80%, black 80%);*/
            /*background-size: 50px 10px; !* 设置小正方形的宽度和高度 *!*/
            /*background-repeat: repeat-x; !* 设置正方形的重复方式 *!*/
            background-position: center; /* 将背景居中 */
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAXCAMAAAA1KD/rAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9QTFRF/wAA/1UA/2Yz/2IU/14c/14b/2Mc/2IaljkEYzALw1AI/2EeKiEaNzMrhk8UWllOcW5iFhIRRkM5/2Ih/1Uc5tOI4QAAABV0Uk5TAQMFDRsTJDyB2l1M/fvx/f//+S8J97xe+gAAAIlJREFUeJxlkEkOwzAMA0kv6QIfWiD/f2VOFWzVS+KminTymJQEEqZIC5wF3oJABbX2ARaruFlwP61RV60P/yOadWGi43w3SwLiDoQahS+o/zQkw3tSyNjyFiJKayDsijm0wbp2CLol16HHYT73ywqfKPMwl9PGMAMpcPWPEf/F1YJLhJhhac/uC2w8KNCgjCwwAAAAAElFTkSuQmCC');
            background-repeat: repeat-x; /* 设置背景在水平方向上重复 */
        }
        .shoupai {
            --shoupaiR-width: 35px;
            font-weight: bolder;
            margin-right: calc(30px - var(--shoupaiR-width));
            float: left;
            width: var(--shoupaiR-width);
            height: 45px;
            border: 1px solid black;
            text-align: center;
            color: black;
            background: rgb(210, 200, 160);
            box-shadow: inset 3px 3px 6px #111;
            border-radius: 5px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", Tahoma, Arial, sans-serif;
        }
        .shoupaiR {
            --shoupaiR-width: 35px;
            font-weight: bolder;
            margin-right: calc(30px - var(--shoupaiR-width));
            float: left;
            width: var(--shoupaiR-width);
            height: 45px;
            border: 1px solid black;
            text-align: center;
            color: red;
            border-radius: 5px;
            background: rgb(210, 200, 160);
            box-shadow: inset 3px 3px 6px #111;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", Tahoma, Arial, sans-serif;
        }
        .shoupaiG {
            background: grey;
        }

        .knownShouPai {
            border: 1px rgb(50, 50, 50) solid;
            animation: blink 2s;
            animation-iteration-count: infinite;
        }

        .knownCardsInHand {
            text-align: center;
            position: relative;
            overflow: hidden;
            display: none;
            height: auto;
        }

        .knownCards:empty {
            text-align: center;
            position: relative;
            overflow: hidden;
            display: none;
        }

        .knownCards {
            width: 81%;
            text-align: center;
            position: relative;
            overflow: hidden;
            height: auto;
        }

        @keyframes blink {
            50% {
                border-color: #f2de9c;
            }
        }
        .knownCards:after {
            text-align: center;
            content: '场上手牌';
            position: absolute;
            bottom: 0;
            right: 5px;
            z-index: -1;
            font: 800 20px 'Arial Black';
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
        }
        #quanBian:after {
            text-align: center;
            content: '权变牌';
            position: absolute;
            bottom: 0;
            right: 5px;
            z-index: -1;
            font: 800 20px 'Arial Black';
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
        }
        #yanXi:after {
            text-align: center;
            content: '宴戏牌';
            position: absolute;
            bottom: 0;
            right: 5px;
            z-index: -1;
            font: 800 20px 'Arial Black';
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
        }
        .cardTypeDetail:after {
            text-align: center;
            content: '牌堆类型详情';
            position: absolute;
            bottom: 0;
            right: 5px;
            z-index: -1;
            font: 800 20px 'Arial Black';
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
        }

        .ding {
            text-align: center;
            width: 100%;
            position: relative;
            height: auto;
            display: none;

        }

        .dingCards {
            text-align: center;
            position: relative;
            height: auto;
            min-height: 60px;
            display: none;
        }

        .dingCards:after {
            content: '第一张为牌堆顶';
            position: absolute;
            bottom: 0;
            right: 5px;
            z-index: -1;
            font: 800 20px 'Arial Black';
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
        }

        .di {
            text-align: center;
            width: 100%;
            position: relative;
            height: auto;
            display: none;
        }

        .diCards {
            text-align: center;
            position: relative;
            height: auto;
            min-height: 60px;
            display: none;

        }

        .diCards:after {
            content: '第一张为牌堆底';
            position: absolute;
            bottom: 0;
            right: 5px;
            z-index: -1;
            font: 800 20px 'Arial Black';
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;

        }

        .cardDetail {
            width: 100%;
            overflow: hidden;
            display: inline-block;
        }

        .type {
            width: 100%;
            float: left;
        }

        .cardTypeContainer {
            width: 100%;
            overflow: hidden;
            display: block;
        }

        .type-head {
            width: 10%;
            float: left;
            text-align: center;
            color: #f2de9c;
            margin-left: 3px;
            display: block;
            overflow: hidden;
            cursor: pointer;
        }

        .type-body {
            padding: 5px;
            width: 81%;
            float: right;
            display: block;
            box-shadow: 1px 1px 3px;
            margin: 1px;
            overflow: hidden;
            border-radius: 5px;
        }

        .cardType {
            font-size: 12px;
            width: 25%;
            height: 22px;
            float: left;
            text-align: center;
            border: 1px;
            margin: 0;
            background: rgb(210, 200, 160);
            box-shadow: inset 1px 1px 3px #000;
        }
        .cardType:hover {
            color: #f2de9c;
            background: rgb(55, 40, 32);
        }
        .storeDetail {
            font-size: 12px;
            width: 50%;
            height: 22px;
            float: left;
            text-align: center;
            border: 1px;
            margin: 0;
            background: rgb(210, 200, 160);
            box-shadow: inset 1px 1px 3px #000;
        }

        .detail {
            width: 100%;
            float: left;
            overflow: hidden;
        }

        .detail-head {
            width: 10%;
            height: 25px;
            float: left;
            text-align: center;
            color: #f2de9c;
            margin-left: 3px;
        }
        .detail-body {
            min-height: 40px;
            padding: 5px;
            width: 81%;
            float: right;
            display: block;
            box-shadow: 1px 1px 3px;
            margin: 1px;
            border-radius: 5px;
            overflow: hidden;
        }
        .r {
            color: rgb(240, 65, 85);
        }

        .suitRec {
            width: 50%;
            float: right;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", Tahoma, Arial, sans-serif;
            text-shadow:
                    1px 0 0 rgba(255, 255, 255, 0.7),
                    0 1px 0 rgba(255, 255, 255, 0.7),
                    -1px 0 0 rgba(255, 255, 255, 0.7),
                    0 -1px 0 rgba(255, 255, 255, 0.7);        }

        .suit {
            width: 50%;
            float: left;
        }
        .phrase {
            float: left;
        }
        .face {
            width: 20%;
            display: block;
            float: left;
        }
        .face:hover{
            width: 20%;
            display: block;
            float: left;
            background: #f2de9c;
        }
        #shandian {
            width: 100%;
            float: left;
        }

        .function {
            width: 50%;
            float: left;
        }

        .jizhan {
            width: 100%;
            float: left;
        }

        .yanjiao {
            width: 100%;
            float: left;
        }

        .calRes {
            width: 100%;
            height: 20px;
            float: left;
            text-align: center;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            border: 1px solid #f2de9c;
            display: block;
            border-radius: 5px;
            font-size: 13px;

        }

        .calRes:hover {
            font-size: 12px;
            color: #f2de9c;
            background: rgb(55, 40, 32);
            border: 1px solid #f2de9c;
        }

        .mizhuBtn {
            width: 100%;
            height: 20px;
            float: left;
            text-align: center;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            border: 1px solid #f2de9c;
            display: block;
            border-radius: 5px;
        }

        .mizhuBtn:hover {
            color: #f2de9c;
            background: rgb(55, 40, 32);
            border: 1px solid #f2de9c;
        }

        .mizhu {
            width: 100%;
            height: 20px;
            float: left;
            text-align: center;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            margin-left: 3px;
            border: 1px solid #f2de9c;
            display: block;
            border-radius: 5px;
        }

        .mizhu:hover {
            color: #f2de9c;
            background: rgb(55, 40, 32);
            border: 1px solid #f2de9c;
        }


        #mySeatID1 {
            width: 46%;
            display: none;
            float: left;
        }

        #mySeatID2 {
            width: 46%;
            display: none;
            float: left;
        }

        .res {
            width: 100%;
            float: left;
        }

        .tooltip {
            position: relative;
            display: inline-block;
            text-align: center;
        }
        a:link, a:visited {
            color: inherit; /* or the specific color you want */
            text-decoration: none; /* Remove underline if desired */
            display: inline-flex; /* Use flexbox for centering */
            /*padding: 10px 20px; !* Add padding for button-like appearance *!*/
            border: 1px solid #f2de9c;
            border-radius: 5px; /* Rounded corners */
            cursor: pointer; /* Pointer cursor on hover */
            align-items: center; /* Vertically center */
            justify-content: center; /* Horizontally center */

        }
        a:hover {
            background-color: rgb(55, 40, 32);; /* Darken background on hover */
        }
        .tooltiptext {
            width: 200px; /* 设置 tooltip 宽度，根据需要调整 */
            visibility: hidden;
            background-color: black;
            top: 900px; /* 调整 tooltip 与按钮的垂直距离 */
            left: 50%; /* 将 left 设置为 50% */
            transform: translateX(-50%); /* 使 tooltip 水平居中 */
            color: #f2de9c;
            text-align: left;
            padding: 5px 10px; /* 调整 padding 样式 */
            border-radius: 6px;
            position: fixed; /* 使用 fixed 定位 */
            z-index: 1;
        }

        #donate {
            position: relative;
            color: #f2de9c;
            display: inline-block;
            text-align: center;
        }

        .uuid {
            position: relative;
            color: #f2de9c;
            display: inline-block;
            text-align: center;
            cursor: pointer; /* Change cursor to pointer on hover */

        }


        .uuid:hover {
            background: rgb(55, 40, 32);
        }

        .uuid:active {
            background: rgb(55, 40, 32);
        }

        .tooltip .tooltiptext {
            width: 100%;
            visibility: hidden;
            background-color: black;
            top: 50%; /* 将 top 设为 50% */
            left: 50%;
            transform: translate(-50%, -50%); /* 使用 transform 属性进行居中 */
            color: #f2de9c;
            text-align: left;
            padding: 5px 0;
            border-radius: 6px;
            position: absolute;
            z-index: 1;
        }

        .tooltip:hover .tooltiptext {
            visibility: visible;
        }

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
        }

        .width {
            width: 100%;
            height: 5px;
            clear:both;
        }
        .switch-container {
            display: flex;
            /*flex-wrap: wrap;*/
        }

        .switch {
            position: relative;
            display: inline-block;
            margin-left: 10px;
            width: 56px; /* 计算每个容器的宽度，考虑了左侧的 margin */
            height: 26px;
        }


        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgb(70, 70, 70);
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;
            border: 1px solid #f2de9c;

        }

        .slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 2px;
            bottom: 2px;
            background-color: #f2de9c;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: rgb(55, 40, 32);
        }

        input:focus + .slider {
            box-shadow: 0 0 1px rgb(55, 40, 32);
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(32px); /* 修改了偏移量以适应滑块的更大范围 */
            -ms-transform: translateX(32px);
            transform: translateX(32px);
        }

        .status {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 5px; /* 调整位置 */
            color: #555; /* 文字颜色 */
        }

        .explanation {
            margin: 10px;
        }
        input:checked + .slider + .status:before {
            content: "开";
        }

        input + .slider + .status:before {
            content: "关";

        }
    </style>
    <script type="module" src= "https://gcore.jsdelivr.net/npm/sweetalert2@11"><\/script>

    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5C3C11THB3"><\/script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5C3C11THB3');
    <\/script>
</head>

<body>

<div class='nav'>
    <div id='nav1'></div>
    <div class='nav1' id='phrase'>当前阶段提示</div>
</div>
<div class='content' id='content'>
    <div class='orderAndShouPai' id='orderAndShouPai'>
        <div class='order' id='button'>
            <div class='orderContainer' id='or1'>
                <div class='order-head or1'>一</div>
                <div class='order-body No1' id='1'>
                    <button class='shoupaiR' id = 'test'>♦K <br>测试</button>
                    <button class='shoupai'>♣Q <br>测试</button>

                </div>
            </div>
            <div class='orderContainer'  id='or2'>
                <div class='order-head or2'>二</div>
                <div class='order-body No2' id='2'>
<!--                    <button class='shoupaiR shoupaiG'>♣Q <br>卡牌</button>-->
                    <button class='shoupai shoupaiG'>♥10 <br>测试</button>
                </div>
            </div>
            <div class='orderContainer'  id='or3'>
                <div class='order-head or3'>三</div>
                <div class='order-body No3' id='3'></div>
            </div>
            <div class='orderContainer' id='or4'>
                <div class='order-head or4'>四</div>
                <div class='order-body No4' id='4'></div>
            </div>
            <div class='orderContainer' id='or5'>
                <div class='order-head or5'>五</div>
                <div class='order-body No5' id='5'></div>
            </div>
            <div class='orderContainer' id='or6'>
                <div class='order-head or6'>六</div>
                <div class='order-body No6' id='6'></div>
            </div>
            <div class='orderContainer' id='or7'>
                <div class='order-head or7'>七</div>
                <div class='order-body No7' id='7'></div>
            </div>
            <div class='orderContainer' id='or8'>
                <div class='order-head or8'>八</div>
                <div class='order-body No8' id='8'></div>
            </div>
            <div class='orderContainer'>
                <div class='order-head knownCardsInHand' id='knownCardsInHand'>场上手牌</div>
                <div class='order-body knownCards' id='knownCards'></div>

            </div>
            <div class='orderContainer'>
                <div class='order-body knownCards quanBianYanXi' id='quanBian'></div>
                <div class='order-body knownCards quanBianYanXi' id='yanXi'></div>

            </div>
            <div class='orderContainer'>
                <div class='order-head ding' id='ding'></div>
                <div class='order-body dingCards' id='dingCards'>
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                </div>
            </div>
            <div class='orderContainer'>
                <div class='order-head di' id='di'></div>
                <div class='order-body diCards' id='diCards'>
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                    <!--                                      <button class='shoupaiR'>♦6 <br>酒 </button>-->
                </div>
            </div>
    </div>
    <div class = 'width'></div>
    <div class='cardDetail' id='cardDetail'>
        <div class=space></div>
        <div class=detail>
            <div class='detail-head' id='detail'>
                <b>功能</b>
            </div>
            <div class='detail-body'>
                <div class='suit r' id='heart'>♥红桃 ×</div>
                <div class='suit' id='spade'>♠黑桃 ×</div>
                <div class='suit' id='club'>♣梅花 ×</div>
                <div class='suit r' id='diamond'>♦方片 ×</div>
                <div class='suit r' id='hongsha'>红杀 ×</div>
                <div class='suit' id='heisha' n>黑杀 ×</div>
                <div class='sha' id='sha'>剩余出杀次数：指记入次数的杀</div>
                <span> 乱击/权变花色</span>
                <div class='suitRec' id='suit'></div>
                <br>
                <span> 博图</span>
                <div class='suitRec' id='boTu'></div>
                <br>
                <span>上一张使用的牌</span><br>
                <button class='shoupaiR' id='lastUseCard'>＾＾<br>•ω•</button>
                <br>
                <br>
                <br>
                <div id='guhuo' style='display: none'>蛊惑牌</div>
                <div class='function jizhan' id='jizhan'>吉占点数</div>
                <div class='function yanjiao' id='yanjiao'>严教小抄</div>
                <button class='function mizhuBTN' id='mizhu'>糜竺小抄</button>
                <button class='function mizhu mySeatID' id='mySeatID1'>座位：1</button>
                <button class='function mizhu mySeatID' id='mySeatID2'>座位：2</button>
                <div class='function res' id='res'>结果样式：1 1 1 1 = 4</div>
            </div>
        </div>
        <div class='width'></div>
        <div class=type>
            <div class='cardTypeContainer'>
                <div class='type-head' id='jiben'><b>基本</b></div>
                <div class='type-body type1' id='type1'>
                    <button class=cardType id = 'test1'>12寒冰</button>
                    <button class=cardType>12寒冰</button>
                    <button class=cardType>12寒冰</button>
                    <button class=cardType>12寒冰</button>
                </div>
            </div>
            <div class='cardTypeContainer'>
                <div class='type-head' id='jinnang'><b>锦囊</b></div>
                <div class='type-body type2' id='type2'>
                    <button class=cardType>12寒冰</button>
                    <button class=cardType>12寒冰</button>
                    <button class=cardType>12寒冰</button>
                    <button class=cardType>12寒冰</button>
                </div>
            </div>
            <div class='cardTypeContainer'>
                <div class='type-head' id='zhuangbei'><b>装备</b></div>
                <div class='type-body type3' id='type3'>
                    <button class='cardType tooltip'>12寒冰</button>
                    <button class='cardType tooltip'>12寒冰</button>
                    <button class='cardType tooltip'>12寒冰</button>
                </div>
            </div>
            <div class='orderContainer'>
                <div class='order-body knownCards cardTypeDetail' id='cardTypeDetail'></div>
            </div>
        </div>
    </div>
    <div class='width'></div>

    <div class='store' id='store'>
        <div class=space></div>
        <div class=detail>
            <div class='detail-head'>
                <b>集市</b>
            </div>
            <div class='detail-body' id = 'storeDetail'>
                <button class=storeDetail>集市霸王·壹300</button>
                <button class=storeDetail>集市霸王·贰200</button>
                <button class=storeDetail>集市霸王·叁100</button>
                <button class=storeDetail>会员商店·肆1100</button>
                <button class=storeDetail>稳定承载1100</button>
                <button class=storeDetail>极奢1100</button>

            </div>
        </div>
        <div class='width'></div>
    </div>
    <div class='chat' id='chat'>
        <div class=space></div>
        <div class=detail>
            <div class='detail-head'>
                <b>聊天</b>
<!--                <b>点击复制</b>-->
            </div>
            <div class='detail-body chat-body'>
                <!--                    <img class='face' src = 'https://web.sanguosha.com/220/h5_2/res/runtime/pc/Face/11.png'>-->
<!--                    <img class='face' src = 'https://web.sanguosha.com/220/h5_2/res/runtime/pc/Face/12.png'>-->
<!--                    <img class='face' src = 'https://web.sanguosha.com/220/h5_2/res/runtime/pc/Face/13.png'>-->
<!--                    <img class='face' src = 'https://web.sanguosha.com/220/h5_2/res/runtime/pc/Face/14.png'>-->
<!--                    <img class='face' src = 'https://web.sanguosha.com/220/h5_2/res/runtime/pc/Face/15.png'>-->

            </div>
        </div>
        <div class='width'></div>
    </div>
    <div class='CDK'>
        <div class=space></div>
        <div class=detail>
            <div class='detail-head'>
                <b>兑换码</b>
            </div>
            <div class='detail-body'>
                <div class='function res' id='CDK'></div>
            </div>
        </div>
        <div class='width'></div>
    </div>
    <div class='lottery'>
        <div class=space></div>
        <div class=detail>
            <div class='detail-head'>
                <b>祈愿台</b>
            </div>
            <div class='detail-body'>
                <div id='lottery'>
                    <a href="https://goka.top:8080/choujiang?username=" target='_blank' id = 'choujiang'>点击查看祈愿台数据</a>
                </div>
            </div>
        </div>
        <div class='width'></div>
    </div>

<!--    </div>-->
<!--            <div class='cardType tooltip' >查看说明-->
<!--                      <span class=tooltiptext>-->
<!--                          <div>说明</div>-->
<!--                    <li>插件在军争、国战自动打开</li>-->
<!--                    <li>牌堆指的是未知牌堆，包括未知手牌和剩余牌堆的牌</li>-->
<!--                    <li>洗牌后可以计算出场上未知手牌，相当于攻心全场</li>-->
<!--                    <li>严教计算器自动出结果</li>-->
<!--                    <li>使用前可以先用演武看看功能</li>-->
<!--                    <li>其他牌堆和功能逐步完善，如果没被ban的话</li>-->
<!--                    <li>有任何问题或者建议可以添加群：562224095</li>-->
<!--                    <button class='shoupaiR'>♦Q <br>测试</button>-->
<!--                    <button class='shoupaiR'>♥10 <br>测试</button>-->
<!--                    <button class='shoupaiR'>♥10 <br>测试</button>-->
<!--            </span>-->
<!--            </div>-->

    <div>
        <div class='order-body' id='PlayerTianGuo'>  你的天过次数/总次数 </div>
        <div class='width'></div>
        <div class='order-body' id='AITianGuo'>  各官阶天过概率（%）
<!--            <br>-->
<!--            1：1<br>-->
<!--        2:2</div>-->


    </div>
    <div class='width'></div>
    <div class = 'ACContainer'>
        <textarea class = 'AC-body' type='text' id='AC' name='AC' required  maxlength="10" size="10" placeholder = '点击添加界小抄激活码&#13;&#10;当前激活码有效期至&#13;&#10;2024年12月12日'></textarea>
        <button class = 'AC-head' type='submit' id='ACSubmit'>激活</button>
    </div>
    <a href='https://afdian.com/@yimadaO_o' id='donate' target='_blank'>情寄三顾之恩 获取界小抄</a>
    <div class='width'></div>
    <a href='https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=qb1ct-cUIWEuJui7awqqky2TjXK2PZBb&authKey=UXwsRaT8vgqs%2Fgv3Y%2BPWMt4YOvsPOUhLkNzvwHTKoF%2Bj%2Fq43CaZjCM2JEdF1V373&noverify=0&group_code=917826431'  id='donate' target='_blank'>加新群一起玩</a>
    <div class='width'></div>
    <div class='uuid id' id='uuid'>id：123456789</div>
    <div class='uuid nickName' id='nickName'>昵称：西瓜</div>
    <div class='width'></div>
    <hr>
        <div class="switch-container">
            <div>
                <span class="explanation">皮肤体验</span>
                <br>
                <label class="switch">
                    <input id="skinSwitch" type="checkbox">
                    <span class="slider"></span>
                    <span class="status"></span>
                </label>
            </div>
            <div id = 'skinStateButton' style = 'display: none'>
                <span class="explanation">动态皮肤</span>
                <br>
                <label class="switch">
                    <input id="skinStateSwitch" type="checkbox">
                    <span class="slider"></span>
                    <span class="status"></span>
                </label>
            </div>
        </div>

        <div class="switch-container">
            <div style = 'display: none'>
                <span class="explanation">金色卡背</span>
                <br>
                <label class="switch">
                    <input id="cardBackSwitch" type="checkbox">
                    <span class="slider"></span>
                    <span class="status"></span>
                </label>
            </div>
            <div>
                <span class="explanation">五阶特效</span>
                <br>
                <label class="switch">
                    <input id="generalSwitch" type="checkbox">
                    <span class="slider"></span>
                    <span class="status"></span>
                </label>
            </div>
        </div>
        <div>
            <span class="explanation">明牌框框</span>
            <br>
            <label class="switch">
                <input id="seatUISwitch" type="checkbox">
                <span class="slider"></span>
                <span class="status"></span>
            </label>
        </div>
        </div>

    </div>
    <div class='width'></div>

</div>
</div>
</body>`;
  const skinHTML = "<head>         <meta charset=UTF-8>         <style type=text/css>             ::-webkit-scrollbar{width: 5px; height: 12px;}             ::-webkit-scrollbar-track{border: 1px solid rgb(5,5,5);}             ::-webkit-scrollbar-thumb{background: rgb(95,86,63);}             ::-webkit-scrollbar-thumb:hover{background: rgb(44,44,44);}             .skinList {                 padding:5px;                margin: 2px;                 user-select:none;            }         </style>     </head> <body><img class = 'skinList' id = '102' src ='https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/11211.png' ></img></body>";
  const gameState = {
    seat: 0,
    //用于座位安排
    isFirstTime: true,
    //第一次不会弹出skin窗口，只有oldGeneralID != GeneralID 时（新一局游戏）， 才会 isFirstTime = true；新一局游戏开始重置
    isGameStart: false,
    isSeatOrder: false,
    //座位是否安排好了
    isFrameAdd: false,
    idOrder: {},
    //key为玩家id，value为实际座位顺序
    idOrderPre: [],
    //按顺序存储idOrder
    idOrderPreSet: /* @__PURE__ */ new Set(),
    //按顺序存储idOrder
    isDuanXian: false,
    mySeatID: /* @__PURE__ */ new Set(),
    // 用于糜竺，可能包括不仅仅两个人的
    GuoZhanGeneral: [],
    myID: -1,
    //仅仅用于自己
    boTu: /* @__PURE__ */ new Set(),
    luanJi: /* @__PURE__ */ new Set(),
    quanBian: /* @__PURE__ */ new Set(),
    quanBianCards: /* @__PURE__ */ new Set(),
    yanXiCards: /* @__PURE__ */ new Set(),
    huaMu: /* @__PURE__ */ new Set(),
    enableBoTu: false,
    enableLuanJi: false,
    enableQuanBian: false,
    enableHuaMu: false,
    isClickSkinSelect: false,
    curGeneral: -1,
    oldGeneralID: 999,
    GeneralID: 999,
    userID: 1234567,
    Nickname: "西瓜",
    curOfficerLv: 1,
    v: false,
    goods: {},
    lotteries: []
  };
  localStorage.getItem("SKIN_SWITCH") ? (
    // 如果存在，则使用该值
    localStorage.getItem("SKIN_SWITCH")
  ) : (
    // 否则，设置为 false，并将 "SKIN_SWITCH" 设置为 false 默认关闭
    (localStorage.setItem("SKIN_SWITCH", false), false)
  );
  localStorage.getItem("GENERAL_SWITCH") ? (
    // 如果存在，则使用该值
    localStorage.getItem("GENERAL_SWITCH")
  ) : (
    // 否则，设置为 false，并将 "GENERAL_SWITCH" 设置为 false 默认关闭
    (localStorage.setItem("GENERAL_SWITCH", false), false)
  );
  localStorage.getItem("SKIN_STATE_SWITCH") ? (
    // 如果存在，则使用该值
    localStorage.getItem("SKIN_STATE_SWITCH")
  ) : (
    // 否则，设置为 true，并将 "SKIN_SWITCH" 设置为 true 默认为开启
    (localStorage.setItem("SKIN_STATE_SWITCH", true), true)
  );
  localStorage.getItem("CARD_BACK_SWITCH") ? (
    // 如果存在，则使用该值
    localStorage.getItem("CARD_BACK_SWITCH")
  ) : (
    // 否则，设置为 false，并将 "SKIN_SWITCH" 设置为 false 默认为关闭
    (localStorage.setItem("CARD_BACK_SWITCH", false), false)
  );
  localStorage.getItem("SEAT_UI_SWITCH") ? (
    // 如果存在，则使用该值
    localStorage.getItem("SEAT_UI_SWITCH")
  ) : (
    // 否则，设置为 true，返回true 默认为开启
    (localStorage.setItem("SEAT_UI_SWITCH", true), true)
  );
  const globalConfig = {
    skinSwitch: localStorage.getItem("SKIN_SWITCH") == "true" ? true : false,
    generalSwitch: localStorage.getItem("GENERAL_SWITCH") == "true" ? true : false,
    skinState: localStorage.getItem("SKIN_STATE_SWITCH") == "true" ? true : false,
    cardBackSwitch: localStorage.getItem("CARD_BACK_SWITCH") == "true" ? true : false,
    seatUISwitch: localStorage.getItem("SEAT_UI_SWITCH") == "true" ? true : false,
    closeIframe: false,
    dropItem: {},
    secId: {},
    currentSec: 0
  };
  const deckState = {
    paidui: /* @__PURE__ */ new Set(),
    //, 别人摸未知牌不会改变,自己mainID摸牌会减少的牌,场上有明牌都会被移出,此牌堆包括别人手牌
    qipai: /* @__PURE__ */ new Set(),
    //zone2 弃牌
    chuli: /* @__PURE__ */ new Set(),
    //zone3 处理区
    newShouPai: { 0: /* @__PURE__ */ new Set(), 1: /* @__PURE__ */ new Set(), 2: /* @__PURE__ */ new Set(), 3: /* @__PURE__ */ new Set(), 4: /* @__PURE__ */ new Set(), 5: /* @__PURE__ */ new Set(), 6: /* @__PURE__ */ new Set(), 7: /* @__PURE__ */ new Set() },
    //key为seat id而不是id，value为 zone5 手牌区
    newIdOrder: { 0: -1, 1: -1, 2: -1, 3: -1, 4: -1, 5: -1, 6: -1, 7: -1 },
    //key为玩家id，value为实际座位顺序
    biaoji: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] },
    //key为玩家id，value为zone4 标记区
    shoupai: { 0: /* @__PURE__ */ new Set(), 1: /* @__PURE__ */ new Set(), 2: /* @__PURE__ */ new Set(), 3: /* @__PURE__ */ new Set(), 4: /* @__PURE__ */ new Set(), 5: /* @__PURE__ */ new Set(), 6: /* @__PURE__ */ new Set(), 7: /* @__PURE__ */ new Set() },
    //key为seat id而不是id，value为 zone5 手牌区
    chainStatus: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false },
    //key为实际座位号而不是id，value为 铁索连环状态
    zhuangbei: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] },
    //key为玩家id，value为zone6 装备区
    panding: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] },
    //key为玩家id，value为zone7 判定区
    jineng: /* @__PURE__ */ new Set(),
    //观星询询会会出现
    zone10: /* @__PURE__ */ new Set(),
    ding: [],
    di: [],
    suits: {
      diamond: 0,
      spade: 0,
      heart: 0,
      club: 0,
      spade2_9: 0,
      hongsha: 0,
      heisha: 0
    },
    knownShouPai: /* @__PURE__ */ new Set(),
    unknownCard: [],
    temShouPai: /* @__PURE__ */ new Set(),
    //用于处理临时手牌
    remShouPai: /* @__PURE__ */ new Set(),
    //洗牌后剩余手牌
    remCardCount: 0
  };
  const room = {
    cardList: [],
    size: 8,
    firstSeatID: 0,
    currentMode: {},
    infos: {},
    //记录是不是机器人
    currentCardType: {}
    //cardType 基本1锦囊2装备3其他4
  };
  const UI = {
    seatWidthPercent: 0.3,
    firstUpdateSeatUI: false,
    scoreFrameTotal: 10,
    scoreFrameIndex: 0,
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 0,
    paddingLeftTopExtra: 0,
    selectStarted: false,
    leftRightTop: 25,
    stackCardAreaHeight: 0,
    stackCardAreaY: 0,
    MAX_SEAT_WIDTH: 149,
    inPopFirstTarget: false,
    unscaledWidth: 146,
    unscaledHeight: 172,
    MAX_HEIGHT: 180,
    MAX_WIDTH: 150,
    scale: 1,
    selfSeatUiUnscaledHeight: 178,
    rightBarWidth: 221
  };
  const initMap = {};
  let combos = [];
  function toClipboard(text) {
    var correction = {
      1: "⒈",
      2: "⒉",
      3: "⒊",
      4: "⒋",
      5: "⒌",
      6: "⒍",
      7: "⒎",
      8: "⒏",
      9: "⒐",
      "J": "Ⓙ",
      "Q": "Ⓠ",
      "K": "Ⓚ",
      "+": " ",
      10: "⒑"
    };
    Object.keys(correction).forEach((key) => {
      text = text.replaceAll(key, correction[key]);
    });
    const layaContainer = document.getElementById("layaContainer");
    const observer = new MutationObserver((mutationsList, observer2) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.target.tagName === "INPUT") {
          const inputElement = mutation.target;
          inputElement.value = text;
        }
      }
    });
    const obConfig = { attributes: true, subtree: true };
    observer.observe(layaContainer, obConfig);
    setTimeout(() => {
      observer.disconnect();
    }, 5e3);
    if (window.clipboardData && window.clipboardData.setData) {
      return window.clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return prompt("Copy to clipboard: Ctrl+C, Enter", text);
      } finally {
        document.body.removeChild(textarea);
      }
    }
    const config = { attributes: true, subtree: true };
    observer.observe(layaContainer, config);
  }
  function calcResult(arr) {
    combos = [];
    arr.sort();
    findCombos(arr);
  }
  function findCombos(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      printCombination(arr, arr.length, i);
    }
    findPairs(arr);
  }
  function printCombination(arr, n, r) {
    var data = [];
    combinationUtil(arr, n, r, 0, data, 0);
  }
  function combinationUtil(arr, n, r, index, data, i) {
    if (index === r) {
      var insertable = [];
      for (var i = 0; i < data.length; i++) {
        insertable.push(data[i]);
      }
      combos.push(insertable);
      return;
    }
    if (i >= n) {
      return;
    }
    data[index] = arr[i];
    combinationUtil(arr, n, r, index + 1, data, i + 1);
    combinationUtil(arr, n, r, index, data, i + 1);
  }
  function findPairs(arr) {
    var pairs = [];
    for (var i = 0; i < combos.length; i++) {
      for (var j = i + 1; j < combos.length; j++) {
        if (sum(combos[i]) === sum(combos[j])) {
          var pair1 = combos[i];
          var pair2 = combos[j];
          var concat = pair1.concat(pair2).sort();
          var origin = arr.sort();
          var is_same = concat.length === origin.length && concat.every(function(element, index) {
            return element === origin[index];
          });
          var b2 = 0, c = 0, cIndex = 0, is_subarray = false;
          while (b2 < origin.length && c < concat.length) {
            if (origin[b2] === concat[c]) {
              b2++;
              c++;
              cIndex++;
              if (c === concat.length) {
                is_subarray = true;
              }
            } else {
              if (origin[b2] !== concat[cIndex]) {
                b2++;
              }
              c = cIndex;
            }
          }
          if (is_same || is_subarray) {
            pairs.push(toLetter(combos[i]).join("+") + " = " + toLetter(combos[j]).join("+"));
          }
        }
      }
    }
    if (pairs.length === 0) {
      document.getElementById("iframe-source").contentWindow.document.getElementById("res").innerHTML = "<span style='color: red'>这道题冲儿算不出来</span>";
      return;
    }
    var sortedPairs = pairs.sort(function(a, b3) {
      if (b3.length !== a.length) {
        return b3.length - a.length;
      } else {
        return Math.abs(parseInt(b3.length / 2) - a.indexOf("=")) - Math.abs(parseInt(b3.length / 2) - b3.indexOf("="));
      }
    });
    var filteredPairs = [];
    sortedPairs.filter(function(value, index, array) {
      if (!containsStr(filteredPairs, value)) {
        filteredPairs.push(value);
      }
    });
    if (filteredPairs.length > 3) {
      filteredPairs = filteredPairs.slice(0, 3);
    }
    drawYanJiao(filteredPairs, "res");
  }
  function containsStr(arr, str) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return true;
      }
    }
    return false;
  }
  function toLetter(combo) {
    var toLetter2 = [];
    for (var i = 0; i < combo.length; i++) {
      toLetter2.push(transformLetter(combo[i]));
    }
    return toLetter2;
  }
  function sum(arr) {
    var sum2 = 0;
    for (var i = 0; i < arr.length; i++) {
      sum2 += arr[i];
    }
    return sum2;
  }
  function JiZhanCal(cardNum) {
    var bigger = 0;
    var smaller = 0;
    for (const card2 of deckState.paidui) {
      if (parseInt(getCardNumAndSuit(card2)["cardNum"]) > cardNum) {
        bigger++;
      }
      if (parseInt(getCardNumAndSuit(card2)["cardNum"]) < cardNum) {
        smaller++;
      }
    }
    document.getElementById("iframe-source").contentWindow.document.getElementById("jizhan").innerHTML = "牌堆比" + cardNum + "大张数：" + bigger + "<br>牌堆比" + cardNum + "小张数：" + smaller;
  }
  function MiZhuCal(arr, n) {
    let pathArrSet = /* @__PURE__ */ new Set();
    let MiZhuRes = [];
    var opsize = Math.pow(2, arr.length);
    for (let counter = 1; counter < opsize; counter++) {
      let pathArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let pathSum = 0;
      for (let j = 0; j < n; j++) {
        if ((counter & 1 << j) != 0) {
          pathSum += arr[j];
          pathArr[arr[j]]++;
        }
      }
      if (pathSum == 13 && !pathArrSet.has(JSON.stringify(pathArr))) {
        pathArrSet.add(JSON.stringify(pathArr));
        var toPathArr = [];
        for (let i = 1; i <= 13; i++) {
          for (let j = 0; j < pathArr[i]; j++) {
            toPathArr.push(i);
          }
        }
        MiZhuRes.push(toPathArr);
        if (MiZhuRes.length >= 10) {
          return MiZhuRes;
        }
      }
    }
    return MiZhuRes;
  }
  function drawChatFace() {
    let list = [30, 44, 46, 34, 41, 26, 59, 58, 57, 16];
    for (let i of list) {
      var link = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/Face/" + i + ".png";
      var img = document.createElement("img");
      img.src = link;
      img.classList.add("face");
      img.onmousedown = function() {
        toClipboardNoFliter("#" + i);
      };
      document.getElementById("iframe-source").contentWindow.document.getElementsByClassName("chat-body")[0].appendChild(img);
    }
  }
  function toClipboardNoFliter(text) {
    if (window.clipboardData && window.clipboardData.setData) {
      return window.clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return prompt("Copy to clipboard: Ctrl+C, Enter", text);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
  function drawRemShouPai(remShouPai) {
    var knownCardsDiv = document.getElementById("iframe-source").contentWindow.document.getElementById("knownCards");
    var knownCardsInHandDiv = document.getElementById("iframe-source").contentWindow.document.getElementById("knownCardsInHand");
    const shoupaiDIV = document.createElement("div");
    for (const c of remShouPai) {
      var button = document.createElement("button");
      if (getCardNumAndSuit(c)["cardSuit"] == "♦" || getCardNumAndSuit(c)["cardSuit"] == "♥") {
        button.className = "shoupaiR";
      } else {
        button.className = "shoupai";
      }
      let emoji = document.createElement("span");
      emoji.innerText = getCardNumAndSuit(c)["cardNumAndSuit"];
      button.appendChild(emoji);
      button.appendChild(document.createElement("br"));
      button.innerHTML += allCard[c] ? allCard[c]["name"] : "?";
      shoupaiDIV.append(button);
    }
    knownCardsDiv.style.border = "1px rgb(40,40,40) solid";
    knownCardsDiv.style.animation = "blink 2s";
    knownCardsDiv.style.animationIterationCount = "infinite";
    knownCardsDiv.innerHTML = shoupaiDIV.innerHTML;
    if (!knownCardsDiv.innerText == "") {
      knownCardsInHandDiv.style.display = "block";
    }
  }
  function drawDingOrDi(ding, di) {
    var DingCardsDiv = document.getElementById("iframe-source").contentWindow.document.getElementById("dingCards");
    var DiCardsDiv = document.getElementById("iframe-source").contentWindow.document.getElementById("diCards");
    DingCardsDiv.innerText = "";
    DiCardsDiv.innerText = "";
    var dingReverse = ding.slice().reverse();
    for (const c of dingReverse) {
      var button = document.createElement("button");
      if (getCardNumAndSuit(c)["cardSuit"] == "♦" || getCardNumAndSuit(c)["cardSuit"] == "♥") {
        button.className = "shoupaiR";
      } else {
        button.className = "shoupai";
      }
      let emoji = document.createElement("span");
      emoji.innerText = getCardNumAndSuit(c)["cardNumAndSuit"];
      button.appendChild(emoji);
      button.appendChild(document.createElement("br"));
      button.innerHTML += allCard[c] ? allCard[c]["name"] : "?";
      DingCardsDiv.append(button);
    }
    var diReverse = di.slice().reverse();
    for (const c of diReverse) {
      var button = document.createElement("button");
      if (getCardNumAndSuit(c)["cardSuit"] == "♦" || getCardNumAndSuit(c)["cardSuit"] == "♥") {
        button.className = "shoupaiR";
      } else {
        button.className = "shoupai";
      }
      let emoji = document.createElement("span");
      emoji.innerText = getCardNumAndSuit(c)["cardNumAndSuit"];
      button.appendChild(emoji);
      button.appendChild(document.createElement("br"));
      button.innerHTML += allCard[c] ? allCard[c]["name"] : "?";
      DiCardsDiv.append(button);
    }
    DingCardsDiv.innerHTML = DingCardsDiv.innerHTML;
    DiCardsDiv.innerHTML = DiCardsDiv.innerHTML;
    if (DiCardsDiv.innerText == "") {
      DiCardsDiv.style.display = "none";
    } else {
      DiCardsDiv.style.display = "block";
    }
    if (DingCardsDiv.innerText == "") {
      DingCardsDiv.style.display = "none";
    } else {
      DingCardsDiv.style.display = "block";
    }
  }
  function drawYanJiao(filteredPairs, div) {
    var YanJiaoResHTML = document.getElementById("iframe-source").contentWindow.document.getElementById(div);
    YanJiaoResHTML.innerText = "";
    if (filteredPairs.length == 0 && div == "CDK") {
      filteredPairs = ["现在暂无兑换码", "迟点再看看吧"];
    }
    for (let sebs of filteredPairs) {
      let span = document.createElement("button");
      span.className = "calRes";
      span.innerText = sebs;
      span.onmousedown = function() {
        if (div == "CDK") {
          toClipboardNoFliter(sebs);
        } else {
          toClipboard(sebs);
        }
        span.innerText = "复制成功";
        setTimeout(() => {
          span.textContent = sebs;
        }, "500");
      };
      YanJiaoResHTML.append(span);
      var br = document.createElement("br");
      YanJiaoResHTML.append(br);
    }
  }
  function drawStore(filteredPairs) {
    var StoreHTML = document.getElementById("iframe-source").contentWindow.document.getElementById("storeDetail");
    StoreHTML.innerText = "";
    if (filteredPairs.length == 0) {
      filteredPairs = ["暂无集市数据"];
    }
    for (let sebs of filteredPairs) {
      let span = document.createElement("button");
      span.className = "storeDetail";
      span.innerText = sebs;
      StoreHTML.append(span);
    }
  }
  function drawLottery(secId, itemId, count, times) {
    if (document.getElementById("iframe-source").contentWindow.document.getElementById("sec" + secId) == null) {
      let toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById("lottery");
      const secDIV = document.createElement("div");
      const secName = document.createElement("div");
      secName.innerHTML = globalConfig.secId[secId] + " 次数：" + times + "<br>";
      secName.id = "sec" + secId + "+times";
      secDIV.id = "sec" + secId;
      secDIV.append(secName);
      toBeAdd2.append(secDIV);
      toBeAdd2.append(document.createElement("hr"));
    }
    if (typeof document.getElementById("iframe-source").contentWindow.document.getElementById("sec" + secId) != "undefined" && document.getElementById("iframe-source").contentWindow.document.getElementById(secId + "+" + itemId) == null) {
      const secName = document.getElementById("iframe-source").contentWindow.document.getElementById("sec" + secId + "+times");
      secName.innerHTML = globalConfig.secId[secId] + " 次数：" + times + "<br>";
      let toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById("sec" + secId);
      const div = document.createElement("div");
      div.className = "suit";
      const itemName = document.createElement("span");
      const itemCount = document.createElement("span");
      itemName.innerText = globalConfig.dropItem[itemId] + " * ";
      itemCount.innerText = count;
      itemName.id = secId + "+" + itemId;
      itemCount.id = secId + "+" + itemId + "+number";
      div.append(itemName);
      div.append(itemCount);
      toBeAdd2.appendChild(div);
    } else if (typeof document.getElementById("iframe-source").contentWindow.document.getElementById(secId) != "undefined" && document.getElementById("iframe-source").contentWindow.document.getElementById(secId + "+" + itemId) != null) {
      const secName = document.getElementById("iframe-source").contentWindow.document.getElementById("sec" + secId + "+times");
      secName.innerHTML = globalConfig.secId[secId] + " 次数：" + times + "<br>";
      let itemCountElement = document.getElementById("iframe-source").contentWindow.document.getElementById(secId + "+" + itemId + "+number");
      let itemCount = parseInt(itemCountElement.innerText);
      itemCount += count;
      itemCountElement.innerText = itemCount;
    }
  }
  function drawMiZhu(MiZhuRes) {
    var MiZhuResHTML = document.getElementById("iframe-source").contentWindow.document.getElementById("res");
    MiZhuResHTML.innerText = "";
    if (MiZhuRes.length == 0) {
      document.getElementById("iframe-source").contentWindow.document.getElementById("res").innerHTML = "<span style='color: red'>这道题冲儿算不出来</span>";
    } else {
      for (let sebs of MiZhuRes) {
        let span = document.createElement("span");
        let spanText = "";
        span.className = "calRes";
        for (let seb of sebs) {
          spanText += " " + transformLetter(seb);
        }
        span.innerText = spanText;
        span.onmousedown = function() {
          toClipboard(spanText);
          span.innerText = "复制成功";
          setTimeout(() => {
            span.textContent = spanText;
          }, "500");
        };
        MiZhuResHTML.append(span);
        var br = document.createElement("br");
        MiZhuResHTML.append(br);
      }
    }
  }
  function drawCard(shoupai) {
    let toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById("lastUseCard");
    const shoupaiDIV = document.createElement("div");
    for (const s of shoupai) {
      if (s == "0") {
        continue;
      }
      var button = document.createElement("button");
      if (getCardNumAndSuit(s)["cardSuit"] == "♦" || getCardNumAndSuit(s)["cardSuit"] == "♥") {
        button.className = "shoupaiR";
      } else {
        button.className = "shoupai";
      }
      let emoji = document.createElement("span");
      emoji.innerText = getCardNumAndSuit(s)["cardNumAndSuit"];
      button.appendChild(emoji);
      button.appendChild(document.createElement("br"));
      button.innerHTML += allCard[s] ? allCard[s]["name"] : "?";
      shoupaiDIV.append(button);
    }
    toBeAdd2.innerHTML = shoupaiDIV.innerHTML;
  }
  function drawShouPai(shoupai, idOrderPre, knownShouPai) {
    var toBeAdd2;
    for (let i = 0; i < idOrderPre.length; i++) {
      let seatID = (i + 1).toString();
      toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById(seatID);
      const shoupaiDIV = document.createElement("div");
      for (const s of shoupai[i]) {
        if (s == "0") {
          continue;
        }
        var button = document.createElement("button");
        if (getCardNumAndSuit(s)["cardSuit"] == "♦" || getCardNumAndSuit(s)["cardSuit"] == "♥") {
          button.className = "shoupaiR";
        } else {
          button.className = "shoupai";
        }
        if (knownShouPai.has(s)) {
          button.classList.add("knownShouPai");
        }
        let emoji = document.createElement("span");
        emoji.innerText = getCardNumAndSuit(s)["cardNumAndSuit"];
        button.appendChild(emoji);
        button.appendChild(document.createElement("br"));
        button.innerHTML += allCard[s] ? allCard[s]["name"] : "?";
        shoupaiDIV.append(button);
      }
      toBeAdd2.innerHTML = shoupaiDIV.innerHTML;
    }
  }
  function drawQuanBianYanXi(cardIDs, type) {
    if (gameState.v) {
      var toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById(type);
      const shoupaiDIV = document.createElement("div");
      for (const s of cardIDs) {
        if (s == "0") {
          continue;
        }
        var button = document.createElement("button");
        if (getCardNumAndSuit(s)["cardSuit"] == "♦" || getCardNumAndSuit(s)["cardSuit"] == "♥") {
          button.className = "shoupaiR";
        } else {
          button.className = "shoupai";
        }
        let emoji = document.createElement("span");
        emoji.innerText = getCardNumAndSuit(s)["cardNumAndSuit"];
        button.appendChild(emoji);
        button.appendChild(document.createElement("br"));
        button.innerHTML += allCard[s] ? allCard[s]["name"] : "?";
        shoupaiDIV.append(button);
      }
      toBeAdd2.innerHTML = shoupaiDIV.innerHTML;
    }
  }
  function drawCardTypeDetail(name) {
    var toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById("cardTypeDetail");
    const shoupaiDIV = document.createElement("div");
    for (const s of room.cardList) {
      if (allCard[s]["name"] == name) {
        if (deckState.paidui.has(s)) {
          var button = document.createElement("button");
          if (getCardNumAndSuit(s)["cardSuit"] == "♦" || getCardNumAndSuit(s)["cardSuit"] == "♥") {
            button.className = "shoupaiR";
          } else {
            button.className = "shoupai";
          }
          let emoji = document.createElement("span");
          emoji.innerText = getCardNumAndSuit(s)["cardNumAndSuit"];
          button.appendChild(emoji);
          button.appendChild(document.createElement("br"));
          button.innerHTML += allCard[s] ? allCard[s]["name"] : "?";
          shoupaiDIV.append(button);
        } else {
          var button = document.createElement("button");
          if (getCardNumAndSuit(s)["cardSuit"] == "♦" || getCardNumAndSuit(s)["cardSuit"] == "♥") {
            button.className = "shoupaiR";
          } else {
            button.className = "shoupai";
          }
          button.classList.add("shoupaiG");
          let emoji = document.createElement("span");
          emoji.innerText = getCardNumAndSuit(s)["cardNumAndSuit"];
          button.appendChild(emoji);
          button.appendChild(document.createElement("br"));
          button.innerHTML += allCard[s] ? allCard[s]["name"] : "?";
          shoupaiDIV.append(button);
        }
      }
    }
    toBeAdd2.innerHTML = shoupaiDIV.innerHTML;
  }
  function drawSeatUIs() {
    for (let s of seatUIs) {
      if (s.posY && s.posX && typeof s.actualSeatID != "undefined") {
        if (document.getElementById("or" + s.actualSeatID) == null) {
          const orderContainer = document.createElement("div");
          orderContainer.className = "orderContainer";
          orderContainer.id = "or" + s.actualSeatID;
          orderContainer.style.top = s.posY + "px";
          orderContainer.style.left = s.posX + "px";
          orderContainer.style.width = (UI.unscaledWidth + UI.paddingRight) * UI.scale + "px";
          const orderBody = document.createElement("div");
          orderBody.className = "order-body";
          orderBody.classList.add("No" + s.actualSeatID);
          orderBody.id = s.actualSeatID;
          orderContainer.appendChild(orderBody);
          const targetElement = document.getElementById("iframe-source").contentWindow.document.getElementById(s.actualSeatID);
          if (targetElement) {
            const observer = new MutationObserver(function(mutationsList) {
              for (let mutation of mutationsList) {
                if (mutation.type === "childList" || mutation.type === "attributes") {
                  orderBody.innerHTML = targetElement.innerHTML;
                }
              }
            });
            const config = {
              attributes: true,
              childList: true,
              subtree: true
            };
            observer.observe(targetElement, config);
            const seatUI = document.getElementById("seatUI");
            seatUI.appendChild(orderContainer);
          }
        } else {
          const orderContainer = document.getElementById("or" + s.actualSeatID);
          orderContainer.style.top = s.posY + "px";
          orderContainer.style.left = s.posX + "px";
          orderContainer.style.width = (UI.unscaledWidth + UI.paddingRight) * UI.scale + "px";
        }
      }
    }
    if (seatUIs.length == 0) {
      for (let i = 1; i <= 8; i++) {
        const orderContainer = document.getElementById("or" + i);
        if (orderContainer) {
          orderContainer.remove();
        }
      }
    }
  }
  function drawCities(cities2, display) {
    for (let i of cities2) {
      if (document.getElementById("city" + i.id) == null) {
        const city = document.createElement("div");
        city.id = "city" + i.id;
        city.className = "city";
        city.style.position = "absolute";
        city.style.fontSize = "15px";
        const pos = initMap.Rcity[i.id].citycoordinate.split(",");
        city.style.left = UI.centerX + pos[0] * SystemContext.gameScale / window.devicePixelRatio + "px";
        city.style.top = UI.centerY - pos[1] * SystemContext.gameScale / window.devicePixelRatio + "px";
        if (typeof initMap.Rfight[i.event] != "undefined") {
          city["event"] = initMap.Rfight[i.event];
          city.innerHTML = initMap.Rfight[i.event] ? initMap.Rfight[i.event].lost.replace(/\n/g, " ") + "<br>" + initMap.Rfight[i.event].get.replace(/\n/g, "<br>") : "无数据";
        } else {
          city.innerHTML = ((initMap.Rchoose[i.event + "1"] ? initMap.Rchoose[i.event + "1"].get : "") + "\n" + (initMap.Rchoose[i.event + "2"] ? initMap.Rchoose[i.event + "2"].get : "") + "\n" + (initMap.Rchoose[i.event + "3"] ? initMap.Rchoose[i.event + "3"].get : "")).toString().replace(/\n/g, "<br>");
        }
        let seatUI = document.getElementById("seatUI");
        seatUI.appendChild(city);
      } else {
        const city = document.getElementById("city" + i.id);
        const pos = initMap.Rcity[i.id].citycoordinate.split(",");
        city.style.left = UI.centerX + pos[0] * SystemContext.gameScale / window.devicePixelRatio + "px";
        city.style.top = UI.centerY - pos[1] * SystemContext.gameScale / window.devicePixelRatio + "px";
      }
    }
    const arr = cities2.map((item) => "city" + item.id);
    const cityDivs = document.querySelectorAll("div.city");
    cityDivs.forEach((div) => {
      if (!arr.includes(div.id)) {
        div.remove();
      }
    });
  }
  const skinTypeV2Map = [40607, 20704, 62301, 51502];
  let iframe = null;
  const version = " 2.8.7";
  function clearButton(type) {
    var div = document.getElementById("iframe-source").contentWindow.document.getElementById(type);
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
  function addCardTypeButton(cardType) {
    var toBeAdd2;
    for (const key in cardType) {
      var type = "type" + cardType[key]["cardType"];
      var button = document.createElement("button");
      toBeAdd2 = document.getElementById("iframe-source").contentWindow.document.getElementById(type);
      button.id = key;
      button.className = "cardType";
      let n = cardType[key]["cardNum"];
      if (n == 1) {
        button.innerText = key;
      } else if (n == 0) {
        button.innerText = key;
      } else {
        button.innerText = n + key;
      }
      button.onmouseover = function() {
        drawCardTypeDetail(key);
      };
      toBeAdd2.append(button);
    }
  }
  function clearSuit(suitEl) {
    switch (suitEl) {
      case "suit":
        document.getElementById("iframe-source").contentWindow.document.getElementById("suit").innerText = "";
        break;
      case "boTu":
        document.getElementById("iframe-source").contentWindow.document.getElementById("boTu").innerText = "";
        break;
    }
  }
  function resetOrderContainer() {
    for (let i = 0; i <= 7; i++) {
      let o = "or" + (i + 1);
      document.getElementById("iframe-source").contentWindow.document.getElementById(o).style.display = "inline-block";
    }
  }
  function hideOrderContainer(size) {
    for (let i = 7; i >= size; i--) {
      let o = "or" + (i + 1);
      document.getElementById("iframe-source").contentWindow.document.getElementById(o).style.display = "none";
    }
  }
  function addFrame(userID2) {
    let div = document.getElementById("createIframe");
    if (!div) {
      div = document.createElement("div");
      div.id = "createIframe";
      div.className = "createIframe";
      div.style = "position: fixed;overflow: hidden;resize: vertical;  top: 31px; right: 155px;width: 230px;height: 500px;z-index: 10000000000;display: flex;flex-direction: column;color: #f2de9c;background: rgb(50, 50, 50);user-select: none;text-align: left;transition: height 200ms;border-radius: 8px;";
      div.style.transformOrigin = "top left";
      var header = document.createElement("p");
      header.id = "header";
      header.className = "header";
      header.style = "display: inline-block;margin: 1px;user-select: none;cursor: move;display: flex;font-size: 20px;border-radius: 5px;";
      var title = document.createElement("span");
      title.id = "title";
      title.innerText = "三国杀打小抄" + version;
      div.appendChild(header);
      div.onmouseover = function() {
        const cityDivs = document.querySelectorAll("div.city");
        cityDivs.forEach((div2) => {
          div2.classList.remove("hide");
          div2.classList.add("show");
        });
      };
      div.onmouseout = function() {
        const cityDivs = document.querySelectorAll("div.city");
        cityDivs.forEach((div2) => {
          div2.classList.remove("show");
          div2.classList.add("hide");
        });
      };
      var btn = document.createElement("btn");
      btn.innerText = "-";
      btn.id = "toggle-me";
      btn.style = "text-align: center;color: #f2de9c;background: rgb(50, 50, 50);border-radius: 5px;width: 26px;height: 26px;border: 1px solid rgb(212, 212, 162);cursor: pointer;user-select: none;background: rgb(107, 30, 30);display: flex;align-items: center;justify-content: center;margin: 0;";
      btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "rgb(130, 30, 30)";
      });
      btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "rgb(107, 30, 30)";
      });
      var toTab = document.createElement("button");
      toTab.id = "toTab";
      toTab.style = "display: none;";
      toTab.onclick = function() {
      };
      header.appendChild(btn);
      header.appendChild(title);
      if (!localStorage.getItem("DXCVersion") || localStorage.getItem("DXCVersion") != version) {
        setTimeout(() => {
          addTooltip(`小抄已经更新到${version}
增加山河图小抄
移动鼠标在山河图左上角(难度旁边)叹号处“！”
或小抄內
可查看当前所有关卡奖励`, "acTooltip", 1e4, "green");
        }, 15e3);
        localStorage.setItem("DXCVersion", version);
      }
      document.body.appendChild(div);
      iframe = document.createElement("iframe");
      iframe.style = "border: none;width: 230px;height: 100%;margin: 0px;cursor: move;";
      iframe.id = "iframe-source";
      iframe.title = "iframe";
      div.append(iframe);
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(variable);
      iframe.contentWindow.document.close();
    }
    buttonClick(userID2);
    initDragElement();
    drawChatFace();
    activate(userID2);
  }
  function activate(userID2) {
    var submit = document.getElementById("iframe-source").contentWindow.document.getElementById("ACSubmit");
    submit.onclick = function() {
      var AC = document.getElementById("iframe-source").contentWindow.document.getElementById("AC").value;
      const signUpRequest = {
        username: userID2,
        playername: gameState.Nickname,
        password: AC
      };
      fetch("https://goka.top:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpRequest)
      }).then((response) => response.json()).then((data) => {
        if (data.message == "") {
          let s;
          data.activated == true ? s = "已激活" : s = "未激活";
          document.getElementById("iframe-source").contentWindow.document.getElementById("AC").setAttribute(
            "placeholder",
            "点击添加界小抄激活码\n当前激活码有效期至\n" + data.expirationTime + s
          );
        } else {
          document.getElementById("iframe-source").contentWindow.document.getElementById("AC").setAttribute(
            "placeholder",
            "点击添加界小抄激活码\n" + data.message
          );
        }
        if (data.activated == true) {
          gameState.v = true;
          document.getElementById("createIframe").style.border = "2px solid rgb(242, 222, 156)";
        }
        document.getElementById("iframe-source").contentWindow.document.getElementById("AC").value = "";
      }).catch((error) => console.error("Error:", error));
    };
  }
  function buttonClick(userID2) {
    let uuid = document.getElementById("iframe-source").contentWindow.document.getElementById("uuid");
    uuid.innerText = "id：" + userID2;
    uuid.onclick = function() {
      toClipboardNoFliter(userID2);
      uuid.innerText = "复制成功";
      setTimeout(() => {
        uuid.textContent = "id：" + userID2;
      }, "500");
    };
    let nickName = document.getElementById("iframe-source").contentWindow.document.getElementById("nickName");
    nickName.innerText = "昵称：" + gameState.Nickname;
    nickName.onclick = function() {
      toClipboardNoFliter(gameState.Nickname);
      nickName.innerText = "复制成功";
      setTimeout(() => {
        nickName.textContent = "昵称：" + gameState.Nickname;
      }, "500");
    };
    var toggle = document.getElementById("toggle-me");
    toggle.onclick = function() {
      globalConfig.closeIframe = !globalConfig.closeIframe;
      if (globalConfig.closeIframe) {
        document.getElementById("iframe-source").style.display = "none";
        toggle.innerText = "+";
        document.getElementById("createIframe").style.height = "30px";
        document.getElementById("createIframe").style.opacity = "0.6";
        document.getElementById("createIframe").style.width = "75px";
        document.getElementById("title").innerText = "小抄";
        document.getElementById("createIframe").style.resize = "none";
      } else {
        document.getElementById("iframe-source").style.display = "block";
        toggle.innerText = "-";
        document.getElementById("createIframe").style.height = "500px";
        document.getElementById("createIframe").style.opacity = "1";
        document.getElementById("createIframe").style.width = "230px";
        document.getElementById("title").innerText = "三国杀打小抄" + version;
        document.getElementById("createIframe").style.resize = "vertical";
      }
    };
    var MiZhuCalBTN = document.getElementById("iframe-source").contentWindow.document.getElementById("mizhu");
    var mySeat1BTN = document.getElementById("iframe-source").contentWindow.document.getElementById("mySeatID1");
    var mySeat2BTN = document.getElementById("iframe-source").contentWindow.document.getElementById("mySeatID2");
    MiZhuCalBTN.onmousedown = function() {
      if (gameState.mySeatID.size == 1) {
        mySeat1BTN.style.display = "none";
        mySeat2BTN.style.display = "none";
        for (const m of gameState.mySeatID) {
          let MiZhuCards = [];
          for (const card2 of deckState.shoupai[gameState.idOrder[m]]) {
            MiZhuCards.push(getCardNumAndSuit(card2)["cardNum"]);
          }
          let MiZhuRes = MiZhuCal(MiZhuCards, MiZhuCards.length);
          drawMiZhu(MiZhuRes);
        }
      } else {
        var index = 0;
        for (const m of gameState.mySeatID) {
          index += 1;
          var seatIND = "mySeatID" + index;
          document.getElementById("iframe-source").contentWindow.document.getElementById(seatIND).style.display = "block";
          document.getElementById("iframe-source").contentWindow.document.getElementById(seatIND).innerText = "座位: " + (gameState.idOrder[m] + 1);
          document.getElementById("iframe-source").contentWindow.document.getElementById(seatIND).onmousedown = function() {
            let MiZhuCards = [];
            for (const card2 of deckState.shoupai[gameState.idOrder[m]]) {
              MiZhuCards.push(getCardNumAndSuit(card2)["cardNum"]);
            }
            let MiZhuRes = MiZhuCal(MiZhuCards, MiZhuCards.length);
            drawMiZhu(MiZhuRes);
          };
        }
      }
    };
    function handleSwitchChange(event, localStorageKey, configKey) {
      var switchElement = event.target;
      var switchValue = switchElement.checked;
      localStorage.setItem(localStorageKey, switchValue);
      globalConfig[configKey] = switchValue;
      if (configKey == "skinSwitch" && switchValue == true) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("skinStateButton").style.display = "inline-block";
      } else if (configKey == "skinSwitch" && switchValue == false) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("skinStateButton").style.display = "none";
      }
      if (configKey == "seatUISwitch" && switchValue == true) {
        document.getElementById("seatUI").style.display = "inline-block";
      } else if (configKey == "seatUISwitch" && switchValue == false) {
        document.getElementById("seatUI").style.display = "none";
      }
    }
    var skinSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("skinSwitch");
    skinSwitch.addEventListener("change", function(event) {
      handleSwitchChange(event, "SKIN_SWITCH", "skinSwitch");
    });
    var skinStateSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("skinStateSwitch");
    skinStateSwitch.addEventListener("change", function(event) {
      handleSwitchChange(event, "SKIN_STATE_SWITCH", "skinState");
    });
    var cardBackSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("cardBackSwitch");
    cardBackSwitch.addEventListener("change", function(event) {
      handleSwitchChange(event, "CARD_BACK_SWITCH", "cardBackSwitch");
    });
    var seatUISwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("seatUISwitch");
    seatUISwitch.addEventListener("change", function(event) {
      handleSwitchChange(event, "SEAT_UI_SWITCH", "seatUISwitch");
    });
    var generalSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("generalSwitch");
    generalSwitch.addEventListener("change", function(event) {
      handleSwitchChange(event, "GENERAL_SWITCH", "generalSwitch");
    });
  }
  function initDragElement() {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var popups = document.getElementsByClassName("createIframe");
    var elmnt = null;
    var currentZIndex = 100;
    for (var i = 0; i < popups.length; i++) {
      var popup = popups[i];
      var header = getHeader(popup);
      popup.onmousedown = function() {
        this.style.zIndex = "" + ++currentZIndex;
      };
      if (header) {
        header.parentPopup = popup;
        header.onmousedown = dragMouseDown;
      }
    }
    function dragMouseDown(e) {
      elmnt = this.parentPopup;
      elmnt.style.zIndex = "" + ++currentZIndex;
      e = e || window.event;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      if (!elmnt) {
        return;
      }
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      if (window.innerWidth - e.clientX < 50 && elmnt.id == "createIframe") {
        if (!window.PAD) {
          if (globalConfig.closeIframe) {
            var toggle = document.getElementById("toggle-me");
            toggle.click();
          }
          window.PAD = 232;
          window.padding = window.PAD;
          window.dispatchEvent(new Event("resize"));
          elmnt.style.top = "0px";
          elmnt.style.right = "`0px";
          elmnt.style.left = "";
          document.onmouseup();
        }
      } else {
        setGameSize();
        window.PAD = 0;
        window.padding = window.PAD;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        window.dispatchEvent(new Event("resize"));
      }
    }
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
    function getHeader(element) {
      var headerItems = element.getElementsByClassName("header");
      if (headerItems.length === 1) {
        return headerItems[0];
      }
      return null;
    }
  }
  function addSkinFrame() {
    let createSkinIframe = document.getElementById("createSkinIframe");
    if (!createSkinIframe) {
      createSkinIframe = document.createElement("div");
      createSkinIframe.id = "createSkinIframe";
      createSkinIframe.className = "createSkinIframe";
      createSkinIframe.style = "    display: inline-block;    z-index: 10000000000;    display: none;    width: 680px;    height:500px;    position: fixed;    top: 0;    bottom: 0;    left: 0;    right: 20%;    background: rgb(50,50,50);    margin: auto;";
      var header = document.createElement("p");
      header.id = "header";
      header.className = "header";
      header.innerText = "请选择皮肤，选中后会自动关闭此窗口，再关闭自身的皮肤窗口即可";
      header.style = "style:display:inline-block;margin:1px;user-select:none;text-align:center;color: #f2de9c; cursor: pointer";
      var btnSkin = document.createElement("btn");
      btnSkin.innerText = "×";
      btnSkin.id = "btnSkin";
      btnSkin.style = "text-align:center;color: #f2de9c;background: rgb(40,40,40);border-radius:5px;margin-left:3px;border: 1px solid rgb(212,212,162);cursor: pointer;user-select:none;background: rgb(107,30,30);";
      header.append(btnSkin);
      createSkinIframe.appendChild(header);
      document.body.appendChild(createSkinIframe);
      iframe = document.createElement("iframe");
      iframe.style = "border: none;    width: 680px;    height:475px;margin: 0px;cursor: move;";
      iframe.id = "createSkinIframeSource";
      iframe.title = "iframe";
      createSkinIframe.append(iframe);
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(skinHTML);
      iframe.contentWindow.document.close();
    }
    var btnSkin = document.getElementById("btnSkin");
    btnSkin.onmousedown = function() {
      document.getElementById("createSkinIframe").style.display = "none";
    };
  }
  function updateSkinList(generalID) {
    document.getElementById("createSkinIframeSource").contentWindow.document.body.innerHTML = "";
    var imgSkin = document.createElement("img");
    imgSkin.id = 0;
    imgSkin.className = "skinList";
    imgSkin.classList.add(generalID);
    imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/generalface_" + generalID + ".png";
    document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
    if (typeof initMap.skinMap[generalID] != "undefined") {
      for (let i = 0; i < initMap.skinMap[generalID].length; i++) {
        for (let id = 1; id <= 12; id++) {
          if (skinTypeV2Map.includes(initMap.skinMap[generalID][i] * 100 + id)) {
            for (let v = 1; v < 3; v++) {
              var imgSkin = document.createElement("img");
              imgSkin.id = initMap.skinMap[generalID][i] * 100 + id + "_" + v;
              imgSkin.className = "skinList";
              imgSkin.classList.add(generalID);
              imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/" + imgSkin.id + ".png";
              if (imgSkin.id != 0) {
                document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
              }
            }
          } else {
            var imgSkin = document.createElement("img");
            imgSkin.id = initMap.skinMap[generalID][i] * 100 + id;
            imgSkin.className = "skinList";
            imgSkin.classList.add(generalID);
            imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/" + imgSkin.id + ".png";
            if (imgSkin.id != 0) {
              document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
            }
          }
        }
      }
    } else {
      for (let id = 1; id <= 12; id++) {
        if (skinTypeV2Map.includes(generalID * 100 + id)) {
          for (let v = 1; v < 3; v++) {
            var imgSkin = document.createElement("img");
            imgSkin.id = generalID * 100 + id + "_" + v;
            imgSkin.className = "skinList";
            imgSkin.classList.add(generalID);
            imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/" + imgSkin.id + ".png";
            if (imgSkin.id != 0) {
              document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
            }
          }
        } else {
          var imgSkin = document.createElement("img");
          imgSkin.id = generalID * 100 + id;
          imgSkin.className = "skinList";
          imgSkin.classList.add(generalID);
          imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/" + imgSkin.id + ".png";
          if (imgSkin.id != 0) {
            document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
          }
        }
      }
    }
    document.getElementById("createSkinIframeSource").contentWindow.document.querySelectorAll(".skinList").forEach(function(img) {
      img.onerror = function() {
        this.style.display = "none";
      };
    });
  }
  function updateSkinListGuoZhan(generalID1, generalID2) {
    document.getElementById("createSkinIframeSource").contentWindow.document.body.innerHTML = "";
    if (typeof initMap.skinMap[generalID1] != "undefined") {
      for (let i = 0; i < initMap.skinMap[generalID1].length; i++) {
        for (let id = 1; id <= 12; id++) {
          var imgSkin = document.createElement("img");
          imgSkin.id = initMap.skinMap[generalID1][i] * 100 + id;
          imgSkin.className = "skinList";
          imgSkin.classList.add(generalID1);
          imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/" + imgSkin.id + ".png";
          if (imgSkin.id != 0) {
            document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
          }
        }
      }
    }
    const lineBreak = document.createElement("br");
    document.getElementById("createSkinIframeSource").contentWindow.document.body.append(lineBreak);
    document.getElementById("createSkinIframeSource").contentWindow.document.body.append(lineBreak);
    if (typeof initMap.skinMap[generalID2] != "undefined") {
      for (let i = 0; i < initMap.skinMap[generalID2].length; i++) {
        for (let id = 1; id <= 12; id++) {
          var imgSkin = document.createElement("img");
          imgSkin.id = initMap.skinMap[generalID2][i] * 100 + id;
          imgSkin.className = "skinList";
          imgSkin.classList.add(generalID2);
          imgSkin.src = "https://web.sanguosha.com/220/h5_2/res/runtime/pc/general/seat/static/" + imgSkin.id + ".png";
          if (imgSkin.id != 0) {
            document.getElementById("createSkinIframeSource").contentWindow.document.body.append(imgSkin);
          }
        }
      }
    }
    document.getElementById("createSkinIframeSource").contentWindow.document.querySelectorAll(".skinList").forEach(function(img) {
      img.onerror = function() {
        this.style.display = "none";
      };
    });
  }
  function removeCardType(cardID) {
    if (cardID != 0 && room.cardList.includes(cardID)) {
      console.warn("card type remove: " + cardID + room.currentMode[cardID]["name"] + " " + JSON.stringify(getCardNumAndSuit(cardID)));
      if (typeof room.currentCardType[room.currentMode[cardID]["name"]] != "undefined") {
        let n = room.currentCardType[room.currentMode[cardID]["name"]]["cardNum"];
        if (n > 0) {
          n--;
          room.currentCardType[room.currentMode[cardID]["name"]]["cardNum"] = n;
          if (n == 1) {
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).disabled = false;
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).innerText = room.currentMode[cardID]["name"];
          } else if (n == 0) {
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).innerText = room.currentMode[cardID]["name"];
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).disabled = true;
          } else {
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).innerText = n + room.currentMode[cardID]["name"];
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).disabled = false;
          }
        }
        if (getCardNumAndSuit(cardID)["cardSuit"] == "♦") {
          deckState.suits.diamond--;
        } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♣") {
          deckState.suits.club--;
        } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♠") {
          deckState.suits.spade--;
        } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♥") {
          deckState.suits.heart--;
        }
        if ((getCardNumAndSuit(cardID)["cardSuit"] == "♥" || getCardNumAndSuit(cardID)["cardSuit"] == "♦") && (room.currentMode[cardID]["name"] == "火杀" || room.currentMode[cardID]["name"] == "雷杀" || room.currentMode[cardID]["name"] == "杀")) {
          deckState.suits.hongsha--;
        } else if ((getCardNumAndSuit(cardID)["cardSuit"] == "♣" || getCardNumAndSuit(cardID)["cardSuit"] == "♠") && (room.currentMode[cardID]["name"] == "火杀" || room.currentMode[cardID]["name"] == "雷杀" || room.currentMode[cardID]["name"] == "杀")) {
          deckState.suits.heisha--;
        }
        if (deckState.suits.diamond < 0) {
          deckState.suits.diamond = 0;
        } else if (deckState.suits.heart < 0) {
          deckState.suits.heart = 0;
        } else if (deckState.suits.club < 0) {
          deckState.suits.club = 0;
        } else if (deckState.suits.diamond < 0) {
          deckState.suits.diamond = 0;
        } else if (deckState.suits.spade < 0) {
          deckState.suits.spade = 0;
        } else if (deckState.suits.hongsha < 0) {
          deckState.suits.hongsha = 0;
        } else if (deckState.suits.heisha < 0) {
          deckState.suits.heisha = 0;
        } else if (deckState.suits.diamond < 0) {
          deckState.suits.diamond = 0;
        }
        document.getElementById("iframe-source").contentWindow.document.getElementById("heart").innerText = "♥红桃 × " + deckState.suits.heart;
        document.getElementById("iframe-source").contentWindow.document.getElementById("club").innerText = "♣梅花 × " + deckState.suits.club;
        document.getElementById("iframe-source").contentWindow.document.getElementById("spade").innerText = "♠黑桃 × " + deckState.suits.spade;
        document.getElementById("iframe-source").contentWindow.document.getElementById("diamond").innerText = "♦方片 × " + deckState.suits.diamond;
        document.getElementById("iframe-source").contentWindow.document.getElementById("hongsha").innerText = "红杀 × " + deckState.suits.hongsha;
        document.getElementById("iframe-source").contentWindow.document.getElementById("heisha").innerText = "黑杀 × " + deckState.suits.heisha;
      }
    }
  }
  function addCardType(cardID) {
    if (cardID != 0 && room.cardList.includes(cardID)) {
      if (typeof room.currentCardType[room.currentMode[cardID]["name"]] != "undefined") {
        let n = room.currentCardType[room.currentMode[cardID]["name"]]["cardNum"];
        if (n >= 0) {
          n++;
          room.currentCardType[room.currentMode[cardID]["name"]]["cardNum"] = n;
          if (n == 1) {
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).disabled = false;
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).innerText = room.currentMode[cardID]["name"];
          } else if (n == 0) {
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).innerText = room.currentMode[cardID]["name"];
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).disabled = true;
          } else {
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).innerText = n + room.currentMode[cardID]["name"];
            document.getElementById("iframe-source").contentWindow.document.getElementById(room.currentMode[cardID]["name"]).disabled = false;
          }
        }
        if (getCardNumAndSuit(cardID)["cardSuit"] == "♦") {
          deckState.suits.diamond++;
        } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♣") {
          deckState.suits.club++;
        } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♠") {
          deckState.suits.spade++;
        } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♥") {
          deckState.suits.heart++;
        }
        if ((getCardNumAndSuit(cardID)["cardSuit"] == "♥" || getCardNumAndSuit(cardID)["cardSuit"] == "♦") && (room.currentMode[cardID]["name"] == "火杀" || room.currentMode[cardID]["name"] == "雷杀" || room.currentMode[cardID]["name"] == "杀")) {
          deckState.suits.hongsha++;
        } else if ((getCardNumAndSuit(cardID)["cardSuit"] == "♣" || getCardNumAndSuit(cardID)["cardSuit"] == "♠") && (room.currentMode[cardID]["name"] == "火杀" || room.currentMode[cardID]["name"] == "雷杀" || room.currentMode[cardID]["name"] == "杀")) {
          deckState.suits.heisha++;
        }
        if (getCardNumAndSuit(cardID)["cardSuit"] == "♠" && getCardNumAndSuit(cardID)["cardNum"] >= 2 && getCardNumAndSuit(cardID)["cardNum"] <= 9) {
          deckState.suits.spade2_9++;
        }
        document.getElementById("iframe-source").contentWindow.document.getElementById("heart").innerText = "♥红桃 × " + deckState.suits.heart;
        document.getElementById("iframe-source").contentWindow.document.getElementById("club").innerText = "♣梅花 × " + deckState.suits.club;
        document.getElementById("iframe-source").contentWindow.document.getElementById("spade").innerText = "♠黑桃 × " + deckState.suits.spade;
        document.getElementById("iframe-source").contentWindow.document.getElementById("diamond").innerText = "♦方片 × " + deckState.suits.diamond;
        document.getElementById("iframe-source").contentWindow.document.getElementById("hongsha").innerText = "红杀 × " + deckState.suits.hongsha;
        document.getElementById("iframe-source").contentWindow.document.getElementById("heisha").innerText = "黑杀 × " + deckState.suits.heisha;
      }
    }
  }
  function addQuanBian(cardID) {
    let quanBianText = document.getElementById("iframe-source").contentWindow.document.getElementById("suit");
    if (gameState.enableQuanBian) {
      if (getCardNumAndSuit(cardID)["cardSuit"] == "♦" && !gameState.quanBian.has("♦")) {
        quanBianText.innerText += "♦️";
        gameState.quanBian.add("♦");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♥" && !gameState.quanBian.has("♥")) {
        quanBianText.innerText += "♥️";
        gameState.quanBian.add("♥");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♠" && !gameState.quanBian.has("♠")) {
        quanBianText.innerText += "♠️";
        gameState.quanBian.add("♠");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♣" && !gameState.quanBian.has("♣")) {
        quanBianText.innerText += "♣️";
        gameState.quanBian.add("♣");
      }
    }
  }
  function addSuit(cardID) {
    let toBeAddBoTu = document.getElementById("iframe-source").contentWindow.document.getElementById("boTu");
    if (gameState.enableBoTu) {
      if (getCardNumAndSuit(cardID)["cardSuit"] == "♦" && !gameState.boTu.has("♦")) {
        toBeAddBoTu.innerText += "♦️";
        gameState.boTu.add("♦");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♥" && !gameState.boTu.has("♥")) {
        toBeAddBoTu.innerText += "♥️";
        gameState.boTu.add("♥");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♠" && !gameState.boTu.has("♠")) {
        toBeAddBoTu.innerText += "♠️";
        gameState.boTu.add("♠");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♣" && !gameState.boTu.has("♣")) {
        toBeAddBoTu.innerText += "♣️";
        gameState.boTu.add("♣");
      }
    }
    let toBeAddLuanJi = document.getElementById("iframe-source").contentWindow.document.getElementById("suit");
    if (gameState.enableLuanJi) {
      toBeAddLuanJi.innerText = "";
      gameState.luanJi.add(getCardNumAndSuit(cardID)["cardSuit"]);
      for (const suit of gameState.luanJi) {
        toBeAddLuanJi.innerText += suit;
      }
    }
    if (gameState.enableHuaMu) {
      clearSuit("suit");
      if (getCardNumAndSuit(cardID)["cardSuit"] == "♦") {
        toBeAdd.innerText += "🟥";
        gameState.huaMu.add("♦");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♥") {
        toBeAdd.innerText += "🟥";
        gameState.huaMu.add("♥");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♠") {
        toBeAdd.innerText += "⬛️";
        gameState.huaMu.add("♠");
      } else if (getCardNumAndSuit(cardID)["cardSuit"] == "♣") {
        toBeAdd.innerText += "⬛️";
        gameState.huaMu.add("♣");
      }
    }
  }
  let insertInd;
  let dingPop = [];
  function addCard(id, CardIDs, zone, ToPosition, SpellID, CardCount) {
    let cardID = 0;
    for (let i = 0; i < CardCount; i++) {
      if (CardIDs.length != 0) {
        cardID = CardIDs[i];
      } else if (dingPop.length != 0) {
        cardID = dingPop.pop();
      } else {
        cardID = 0;
      }
      if (zone == 1) {
        deckState.remCardCount++;
      }
      if (gameState.quanBianCards.delete(cardID)) {
        drawQuanBianYanXi(gameState.quanBianCards, "quanBian");
      }
      if (gameState.yanXiCards.delete(cardID)) {
        drawQuanBianYanXi(gameState.yanXiCards, "yanXi");
      }
      if (zone == 1 && id == 255 && ToPosition == 65280 && cardID != 4400 && cardID != 4401 && SpellID != 3208 && SpellID != 3266) {
        deckState.paidui.add(cardID);
        addCardType(cardID);
        if (SpellID != 3488) {
          deckState.ding.push(cardID);
          console.warn("card ding " + deckState.ding);
        }
      } else if (zone == 1 && id == 255 && ToPosition == 0) {
        if (SpellID == 3314 && cardID == 0) {
          cardID = deckState.jineng.values().next().value;
          console.warn("first ele in jineng 8 ", cardID);
          if (cardID !== void 0) {
            deckState.jineng.delete(cardID);
          }
        }
        deckState.paidui.add(cardID);
        addCardType(cardID);
        if (!deckState.di.includes(cardID) || cardID == 0) {
          deckState.di.push(cardID);
        }
        console.warn("card di " + deckState.di);
      } else if (zone == 1 && id == 255 && SpellID == 987) {
        deckState.paidui.add(cardID);
        addCardType(cardID);
        deckState.ding.splice(insertInd, 0, cardID);
      } else if (zone == 1 && id == 0) {
        addCardType(cardID);
      } else if (zone == 2) {
        deckState.qipai.add(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
        if (gameState.enableBoTu) {
          addSuit(cardID);
        }
      } else if (zone == 3) {
        deckState.chuli.add(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else if (zone == 4) {
        deckState.biaoji[id].push(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else if (zone == 5) {
        if (SpellID == 414 || SpellID == 3178 || SpellID == 3389) {
          cardID = deckState.unknownCard.splice(-1, 1)[0];
        }
        if (typeof cardID != "undefined" && typeof deckState.shoupai[gameState.idOrder[id]] != "undefined") {
          gameState.isDuanXian = false;
          deckState.shoupai[gameState.idOrder[id]].add(cardID);
          if (deckState.paidui.delete(cardID)) {
            removeCardType(cardID);
          }
        } else {
          gameState.isDuanXian = true;
          console.warn("duanxian" + zone + cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else if (zone == 6) {
        deckState.zhuangbei[id].push(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else if (zone == 7) {
        deckState.panding[id].push(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else if (zone == 8) {
        if (SpellID == 3033) {
          JiZhanCal(parseInt(getCardNumAndSuit(cardID)["cardNum"]));
        }
        deckState.jineng.add(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else if (zone == 9) {
        return "洗牌";
      } else if (zone == 10) {
        deckState.zone10.add(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        deckState.remShouPai.delete(cardID);
      } else {
        console.warn("card.ToZone: " + zone + " id: " + id + "cardID" + cardID);
      }
      if (zone != 5 && (SpellID != 3036 && SpellID != 121)) {
        for (let i2 = 0; i2 < gameState.idOrderPre.length; i2++) {
          deckState.shoupai[i2].delete(cardID);
        }
      }
    }
  }
  function removeCard(id, CardIDs, zone, FromPosition, SpellID, CardCount) {
    let cardID = 0;
    for (let i = 0; i < CardCount; i++) {
      if (CardIDs.length != 0) {
        cardID = CardIDs[i];
      } else {
        cardID = 0;
      }
      if (zone == 1) {
        deckState.remCardCount--;
      }
      if (gameState.quanBianCards.delete(cardID)) {
        drawQuanBianYanXi(gameState.quanBianCards, "quanBian");
      }
      if (gameState.yanXiCards.delete(cardID)) {
        drawQuanBianYanXi(gameState.yanXiCards, "yanXi");
      }
      if (zone == 1 && id == 0) {
        return "游戏开始发牌";
      } else if (zone == 0 && id == 0 && FromPosition == 0) {
        let index = deckState.ding.indexOf(cardID);
        if (index != -1) {
          insertInd = index;
        }
      } else if (zone == 1 && id == 255 && FromPosition == 65280) {
        if (deckState.di.length != 0 && deckState.remCardCount == deckState.di.length - 1) {
          deckState.ding = deckState.di.reverse();
          deckState.di = [];
        }
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        if (deckState.ding.length != 0) {
          if (cardID != 0 && deckState.ding.indexOf(cardID) != -1) {
            deckState.ding.splice(deckState.ding.indexOf(cardID), 1);
          } else if (cardID != 0 && deckState.ding.indexOf(cardID) == -1) {
            deckState.ding.pop();
          } else if (cardID == 0 && deckState.ding.indexOf(cardID) != -1) {
            deckState.ding.splice(deckState.ding.indexOf(0), 1);
          } else if (cardID == 0 && deckState.ding.indexOf(cardID) == -1) {
            let poppedElement = deckState.ding.pop();
            dingPop.push(poppedElement);
          }
        }
      } else if (zone == 1 && id == 255 && FromPosition == 0) {
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        if (cardID != 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(cardID), 1);
        } else if (cardID != 0 && deckState.di.indexOf(cardID) == -1) {
          deckState.di.pop();
        } else if (cardID == 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(0), 1);
        } else if (cardID == 0 && deckState.di.indexOf(cardID) == -1) {
          deckState.di.pop();
        }
      } else if (zone == 1 && id == 255 && FromPosition == 65282) {
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        if (cardID != 0) {
          let index = deckState.ding.indexOf(cardID);
          if (index != -1) {
            deckState.ding.splice(index, 1);
            insertInd = index;
          } else if (index == -1 && deckState.ding.indexOf(0) != -1) {
            deckState.ding.splice(index, 1);
            insertInd = -1;
          }
        } else {
          deckState.ding.pop();
        }
        for (let i2 = 0; i2 < gameState.idOrderPre.length; i2++) {
          deckState.shoupai[i2].delete(cardID);
        }
      } else if (zone == 2) {
        deckState.qipai.delete(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
      } else if (zone == 3) {
        deckState.chuli.delete(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        if (cardID != 0 && deckState.ding.indexOf(cardID) != -1) {
          deckState.ding.splice(deckState.ding.indexOf(cardID), 1);
        }
        if (cardID != 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(cardID), 1);
        }
      } else if (zone == 4) {
        if (typeof deckState.biaoji[id] != "undefined") {
          gameState.isDuanXian = false;
          if (deckState.paidui.delete(cardID)) {
            removeCardType(cardID);
          }
          let index = deckState.biaoji[id].indexOf(cardID);
          if (index == -1) {
            cardID = 0;
            index = deckState.biaoji[id].indexOf(cardID);
          }
          deckState.unknownCard.push(deckState.biaoji[id].splice(index, 1)[0]);
          console.warn("标记牌", deckState.unknownCard);
        } else {
          gameState.isDuanXian = true;
          console.warn("duanxian" + zone + cardID);
        }
        if (cardID != 0 && deckState.ding.indexOf(cardID) != -1) {
          deckState.ding.splice(deckState.ding.indexOf(cardID), 1);
        }
        if (cardID != 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(cardID), 1);
        }
      } else if (zone == 5) {
        if (typeof deckState.shoupai[gameState.idOrder[id]] != "undefined") {
          gameState.isDuanXian = false;
          for (let i2 = 0; i2 < gameState.idOrderPre.length; i2++) {
            deckState.shoupai[i2].delete(cardID);
          }
          if (deckState.paidui.delete(cardID)) {
            removeCardType(cardID);
          }
        } else {
          gameState.isDuanXian = true;
          console.warn("duanxian" + zone + cardID);
        }
      } else if (zone == 6) {
        if (typeof deckState.zhuangbei[id] != "undefined") {
          gameState.isDuanXian = false;
          let index = deckState.zhuangbei[id].indexOf(cardID);
          if (index == -1) {
            let cardID2 = 0;
            index = deckState.zhuangbei[id].indexOf(cardID2);
          }
          deckState.zhuangbei[id].splice(index, 1);
          if (deckState.paidui.delete(cardID)) {
            removeCardType(cardID);
          }
        } else {
          gameState.isDuanXian = true;
          console.warn("duanxian" + zone + cardID);
        }
        if (cardID != 0 && deckState.ding.indexOf(cardID) != -1) {
          deckState.ding.splice(deckState.ding.indexOf(cardID), 1);
        }
        if (cardID != 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(cardID), 1);
        }
      } else if (zone == 7) {
        if (typeof deckState.panding[id] != "undefined") {
          let index = deckState.panding[id].indexOf(cardID);
          if (index == -1) {
            let cardID2 = 0;
            index = deckState.panding[id].indexOf(cardID2);
          }
          deckState.panding[id].splice(index, 1);
          if (deckState.paidui.delete(cardID)) {
            removeCardType(cardID);
          }
        } else {
          gameState.isDuanXian = true;
          console.warn("duanxian" + zone + cardID);
        }
      } else if (zone == 8) {
        deckState.jineng.delete(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        if (cardID != 0 && deckState.ding.indexOf(cardID) != -1) {
          deckState.ding.splice(deckState.ding.indexOf(cardID), 1);
        }
        if (cardID != 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(cardID), 1);
        }
      } else if (zone == 9) {
        return "洗牌";
      } else if (zone == 10) {
        deckState.zone10.delete(cardID);
        if (deckState.paidui.delete(cardID)) {
          removeCardType(cardID);
        }
        if (cardID != 0 && deckState.ding.indexOf(cardID) != -1) {
          deckState.ding.splice(deckState.ding.indexOf(cardID), 1);
        }
        if (cardID != 0 && deckState.di.indexOf(cardID) != -1) {
          deckState.di.splice(deckState.di.indexOf(cardID), 1);
        }
      } else {
        console.warn("card.remove: " + zone + " id: " + id + "cardID" + cardID);
      }
      deckState.remShouPai.delete(cardID);
    }
  }
  function initSGSConfigData() {
    var _a;
    var spellDict = {}, generalDict = {}, Rcity = {}, Rchoose = {}, Rfight = {};
    if (typeof JSZipUtils != "undefined" && typeof CtrUtil != "undefined" && ((_a = CtrUtil == null ? void 0 : CtrUtil.Ctr) == null ? void 0 : _a.Ofb_Dec)) {
      JSZipUtils.getBinaryContent("https://web.sanguosha.com/220/h5_2/res/config/Config_w.sgs?v=" + window.resourceVersion, (err, zipData) => {
        JSZip.loadAsync(zipData).then((zip) => {
          let config = (name) => zip.file(name).async("arraybuffer").then((arraybuffer) => JSON.parse(new TextDecoder().decode(new Zlib.Gunzip(CtrUtil.Ctr.Ofb_Dec(arraybuffer)).decompress())));
          config("cha_spell.sgs").then((pkg) => {
            spellDict = pkg.GameSpells.spell.reduce((acc, { a: id, c: name }) => {
              acc[id] = name;
              return acc;
            }, { 0: "" });
            initMap.spell = spellDict;
          });
          config("character.sgs").then((pkg) => {
            generalDict = pkg.GameCharacters.character.reduce((acc, { a, b: b2 }) => {
              acc[a] = b2 == null ? void 0 : b2.replaceAll("&", "");
              return acc;
            }, {});
            initMap.generalDict = generalDict;
          });
          config("hd_roguelike.sgs").then((pkg) => {
            Rcity = pkg.Root.Level.reduce((acc, item2) => {
              acc[item2.cityID] = item2;
              return acc;
            }, {});
            initMap.Rcity = Rcity;
            let rewards = pkg.Root.RewardGroup.reduce((acc, {
              reward,
              rewarddesc,
              rewarditem,
              allreward,
              abandonmoney
            }) => {
              var _a2, _b;
              acc[reward] = (abandonmoney ? abandonmoney + "铜币/" : "") + ((_b = (_a2 = allreward == null ? void 0 : allreward.split(";")) == null ? void 0 : _a2.flatMap((s) => s == null ? void 0 : s.split(","))) == null ? void 0 : _b.map((i) => ["随机", "普通", "稀有", "史诗", "传说"][i]).join("/")) + rewarddesc.replace("多选一", "自选");
              return acc;
            }, pkg.Root.Other.reduce((acc, { reward, rewardname }) => {
              acc[reward] = rewardname;
              return acc;
            }, {}));
            let gp = pkg.Root.General.reduce((acc, g) => {
              if (!acc[g.a])
                acc[g.a] = [];
              acc[g.a].push(g);
              return acc;
            }, {});
            Rfight = pkg.Root.Fight.reduce((acc, f) => {
              f.generals = [...gp[f.Ggroup] ?? []];
              if (f.startnum) {
                let sg = f.generals.find((g) => g.b == f.startnum);
                if (sg)
                  sg.start = true;
              }
              acc[f.fightID] = {
                lost: f.generals.map((g) => g.c.replace("&", "") + (g.start ? "(先手)" : "")).join("\n"),
                get: f.itemgroup + "铜币\n" + (f.rewarditem ? String(f.rewarditem).split(";") : []).concat(String(f.reward).split(";")).map((r) => rewards[r]).join("\n")
              };
              return acc;
            }, {});
            initMap.Rfight = Rfight;
            Rchoose = pkg.Root.Choose.reduce((acc, {
              effectID: id,
              event1: e,
              lostitem,
              lostnum,
              getitem,
              getnum
            }) => {
              if (!lostitem && !getitem && e && Rfight[e])
                acc[id] = Rfight[e];
              else
                acc[id] = { lost: item(lostitem, lostnum), get: item(getitem, getnum) };
              return acc;
            }, {});
            let RCard = pkg.Root.Card.reduce((acc, item2) => {
              acc[item2.id] = item2;
              return acc;
            }, {});
            initMap.RCard = RCard;
            let RSpell = pkg.Root.Spell.reduce((acc, item2) => {
              acc[item2.id] = item2;
              return acc;
            }, {});
            initMap.RSpell = RSpell;
            let RTactics = pkg.Root.Tactics.reduce((acc, item2) => {
              acc[item2.plot] = item2;
              return acc;
            }, {});
            initMap.RTactics = RTactics;
            initMap.Rchoose = Rchoose;
            function item(id, num) {
              var _a2;
              if (!id)
                return "";
              else if (id.includes(","))
                return (([t, l]) => ["随机", "普通", "稀有", "史诗", "传说"][l] + {
                  2: "战法",
                  3: "技能",
                  4: "手牌",
                  5: "装备"
                }[t])(id.split(","));
              else if (rewards[id])
                return (num > 1 ? num : "") + rewards[id];
              else if (gp[id])
                return gp[id].map((g) => g.c).join("\n");
              else
                return (_a2 = pkg.Root.Card.find((c) => c.id == id)) == null ? void 0 : _a2.name;
            }
          });
        });
      });
    }
  }
  window.PAD = 230;
  window.padding = 0;
  window.addEventListener("resize", () => {
    window.innerWidth = document.documentElement.clientWidth - window.padding;
    setGameSize();
  });
  let seatUIs = [];
  let cities = [];
  let mySkin;
  let card = {};
  var account = localStorage.SGS_LASTLOGIN_ACCOUNT;
  var accountUsedGeneralSkinID = account + "::UsedGeneralSkinID";
  var UsedGeneralSkinIDString = localStorage[accountUsedGeneralSkinID];
  var UsedGeneralSkinID;
  if (UsedGeneralSkinIDString) {
    try {
      UsedGeneralSkinID = JSON.parse(UsedGeneralSkinIDString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } else {
    UsedGeneralSkinID = {};
    UsedGeneralSkinID["UsedGeneralSkinID"] = {};
  }
  let userID;
  let UserID;
  let gameStatusMap = {};
  let isGuiXiang = false;
  var mainID;
  var b = 1562902854;
  var isB = false;
  let DestSeatID;
  var tempCards = [];
  function mainLogic(args) {
    let {
      className,
      CardIDs,
      CardID,
      FromID,
      FromZone,
      ToID,
      ToZone,
      CardCount,
      cardCount,
      DataCount,
      SpellID,
      spellId,
      FromPosition,
      ToPosition,
      CardList,
      Datas,
      datas,
      Allows,
      Type,
      SrcSeatID,
      DataID,
      MoveType
    } = args;
    card.CardIDs = CardIDs;
    card.CardID = CardID;
    card.FromID = FromID;
    card.FromZone = FromZone;
    card.ToID = ToID;
    card.ToZone = ToZone;
    card.CardCount = CardCount;
    card.DataCount = DataCount;
    card.SpellID = SpellID;
    card.FromPosition = FromPosition;
    card.ToPosition = ToPosition;
    card.MoveType = MoveType;
    if (typeof CardList != "undefined") {
      room.cardList = CardList;
    }
    let cardID = 0;
    let {
      SeatID,
      Param,
      Params,
      DestSeatIDs,
      GeneralSkinList,
      Infos,
      Cards,
      targetSeatID,
      seatId,
      Round,
      curUserID,
      UserID: UserID2
    } = args;
    var firstID = SeatID;
    args["ClientID"];
    if (className == "ClientGeneralSkinRep" && GeneralSkinList[0]["GeneralID"] == 306 || curUserID == UserID2 && !gameStatusMap.isGuoZhanBiaoZhun && !gameStatusMap.isGuoZhanYingBian) {
      gameState.enableBoTu = true;
    }
    if (className == "ClientGeneralSkinRep" && GeneralSkinList[0]["GeneralID"] == 7003 && curUserID == UserID2) {
      gameState.enableQuanBian = true;
    }
    if (className == "GsCGamephaseNtf" && Round == 0 && (gameState.enableBoTu || gameState.enableLuanJi || gameState.enableQuanBian)) {
      if (gameState.enableQuanBian) {
        gameState.quanBian = /* @__PURE__ */ new Set();
        clearSuit("suit");
      }
      if (gameState.enableBoTu) {
        gameState.boTu = /* @__PURE__ */ new Set();
        clearSuit("boTu");
      }
      if (gameState.enableHuaMu) {
        clearSuit("suit");
      }
      if (gameState.enableLuanJi) {
        gameState.luanJi = /* @__PURE__ */ new Set();
        clearSuit("suit");
      }
    }
    if (className == "GsCGamephaseNtf") {
      if (Round == 0) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "当回合开始时（0）";
      } else if (Round == 1) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "准备阶段（1）";
      } else if (Round == 2) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "判定阶段（2）";
      } else if (Round == 3) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "摸牌阶段（3）";
      } else if (Round == 4 && !isGuiXiang) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "出牌阶段（4）";
      } else if (Round == 4 && isGuiXiang) {
        isGuiXiang = false;
      } else if (Round == 5) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "弃牌阶段（5）";
      } else if (Round == 6) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "结束阶段（6）";
      } else if (Round == 7) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "回合结束时（7）";
      } else if (Round == 8) {
        document.getElementById("iframe-source").contentWindow.document.getElementById("phrase").innerHTML = "回合结束后（8）";
      }
    }
    if (className == "GsCModifyUserseatNtf") {
      room.infos = {};
      room.size = Infos["length"];
      for (let info of Infos) {
        if (info["ClientID"] < 42e8) {
          room.firstSeatID = info["SeatID"];
        }
        room.infos[info["SeatID"]] = info["ClientID"];
      }
      console.warn("武将练习firstSeatID", room.firstSeatID);
    }
    if (className == "MsgReconnectGame") {
      gameState.isDuanXian = true;
    }
    if (className == "MsgGamePlayCardNtf") {
      gameStatusInit(cardCount);
      room.currentMode = allCardToCurrentMode(room.cardList);
      room.currentCardType = currentModeCardType(room.currentMode);
      gameStart(room.cardList);
      for (let i = 1; i <= 3; i++) {
        clearButton("type" + i);
      }
      addCardTypeButton(room.currentCardType);
      seatUIs = [];
      drawSeatUIs();
      cities = [];
      drawCities(cities);
    }
    if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && Param == 0 && card.SpellID == 945) {
      let arr = [];
      for (const p of Params) {
        arr.push(parseInt(getCardNumAndSuit(p)["cardNum"]));
      }
      calcResult(arr);
    }
    if (gameState.isDuanXian || isB) {
      return;
    }
    if (!gameState.isDuanXian && !isB) {
      if (className == "GsCGamephaseNtf" && typeof Round != "undefined" && typeof SeatID != "undefined") {
        if (!gameState.isSeatOrder && Round == 0 && (SeatID == room.firstSeatID || gameStatusMap.isDouDiZhu || gameStatusMap.isShenWu)) {
          if (gameStatusMap.isDouDiZhu) {
            room.firstSeatID = gameState.idOrderPre[0];
          }
          if (gameStatusMap.isShenWu) {
            room.firstSeatID = gameState.idOrderPre[4];
          }
          let ind = gameState.idOrderPre.indexOf(room.firstSeatID);
          for (let i = 0; i < gameState.idOrderPre.length; i++) {
            deckState.newIdOrder[gameState.idOrderPre[ind % gameState.idOrderPre.length]] = gameState.seat;
            deckState.newShouPai[gameState.seat] = deckState.shoupai[gameState.idOrderPre[ind % gameState.idOrderPre.length]];
            gameState.seat++;
            ind++;
          }
          gameState.idOrder = deckState.newIdOrder;
          deckState.shoupai = deckState.newShouPai;
          gameState.isSeatOrder = true;
          room.size = gameState.idOrderPre.length;
          resetOrderContainer();
          hideOrderContainer(room.size);
          console.warn("card reOrder shoupai: " + JSON.stringify(deckState.shoupai));
          console.warn("card reOrder seat info: " + JSON.stringify(gameState.idOrder));
          gameState.isGameStart = true;
        }
      }
      if (className == "GsCFirstPhaseRole" && (typeof seatId != "undefined" || typeof SeatID != "undefined")) {
        if (typeof seatId !== "undefined") {
          room.firstSeatID = seatId;
          console.warn("card first seat ID" + seatId);
        } else {
          room.firstSeatID = SeatID;
          console.warn("card first seat ID" + SeatID);
        }
        gameState.seat = 0;
      }
      if (className == "GsCUpdateRoleDataExNtf" && typeof DataID != "undefined" && DataID == 1 && typeof Datas != "undefined") {
        console.warn("出杀限制次数" + Datas[2] + " 已经用的次数次数 " + Datas[1]);
        document.getElementById("iframe-source").contentWindow.document.getElementById("sha").innerText = "剩余出杀次数：" + Math.max(0, Datas[2] - Datas[1]);
      }
      if (className == "PubGsCUseSpell" && typeof DestSeatIDs != "undefined" && DestSeatIDs.length > 0 && (card.SpellID == 921 || card.SpellID == 851)) {
        DestSeatID = DestSeatIDs[0];
      } else if (className == "PubGsCUseSpell" && typeof DestSeatIDs != "undefined" && DestSeatIDs.length > 0 && (card.SpellID == 987 || card.SpellID == 988)) {
        DestSeatID = DestSeatIDs[0];
      } else if (className == "PubGsCUseSpell" && card.SpellID == 3193) {
        isGuiXiang = true;
      } else if (className == "CGsRoleSpellOptRep" && typeof SeatID != "undefined" && card.SpellID == 3336) {
        for (let i = Datas.length - 1; i >= 0; i--) {
          const c = Datas[i];
          if (deckState.di.indexOf(c) != -1) {
            deckState.di.splice(deckState.di.indexOf(c), 1);
          }
          deckState.di.push(c);
        }
      } else if (className == "CGsRoleSpellOptRep" && card.SpellID == 7009) {
        for (let i = Datas.length - 1; i >= 0; i--) {
          const c = Datas[i];
          if (deckState.ding.indexOf(c) != -1) {
            deckState.ding.splice(deckState.ding.indexOf(c), 1);
          }
          deckState.ding.push(c);
        }
      } else if (userID == 1099193522 && className == "MsgGameDealCharacter") {
        if (typeof Allows != "undefined" && typeof Type != "undefined" && Type == 1) {
          var ran = Math.floor(Math.random() * Allows.length + 1);
          document.getElementById("title").innerText = "选" + ran;
        }
      } else if (className == "PubGsCUseSpell" && card.SpellID == 3157 && card.CardIDs.length != 0 && gameState.v) {
        for (const c of card.CardIDs) {
          deckState.shoupai[gameState.idOrder[firstID]].add(c);
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "PubGsCUseSpell" && card.SpellID == 781) {
        deckState.paidui.forEach((element) => {
          deckState.qipai.add(element);
        });
        deckState.paidui = /* @__PURE__ */ new Set();
        deckState.ding = [];
        deckState.di = [];
      } else if (className == "PubGsCUseSpell" && (card.SpellID == 3036 || card.SpellID == 121) && typeof DestSeatIDs !== "undefined") {
        deckState.temShouPai = deckState.shoupai[gameState.idOrder[DestSeatIDs[0]]];
        deckState.shoupai[gameState.idOrder[DestSeatIDs[0]]] = deckState.shoupai[gameState.idOrder[DestSeatIDs[1]]];
        deckState.shoupai[gameState.idOrder[DestSeatIDs[1]]] = deckState.temShouPai;
      } else if (className == "PubGsCUseSpell" && (card.SpellID == 605 || card.SpellID == 731) && typeof DestSeatIDs !== "undefined" && typeof SeatID !== "undefined") {
        deckState.shoupai[gameState.idOrder[SeatID]].forEach(
          (c) => {
            deckState.shoupai[gameState.idOrder[SeatID]].delete(c);
            deckState.shoupai[gameState.idOrder[DestSeatIDs[0]]].add(c);
          }
        );
      } else if (className == "PubGsCUseSpell" && card.SpellID == 3065) {
        for (const c of card.CardIDs) {
          deckState.paidui.delete(c);
          if (!deckState.shoupai[gameState.idOrder[SeatID]].delete(c)) {
            removeCardType(c);
          }
        }
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && card.SpellID == 7011) {
        for (const p of Params) {
          gameState.quanBianCards.add(p);
        }
        drawQuanBianYanXi(gameState.quanBianCards, "quanBian");
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && card.SpellID == 898 && typeof SrcSeatID != "undefined") {
        for (let i = 1; i <= Params[0]; i++) {
          if (deckState.shoupai[gameState.idOrder[SrcSeatID]].add(Params[i])) {
            removeCardType(Params[i]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "PubGsCUseSpell" && card.SpellID == 7017) {
        tempCards.length = 0;
        tempCards.push(DestSeatIDs[0]);
        tempCards.push(SeatID);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && card.SpellID == 7017) {
        for (const p of Params) {
          tempCards.push(p);
        }
      } else if (className == "PubGsCMoveCard" && card.SpellID == 7017) {
        if (FromZone == 5 && ToZone == 5) {
          for (let i = 2; i <= 4; i++) {
            if (!deckState.shoupai[gameState.idOrder[tempCards[0]]].delete(tempCards[i])) {
              removeCardType(tempCards[i]);
            }
            deckState.shoupai[gameState.idOrder[tempCards[1]]].add(tempCards[i]);
            tempCards.push(1);
          }
          drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
        } else {
          if (tempCards.length == 5) {
            for (let i = 2; i <= 4; i++) {
              gameState.yanXiCards.add(tempCards[i]);
            }
            drawQuanBianYanXi(gameState.yanXiCards, "yanXi");
          }
        }
      } else if (className == "PubGsCUseCard" && gameState.myID == SeatID && gameState.enableQuanBian) {
        addQuanBian(card.CardID);
      }
      if (className == "PubGsCUseCard" && gameState.myID == SeatID) {
        let lastUseCards = [];
        lastUseCards.push(card.CardID);
        drawCard(lastUseCards);
      } else if (className == "PubGsCUseSpell" && gameState.myID == SeatID && card.CardIDs.length != 0 && card.CardIDs.length <= 1) {
        let lastUseCards = card.CardIDs;
        drawCard(lastUseCards);
      } else if (className == "PubGsCUseSpell" && card.SpellID == 2143) {
        gameState.enableLuanJi = true;
        for (const c of card.CardIDs) {
          addSuit(c);
        }
      } else if (className == "ClientHappyGetFriendHandcardRep" && typeof deckState.shoupai[gameState.idOrder[seatId]] != "undefined") {
        deckState.shoupai[gameState.idOrder[seatId]].clear();
        for (const c of Cards) {
          if (typeof gameState.idOrder[seatId] != "undefined") {
            deckState.shoupai[gameState.idOrder[seatId]].add(c);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && Param == 1 && (card.SpellID == 987 || card.SpellID == 988)) {
        let shoupaiSize = Params[1];
        if (typeof DestSeatID != "undefined") {
          for (let p = Params.length - 1; p > Params.length - 1 - shoupaiSize; p--) {
            deckState.shoupai[gameState.idOrder[DestSeatID]].add(Params[p]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && targetSeatID == 255 && Param == 0 && card.SpellID == 3266 && gameState.v) {
        Params = Params.slice(1).filter((_, index) => index % 3 === 0).reverse();
        for (const p of Params) {
          deckState.paidui.add(p);
          addCardType(p);
          deckState.ding.push(p);
          console.warn("card ding target " + deckState.ding);
        }
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && targetSeatID != 255 && Param == 0 && card.SpellID == 3266 && gameState.v) {
        Params = Params.slice(1).filter((_, index) => index % 3 === 0).reverse();
        if (typeof targetSeatID != "undefined") {
          for (const p of Params) {
            deckState.shoupai[gameState.idOrder[targetSeatID]].add(p);
            console.warn("card shoupai target " + p);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && targetSeatID == 255 && Param == 0 && card.SpellID == 3266 && SrcSeatID == mainID) {
        Params = Params.slice(1).filter((_, index) => index % 3 === 0).reverse();
        for (const p of Params) {
          deckState.paidui.add(p);
          addCardType(p);
          deckState.ding.push(p);
          console.warn("card ding target " + deckState.ding);
        }
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && targetSeatID != 255 && Param == 0 && card.SpellID == 3266 && SrcSeatID == mainID) {
        Params = Params.slice(1).filter((_, index) => index % 3 === 0).reverse();
        if (typeof targetSeatID != "undefined") {
          for (const p of Params) {
            deckState.shoupai[gameState.idOrder[targetSeatID]].add(p);
            console.warn("card shoupai target " + p);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && card.SpellID == 372) {
        if (typeof targetSeatID != "undefined") {
          for (let p = Params.length - 1; p >= 0; p--) {
            deckState.shoupai[gameState.idOrder[targetSeatID]].add(Params[p]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && Param == 0 && (card.SpellID == 921 || card.SpellID == 851)) {
        if (typeof DestSeatID != "undefined") {
          for (const p in Params) {
            deckState.shoupai[gameState.idOrder[DestSeatID]].add(Params[p]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && Param == 0 && (card.SpellID == 4 || card.SpellID == 5)) {
        if (typeof targetSeatID != "undefined") {
          for (let p = Params.length - 1; p >= 0; p--) {
            deckState.shoupai[gameState.idOrder[targetSeatID]].add(Params[p]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && Param == 0 && (card.SpellID == 361 || card.SpellID == 774 || card.SpellID == 357 || card.SpellID == 811)) {
        if (typeof targetSeatID != "undefined") {
          for (let p = Params.length - 1; p >= 0; p--) {
            deckState.shoupai[gameState.idOrder[targetSeatID]].add(Params[p]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "GsCRoleOptTargetNtf" && typeof Params != "undefined" && (card.SpellID == 3119 || card.SpellID == 501)) {
        if (typeof targetSeatID != "undefined") {
          for (let p = Params.length - 1; p >= 0; p--) {
            deckState.shoupai[gameState.idOrder[targetSeatID]].add(Params[p]);
          }
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
      } else if (className == "PubGsCMoveCard" && typeof card.CardCount != "undefined" && card.CardCount > 0) {
        if (card.FromZone == 2 && card.ToZone == 9 && card.FromID == 0 && card.ToID == 0 && gameState.isGameStart) {
          deckState.ding = [];
          deckState.di = [];
          deckState.remCardCount = card.CardCount;
          deckState.remShouPai = deckState.paidui;
          drawRemShouPai(deckState.remShouPai);
          deckState.paidui = /* @__PURE__ */ new Set([...deckState.paidui, ...deckState.qipai]);
          deckState.qipai = /* @__PURE__ */ new Set();
          for (const cid of room.cardList) {
            removeCardType(cid);
          }
          deckState.suits = {
            diamond: 0,
            spade: 0,
            heart: 0,
            club: 0,
            spade2_9: 0,
            hongsha: 0,
            heisha: 0
          };
          deckState.paidui.forEach((element) => {
            addCardType(element);
          });
        } else if (card.FromZone == 2 && card.ToZone == 9 && card.FromID == 0 && card.ToID == 0 && !gameState.isGameStart) {
          deckState.remCardCount = card.CardCount;
          console.warn("发牌");
        } else if (card.ToZone == 5 && (card.FromID == 255 || card.FromID == 0 || gameState.idOrderPreSet.has(card.FromID)) && (card.FromZone == 1 || card.FromZone == 5) && !gameState.isGameStart) {
          console.warn("游戏开始,系统发牌/使用手气卡");
          deckState.remCardCount -= card.CardCount;
          if (!gameState.idOrderPreSet.has(card.ToID)) {
            gameState.idOrderPreSet.add(card.ToID);
            gameState.idOrderPre.push(card.ToID);
          }
          if (typeof card.CardIDs[0] != "undefined" && card.CardIDs[0] != 0) {
            mainID = card.ToID;
            gameState.mySeatID.add(mainID);
          }
          for (let i = 0; i < card.CardCount; i++) {
            if (card.CardIDs.length != 0) {
              cardID = card.CardIDs[i];
              const targetID = gameState.isSeatOrder ? gameState.idOrder[card.ToID] : card.ToID;
              deckState.shoupai[targetID].add(cardID);
              removeCardType(cardID);
              deckState.paidui.delete(cardID);
            }
          }
        } else if (card.FromZone == 5 && card.ToZone == 1 && card.ToID == 0 && !gameState.isGameStart) {
          deckState.remCardCount += card.CardCount;
          for (let i = 0; i < card.CardCount; i++) {
            if (card.CardIDs.length != 0) {
              cardID = card.CardIDs[i];
              deckState.shoupai[card.FromID].delete(cardID);
            }
            addCardType(cardID);
            deckState.paidui.add(cardID);
          }
          console.warn("card 手气卡丢牌 " + JSON.stringify(deckState.shoupai));
        } else if (card.FromID == 255 && card.FromZone == 1 && card.ToZone == 12 && card.ToID == 255 && !gameState.isGameStart) {
          removeCardType(cardID);
        } else if (card.FromID == 255 && card.FromZone == 0 && card.ToZone == 1 && card.ToID == 255 && !gameState.isGameStart) {
          addCardType(cardID);
        } else if (card.FromID == 255 && card.FromZone == 1 && card.ToZone == 6 && !gameState.isGameStart)
          ;
        else {
          gameState.isGameStart = true;
        }
        if (gameState.isGameStart) {
          if (card.MoveType == 21 && card.CardIDs) {
            card.CardIDs.reverse();
          }
          removeCard(card.FromID, card.CardIDs, card.FromZone, card.FromPosition, card.SpellID, card.CardCount);
          addCard(card.ToID, card.CardIDs, card.ToZone, card.ToPosition, card.SpellID, card.CardCount);
        }
        if (typeof card.SpellID != "undefined" && card.SpellID == 105) {
          removeCard(card.FromID, Array.from(deckState.shoupai[gameState.idOrder[card.FromID]]), card.FromZone, card.FromPosition, card.SpellID, card.CardCount);
          addCard(card.ToID, Array.from(deckState.shoupai[gameState.idOrder[card.FromID]]), card.ToZone, card.ToPosition, card.SpellID, card.CardCount);
        }
        drawShouPai(deckState.shoupai, gameState.idOrderPre, deckState.knownShouPai);
        drawDingOrDi(deckState.ding, deckState.di);
        if (deckState.remShouPai.size != 0) {
          drawRemShouPai(deckState.remShouPai);
        } else {
          document.getElementById("iframe-source").contentWindow.document.getElementById("knownCards").innerText = "";
          document.getElementById("iframe-source").contentWindow.document.getElementById("knownCardsInHand").style.display = "none";
        }
      }
    }
  }
  function gameStatusInit(cardCount) {
    gameStatusMap = {
      isJunZhengBiaoZhun: false,
      isJunZhengBiaoZhunShanShan: false,
      isJunZhengYingBian: false,
      isJunZhengYingBianShanShan: false,
      isShenZhiShiLian: false,
      isGuoZhanBiaoZhun: false,
      isGuoZhanYingBian: false,
      isDouDiZhu: false,
      isShenWu: false,
      isZhuGongSha: false,
      isZhuGongShaShanShan: false,
      isTongShuai: false,
      isUnknown: false,
      isHuanLeBiaoZhun: false,
      isHuanLeBiaoZhunShanShan: false
    };
    if (cardCount === 161 && room.cardList[160] === 12142) {
      gameStatusMap.isJunZhengBiaoZhunShanShan = true;
    } else if (cardCount === 161 && room.cardList[160] === 161) {
      gameStatusMap.isJunZhengBiaoZhun = true;
    } else if (cardCount === 160 && room.cardList[159] === 160) {
      gameStatusMap.isHuanLeBiaoZhun = true;
    } else if (cardCount === 160 && room.cardList[159] === 12142) {
      gameStatusMap.isHuanLeBiaoZhunShanShan = true;
    } else if (cardCount === 166 && room.cardList[165] === 13005) {
      gameStatusMap.isDouDiZhu = true;
    } else if (cardCount === 155 && room.cardList[154] === 326) {
      gameStatusMap.isShenWu = true;
    } else if (cardCount === 111 && room.cardList[107] === 1108) {
      gameStatusMap.isGuoZhanBiaoZhun = true;
    } else if (cardCount == 161 && room.cardList[160] == 7160) {
      gameStatusMap.isJunZhengYingBian = true;
    } else if (cardCount == 164 && room.cardList[160] == 7160) {
      gameStatusMap.isJunZhengYingBian = true;
    } else if (cardCount == 162 && room.cardList[1] == 201) {
      gameStatusMap.isShenZhiShiLian = true;
    } else if (cardCount == 112 && room.cardList[111] == 20330) {
      gameStatusMap.isGuoZhanYingBian = true;
    } else if (cardCount == 157 && room.cardList[156] == 13005) {
      gameStatusMap.isGuoZhanYingBian = true;
    } else if (cardCount == 158 && room.cardList[157] == 13005) {
      gameStatusMap.isZhuGongShaShanShan = true;
    } else {
      gameStatusMap.isUnknown = true;
    }
  }
  function getSeatUiPos() {
    const selfSeatUi = {
      ScaledHeight: UI.selfSeatUiUnscaledHeight * UI.scale
    };
    let ScaledWidth = UI.unscaledWidth * UI.scale;
    let ScaledHeight = UI.unscaledHeight * UI.scale;
    UI.ScaleWidth = ScaledWidth;
    UI.ScaleHeight = ScaledHeight;
    let height = UI.height;
    let width = UI.width;
    var selfSeatHeight = selfSeatUi.ScaledHeight;
    var seatWidth = 0;
    var seatHeight = 0;
    var length = seatUIs.length;
    if (length == 1)
      return;
    seatWidth = ScaledWidth;
    seatHeight = ScaledHeight;
    var list = [];
    list = seatUIs;
    var otherSeatCount = list.length - 1;
    var seatCountRight = 0;
    var seatCountTop = 0;
    var seatCountLeft = 0;
    if (otherSeatCount < 3) {
      seatCountTop = otherSeatCount;
    } else if (otherSeatCount == 3) {
      seatCountTop = 1;
    } else if (otherSeatCount == 4 || otherSeatCount == 6) {
      seatCountTop = 2;
    } else if (otherSeatCount == 5 || otherSeatCount == 7) {
      seatCountTop = 3;
    }
    seatCountRight = otherSeatCount - seatCountTop >> 1;
    seatCountLeft = otherSeatCount - seatCountRight - seatCountTop;
    if (gameStatusMap.isUnknown = length == 3 && UI.friendGeneral == 1) {
      seatCountTop = 1;
      seatCountLeft = 1;
    }
    var index = 1;
    var indexCount;
    var seatUI;
    var sx = 0, sy = 0;
    var verticalGap = 0;
    var horizontalGap = 0;
    var rightBarWidth = UI.rightBarWidth * UI.scale;
    var paddingX = 0;
    if (seatCountRight > 0) {
      var measuredWidthRight = seatWidth;
      var measuredHeightRight = seatHeight * seatCountRight;
      verticalGap = (height - selfSeatHeight - measuredHeightRight) * 0.25 >> 0;
      UI.verticalGap = verticalGap;
      measuredHeightRight += (seatCountRight - 1) * verticalGap;
      indexCount = index + seatCountRight;
      sx = width - measuredWidthRight - UI.paddingRight * UI.scale - rightBarWidth - paddingX;
      sy = (height - selfSeatHeight - measuredHeightRight - UI.paddingTop * UI.scale - UI.paddingBottom >> 1) + (UI.paddingTop + 10) * UI.scale + measuredHeightRight + UI.leftRightTop;
      for (; index < indexCount; index += 1) {
        seatUI = list[index];
        sy -= ScaledHeight;
        seatUI.posX = (sx - 5 >> 0) / window.devicePixelRatio;
        seatUI.posY = (sy + ScaledHeight >> 0) / window.devicePixelRatio;
        seatUI.DisplayLocation = "Right";
        sy -= verticalGap;
      }
    }
    if (seatCountTop > 0) {
      var measuredWidthTop = seatWidth * seatCountTop;
      horizontalGap = (width - rightBarWidth - measuredWidthTop) * 0.07 >> 0;
      UI.horizontalGap = horizontalGap;
      measuredWidthTop += (seatCountTop - 1) * horizontalGap;
      indexCount = index + seatCountTop;
      sx = (width - measuredWidthTop - rightBarWidth) / 2 + measuredWidthTop + (width <= 1600 ? UI.paddingLeftTopExtra : 0);
      sy = (UI.paddingTop + 10) * UI.scale;
      for (; index < indexCount; index += 1) {
        seatUI = list[index];
        sx -= ScaledWidth;
        seatUI.posX = (sx >> 0) / window.devicePixelRatio;
        seatUI.posY = (sy + ScaledHeight >> 0) / window.devicePixelRatio;
        seatUI.DisplayLocation = "Top";
        sx -= horizontalGap;
      }
    }
    var leftOffset = 0;
    if (seatCountLeft > 0) {
      var measuredHeightLeft = seatHeight * seatCountLeft;
      verticalGap = (height - selfSeatHeight - measuredHeightLeft) * 0.25 >> 0;
      measuredHeightLeft += (seatCountLeft - 1) * verticalGap;
      indexCount = index + seatCountLeft;
      sx = UI.paddingLeft * UI.scale;
      sy = (height - selfSeatHeight - measuredHeightLeft - UI.paddingTop * UI.scale - UI.paddingBottom >> 1) + (UI.paddingTop + 10) * UI.scale + UI.leftRightTop;
      for (; index < indexCount; index += 1) {
        seatUI = list[index];
        if (seatUI) {
          seatUI.DisplayLocation = "Left";
          seatUI.posX = (sx + leftOffset >> 0) / window.devicePixelRatio;
          seatUI.posY = (sy + ScaledHeight >> 0) / window.devicePixelRatio;
        }
        sy += seatHeight + verticalGap;
      }
    }
  }
  function injectCSS() {
    const style = document.createElement("style");
    style.textContent = `
  :root {
    --my-background-image: url('data:image/png;base64,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');
    --city: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAABcCAMAAAA1U6JXAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANJQTFRFAAAAlZOPMi4jOTUonJqUYlg+sJpm1bl5aF1Bi3pTXVQ7OTYpdGdHTUczoJ2Vh3dQiHhRPDkrPDgqh3dRjoyJKygeODQoVk01iHlSbGFEUEk1mIVZzrN1kX9WgXJOm4lbcWVGY1o/koBVQDkoIiAYLSogU0o1NzQnU0s0e2xJPjkrlIJXS0QxlYNYQDsrhnZQOjYofm9Ln4tdXFI3notchXVQhXVPoo5fYVY9RD4sp5JhNDAkm4hbrJdkSUMvxqxxtp9pV1A4pZFgOzgpOjcqSEIu2yvqOQAAAEZ0Uk5TAP///////////////////////////////////////////////////////////////////////////////////////////4malW8AAAJqSURBVHic7d3LbxJRGIbx+bjUiVpQAZuiJi40sbqpt8TL3+8l8brRdtGFsRGCpdXWaBAKxxl6m8bDwLvpDMnzW0xydl+eDMPuOxacMLMAPs65xClZqUQ0vyjZfuJ4qhnRvOJkE5uFw9LorAeaA4X9Ym9Ss0r0mvXPeqA5cG5UHOwlzuNmddsJasF23ayX0Vj5FjrXjfoEV1w3Po6bla6abQXRg8+ZV/RBc9+DRvQY/0QPmjXjr791zleynS239v4sD+N/glai2YXmYLexU7NBtqPlVtk2brer5dbvRLN7/e41s/Ub2U6WYxdt6L7VFz4lmt233s9l+5HtXLl22bUvhe5Dotlj1w8/8pal2Vztl+zNQbPnr2v1Lw+s2+hkPVXOLW3V3fub3e0nLyx8ZAVbX2llPdIcaK7dcSP3tmfVhy9vLa39amY90BxoLa50Np6927VqqRc8/UyzGbQW774Kwn2aCWimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6Wimo5mOZjqa6U6asctrVse7vNgZN7PjnXFHuwmvf816pJxL7CaMj+zAnG5ztbdwtAMzfrBrdar/d62y03cKz05fdken8+2OHu8oL7bZUT6Bb0c5u/BT+Xbhc+dCOt+dC4cq5WHhb0Zj5Zn3bo9D3CHjl3aHDHcV+aXeVUQyv5Q7sUg2yem71/4BKaOLe20M+8sAAAAASUVORK5CYII=')
  }
  .orderContainer {
      font-size: 13px; /* 默认字体大小，可以根据需要调整 */
      width: 100%;
      overflow: hidden;
      display: flex; /* 使用Flexbox布局 */
      align-items: center; /* 垂直居中对齐子元素 */
	  width: 146px;
	  z-index: 10000000000;
	  // color: #f2de9c;
    user-select: none;
    text-align: left;
    transition: height 200ms;
    position: fixed;
    transformOrigin = 0 0
  }

  .order-head {
      display: flex; /* 使用Flexbox */
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */
      font-weight: bolder;
      width: 10%;
      height: 25px;
      text-align: center;
      color: #f2de9c;
      margin-left: 3px;
  }

  .order-body:empty {
      // display: none;
  }

  .order-body {
      height: auto;
      width: 100%;
      float: right;
      display: block;
      flex: 1; /* Adjust to fill available space */
      overflow: hidden;
      border-radius: 5px;
  }

.shoupaiR, .shoupai {
    --shoupai-width: 35px;
    --shoupai-height: 40px;
    padding: 0;
    font-weight: bolder;
    margin-right: calc(30px - var(--shoupai-width));
    float: left;
    width: var(--shoupai-width);
    height: var(--shoupai-height);
    border: 1px solid black;
    text-align: center;
    background: rgba(210, 200, 160, 0.6);
    border-radius: 5px;
    box-shadow: inset 3px 3px 6px #111;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Emoji", Tahoma, Arial, sans-serif;
    white-space: nowrap; /* 防止文本换行 */
    text-shadow:
        1px 0 0 rgba(255, 255, 255, 0.7),
        0 1px 0 rgba(255, 255, 255, 0.7),
        -1px 0 0 rgba(255, 255, 255, 0.7),
        0 -1px 0 rgba(255, 255, 255, 0.7);
    font-size: 13px;
    }

    .shoupaiR {
        color: red;
    }

    .shoupai {
        color: black;
    }
    @keyframes fadeInLeftToRight {
      0% {
        clip-path: inset(0 100% 0 0);
        opacity: 0;
      }
      100% {
        clip-path: inset(0 0 0 0);
        opacity: 1;
      }
    }

    @keyframes fadeOutRightToLeft {
      0% {
        clip-path: inset(0 0 0 0);
        opacity: 1;
      }
      100% {
        clip-path: inset(0 100% 0 0);
        opacity: 0;
      }
    }

    .ac-tooltip {
      position: fixed;
      top: 100px;
      left: 50%;
      background-color: transparent;
      background-image: var(--my-background-image);
      // background-image: url('https://i.ibb.co/kBRHRxs/image-1.png');
      background-size: 100% 100%;
      color: #F44336;
      font-size: 16px;
      border-radius: 4px;
      z-index: 9999;
      overflow: hidden;
      white-space: nowrap;
      padding: 16px 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: translateX(0);
      transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
    }
    .ac-tooltip.green {
      background-color: transparent;
      color: #f2de9c;
    }
    .city{
      visibility: hidden;
      transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
      background-color: rgba(55, 52, 39, 0.7);
      color: #f2de9c;
      align-items: center;
      justify-content: center;
      display: flex;
      white-space: nowrap;
      border-radius: 5px;
      text-align: center;
    }
    @keyframes blink {
        50% {
            border-color: #f2de9c;
        }
    }
    .centerUI {
      width: 18px;
      height: 18px;
      background-color: #4e251f;
      border-radius: 4px;
      display: flex;
      border: 1px solid rgb(110 107 91);
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      visibility: hidden;
  }

  .centerUI::after {
    content: "!";
    font-family: Arial, sans-serif;
    font-size: 15px;
    color: #ffffff;
    font-weight: bold;
  }
  .centerUI:hover {
      background-color: rgb(134 74 58);
  }
  .show {
      animation: fadeInLeftToRight 1s forwards, blink 2s infinite;
      visibility: visible;
    }
    .hide {
      animation: fadeOutRightToLeft 1s forwards;
      visibility: hidden;
    }

`;
    document.head.appendChild(style);
  }
  function setGameSize() {
    UI.width = SystemContext.gameWidth * SystemContext.gameScale >> 0;
    UI.height = SystemContext.gameHeight * SystemContext.gameScale >> 0;
    UI.scale = SystemContext.gameScale;
    if (seatUIs && seatUIs.length > 0) {
      getSeatUiPos();
      drawSeatUIs();
    }
    let app = {
      width: (SystemContext.gameWidth * SystemContext.gameScale >> 0) / window.devicePixelRatio,
      height: (SystemContext.gameHeight * SystemContext.gameScale >> 0) / window.devicePixelRatio
    };
    if (window.padding && document.getElementById("createIframe")) {
      document.getElementById("bgDiv").style.width = document.documentElement.clientWidth + "px";
      document.getElementById("createIframe").style.height = "100%";
      document.getElementById("createIframe").style.right = "0px";
      document.getElementById("createIframe").style.top = "0px";
    } else {
      document.getElementById("bgDiv").style.width = document.documentElement.clientWidth + "px";
    }
    let cusBGDiv = document.getElementById("cusBGDiv");
    let sgsBgVideo = document.getElementById("sgsBgVideo");
    let imgBG = document.getElementById("sgsBgIMG");
    let seatUI = document.getElementById("seatUI");
    let centerUI = document.getElementById("centerUI");
    let top = ((window.innerHeight * window.devicePixelRatio - SystemContext.gameScale * SystemContext.gameHeight) / (2 * window.devicePixelRatio) + SystemContext.gameScale * SystemContext.gameHeight / 2) / window.devicePixelRatio;
    if (cusBGDiv) {
      cusBGDiv.style.width = `${app.width}px`;
      cusBGDiv.style.height = `${app.height}px`;
      cusBGDiv.style.left = window.innerWidth / 2 + "px";
      cusBGDiv.style.top = top + "px";
    }
    sgsBgVideo.width = app.width;
    sgsBgVideo.height = app.height;
    sgsBgVideo.style.left = window.innerWidth / 2 + "px";
    sgsBgVideo.style.top = top + "px";
    imgBG.width = app.width;
    imgBG.height = app.height;
    seatUI.style.width = `${app.width}px`;
    seatUI.style.height = `${app.height}px`;
    seatUI.style.left = window.innerWidth / 2 + "px";
    seatUI.style.top = top + "px";
    UI.centerX = window.innerWidth > app.width ? app.width / 2 : window.innerWidth / 2;
    UI.centerY = app.height / 2;
    centerUI.style.left = 210 * SystemContext.gameScale / window.devicePixelRatio + "px";
    centerUI.style.top = 52 * SystemContext.gameScale / window.devicePixelRatio + "px";
    if (cities.length > 0) {
      drawCities(cities);
    }
  }
  function addDynamicBG() {
    let updateTimeout;
    function scheduleSetGameSize() {
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
      updateTimeout = setTimeout(() => {
        setGameSize();
        updateTimeout = null;
      }, 500);
    }
    SystemContext._gameHeight = SystemContext.gameHeight;
    SystemContext._gameScale = SystemContext.gameScale;
    SystemContext._gameWidth = SystemContext.gameWidth;
    Object.defineProperty(SystemContext, "gameHeight", {
      get: function() {
        return this._gameHeight;
      },
      set: function(newValue) {
        if (newValue !== this._gameHeight) {
          this._gameHeight = newValue;
          scheduleSetGameSize();
        }
      }
    });
    Object.defineProperty(SystemContext, "gameScale", {
      get: function() {
        return this._gameScale;
      },
      set: function(newValue) {
        if (newValue !== this._gameScale) {
          this._gameScale = newValue;
          scheduleSetGameSize();
        }
      }
    });
    Object.defineProperty(SystemContext, "gameWidth", {
      get: function() {
        return this._gameWidth;
      },
      set: function(newValue) {
        if (newValue !== this._gameWidth) {
          this._gameWidth = newValue;
          scheduleSetGameSize();
        }
      }
    });
    var bgDiv = document.getElementById("bgDiv");
    if (bgDiv) {
      var seatUI = document.createElement("div");
      seatUI.id = "seatUI";
      seatUI.style.position = "absolute";
      seatUI.style.top = "50%";
      seatUI.style.left = "50%";
      seatUI.style.transform = "translate(-50%, -50%)";
      seatUI.style.pointerEvents = "none";
      seatUI.style.display = "";
      globalConfig.seatUISwitch == true ? seatUI.style.display = "inline-block" : seatUI.style.display = "none";
      var centerUI = document.createElement("div");
      centerUI.id = "centerUI";
      centerUI.className = "centerUI";
      centerUI.style.position = "absolute";
      centerUI.style.pointerEvents = "auto";
      centerUI.onmouseover = function() {
        const cityDivs = document.querySelectorAll("div.city");
        cityDivs.forEach((div) => {
          div.classList.remove("hide");
          div.classList.add("show");
        });
      };
      centerUI.onmouseout = function() {
        const cityDivs = document.querySelectorAll("div.city");
        cityDivs.forEach((div) => {
          div.classList.remove("show");
          div.classList.add("hide");
        });
      };
      seatUI.appendChild(centerUI);
      var cusBGDiv = document.createElement("div");
      cusBGDiv.id = "cusBGDiv";
      cusBGDiv.style.position = "absolute";
      cusBGDiv.style.top = "50%";
      cusBGDiv.style.left = "50%";
      cusBGDiv.style.transform = "translate(-50%, -50%)";
      cusBGDiv.style.zIndex = "0";
      cusBGDiv.style.pointerEvents = "none";
      var video = document.createElement("video");
      video.className = "bg-ani";
      video.id = "sgsBgVideo";
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.preload = "auto";
      video.style.setProperty("object-fit", "fill", "important");
      var imgBG = document.createElement("img");
      imgBG.className = "bg-ani";
      imgBG.id = "sgsBgIMG";
      imgBG.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      imgBG.style.zIndex = "1";
      imgBG.style.position = "absolute";
      imgBG.style.top = "0";
      imgBG.style.left = "0";
      cusBGDiv.appendChild(video);
      cusBGDiv.appendChild(imgBG);
      bgDiv.appendChild(cusBGDiv);
      document.body.appendChild(seatUI);
      setGameSize();
    }
  }
  function getSeatUIs() {
    seatUIs = [];
    drawSeatUIs();
    let ind = gameState.idOrderPre.indexOf(gameState.myID);
    console.warn("gameState.idOrderPre", gameState.idOrderPre);
    for (let i = 0; i < gameState.idOrderPre.length; i++) {
      let seatUI = {};
      seatUI.index = ind;
      seatUI.actualSeatID = gameState.idOrder[gameState.idOrderPre[ind % gameState.idOrderPre.length]] + 1;
      ind++;
      seatUIs.push(seatUI);
    }
    console.warn(seatUIs);
    getSeatUiPos();
    drawSeatUIs();
  }
  function changeBG() {
    document.getElementById("sgsBgIMG").src = "https://web.sanguosha.com/10/pc/res/assets/runtime/general/maxBig/604701.png";
    setTimeout(function() {
      document.getElementById("sgsBgIMG").src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    }, 2e4);
  }
  function skinLogic(args) {
    var _a, _b, _c;
    var GeneralSkinList = args[0] && args[0]["GeneralSkinList"];
    let className = args[0] && args[0]["className"];
    let curUserID = args[0] && args[0]["ClientID"];
    if (curUserID == b)
      isB = true;
    initFrame();
    if (className == "ClientLeavetableRep" || className == "ClientRecommendShopItemRep" || className == "MsgGameOver") {
      seatUIs = [];
      UI.friendGeneral = 0;
      drawSeatUIs();
    }
    if (className == "ClientActivitysetDataRep" || className == "MsgGamePlayCardNtf") {
      cities = [];
      drawCities(cities);
      document.getElementById("centerUI").classList.remove("show");
      document.getElementById("centerUI").classList.add("hide");
    }
    if (className == "decodeClientTavernInfoRep") {
      let cnt = (_c = (_b = (_a = args[0].data) == null ? void 0 : _a.protoObj) == null ? void 0 : _b.tavern_info) == null ? void 0 : _c.day_quest_finished_cnt;
      if (cnt >= 30) {
        let text = `今日已获得亲密度：${cnt}，恭喜你完成任务~`;
        addTooltip(text, "acTooltip", 3e3, "green");
      } else if (cnt > 0) {
        addTooltip(`今日已获得亲密度：${cnt}，还差 ${30 - cnt} 亲密度，继续努力吧~`);
      }
    }
    if (className == "decodeRougeBaseInfoRep") {
      let friendGeneral = args[0].ProtoObj.friendGeneral;
      if (typeof friendGeneral != "undefined") {
        UI.friendGeneral = friendGeneral.length;
      }
    }
    if (className == "GsClientSyncTablePersonalityCardSetRsp") {
      const seatDatas = args[0].seatDatas;
      for (let i = 0; i < seatDatas.length; i++) {
        globalConfig.cardBackSwitch == true ? seatDatas[i].cardBackId = 1 : seatDatas[i].cardBackId = 0;
        globalConfig.cardBackSwitch == true ? seatDatas[i].cardFaceId = 1 : seatDatas[i].cardFaceId = 0;
      }
    }
    if (className == "DbsCcUserGoodshintNtf" && typeof args[0].GoodsList != "undefined" && typeof args[0].Type != "undefined" && args[0].Type == 2010) {
      gameState.goods = args[0].GoodsList;
    }
    if (className == "decodeSSCChatmsgNtf" && typeof args[0].ProtoObj != "undefined" && typeof args[0].ProtoObj.scene != "undefined" && args[0].ProtoObj.scene == 11) {
      args[0].ProtoObj.scene = 2;
    }
    if (className == "decodeClientSecretInfoRep" && typeof args[0].ProtoObj != "undefined" && Object.keys(gameState.goods).length != 0) {
      const o = args[0].ProtoObj;
      globalConfig.currentSec = o.secId;
      for (let l of gameState.goods) {
        drawLottery(globalConfig.currentSec, l.GoodsBaseID, l.ChangeCount, o.openTime);
        recLottery(o.secId, l.GoodsBaseID, o.openTime, o.levelId, l.ChangeCount);
      }
    }
    if (className == "ClientDianJiangResponse" && typeof args[0].ProtoObj.data != "undefined") {
      let data = args[0].ProtoObj.data;
      for (let d of data) {
        d.generalId = 229;
      }
      for (let d of args[0].List) {
        d.GeneralID = 229;
      }
    }
    if (className == "decodeRogueLikeDataSync") {
      document.getElementById("centerUI").classList.remove("hide");
      document.getElementById("centerUI").classList.add("show");
      if (typeof args[0].ProtoObj.allData.shopData != "undefined") {
        let shopData = args[0].ProtoObj.allData.shopData;
        if (gameState.v) {
          shopData.bShow = true;
        }
        let storeItem = [];
        if (typeof shopData.itemId != "undefined") {
          for (let i of shopData.itemId) {
            if (initMap.RTactics[i]) {
              storeItem.push(initMap.RTactics[i]["plotname"]);
            }
            if (initMap.RSpell[i] && initMap.RSpell[i]["spellid"]) {
              storeItem.push(initMap.spell[initMap.RSpell[i]["spellid"]]);
            }
            if (initMap.RCard[i] && initMap.RCard[i]["cardid"]) {
              storeItem.push(allCard[initMap.RCard[i]["cardid"]]["name"]);
            }
          }
        }
        drawStore(storeItem);
      }
      let chapterData = args[0].ProtoObj.allData.chapterData;
      let generalpool = args[0].ProtoObj.allData.generalpool;
      let general_change = generalpool && generalpool.general_change ? generalpool.general_change.map((element) => {
        const name = initMap.generalDict[element];
        return name ? name : `Unknown (${element})`;
      }) : [];
      if (general_change.length > 0 && gameState.v) {
        addTooltip(`界小抄专属：可换将为${general_change.reverse().join(", ")}`);
      }
      cities = [];
      if (typeof chapterData != "undefined" && typeof chapterData.locations != "undefined") {
        for (let l of chapterData.locations) {
          let city = {};
          city["id"] = l.location;
          city["event"] = l.event;
          cities.push(city);
        }
      }
      drawCities(cities);
      args[0].ProtoObj.allData.gameData;
    }
    if (className == "ClientRoleGeneralStarRep") {
      if (args[0].Star >= 0 && globalConfig.generalSwitch) {
        args[0].Star = 4;
      }
    }
    if (className == "CGsRoleSpellOptRep" && mainID == args[0].SeatID) {
      let tianGuo = false;
      if (typeof args[0].Datas != "undefined" && args[0].Datas.length > 0 && args[0].SpellID != null && args[0].SpellID == 15 && args[0].Type == 10) {
        if (allCard[args[0].Datas[0]]["color"] == 1) {
          tianGuo = true;
        }
        const leCalRequest = {
          tianGuo,
          username: gameState.userID,
          officerLv: gameState.curOfficerLv,
          getData: false
        };
        fetch("https://goka.top:8080/le", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(leCalRequest)
        }).then((response) => response.json()).then((data) => {
          document.getElementById("iframe-source").contentWindow.document.getElementById("PlayerTianGuo").innerHTML = "你的天过次数/总次数 <br>" + data.PlayerTianGuo + "/" + data.PlayerCount + " = " + (data.PlayerTianGuo / data.PlayerCount).toFixed(2);
        }).catch((error) => console.error("Error:", error));
      }
    }
    if (className == "ClientLoginRep") {
      userID = args[0]["uid"];
      gameState.userID = userID;
      UserID = args[0]["UserID"];
      gameState.Nickname = args[0]["Nickname"];
      initFrame();
    }
    if (className == "ClientOfficerInfoRep") {
      gameState.curOfficerLv = args[0]["curOfficerLv"];
    }
    if (className == "ClientGeneralSkinRep" && GeneralSkinList[0]["GeneralID"] == 306 || curUserID == UserID && !gameStatusMap.isGuoZhanBiaoZhun && !gameStatusMap.isGuoZhanYingBian) {
      gameState.enableBoTu = true;
    }
    if (className == "ClientGeneralSkinRep" && GeneralSkinList[0]["GeneralID"] == 7003 && curUserID == UserID) {
      gameState.enableQuanBian = true;
    }
    if (className == "ClientGeneralSkinRep" && (curUserID == userID || gameState.curGeneral == GeneralSkinList[0]["GeneralID"])) {
      gameState.GeneralID = GeneralSkinList[0]["GeneralID"];
      if (gameState.GeneralID == 46 || gameState.GeneralID == 479) {
        changeBG();
      }
      gameState.curGeneral = gameState.curGeneral === -1 ? GeneralSkinList[0]["GeneralID"] : gameState.curGeneral;
      if (curUserID < 10) {
        gameState.myID = curUserID;
        console.warn("myID" + gameState.myID);
        getSeatUIs();
      }
      if (globalConfig.skinSwitch) {
        if (gameStatusMap.isGuoZhanBiaoZhun || gameStatusMap.isGuoZhanYingBian) {
          if (gameState.GuoZhanGeneral.indexOf(gameState.GeneralID) == -1) {
            if (gameState.GuoZhanGeneral.length >= 2) {
              gameState.GuoZhanGeneral[1] = gameState.GeneralID;
            } else {
              gameState.GuoZhanGeneral.push(gameState.GeneralID);
            }
            updateSkinListGuoZhan(gameState.GuoZhanGeneral[0], gameState.GuoZhanGeneral[1]);
            gameState.isFirstTime = false;
          }
          if (!gameState.isClickSkinSelect) {
            if (typeof UsedGeneralSkinID != "undefined" && typeof UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID] != "undefined") {
              mySkin = UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID];
            }
          }
        } else {
          if (gameState.GeneralID != gameState.oldGeneralID && gameState.GeneralID != 999) {
            updateSkinList(gameState.GeneralID);
            if (typeof UsedGeneralSkinID != "undefined" && typeof UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID] != "undefined") {
              mySkin = UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID];
              gameState.oldGeneralID = gameState.GeneralID;
              gameState.isFirstTime = true;
            } else {
              if (gameState.oldGeneralID == 999) {
                mySkin = 0;
              } else {
                mySkin = UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID];
              }
              gameState.oldGeneralID = gameState.GeneralID;
              gameState.isFirstTime = true;
            }
          } else {
            gameState.isFirstTime = false;
          }
        }
        if (typeof mySkin != "undefined") {
          UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID] = mySkin;
          localStorage.setItem(accountUsedGeneralSkinID, JSON.stringify(UsedGeneralSkinID));
          var box = document.getElementById("createSkinIframeSource").contentWindow.document.getElementById(mySkin.toString());
          if (box != null && typeof box != "undefined" && box.classList[1] == gameState.GeneralID) {
            if (mySkin.toString().endsWith("_2")) {
              GeneralSkinList[0]["skin_type"] = 2;
              GeneralSkinList[0]["SkinID"] = parseInt(mySkin.slice(0, -2));
            } else if (mySkin.toString().endsWith("_1")) {
              GeneralSkinList[0]["skin_type"] = 1;
              GeneralSkinList[0]["SkinID"] = parseInt(mySkin.slice(0, -2));
            } else {
              GeneralSkinList[0]["skin_type"] = 0;
              GeneralSkinList[0]["SkinID"] = parseInt(mySkin);
            }
          }
        }
        GeneralSkinList[0]["state"] = globalConfig.skinState ? 1 : 0;
        GeneralSkinList[0]["State"] = globalConfig.skinState ? 1 : 0;
      }
    }
    if (args == "资源组加载完毕：selectSkin") {
      if (globalConfig.skinSwitch && !gameState.isFirstTime && document.getElementById("createSkinIframeSource").contentWindow.document.body.innerHTML != "") {
        document.getElementById("createSkinIframe").style.display = "inline-block";
        clickToChangeSkinAndCloseSkinFrame();
      }
    }
  }
  function fetchCDK() {
    fetch(
      "https://goka.top:8080/getCDK",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then((response) => response.json()).then((data) => {
      drawYanJiao(data, "CDK");
    }).catch((error) => console.error("Error:", error));
  }
  function getLottery(username, secId) {
    const url = `https://goka.top:8080/getLottery?username=${username}&secId=${secId}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((data) => {
      gameState.lotteries = data;
      console.warn(data);
      return data;
    }).catch((error) => {
      console.error("Error:", error);
      return [];
    });
  }
  function recLottery(secId, itemId, times, level, itemNum) {
    const l = {
      "username": gameState.userID,
      "itemId": itemId,
      "secId": secId,
      "times": times,
      "level": level,
      "itemNum": itemNum
    };
    fetch(
      "https://goka.top:8080/recLottery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(l)
      }
    ).catch((error) => console.error("Error:", error));
  }
  function fetchDropItem() {
    return fetch("https://goka.top:8080/getDropItem", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((data) => {
      globalConfig.dropItem = data;
    }).catch((error) => console.error("Error:", error));
  }
  function fetchSecId() {
    return fetch("https://goka.top:8080/getSecId", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((data) => {
      globalConfig.secId = data;
    }).catch((error) => console.error("Error:", error));
  }
  function fetchLe() {
    const leCalRequest = {
      tianGuo: false,
      username: gameState.userID,
      officerLv: gameState.curOfficerLv,
      getData: true
    };
    fetch("https://goka.top:8080/le", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(leCalRequest)
    }).then((response) => response.json()).then((data) => {
      document.getElementById("iframe-source").contentWindow.document.getElementById("PlayerTianGuo").innerHTML = "你的天过次数/总次数 <br>" + data.PlayerTianGuo + "/" + data.PlayerCount + " = " + (data.PlayerTianGuo / data.PlayerCount).toFixed(2);
    }).catch((error) => console.error("Error:", error));
    fetch("https://goka.top:8080/le", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((data) => {
      var officerData = document.getElementById("iframe-source").contentWindow.document;
      var htmlString = "各官阶天过概率（%） <br>大将军: " + data["大将军"] + "<br>统帅: " + data["统帅"] + "<br>国都护: " + data["国都护"] + "<br>国护军: " + data["国护军"] + "<br>上将军: " + data["上将军"] + "<br>将军: " + data["将军"] + "<br>偏将军: " + data["偏将军"] + "<br>郎将: " + data["郎将"] + "<br>校尉: " + data["校尉"] + "<br>";
      officerData.getElementById("AITianGuo").innerHTML = htmlString;
    }).catch((error) => console.error("Error:", error));
  }
  function clickToChangeSkinAndCloseSkinFrame() {
    gameState.isClickSkinSelect = true;
    const boxes = document.getElementById("createSkinIframeSource").contentWindow.document.querySelectorAll(".skinList");
    if (typeof UsedGeneralSkinID != "undefined" && typeof UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID] != "undefined") {
      mySkin = UsedGeneralSkinID["UsedGeneralSkinID"][gameState.GeneralID];
    }
    boxes.forEach((box) => {
      box.addEventListener("click", function handleClick(event) {
        mySkin = box.id;
        document.getElementById("createSkinIframe").style.display = "none";
      });
    });
  }
  function gameStart(cardList) {
    const deckConfig = {
      isJunZhengBiaoZhun: {
        label: "军争",
        diamond: 41,
        spade: 40,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isJunZhengBiaoZhunShanShan: {
        label: "军争",
        diamond: 41,
        spade: 40,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isGuoZhanBiaoZhun: {
        label: "国战",
        diamond: 28,
        spade: 27,
        heart: 27,
        club: 28,
        spade2_9: 17,
        hongsha: 8,
        heisha: 21
      },
      isGuoZhanYingBian: {
        label: "国战应变",
        diamond: 27,
        spade: 27,
        heart: 28,
        club: 28,
        spade2_9: 17,
        hongsha: 8,
        heisha: 21
      },
      isDouDiZhu: {
        label: "斗地主",
        diamond: 43,
        spade: 40,
        heart: 43,
        club: 40,
        spade2_9: 25,
        hongsha: 18,
        heisha: 30
      },
      isShenWu: { label: "神武", diamond: 43, spade: 40, heart: 43, club: 40, spade2_9: 25, hongsha: 18, heisha: 30 },
      isZhuGongSha: {
        label: "主公杀",
        diamond: 40,
        spade: 39,
        heart: 38,
        club: 39,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isZhuGongShaShanShan: {
        label: "主公杀",
        diamond: 40,
        spade: 39,
        heart: 38,
        club: 39,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isHuanLeBiaoZhun: {
        label: "军争无木马",
        diamond: 40,
        spade: 40,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isHuanLeBiaoZhunShanShan: {
        label: "军争无木马",
        diamond: 40,
        spade: 40,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isJunZhengYingBian: {
        label: "军争应变",
        diamond: 41,
        spade: 40,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isJunZhengYingBianShanShan: {
        label: "军争应变",
        diamond: 41,
        spade: 40,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isShenZhiShiLian: {
        label: "神之试炼",
        diamond: 41,
        spade: 41,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      },
      isUnknown: {
        label: "未知牌堆",
        diamond: 41,
        spade: 41,
        heart: 40,
        club: 40,
        spade2_9: 25,
        hongsha: 14,
        heisha: 30
      }
    };
    deckState.suits = {
      diamond: 0,
      spade: 0,
      heart: 0,
      club: 0,
      spade2_9: 0,
      hongsha: 0,
      heisha: 0
    };
    for (let i = 0; i < 8; i++) {
      let seatID = (i + 1).toString();
      document.getElementById("iframe-source").contentWindow.document.getElementById(seatID).innerHTML = "";
    }
    deckState.paidui = /* @__PURE__ */ new Set();
    for (const cid of cardList) {
      deckState.paidui.add(cid);
    }
    for (let key in deckConfig) {
      if (gameStatusMap[key]) {
        deckState.suits = deckConfig[key];
        break;
      }
    }
    document.getElementById("iframe-source").contentWindow.document.getElementById("nav1").innerHTML = "";
    deckState.qipai = /* @__PURE__ */ new Set();
    deckState.chuli = /* @__PURE__ */ new Set();
    deckState.biaoji = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
    deckState.shoupai = {
      0: /* @__PURE__ */ new Set(),
      1: /* @__PURE__ */ new Set(),
      2: /* @__PURE__ */ new Set(),
      3: /* @__PURE__ */ new Set(),
      4: /* @__PURE__ */ new Set(),
      5: /* @__PURE__ */ new Set(),
      6: /* @__PURE__ */ new Set(),
      7: /* @__PURE__ */ new Set()
    };
    deckState.chainStatus = { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false };
    deckState.zhuangbei = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
    deckState.panding = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] };
    deckState.jineng = /* @__PURE__ */ new Set();
    deckState.zone10 = /* @__PURE__ */ new Set();
    deckState.ding = [];
    deckState.di = [];
    deckState.remShouPai = /* @__PURE__ */ new Set();
    deckState.newIdOrder = {};
    deckState.newShouPai = {};
    deckState.unknownCard = [];
    deckState.temShouPai = /* @__PURE__ */ new Set();
    deckState.knownShouPai = /* @__PURE__ */ new Set();
    gameState.idOrder = {};
    gameState.seat = 0;
    gameState.isGameStart = false;
    gameState.isSeatOrder = false;
    gameState.idOrderPreSet = /* @__PURE__ */ new Set();
    gameState.idOrderPre = [];
    gameState.isDuanXian = false;
    gameState.mySeatID = /* @__PURE__ */ new Set();
    gameState.isFirstTime = true;
    gameState.GuoZhanGeneral = [];
    gameState.boTu = /* @__PURE__ */ new Set();
    gameState.enableBoTu = false;
    gameState.luanJi = /* @__PURE__ */ new Set();
    gameState.enableLuanJi = false;
    gameState.enableQuanBian = false;
    gameState.quanBianCards = /* @__PURE__ */ new Set();
    gameState.yanXiCards = /* @__PURE__ */ new Set();
    gameState.quanBian = /* @__PURE__ */ new Set();
    gameState.enableHuaMu = false;
    gameState.huaMu = /* @__PURE__ */ new Set();
    gameState.isClickSkinSelect = false;
    gameState.myID = -1;
    gameState.curGeneral = -1;
  }
  function addTooltip(text, id = "acTooltip", duration = 1e4, className) {
    let ele = document.getElementById(id);
    ele && ele.remove();
    let div = document.createElement("div");
    div.id = id;
    div.className = "ac-tooltip " + className;
    div.innerText = text;
    document.body.appendChild(div);
    setTimeout(() => {
      div.classList.remove("hide");
      div.classList.add("show");
      div.style.top = "20px";
    }, 50);
    if (duration) {
      setTimeout(() => {
        removeTooltip(id);
      }, duration);
    }
  }
  function removeTooltip(id) {
    let div = document.getElementById(id);
    if (div) {
      div.style.top = "-100px";
      setTimeout(() => {
        div.classList.remove("show");
        div.classList.add("hide");
        div.remove();
      }, 1e3);
    }
  }
  function initFrame() {
    if (!gameState.isFrameAdd) {
      initSGSConfigData();
      injectCSS();
      addDynamicBG();
      gameState.isFrameAdd = true;
      addFrame(gameState.userID);
      addSkinFrame();
      document.getElementById("toggle-me").click();
      document.getElementById("iframe-source").contentWindow.document.getElementById("ACSubmit").click();
      fetchCDK();
      fetchLe();
      fetchSecId();
      fetchDropItem();
      Promise.all([fetchSecId(), fetchDropItem()]).then(() => {
        const webpage = document.getElementById("iframe-source").contentWindow.document.getElementById("choujiang");
        webpage.href = "https://goka.top:8080/choujiang?username=" + gameState.userID;
        getLottery(gameState.userID, 0).then((lotteries) => {
          lotteries.forEach((l) => {
            drawLottery(l.secId, l.itemId, l.itemNum, l.times);
          });
        });
      }).catch((error) => {
        console.error("Error during fetching:", error);
      });
      var skinSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("skinSwitch");
      localStorage.getItem("SKIN_SWITCH") == "true" ? skinSwitch.checked = true : skinSwitch.checked = false;
      var generalSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("generalSwitch");
      localStorage.getItem("GENERAL_SWITCH") == "true" ? generalSwitch.checked = true : generalSwitch.checked = false;
      var skinStateSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("skinStateSwitch");
      localStorage.getItem("SKIN_STATE_SWITCH") == "true" ? skinStateSwitch.checked = true : skinStateSwitch.checked = false;
      var cardBackSwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("cardBackSwitch");
      localStorage.getItem("CARD_BACK_SWITCH") == "true" ? cardBackSwitch.checked = true : cardBackSwitch.checked = false;
      var seatUISwitch = document.getElementById("iframe-source").contentWindow.document.getElementById("seatUISwitch");
      localStorage.getItem("SEAT_UI_SWITCH") == "true" ? seatUISwitch.checked = true : seatUISwitch.checked = false;
    }
  }
  function main() {
    let args = Array.prototype.slice.call(arguments);
    let mainInfo = {};
    skinLogic(args);
    mainInfo["className"] = args[0]["className"];
    mainInfo["CardIDs"] = args[0]["CardIDs"];
    mainInfo["CardID"] = args[0]["CardID"];
    mainInfo["FromID"] = args[0]["FromID"];
    mainInfo["FromZone"] = args[0]["FromZone"];
    mainInfo["ToID"] = args[0]["ToID"];
    mainInfo["ToZone"] = args[0]["ToZone"];
    mainInfo["CardCount"] = args[0]["CardCount"];
    mainInfo["DataCount"] = args[0]["DataCount"];
    mainInfo["SpellID"] = args[0]["SpellID"];
    mainInfo["spellId"] = args[0]["spellId"];
    mainInfo["FromPosition"] = args[0]["FromPosition"];
    mainInfo["ToPosition"] = args[0]["ToPosition"];
    mainInfo["cardCount"] = args[0]["cardCount"];
    mainInfo["CardList"] = args[0]["CardList"];
    mainInfo["SeatID"] = args[0]["SeatID"];
    mainInfo["Param"] = args[0]["Param"];
    mainInfo["Params"] = args[0]["Params"];
    mainInfo["DestSeatIDs"] = args[0]["DestSeatIDs"];
    mainInfo["GeneralSkinList"] = args[0]["GeneralSkinList"];
    mainInfo["Infos"] = args[0]["Infos"];
    mainInfo["Cards"] = args[0]["Cards"];
    mainInfo["targetSeatID"] = args[0]["targetSeatID"];
    mainInfo["seatId"] = args[0]["seatId"];
    mainInfo["SeatID"] = args[0]["SeatID"];
    mainInfo["Round"] = args[0]["Round"];
    mainInfo["uid"] = args[0]["uid"];
    mainInfo["UserID"] = args["UserID"];
    mainInfo["Datas"] = args[0]["Datas"];
    mainInfo["datas"] = args[0]["datas"];
    mainInfo["Allows"] = args[0]["Allows"];
    mainInfo["Type"] = args[0]["Type"];
    mainInfo["SrcSeatID"] = args[0]["SrcSeatID"];
    mainInfo["DataID"] = args[0]["DataID"];
    mainInfo["MoveType"] = args[0]["MoveType"];
    let mainInfoToMainLogic = JSON.parse(JSON.stringify(mainInfo));
    try {
      mainLogic(mainInfoToMainLogic);
    } catch (e) {
      console.error(e.message);
      console.error(e.stack);
      const [, lineno, colno] = e.stack.match(/(\d+):(\d+)/);
      console.error("Line:", lineno);
      console.error("Column:", colno);
      document.getElementById("iframe-source").contentWindow.document.getElementById("nav1").innerHTML = "<b>小抄GG了，联系作者解决</b>";
    }
  }
  if (!Array.isArray(window.SGSMODULE)) {
    window.SGSMODULE = [];
    if (!console._log)
      console._log = console.log;
    console._log("%cBASE", "font-weight: bold; color: white; background-color: #525288; padding: 1px 4px; border-radius: 4px;");
    const filteredClassList = [
      "SsCChatmsgNtf",
      "GsCModifyUserseatNtf",
      "MsgReconnectGame",
      "MsgGamePlayCardNtf",
      "PubGsCUseSpell",
      "ClientHappyGetFriendHandcardRep",
      "GsCRoleOptTargetNtf",
      "PubGsCMoveCard",
      "GsCFirstPhaseRole",
      "GsCGamephaseNtf",
      "PubGsCUseCard",
      "ClientGeneralSkinRep",
      "ClientLoginRep",
      "MsgReconnectGame",
      "ClientRoleGeneralStarRep",
      "SmsgGameStateData",
      "CGsRoleSpellOptRep",
      "ClientUserbaseinfoRep",
      "GsClientSyncTablePersonalityCardSetRsp",
      "MsgGameDealCharacter",
      "ClientOfficerInfoRep",
      "MsgNtfUseCardType",
      "ClientRoleGeneralStarRep",
      "GsCUpdateRoleDataExNtf",
      "decodeRogueLikeDataSync",
      "DbsCcUserGoodshintNtf",
      "decodeClientSecretInfoRep",
      "ClientLeavetableRep",
      "ClientRecommendShopItemRep",
      "MsgGameOver",
      "decodeRougeBaseInfoRep",
      "decodeClientTavernInfoRep",
      "ClientActivitysetDataRep"
    ];
    const _log = (...args) => {
      if (typeof args[0] === "object" && "className" in args[0] && filteredClassList.includes(args[0].className) || window.isLogAllClass || args == "资源组加载完毕：selectSkin" || args[0].className == "decodeSSCChatmsgNtf" && typeof args[0].ProtoObj.scene != "undefined" && args[0].ProtoObj.scene == 11) {
        window.isLogAllClass && console._log(...args);
        SGSMODULE.forEach((fn) => fn(...args));
      }
    };
    Object.defineProperty(console, "log", {
      get() {
        return _log;
      },
      set() {
        return;
      }
    });
  }
  window.SGSMODULE.push(main);

})();