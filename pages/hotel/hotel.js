const app = getApp()
var util=require("../../utils/data.js")
var datas = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'乐蜀民宿近上海乐园设计师高端复式公寓壹号',
    arriveTime1:'11',
    arriveTime2: '22',
    leaveTime1: '11',
    leaveTime2: '23',
    stayTimes:'1晚',
    arriveWeekTime:'周四',
    leaveWeekTime: '周五',
    livepeopleName:'孙燕然',
    chinaName:'',
    cardId:'',
    liveperopleCardId:'410329200208159582',
    livePeoplePayPrice:'413',
    phoneNumber:'15194537383',
    peoplenums:'1',
    despoit:'100',
    house_type_id:'2',
    house_num_id:'4',
    house_num:'1',
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
    editMessUser:'none',
    arrowsShow:'block',
    actives:'none',
    active:'block',
    conEditDel:'block',
    chinaNames:'',
    cardIds:'',
    englistName:'',
    englistfirstName:'',
    test: null,
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
  // cust_MessShow(){
  //   var animation= wx.createAnimation({
  //     duration: 400,
  //     timingFunction: '"linear"',
  //     delay: 0,
  //     transformOrigin: '"50% 50% 0"',
  //   })
  //   animation.translate(-50).step()
  //   this.setData({
  //     cust_Mess_del:'block',
  //     cusDel: 'none',
  //     ani: animation.export
  //   })
  // },
  cust_MessShow:function(){
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: '"linear"',
      delay: 0,
      transformOrigin: '"50% 50% 0"',
    })
    animation.translateX(-20).step()
    this.setData({
      cust_Mess_del: 'block',
      cusDel: 'none',
      ain: animation.export(),
      arrowsShow: 'none'
    })
  },
  cust_MessClose: function () {
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: '"linear"',
      delay: 0,
      transformOrigin: '"50% 50% 0"',
    })
    animation.translateX(3).step()
    this.setData({
      cust_Mess_del: 'none',
      cusDel: 'block',
      ain: animation.export(),
      arrowsShow: 'block'
    })
  },
  addMessUsermoreShow(){
    this.setData({
      addMessUsermore:'block',
      hotelMess:'none'
    })
  },
  addMessUsermoreClose(){
    this.setData({
      addMessUsermore: 'none',
      hotelMess: 'block'
    })
  },
  addMoreEdit(){
    this.setData({
      addMessUsermore:'none',
      editMessUser:'block'
    })
  },
  editMess_close(){
    this.setData({
      addMessUsermore: 'block',
      editMessUser: 'none'
    })
  }, 
  editDel(){
    this.setData({
      actives:'block',
      active:'none',
      conEditDel:'none'
    })
  },
  avticeShow(){
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: '"linear"',
      delay: 0,
      transformOrigin: '"50% 50% 0"',
    })
    animation.translateX(3).step()
    this.setData({
      cust_Mess_del: 'none',
      cusDel: 'block',
      ain: animation.export(),
      actives: 'none',
      active: 'block',
      conEditDel: 'block'
    })
  },
  chinaNamesInput:function(e){
     this.setData({
       chinaNames: e.detail.value
     })
  },
  /**
   * 获取数据
   */
  spendPrice(){
    wx.request({
      url: 'http://cuinef.natappfree.cc/index',
      success(res){
        console.log(res)
      }
    })
    // var that=this;
    // var peopleName = this.data.livepeopleName;
    // var peoplePhone = this.data.phoneNumber;
    // var peopleArriveTime = this.data.arriveTime1;
    // var peopleArriveTime2 = this.data.arriveTime2;
    // var peopleLeaveTime = this.data.leaveTime1;
    // var peopleLeaveTime2 = this.data.leaveTime2;
    // var peopleNums = this.data.peoplenums;
    // var peopleCardId = this.data.liveperopleCardId;
    // var peopleDespoit = this.data.despoit;
    // var peoplePayPrice = this.data.livePeoplePayPrice;
    // var peopleTypeId = this.data.house_type_id;
    // var peopleNumId = this.data.house_num_id;
    // var peopleHouseNum = this.data.house_num;
    // var timestamp = Date.parse(new Date());
    // var date = new Date(timestamp);
    // //获取年份  
    // var Y = date.getFullYear();
    // var hour = date.getHours();
    // var minute = date.getMinutes();
    // var second = date.getSeconds();
    // var peoplerarrive = Y + '-' + peopleArriveTime + '-' + peopleArriveTime2 + ' ' + hour + ':' + minute + ':' + second;
    // var peopleleave = Y + '-' + peopleLeaveTime + '-' + peopleLeaveTime2 + ' ' + hour + ':' + minute + ':' + second;
    // console.log(peoplerarrive)
    // console.log(peopleName)
    // wx.request({
    //   url: 'http://localhost:8081/addReserveMess', 
    //   data: { linkManName: peopleName, phoneNum: peoplePhone, arriveTime: peoplerarrive, leaveTime: peopleleave, peopleNum: peopleNums, cardId: peopleCardId, deposit: peopleDespoit, housePrice: peoplePayPrice, houseTypeId: peopleTypeId, houseNumId: peopleNumId, housNum: peopleHouseNum},
    //   // header: { 'Content-type': 'application/x-www-form-urlencoded' } ,
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   method:'post',
    //   success:function(res){
    //     console.log(res.data)
    //     wx.showModal({
    //       title: '提示',
    //       content: '支付成功',
    //       success: function (res) {
    //         if (res.confirm) {
    //           console.log('用户点击确定')
    //         }
    //       }
    //     })
    //   }
    // })
  },
  getMess_image(){
    var that=this
    var tes = that.data.test;
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/prod/json/SearchProduct?_fxpcqlniredt=09031047311234998233&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003546&__gw_platform=H5',
      data: { "cityid": 2, "rentType": "0", "orderBy": 0, "pindex": 1, "keywords": "", "filterTitle": null, "cityname": "上海", "conds": [{ "cond": "date", "value": "2019-11-15,2019-11-16" }], "userDataPos": { "cityId": "2", "lat": "31.248194094262946", "lng": "121.4879869806514" }, "sequenceId": "4f4b07ce-16df-5f3e-691b-a1966096bd9b", "pageCode": "600003546", "head": { "cid": "09031139211104612799", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "2" }, { "name": "platform", "value": "IOS" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success: function(res) {
        console.log(res.data.product[0])
        that.setData({
          test: res.data.product
        })
      }
    })
  },
  /**
   * 选择入住人
   */
  formSubmit(e){
    console.log(e)
    var that = this;
    var name=e.detail.value.chinaName;
    var card=e.detail.value.cardId;
    if(name=="" || card==""){
      wx.showModal({
        title: '提示',
        content: '请输入完整信息！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    that.setData({
      chinaName: e.detail.value.chinaName,
      cardId: e.detail.value.cardId
    })
    console.log(that.data.chinaName)
    console.log(that.data.cardId)
  },

  /**
   * 编辑入住人
   */
  a_formSubmit(e){
    console.log(e)
    var names = e.detail.value.chinaNames;
    var cards = e.detail.value.cardIds
    var namreg = /^[u4E00-u9FA5]+$/;
    if (names=='') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        duration: 2000,
      })
    }
    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cards)) {
      wx.showToast({
        title: '请输入正确的证件号',
        icon: 'none',
        duration: 2000,
      })
    } else {
      return true
    }
    this.setData({
      chinaNames: e.detail.value.chinaNames,
      cardIds: e.detail.value.cardIds,
      editMessUser:'none',
      addMessUsermore:'block'
    })
  },
  
})