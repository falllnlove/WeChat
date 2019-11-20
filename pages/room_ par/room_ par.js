//room_ par.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_id: 486753476,
    get_room_info_list: null,
    state:0,
    ioc:1,
    collect:'display:none',
    img_index:1,
    bed_show:'display:none',
    fixedTop:0,
    coupons_list: null,
    comment_list: null,
    lat:null,
    lon:null,
    address_name:null,
    place :null,
    room_rim_list:null,
    landlord_list:null,
    ownerid : null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_room_info()
      .then(res =>{
        this.landlord(res)
      })
    this.coupons()
    this.comment()
    this.room_rim()
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


  /**
   * 房间信息
   */
  get_room_info(){
    var that = this
    return new Promise(function (resolve, reject) {
      var day2 = new Date();
      day2.setTime(day2.getTime());
      var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
      var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
      wx.request({
        url: 'https://m.ctrip.com/restapi/soa2/12455/json/LegendProductDetail?_fxpcqlniredt=09031107111018024259&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
        data: { "pid": that.data.room_id, "cktime": "" + start + "", "ottime": "" + end + "", "head": { "cid": "09031107111018024259", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
        method: 'post',
        success(res) {
          that.setData({
            get_room_info_list: res.data.product,
            lat: res.data.product.pos.lat,
            lon: res.data.product.pos.lon,
            address_name: res.data.product.pos.attr,
            place: res.data.product.pos.locationName,
            ownerid: res.data.product.ownerid,
          })
          resolve(res.data.product.ownerid)
        }
      })
    })
    return p
  },

  /**
   * 优惠卷
   */
  coupons(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/GetIndexCoupon?_fxpcqlniredt=09031135211814279529&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "type": 0, "head": { "cid": "09031135211814279529", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          coupons_list: res.data.centercoupons
        })
      }
    })
  },

  /**
   * 评论
   */
  comment(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/BnbCommentList?_fxpcqlniredt=09031135211814279529&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "pid": that.data.room_id, "pageindex": 0, "tagId": 0, "searchType": 2, "head": { "cid": "09031135211814279529", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          comment_list : res.data
        })
      }
    })
  },

  /**
   * 地图/周边
   */
  room_rim(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/getPoiTraffic?_fxpcqlniredt=09031114410056975825&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "productId": that.data.room_id, "lat": that.data.lat, "lon": that.data.lon, "search": {}, "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          room_rim_list : res.data.pois
        })
      }
    })
  },

  /**
   * 房东信息
   */
  landlord(res){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/LegendOwnerDetail?_fxpcqlniredt=09031114410056975825&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "ownerid": "" + res +"", "pid": that.data.room_id, "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          landlord_list: res.data
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
    if (e.scrollTop >900){
      _this.setData({
        ioc:2
      })
    }
    else if (e.scrollTop <900){
      _this.setData({
        ioc: 1
      })
    }
  },
  intoMap: function () {
    var that = this
    wx.openLocation({
      latitude: that.data.lat,
      longitude: that.data.lon,
      name: that.data.address_name,
      address: that.data.place,
      scale: 14,
    })
  },
})