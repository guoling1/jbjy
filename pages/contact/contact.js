// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    hotline: ''
  },
  // 拨打电话
  phoneCall:function(e){
    var tel = e.currentTarget.dataset.tel;
    console.log(e)
    wx.makePhoneCall({
      phoneNumber: tel,
    })
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
    var _this = this;
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/contact.php?method=get',
      success: function (res) {
        _this.setData({ address: res.data.address, hotline: res.data.hotline })
      }
    })
  },
})