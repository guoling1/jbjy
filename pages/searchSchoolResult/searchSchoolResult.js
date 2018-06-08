// pages/searchSchoolResult/searchSchoolResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    underList:[],
    hyperList:[],
    ranking:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var topicClass = options.topicClass==1?'文科':'理科'
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/school.php?method=ranking&topicClass=' + topicClass + '&nianfen=' + options.nianfen + '&fenshu=' + options.fenshu,
      success: function (res) {

        _this.setData({
          ranking: res.data.ranking
        })
      }
    })
    // 冲高
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/school.php?method=search&a=searchRankingUnder',
      data:{
        topicClass: topicClass,
        nianfen: options.nianfen,
        fenshu:options.fenshu

      },
      success: function (res) {
        console.log(res.data)
          var arr=[]
          for (var i = 0; i < 5; i++) {
            arr.push(res.data.data.splice(0, 2))
          }
          _this.setData({underList:arr})
        }
    })
    // 保底
    wx.request({
      url: 'https://jb.hdjincheng.cn/appbase/school.php?method=search&a=searchRankingHyper&topicClass=' + topicClass + '&nianfen=' + options.nianfen + '&fenshu=' + options.fenshu,
      success: function (res) {
          var arr = []
          for (var i = 0; i < 5; i++) {
            arr.push(res.data.data.splice(0, 2))
          }
          console.log(arr)
          _this.setData({ hyperList: arr })
        
      }
    })
  },
})