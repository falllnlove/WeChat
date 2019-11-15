const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'乐蜀民宿近上海乐园设计师高端复式公寓壹号',
    notice:'none',
    ordernotice:'none',
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
  // open: function () {
  //   this.setData({
  //     show: true
  //   })
  // },
  // buttontap(e) {
  //   console.log(e.detail)
  // }
})