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
    commentId:""//回复一级评论的id
  },
  inputs: function (e) {
    this.setData({ publish: e.detail.value });
  },
  /**
   * 发送问题
   */
  send_publish: function (e) {
    // console.log(this.data.publish) 
    var {publish,commentId} = this.data;
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
      if(show_publish==""&& commentId==""){
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
      }else{
        AddRemarkServlet(app.globalData.openid, publish,commentId).then(res => {
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
    }
  },
  onLoad: function (options) {
    console.log(options)
    const {contentId,show_publish} = options;
    this.setData({contentId,show_publish})
  },
  onShow: function () {

  },

})