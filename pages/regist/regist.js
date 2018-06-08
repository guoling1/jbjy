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

})