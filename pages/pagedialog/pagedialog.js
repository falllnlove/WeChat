const app = getApp()
Page({
  data: {
    show: true,
    indicatorDots: false,

    autoplay: false,

    interval: 5000,

    duration: 1000,

    proList: null,

    name: "",

    phone: "",

    email: "",

    company: "",

    job: "",

    vip: "",
    buttons: [
      {
        type: 'default',
        className: '',
        text: '辅助操作',
        value: 0
      },
      {
        type: 'primary',
        className: '',
        text: '主操作',
        value: 1
      }
    ]
  },
  open: function () {
    this.setData({
      show: true
    })
  },
  buttontap(e) {
    console.log(e.detail)
  },
  qwer(){
     console.log("dsds")
  },
  formSubmit: function (e) {

    var name = e.detail.value.name;

    var phone = e.detail.value.phone;

    // mobile

    var email = e.detail.value.email;

    var company = e.detail.value.mobile;

    var job = e.detail.value.job;

    var vip = e.detail.value.vip;

    if (name == "" || phone == "" || email == "" || company == "" || job == "" || vip == "") {

      wx.showModal({

        title: '提示',

        content: '请输入完整信息！',

        success: function (res) {

          if (res.confirm) {

            console.log('用户点击确定')

          }

        }

      })

    } else {

      console.log(e.detail.value)

      // detail

    }

  },
});
