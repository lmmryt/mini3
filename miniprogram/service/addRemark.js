import request from './network.js'
// 添加评论
export function AddRemarkServlet(userId, content) {
  return request({
    url: "/AddRemarkServlet",
    data: {
      userId, content
    }
  })
}
// 查看评论
export function GetRemarkServlet() {
  return request({
    url: "/AddRemarkServlet"
  })
}