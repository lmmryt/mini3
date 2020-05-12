const baseUrl = "https://g301349b62.wicp.vip/xcx_web"

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || "get",
      data: options.data || {},
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: resolve,
      fail: (err) => {
        reject(err)
      }
    })
  })
}