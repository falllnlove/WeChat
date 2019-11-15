//myapp.js
const app = getApp()

var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    size_china:'25',
    Underline_china:'show',
    size_overseas:'22',
    Underline_overseas:'',
    bold_c:'bold',
    bold_o:'none',
    city:'',
    city_id:null,
    province: '',
    latitude: '',
    longitude: '',
    bangdans: [{ "mainTitle": "疯玩迪士尼", "subTitle": "去迪士尼还能这么睡", "firstImage": "https://pic.tujia.com/upload/leaderboard/day_190326/201903261420002464.jpg", "products": [{ "productId": 0, "describe": "" }, { "productId": 0, "describe": "" }], "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190418135116", "describe": "无论你是大人还是小孩，都可以在这里回归纯真，找寻到美好难忘的快乐时光。" }, { "mainTitle": "璀璨江景房", "subTitle": "打开窗，一览外滩夜景", "firstImage": "https://pic.tujia.com/upload/leaderboard/day_190326/201903261419272785.jpg", "products": [{ "productId": 0, "describe": "" }, { "productId": 0, "describe": "" }], "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190418135207", "describe": "感受上海的最佳方式便是宿于浦江之畔，因为它是最贴近城市脉搏的所在，也有着令人屏息的美景。" }, { "mainTitle": "网红老街", "subTitle": "年轻男女最爱打卡的马路", "firstImage": "https://pic.tujia.com/upload/leaderboard/day_190326/201903261418322381.jpg", "products": [{ "productId": 0, "describe": "" }, { "productId": 0, "describe": "" }], "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190417204442", "describe": "那是宋庆龄走过梧桐落满的街，那是陆小曼婉婉道来的思念，那是蝴蝶倚窗吟着的曲，那是上海万种风情的老街。" }, { "mainTitle": "缱绻老洋房", "subTitle": "住进上海的前世今生", "firstImage": "https://pic.tujia.com/upload/leaderboard/day_190322/201903221659572739.jpg", "products": [{ "productId": 0, "describe": "" }, { "productId": 0, "describe": "" }], "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190417205340", "describe": "最羡慕民国的优雅与风情，老洋房里缱绻的发音的留声机，那复古的老楼梯，久久难忘，缓缓生情。" }, { "mainTitle": "嗲！上海", "subTitle": "住进最嗲的魔都", "firstImage": "https://pic.tujia.com/upload/leaderboard/day_190326/201903261419433351.jpg", "products": [{ "productId": 0, "describe": "" }, { "productId": 0, "describe": "" }], "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190418135143", "describe": "上海老房子承载着上海滩的历史与风情。设计师用发现美的眼睛，改造它，给予他重生和灵魂，使得她千姿百媚。" }, { "mainTitle": "惬意阳光房", "subTitle": "让阳光一起住进来", "firstImage": "https://pic.tujia.com/upload/leaderboard/day_190326/201903261418363109.jpg", "products": [{ "productId": 0, "describe": "" }, { "productId": 0, "describe": "" }], "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190417183725", "describe": "陌生的城市呀，熟悉的角落里，一缕金色阳光，悄悄洒在你睡眼惺忪的睫毛上。" }],
    business_list: null,
    business_address_list:null,
    room_list: null,
    setInter: '',
    active_tap_0:'active',
    isSelect:0,
    home_stay: [{ "mainTitle": "Locals路客", "subTitle": "路客精品民宿，个性化的住宿领导品牌。房源多以特色别墅和⾼档住宅为主，更干净、更安全、更精品，个性化的设计，家一般的感觉，“一对一”的专属管家服务，提供“与当地⼈交朋友，像当地人一样⽣活”的独特旅⾏体验。", "tags": ["特色别墅", "高档住宅"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261906279020.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261905484714.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222011346750.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201028", "productIds": [505317599, 505319672, 505320685, 505321186, 505321694, 505323225, 505323713, 505340615, 505342709, 505344710, 505345274, 505346298, 505347320, 505348308, 505349349, 505350393, 505350853, 505351375, 505351927, 505352956, 505353431, 505359597, 505361636, 505363169, 505365185, 505365725, 505367273, 505368310, 505369852, 505370324, 505371381, 505372912, 505375442, 536622796, 542753006, 542753528, 551791846, 553851599, 561362681, 626000117, 626001117, 646371549, 647928569, 662197444, 757137652, 776262903, 802647245, 825634000, 825635569, 825638600] }, { "mainTitle": "有家民宿", "subTitle": "有家民宿是中国首个“舒适型”民宿连锁品牌，采用简约清新装修风格，房间设施齐全，适合家庭出游，或亲友聚会。星级床品，给你温馨舒适的五星睡眠。", "tags": ["星级床品", "温馨舒适", "简约清新"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261934489342.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261933448293.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222012099288.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201209", "productIds": [536600770, 536603375, 536603877, 536604378, 536604868, 536605894, 536607458, 536608469, 536608969, 536609021, 536610503, 536612567, 536613575, 536619207, 547930849, 549363449, 549365480, 549371616, 552833246, 553851121, 560411878, 592665329, 601430253, 614350056, 626015962, 659240656, 672922834, 679712972, 684595949, 685564669, 702619860, 702639816, 702656194, 712239353, 712239841, 713671892, 715839690, 715840716, 715847389, 715855569, 764981985, 768042224, 768042698, 768043760, 770524869, 773944060, 773945055, 773965018, 779632342, 779633893] }, { "mainTitle": "斑斓家", "subTitle": "斑斓家，致力于打造全国各大城市最中心的短租公寓/民宿，是一家追求高品质城市民宿的连锁品牌，房源设计多以地中海田园风格/简欧风格，多个房型供客人选择。色彩斑斑斓，无处不在，不久的将来，斑斓家就在您身边。", "tags": ["高品质民宿", "地中海田园风", "简欧风"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261923266706.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261923054392.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222011471627.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201126", "productIds": [9010883, 9012319, 9013224, 9202219, 9559178, 9559310, 9559450, 9559470, 9559476, 9559584, 9559605, 9559669, 9559736, 9559752, 9559755, 9627019, 9627098, 9627106, 9627126, 9627151, 9627158, 9627167, 9627178, 9627184, 9627189, 9627208, 9627221, 9636614, 9779419, 9779536, 9811526, 9825284, 9825346, 55270107, 65390115, 65686291, 73385683, 78300915, 78990691, 78994331, 78994963, 81638675, 81647339, 84750699, 84751611, 87740795, 100045379, 100972171] }, { "mainTitle": "谜途 ", "subTitle": "迷途民宿是一个设计师，一个美食家，一个互联网创业者建立的民宿品牌。只为更in的设计，更全的旅游攻略，更潮的线上活动与深度体验，80后执行力与90后创造力会擦出怎样的火花，来谜途体验vip般的服务。", "tags": ["设计民宿", "温馨舒适", "贴心服务"], "image": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271606448066.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271606283644.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222012586151.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201257", "productIds": [524222156, 528218306, 649576656, 802648770, 802698972, 805108954, 806757103, 835919073, 861903609, 870876406, 870877893, 874520270, 878602472, 880643290, 885326055, 889031360, 889950401, 889950968, 927201513] }, { "mainTitle": "上海徒者公寓", "subTitle": "上海徒者公寓地处上海核心，地铁直达人民广场，南京西路等景点。客厅搭配舒适沙发，坚果投影仪100寸电动幕布，配有爱奇艺视频vip，让您舒适看大片，电冰箱，化妆台和工作桌等均齐全。", "tags": ["城市中心", "交通便利", "温馨舒适"], "image": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271615286159.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271614592725.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222013558908.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201355", "productIds": [9009378, 9011161, 150568875, 514516721, 524215533] }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: '4MABZ-FIS6F-6FGJK-NH4FN-BYJK7-NQFAX'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.bangdan()
    this.business()
    // this.Brand_home_stay_hall()
    console.log([{ "mainTitle": "Locals路客", "subTitle": "路客精品民宿，个性化的住宿领导品牌。房源多以特色别墅和⾼档住宅为主，更干净、更安全、更精品，个性化的设计，家一般的感觉，“一对一”的专属管家服务，提供“与当地⼈交朋友，像当地人一样⽣活”的独特旅⾏体验。", "tags": ["特色别墅", "高档住宅"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261906279020.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261905484714.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222011346750.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201028", "productIds": [505317599, 505319672, 505320685, 505321186, 505321694, 505323225, 505323713, 505340615, 505342709, 505344710, 505345274, 505346298, 505347320, 505348308, 505349349, 505350393, 505350853, 505351375, 505351927, 505352956, 505353431, 505359597, 505361636, 505363169, 505365185, 505365725, 505367273, 505368310, 505369852, 505370324, 505371381, 505372912, 505375442, 536622796, 542753006, 542753528, 551791846, 553851599, 561362681, 626000117, 626001117, 646371549, 647928569, 662197444, 757137652, 776262903, 802647245, 825634000, 825635569, 825638600] }, { "mainTitle": "有家民宿", "subTitle": "有家民宿是中国首个“舒适型”民宿连锁品牌，采用简约清新装修风格，房间设施齐全，适合家庭出游，或亲友聚会。星级床品，给你温馨舒适的五星睡眠。", "tags": ["星级床品", "温馨舒适", "简约清新"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261934489342.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261933448293.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222012099288.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201209", "productIds": [536600770, 536603375, 536603877, 536604378, 536604868, 536605894, 536607458, 536608469, 536608969, 536609021, 536610503, 536612567, 536613575, 536619207, 547930849, 549363449, 549365480, 549371616, 552833246, 553851121, 560411878, 592665329, 601430253, 614350056, 626015962, 659240656, 672922834, 679712972, 684595949, 685564669, 702619860, 702639816, 702656194, 712239353, 712239841, 713671892, 715839690, 715840716, 715847389, 715855569, 764981985, 768042224, 768042698, 768043760, 770524869, 773944060, 773945055, 773965018, 779632342, 779633893] }, { "mainTitle": "斑斓家", "subTitle": "斑斓家，致力于打造全国各大城市最中心的短租公寓/民宿，是一家追求高品质城市民宿的连锁品牌，房源设计多以地中海田园风格/简欧风格，多个房型供客人选择。色彩斑斑斓，无处不在，不久的将来，斑斓家就在您身边。", "tags": ["高品质民宿", "地中海田园风", "简欧风"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261923266706.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261923054392.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222011471627.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201126", "productIds": [9010883, 9012319, 9013224, 9202219, 9559178, 9559310, 9559450, 9559470, 9559476, 9559584, 9559605, 9559669, 9559736, 9559752, 9559755, 9627019, 9627098, 9627106, 9627126, 9627151, 9627158, 9627167, 9627178, 9627184, 9627189, 9627208, 9627221, 9636614, 9779419, 9779536, 9811526, 9825284, 9825346, 55270107, 65390115, 65686291, 73385683, 78300915, 78990691, 78994331, 78994963, 81638675, 81647339, 84750699, 84751611, 87740795, 100045379, 100972171] }, { "mainTitle": "谜途 ", "subTitle": "迷途民宿是一个设计师，一个美食家，一个互联网创业者建立的民宿品牌。只为更in的设计，更全的旅游攻略，更潮的线上活动与深度体验，80后执行力与90后创造力会擦出怎样的火花，来谜途体验vip般的服务。", "tags": ["设计民宿", "温馨舒适", "贴心服务"], "image": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271606448066.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271606283644.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222012586151.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201257", "productIds": [524222156, 528218306, 649576656, 802648770, 802698972, 805108954, 806757103, 835919073, 861903609, 870876406, 870877893, 874520270, 878602472, 880643290, 885326055, 889031360, 889950401, 889950968, 927201513] }, { "mainTitle": "上海徒者公寓", "subTitle": "上海徒者公寓地处上海核心，地铁直达人民广场，南京西路等景点。客厅搭配舒适沙发，坚果投影仪100寸电动幕布，配有爱奇艺视频vip，让您舒适看大片，电冰箱，化妆台和工作桌等均齐全。", "tags": ["城市中心", "交通便利", "温馨舒适"], "image": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271615286159.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271614592725.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222013558908.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201355", "productIds": [9009378, 9011161, 150568875, 514516721, 524215533] }])
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let vm = this;
    vm.getUserLocation();
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
  /**
   * 获取榜单数据
   */
  bangdan(){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + s2 + "", "checkOut": "" + s2 + "", "cityId": 2, "type": 6, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          bangdans: res.data.bangdans
        })
      }
    })
  },
  /**
   * 获取商圈
   */
  business(){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + s2 + "", "checkOut": "" + s2 + "", "cityId": 25, "type": 2, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "25" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          business_list: res.data.zones,
          room_list: res.data.zones[0].product
        })
      }
    })
  },
  /**
   * 获取商圈下的房间
   */
  room(value){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate()+1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/GetHomePageProduct?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "cityId": 25, "type": 2, "conds": [{ "cond": "zoneId", "value": ""+ value +"" }, { "cond": "date", "value": "2019-11-14,2019-11-15" }], "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        console.log(res)
        that.setData({
          room_list:res.data.product
        })
      }
    })
  },
  /**
   * 品牌民宿馆
   */
  Brand_home_stay_hall(){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": ""+ start +"", "checkOut": ""+ end +"", "cityId": 2, "type": 7, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        console.log(JSON.stringify(res.data.brandPavilions))
        that.setData({
          home_stay: res.data.brandPavilions
        })
      }
    })
  },
  /**
   * 获取用户经纬度
   */
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API

                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          // vm.getLocation();
        }
        else {
          // vm.getLocation();
        }
      }
    })
  },
  /**
   * 微信获得经纬度
   */
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'gcj02',
      altitude:true,
      isHighAccuracy:true,
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },
  /**
   * 获取当前地理位置
   */
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        let province = res.result.ad_info.province
        let city = res.result.formatted_addresses.recommend
        console.log(res)
        vm.setData({
          province: province,
          city: city +'附近',
          latitude: latitude,
          longitude: longitude
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  },
  /**
   * 国内海外下划线切换
   */
  Underline_china(){
    this.setData({
      size_china: '25',
      Underline_china: 'show',
      size_overseas: '22',
      Underline_overseas: '',
      bold_c:'bold',
      bold_o: 'none',
    })
  },
  Underline_overseas(){
    this.setData({
      size_china:'22',
      Underline_china:'',
      size_overseas:'25',
      Underline_overseas: 'show',
      bold_c:'none',
      bold_o:'bold',
    })
  },
  /**
   * 商圈选择
   */
  business_tap(e){
    this.room(e.currentTarget.dataset.zoneid)
    this.setData({
      isSelect: e.currentTarget.dataset.id,
    })
  },
})