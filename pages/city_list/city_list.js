//city_list.js
const app = getApp()

import qqmap from 'map.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    letter: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
    cityListId: '',
    citylist:null,
    newcity: null,
    locateCity: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
    this.city_list_info()
    this.getLocate()
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
   * 获取城市
   */
  city_list_info(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/getCity?_fxpcqlniredt=09031107112123131138&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10320666865&__gw_platform=H5',
      data: { "type": 1, "head": { "cid": "09031107112123131138", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method : 'post',
      success(res){
        that.setData({
          citylist: res.data.cities,
          newcity: res.data.hotcitiies
        })
        wx.setStorage({
          key:'citylist',
          data: res.data.cities
        })
      }
    })
  },

  /**
   * 调用定位
   */
  getLocate() {
    let that = this;
    new qqmap().getLocateInfo().then(function (val) {//这个方法在另一个文件里，下面有贴出代码
      if (val.indexOf('市') !== -1) {
        val = val.slice(0, val.indexOf('市'));
      }
      that.setData({
        locateCity: val
      });
    });
  },

  /**
   * 选择首字母页面滚动到相应位置
   */
  letterTap(e){
    var id = e.currentTarget.dataset.item
    var toViewid = "#" + id
    var scrollTop;
    const query = wx.createSelectorQuery();
    query.select(toViewid).boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      var miss = res[0].top + res[1].scrollTop
      wx.pageScrollTo({
        scrollTop: miss,
        duration: 300
      });
    })
  },

  /**
   * 选择城市返回
   */
  cityTap(e){
    wx.redirectTo({
      url: '../myapp/myapp?city_id=' + e.currentTarget.dataset.city_id + '&city_name=' + e.currentTarget.dataset.val
    })
  }
})