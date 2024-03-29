//room_par_discuss.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city_id : null,
    room_id: null,
    pageindex : 0,
    discuss_list:null,
    full : null,
    text :null,
    show : 'displat:none',
    current :0,
    img_index_page : 0,
    img_leng :0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.room_id != undefined) {
      this.setData({
        room_id : options.room_id,
        city_id: options.city_id
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
    wx.showToast({
      title: '加载中...',
      mask: true,
      icon: 'loading'
    })
    var that = this
    that.setData({
      pageindex : that.data.pageindex+1
    })
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/BnbCommentList?_fxpcqlniredt=09031056111930078145&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10320662860&__gw_platform=H5',
      data: `{ "pid": ${that.data.room_id}, "searchType": 2, "pageindex": ${that.data.pageindex}, "head": { "cid": "09031056111930078145", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "${that.data.city_id}" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" }`,
      method: 'post',
      success: res => {
        res.data.clist.forEach((item,index) => {
          that.data.discuss_list.clist.push(item)
        })
        that.setData({
          discuss_list : that.data.discuss_list
        })
      }
    })

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
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/BnbCommentList?_fxpcqlniredt=09031056111930078145&__gw_appid=99999999&__gw_ver=1.0&__gw_from=10320662860&__gw_platform=H5',
      data: `{ "pid": ${that.data.room_id}, "searchType": 2, "pageindex": ${that.data.pageindex}, "head": { "cid": "09031056111930078145", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "${that.data.city_id}" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" }`,
      method:'post',
      success: res => {
        that.setData({
          discuss_list : res.data
        })
      }
    })
  },

  /**
   * 监听全文点击事件
   */
  full_text(e){
    var that = this
    if (e.currentTarget.dataset.index == that.data.full){
      that.setData({
        full : null
      })
    }else {
      that.setData({
        full: e.currentTarget.dataset.index
      })
    }
    if (e.currentTarget.dataset.text == that.data.text) {
      that.setData({
        text: 1
      })
    } else {
      that.setData({
        text: e.currentTarget.dataset.text
      })
    }
  },

  /**
   * 大图显示评论照片
   */
  show_img(e){
    var that = this
    that.setData({
      show : 'display : block',
      current: e.currentTarget.dataset.img_index,
      current_idx: e.currentTarget.dataset.img_index,
      img_index_page: e.currentTarget.dataset.img_list_index,
      img_leng: that.data.discuss_list.clist[e.currentTarget.dataset.img_list_index].scaledURL.length
    })
  },

  /**
   * 隐藏照片大图显示
   */
  img_hide(){
    this.setData({
      show: 'display : none',
    })
  },

  /**
   * 监听照片大图显示滑动
   */
  change_current(e){
    this.setData({
      current_idx: e.detail.current
    })
  }
})