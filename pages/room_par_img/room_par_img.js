//room_par_img.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city_id: 2,
    room_id: 926544121,
    img_list: null,
    startTime: '2019-11-25',
    endTime: '2019-11-26',
    top_info: ['drawing', 'bedchamber', 'kitchen', 'toilet', 'else'],
    top_info_num: [],
    img_title : [],
    top_0: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.city_id != null) {
      this.setData({
        city_id: options.city_id,
        room_id: options.room_id,
        startTime: options.startTime,
        endTime: options.endTime
      })
    }
    var that = this
    that.room_par_img()
      .then(res => {
        that.img_place()
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 监听屏幕滑动
   */
  onPageScroll: function(e) {
    var that = this
    if (e.scrollTop < that.data.top_info_num[0]) {
      that.setData({
        top_0: 1,
      })
    } else if (e.scrollTop > that.data.top_info_num[0] && e.scrollTop < that.data.top_info_num[1]) {
      that.setData({
        top_0: 2,
      })
    } else if (e.scrollTop > that.data.top_info_num[1] && e.scrollTop < that.data.top_info_num[2]) {
      that.setData({
        top_0: 3,
      })
    } else if (e.scrollTop > that.data.top_info_num[2] && e.scrollTop < that.data.top_info_num[3]) {
      that.setData({
        top_0: 4,
      })
    } else if (e.scrollTop > that.data.top_info_num[4]) {
      that.setData({
        top_0: 5,
      })
    }
  },

  /**
   * 加载照片
   */
  room_par_img() {
    var that = this
    return new Promise(function(resolve, reject) {
      wx.request({
        url: 'https://m.ctrip.com/restapi/soa2/12455/json/LegendProductDetail?_fxpcqlniredt=09031174410421181703&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
        data: `{ "pid": ${that.data.room_id}, "cktime": "${that.data.startTime}", "ottime": "${that.data.endTime}", "head": { "cid": "09031174410421181703", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "${that.data.city_id}" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" }`,
        method: 'post',
        success: res => {
          var a =[]
          res.data.product.img.forEach(item => a.push(item.title))
          that.arrayUnique(a)
          that.setData({
            img_list: res.data.product.img
          })
          resolve(a)
        }
      })
    })
    return p
  },

  /**
   * 获取照片对应位置
   */
  img_place() {
    var that = this
    that.data.top_info.forEach((item, index) => {
      const query = wx.createSelectorQuery()
      query.select(`.${item}`).boundingClientRect()
      query.exec(function(res) {
        if (res[0] != null) {
          that.data.top_info_num.push(res[0].top)
        }
      })
    })
  },

  /**
   * 照片分类去重
   */
  arrayUnique(res) {
    var result = [],
      hash = {};
    for (var i = 0, elem;
      (elem = res[i]) != null; i++) {
      if (!hash[elem]) {
        result.push(elem);
        hash[elem] = true;
      }
    }
    this.setData({
      img_title: result
    })
  }
})