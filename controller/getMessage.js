/**
 * Created by nali on 16/11/1.
 */

const app = require("../server/server");

// 从中间服务器获取accessToken
app.post("/getMessage", function (req, res) {
    let ToUserName = req.body.ToUserName;
    let Content = req.body.Content;
    console.log("消息发送者:",ToUserName);
    console.log("内容:",Content);
});
