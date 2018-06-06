//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: ['../image/swiper1.png', '../image/swiper2.png'],
    news:[],
    page:0,
    more:false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var _this = this;
    // 获取轮播图图片
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/ad.php?method=get',
      success: function (res) {
        if (res.data.code == "100") {
          for(var i=0;i<res.data.data.length;i++){
            res.data.data[i].picurl = res.data.data[i].picurl.replace(/http:\/\/localhost/,"https://jb.hdjincheng.cn")
          }
          _this.setData({ swiperData: res.data.data })
        }
      }
    })

    // 获取新闻资讯
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/news.php?method=get',
      success: function(res){
        if(res.data.code=="100"){
          for (var i = 0; i < res.data.data.length; i++) {
            res.data.data[i].picurl = res.data.data[i].picurl.replace(/http:\/\/localhost/, "https://jb.hdjincheng.cn")
          }
          _this.setData({ news: res.data.data })
        }
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 查看新闻详情
  toDetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail?id=' + e.currentTarget.dataset.id,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    // 显示加载图标  
    // wx.showLoading({
    //   title: '玩命加载中',
    // })
    // 页数+1  
    that.data.page = that.data.page + 1;
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/news.php?method=get&page=' + that.data.page,
      method: "GET",
      // 请求头部  
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        // 回调函数  
        var moment_list = that.data.news;

        for (var i = 0; i < res.data.data.length; i++) {
          moment_list.push(res.data.data[i]);
        }
        // 设置数据  
        that.setData({
          news: that.data.news
        })
        // 隐藏加载框  
        wx.hideLoading();
      }
    })  
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
