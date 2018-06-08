// pages/about/about.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    education:'',
    service:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 金榜教育
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=2',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('education', 'html', res.data.text, _this,15);
      }
    })
    // 我们的服务
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=3',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('service', 'html', res.data.text, _this,10);
      }
    })
  },
})