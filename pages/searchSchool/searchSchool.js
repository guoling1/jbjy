// pages/searchSchool/searchSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2017',
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
})