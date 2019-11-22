

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    filter_list:null,
    position_list:null,
    test_my:null,
    pindex:1,
    hasmore: false,
    city:'',
    city_id : 2,
    lat:null,
    lon:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options != null){
      this.setData({
        city: options.city,
        city_id: options.city_id,
        lat: options.lat,
        lon: options.lon
      })
    }
    this.get_room_list_my(),
    this.get_position_list_my(),
    this.get_filter_list_my()
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
    let that = this   //注意that
    that.data.pindex+=1;
    wx.showLoading({
      title: '玩命加载中',//上拉的时候会出现一个提示框
    });
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/SearchProduct?_fxpcqlniredt=09031114311337967831&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003546&__gw_platform=H5',
      data: { "cityid": that.data.city_id, "rentType": "0", "orderBy": 0, "pindex": that.data.pindex, "keywords": "", "filterTitle": null, "cityname": "" + that.data.city +"", "conds": [{ "cond": "date", "value": "2019-11-22,2019-11-23" }], "userDataPos": { "cityId": ""+ that.data.city_id +"", "lat": ""+ that.data.lat +"", "lng": ""+ that.data.lon +"" }, "sequenceId": "8da98360-bfa5-9a12-f216-7be9e24a3b9a", "pageCode": "600003546", "head": { "cid": "09031114311337967831", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'POST',
      success: function (res) {
        if (res.data.info !== null) {
          //每次刷新的数据叠加，注意是用concat进行连接，而不是用push添加
          that.setData({
            test_my: that.data.test_my.concat(res.data.product),
            hasmore: true,
          })
        } else {
          that.setData({
            hasmore: true
          })
        }
      },
       complete() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 
   */
  get_room_list_my() {
    var that = this
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var start = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    var end = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + (day2.getDate() + 1);
    wx: wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/SearchProduct?_fxpcqlniredt=09031114311337967831&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003546&__gw_platform=H5',
      data: { "cityid": that.data.city_id, "rentType": "0", "orderBy": 0, "pindex": 1, "keywords": "", "filterTitle": null, "cityname": "" + that.data.city + "", "conds": [{ "cond": "date", "value": "" + start+","+end+"" }], "userDataPos": { "cityId": ""+ that.data.city_id +"", "lat": ""+ that.data.lat +"", "lng": ""+ that.data.lon +"" }, "sequenceId": "8da98360-bfa5-9a12-f216-7be9e24a3b9a", "pageCode": "600003546", "head": { "cid": "09031114311337967831", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": ""+ that.data.city_id +"" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success: function (res) {
        that.setData({
          test_my: res.data.product,
        })
      },
    })
  },


  get_position_list_my() {
    var that = this
    wx: wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/BnbCityZone?_fxpcqlniredt=09031114311337967831&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003546&__gw_platform=H5',
      data: { "cityId": that.data.city_id, "usage": 2, "head": { "cid": "09031114311337967831", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success: function (res) {
        that.setData({
            position_list: res.data,
        })
      },
    })
  },


  get_filter_list_my() {
    var that = this
    wx: wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/GetSearchFilter?_fxpcqlniredt=09031114311337967831&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003546&__gw_platform=H5',
      data: { "cityId": that.data.city_id, "head": { "cid": "09031114311337967831", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "350" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success: function (res) {
        that.setData({
          filter_list: res.data,
        })
      },
    })
  },

  /**
   *  跳转房屋详情页面 
   */
  particulars_room(e){
    wx.redirectTo({
      url: '../room_par/room_par?id=' + e.currentTarget.dataset.room_id + '&city_id=' + e.currentTarget.dataset.city_id,
    })
  },
})