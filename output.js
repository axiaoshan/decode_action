//Mon Oct 13 2025 13:06:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
目标:  有道词典  #自带提现，需提现绑定过微信

变量：捉包https://dict.youdao.com域名headers里的cookie

格式：export ydcd="ck=xxxx"  多账号换行隔开

脚本发布频道: https://t.me/+O6-uZI3t6uhhMmU1
*/

const $ = new Env("\u6709\u9053\u8BCD\u5178");
const md5 = require("md5-node"); //引入md5-node
let envSplitor = ["\n"]; //多账号隔开方式，默认换行可自定义

/////////////////////自定义参数(未免黑号自行替换)/////////////////////
let money = "10"; //默认提现额度
let yduuid = "A8E0F79E-5CD2-4042-86C5-72A1226BD1EF"; //uid
let model = "iPhone14,5"; //设备型号
let os = "iPhone 18 Pro Max"; //设备标识
let app = "10.0.0"; //app版本

var _0xod3 = "jsjiami.com.v6",
  _0xod3_ = ["_0xod3"],
  _0x5761 = [_0xod3, "isNode", "env", "ydcd", "getdata", "index", "name", "valid", "canRead", "param", "str2json", "ckValid", "logAndNotify", "\u8D26\u53F7[", "]CK\u683C\u5F0F\u9519\u8BEF", "getTime", "abtest=1&appVersion=", "&client=android&dev_name=", "&imei=", "&keyfrom=mdict.", ".android&keyid=dict-usertask-key&mid=10&model=", "&mysticTime=", "&network=wifi&newImei=CQllOTFmODdiYTdjNjA1MWUxCXVua25vd24%3D&product=mdict&screen=1080x2400&vendor=", "&yduuid=", "&key=ttfMFaa7tiPyAc3DanKeIMzEejm", "https://dict.youdao.com/dictusertask/withdraw/account?pointParam=dev_name,product,appVersion,keyfrom,mid,screen,keyid,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei&sign=", "&keyid=dict-usertask-key&mysticTime=", "&dev_name=", "&product=mdict&appVersion=", ".android&mid=10&screen=1080x2400&ssid=&network=wifi&abtest=1&yduuid=", "&vendor=", "&client=android&imei=", "&model=", "&newImei=CQllOTFmODdiYTdjNjA1MWUxCXVua25vd24%253D", "get", "code", "data", "wechatName", " \u53EF\u63D0\u73B0\u4F59\u989D:", "amount", "msg", "resolve", "box", "https://dict.youdao.com/dictusertask/lottery/info?pointParam=dev_name,product,appVersion,keyfrom,mid,screen,keyid,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei&sign=", "lotteryInfo", "freeTimes", "]\u76F2\u76D2\u8FD8\u672A\u5F00\u542F", "openbox", "]\u76F2\u76D2\u5DF2\u5F00\u542F", ".android&keyid=dict-usertask-key&lotteryType=0&mid=10&model=", "https://dict.youdao.com/dictusertask/lottery/execute?dev_name=", "pointParam=dev_name%2Cproduct%2CappVersion%2Ckeyfrom%2Cmid%2Cscreen%2Ckeyid%2CmysticTime%2ClotteryType%2Cnetwork%2Cabtest%2Cyduuid%2Cvendor%2Cclient%2Cimei%2Cmodel%2CnewImei&sign=", "&lotteryType=0", "post", "]\u5F00\u76F2\u76D2\u6D3B\u52A8:", "goldInfo", "num", "\u829D\u58EB\u5E01", "sigin", ".android&keyid=dict-usertask-key&mid=10&missionId=8888&model=", "&network=unknown&newImei=CQllOTFmODdiYTdjNjA1MWUxCXVua25vd24%3D&product=mdict&screen=1080x2400&vendor=", "https://dict.youdao.com/dictusertask/cheese/collect?pointParam=dev_name,product,appVersion,missionId,keyfrom,mid,screen,keyid,mysticTime,network,abtest,yduuid,vendor,client,imei,model,newImei&sign=", "&keyid=dict-usertask-key&missionId=8888&mysticTime=", ".android&mid=10&screen=1080x2400&ssid=&network=unknown&abtest=1&yduuid=", "]\u7B7E\u5230\u6210\u529F", "]\u4ECA\u65E5\u5DF2\u7B7E\u5230", "&isFinished=1&keyfrom=mdict.", "https://dict.youdao.com/dictusertask/withdraw/redpacket?pointParam=dev_name,product,appVersion,keyfrom,mid,screen,keyid,mysticTime,isFinished,network,abtest,yduuid,vendor,client,imei,model,newImei&sign=", "&isFinished=1&dev_name=", "getRedPacketTimes", "]\u5F00\u7EA2\u5305\u83B7\u5F97:", "redPacketAmount", "wait", "]\u7EA2\u5305\u5DF2\u5F00\u5B8C", "pay", "&money=", "https://dict.youdao.com/dictusertask/withdraw/execute?pointParam=dev_name,product,appVersion,keyfrom,mid,screen,keyid,mysticTime,network,abtest,yduuid,money,vendor,client,imei,model,newImei&sign=", "\u63D0\u73B0\u6210\u529F:\u5269\u4F59", "account", "undefined", "filter", "\n\u901A\u77E5\u533A\uFF1A\n\n\u53D8\u5F97\u662F\u9713\u88F3 \u4E0D\u53D8\u7684\u662F\u521D\u5FC3 \u4E0D\u662F\u8C01\u90FD\u751F\u6765\u4F18\u79C0 \u4F46\u6211\u6709\u9897\u6267\u7740\u5411\u4E0A\u7684\u5FC3\uFE0F", "length", "\n-------------- \u8D26\u53F7\u68C0\u6D4B --------------", "push", "all", "\n-------------- \u81EA\u52A8\u63D0\u73B0 --------------", "\n\u81EA\u52A8\u63D0\u73B0:\u8865\u5305\u65F6\u95F4\u4E3A\u6BCF\u5929\u96F6\u70B9\u6574\uFF0C\u63A8\u8350\u5B9A\u65F6\u4E3A:0 0 0,9 * * ? ", "\n-------------- \u6BCF\u65E5\u4EFB\u52A1 --------------", "showmsg", "catch", "log", "finally", "done", "indexOf", "split", "\u672A\u627E\u5230CK \u8BF7\u9605\u8BFB\u811A\u672C\u8BF4\u660E", "\u5171\u627E\u5230", "\u4E2A\u8D26\u53F7", "replace", "youdao_dict_android", "body", "headers", "content-type", "application/x-www-form-urlencoded;charset=utf-8", "Content-Length", "send", "\u8BF7\u6C42\u5931\u8D25", "stringify", "object", "parse", "getHours", "getMinutes", "wjrVCsjKiayKdCmBQBi.HIcoAm.v6=="];
function _0x4040(_0x551c5d, _0x3dc08c) {
  _0x551c5d = ~~"0x"["concat"](_0x551c5d["slice"](0));
  var _0x22b32b = _0x5761[_0x551c5d];
  return _0x22b32b;
}
;
(function (_0x3814ee, _0x322548) {
  var _0x49531e = 0;
  for (_0x322548 = _0x3814ee["shift"](_0x49531e >> 2); _0x322548 && _0x322548 !== (_0x3814ee["pop"](_0x49531e >> 3) + "")["replace"](/[wrVCKyKdCBQBHIA=]/g, ""); _0x49531e++) {
    _0x49531e = _0x49531e ^ 1184976;
  }
})(_0x5761, _0x4040);
let httpResult, httpReq, httpResp;
let userCookie = ($[_0x4040("0")]() ? process[_0x4040("1")][_0x4040("2")] : $[_0x4040("3")](_0x4040("2"))) || "";
let userList = [];
let userIdx = 0;
let userCount = 0;
let h = local_hours();
let m = local_minutes();
class UserInfo {
  constructor(_0x4104af) {
    this[_0x4040("4")] = ++userIdx;
    this[_0x4040("5")] = this[_0x4040("4")];
    this[_0x4040("6")] = false;
    this[_0x4040("7")] = false;
    try {
      this[_0x4040("8")] = $[_0x4040("9")](_0x4104af);
      this[_0x4040("a")] = true;
    } catch (_0x300f24) {
      this[_0x4040("a")] = false;
      $[_0x4040("b")](_0x4040("c") + this[_0x4040("4")] + _0x4040("d"));
    }
  }
  async ["my"]() {
    try {
      let _0x57fea9 = new Date()[_0x4040("e")]();
      let _0x15df16 = _0x4040("f") + app + _0x4040("10") + model + _0x4040("11") + yduuid + _0x4040("12") + app + _0x4040("13") + model + _0x4040("14") + _0x57fea9 + _0x4040("15") + os + _0x4040("16") + yduuid + _0x4040("17");
      let _0x28c65f = md5(_0x15df16);
      let _0x37ddbd = _0x4040("18") + _0x28c65f + _0x4040("19") + _0x57fea9 + _0x4040("1a") + model + _0x4040("1b") + app + _0x4040("12") + app + _0x4040("1c") + yduuid + _0x4040("1d") + os + _0x4040("1e") + yduuid + _0x4040("1f") + model + _0x4040("20");
      let _0x40b561 = "";
      let _0xc0741a = "" + this[_0x4040("8")]["ck"];
      let _0x15bea2 = populateUrlObject(_0x37ddbd, _0xc0741a, _0x40b561);
      await httpRequest(_0x4040("21"), _0x15bea2);
      let _0x3c3e6f = httpResult;
      if (!_0x3c3e6f) return;
      if (_0x3c3e6f[_0x4040("22")] == 0) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + "]" + _0x3c3e6f[_0x4040("23")][_0x4040("24")] + _0x4040("25") + _0x3c3e6f[_0x4040("23")][_0x4040("26")] + "\u5143");
        this[_0x4040("6")] = true;
        this[_0x4040("7")] = true;
      } else {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + "]" + _0x3c3e6f[_0x4040("27")]);
      }
    } catch (_0x2b24de) {} finally {
      return Promise[_0x4040("28")](1);
    }
  }
  async [_0x4040("29")]() {
    try {
      let _0xfb44f0 = new Date()[_0x4040("e")]();
      let _0x54cbbd = _0x4040("f") + app + _0x4040("10") + model + _0x4040("11") + yduuid + _0x4040("12") + app + _0x4040("13") + model + _0x4040("14") + _0xfb44f0 + _0x4040("15") + os + _0x4040("16") + yduuid + _0x4040("17");
      let _0x4caaf2 = md5(_0x54cbbd);
      let _0x41906e = _0x4040("2a") + _0x4caaf2 + _0x4040("19") + _0xfb44f0 + _0x4040("1a") + model + _0x4040("1b") + app + _0x4040("12") + app + _0x4040("1c") + yduuid + _0x4040("1d") + os + _0x4040("1e") + yduuid + _0x4040("1f") + model + _0x4040("20");
      let _0x2ab3e8 = "";
      let _0x11d0d7 = "" + this[_0x4040("8")]["ck"];
      let _0x5ea188 = populateUrlObject(_0x41906e, _0x11d0d7, _0x2ab3e8);
      await httpRequest(_0x4040("21"), _0x5ea188);
      let _0x890855 = httpResult;
      if (!_0x890855) return;
      if (_0x890855[_0x4040("23")][_0x4040("2b")][_0x4040("2c")] == 1) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("2d"));
        await this[_0x4040("2e")]();
      } else {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("2f"));
      }
    } catch (_0x163c41) {} finally {
      return Promise[_0x4040("28")](1);
    }
  }
  async [_0x4040("2e")]() {
    try {
      let _0x4361ce = new Date()[_0x4040("e")]();
      let _0x5329d6 = _0x4040("f") + app + _0x4040("10") + model + _0x4040("11") + yduuid + _0x4040("12") + app + _0x4040("30") + model + _0x4040("14") + _0x4361ce + _0x4040("15") + os + _0x4040("16") + yduuid + _0x4040("17");
      let _0x3427b4 = md5(_0x5329d6);
      let _0x13a014 = _0x4040("31") + model + _0x4040("1b") + app + _0x4040("12") + app + _0x4040("1c") + yduuid + _0x4040("1d") + os + _0x4040("1e") + yduuid + _0x4040("1f") + model + _0x4040("20");
      let _0x909b0f = _0x4040("32") + _0x3427b4 + _0x4040("19") + _0x4361ce + _0x4040("33");
      let _0x3244c9 = "" + this[_0x4040("8")]["ck"];
      let _0xb16f7b = populateUrlObject(_0x13a014, _0x3244c9, _0x909b0f);
      await httpRequest(_0x4040("34"), _0xb16f7b);
      let _0xb298e4 = httpResult;
      if (!_0xb298e4) return;
      if (_0xb298e4[_0x4040("22")] == 0) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("35") + _0xb298e4[_0x4040("23")][_0x4040("36")][_0x4040("37")] + _0x4040("38"));
      } else {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("35") + _0xb298e4[_0x4040("27")]);
      }
    } catch (_0x247a73) {} finally {
      return Promise[_0x4040("28")](1);
    }
  }
  async [_0x4040("39")]() {
    try {
      let _0x2e15bc = new Date()[_0x4040("e")]();
      let _0x29c727 = _0x4040("f") + app + _0x4040("10") + model + _0x4040("11") + yduuid + _0x4040("12") + app + _0x4040("3a") + model + _0x4040("14") + _0x2e15bc + _0x4040("3b") + os + _0x4040("16") + yduuid + _0x4040("17");
      let _0x368899 = md5(_0x29c727);
      let _0x391d71 = _0x4040("3c") + _0x368899 + _0x4040("3d") + _0x2e15bc + _0x4040("1a") + model + _0x4040("1b") + app + _0x4040("12") + app + _0x4040("3e") + yduuid + _0x4040("1d") + os + _0x4040("1e") + yduuid + _0x4040("1f") + model + _0x4040("20");
      let _0x262e4b = "";
      let _0x1e3e9c = "" + this[_0x4040("8")]["ck"];
      let _0x1f352e = populateUrlObject(_0x391d71, _0x1e3e9c, _0x262e4b);
      await httpRequest(_0x4040("21"), _0x1f352e);
      let _0x2d2b64 = httpResult;
      if (!_0x2d2b64) return;
      if (_0x2d2b64[_0x4040("22")] == 0) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("3f"));
      } else {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("40"));
      }
    } catch (_0x3186c0) {} finally {
      return Promise[_0x4040("28")](1);
    }
  }
  async ["hb"]() {
    try {
      let _0x136ac2 = new Date()[_0x4040("e")]();
      let _0x5b8ebf = _0x4040("f") + app + _0x4040("10") + model + _0x4040("11") + yduuid + _0x4040("41") + app + _0x4040("13") + model + _0x4040("14") + _0x136ac2 + _0x4040("15") + os + _0x4040("16") + yduuid + _0x4040("17");
      let _0x353613 = md5(_0x5b8ebf);
      let _0x25be25 = _0x4040("42") + _0x353613 + _0x4040("19") + _0x136ac2 + _0x4040("43") + model + _0x4040("1b") + app + _0x4040("12") + app + _0x4040("1c") + yduuid + _0x4040("1d") + os + _0x4040("1e") + yduuid + _0x4040("1f") + model + _0x4040("20");
      let _0x584b3a = "";
      let _0x15bd24 = "" + this[_0x4040("8")]["ck"];
      let _0x4a84c9 = populateUrlObject(_0x25be25, _0x15bd24, _0x584b3a);
      await httpRequest(_0x4040("21"), _0x4a84c9);
      let _0x541f77 = httpResult;
      if (!_0x541f77) return;
      if (_0x541f77[_0x4040("23")][_0x4040("44")] <= 3) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("45") + _0x541f77[_0x4040("23")][_0x4040("46")] + "\u5143");
        await $[_0x4040("47")](30000);
        await this["hb"]();
      } else {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("48"));
      }
    } catch (_0xf1e623) {} finally {
      return Promise[_0x4040("28")](1);
    }
  }
  async [_0x4040("49")]() {
    try {
      let _0x40703f = new Date()[_0x4040("e")]();
      let _0x456575 = _0x4040("f") + app + _0x4040("10") + model + _0x4040("11") + yduuid + _0x4040("12") + app + _0x4040("13") + model + _0x4040("4a") + money + _0x4040("14") + _0x40703f + _0x4040("3b") + os + _0x4040("16") + yduuid + _0x4040("17");
      let _0x27e669 = md5(_0x456575);
      let _0x46dfc1 = _0x4040("4b") + _0x27e669 + _0x4040("19") + _0x40703f + _0x4040("4a") + money + _0x4040("1a") + model + _0x4040("1b") + app + _0x4040("12") + app + _0x4040("3e") + yduuid + _0x4040("1d") + os + _0x4040("1e") + yduuid + _0x4040("1f") + model + _0x4040("20");
      let _0x4032ca = "";
      let _0x5f581a = "" + this[_0x4040("8")]["ck"];
      let _0x372aea = populateUrlObject(_0x46dfc1, _0x5f581a, _0x4032ca);
      await httpRequest(_0x4040("21"), _0x372aea);
      let _0x522ab9 = httpResult;
      if (!_0x522ab9) return;
      if (_0x522ab9[_0x4040("22")] == 0) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + _0x4040("4c") + _0x522ab9[_0x4040("23")][_0x4040("4d")] + "\u5143");
      }
      if (_0x522ab9[_0x4040("22")] == 1007) {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + "]" + _0x522ab9[_0x4040("27")]);
        if (m < 1) {
          await $[_0x4040("47")](1000);
          await this[_0x4040("49")]();
        }
      } else {
        $[_0x4040("b")](_0x4040("c") + this[_0x4040("5")] + "]" + _0x522ab9[_0x4040("27")]);
      }
    } catch (_0x2731de) {} finally {
      return Promise[_0x4040("28")](1);
    }
  }
}
!(async () => {
  if (typeof $request !== _0x4040("4e")) {} else {
    if (!(await checkEnv())) return;
    let _0x41c933 = [];
    let _0xd43783 = userList[_0x4040("4f")](_0x28df5f => _0x28df5f[_0x4040("a")]);
    $[_0x4040("b")](_0x4040("50"));
    if (_0xd43783[_0x4040("51")] > 0) {
      $[_0x4040("b")](_0x4040("52"));
      _0x41c933 = [];
      for (let _0xb8acfe of _0xd43783) {
        _0x41c933[_0x4040("53")](_0xb8acfe["my"]());
      }
      await Promise[_0x4040("54")](_0x41c933);
      _0xd43783 = _0xd43783[_0x4040("4f")](_0x105882 => _0x105882[_0x4040("6")]);
      if (_0xd43783[_0x4040("51")] > 0) {
        $[_0x4040("b")](_0x4040("55"));
        _0x41c933 = [];
        for (let _0x2601f4 of _0xd43783[_0x4040("4f")](_0x26f495 => _0x26f495[_0x4040("7")])) {
          if (h == 0 && m < 1) {
            _0x41c933[_0x4040("53")](_0x2601f4[_0x4040("49")]());
          } else {
            $[_0x4040("b")](_0x4040("56"));
          }
        }
        await Promise[_0x4040("54")](_0x41c933);
        $[_0x4040("b")](_0x4040("57"));
        _0x41c933 = [];
        for (let _0x2ec262 of _0xd43783[_0x4040("4f")](_0x1f07ba => _0x1f07ba[_0x4040("7")])) {
          _0x41c933[_0x4040("53")](_0x2ec262[_0x4040("39")]());
          await $[_0x4040("47")](5000);
          _0x41c933[_0x4040("53")](_0x2ec262[_0x4040("29")]());
          await $[_0x4040("47")](5000);
          _0x41c933[_0x4040("53")](_0x2ec262["hb"]());
        }
        await Promise[_0x4040("54")](_0x41c933);
      }
    }
    await $[_0x4040("58")]();
  }
})()[_0x4040("59")](_0x56f233 => console[_0x4040("5a")](_0x56f233))[_0x4040("5b")](() => $[_0x4040("5c")]());
async function checkEnv() {
  if (userCookie) {
    let _0x4bd4b0 = envSplitor[0];
    for (let _0x3ef521 of envSplitor) {
      if (userCookie[_0x4040("5d")](_0x3ef521) > -1) {
        _0x4bd4b0 = _0x3ef521;
        break;
      }
    }
    for (let _0x36ddc0 of userCookie[_0x4040("5e")](_0x4bd4b0)) {
      if (_0x36ddc0) userList[_0x4040("53")](new UserInfo(_0x36ddc0));
    }
    userCount = userList[_0x4040("51")];
  } else {
    console[_0x4040("5a")](_0x4040("5f"));
    return;
  }
  console[_0x4040("5a")](_0x4040("60") + userCount + _0x4040("61"));
  return true;
}
function populateUrlObject(_0x33a3ed, _0x2abd5f, _0x547f7b = "") {
  let _0x115735 = _0x33a3ed[_0x4040("62")]("//", "/")[_0x4040("5e")]("/")[1];
  let _0x2f69e1 = {
    "url": _0x33a3ed,
    "headers": {
      "Host": _0x115735,
      "Cookie": _0x2abd5f,
      "User-Agent": _0x4040("63")
    },
    "timeout": 5000
  };
  if (_0x547f7b) {
    _0x2f69e1[_0x4040("64")] = _0x547f7b;
    _0x2f69e1[_0x4040("65")][_0x4040("66")] = _0x4040("67");
    _0x2f69e1[_0x4040("65")][_0x4040("68")] = _0x2f69e1[_0x4040("64")] ? _0x2f69e1[_0x4040("64")][_0x4040("51")] : 0;
  }
  return _0x2f69e1;
}
async function httpRequest(_0x94509e, _0x10400e) {
  httpResult = null, httpReq = null, httpResp = null;
  return new Promise(_0x2fcbd3 => {
    $[_0x4040("69")](_0x94509e, _0x10400e, async (_0x42bf33, _0x368d43, _0x3f6d73) => {
      try {
        httpReq = _0x368d43;
        httpResp = _0x3f6d73;
        if (_0x42bf33) {
          console[_0x4040("5a")](_0x94509e + _0x4040("6a"));
          console[_0x4040("5a")](JSON[_0x4040("6b")](_0x42bf33));
        } else {
          if (_0x3f6d73[_0x4040("64")]) {
            if (typeof _0x3f6d73[_0x4040("64")] == _0x4040("6c")) {
              httpResult = _0x3f6d73[_0x4040("64")];
            } else {
              try {
                httpResult = JSON[_0x4040("6d")](_0x3f6d73[_0x4040("64")]);
              } catch (_0x20ede0) {
                httpResult = _0x3f6d73[_0x4040("64")];
              }
            }
          }
        }
      } catch (_0x2416b5) {
        console[_0x4040("5a")](_0x2416b5);
      } finally {
        _0x2fcbd3();
      }
    });
  });
}
function local_hours() {
  let _0x2a6084 = new Date();
  let _0x4b8609 = _0x2a6084[_0x4040("6e")]();
  return _0x4b8609;
}
function local_minutes() {
  let _0x4b4bb1 = new Date();
  let _0x3b1bef = _0x4b4bb1[_0x4040("6f")]();
  return _0x3b1bef;
}
;
_0xod3 = "jsjiami.com.v6";
function Env(name, env) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(name, env) {
      this.name = name;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, env);
      console.log(`${this.name} 开始运行：\n`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    send(m, t, e = () => {}) {
      if (m != "get" && m != "post" && m != "put" && m != "delete") {
        console.log(`无效的http方法：${m}`);
        return;
      }
      if (m == "get" && t.headers) {
        delete t.headers["content-type"];
        delete t.headers["Content-Length"];
      } else if (t.body && t.headers) {
        if (!t.headers["content-type"]) t.headers["content-type"] = "application/json";
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {};
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if (m == "get") delete conf.data;
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err));
      } else if (this.isQuanX()) {
        t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: false
        })), $task.fetch(t).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }, t => e(t));
      } else if (this.isNode()) {
        this.got = this.got ? this.got : require("got");
        const {
          url: s,
          ...i
        } = t;
        this.instance = this.got.extend({
          followRedirect: false
        });
        this.instance[m](s, i).then(t => {
          const {
            statusCode: i,
            request: q,
            headers: r,
            body: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    async showmsg() {
      if (!this.notifyStr) return;
      let notifyBody = this.name + " \u8FD0\u884C\u901A\u77E5\n\n" + this.notifyStr;
      if ($.isNode()) {
        var notify = require("./sendNotify");
        console.log("\n============== \u63A8\u9001 ==============");
        await notify.sendNotify(this.name, notifyBody);
      } else {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str);
      this.notifyStr += str;
      this.notifyStr += "\n";
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "============== \u7CFB\u7EDF\u901A\u77E5 =============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n"));
    }
    getMin(a, b) {
      return a < b ? a : b;
    }
    getMax(a, b) {
      return a < b ? b : a;
    }
    padStr(num, length, padding = "0") {
      let numStr = String(num);
      let numPad = length > numStr.length ? length - numStr.length : 0;
      let retStr = "";
      for (let i = 0; i < numPad; i++) {
        retStr += padding;
      }
      retStr += numStr;
      return retStr;
    }
    json2str(obj, c, encodeUrl = false) {
      let ret = [];
      for (let keys of Object.keys(obj).sort()) {
        let v = obj[keys];
        if (v && encodeUrl) v = encodeURIComponent(v);
        ret.push(keys + "=" + v);
      }
      return ret.join(c);
    }
    str2json(str, decodeUrl = false) {
      let ret = {};
      for (let item of str.split("&")) {
        if (!item) continue;
        let idx = item.indexOf("=");
        if (idx == -1) continue;
        let k = item.substr(0, idx);
        let v = item.substr(idx + 1);
        if (decodeUrl) v = decodeURIComponent(v);
        ret[k] = v;
      }
      return ret;
    }
    randomString(len, charset = "abcdef0123456789") {
      let str = "";
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return str;
    }
    randomList(a) {
      let idx = Math.floor(Math.random() * a.length);
      return a[idx];
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`);
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(t);
    }
  }(name, env);
}