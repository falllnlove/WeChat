const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'乐蜀民宿近上海乐园设计师高端复式公寓壹号',
    notice:'none',
    ordernotice:'none',
    showAll:'block',
    closeAll:'none',
    facility_show:'none',
    detailMess:'none',
    itshowAll:'block',
    itcloseAll:'none',
    it_show:'none',
    addMessUser:'none',
    hotelMess:'block',
    inputValue:'',
    cust_Mess_del:'none',
    cusDel:'block',
    addMessUsermore:'none',
    // leftMove:0,
    // show: false,
    // buttons: [
    //   {
    //     type: 'default',
    //     className: '',
    //     text: '辅助操作',
    //     value: 0
    //   },
    //   {
    //     type: 'primary',
    //     className: '',
    //     text: '主操作',
    //     value: 1
    //   }
    // ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getMess_image()
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
  notice_tap_show(){
    this.setData({
      notice:'block'
    })
  },
  notice_tap_close(){
    this.setData({
      notice: 'none'
    })
  },
  ordernotice_show(){
    this.setData({
      ordernotice:'block'
    })
  },
  ordernotice_close(){
    this.setData({
      ordernotice: 'none'
    })
  },
  messAll_show(){
    this.setData({
      facility_show:'block',
      showAll: 'none',
      closeAll: 'block',
    })
  },
  messAll_close(){
    this.setData({
      facility_show:'none',
      showAll: 'block',
      closeAll: 'none',
    })
  },
  detail_Mess_show(){
    this.setData({
      detailMess:'block'
    })
  },
  detail_Mess_close(){
    this.setData({
      detailMess:'none'
    })
  },
  iteclose_show(){
    this.setData({
      itshowAll:'none',
      itcloseAll:'block',
      it_show:'block'
    })
  },
  iteclose_close(){
    this.setData({
      itshowAll: 'block',
      itcloseAll: 'none',
      it_show:'none'
    })
  },
  addMessUser_mess(){
     this.setData({
       addMessUser:'block',
       hotelMess:'none'
     })
  },
  addMess_close(){
    this.setData({
      addMessUser: 'none',
      hotelMess: 'block'
    })
  },
  cust_MessShow(){
    this.setData({
      cust_Mess_del:'block',
      cusDel: 'none'
    })
  },
  cust_MessClose(){
    this.setData({
      cust_Mess_del:'none',
      cusDel: 'block'
    })
  },
  addMessUsermoreShow(){
    this.setData({
      addMessUsermore:'block',
      hotelMess:'none'
    })
  },
  getMess_image(){
    var that=this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/SearchProduct?_fxpcqlniredt=09031047311234998233&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003546&__gw_platform=H5',
      data: { "cityid": 2, "rentType": "0", "orderBy": 0, "pindex": 1, "keywords": "", "filterTitle": null, "cityname": "上海", "conds": [{ "cond": "date", "value": "2019-11-15,2019-11-16" }], "userDataPos": { "cityId": "2", "lat": "31.248194094262946", "lng": "121.4879869806514" }, "sequenceId": "4f4b07ce-16df-5f3e-691b-a1966096bd9b", "pageCode": "600003546", "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success: function(res) {
        console.log(res.data.product)
        that.setData({
          test: res.data.product
        })
      }
    })
  }
  // open: function () {
  //   this.setData({
  //     show: true
  //   })
  // },
  // buttontap(e) {
  //   console.log(e.detail)
  // }
})