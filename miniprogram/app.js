
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    }
    else {
      wx.cloud.init({
        env: 'weather-f6iii',//--->这里是云数据库的环境ID
        traceUser: true,
      })
    }

    this.getOpenid()
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo
    }
  },
  globalData: {
    userInfo: null,
    openid: ""

  },
  initUserInfo: function (res) {
    var info = {
      name: res.nickName,
      path: res.avatarUrl
    }
    this.globalData.userInfo = info;
    wx.setStorageSync("userInfo", info);
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  // 定义调用云函数获取openid
  getOpenid() {
    var _this = this;
    wx.cloud.callFunction({
      name: 'getMy',
      success: res => {
        // console.log(res)
        _this.globalData.openid = res.result;

        var userid = wx.getStorageSync('openid', res.result);
        if (userid != res.result) {
          wx.setStorageSync('userinfo', "");
        }
        wx.setStorageSync('openid', res.result);
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

  }
})