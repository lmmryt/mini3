import {
  GetRemarkServlet, AddRemarkServlet
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
      // {
      //   face_url: "/static/collection.png",
      //   user_name: "匿名用户 ",
      //   send_timestamp: "2020-05-04 21:23",
      //   content: "2222 ",
      //   comment: "你真棒",
      //   comment_user: "小花",
      //   comment_time: "2020-05-05 01:47",
      // },

    ],
    openid: "",

    userInfo: {}
  },
  publish: function () {
    wx.navigateTo({
      url: '/pages/community/publish/publish',
    })

  },

  onLoad: function (options) {

  },
  onShow: function () {
    GetRemarkServlet().then(res => {
      console.log(res)
      this.setData({
        list: res.data.list
      })
    })

  },
  // 删除评论
  delate() {

  },
  // 回复评论
  comment(e) {
    console.log(e.currentTarget)
    const {contentId,con} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/community/publish/publish?commentId=${contentId}&show_publish=${con}`,
    })

  }
})