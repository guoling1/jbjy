// pages/regist/regist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    idcard:'',
    school:''
  },
  formSubmit:function(e){
    var that = this;
    var formData = e.detail.value
    console.log(1)
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/reg.php?method=save',
      data:formData,
      success:function(res){
        if(res.data.code=="100"){
          wx.showModal({
            showCancel: false,
            title: '提示',
            content: '注册成功',
            success: function () {
              that.setData({
                name: '',
                phone: '',
                idcard: '',
                school: ''
              })
            }
          })
        }else{
          wx.showToast({
            title: '注册失败',
            icon: 'loading',
            duration: 2000
          })
        }
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