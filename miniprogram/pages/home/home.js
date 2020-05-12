// pages/home/home.js
import {
  LoginServlet
} from '../../service/index.js';
var app = getApp();

Page({
  b2:function(e){wx.navigateTo({
    url: '/pages/home/evaluation/evaluation',
  })},
  b3:function(e){wx.navigateTo({
    url: '/pages/home/feedback/feedback',
  })},
  b4:function(e){wx.navigateTo({
    url: '/pages/home/information/information',
  })},
  b5:function(e){wx.navigateTo({
    url: '/pages/home/collection/collection',
  })},
  

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:"用户名",
    path:"/pages/home/default.png",
    showIpt:true
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

   var {name,path} =  app.globalData.userInfo;
   this.setData({
     name,path
   })
   if(name&& path){
     this.setData({
       showIpt:false
     })
   }
  },
  bindGetUserInfo (e) {
    wx.openSetting({})
    var that = this;
    // console.log(e.detail.userInfo)
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              // console.log(res.userInfo)
              that.setData({
                name:res.userInfo.nickName,
                path:res.userInfo.avatarUrl})
              app.initUserInfo(res.userInfo);
              
              // 向后台发数据
              LoginServlet(app.globalData.openid,that.data.name,that.data.path).then(res=>{
                // console.log(res)
                console.log(that.data.canIUse)
                that.setData({
                  showIpt:false
                })
              })
            },
            fail:function(){
              console.log('fail',res)
              
            }
          })
        }
      }
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
    this.setData({
      userInfo: app.globalData.userInfo
    })

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