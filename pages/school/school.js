// pages/school/school.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    middleSchool:'',
    university:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 专利高中
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=11',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('middleSchool', 'html', res.data.text, _this,15);
      }
    })
    // 降分学校
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=12',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('university', 'html', res.data.text, _this,15);
      }
    })
  },
})