import {
  GetRemarkServlet
} from '../../service/addRemark';
var app = getApp()
var that = this;



Page({


  /**
   * 页面的初始数据
   */
  data: {

    //itemNme代表了每一条树洞
    list: [
      {
        face_url: "/static/collection.png",
        user_name: "匿名用户 ",
        send_timestamp: "2020-05-04 21:23",
        content: "2222 ",
        comment: "你真棒",
        comment_user: "小花",
        comment_time: "2020-05-05 01:47",
      },

    ],


  },
  publish: function () {
    wx.navigateTo({
      url: '/pages/community/publish/publish',
    })

  },

  onLoad: function (options) {
    GetRemarkServlet().then(res => {
      console.log(res)
    })

  },
  onShow: function () {

  }
})