//room_par.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_id: 8743852,
    city_id:null,
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
    is_hide:'0',
    rim_room_list:null,
    pop_up_rim_list:null,
    pop_up_rim_choice : 0,
    Housing_details : '0',
    facility:'0',
    red_heart_choice:'0',
    current_index:0,
    startTime : null,
    endTime : null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options != null){
      this.setData({
        room_id: options.id,
        city_id: options.city_id,
        startTime: options.startTime,
        endTime : options.endTime
      })
    }
    this.get_room_info()
      .then(res =>{
        this.landlord(res)
      })
      .then(res => {
        this.rim_room(res)
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
        url: 'https://m.ctrip.com/restapi/soa2/12455/json/LegendProductDetail?_fxpcqlniredt=09031090411970318120&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
        data: { "pid": that.data.room_id, "cktime": ""+ start +"", "ottime": ""+ end +"", "head": { "cid": "09031090411970318120", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
      data: { "type": 0, "head": { "cid": "09031135211814279529", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "" + that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
      data: { "pid": that.data.room_id, "pageindex": 0, "tagId": 0, "searchType": 2, "head": { "cid": "09031135211814279529", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
      data: { "productId": that.data.room_id, "lat": that.data.lat, "lon": that.data.lon, "search": {}, "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
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
      data: { "ownerid": "" + res +"", "pid": that.data.room_id, "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          landlord_list: res.data
        })
      }
    })
  },

  /**
   * 周边相似民宿
   */
  rim_room(res){
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" +(day2.getDate() + 1);
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/getSimilarProductList?_fxpcqlniredt=09031114410056975825&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "pid": that.data.room_id, "ownerid": "" + res +"", "cityid": that.data.city_id, "cktime": ""+ start +"", "ottime": ""+ end +"", "pos": { "lat": that.data.lat, "lng": that.data.lon }, "rentType": "0", "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          rim_room_list: res.data.product
        })
      }
    })
  },

  /**
   * 周边弹窗信息
   */
  pop_up_rim(){
    var that = this
    that.setData({
      pop_up_rim_choice: 1
    })
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/getPoiTraffic?_fxpcqlniredt=09031114410056975825&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: { "productId": that.data.room_id, "lat": that.data.lat, "lon": that.data.lon, "search": {}, "loadMore": 1, "head": { "cid": "09031114410056975825", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success(res) {
        that.setData({
          pop_up_rim_list: res.data.morePois
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

  /**
   * 周边弹层
   */
  rim_choice(){
    this.setData({
      pop_up_rim_choice : 0
    })
  },

  /**
   * 房屋详情弹层
   */
  Housing_details(e){
    this.setData({
      Housing_details: e.currentTarget.dataset.housing_details
    })
  },

  /**
   * 配套设施弹层
   */
  facility(e){
    this.setData({
      facility: e.currentTarget.dataset.facility
    })
  },

  /**
   * 监听屏幕滑动
   */
  onPageScroll: function (e) {
    var _this = this;
    _this.setData({
      fixedTop: e.scrollTop
    })
    if (e.scrollTop>0 && e.scrollTop <900){
      _this.setData({
        ioc: 1
      })
    }
    if (e.scrollTop > 900 && e.scrollTop < 1300){
      _this.setData({
        ioc:2
      })
    }
    if(e.scrollTop>1300 && e.scrollTop < 1600){
      _this.setData({
        ioc: 3
      })
    }
    if (e.scrollTop > 1600) {
      _this.setData({
        ioc: 4
      })
    }
  },

  /**
   * 地图
   */
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

  /**
   *  额外服务 
   */
  is_hide(e){
    var that = this
    that.setData({
      is_hide : e.currentTarget.dataset.is_hide
    })
  },

  /**
   * 关注
   */
  red_heart(){
    if (this.data.red_heart_choice == '0'){
      this.setData({
        red_heart_choice : '1'
      })
    }
    else {
      this.setData({
        red_heart_choice: '0'
      })
    }
  },

  /**
   * 跳转页面
   */
  refresh(e){
    this.setData({
      room_id: e.currentTarget.dataset.room_id,
      img_index : 1,
      current_index : 0,
    })
    this.onLoad()
    var that = this
    setTimeout(function () {
      that.goTop()
    }, 1000) //延迟时间 这里是1秒
    
  },


  goTop: function (e) { // 一键回到顶部
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: -10
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  /**
   * 照片详情
   */
  img_info_list() {
    wx.navigateTo({
      url: `../room_par_img/room_par_img?city_id=${this.data.city_id}&room_id=${this.data.room_id}&startTime=${this.data.startTime}&endTime=${this.data.endTime}`,
    })
  },

  /**
   * 跳转评论列表
   */
  look_over_all_discuss(){
    wx.navigateTo({
      url: `../room_par_discuss/room_par_discuss?room_id=${this.data.room_id}`,
    })
  }
})