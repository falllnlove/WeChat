//cate.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewDestId : 2,
    announcement_list:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.all_info()
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
   * 榜上有名数据
   */
  all_info(){
    var that = this
    wx/wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/10332/json/GetHomePageViewModelV706?_fxpcqlniredt=09031093210738456389&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10320663818&__gw_platform=H5',
      data: { "ViewDestId": `${that.data.viewDestId}`, "CurrentDestId": 0, "IsPhoneX": false, "Lat": 0, "Lon": 0, "geoType": "", "head": { "cid": "09031093210738456389", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success:(res=>{
        console.log(res.data)
        that.setData({
          announcement_list: res.data.RankingList
        })
      }),
    })
  }
})