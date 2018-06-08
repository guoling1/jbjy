// pages/enrolment/enrolment.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:0,
    introduce:'',
    benefit:'',
    condition:''
  },
  changeTab:function(e){
    this.setData({ selected: e.currentTarget.dataset.num})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 介绍
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=5',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('introduce', 'html', res.data.text, _this,15);
      }
    })
    // 好处
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=6',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('benefit', 'html', res.data.text, _this,15);
      }
    })
    // 条件
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=7',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('condition', 'html', res.data.text, _this,15);
      }
    })
  },

})