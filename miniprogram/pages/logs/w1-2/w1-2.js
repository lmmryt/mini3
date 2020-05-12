// pages/logs/w1-2/w1-2.js
let VideoUrlExchange=""
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:"膝关节屈曲运动",
        VideoUrl:"https://6170-app-ti63f-1301846561.tcb.qcloud.la/flextion.mp4?sign=4b85d3cd9e9542ff137eca85bf87ebbd&t=1589090520", 
      },
      {
        title:"直腿抬高运动 ",
        VideoUrl:"/static/w1-2_video/lift.mp4",
      },
    ]
  },
  uploadVideo(){
    wx.chooseVideo({
      success: chooseResult => {
  
        // 将视频上传至云存储空间
        console.log("视频选择完成",chooseResult)
        console.log("上传中······")
        wx.cloud.uploadFile({
          // 指定上传到的云路径
          cloudPath: new Date().getTime() + '.MP4',
  
          // 指定要上传的文件的小程序临时文件路径，也即刚刚选中的视频，所在开发工具中的临时位置
          filePath01: '/static/w1-2_video/flextion.mp4' ,
          filePath02: '/static/w1-2_video/lift.mp4' ,
          // 成功回调
          success: res => {
            console.log('上传成功，路径为：', res.fileID)
            VideoUrlExchange = res.fileID
            console.log(VideoUrlExchange)
            //2. 初始化视频数据
            this.setData({
              VideoUrl: VideoUrlExchange
            }) 
            }
        })
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