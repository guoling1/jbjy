// pages/newsDetail/newsDetail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/read.php?id='+options.id,
      success: function (res) {
        if (res.data.code == "100") {
          console.log(res.data.data)
          // res.data.data.picurl = res.data.data.picurl.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
          WxParse.wxParse('content', 'html', res.data.data.content, _this, 15);
          _this.setData({ news: res.data.data })
          
        }
      }
    })
  },


})