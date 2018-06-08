// pages/cases/cases.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    case:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=14',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('case', 'html', res.data.text, _this,15);
      }
    })
  }
})