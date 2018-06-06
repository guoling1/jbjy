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
        WxParse.wxParse('education', 'html', res.data.text, _this);
      }
    })
    // 我们的服务
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/info.php?id=3',
      success: function (res) {
        res.data.text = res.data.text.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
        WxParse.wxParse('service', 'html', res.data.text, _this);
      }
    })
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
  
  }
})