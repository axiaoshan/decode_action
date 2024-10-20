//Sun Oct 20 2024 18:48:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("玩一玩_下单打卡全额返");
const _0x4a435b = $.isNode() ? require("./jdCookie.js") : "";
const _0x7cbdf = $.isNode() ? require("./sendNotify") : "";
const _0x3bae99 = require("./function/dylans");
const _0x408c54 = require("./function/dylib.js");
const _0x5958a4 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "10";
const _0x46c355 = process.env.WYW_DELAY ? process.env.WYW_DELAY : "5";
let _0x570bf3 = [];
let _0x299c41 = "";
let _0x171847 = 0;
let _0x1277a1 = {};
let _0xbcd030 = "";
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    _0x1277a1 = require("./function/proxy.js");
    $.dget = _0x1277a1.intoRequest($.get.bind($));
    $.dpost = _0x1277a1.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  var _0x2cc741 = new Buffer.from("64796C616E", "Hex").toString("utf8");
  Object.keys(_0x4a435b).forEach(_0x2b5503 => {
    _0x570bf3.push(_0x4a435b[_0x2b5503]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x570bf3 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x187291 => _0x187291.cookie)].filter(_0x3b1eb0 => !!_0x3b1eb0);
}
$.helpId = [];
$.fullId = [];
let _0x36a21e = process.env.WYW_DHID || "";
!(async () => {
  if (!_0x570bf3[0]) {
    {
      $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
        "open-url": "https://bean.m.jd.com/bean/signIndex.action"
      });
      return;
    }
  }
  console.log("当前版本：20240906");
  console.log("问题反馈：https://t.me/dylan_jdpro");
  console.log("入口：我的——玩一玩——下单全额返");
  for (let _0x471529 = 0; _0x471529 < _0x570bf3.length; _0x471529++) {
    {
      _0x299c41 = _0x570bf3[_0x471529];
      originCookie = _0x570bf3[_0x471529];
      if (_0x299c41) {
        $.UserName = decodeURIComponent(_0x299c41.match(/pt_pin=([^; ]+)(?=;?)/) && _0x299c41.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x471529 + 1;
        $.hotFlag = false;
        $.nickName = "";
        $.isLogin = true;
        $.outFlag = false;
        $.isban = false;
        $.hasRisk = false;
        $.nostart = false;
        $.cashList = [];
        console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        _0x5c4e5f();
        if (!$.isLogin) {
          const _0x3bc128 = {
            "open-url": "https://bean.m.jd.com/bean/signIndex.action"
          };
          $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x3bc128);
          $.isNode() && (await _0x7cbdf.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
          continue;
        }
        $.index != 1 && _0x1277a1.swip && (await _0x1277a1.swip());
        await _0x2082a5();
        if ($.outFlag || $.nostart) {
          break;
        }
      }
    }
  }
  _0xbcd030 && (await _0x7cbdf.sendNotify($.name, _0xbcd030));
})().catch(_0x985db7 => {
  return $.logErr(_0x985db7);
}).finally(() => {
  return $.done();
});
async function _0x52da94() {
  for (let _0x3e4343 = 0; _0x3e4343 < _0x570bf3.length; _0x3e4343++) {
    _0x299c41 = _0x570bf3[_0x3e4343];
    if (_0x299c41) {
      {
        $.UserName = decodeURIComponent(_0x299c41.match(/pt_pin=([^; ]+)(?=;?)/) && _0x299c41.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x3e4343 + 1;
        console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
        _0x5c4e5f();
        $.nonum = false;
        $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x34eb54 => !$.fullId.includes(_0x34eb54)), $.fullId = []);
        for (let _0x10c85f of $.helpId) {
          $.itemId = _0x10c85f;
          console.log("去助力 --> " + $.itemId);
          await _0x54391c("wanyiwan_assist");
          if ($.nonum) {
            break;
          }
          await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
        }
        if ($.outFlag) {
          break;
        }
      }
    }
  }
}
async function _0x2082a5() {
  try {
    $.signFreeOrderInfoList = "flag";
    $.signflag = false;
    try {
      await _0x54391c("signFreeHome");
    } catch (_0x1dd80b) {
      console.log(_0x1dd80b);
    }
    if ($.signFreeOrderInfoList === "flag") {
      {
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        try {
          await _0x54391c("signFreeHome");
        } catch (_0x568ac5) {
          console.log(_0x568ac5);
        }
        $.signFreeOrderInfoList === "flag" && (await _0x7cbdf.sendNotify($.name, "[账号" + $.index + "]" + $.UserName + " 获取打卡信息失败，去看看任务日志吧！"));
      }
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if ($.signFreeOrderInfoList.length != 0) {
      for (let _0x5f039e = 0; _0x5f039e < $.signFreeOrderInfoList.length; _0x5f039e++) {
        $.signfail = false;
        const _0x381fa1 = $.signFreeOrderInfoList[_0x5f039e].productName || "";
        const _0x346f8f = $.signFreeOrderInfoList[_0x5f039e].hasSignDays;
        const _0x1f6bbe = $.signFreeOrderInfoList[_0x5f039e].needSignDays;
        const _0xf0411 = $.signFreeOrderInfoList[_0x5f039e].jpNum;
        const _0x31da1d = $.signFreeOrderInfoList[_0x5f039e].combination;
        const _0x1d692c = $.signFreeOrderInfoList[_0x5f039e].needSignDays - $.signFreeOrderInfoList[_0x5f039e].hasSignDays;
        const _0x55b0b1 = $.signFreeOrderInfoList[_0x5f039e].orderId;
        console.log("商品名称：" + _0x381fa1 + "|打卡进度：" + _0x346f8f + "/" + _0x1f6bbe + "|返" + _0xf0411 + "奖票");
        if (_0x1f6bbe === _0x346f8f) {
          console.log("已打卡完成，去领奖！");
          _0xbcd030 += "[账号" + $.index + "]" + $.UserName + " " + _0x381fa1 + " 打卡完成，快去领取吧！\n ";
          continue;
        } else {
          if (_0x31da1d == 2) {
            console.log("今日已打卡, 还需打卡" + _0x1d692c);
            $.signflag = true;
            continue;
          }
        }
        if (!$.signflag) {
          console.log("\n去打卡...");
          try {
            await _0x54391c("signFreeSignIn", _0x55b0b1);
          } catch (_0x38675c) {
            console.log(_0x38675c);
          }
          if ($.signfail) {
            await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
            try {
              await _0x54391c("signFreeSignIn", _0x55b0b1);
            } catch (_0x5654cd) {
              console.log(_0x5654cd);
            }
          }
          $.signfail && (await _0x7cbdf.sendNotify($.name, "[账号" + $.index + "]" + $.UserName + " " + _0x381fa1 + "两次打卡失败，去app手动打卡吧，以免翻车！"));
        }
      }
    } else {
      console.log("没有 需要打卡的商品");
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x2f559f) {
    {
      console.log(_0x2f559f);
    }
  }
}
async function _0x54391c(_0x14166e, ..._0x204bc6) {
  if ($.outFlag || $.isban) {
    {
      return;
    }
  }
  let _0x4421f0 = "";
  let _0x573e24;
  let _0x4da882;
  let _0x5abf08 = "post";
  let _0x56ad8a = "https://api.m.jd.com/client.action";
  let _0x11343d = "signed_wh5";
  switch (_0x14166e) {
    case "wanyiwan_sign":
      const _0x33ed96 = {
        version: 7
      };
      _0x4421f0 = _0x33ed96;
      _0x573e24 = "d12dd";
      _0x4da882 = "wanyiwan_sign";
      break;
    case "wanyiwan_exchange_page":
      const _0x1e4d7c = {
        version: 7
      };
      _0x4421f0 = _0x1e4d7c;
      _0x4da882 = "wanyiwan_exchange_page";
      break;
    case "apTaskList":
      _0x56ad8a = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x5abf08 = "get";
      break;
    case "wanyiwan_exchange":
      const _0x5e9748 = {
        assignmentId: $.assignmentId,
        type: $.type,
        version: 7
      };
      _0x4421f0 = _0x5e9748;
      _0x4da882 = "wanyiwan_exchange";
      break;
    case "wanyiwan_withdraw":
      const _0x29b129 = {
        assignmentId: $.assignmentId,
        type: $.type,
        version: 7
      };
      _0x4421f0 = _0x29b129;
      _0x4da882 = "wanyiwan_withdraw";
      break;
    case "endTask":
      const _0x40f718 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 7
      };
      _0x4421f0 = _0x40f718;
      _0x573e24 = "89db2";
      _0x4da882 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x3306c2 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 7
      };
      _0x4421f0 = _0x3306c2;
      _0x4da882 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x33c91c = {
        inviteCode: $.itemId,
        version: 7
      };
      _0x4421f0 = _0x33c91c;
      _0x573e24 = "ba505";
      _0x4da882 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x56ad8a = "https://api.m.jd.com/api";
      const _0x18a4b3 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4421f0 = _0x18a4b3;
      _0x11343d = "activities_platform";
      _0x4da882 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x56ad8a = "https://api.m.jd.com/api";
      _0x4421f0 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(_0x5958a4)
      };
      _0x573e24 = "614f1";
      _0x11343d = "activities_platform";
      _0x4da882 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x56ad8a = "https://api.m.jd.com/api";
      const _0xb76722 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x4421f0 = _0xb76722;
      _0x573e24 = "25fac";
      _0x11343d = "activities_platform";
      _0x4da882 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x56ad8a = "https://api.m.jd.com/api";
      const _0x39e04c = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4421f0 = _0x39e04c;
      _0x573e24 = "5be1b";
      _0x11343d = "activity_platform_se";
      _0x4da882 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x56ad8a = "https://api.m.jd.com/api";
      const _0x2431c2 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x4421f0 = _0x2431c2;
      _0x573e24 = "89cfe";
      _0x11343d = "activity_platform_se";
      _0x4da882 = "superRedBagDraw";
      break;
    case "apCashWithDraw":
      _0x56ad8a = "https://api.m.jd.com/api";
      const _0x130f69 = {
        id: _0x204bc6[0].id,
        business: "superRedEnvelope",
        poolBaseId: _0x204bc6[0].poolBaseId,
        prizeGroupId: _0x204bc6[0].prizeGroupId,
        prizeBaseId: _0x204bc6[0].prizeBaseId,
        prizeType: 4,
        activityId: "2013"
      };
      const _0x118660 = {
        businessSource: "NONE",
        base: _0x130f69,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        channel: "1"
      };
      _0x4421f0 = _0x118660;
      _0x573e24 = "73bca";
      _0x11343d = "activities_platform";
      _0x4da882 = "apCashWithDraw";
      break;
    case "superRedBagList":
      _0x56ad8a = "http://api.m.jd.com/api";
      const _0x53f379 = {
        pageNum: _0x204bc6[0],
        pageSize: 100,
        linkId: "aE-1vg6_no2csxgXFuv3Kg",
        associateLinkId: "",
        business: "superRedEnvelope"
      };
      _0x4421f0 = _0x53f379;
      _0x573e24 = "f2b1d";
      _0x11343d = "activities_platform";
      _0x4da882 = "superRedBagList";
      break;
    case "signFreeHome":
      _0x56ad8a = "http://api.m.jd.com/";
      const _0x24e860 = {
        linkId: "sYO6FKzCauSlM7X01tVLVQ"
      };
      _0x4421f0 = _0x24e860;
      _0x573e24 = "9cca1";
      _0x11343d = "activities_platform";
      _0x4da882 = "signFreeHome";
      break;
    case "signFreeSignIn":
      _0x56ad8a = "http://api.m.jd.com/";
      const _0x33a951 = {
        linkId: "sYO6FKzCauSlM7X01tVLVQ",
        orderId: _0x204bc6[0]
      };
      _0x4421f0 = _0x33a951;
      _0x11343d = "activities_platform";
      _0x4da882 = "signFreeSignIn";
      break;
    default:
      console.log("错误" + _0x14166e);
  }
  if (_0x573e24) {
    let _0x6c8437 = {
      appId: _0x573e24,
      functionId: _0x4da882,
      body: _0x4421f0,
      appid: _0x11343d,
      clientVersion: "1.0.0",
      client: "H5",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x4421f0 = await _0x3bae99.getbody(_0x6c8437);
    if (!_0x4421f0) {
      return;
    }
  } else {
    if (_0x4421f0) {
      {
        _0x4421f0 = "functionId=" + _0x4da882 + "&body=" + encodeURIComponent(JSON.stringify(_0x4421f0)) + "&t=" + Date.now() + "&appid=" + _0x11343d + "&client=H5&clientVersion='1.0.0'&cthr=1&networkType=wifi";
      }
    }
  }
  let _0x1df214 = _0x1059c2(_0x56ad8a, _0x4421f0);
  return new Promise(async _0xf55b3c => {
    $["d" + _0x5abf08](_0x1df214, async (_0x170d02, _0x120540, _0x508f29) => {
      try {
        {
          if (_0x170d02) {
            if (_0x120540 && typeof _0x120540.statusCode != "undefined") {
              {
                if (_0x120540.statusCode == 493) {
                  if (_0x171847 < 6) {
                    _0x171847++;
                    await _0x54391c(_0x14166e);
                    return;
                  }
                  console.log("ip可能被限制，过10分钟后再执行脚本\n");
                  $.outFlag = true;
                }
              }
            }
            console.log("" + $.toStr(_0x170d02, _0x170d02));
          } else {
            if (_0x508f29.includes("doctype") && _0x171847 < 6) {
              _0x171847++;
              await _0x54391c(_0x14166e);
              return;
            }
            _0x171847 = 0;
            _0x316070(_0x14166e, _0x508f29);
          }
        }
      } catch (_0x12a9d3) {
        {
          console.log(_0x12a9d3, _0x120540);
        }
      } finally {
        _0xf55b3c();
      }
    });
  });
}
function _0x4c61e7(_0x2628f0) {
  let _0x3988a6 = "";
  switch (type) {
    case [_0x3988a6]:
      const _0x3bf348 = {
        ed: ed
      };
      _0xf1f6le = _0x3bf348;
      break;
    case [_0x3988a6]:
      const _0x970d40 = {
        bd: bd
      };
      _0xf1f6lc = _0x970d40;
      break;
    case [_0x3988a6]:
      const _0x260170 = {
        ed: ed
      };
      _0xf1f6lf = _0x260170;
      break;
    case [_0x3988a6]:
      const _0x337d93 = {
        ed: ed
      };
      _0xf1f6lg = _0x337d93;
      break;
    case [_0x3988a6]:
      const _0x5a1d1d = {
        ed: ed
      };
      _0xf1f6lv = _0x5a1d1d;
      break;
  }
}
async function _0x316070(_0x2e3239, _0x2ee819) {
  let _0x453aee = "";
  try {
    _0x453aee = JSON.parse(_0x2ee819);
  } catch (_0x4a2297) {
    console.log(_0x2e3239 + " 执行任务异常");
  }
  try {
    {
      switch (_0x2e3239) {
        case "award":
          _0x453aee.code == 0 ? _0x453aee.data.bizCode == 0 ? console.log("任务完成，获得" + _0x453aee.data.result.rewardCount + "奖票 🎫") : console.log(_0x453aee.data.bizMsg) : console.log(_0x453aee.message);
          break;
        case "wanyiwan_withdraw":
        case "wanyiwan_exchange":
          _0x453aee.code == 0 ? _0x453aee.data.bizCode == 0 ? console.log("兑换成功！") : console.log(_0x453aee.data.bizMsg) : console.log(_0x453aee.message);
          break;
        case "wanyiwan_exchange_page":
          _0x453aee.code == 0 ? _0x453aee.data.bizCode == 0 ? ($.isLogin = _0x453aee.data.result.isLogin || false, $.moreExchanges = _0x453aee.data.result.moreExchanges, $.score = _0x453aee.data.result.score, $.index == 1 && console.log("可兑换列表："), _0x453aee.data.result.moreExchanges.forEach(_0x427fc3 => {
            console.log("" + _0x427fc3.rewardName + (_0x427fc3.hasStock ? "(有库存)" : "(无库存)") + "|需" + _0x427fc3.exchangeScore + "奖票|兑换ID=> " + _0x427fc3.assignmentId);
          })) : console.log(_0x453aee.data.bizMsg) : console.log(_0x453aee.message);
          break;
        case "wanyiwan_assist":
          if (_0x453aee.code == 0) {
            if (_0x453aee.data.bizCode == 0) {
              console.log("✔️ 助力成功");
              $.nonum = true;
            } else {
              if (_0x453aee.data.bizMsg.includes("太多人") || _0x453aee.data.bizMsg.includes("重复")) {
                console.log("❌", _0x453aee.data.bizMsg);
                $.nonum = true;
              } else {
                _0x453aee.data.bizMsg.includes("已经完成") ? (console.log("❌", _0x453aee.data.bizMsg), $.fullId.push($.itemId)) : console.log("❌", _0x453aee.data.bizMsg);
              }
            }
          } else {
            console.log(_0x453aee.message);
          }
          break;
        case "wanyiwan_home":
          if (_0x453aee.code == 0) {
            if (_0x453aee.data.bizCode == 0) {
              {
                _0x453aee.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x453aee.data.result.popWindows[0].getScore, "奖票 🎫");
                console.log("当前奖票总量：" + _0x453aee.data.result.score + " 🎫");
                $.isLogin = _0x453aee.data?.["result"]?.["isLogin"];
                $.taskList = _0x453aee.data?.["result"]?.["taskBoard"] || [];
                $.signstatus = _0x453aee.data?.["result"]?.["signBoard"]?.["status"] || 0;
              }
            } else {
              {
                console.log(_0x453aee.data.bizMsg);
              }
            }
          } else {
            console.log(_0x453aee.message);
          }
          break;
        case "superRedBagList":
          _0x453aee.success ? $.bagList = _0x453aee.data.items || [] : console.log(_0x453aee.errMsg);
          break;
        case "signFreeHome":
          _0x453aee.success ? $.signFreeOrderInfoList = _0x453aee.data?.["signFreeOrderInfoList"] || [] : console.log(_0x453aee.errMsg);
          break;
        case "signFreeSignIn":
          _0x453aee.success ? console.log("今日打卡成功!") : (console.log(_0x453aee.errMsg), $.signfail = true);
          break;
        case "apCashWithDraw":
          if (_0x453aee.code == 0) {
            if (_0x453aee.data.message.indexOf("待发放") > -1) {
              console.log(_0x453aee.data.message);
              $.txfail = true;
            } else {
              if (_0x453aee.data.message.includes("上限")) {
                console.log(_0x453aee.data.message);
                $.txfail = false;
              } else {
                _0x453aee.data.message.includes("提现中") ? (console.log("提现成功"), $.txfail = false) : console.log(_0x453aee.data.message);
              }
            }
          } else {
            {
              console.log(_0x453aee.errMsg);
            }
          }
          break;
        case "superRedBagHome":
          _0x453aee.success ? ($.sceneStatus = _0x453aee.data.sceneStatus, $.nextLeftTime = _0x453aee.data.nextLeftTime) : console.log(_0x453aee.errMsg);
          break;
        case "superRedBagDraw":
          if (_0x453aee.success) {
            $.shakeLeftTime = _0x453aee.data.shakeLeftTime;
            const {
              prizeDrawVo = ""
            } = _0x453aee.data;
            if (prizeDrawVo) {
              switch (prizeDrawVo.prizeType) {
                case 24:
                  console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                  $.sucdraw++;
                  break;
                case 1:
                  console.log("获得: " + prizeDrawVo.prizeConfigName);
                  break;
                case 4:
                  console.log("获得: " + prizeDrawVo.amount + "现金💰️");
                  const _0x1cc365 = {
                    id: prizeDrawVo.id,
                    poolBaseId: 41486,
                    prizeGroupId: prizeDrawVo.prizeGroupId,
                    prizeBaseId: prizeDrawVo.prizeBaseId,
                    prizeType: prizeDrawVo.prizeType,
                    amount: prizeDrawVo.amount
                  };
                  $.cashList.push(_0x1cc365);
                  break;
                case 3:
                  console.log("获得: " + prizeDrawVo.amount + "京豆🥔");
                  break;
                case 2:
                  console.log("获得: " + prizeDrawVo.amount + "红包🧧");
                  break;
                default:
                  console.log(JSON.stringify(prizeDrawVo));
                  break;
              }
            } else {
              console.log(_0x2ee819);
            }
          } else {
            console.log(_0x453aee.errMsg);
          }
          break;
        case "startTask":
        case "turnHappyReceive":
        case "endTask":
          break;
        default:
          console.log(_0x2e3239 + " -> " + _0x2ee819);
      }
      typeof _0x453aee == "object" && _0x453aee.errorMessage && _0x453aee.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
    }
  } catch (_0x422316) {
    console.log(_0x2e3239 + " " + _0x422316);
  }
}
function _0x1059c2(_0x4882d7, _0x5f3fa0) {
  let _0x301faa = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: _0x299c41,
    "User-Agent": $.UA
  };
  const _0x57c29a = {
    url: _0x4882d7,
    headers: _0x301faa,
    timeout: 30000,
    ...(_0x5f3fa0 ? {
      body: _0x5f3fa0
    } : {})
  };
  return _0x57c29a;
}
async function _0x5c4e5f() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x97c644(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x97c644(_0x56facd) {
  _0x56facd = _0x56facd || 32;
  let _0x1070de = "abcdef0123456789";
  let _0x3ded03 = _0x1070de.length;
  let _0x429854 = "";
  for (i = 0; i < _0x56facd; i++) {
    _0x429854 += _0x1070de.charAt(Math.floor(Math.random() * _0x3ded03));
  }
  return _0x429854;
}
function _0x13f784(_0x149a12) {
  if (typeof _0x149a12 == "string") {
    try {
      {
        return JSON.parse(_0x149a12);
      }
    } catch (_0x2b1e12) {
      console.log(_0x2b1e12);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function _0x531d87() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x41316b => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x504a6b = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x504a6b.activityId;
    let _0x33b3d2 = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x504a6b,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x504a6b = await dyy.getbody(_0x33b3d2);
    const _0x269e8d = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: _0x299c41,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x2ef536 = {
      url: "https://api.m.jd.com/client.action?" + _0x504a6b + "&uuid=88888",
      headers: _0x269e8d,
      timeout: 30000
    };
    $.dget(_0x2ef536, async (_0x4277bd, _0x536ecf, _0xb83ab6) => {
      try {
        {
          _0xb83ab6 = _0xb83ab6 && _0xb83ab6.match(/jsonp_.*?\((.*?)\);/) && _0xb83ab6.match(/jsonp_.*?\((.*?)\);/)[1] || _0xb83ab6;
          let _0x56b329 = $.toObj(_0xb83ab6, _0xb83ab6);
          if (_0x56b329 && typeof _0x56b329 == "object") {
            {
              if (_0x56b329 && _0x56b329.success === true) {
                {
                  console.log("    " + _0x56b329.message);
                  $.errorJoinShop = _0x56b329.message;
                  if (_0x56b329.result && _0x56b329.result.giftInfo) {
                    for (let _0x54d860 of _0x56b329.result.giftInfo.giftList) {
                      console.log("入会获得:" + _0x54d860.discountString + _0x54d860.prizeName + _0x54d860.secondLineDesc);
                    }
                  }
                }
              } else {
                _0x56b329 && typeof _0x56b329 == "object" && _0x56b329.message ? ($.errorJoinShop = _0x56b329.message, console.log("" + (_0x56b329.message || ""))) : console.log(_0xb83ab6);
              }
            }
          } else {
            console.log(_0xb83ab6);
          }
        }
      } catch (_0x43f98b) {
        $.logErr(_0x43f98b, _0x536ecf);
      } finally {
        {
          _0x41316b();
        }
      }
    });
  });
}
async function _0x3f0339() {
  return new Promise(async _0x28fde2 => {
    {
      let _0x3ecbcb = {
        venderId: $.joinVenderId,
        payUpShop: true,
        queryVersion: "10.5.2",
        appid: "ef79a",
        needSecurity: true,
        bizId: "shop_view_app",
        channel: 406
      };
      let _0x484da5 = {
        appId: "ef79a",
        fn: "getShopOpenCardInfo",
        body: _0x3ecbcb,
        apid: "jd_shop_member",
        ver: "9.2.0",
        cl: "H5",
        user: $.UserName,
        code: 0,
        ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
      _0x3ecbcb = await dyy.getbody(_0x484da5);
      const _0x18cf69 = {
        accept: "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        cookie: _0x299c41,
        origin: "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
      const _0x4fa469 = {
        url: "https://api.m.jd.com/client.action?" + _0x3ecbcb + "&uuid=88888",
        headers: _0x18cf69,
        timeout: 60000
      };
      $.get(_0x4fa469, async (_0x10610b, _0x59a56d, _0x3d03a4) => {
        try {
          {
            _0x3d03a4 = _0x3d03a4 && _0x3d03a4.match(/jsonp_.*?\((.*?)\);/) && _0x3d03a4.match(/jsonp_.*?\((.*?)\);/)[1] || _0x3d03a4;
            let _0xa9f21b = $.toObj(_0x3d03a4, _0x3d03a4);
            _0xa9f21b && typeof _0xa9f21b == "object" ? _0xa9f21b && _0xa9f21b.success == true && (console.log("去加入 -> " + (_0xa9f21b.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0xa9f21b.result[0].interestsRuleList && _0xa9f21b.result[0].interestsRuleList[0] && _0xa9f21b.result[0].interestsRuleList[0].interestsInfo && _0xa9f21b.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x3d03a4);
          }
        } catch (_0x1641b4) {
          $.logErr(_0x1641b4, _0x59a56d);
        } finally {
          _0x28fde2();
        }
      });
    }
  });
}
function _0x360794(_0x94bf16, _0x4f9a9c) {
  return Math.floor(Math.random() * (_0x4f9a9c - _0x94bf16)) + _0x94bf16;
}
function _0x4c2648(_0x15a448 = +new Date()) {
  var _0x3983d1 = new Date(_0x15a448 + 28800000);
  return _0x3983d1.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x3b8cbc() {
  return new Promise(_0x265568 => {
    const _0x53b153 = {
      Cookie: _0x299c41,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x27cadd = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x53b153,
      timeout: 10000
    };
    $.get(_0x27cadd, (_0x171b33, _0x412b15, _0x11c8da) => {
      {
        try {
          if (_0x11c8da) {
            _0x11c8da = JSON.parse(_0x11c8da);
            if (!(_0x11c8da.islogin === "1")) {
              _0x11c8da.islogin === "0" && ($.isLogin = false);
            }
          }
        } catch (_0x514d19) {
          console.log(_0x514d19);
        } finally {
          _0x265568();
        }
      }
    });
  });
}
function Env(o, t) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((r, i) => {
        s.call(this, t, (t, e, s) => {
          t ? i(t) : r(e);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(r => {
        this.get({
          url: t
        }, (t, e, s) => r(s));
      });
    }
    runScript(a, o) {
      return new Promise(r => {
        let t = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        t = t && t.replace(/\n/g, "").trim();
        var e = (e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout")) ? +e : 20;
        e = o && o.timeout ? o.timeout : e;
        var [s, i] = t.split("@");
        this.post({
          url: `http://${i}/v1/scripting/evaluate`,
          body: {
            script_text: a,
            mock_type: "cron",
            timeout: e
          },
          headers: {
            "X-Key": s,
            Accept: "*/*"
          },
          timeout: e
        }, (t, e, s) => r(s));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      this.fs = this.fs || require("fs");
      this.path = this.path || require("path");
      var t = this.path.resolve(this.dataFile);
      var e = this.path.resolve(process.cwd(), this.dataFile);
      var s = this.fs.existsSync(t);
      var r = !s && this.fs.existsSync(e);
      if (!s && !r) {
        return {};
      }
      r = s ? t : e;
      try {
        return JSON.parse(this.fs.readFileSync(r));
      } catch (t) {
        return {};
      }
    }
    writedata() {
      var t;
      var e;
      var s;
      var r;
      var i;
      this.isNode() && (this.fs = this.fs || require("fs"), this.path = this.path || require("path"), t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), r = !(s = this.fs.existsSync(t)) && this.fs.existsSync(e), i = JSON.stringify(this.data), !s && r ? this.fs.writeFileSync(e, i) : this.fs.writeFileSync(t, i));
    }
    lodash_get(t, e, s) {
      let r = t;
      for (const t of e.replace(/\[(\d+)\]/g, ".$1").split(".")) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, r, e) {
      Object(t) === t && ((r = Array.isArray(r) ? r : r.toString().match(/[^.[\]]+/g) || []).slice(0, -1).reduce((t, e, s) => Object(t[e]) === t[e] ? t[e] : t[e] = Math.abs(r[s + 1]) >> 0 == +r[s + 1] ? [] : {}, t)[r[r.length - 1]] = e);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        var [, s, r] = /^@(.*?)\.(.*?)$/.exec(t);
        if (s = s ? this.getval(s) : "") {
          try {
            const t = JSON.parse(s);
            e = t ? this.lodash_get(t, r, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        var [, r, i] = /^@(.*?)\.(.*?)$/.exec(e);
        var a = this.getval(r);
        var a = r ? "null" === a ? null : a || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, i, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          this.lodash_set(a = {}, i, t);
          s = this.setval(JSON.stringify(a), r);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got || require("got");
      this.cktough = this.cktough || require("tough-cookie");
      this.ckjar = this.ckjar || new this.cktough.CookieJar();
      t && (t.headers = t.headers || {}, t) && (t.headers = t.headers || {}, undefined === t.headers.cookie) && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar);
    }
    tmout() {
      return new Promise((t, e) => {
        this.tmoutId = setTimeout(() => {
          this.prms.cancel();
          e({
            message: "timemout",
            response: ""
          });
        }, 50000);
      });
    }
    get(t, a = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          this.prms = this.got(t).on("redirect", (t, e) => {
            try {
              var s;
              t.headers["set-cookie"] && ((s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString()) && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar);
            } catch (t) {
              this.logErr(t);
            }
          });
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    post(t, a = () => {}) {
      var e = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[e](t, (t, e, s) => {
            !t && e && (e.body = s, e.statusCode = e.status || e.statusCode, e.status = e.statusCode);
            a(t, e, s);
          });
          break;
        case "Quantumult X":
          t.method = e;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              body: r,
              bodyBytes: i
            }, r, i);
          }, t => a(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          this.initGotEnv(t);
          var {
            url: s,
            ...r
          } = t;
          this.prms = this.got[e](s, r);
          Promise.race([this.prms, this.tmout()]).then(t => {
            var {
              statusCode: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            } = t;
            a(null, {
              status: t,
              statusCode: e,
              headers: s,
              rawBody: r,
              body: i
            }, i);
            clearTimeout(this.tmoutId);
          }, t => {
            var {
              message: t,
              response: e
            } = t;
            clearTimeout(this.tmoutId);
            a(t, e, e && e.body);
          });
      }
    }
    time(t, e = null) {
      var s;
      var r = {
        "M+": (e = e ? new Date(e) : new Date()).getMonth() + 1,
        "d+": e.getDate(),
        "H+": e.getHours(),
        "m+": e.getMinutes(),
        "s+": e.getSeconds(),
        "q+": Math.floor((e.getMonth() + 3) / 3),
        S: e.getMilliseconds()
      };
      for (s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), r) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[s] : ("00" + r[s]).substr(("" + r[s]).length)));
      return t;
    }
    queryStr(e) {
      let s = "";
      for (const r in e) {
        let t = e[r];
        null != t && "" !== t && ("object" == typeof t && (t = JSON.stringify(t)), s += `${r}=${t}&`);
      }
      return s = s.substring(0, s.length - 1);
    }
    msg(t = o, e = "", s = "", r = {}) {
      var i;
      var a = r => {
        const {
          $open: t,
          $copy: e,
          $media: i,
          $mediaMime: a
        } = r;
        switch (typeof r) {
          case undefined:
            return r;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: r
                };
              case "Loon":
              case "Shadowrocket":
                return r;
              case "Quantumult X":
                return {
                  "open-url": r
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                var o = {};
                var s = r.openUrl || r.url || r["open-url"] || t;
                if (s && Object.assign(o, {
                  action: "open-url",
                  url: s
                }), (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(o, {
                  action: "clipboard",
                  text: s
                }), i) {
                  let t;
                  let e;
                  let s;
                  if (i.startsWith("http")) {
                    t = i;
                  } else {
                    if (i.startsWith("data:")) {
                      const [r] = i.split(";");
                      const [, a] = i.split(",");
                      e = a;
                      s = r.replace("data:", "");
                    } else {
                      e = i;
                      s = (t => {
                        var e;
                        var s = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (e in s) if (0 === t.indexOf(e)) {
                          return s[e];
                        }
                        return null;
                      })(i);
                    }
                  }
                  Object.assign(o, {
                    "media-url": t,
                    "media-base64": e,
                    "media-base64-mime": a ?? s
                  });
                }
                Object.assign(o, {
                  "auto-dismiss": r["auto-dismiss"],
                  sound: r.sound
                });
                return o;
              case "Loon":
                {
                  const e = {};
                  (s = r.openUrl || r.url || r["open-url"] || t) && Object.assign(e, {
                    openUrl: s
                  });
                  var n = r.mediaUrl || r["media-url"];
                  (n = i?.startsWith("http") ? i : n) && Object.assign(e, {
                    mediaUrl: n
                  });
                  console.log(JSON.stringify(e));
                  return e;
                }
              case "Quantumult X":
                {
                  const a = {};
                  (o = r["open-url"] || r.url || r.openUrl || t) && Object.assign(a, {
                    "open-url": o
                  });
                  n = r["media-url"] || r.mediaUrl;
                  (n = i?.startsWith("http") ? i : n) && Object.assign(a, {
                    "media-url": n
                  });
                  (s = r["update-pasteboard"] || r.updatePasteboard || e) && Object.assign(a, {
                    "update-pasteboard": s
                  });
                  console.log(JSON.stringify(a));
                  return a;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(t, e, s, a(r));
            break;
          case "Quantumult X":
            $notify(t, e, s, a(r));
            break;
          case "Node.js":
        }
      }
      this.isMuteLog || ((i = ["", "==============📣系统通知📣=============="]).push(t), e && i.push(e), s && i.push(s), console.log(i.join("\n")), this.logs = this.logs.concat(i));
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.debug + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.info + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.warn + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (0 < t.length && (this.logs = [...this.logs, ...t]), console.log("" + this.logLevelPrefixs.error + t.map(t => t ?? String(t)).join(this.logSeparator)));
    }
    log(...t) {
      0 < t.length && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, undefined !== t.message ? t.message : t);
      }
    }
    wait(e) {
      return new Promise(t => setTimeout(t, e));
    }
    done(t = {}) {
      var e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(o, t);
}