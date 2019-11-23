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
    location: '上海',
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
    beauty_lodge_list: [{ "id": "2258adc5-233b-4287-856e-bc1f33eb7ec3", "title": "爆款民宿", "subTitle": "Warm 暖冬民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191121/201911211516079762.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191121143049", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191121/201911211515545822.jpg", "labels": ["爆款民宿"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "3ae0997b-95b7-404e-b63c-4e80bc2e70ab", "title": "种草笔记", "subTitle": "解锁纪念碑谷民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191111/201911111854115121.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191111183548", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191111/201911111854379122.jpg", "labels": ["种草笔记"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "14fb4fe3-e0c3-4a2c-9518-8b7b933021cc", "title": "爆款清单", "subTitle": "网红民宿种草清单-VOL4", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191028/201910281719578743.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20191028160935", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_191028/201910281720174327.jpg", "labels": ["爆款清单"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "8d421b97-3aa8-4f58-9254-45ec5a1c9284", "title": "去逛逛", "subTitle": "", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190806/201908062132584077.jpg", "videoUrl": "", "navigateUrl": "https://m.ctrip.com/webapp/bnbcms/promotion?id=C20190806210922", "subPictureUrl": "", "labels": [], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "7e4428d7-4bb3-4a8f-a533-8ab9b752aeed", "title": "日式和风", "subTitle": "感受典雅自然的和风之美", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191624591016.jpg", "videoUrl": "", "navigateUrl": "https://bnb.qunar.com/tjbnb/front/promotion/cms?id=C20190806144307&gotype=1&labelkey_2=1408", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191625068410.jpg", "labels": ["#日式和风#"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }, { "id": "aa6c645f-3c94-4193-9f43-92f0c1b40958", "title": "网红ins风", "subTitle": "时髦精最爱的网红民宿", "pictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191615221087.jpg", "videoUrl": "", "navigateUrl": "https://bnb.qunar.com/tjbnb/front/promotion/cms?id=C20190806144307&gotype=1&labelkey_2=1414", "subPictureUrl": "https://pic.tujia.com/upload/resourcespic/day_190719/201907191614592655.jpg", "labels": ["#网红ins风#"], "testBucket": "NONE", "pictures": null, "redPacketConfig": null }],
    Hot_destination: null,
    optimization_PRO_list: null,
    Recommend_for_me_list: null,
    standby_beauty_lodge_list: null,
    starTime: util.month_and_day(new Date()),
    endTime: util.tomorrow(new Date()),
    day: '1晚',
    week1:'今天',
    week2 : '明天',
    citylist:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.city_name != undefined && options.city_id != undefined){
      this.setData({
        city: options.city_name,
        city_id : options.city_id,
        location : options.city_name
      })
    }

    qqmapsdk = new QQMapWX({
      key: '4MABZ-FIS6F-6FGJK-NH4FN-BYJK7-NQFAX'
    });
    var _this = this
    _this.city_list_info()
      .then( res => {
        _this.getUserLocation(res)
      })
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

  select_cityName(e){
    console.log(e)
  },

  /**
   * 选择城市
   */
  sele_city(){
    wx.navigateTo({
      url: '../city_list/city_list',
    })
  },

  /**
   * 获取城市
   */
  city_list_info() {
    var that = this
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'https://m.ctrip.com/restapi/soa2/12455/json/getCity?_fxpcqlniredt=09031107112123131138&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10320666865&__gw_platform=H5',
        data: { "type": 1, "head": { "cid": "09031107112123131138", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
        method: 'post',
        success(res) {
          that.setData({
            citylist: res.data.cities,
            // newcity: res.data.hotcitiies
          })
          wx.setStorage({
            key: 'citylist',
            data: res.data.cities
          })
          resolve(res.data.cities)
        }
      })
    })
    return p
  },

  /**
   * 获取榜单数据
   */
  bangdan() {
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + that.data.starTime + "", "checkOut": "" + that.data.starTime + "", "cityId": that.data.city_id, "type": 6, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + that.data.starTime + "", "checkOut": "" + that.data.starTime + "", "cityId": that.data.city_id, "type": 2, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "25" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/GetHomePageProduct?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "cityId": that.data.city_id, "type": 2, "conds": [{ "cond": "zoneId", "value": "" + value + "" }, { "cond": "date", "value": "" + that.data.starTime + "," + that.data.endTime +"" }], "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + that.data.starTime + "", "checkOut": "" + that.data.endTime + "", "cityId": that.data.city_id, "type": 7, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/16593/getPortalConfig?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "args": "{\"parameter\":{\"cityId\":"+ that.data.city_id +",\"cityName\":\""+ that.data.city +"\",\"oversea\":false,\"checkInDate\":\""+ that.data.starTime +"\",\"checkOutDate\":\""+ that.data.endTime +"\"},\"abTests\":{\"191023_bnbHybrid_hm10\":{\"s\":false,\"v\":\"B\"}}}", "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "allianceSid", "value": "155952" }, { "name": "allianceId", "value": "4897" }, { "name": "awakeUnion", "value": "{\"OUID\":\"index\",\"AllianceID\":\"4897\",\"SID\":\"155952\",\"SourceID\":\"\",\"AppID\":\"\",\"OpenID\":\"\"}" }, { "name": "terminaltype", "value": "20" }, { "name": "devicetype", "value": "PC" }, { "name": "devicebrand", "value": "undefined" }, { "name": "devicephone", "value": "PC" }, { "name": "browsername", "value": "Chrome" }, { "name": "browserver", "value": "78.0.3904.97" }, { "name": "os", "value": "PC" }, { "name": "osver", "value": "Windows10" }, { "name": "channelid", "value": "2" }, { "name": "page", "value": "600003543" }, { "name": "refpage", "value": "" }, { "name": "currentpage", "value": "03550df3-0623-0e42-f4dc-428f8f3be6c8" }, { "name": "pagename", "value": "home" }, { "name": "vid", "value": "" }, { "name": "la", "value": "" }, { "name": "lo", "value": "" }, { "name": "geoType", "value": "" }, { "name": "traceid", "value": "9e341ac1-edc7-a5bd-4468-3d98df4c7bc7" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        if (JSON.parse(res.data.result).data.popularHomestay != undefined || JSON.parse(res.data.result).data.popularHomestay != null){
          that.setData({
            beauty_lodge_list: JSON.parse(res.data.result).data.popularHomestay.bannerModule.banners,
          })
        }else{
          // that.setData({
          //   beauty_lodge_list: that.data.standby_beauty_lodge_list
          // })
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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/gethomepagedata?subEnv=fws&_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "checkIn": "" + that.data.starTime + "", "checkOut": "" + that.data.endTime + "", "cityId": that.data.city_id, "type": 4, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "28" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/SearchProduct?_fxpcqlniredt=09031139211104612799&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003543&__gw_platform=H5',
      data: { "cityid": that.data.city_id, "cityname": "" + that.data.city + "", "conds": [{ "cond": "date", "value": "" + that.data.starTime + "," + that.data.endTime + "" }], "pSize": 10, "searchType": "HOTLIST", "showTitle": true, "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
  getUserLocation: function (ress) {
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
          vm.getLocation(ress);
        }
        else {
          vm.getLocation(ress);
        }
      }
    })
  },
  /**
   * 微信获得经纬度
   */
  getLocation: function (ress) {
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
        vm.getLocal(latitude, longitude, ress)
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
  getLocal: function (latitude, longitude, ress) {
    let vm = this;
    var city_id = null;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        let province = res.result.ad_info.province
        let location = res.result.formatted_addresses.recommend
        ress.forEach(item =>{
          item.cities.forEach(page =>{
            if (page.name == res.result.address_component.city.substring(0, parseInt(res.result.address_component.city.length - 1))){
              city_id = page.id
            }
          })
        })
        vm.setData({
          province: province,
          location: location + '附近',
          latitude: latitude,
          longitude: longitude,
          city: res.result.address_component.city.substring(0, parseInt(res.result.address_component.city.length - 1)),
          city_id: city_id
        })
        console.log(vm.data.city_id)
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

  /**
   * 跳转城市民宿列表
   */
  skip_room_list(e){
    var that = this
    wx.navigateTo({
      url: '../houseList/houseList?city_id=' + that.data.city_id + '&city=' + that.data.city + '&startTime=' + e.currentTarget.dataset.starTime + '&endTime=' + e.currentTarget.dataset.endTime,
    })
  },

  /**
   * 判断星期
   */
  getMyDay(date){
    var week;
    if(date.getDay() == 0) week = "周日";
    if (date.getDay() == 1) week = "周一";
    if (date.getDay() == 2) week = "周二";
    if (date.getDay() == 3) week = "周三";
    if (date.getDay() == 4) week = "周四";
    if (date.getDay() == 5) week = "周五";
    if (date.getDay() == 6) week = "周六";
    return week;
  },

  dianji: function () {
    this.yunxin()//调用回调函数
  },
  yunxin: function () {
    var that = this;
    that.rili = that.selectComponent("#rili")
    var starTime = ''
    var day = ''
    var endTime = ''
    that.rili.xianShi({
      data: function (res) {
        if (res != null) {
          if (res.length == 1) {
            starTime = res[0].data.split('-')[1] + '.' + res[0].data.split('-')[2]
          }
          else if (res.length == 2) {
            var week1 = that.getMyDay(new Date(res[0].data))
            var week2 = that.getMyDay(new Date(res[1].data))
            starTime = res[0].data.split('-')[1] + '.' + res[0].data.split('-')[2]
            endTime = res[1].data.split('-')[1] + '.' + res[1].data.split('-')[2]
            day = res[1].chaDay
          }
        }
        else {
          starTime = util.month_and_day(new Date()),
          endTime = util.tomorrow(new Date()),
          day = '1晚',
          week1 = '今天',
          week2 = '明天'
        }
        that.setData({
          starTime: starTime,
          endTime: endTime,
          day: day,
          week1: week1,
          week2: week2
        })
      }
    })
  },
})