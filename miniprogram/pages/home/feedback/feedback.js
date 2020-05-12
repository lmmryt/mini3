// pages/home/feedback/feedback.js
var that = this;
var app = getApp();

Page({
  task_info:{
  
  }, 
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    realvalue:'',
  },
  inputs:function(e){
    this.setData({realvalue:e.detail.value});
  },
  /**
   * 发送问题
   */
  sendinfo:function(){
    if (this.data.realvalue == null || this.data.realvalue=="") {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })   
    }
    else{console.log(this.data.realvalue)
        wx.request({
          url: 'http://127.0.0.1:8000/feedback/content/',
          data: {realvalue:this.data.realvalue},
          dataType: "json",
          method: 'POST',
          success: function(res){
            console.log(res);
            wx.showToast({
              title: '发送成功，感谢您的反馈',
              icon: 'success'
            })
          },
          fail:function(){
            wx.showToast({
              title: '发送失败',
              icon: 'none'
            })
          },
        })
      }
  },
  login: function () {
    
  },
  
 
  onPullDownRefresh: function () {
    
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

  },
  
})