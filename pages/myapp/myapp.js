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
    console.log(start)
    console.log(end)
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