// pages/regist/regist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    idCard:'',
    school:''
  },
  formSubmit:function(e){
    var that = this;
    wx.showModal({
      showCancel: false,
      title: '提示',
      content: '信息登记成功',
      success: function () {
        that.setData({
          name: '',
          phone: '',
          idCard: '',
          school: ''
        })
      }
    })
    wx.showToast({
      title: '注册失败',
      icon: 'loading',
      duration: 2000
    })
    var formData = e.detail.value
    wx.request({
      url: '/aa',
      data:formData,
      method:'post',
      success:function(){

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