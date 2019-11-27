//room_par_discuss.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_id: 8685168,
    pageindex : 0,
    discuss_list:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.room_id != undefined) {
      console.log(111111)
      this.setData({
        room_id : options.room_id
      })
    }
    this.discuss()
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
   *  加载评论 
   */
  discuss(){
    var that = this
    console.log(that.data.room_id)
    console.log(that.data.pageindex)
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/BnbCommentList?_fxpcqlniredt=09031174410421181703&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10320662860&__gw_platform=H5',
      data: `{ "pid": ${that.data.room_id}, "searchType": 2, "pageindex": ${that.data.pageindex}, "head": { "cid": "09031174410421181703", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "17" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" }`,
      method:'post',
      success: res => {
        console.log(res.data)
        that.setData({
          discuss_list : res.data
        })
      }
    })
  },
})