//room_ par.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    get_room_info_list: { "id": 941273318, "unitId": "10934512", "price": { "price": 128, "originalPrice": 128, "priceAdv": "", "priceDay": 1 }, "deposit": 100, "pname": "地铁11号线日式休闲度假别墅单人房", "pEnName": "", "rmstic": { "bedty": "单人床", "roomty": "别墅单间", "layoutty": "1室 1厨1卫" }, "pos": { "cityId": 2, "cityName": "上海", "isOverSea": false, "locationId": 119, "locationName": "浦东新区", "attr": "上海浦东新区枫涧美墅(枫涧美墅)", "lat": 31.138717090515993, "lon": 121.5321112590202 }, "rmattr": { "source": "整套", "maxck": 1, "bedty": "单人床", "beds": ["单人床 1张"], "bedNum": 1, "houseSize": 15, "houseSizeAdv": "", "floorRange": "1-20", "cleanFeeUnitPrice": 0, "cleanFeeUnit": 1, "addPeopleFeeUnitPrice": 0, "maxCanAddPeopleNum": 0, "face": [{ "name": "无线网络", "value": "wxwl", "icon": "facility-icon" }, { "name": "电吹风", "value": "dcf", "icon": "facility-icon24" }, { "name": "洗衣机", "value": "wxjy", "icon": "facility-icon3" }, { "name": "24小时热水", "value": "rs", "icon": "facility-icon2" }, { "name": "电视", "value": "mftv", "icon": "facility-icon7" }, { "name": "停车位", "value": "park", "icon": "facility-icon12" }, { "name": "智能门锁", "value": "znms", "icon": "facility-icon15" }, { "name": "有线网络", "value": "inet", "icon": "facility-icon13" }, { "name": "冰箱", "value": "bx", "icon": "facility-icon14" }, { "name": "毛巾", "value": "mj", "icon": "facility-icon9" }, { "name": "浴巾", "value": "yuj", "icon": "facility-icon26" }, { "name": "牙具", "value": "yj", "icon": "facility-icon27" }, { "name": "洗发水", "value": "xfs", "icon": "facility-icon29" }, { "name": "拖鞋", "value": "tx", "icon": "facility-icon30" }, { "name": "热水壶", "value": "rsh", "icon": "facility-icon25" }], "maxbooking": 90, "minbooking": 1, "detailbeds": [{ "bedType": "单人床", "width": 1, "length": 2, "quantity": 1 }], "rooms": [{ "name": "室", "quantity": 1 }, { "name": "卫生间", "quantity": 1 }], "cookAble": 2, "addBedAble": 2, "facility": [{ "groupName": "基础设施", "bases": [{ "name": "无线网络", "value": "inet", "icon": "0000" }, { "name": "电视机", "value": "dds", "icon": "0001" }, { "name": "空调", "value": "ptktqbfj", "icon": "0002" }, { "name": "中央空调", "value": "zykt", "icon": "0003" }, { "name": "洗衣机", "value": "wxjy", "icon": "0004" }, { "name": "冰箱", "value": "bx", "icon": "0005" }, { "name": "电吹风", "value": "dcf", "icon": "0007" }, { "name": "电热水壶", "value": "rsh", "icon": "0008" }, { "name": "拖鞋", "value": "tx", "icon": "0010" }, { "name": "晾衣架", "value": "lyj", "icon": "0012" }, { "name": "打扫工具", "value": "dsgj", "icon": "0014" }, { "name": "落地窗", "value": "ldc", "icon": "0015" }, { "name": "新风系统", "value": "xfxt", "icon": "0019" }, { "name": "地毯", "value": "ditan", "icon": "0020" }, { "name": "高档沙发", "value": "zpsmsf", "icon": "0021" }, { "name": "有窗户", "value": "ych", "icon": "0023" }] }, { "groupName": "卫浴设施", "bases": [{ "name": "全天热水", "value": "rs", "icon": "0102" }, { "name": "洗浴用品", "value": "shyp", "icon": "0104" }, { "name": "牙具", "value": "yj", "icon": "0105" }, { "name": "毛巾", "value": "mj", "icon": "0106" }, { "name": "卫生纸", "value": "wsz", "icon": "0107" }, { "name": "浴巾", "value": "yuj", "icon": "0108" }, { "name": "香皂", "value": "szxsy", "icon": "0109" }] }, { "groupName": "厨房设施", "bases": [{ "name": "燃气灶", "value": "rqs", "icon": "0300" }, { "name": "电磁炉", "value": "dcl", "icon": "0301" }, { "name": "电饭煲", "value": "dfb", "icon": "0302" }, { "name": "烹饪锅具", "value": "hsgj", "icon": "0303" }, { "name": "刀具菜板", "value": "djcb", "icon": "0304" }, { "name": "整体橱柜", "value": "ztyc", "icon": "0305" }, { "name": "微波炉", "value": "wbl", "icon": "0306" }, { "name": "餐具", "value": "canj", "icon": "0307" }, { "name": "调料", "value": "tiaoliao", "icon": "0308" }, { "name": "洗涤用具", "value": "xdyj", "icon": "0309" }, { "name": "烧烤器具", "value": "scqj", "icon": "0310" }] }, { "groupName": "娱乐设施", "bases": [{ "name": "麻将机", "value": "mjj", "icon": "0200" }, { "name": "卡拉OK", "value": "klyy", "icon": "0201" }, { "name": "投影设备", "value": "tysb", "icon": "0202" }, { "name": "音箱", "value": "yxlyyx", "icon": "0205" }] }, { "groupName": "安全设施", "bases": [{ "name": "保安", "value": "ba", "icon": "0400" }, { "name": "门禁系统", "value": "mjxt", "icon": "0401" }, { "name": "智能门锁", "value": "znms", "icon": "0403" }, { "name": "火灾报警器", "value": "hzbjq", "icon": "0404" }, { "name": "保险箱", "value": "bxx", "icon": "0405" }] }, { "groupName": "周边(500米)", "bases": [{ "name": "停车位", "value": "park", "icon": "0500" }, { "name": "超市", "value": "chaoshi", "icon": "0501" }, { "name": "菜市场", "value": "csc", "icon": "0502" }, { "name": "饭店", "value": "canting", "icon": "0503" }, { "name": "药店", "value": "yd", "icon": "0504" }, { "name": "提款机", "value": "tkj", "icon": "0506" }, { "name": "公共花园", "value": "gghy", "icon": "0508" }] }, { "groupName": "特色及其他", "bases": [{ "name": "观景露台", "value": "gjlt", "icon": "0600" }, { "name": "私家花园", "value": "sjhy", "icon": "0603" }, { "name": "行李寄存", "value": "xljc", "icon": "0609" }] }], "specialRule": [{ "name": "接待儿童", "value": "允许" }, { "name": "接待老人", "value": "允许" }, { "name": "抽烟", "value": "不允许" }, { "name": "带宠物", "value": "不允许" }, { "name": "做饭", "value": "不允许" }, { "name": "聚会", "value": "不允许" }, { "name": "商业拍摄", "value": "不允许" }, { "name": "额外加床", "value": "不允许" }, { "name": "额外加人", "value": "允许" }, { "name": "接待外宾", "value": "允许" }], "extraService": [{ "name": "加人", "desc": "可商议" }, { "name": "打扫卫生", "desc": "1客1扫" }, { "name": "被单更换", "desc": "1客1换" }, { "name": "牙具更换", "desc": "1客1换" }, { "name": "毛巾/浴巾更换", "desc": "1客1换" }, { "name": "其他要求", "desc": "都是免费的;" }] }, "ownerid": "$$1998500", "owneruid": "124371", "hasIM": false, "img": [{ "title": "卧室", "url": "https://dimg04.c-ctrip.com/images/2B0k13000000thrll79F8_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0k13000000thrll79F8_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0k13000000thrll79F8.jpg_.webp" }, { "title": "卧室", "url": "https://dimg04.c-ctrip.com/images/2B0213000000tkny0F733_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0213000000tkny0F733_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0213000000tkny0F733.jpg_.webp" }, { "title": "卧室", "url": "https://dimg04.c-ctrip.com/images/2B0713000000tu9od8DC9_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0713000000tu9od8DC9_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0713000000tu9od8DC9.jpg_.webp" }, { "title": "卧室", "url": "https://dimg04.c-ctrip.com/images/2B0q13000000tevgmBE57_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0q13000000tevgmBE57_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0q13000000tevgmBE57.jpg_.webp" }, { "title": "卧室", "url": "https://dimg04.c-ctrip.com/images/2B0513000000tg3ap256D_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0513000000tg3ap256D_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0513000000tg3ap256D.jpg_.webp" }, { "title": "卧室", "url": "https://dimg04.c-ctrip.com/images/2B0k13000000thrlb98BE_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0k13000000thrlb98BE_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0k13000000thrlb98BE.jpg_.webp" }, { "title": "厨房", "url": "https://dimg04.c-ctrip.com/images/2B0313000000tfba99BE9_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0313000000tfba99BE9_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0313000000tfba99BE9.jpg_.webp" }, { "title": "厨房", "url": "https://dimg04.c-ctrip.com/images/2B0n13000000tcn8oCB7D_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0n13000000tcn8oCB7D_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0n13000000tcn8oCB7D.jpg_.webp" }, { "title": "卫生间", "url": "https://dimg04.c-ctrip.com/images/2B0413000000tckfnC643_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0413000000tckfnC643_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0413000000tckfnC643.jpg_.webp" }, { "title": "外景", "url": "https://dimg04.c-ctrip.com/images/2B0s190000015re7tB938_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0s190000015re7tB938_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0s190000015re7tB938.jpg_.webp" }, { "title": "外景", "url": "https://dimg04.c-ctrip.com/images/2B0b190000015mwlb790A_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0b190000015mwlb790A_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0b190000015mwlb790A.jpg_.webp" }, { "title": "外景", "url": "https://dimg04.c-ctrip.com/images/2B0b190000015mwlc68EB_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0b190000015mwlc68EB_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0b190000015mwlc68EB.jpg_.webp" }, { "title": "外景", "url": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0dA05E_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0dA05E_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0dA05E.jpg_.webp" }, { "title": "外景", "url": "https://dimg04.c-ctrip.com/images/2B0d190000015j1bx2EF2_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0d190000015j1bx2EF2_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0d190000015j1bx2EF2.jpg_.webp" }, { "title": "外景", "url": "https://dimg04.c-ctrip.com/images/2B0v190000015vkbk2AE0_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0v190000015vkbk2AE0_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0v190000015vkbk2AE0.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0j190000015k14w740E_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0j190000015k14w740E_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0j190000015k14w740E.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0r190000015ixst03F9_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0r190000015ixst03F9_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0r190000015ixst03F9.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B07190000016176w198B_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B07190000016176w198B_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B07190000016176w198B.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0g90BF_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0g90BF_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0g90BF.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B08190000015kpm9F1D8_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B08190000015kpm9F1D8_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B08190000015kpm9F1D8.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0eB07D_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0eB07D_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0q190000015lt0eB07D.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0t190000015kkc45F8E_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0t190000015kkc45F8E_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0t190000015kkc45F8E.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B05190000015n0sv3859_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B05190000015n0sv3859_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B05190000015n0sv3859.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0a190000015lu6a34C9_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0a190000015lu6a34C9_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0a190000015lu6a34C9.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B01190000015xfvp02B4_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B01190000015xfvp02B4_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B01190000015xfvp02B4.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0i190000015jc3h989B_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0i190000015jc3h989B_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0i190000015jc3h989B.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0n190000015jks72C6D_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0n190000015jks72C6D_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0n190000015jks72C6D.jpg_.webp" }, { "title": "其他", "url": "https://dimg04.c-ctrip.com/images/2B0l190000015kokl9E9F_R_750_560_Q80.jpg_.webp", "scaledURL": "https://dimg04.c-ctrip.com/images/2B0l190000015kokl9E9F_Z_750_560_Q80.jpg_.webp", "orignalURL": "https://dimg04.c-ctrip.com/images/2B0l190000015kokl9E9F.jpg_.webp" }], "refundPolicy": { "refundDays": 1, "refundInfo": "房东规定，入住前1天之后取消订单会产生费用", "tradingRules": "取消规则请参考退订政策" }, "desc": "这里是一家日式料理餐厅为主的休闲度假别墅，一楼是为客人提供餐食和休闲的，我是一位高级日料师希望能给你带来舒适的入住体验的同时也能让您体验到定制的美味佳肴，我们可以为客人提供美食的预定体验，可以在这里举办聚会，生日宴，场地等团建项目，我们也有做寿司的体验项目，就是跟大家一起做寿司，跟大家讲述怎样制作美味的寿司，欢迎大家来体验哦！", "traffic": "房源门口有三林一路公交车，2站地到11号线三林站，3站地到6号线上南路小<br />11号线三林站2号口_7站地到迪士尼，行程25分钟<br />11号线7站地到江苏路站转2号线/1站地到静安寺/2站地到南京西路/3站地到南京东路，可以去外滩，豫园，城隍庙/4站地到东方明珠行程半个小时<br /><br />11号线 6站地到徐家汇转9号线3站地到打浦桥站是上海热闹的好玩的  田子坊/三林一路2站地到上南路永泰路站转986公交车6站地也能到田子坊，行程半个小时", "surroundings": "", "available": true, "pfrom": "途家", "vendorId": 115, "invoiceOwner": 0, "useRule": "都是免费的;抽烟:不允许<br/>带宠物:不允许<br/>做饭:不允许<br/>聚会:不允许<br/>商业拍摄:不允许<br/>额外加床:不允许<br/>额外加人:允许<br/>", "discount": "", "allowForeigners": "可接待", "checkInTime": "14:00", "checkOutTime": "12:00", "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10020"], "icon": "tag" }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }], "extraService": [{ "name": "加人", "desc": "可商议" }], "receptionStart": "00:00-24:00,00:00-24:00", "userRankDesc": "3", "returnPolicy": { "entrys": [{ "type": 1, "date": "2019.11.17", "hour": "12:00后", "timedesc": "入住前1天", "contentdesc": "不可取消", "content": "收取100%房费" }], "cancelText": "该订单确认后不可取消。将收取100%房费作为违约金支付给房东。" }, "favorites": 14, "confirmType": 1, "saleStrategys": [{ "bnbActivityId": 0, "saleStrategyType": 1, "icon": "ico-list-03", "name": "连住优惠", "discount": "连住2天9折，连住3天8.5折，连住4天8.2折" }, { "bnbActivityId": 1, "saleStrategyType": 8, "icon": "ico-list-04", "name": "今日甩卖", "discount": "今天18:00~24:00预订，可享今晚9.0折", "saleCountDown": 0 }], "tagList": ["免押金", "闪订", "智能门锁"], "cxfFree": true, "businessLicense": [{ "url": "https://pic.c-ctrip.com/h5/bnb/img/i01-2004.jpg", "name": "营业执照1" }, { "url": "https://pic.c-ctrip.com/h5/bnb/img/i01-2000.jpg", "name": "营业执照2" }] },
    state:0,
    collect:'display:none',
    img_index:1,
    bed_show:'display:none',
    fixedTop:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_room_info()
    console.log(this.data.get_room_info_list)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  onPageScroll: function (e) {
    console.log(e.scrollTop)
  },

  get_room_info(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/LegendProductDetail?_fxpcqlniredt=09031107111018024259&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "pid": 874527468, "cktime": "2019-11-19", "ottime": "2019-11-20", "head": { "cid": "09031107111018024259", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method:'post',
      success(res){
        console.log(res.data.product)
        that.setData({
          get_room_info_list: res.data.product
        })
      }
    })
  },
  /**
   * 收藏点击事件
   */
  collect(e){
    var that = this
    if (e.currentTarget.dataset.state == 0 ){
      that.setData({
        state : 1,
        collect:''
      })
      setTimeout(function () {
        that.setData({
          collect: 'display:none'
        })
      }, 3000)
    }else{
      that.setData({
        state : 0,
        collect: 'display:none'
      })
    }
  },
  /**
   * 监听用户滑动页面事件
   */
  onPageScroll(e) {
    let isfixed = 0
    if (parseInt(e.scrollTop) + parseInt(this.data.screenHeight) > this.data.fixedTop) isfixed = 1
    else isfixed = 0;
    this.setData({ isfixed });
  },
  /**
   * 轮播图滑动监听事件
   */
  img_index(e){
    this.setData({
      img_index: e.detail.current+1
    })
  },
  bed_show(){
    if(this.data.bed_show == 'display:none'){
      this.setData({
        bed_show:''
      })
    }else{
      this.setData({
        bed_show: 'display:none'
      })
    }
  },
  onPageScroll: function (e) {
    var _this = this;
    _this.setData({
      fixedTop: e.scrollTop
    })
  },
})