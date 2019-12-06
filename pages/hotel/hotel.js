const app = getApp()
var util=require("../../utils/data.js")
var datas = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getMessById:null,
    stayTimes:'1晚',
    arriveWeekTime:'周四',
    leaveWeekTime: '周五',
    livepeopleName:'孙燕然',
    chinaName:'',
    cardId:'',
    cusId:'',
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
    tests:null,
    city_id : 2,
    city : '上海',
    room_id: 776248552,
    startTime: '2019-12-06',
    endTime:'2019-12-07',
    showmoreMessit:'display:none',
    selectMore:0,
    boxSelectMore:0,
    getMessCust:'',
    getMessSorts:null,
    tarShow:'block',
    tarClose:'none',
    checkedTar:null,
    ind:false,
    getMessSorts_show:[],
    // colorBorder: 'border: 1px solid #999;',
    checkboxSelected:null,
    getMessCustomer:null,
    dex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.room_id != null){
      var start = options.startTime
      var end = options.endTime
      var arriveWeekTime = getMyDay(new Date(start))
      var leaveWeekTime = getMyDay(new Date(end))
      this.setData({
        city_id: options.city_id,
        city: options.city,
        room_id: options.room_id,
        startTime: options.startTime,
        endTime: options.endTime,
        stayTimes : day,
        arriveWeekTime: arriveWeekTime,
        leaveWeekTime: leaveWeekTime
      })
    }
    this.onLoads()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.room_infomation()
    this.room_Mess()
    var that = this
    that.getMessSort()
    .then(res => {
      that.data.getMessSorts['0'].isSelected = true
      that.setData({
        getMessSorts: that.data.getMessSorts
      })
      var item = this.data.getMessSorts['0'];
      item.isSelected = item.isSelected;
      if (item.isSelected) {
        this.data.getMessSorts_show.push(item)
        this.setData({
          getMessSorts: this.data.getMessSorts,
          getMessSorts_show: this.data.getMessSorts_show
        });
      }
    })
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
      boxSelectMore:1,
    })
  },
  messAll_close(){
    this.setData({
      facility_show:'none',
      showAll: 'block',
      closeAll: 'none',
      boxSelectMore:0,
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
      it_show:'block',
      selectMore:1
    })
  },
  iteclose_close(){
    this.setData({
      itshowAll: 'block',
      itcloseAll: 'none',
      it_show:'none',
      selectMore: 0
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
  addMessUsermoreShow(e){
    var that = this
    that.data.getMessCust['0'].isSelected = true
    that.setData({
      getMessCust: that.data.getMessCust,
      addMessUsermore: 'block',
      hotelMess: 'none',
    })
  },
  addMessUsermoreClose(){
    var that=this
    // that.getMessSort()
    //   .then(res => {
    //     that.data.getMessSorts['0'].isSelected = true
    //     that.setData({
    //       getMessSorts: that.data.getMessSorts
    //     })
    // })
    that.setData({
      addMessUsermore: 'none',
      hotelMess: 'block'
    })
  },
  addMoreEdit(){
    var that=this
    wx.request({
      url: 'http://hotel.51mypc.cn/getMessById',
      data: { cusId: this.data.getMessCust[0].cId},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      success:(res)=>{
        console.log(res.data)
        that.setData({
          getMessById:res.data
        })
      }
    })
    this.setData({
      addMessUsermore:'none',
      editMessUser:'block',
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
  activesShow(){
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
  activeShow(e){
    var index = e.currentTarget.dataset.index;
    var item = this.data.getMessSorts[index];
    item.isSelected = !item.isSelected;
    if (item.isSelected){
      this.data.getMessSorts_show.push(item)
      this.setData({
        getMessSorts: this.data.getMessSorts,
        getMessSorts_show: this.data.getMessSorts_show
      });
    }else{
      this.data.getMessSorts_show.splice((index-1),1)
      this.setData({
        getMessSorts: this.data.getMessSorts,
        getMessSorts_show: this.data.getMessSorts_show
      });
    }
    this.setData({
      dex:index
    })
    // console.log(this.data.dex)
  },
  chinaNamesInput:function(e){
     this.setData({
       chinaNames: e.detail.value
     })
  },
  messTar_Show(e){
    // this.setData({
    //   checkboxSelected: e.currentTarget.dataset.index,
    // })
    var index = e.currentTarget.dataset.index;
    var item = this.data.getMessCust[index];
    item.isSelected = !item.isSelected;
    this.setData({
      getMessCust: this.data.getMessCust,
    });
    console.log(item)
  },
  messTar_Close(){
    this.setData({
      tarShow: 'block',
      tarClose: 'none',
    })
  },

  /**
   * 获取预订房间信息
   */
  room_infomation(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/12455/json/LegendProductDetail?_fxpcqlniredt=09031079310803566627&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003547&__gw_platform=H5',
      data: `{ "pid": ${that.data.room_id}, "cktime": "${that.data.startTime}", "ottime": "${that.data.endTime}", "head": { "cid": "09031079310803566627", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "webp", "value": "1" }, { "name": "cityid", "value": "${that.data.city_id}" }, { "name": "platform", "value": "Other" }, { "name": "source", "value": "2" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" }`,
      method:'post',
      success: res =>{
        console.log(res.data.product)
        that.setData({
          test: res.data.product
        })
      }
    })
    
  },
  room_Mess(){
    var that = this
    wx.request({
      url: 'https://m.ctrip.com/restapi/soa2/16593/getHouse?_fxpcqlniredt=09031020411241191017&__gw_appid=99999999&__gw_ver=1.0&__gw_from=600003553&__gw_platform=H5',
      data: { "args": "{\"parameter\":{\"unitID\":8491554}}", "head": { "cid": "09031020411241191017", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": null, "extension": [{ "name": "allianceSid", "value": "1693366" }, { "name": "allianceId", "value": "66672" }, { "name": "awakeUnion", "value": "{\"OUID\":\"\",\"AllianceID\":\"66672\",\"SID\":\"1693366\",\"SourceID\":\"\",\"AppID\":\"\",\"OpenID\":\"\"}" }, { "name": "terminaltype", "value": "20" }, { "name": "devicetype", "value": "iPhone" }, { "name": "devicebrand", "value": "undefined" }, { "name": "devicephone", "value": "iPhone" }, { "name": "browsername", "value": "Safari" }, { "name": "browserver", "value": "604.1" }, { "name": "os", "value": "IOS" }, { "name": "osver", "value": "11.0" }, { "name": "channelid", "value": "2" }, { "name": "page", "value": "600003553" }, { "name": "refpage", "value": "0e6c9d5b-5682-edd2-8fc6-f82fbab725e0" }, { "name": "currentpage", "value": "cae096af-0263-df95-ce64-98f47841b54c" }, { "name": "pagename", "value": "book" }, { "name": "vid", "value": "1574666495251.1ihilu" }, { "name": "la", "value": "" }, { "name": "lo", "value": "" }, { "name": "geoType", "value": "" }, { "name": "traceid", "value": "c1dc266d-646c-a557-b1a0-fd5ebb958c05" }, { "name": "ust", "value": "10001" }, { "name": "protocal", "value": "https" }] }, "contentType": "json" },
      method: 'post',
      success: (res) => {
        that.setData({
          tests: JSON.parse(res.data.result).data
        })
      }
    })
  },

  /**
   * 选择入住人
   */
  formSubmit(e){
    var that = this;
    var name=e.detail.value.chinaName;
    var card=e.detail.value.cardId;

    if(name=="" || card==""){
      wx.showToast({
        title: '请输入完整信息',
        icon: 'none',
        duration: 2000,
      })
    }
    if (!/^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(name)) {
      wx.showToast({
        title: '请输入正确的姓名',
        icon: 'none',
        duration: 2000,
      })
    }
    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(card)) {
      wx.showToast({
        title: '请输入正确的身份证',
        icon: 'none',
        duration: 2000,
      })
    } 
    if (name !="" && card !="" && /^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(name) && /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(card)){
      that.setData({
        chinaName: e.detail.value.chinaName,
        cardId: e.detail.value.cardId
      })
      wx.request({
        url: 'http://hotel.51mypc.cn/addMessCustomer',
        data: { cusName: that.data.chinaName, cusCardId: that.data.cardId },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        success: (res) => {
          this.onLoad()
          that.setData({
            name: '',
            cardId: ''
          })
        }
      })
    }
    
  },
  onLoads(){
    var that = this
    return new Promise(function (resolve, reject) {
    wx.request({
      url: 'http://hotel.51mypc.cn/getMessCustomer',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'post',
      success: (res) => {
        var getMessCust = []
        res.data.forEach(item => {
          item['isSelected'] = false
          getMessCust.push(item)
        })
        that.setData({
          getMessCust: getMessCust,
        })
      }
    })
    })
  },
  getMessSort(){
    var that = this
    return new Promise(function (resolve, reject) {
      wx.request({
        url: 'http://hotel.51mypc.cn/getMessCustomerSort',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'post',
        success: (res) => {
          var getMessSorts = []
          res.data.forEach(item => {
            item['isSelected'] = false
            getMessSorts.push(item)
          })
          that.setData({
            getMessSorts: getMessSorts
          })
          resolve(222)
        }
      })
    })
  },
  /**
   * 编辑入住人
   */
  a_formSubmit(e){
    var peopleName=this.data.livepeopleName;
    var names = e.detail.value.chinaNames;
    var cards = e.detail.value.cardIds
    var namreg = /^[u4E00-u9FA5]+$/;
    if (!/^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(names)){
      wx.showToast({
        title: '请输入正确的姓名',
        icon: 'none',
        duration: 2000,
      })
    }
    if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cards)) {
      wx.showToast({
        title: '请输入正确的身份证',
        icon: 'none',
        duration: 2000,
      })
    } 
    if (/^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(names) && /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cards)){
      this.setData({
        chinaNames: names,
        cardIds: cards,
        peopleName:names,
        editMessUser: 'none',
        addMessUsermore: 'block'
      })
    }
  },
  // edit_name(e){
  //   var names = e.detail.value.chinaNames;
  //   if (!/^((?![\u3000-\u303F])[\u2E80-\uFE4F]|\·)*(?![\u3000-\u303F])[\u2E80-\uFE4F](\·)*$/.test(names)) {
  //     wx.showToast({
  //       title: '请输入正确的姓名',
  //       icon: 'none',
  //       duration: 2000,
  //     })
  //   }
  // },
  // edit_cardId(e){
  //   var cards = e.detail.value.cardIds;
  //   if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(cards)) {
  //     wx.showToast({
  //       title: '请输入正确的身份证',
  //       icon: 'none',
  //       duration: 2000,
  //     })
  //   }
  // },
  getMyDay(date) {
    var week;
    if (date.getDay() == 0) week = "周日";
    if (date.getDay() == 1) week = "周一";
    if (date.getDay() == 2) week = "周二";
    if (date.getDay() == 3) week = "周三";
    if (date.getDay() == 4) week = "周四";
    if (date.getDay() == 5) week = "周五";
    if (date.getDay() == 6) week = "周六";
    return week;
  },
  spendPrice:function(){
    console.log(this.data.test.price.price)
    wx.navigateTo({
      url: '../baidu/baidu',
      success:(res)=>{
        console.log(1)
        console.log(res)
        
      }
    })
    // wx.request({
    //   url: `http://127.0.0.1:8089/page1?price=${this.data.test.price.price}`,
    //   method:'get',
    //   header: {'Content-Type': 'application/x-www-form-urlencoded'},
    //   success:(res)=>{
    //     console.log(1)
    //     console.log(res)
    //     wx.navigateTo({
    //       url: 'http://127.0.0.1:8089/success.html', //调转页面路径
    //       success: function () {

    //       }, //成功后的回调；
    //       fail: function () { }, //失败后的回调；
    //       complete: function () { } //结束后的回调(成功，失败都会执行)
    //     })
    //   }
    // })
  },
})