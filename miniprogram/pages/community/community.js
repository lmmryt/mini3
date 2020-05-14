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
  // 删除二级评论
  delcomment() {
    wx.showModal({
      title: '',
      content: '确定要删除该评论？',
      showCancel: true,//是否显示取消按钮
      cancelColor: 'green',//取消文字的颜色
      confirmText: "删除",//默认是“确定”
      confirmColor: 'red',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
          
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  },
  // 回复评论
  comment(e) {
    console.log(e.currentTarget)
    const { contentId, con } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/community/publish/publish?commentId=${contentId}&show_publish=${con}`,
    })

  }
})