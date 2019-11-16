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
    business_list: [{ "zoneName": "厦门北站地区", "zoneId": 12644, "hot": "16.8%选择", "product": [{ "pid": 818027722, "pname": "厦门北站【归去来】简约家庭房北站接送", "pEnName": "", "rname": "1室", "price": { "price": 260, "totalPrice": 0, "originalPrice": 288, "percentDiscount": 10, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 1, "discountName": "特惠", "discountPrice": 28, "discountTotalPrice": 28, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 4, "comment": 211, "commentScore": 5, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0o10000000peu8mC2A3_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0o10000000peu8mC2A3_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0g0z000000nhzh2E6D7_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0b0z000000njokj9869_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m0z000000nqoff87A8_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0e10000000piqy41AD6_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0s10000000pmvk2EAA2_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0o10000000peu8nB2C0_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0g0z000000nhzhh6B58_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0p0z000000ngfcm261D_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B080z000000nhhl2213D_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.640522, "lng": 118.093903, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 62, "tagName": "途家优选", "tagCode": ["10010", "10020"] }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17186, "distanceB": 17.186, "distancePToZone": 1375.9582, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "8971908", "theHouseType": "民居", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "bangdanTag": "1", "startTime": "11:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 222, "beds": 2, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 772762359, "pname": "厦门北站【归去来】简欧风民宿北站接送", "pEnName": "", "rname": "1室", "price": { "price": 127, "totalPrice": 0, "originalPrice": 158, "percentDiscount": 20, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 1, "discountName": "特惠", "discountPrice": 31, "discountTotalPrice": 31, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 656, "commentScore": 4.9, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0p0y000000mdnft63E5_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0p0y000000mdnft63E5_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0n0y000000mdkue5E55_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0j0y000000me16p62AE_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B050y000000mh0wi08B9_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0r0y000000mcxv2E482_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B080z000000mk0n42211_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0p0y000000mdnfsB3C8_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0l0y000000meomb4CA1_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0q0z000000ml4138B28_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0t0z000000mjvdjB228_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.640522, "lng": 118.093903, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17186, "distanceB": 17.186, "distancePToZone": 1375.9582, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "8426923", "theHouseType": "客栈", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "bangdanTag": "3", "startTime": "11:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 2789, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 635644625, "pname": "考试专用房", "pEnName": "", "rname": "1室", "price": { "price": 88, "totalPrice": 0, "originalPrice": 88, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 5, "commentScore": 4.8, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0o0w000000kbiv2C714_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0o0w000000kbiv2C714_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0j0v000000k0nn09620_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0d0w000000kb7al99BC_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0k0v000000k5bn44302_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0e0v000000k3w4m92E1_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.635247239957604, "lng": 118.0960392572062, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }], "distance": 16598, "distanceB": 16.598, "distancePToZone": 1771.4037, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "5655365", "theHouseType": "客栈", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "21:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 12, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 925298930, "pname": "免费接送厦门北站 浪漫大床房", "pEnName": "", "rname": "1室", "price": { "price": 138, "totalPrice": 0, "originalPrice": 138, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 66, "commentScore": 4.9, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0713000000uv6b8D57E_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0713000000uv6b8D57E_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0i13000000udb6t25D2_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0q13000000ufs3o5C9A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0113000000urezy6414_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m12000000st78c0607_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0312000000sljmcF3EE_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0l12000000sjzby3953_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0612000000skfrd07FE_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0t13000000uejg7F6A9_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0n13000000udjvmB82E_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.639377501541336, "lng": 118.07282704283604, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 62, "tagName": "途家优选", "tagCode": ["10010", "10020"] }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17216, "distanceB": 17.21601, "distancePToZone": 852.4272, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "10702728", "theHouseType": "民居", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "22:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 66, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 929407703, "pname": "免费接送厦门北站 结庐双床房", "pEnName": "", "rname": "1室", "price": { "price": 138, "totalPrice": 0, "originalPrice": 138, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 58, "commentScore": 4.9, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0n12000000sretz1D0D_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0n12000000sretz1D0D_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0912000000sur6iFF7A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0412000000src100235_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0112000000t59y30D0A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0112000000t59y41CE9_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m12000000t1qikC244_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0w12000000sydvtB593_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m12000000st78c0607_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0v12000000t3edp8461_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0t12000000sseei226A_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.639377501541336, "lng": 118.07282704283604, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 62, "tagName": "途家优选", "tagCode": ["10010", "10020"] }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17216, "distanceB": 17.21601, "distancePToZone": 852.4272, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "10742726", "theHouseType": "民居", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "21:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 117, "beds": 2, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 132404667, "pname": "厦门北站翠园民宿榻榻米大床房", "pEnName": "", "rname": "1室", "price": { "price": 98, "totalPrice": 0, "originalPrice": 98, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 59, "commentScore": 4.8, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0p0m000000dgv67125A_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0p0m000000dgv67125A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0n0m000000dhf5n9F89_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B070m000000dyjqzAF82_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0w0m000000dnfmu9992_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B010m000000dv672A1D2_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B020m000000dped337F1_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0j0m000000dhv1z103F_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0214000000x0ulb89B8_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0a14000000wv3aaCE0C_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0814000000wtyqtD790_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.642259570470205, "lng": 118.07274619534016, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17535, "distanceB": 17.53501, "distancePToZone": 784.2491, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "412461", "theHouseType": "客栈", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "20:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 397, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }] }, { "zoneName": "曾厝垵", "zoneId": 4121, "hot": "11.0%选择" }, { "zoneName": "SM城市广场地区", "zoneId": 177, "hot": "7.5%选择" }, { "zoneName": "中山路", "zoneId": 174, "hot": "7.2%选择" }, { "zoneName": "鼓浪屿", "zoneId": 173, "hot": "6.8%选择" }],
    room_list: [{ "pid": 818027722, "pname": "厦门北站【归去来】简约家庭房北站接送", "pEnName": "", "rname": "1室", "price": { "price": 260, "totalPrice": 0, "originalPrice": 288, "percentDiscount": 10, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 1, "discountName": "特惠", "discountPrice": 28, "discountTotalPrice": 28, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 4, "comment": 211, "commentScore": 5, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0o10000000peu8mC2A3_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0o10000000peu8mC2A3_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0g0z000000nhzh2E6D7_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0b0z000000njokj9869_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m0z000000nqoff87A8_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0e10000000piqy41AD6_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0s10000000pmvk2EAA2_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0o10000000peu8nB2C0_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0g0z000000nhzhh6B58_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0p0z000000ngfcm261D_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B080z000000nhhl2213D_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.640522, "lng": 118.093903, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 62, "tagName": "途家优选", "tagCode": ["10010", "10020"] }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17186, "distanceB": 17.186, "distancePToZone": 1375.9582, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "8971908", "theHouseType": "民居", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "bangdanTag": "1", "startTime": "11:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 222, "beds": 2, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 772762359, "pname": "厦门北站【归去来】简欧风民宿北站接送", "pEnName": "", "rname": "1室", "price": { "price": 127, "totalPrice": 0, "originalPrice": 158, "percentDiscount": 20, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 1, "discountName": "特惠", "discountPrice": 31, "discountTotalPrice": 31, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 656, "commentScore": 4.9, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0p0y000000mdnft63E5_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0p0y000000mdnft63E5_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0n0y000000mdkue5E55_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0j0y000000me16p62AE_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B050y000000mh0wi08B9_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0r0y000000mcxv2E482_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B080z000000mk0n42211_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0p0y000000mdnfsB3C8_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0l0y000000meomb4CA1_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0q0z000000ml4138B28_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0t0z000000mjvdjB228_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.640522, "lng": 118.093903, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17186, "distanceB": 17.186, "distancePToZone": 1375.9582, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "8426923", "theHouseType": "客栈", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "bangdanTag": "3", "startTime": "11:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 2789, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 635644625, "pname": "考试专用房", "pEnName": "", "rname": "1室", "price": { "price": 88, "totalPrice": 0, "originalPrice": 88, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 5, "commentScore": 4.8, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0o0w000000kbiv2C714_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0o0w000000kbiv2C714_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0j0v000000k0nn09620_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0d0w000000kb7al99BC_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0k0v000000k5bn44302_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0e0v000000k3w4m92E1_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.635247239957604, "lng": 118.0960392572062, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }], "distance": 16598, "distanceB": 16.598, "distancePToZone": 1771.4037, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "5655365", "theHouseType": "客栈", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "21:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 12, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 925298930, "pname": "免费接送厦门北站 浪漫大床房", "pEnName": "", "rname": "1室", "price": { "price": 138, "totalPrice": 0, "originalPrice": 138, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 66, "commentScore": 4.9, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0713000000uv6b8D57E_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0713000000uv6b8D57E_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0i13000000udb6t25D2_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0q13000000ufs3o5C9A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0113000000urezy6414_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m12000000st78c0607_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0312000000sljmcF3EE_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0l12000000sjzby3953_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0612000000skfrd07FE_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0t13000000uejg7F6A9_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0n13000000udjvmB82E_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.639377501541336, "lng": 118.07282704283604, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 62, "tagName": "途家优选", "tagCode": ["10010", "10020"] }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17216, "distanceB": 17.21601, "distancePToZone": 852.4272, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "10702728", "theHouseType": "民居", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "22:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 66, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 929407703, "pname": "免费接送厦门北站 结庐双床房", "pEnName": "", "rname": "1室", "price": { "price": 138, "totalPrice": 0, "originalPrice": 138, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 58, "commentScore": 4.9, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0n12000000sretz1D0D_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0n12000000sretz1D0D_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0912000000sur6iFF7A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0412000000src100235_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0112000000t59y30D0A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0112000000t59y41CE9_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m12000000t1qikC244_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0w12000000sydvtB593_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0m12000000st78c0607_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0v12000000t3edp8461_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0t12000000sseei226A_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.639377501541336, "lng": 118.07282704283604, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 62, "tagName": "途家优选", "tagCode": ["10010", "10020"] }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17216, "distanceB": 17.21601, "distancePToZone": 852.4272, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "10742726", "theHouseType": "民居", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "21:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 117, "beds": 2, "cxfFree": true, "statusId": 2, "extraFee": [] }, { "pid": 132404667, "pname": "厦门北站翠园民宿榻榻米大床房", "pEnName": "", "rname": "1室", "price": { "price": 98, "totalPrice": 0, "originalPrice": 98, "percentDiscount": 0, "totalOriginalPrice": 0, "priceDay": 1, "discountPriceList": [], "discounttotal": { "discountType": 0, "discountPrice": 0, "discountTotalPrice": 0, "couponType": 0, "discountCouponPrice": 0, "discountCouponTotalPrice": 0 } }, "people": 2, "comment": 59, "commentScore": 4.8, "commentDesc": "超棒", "proimg": "https://dimg04.c-ctrip.com/images/2B0p0m000000dgv67125A_R_750_560_Q80.jpg_.webp", "images": ["https://dimg04.c-ctrip.com/images/2B0p0m000000dgv67125A_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0n0m000000dhf5n9F89_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B070m000000dyjqzAF82_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0w0m000000dnfmu9992_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B010m000000dv672A1D2_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B020m000000dped337F1_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0j0m000000dhv1z103F_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0214000000x0ulb89B8_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0a14000000wv3aaCE0C_R_750_560_Q80.jpg_.webp", "https://dimg04.c-ctrip.com/images/2B0814000000wtyqtD790_R_750_560_Q80.jpg_.webp"], "vendorid": "115", "tuanType": "一星级", "tuanScore": "5", "pos": { "placeId": 0, "lat": 24.642259570470205, "lng": 118.07274619534016, "range": 0, "typeId": 0, "sourceType": 0, "itemId": 0 }, "tags": [{ "tagId": 0, "tagName": "免押金", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 0, "tagName": "闪订", "tagCode": ["10010"], "icon": "tag" }, { "tagId": 60, "tagName": "智能门锁", "tagCode": ["10010", "10020"], "icon": "tag" }, { "tagId": 114, "tagName": "超赞房东", "tagCode": ["10010", "10020"] }], "distance": 17535, "distanceB": 17.53501, "distancePToZone": 784.2491, "distancePToEdge": 0, "zone": "厦门北站地区", "zoneId": 12644, "vendorPid": "412461", "theHouseType": "客栈", "cityid": 25, "cityName": "厦门", "countryCode": 1, "soldout": false, "soldoutDesc": 1, "startTime": "20:00", "startTimeDesc": "", "saleTags": [{ "tagId": -1, "tagName": "连住优惠", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-02" }, { "tagId": -8, "tagName": "今日甩卖", "tagCode": ["10000", "10010", "10020", "10030"], "icon": "tag-04" }], "favorites": 397, "beds": 1, "cxfFree": true, "statusId": 2, "extraFee": [] }],
    setInter: '',
    active_tap_0:'active',
    isSelect:0,
    home_stay: [{ "mainTitle": "Locals路客", "subTitle": "路客精品民宿，个性化的住宿领导品牌。房源多以特色别墅和⾼档住宅为主，更干净、更安全、更精品，个性化的设计，家一般的感觉，“一对一”的专属管家服务，提供“与当地⼈交朋友，像当地人一样⽣活”的独特旅⾏体验。", "tags": ["特色别墅", "高档住宅"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261906279020.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261905484714.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222011346750.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201028", "productIds": [505317599, 505319672, 505320685, 505321186, 505321694, 505323225, 505323713, 505340615, 505342709, 505344710, 505345274, 505346298, 505347320, 505348308, 505349349, 505350393, 505350853, 505351375, 505351927, 505352956, 505353431, 505359597, 505361636, 505363169, 505365185, 505365725, 505367273, 505368310, 505369852, 505370324, 505371381, 505372912, 505375442, 536622796, 542753006, 542753528, 551791846, 553851599, 561362681, 626000117, 626001117, 646371549, 647928569, 662197444, 757137652, 776262903, 802647245, 825634000, 825635569, 825638600] }, { "mainTitle": "有家民宿", "subTitle": "有家民宿是中国首个“舒适型”民宿连锁品牌，采用简约清新装修风格，房间设施齐全，适合家庭出游，或亲友聚会。星级床品，给你温馨舒适的五星睡眠。", "tags": ["星级床品", "温馨舒适", "简约清新"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261934489342.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261933448293.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222012099288.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201209", "productIds": [536600770, 536603375, 536603877, 536604378, 536604868, 536605894, 536607458, 536608469, 536608969, 536609021, 536610503, 536612567, 536613575, 536619207, 547930849, 549363449, 549365480, 549371616, 552833246, 553851121, 560411878, 592665329, 601430253, 614350056, 626015962, 659240656, 672922834, 679712972, 684595949, 685564669, 702619860, 702639816, 702656194, 712239353, 712239841, 713671892, 715839690, 715840716, 715847389, 715855569, 764981985, 768042224, 768042698, 768043760, 770524869, 773944060, 773945055, 773965018, 779632342, 779633893] }, { "mainTitle": "斑斓家", "subTitle": "斑斓家，致力于打造全国各大城市最中心的短租公寓/民宿，是一家追求高品质城市民宿的连锁品牌，房源设计多以地中海田园风格/简欧风格，多个房型供客人选择。色彩斑斑斓，无处不在，不久的将来，斑斓家就在您身边。", "tags": ["高品质民宿", "地中海田园风", "简欧风"], "image": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261923266706.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190326/201903261923054392.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222011471627.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201126", "productIds": [9010883, 9012319, 9013224, 9202219, 9559178, 9559310, 9559450, 9559470, 9559476, 9559584, 9559605, 9559669, 9559736, 9559752, 9559755, 9627019, 9627098, 9627106, 9627126, 9627151, 9627158, 9627167, 9627178, 9627184, 9627189, 9627208, 9627221, 9636614, 9779419, 9779536, 9811526, 9825284, 9825346, 55270107, 65390115, 65686291, 73385683, 78300915, 78990691, 78994331, 78994963, 81638675, 81647339, 84750699, 84751611, 87740795, 100045379, 100972171] }, { "mainTitle": "谜途 ", "subTitle": "迷途民宿是一个设计师，一个美食家，一个互联网创业者建立的民宿品牌。只为更in的设计，更全的旅游攻略，更潮的线上活动与深度体验，80后执行力与90后创造力会擦出怎样的火花，来谜途体验vip般的服务。", "tags": ["设计民宿", "温馨舒适", "贴心服务"], "image": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271606448066.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271606283644.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222012586151.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201257", "productIds": [524222156, 528218306, 649576656, 802648770, 802698972, 805108954, 806757103, 835919073, 861903609, 870876406, 870877893, 874520270, 878602472, 880643290, 885326055, 889031360, 889950401, 889950968, 927201513] }, { "mainTitle": "上海徒者公寓", "subTitle": "上海徒者公寓地处上海核心，地铁直达人民广场，南京西路等景点。客厅搭配舒适沙发，坚果投影仪100寸电动幕布，配有爱奇艺视频vip，让您舒适看大片，电冰箱，化妆台和工作桌等均齐全。", "tags": ["城市中心", "交通便利", "温馨舒适"], "image": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271615286159.jpg", "logo": "https://pic.tujia.com/upload/resourcespic/day_190327/201903271614592725.png", "bigImage": "https://pic.tujia.com/upload/feccms/day_190422/201904222013558908.jpg", "url": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190422201355", "productIds": [9009378, 9011161, 150568875, 514516721, 524215533] }],
    beauty_lodge_list: [{ "id": "3ae0997b-95b7-404e-b63c-4e80bc2e70ab", "title": "种草笔记", "subTitle": "解锁纪念碑谷民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191111/201911111854115121.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191111183548", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191111/201911111854379122.jpg", "labels": ["种草笔记"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "2258adc5-233b-4287-856e-bc1f33eb7ec3", "title": "古董民宿", "subTitle": "网红民宿种草清单-VOL5", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191106/201911061500141438.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191106113715", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191106/201911061500369644.jpg", "labels": ["古董民宿"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "14fb4fe3-e0c3-4a2c-9518-8b7b933021cc", "title": "爆款清单", "subTitle": "网红民宿种草清单-VOL4", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191028/201910281719578743.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191028160935", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191028/201910281720174327.jpg", "labels": ["爆款清单"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "8d421b97-3aa8-4f58-9254-45ec5a1c9284", "title": "去逛逛", "subTitle": "", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190806/201908062132584077.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190806210922", "subPictureUrl": "", "labels": [], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "ac5bd5c7-3e0d-4975-9ad9-b86e6738555a", "title": "怀旧复古", "subTitle": "传承一场文艺复兴", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191639054065.jpg", "videoUrl": "", "navigateUrl": "https://bnb.qunar.com/tjbnb/front/promotion/cms?id=C20190806144307&gotype=1&labelkey_2=1402", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191639093637.jpg", "labels": ["#怀旧复古#"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "aa6c645f-3c94-4193-9f43-92f0c1b40958", "title": "网红ins风", "subTitle": "时髦精最爱的网红民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191615221087.jpg", "videoUrl": "", "navigateUrl": "https://bnb.qunar.com/tjbnb/front/promotion/cms?id=C20190806144307&gotype=1&labelkey_2=1414", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191614592655.jpg", "labels": ["#网红ins风#"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }],
    Hot_destination: [{ "cityId": 2, "type": 1, "name": "上海", "img": "https://dimg04.c-ctrip.com/images/2B0311000000rhn2q6AB0.png", "praise": "约￥374/晚" }, { "cityId": 17, "type": 1, "name": "杭州", "img": "https://dimg04.c-ctrip.com/images/2B0b11000000riakd662C.png", "praise": "约￥344/晚" }, { "cityId": 36, "type": 1, "name": "大理市", "img": "https://dimg04.c-ctrip.com/images/2B0911000000rib00EF5D.png", "praise": "约￥206/晚" }, { "cityId": 1, "type": 1, "name": "北京", "img": "https://dimg04.c-ctrip.com/images/2B0i11000000repx60BC2.png", "praise": "约￥423/晚" }, { "cityId": 10, "type": 1, "name": "西安", "img": "https://dimg04.c-ctrip.com/images/2B0p11000000rf1qz6F34.png", "praise": "约￥274/晚" }, { "cityId": 12, "type": 1, "name": "南京", "img": "https://dimg04.c-ctrip.com/images/2B0v11000000rqygh3666.png", "praise": "约￥321/晚" }, { "cityId": 33, "type": 1, "name": "桂林", "img": "https://dimg04.c-ctrip.com/images/2B0c11000000rijq8511C.png", "praise": "约￥290/晚" }, { "cityId": 7, "type": 1, "name": "青岛", "img": "https://dimg04.c-ctrip.com/images/2B0o11000000rer3w2CC2.png", "praise": "约￥320/晚" }, { "cityId": 43, "type": 1, "name": "三亚", "img": "https://dimg04.c-ctrip.com/images/2B0u11000000rfvtwF8E1.png", "praise": "约￥319/晚" }, { "cityId": 37, "type": 1, "name": "丽江", "img": "https://dimg04.c-ctrip.com/images/2B0m11000000rpakvC5EB.png", "praise": "约￥195/晚" }],
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
    // this.business()
    // this.Brand_home_stay_hall()
    // this.beauty_lodge()
    // this.Hot_destination()
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
   * 网红美宿
   */
  beauty_lodge(){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/16593/getPortalConfig?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "args": "{\"parameter\":{\"cityId\":23,\"cityName\":\"上海\",\"oversea\":false,\"checkInDate\":\"2019-11-15\",\"checkOutDate\":\"2019-11-16\"},\"abTests\":{\"191023_bnbHybrid_hm10\":{\"s\":false,\"v\":\"B\"}}}", "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "allianceSid", "value": "155952" }, { "name": "allianceId", "value": "4897" }, { "name": "awakeUnion", "value": "{\"OUID\":\"index\",\"AllianceID\":\"4897\",\"SID\":\"155952\",\"SourceID\":\"\",\"AppID\":\"\",\"OpenID\":\"\"}" }, { "name": "terminaltype", "value": "20" }, { "name": "devicetype", "value": "PC" }, { "name": "devicebrand", "value": "undefined" }, { "name": "devicephone", "value": "PC" }, { "name": "browsername", "value": "Chrome" }, { "name": "browserver", "value": "78.0.3904.97" }, { "name": "os", "value": "PC" }, { "name": "osver", "value": "Windows10" }, { "name": "channelid", "value": "2" }, { "name": "page", "value": "600003543" }, { "name": "refpage", "value": "0215edc0-1dbc-42af-26b8-576e88cbc18a" }, { "name": "currentpage", "value": "2de91f74-b2a6-ba56-8b8a-d0bf0d11c3c2" }, { "name": "pagename", "value": "home" }, { "name": "vid", "value": "1573128641757.21yyes" }, { "name": "la", "value": "" }, { "name": "lo", "value": "" }, { "name": "geoType", "value": "" }, { "name": "traceid", "value": "3f31c17a-8968-0402-65e9-77afbc95f057" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        console.log("beauty_lodge_list")
        console.log(JSON.stringify(JSON.parse(res.data.result).data.popularHomestay.bannerModule.banners))
        that.setData({
          beauty_lodge_list: JSON.parse(res.data.result).data.popularHomestay.bannerModule.banners,
        })
      }
    })
  },
  /**
   * 热门目的地
   */
  Hot_destination(){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/getBnbIntentionCity?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "28" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          Hot_destination: res.data.citys
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