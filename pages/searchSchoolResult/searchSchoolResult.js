// pages/searchSchoolResult/searchSchoolResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    underList:[],
    hyperList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var topicClass = options.topicClass==1?'文科':'理科'
    // 冲高
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/school.php?method=search&a=searchRankingUnder&topicClass='+topicClass+'&nianfen='+options.nianfen+'&fenshu='+options.fenshu,
      success: function (res) {
          var arr=[]
          for (var i = 0; i < 5; i++) {
            arr.push(res.data.data.splice(0, 2))
          }
          this.setData({underList:arr})
        }
    })
    // 保底
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/school.php?method=search&a=searchRankingHyper&topicClass=' + topicClass + '&nianfen=' + options.nianfen + '&fenshu=' + options.fenshu,
      success: function (res) {
        if (res.data.code == "100") {
          var arr = []
          for (var i = 0; i < 5; i++) {
            arr.push(res.data.data.splice(0, 2))
          }
          this.setData({ hyperList: arr })
        }
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