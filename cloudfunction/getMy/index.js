// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// let db = cloud.database();
exports.main = async (event, context) => {
  var { userInfo } = event;
  var openid = userInfo.openId;
  return openid;
}