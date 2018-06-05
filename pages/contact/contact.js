// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  goToBigMap: function () {
    // wx.navigateTo({
    //   url:'../bigmap/bigmap'
    // })
    console.log(1)
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        // console.log(res)
        // var latitude = res.latitude
        // var longitude = res.longitude
        wx.openLocation({
          latitude: 36.627373,
          longitude: 114.52785,
          scale: 14,
          name: "金榜教育",
          address: '滏东北大街与联纺东路路口南行500米远大国门B座12层'
        })
      }
    })
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
  
  }
})