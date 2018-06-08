// pages/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:''
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
          res.data.data.picurl = res.data.data.picurl.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
          _this.setData({ news: res.data.data })
        }
      }
    })
  },


})