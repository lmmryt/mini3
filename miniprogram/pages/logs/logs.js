// pages/logs/logs.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',

  },
  gotow1:function(e){wx.navigateTo({
    url: '/pages/logs/w1-2/w1-2',
  })},
  gotow2:function(e){wx.navigateTo({
    url: '/pages/logs/w2-4/w2-4',
  })},
  gotow4:function(e){wx.navigateTo({
    url: '/logs/index/w4-6/w4-6',
  })},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      url: "‪C:\Users\Lenovo\Desktop\lit.mp4"
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