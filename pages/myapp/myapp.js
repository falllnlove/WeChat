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
    size_china: '25',
    Underline_china: 'show',
    size_overseas: '22',
    Underline_overseas: '',
    bold_c: 'bold',
    bold_o: 'none',
    location: '',
    city: '上海',
    city_id: 2,
    province: '',
    latitude: '',
    longitude: '',
    bangdans: null,
    business_list: null,
    room_list: null,
    setInter: '',
    active_tap_0: 'active',
    isSelect: 0,
    home_stay: null,
    beauty_lodge_list: null,
    Hot_destination: null,
    optimization_PRO_list: null,
    Recommend_for_me_list: null,
    standby_beauty_lodge_list: [{ "id": "3ae0997b-95b7-404e-b63c-4e80bc2e70ab", "title": "种草笔记", "subTitle": "解锁纪念碑谷民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191111/201911111854115121.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191111183548", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191111/201911111854379122.jpg", "labels": ["种草笔记"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "2258adc5-233b-4287-856e-bc1f33eb7ec3", "title": "古董民宿", "subTitle": "网红民宿种草清单-VOL5", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191106/201911061500141438.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191106113715", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191106/201911061500369644.jpg", "labels": ["古董民宿"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "14fb4fe3-e0c3-4a2c-9518-8b7b933021cc", "title": "爆款清单", "subTitle": "网红民宿种草清单-VOL4", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191028/201910281719578743.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191028160935", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191028/201910281720174327.jpg", "labels": ["爆款清单"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "8d421b97-3aa8-4f58-9254-45ec5a1c9284", "title": "去逛逛", "subTitle": "", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190806/201908062132584077.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190806210922", "subPictureUrl": "", "labels": [], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "ac5bd5c7-3e0d-4975-9ad9-b86e6738555a", "title": "怀旧复古", "subTitle": "传承一场文艺复兴", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191639054065.jpg", "videoUrl": "", "navigateUrl": "https://bnb.qunar.com/tjbnb/front/promotion/cms?id=C20190806144307&gotype=1&labelkey_2=1402", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191639093637.jpg", "labels": ["#怀旧复古#"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "aa6c645f-3c94-4193-9f43-92f0c1b40958", "title": "网红ins风", "subTitle": "时髦精最爱的网红民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191615221087.jpg", "videoUrl": "", "navigateUrl": "https://bnb.qunar.com/tjbnb/front/promotion/cms?id=C20190806144307&gotype=1&labelkey_2=1414", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191614592655.jpg", "labels": ["#网红ins风#"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }],
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
    this.bangdan()
    this.business()
    this.Brand_home_stay_hall()
    this.beauty_lodge()
    this.Hot_destination()
    this.optimization_PRO()
    this.Recommend_for_me()
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
   * 监听异常
   */
  onError: function(res){
    console.log(res)
  },
  /**
   * 获取榜单数据
   */
  bangdan() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + s2 + "", "checkOut": "" + s2 + "", "cityId": that.data.city_id, "type": 6, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
  business() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + s2 + "", "checkOut": "" + s2 + "", "cityId": that.data.city_id, "type": 2, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "25" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
  room(value) {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/GetHomePageProduct?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "cityId": that.data.city_id, "type": 2, "conds": [{ "cond": "zoneId", "value": "" + value + "" }, { "cond": "date", "value": "2019-11-14,2019-11-15" }], "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          room_list: res.data.product
        })
      }
    })
  },
  /**
   * 品牌民宿馆
   */
  Brand_home_stay_hall() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + start + "", "checkOut": "" + end + "", "cityId": that.data.city_id, "type": 7, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          home_stay: res.data.brandPavilions
        })
      }
    })
  },
  /**
   * 网红美宿
   */
  beauty_lodge() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/16593/getPortalConfig?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "args": "{\"parameter\":{\"cityId\":" + that.data.city_id + ",\"cityName\":\"" + that.data.city + "\",\"oversea\":false,\"checkInDate\":\"2019-11-15\",\"checkOutDate\":\"2019-11-16\"},\"abTests\":{\"191023_bnbHybrid_hm10\":{\"s\":false,\"v\":\"B\"}}}", "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "allianceSid", "value": "155952" }, { "name": "allianceId", "value": "4897" }, { "name": "awakeUnion", "value": "{\"OUID\":\"index\",\"AllianceID\":\"4897\",\"SID\":\"155952\",\"SourceID\":\"\",\"AppID\":\"\",\"OpenID\":\"\"}" }, { "name": "terminaltype", "value": "20" }, { "name": "devicetype", "value": "PC" }, { "name": "devicebrand", "value": "undefined" }, { "name": "devicephone", "value": "PC" }, { "name": "browsername", "value": "Chrome" }, { "name": "browserver", "value": "78.0.3904.97" }, { "name": "os", "value": "PC" }, { "name": "osver", "value": "Windows10" }, { "name": "channelid", "value": "2" }, { "name": "page", "value": "600003543" }, { "name": "refpage", "value": "0215edc0-1dbc-42af-26b8-576e88cbc18a" }, { "name": "currentpage", "value": "2de91f74-b2a6-ba56-8b8a-d0bf0d11c3c2" }, { "name": "pagename", "value": "home" }, { "name": "vid", "value": "1573128641757.21yyes" }, { "name": "la", "value": "" }, { "name": "lo", "value": "" }, { "name": "geoType", "value": "" }, { "name": "traceid", "value": "3f31c17a-8968-0402-65e9-77afbc95f057" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        if (JSON.parse(res.data.result).data.popularHomestay != undefined || JSON.parse(res.data.result).data.popularHomestay != null){
          that.setData({
            beauty_lodge_list: JSON.parse(res.data.result).data.popularHomestay.bannerModule.banners,
          })
        }else{
          that.setData({
            beauty_lodge_list: that.data.standby_beauty_lodge_list
          })
        }
      }
    })
  },
  /**
   * 热门目的地
   */
  Hot_destination() {
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/getBnbIntentionCity?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "" + that.data.city_id + "" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          Hot_destination: res.data.citys
        })
      }
    })
  },
  /**
   * 优选PRO
   */
  optimization_PRO() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + start + "", "checkOut": "" + end + "", "cityId": that.data.city_id, "type": 4, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "28" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          optimization_PRO_list: res.data.youxuanpros.product
        })
      }
    })
  },
  /**
   * 为你推荐
   */
  Recommend_for_me() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/SearchProduct?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "cityid": that.data.city_id, "cityname": "" + that.data.city + "", "conds": [{ "cond": "date", "value": "" + start + "," + end + "" }], "pSize": 10, "searchType": "HOTLIST", "showTitle": true, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          Recommend_for_me_list: res.data.product
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
                vm.setData({
                  city_id: 2,
                  city: '上海'
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
                      vm.setData({
                        city_id: 2,
                        city: '上海'
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          vm.getLocation();
        }
        else {
          vm.getLocation();
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
      altitude: true,
      isHighAccuracy: true,
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        vm.setData({
          city_id: 2,
          city: '上海'
        })
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
        let location = res.result.formatted_addresses.recommend
        vm.setData({
          province: province,
          location: location + '附近',
          latitude: latitude,
          longitude: longitude,
          city: res.result.address_component.city.substring(0, parseInt(res.result.address_component.city.length - 1))
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
  Underline_china() {
    this.setData({
      size_china: '25',
      Underline_china: 'show',
      size_overseas: '22',
      Underline_overseas: '',
      bold_c: 'bold',
      bold_o: 'none',
    })
  },
  Underline_overseas() {
    this.setData({
      size_china: '22',
      Underline_china: '',
      size_overseas: '25',
      Underline_overseas: 'show',
      bold_c: 'none',
      bold_o: 'bold',
    })
  },
  /**
   * 商圈选择
   */
  business_tap(e) {
    this.room(e.currentTarget.dataset.zoneid)
    this.setData({
      isSelect: e.currentTarget.dataset.id,
    })
  },
})