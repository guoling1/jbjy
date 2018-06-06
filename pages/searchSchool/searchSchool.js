// pages/searchSchool/searchSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2018',
    array: ['请选择','文科', '理科'],
    topicClass:'请选择',
    score:''
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', this.data.array)
    this.setData({
      topicClass: this.data.array[e.detail.value]
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  search:function(e){
    console.log(e)
    var flag = true;
  if(e.detail.value.score==""||e.detail.value.topicClass=="请选择"){
    wx.showToast({
      title: '请填写完整信息',
      icon: 'loading',
      duration: 1000
    })
  }else{
    var num = this.data.topicClass=="文科"?1:2
    wx.navigateTo({
      url: '/pages/searchSchoolResult/searchSchoolResult?topicClass=' + num + '&nianfen=' + e.detail.value.date + '&fenshu=' + e.detail.value.score,
    })
  }
    
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