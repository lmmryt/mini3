import request from './network.js'
// 添加评论 
export function AddRemarkServlet(userId, content, commentId, replyUser, replyName, replyImg) {
  console.log(commentId, replyUser, replyName, replyImg)
  if (commentId != undefined && replyUser != undefined && replyName != undefined && replyImg != undefined) {
    return request({
      url: "/AddRemarkServlet",
      data: {
        userId, content
      }
    })
  } else {
    return request({
      url: "/AddRemarkServlet",
      data: {
        userId, content, commentId, replyUser, replyName, replyImg
      }
    })
  }

}
// 查看评论
export function GetRemarkServlet(userId) {
  if (userId) {
    return request({
      url: "/GetRemarkServlet",
      data: {
        userId
      }
    })
  } else {
    return request({
      url: "/GetRemarkServlet"
    })
  }

}
// 添加二级评论
