// pages/baidu/baidu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  continues(){
    var url = 'http://127.0.0.1:8089/page1'; //填写要<a href="https://www.mywlaq.cn/archives/tag/%e8%b7%b3%e8%bd%ac" title="查看更多关于跳转的文章" target="_blank">跳转</a>到的网址

    document.querySelector('body').addEventListener('touchmove', function (event) {
      event.preventDefault();
    });
    window.mobileUtil = (function (win, doc) {
      var UA = navigator.userAgent,
        isAndroid = /android|adr/gi.test(UA),
        isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
        isBlackBerry = /BlackBerry/i.test(UA),
        isWindowPhone = /IEMobile/i.test(UA),
        isMobile = isAndroid || isIOS || isBlackBerry || isWindowPhone;
      return {
        isAndroid: isAndroid,
        isIOS: isIOS,
        isMobile: isMobile,
        isWeixin: /MicroMessenger/gi.test(UA),
        isQQ: /QQ/gi.test(UA)
      };
    })(window, document);

    if (mobileUtil.isWeixin) {
      if (mobileUtil.isIOS) {
        url = "https://t.asczwa.com/taobao?backurl=" + encodeURIComponent(url);
        document.getElementById('BtnClick').href = url;
      } else if (mobileUtil.isAndroid) {
        url = '?open=1';
        document.getElementById('BtnClick').href = url;
        var iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = url;
        document.body.appendChild(iframe);
      }
    } else {
      document.getElementById('BtnClick').href = url;
      // window.location.replace(url);
    }
    //setTimeout('WeixinJSBridge.invoke("closeWindow", {}, function(e) {})', 2000);

  }
 

})