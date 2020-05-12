import request from './network.js'

export function LoginServlet(userId, name, img) {
  return request({
    url: "/LoginServlet",
    data: {
      userId, name, img
    },
    method: "POST",
  })
}