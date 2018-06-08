// pages/searchSchool/searchSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018',
    array: ['请选择', '文科', '理科'],
    topicClass: '请选择',
    score: '',
    ranking:'',
    isRanking:true
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
  search: function (e) {
    var _this = this;
    var flag = true;
    if (e.detail.value.score == "" || e.detail.value.topicClass == "请选择") {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'loading',
        duration: 1000
      })
    } else {
      wx.request({
        url: 'https://jb.hdjincheng.cn/appbase/school.php?method=ranking&topicClass=' + e.detail.value.topicClass + '&nianfen=' + e.detail.value.date + '&fenshu=' + e.detail.value.score,
        success: function (res) {
          
          _this.setData({
            ranking: res.data.ranking,
            isRanking:false
          })
        }
      })
    }

  },
})