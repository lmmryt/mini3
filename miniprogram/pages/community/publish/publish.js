// pages/community/publish/publish.js
import {
  AddRemarkServlet
} from '../../../service/addRemark';
var that = this;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publish: '',
    show_publish: '',
  },
  inputs: function (e) {
    this.setData({ publish: e.detail.value });
  },
  /**
   * 发送问题
   */
  send_publish: function (e) {
    // console.log(this.data.publish) 
    var publish = this.data.publish;
    //var pages = getCurrentPages();
    //var prevPage = pages[pages.length-2]
    //prevPage.show_publish(publish);
    //wx.navigateBack({})
    if (publish == null || publish == "") {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
    } else {
      // console.log(AddRemarkServlet)
      AddRemarkServlet(app.globalData.openid, publish).then(res => {
        // console.log(res);
        if (res.data.resStatus == "200") {
          wx.showToast({
            title: '发送成功',
            icon: 'success'
          })
          wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
          });
        }

      })
    }
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