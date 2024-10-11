//Fri Oct 11 2024 15:11:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
* 软件名称：Q必达(APP或小程序)
*
* 版本：0.2（增加自动兑换功能）
*
* 账号密码登录，账号密码之间用&隔开
*
* 定时  0 8 * * *
*
* 变量名称：qbd
*
* ##Q必达 
* export hlToken="账号1&密码1"
*  
* 奖励：积分转换成余额，余额在寄快递时可以抵扣
*
*/

const axios = require("axios");
async function login(_0x3e8e57, _0x45b2b5) {
  const _0x23fb6d = "http://xcx.wanhuida888.com/ht/web/login/loginNew?t=" + Date["now"]();
  const _0x36d67e = {
    "Accept-Language": "zh-CN,zh;q=0.8",
    "User-Agent": "okhttp-okgo/jeasonlzy",
    "source": "ANDROID",
    "appId": "com.qsongq.fjqexpress",
    "version": "1835",
    "group": "",
    "token": "",
    "cookie": "group=",
    "Content-Type": "application/json;charset=utf-8",
    "Host": "xcx.wanhuida888.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  const _0x13826d = {
    "password": _0x45b2b5,
    "account": _0x3e8e57
  };
  try {
    console["log"]("\u5C1D\u8BD5\u767B\u5F55\u8D26\u53F7: " + _0x3e8e57);
    const _0x190ff6 = await axios["post"](_0x23fb6d, _0x13826d, {
      "headers": _0x36d67e
    });
    if (_0x190ff6["data"]["code"] === 0 && _0x190ff6["data"]["msg"] === "\u6210\u529F") {
      const _0xebc260 = _0x190ff6["data"]["data"]["token"];
      console["log"]("\u8D26\u53F7\u767B\u5F55\u6210\u529F");
      console["log"]("\u8D26\u53F7\u767B\u5F55\u6210\u529F");
      return _0xebc260;
    } else {
      console["error"]("\u767B\u5F55\u5931\u8D25: " + _0x190ff6["data"]["msg"]);
      return null;
    }
  } catch (_0x808c4d) {
    console["error"](_0x808c4d);
    return null;
  }
}
async function sign(_0x4a46f1) {
  const _0x478dbb = "http://a2e403quwt.wuliucps.com/ht/web/mine/signIn?t=" + Date["now"]();
  const _0x22dbd6 = {
    "Accept-Language": "zh-CN,zh;q=0.8",
    "User-Agent": "okhttp-okgo/jeasonlzy",
    "source": "ANDROID",
    "appId": "com.qsongq.fjqexpress",
    "version": "1835",
    "token": _0x4a46f1,
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "0",
    "Host": "a2e403quwt.wuliucps.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  try {
    const _0x55fb0d = await axios["post"](_0x478dbb, null, {
      "headers": _0x22dbd6
    });
    const _0x31f26c = _0x55fb0d["data"]["msg"];
    console["log"]("\u8D26\u53F7\u7B7E\u5230\u7ED3\u679C: " + _0x31f26c);
  } catch (_0x1fbea4) {
    console["error"](_0x1fbea4);
  }
}
async function video(_0x4dea4f) {
  const _0x5b1c29 = "https://xcx.wanhuida888.com/ht/web/task/watchVideo?t=" + Date["now"]();
  const _0xc0c9c2 = {
    "Host": "xcx.wanhuida888.com",
    "Connection": "keep-alive",
    "Content-Length": "2",
    "charset": "utf-8",
    "sharecode": "83NPKAI",
    "appid": "wx92e73ad679eee047",
    "User-Agent": "Mozilla/5.0 (Linux; Android 12; RMX3562 Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160065 MMWEBSDK/20231202 MMWEBID/2307 MicroMessenger/8.0.47.2560(0x28002F30) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
    "content-type": "application/json",
    "source": "MINIAPP",
    "Accept-Encoding": "gzip,compress,br,deflate",
    "version": "108",
    "token": _0x4dea4f,
    "Referer": "https://servicewechat.com/wx92e73ad679eee047/70/page-frame.html"
  };
  const _0x21cab4 = {};
  try {
    for (let _0x1897b9 = 0; _0x1897b9 < 3; _0x1897b9++) {
      const _0x11449a = await axios["post"](_0x5b1c29, _0x21cab4, {
        "headers": _0xc0c9c2
      });
      const _0x4c82f4 = _0x11449a["data"]["msg"];
      console["log"]("\u5E7F\u544A\u83B7\u53D6\u79EF\u5206: " + _0x4c82f4);
      await new Promise(_0x106117 => setTimeout(_0x106117, 20000 + _0x1897b9 * 10000));
    }
  } catch (_0x22f366) {
    console["error"](_0x22f366);
  }
}
async function turn_integral(_0x2fe8a6) {
  const _0x233c8a = "http://r2mslggpvtq3.wuliucps.com/ht/web/mine/turnIntegral?t=" + Date["now"]();
  const _0x3af74d = {
    "Accept-Language": "zh-Hans-CN;q=1",
    "User-Agent": "QBD/9.6 (iPhone; iOS 17.4.1; Scale/3.00)",
    "source": "IOS",
    "appId": "com.QBD.www",
    "Token": _0x2fe8a6,
    "group": "",
    "Content-Type": "application/json",
    "Connection": "keep-alive"
  };
  const _0x5c85ec = {
    "integral": "1000"
  };
  try {
    const _0x7ed73c = await axios["post"](_0x233c8a, _0x5c85ec, {
      "headers": _0x3af74d
    });
    const _0x4ef3b5 = _0x7ed73c["data"]["msg"];
    console["log"]("\u79EF\u5206\u8F6C\u6362\u7ED3\u679C: " + _0x4ef3b5);
  } catch (_0x114132) {
    console["error"](_0x114132);
  }
}
async function main() {
  const _0x2d619b = process["env"]["qbd"];
  if (!_0x2d619b) {
    console["log"]("\u8BF7\u8BBE\u7F6Eqbd\u73AF\u5883\u53D8\u91CF\u5728\u8FD0\u884C");
    return;
  }
  const _0x2b45aa = _0x2d619b["split"]("\n")["flatMap"](_0x3cca61 => _0x3cca61["split"]("@"));
  for (let _0x5c4b65 = 0; _0x5c4b65 < _0x2b45aa["length"]; _0x5c4b65++) {
    const [_0x25eabb, _0xbaed82] = _0x2b45aa[_0x5c4b65]["split"]("&");
    console["log"]("=====\u5F00\u59CB\u6267\u884C\u7B2C" + (_0x5c4b65 + 1) + "\u4E2A\u8D26\u53F7\u4EFB\u52A1=====");
    const _0x228dc7 = await login(_0x25eabb, _0xbaed82);
    if (_0x228dc7) {
      console["log"]("---------\u5F00\u59CB\u6267\u884C\u7B7E\u5230\u4EFB\u52A1");
      await sign(_0x228dc7);
      console["log"]("---------\u5F00\u59CB\u6267\u884C\u5E7F\u544A\u4EFB\u52A1");
      await video(_0x228dc7);
      console["log"]("---------\u5F00\u59CB\u6267\u884C\u79EF\u5206\u8F6C\u6362\u4EFB\u52A1");
      await turn_integral(_0x228dc7);
    } else {
      console["log"]("\u767B\u5F55\u5931\u8D25\uFF0C\u8DF3\u8FC7\u540E\u7EED\u4EFB\u52A1");
    }
  }
}
main();