//Mon Oct 13 2025 05:06:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x59190b = _0x1f8978("统一茄皇二期");
const _0x2169c3 = require("got");
const _0x3afd13 = require("crypto-js");
const _0x89047c = "tyqh";
const _0x45ff23 = /[\n\&\@]/;
const _0x1533f1 = [_0x89047c + "Cookie"];
const _0x558d83 = 20000;
const _0x344f1c = 3;
const _0x5a3373 = 1.06;
const _0x58fb3a = "tyqh";
const _0x55f8e0 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
const _0x316821 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x58fb3a + ".json";
const _0x1c9311 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.39(0x18002730) NetType/WIFI Language/zh_CN miniProgram/wx532ecb3bdaaf92f9";
const _0x2943e8 = "https://thekingoftomato.ioutu.cn";
const _0x4bb006 = "https://thekingoftomato.ioutu.cn/";
const _0x1367a7 = "https://qiehuang-apig.xiaoyisz.com";
const _0xeaffb5 = "game";
const _0x527fec = "FDtxwh9ZdH4cmtoABepv";
const _0x20385e = 5;
const _0x35d1da = 13;
const _0x1ae35f = 1000;
const _0x2af1ea = 3600000;
const _0x349fee = 0;
const _0x1b0bb0 = ["邀请新人助力", "邀请好友助力"];
const _0xa8898c = false;
const _0x4ecdfd = {
  "1": "发育期",
  "2": "幼苗期",
  "3": "开花期",
  "4": "结果期",
  "5": "收获期"
};
class _0x185828 {
  constructor() {
    this.index = _0x59190b.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x4ed2c8 = {
      limit: 0
    };
    const _0x41e48e = {
      Connection: "keep-alive"
    };
    const _0x564c85 = {
      retry: _0x4ed2c8,
      timeout: _0x558d83,
      followRedirect: false,
      headers: _0x41e48e
    };
    this.got = _0x2169c3.extend(_0x564c85);
  }
  update(_0x9e48b4) {
    Object.assign(this, _0x9e48b4);
  }
  log(_0xf3b86a, _0x39b0ad = {}) {
    var _0x16b1db = "";
    var _0x28f7c1 = _0x59190b.userCount.toString().length;
    if (this.index) {
      _0x16b1db += "账号[" + _0x59190b.padStr(this.index, _0x28f7c1) + "]";
    }
    if (this.name) {
      _0x16b1db += "[" + this.name + "]";
    }
    _0x59190b.log(_0x16b1db + _0xf3b86a, _0x39b0ad);
  }
  async request(_0x69ea6b) {
    const _0x559d21 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"];
    const _0x460936 = ["TimeoutError"];
    var _0x45b2df = null;
    var _0x50b5c5 = 0;
    var _0x49f615 = _0x69ea6b.fn || _0x69ea6b.url;
    _0x69ea6b.method = _0x69ea6b?.["method"]?.["toUpperCase"]() || "GET";
    let _0x346992;
    while (_0x50b5c5 < _0x344f1c) {
      try {
        _0x50b5c5++;
        _0x346992 = null;
        let _0xf35578 = null;
        let _0x1381ac = _0x69ea6b?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x558d83;
        let _0x4f48f0 = false;
        await new Promise(async _0x89dae8 => {
          setTimeout(() => {
            _0x4f48f0 = true;
            _0x89dae8();
          }, _0x1381ac);
          await this.got(_0x69ea6b).then(_0x1333d1 => {
            _0x45b2df = _0x1333d1;
          }, _0x677839 => {
            _0xf35578 = _0x677839;
            _0x45b2df = _0x677839.response;
            _0x346992 = _0xf35578?.["code"];
          });
          _0x89dae8();
        });
        if (_0x4f48f0) {
          this.log("[" + _0x49f615 + "]请求超时(" + _0x1381ac / 1000 + "秒)，重试第" + _0x50b5c5 + "次");
        } else {
          if (_0x460936.includes(_0xf35578?.["name"])) {
            this.log("[" + _0x49f615 + "]请求超时(" + _0xf35578.code + ")，重试第" + _0x50b5c5 + "次");
          } else {
            if (_0x559d21.includes(_0xf35578?.["code"])) {
              this.log("[" + _0x49f615 + "]请求错误(" + _0xf35578.code + ")，重试第" + _0x50b5c5 + "次");
            } else {
              let _0x1f7a2d = _0x45b2df?.["statusCode"] || 999;
              let _0x151bec = _0x1f7a2d / 100 | 0;
              if (_0x151bec > 3) {
                this.log("请求[" + _0x49f615 + "]返回[" + _0x1f7a2d + "]");
              }
              if (_0x151bec <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x5668e3) {
        _0x5668e3.name == "TimeoutError" ? this.log("[" + _0x49f615 + "]请求超时，重试第" + _0x50b5c5 + "次") : this.log("[" + _0x49f615 + "]请求错误(" + _0x5668e3.message + ")，重试第" + _0x50b5c5 + "次");
      }
    }
    const _0x58dc56 = {
      statusCode: _0x346992 || -1,
      headers: null,
      result: null
    };
    if (_0x45b2df == null) {
      return Promise.resolve(_0x58dc56);
    }
    let {
      statusCode: _0x1aefed,
      headers: _0x3f52b0,
      body: _0x55f4a1
    } = _0x45b2df;
    if (_0x55f4a1) {
      try {
        _0x55f4a1 = JSON.parse(_0x55f4a1);
      } catch {}
    }
    const _0x1fd38e = {
      statusCode: _0x1aefed,
      headers: _0x3f52b0,
      result: _0x55f4a1
    };
    return Promise.resolve(_0x1fd38e);
  }
}
let _0x3ddc05 = new _0x185828();
class _0x190ade extends _0x185828 {
  constructor(_0x5d0cbe) {
    super();
    this.login_body = JSON.parse(_0x5d0cbe);
    this.auth = "";
    this.land = {};
    this.refresh_land_step = false;
    this.gold = 0;
    this.sun = 0;
    this.risk_num = 0;
    this.can_go_risk = true;
    this.can_add_friend = true;
    this.can_help_task = true;
    this.can_help_risk = true;
    this.can_help_unlock = true;
    this.help_task_config = {};
    this.help_role_config = {};
    this.need_help_risk = true;
    this.need_help_unlock = false;
    this.all_land_unlock = true;
    this.all_role_unlock = true;
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: {
        "User-Agent": _0x1c9311,
        Authorization: this.auth,
        Origin: _0x2943e8,
        Referer: _0x4bb006
      }
    });
  }
  gen_sign(_0x283ba9 = {}, _0x209091 = null) {
    let _0x1e9b39 = [];
    for (let _0x4d6323 of Object.keys(_0x283ba9).sort()) {
      _0x283ba9[_0x4d6323] instanceof Object ? _0x1e9b39.push(_0x4d6323 + "=" + JSON.stringify(_0x283ba9[_0x4d6323])) : _0x1e9b39.push(_0x4d6323 + "=" + _0x283ba9[_0x4d6323]);
    }
    let _0x3d63f3 = {
      client_id: _0xeaffb5,
      nonstr: _0x59190b.randomString(16, "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"),
      timestamp: Math.floor(Date.now() / 1000),
      body: _0x209091 ? JSON.stringify(_0x209091) : "",
      query: _0x1e9b39.length ? _0x1e9b39.join("&") : "",
      secret: _0x527fec
    };
    let _0x2c47aa = Object.values(_0x3d63f3).join("|");
    return {
      client_id: _0xeaffb5,
      timestamp: _0x3d63f3.timestamp,
      nonstr: _0x3d63f3.nonstr,
      sign: _0x3afd13.MD5(_0x2c47aa).toString().toUpperCase()
    };
  }
  async login(_0x3f0259 = {}) {
    let _0x2696c1 = false;
    try {
      let _0x3d0ad3 = {
        fn: "login",
        method: "post",
        url: _0x1367a7 + "/qiehuangsecond/ga/public/api/login",
        json: this.login_body
      };
      let {
        statusCode: _0x38e052,
        result: _0x2ccbe8
      } = await this.request(_0x59190b.copy(_0x3d0ad3));
      let _0x511038 = _0x59190b.get(_0x2ccbe8, "code", _0x38e052);
      if (_0x511038 == 0) {
        this.auth = _0x2ccbe8?.["data"]?.["token"] || "";
        this.auth ? (_0x2696c1 = true, this.valid = true, this.got = this.got.extend({
          headers: {
            Authorization: this.auth
          }
        }), this.log("登录成功")) : this.log("登录获取auth失败");
      } else {
        if (_0x38e052 == 403) {
          const _0x372f12 = {
            notify: true
          };
          this.log("登录失败[" + _0x38e052 + "]: 黑IP了, 换个IP试试吧", _0x372f12);
        } else {
          let _0x4fb63a = _0x59190b.get(_0x2ccbe8, "message", "");
          this.log("登录获取auth失败[" + _0x511038 + "]: " + _0x4fb63a);
        }
      }
    } catch (_0x4648df) {
      console.log(_0x4648df);
    } finally {
      return _0x2696c1;
    }
  }
  async userInfo_get(_0x33b310 = {}) {
    try {
      let _0x3bd40b = {
        fn: "userInfo_get",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/userInfo/get",
        headers: this.gen_sign()
      };
      let {
        result: _0x443187
      } = await this.request(_0x59190b.copy(_0x3bd40b));
      let _0x4a1ef1 = _0x59190b.get(_0x443187, "code", -1);
      if (_0x4a1ef1 == 0) {
        let {
          nickName: _0x1b438a,
          userId: _0x18fa53,
          gold: _0x3d53d5,
          score: _0x543c71,
          sun: _0x24051e,
          sunMax: _0x2f4fe5
        } = _0x443187?.["data"];
        this.name = _0x1b438a;
        const _0xa54f54 = {
          userId: _0x18fa53,
          gold: _0x3d53d5,
          score: _0x543c71,
          sun: _0x24051e,
          sunMax: _0x2f4fe5
        };
        this.update(_0xa54f54);
      } else {
        let _0x42eef8 = _0x59190b.get(_0x443187, "message", "");
        this.log("获取账号信息失败[" + _0x4a1ef1 + "]: " + _0x42eef8);
      }
    } catch (_0x5cdff7) {
      console.log(_0x5cdff7);
    }
  }
  async userInfo_autoSun(_0x40edd5 = {}) {
    try {
      let _0x3c1992 = {
        fn: "userInfo_autoSun",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/userInfo/autoSun",
        headers: this.gen_sign()
      };
      let {
        result: _0x5c2fab
      } = await this.request(_0x59190b.copy(_0x3c1992));
      let _0x26f736 = _0x59190b.get(_0x5c2fab, "code", -1);
      if (_0x26f736 == 0) {
        let _0xa3695b = _0x5c2fab?.["data"]?.["sun"] || 0;
        _0xa3695b && (this.sun += _0xa3695b, this.log("刷新收集到" + _0xa3695b + "阳光"));
      } else {
        let _0x31fb82 = _0x59190b.get(_0x5c2fab, "message", "");
        this.log("刷新收集阳光失败[" + _0x26f736 + "]: " + _0x31fb82);
      }
    } catch (_0x36c3fb) {
      console.log(_0x36c3fb);
    }
  }
  async task_get(_0x106583 = {}) {
    try {
      let _0x5dafb5 = {
        fn: "task_get",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/task/get",
        headers: this.gen_sign()
      };
      let {
        result: _0x5b5b9e
      } = await this.request(_0x59190b.copy(_0x5dafb5));
      let _0x1b70e8 = _0x59190b.get(_0x5b5b9e, "code", -1);
      if (_0x1b70e8 == 0) {
        for (let _0xa4b9f1 of _0x5b5b9e?.["data"] || []) {
          if (_0xa4b9f1.title == "邀请好友助力") {
            const _0x267c7f = {
              id: _0xa4b9f1.id,
              progress: _0xa4b9f1.currentProgress,
              max: _0xa4b9f1.progress
            };
            this.help_task_config = _0x267c7f;
          }
          switch (_0xa4b9f1.status) {
            case 0:
              if (_0x1b0bb0.includes(_0xa4b9f1.title)) {
                break;
              }
              for (let _0xf9cd01 = _0xa4b9f1.currentProgress; _0xf9cd01 < _0xa4b9f1.progress; _0xf9cd01++) {
                await this.task_doTask(_0xa4b9f1);
              }
            case 1:
              await this.task_reward(_0xa4b9f1);
              break;
          }
        }
      } else {
        let _0x488133 = _0x59190b.get(_0x5b5b9e, "message", "");
        this.log("获取任务列表失败[" + _0x1b70e8 + "]: " + _0x488133);
      }
    } catch (_0x2804ce) {
      console.log(_0x2804ce);
    }
  }
  async task_doTask(_0x88876b, _0x309080 = {}) {
    try {
      let _0x24c6ac = {
        id: _0x88876b.id
      };
      let _0x251d0b = {
        fn: "task_doTask",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/task/doTask",
        searchParams: _0x24c6ac,
        headers: this.gen_sign(_0x24c6ac)
      };
      let {
        result: _0x3ad869
      } = await this.request(_0x59190b.copy(_0x251d0b));
      let _0x1bc2a5 = _0x59190b.get(_0x3ad869, "code", -1);
      if (_0x1bc2a5 == 0) {
        this.log("完成任务[" + _0x88876b.title + "]成功");
      } else {
        let _0x2e9908 = _0x59190b.get(_0x3ad869, "message", "");
        this.log("完成任务[" + _0x88876b.title + "]失败[" + _0x1bc2a5 + "]: " + _0x2e9908);
      }
    } catch (_0x4b0731) {
      console.log(_0x4b0731);
    }
  }
  async task_doHelpTask(_0x3651b7, _0xd8a140 = {}) {
    try {
      let _0x2d4895 = {
        id: _0x3651b7.help_task_config.id
      };
      let _0x38d267 = {
        fn: "task_doTask",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/task/doTask",
        searchParams: _0x2d4895,
        headers: this.gen_sign(_0x2d4895)
      };
      let {
        result: _0x44faaf
      } = await this.request(_0x59190b.copy(_0x38d267));
      let _0x2c5b97 = _0x59190b.get(_0x44faaf, "code", -1);
      if (_0x2c5b97 == 0) {
        this.can_help_task = false;
        _0x3651b7.help_task_config.progress++;
        this.log("助力账号[" + _0x3651b7.index + "][" + _0x3651b7.name + "]成功: 已邀请" + _0x3651b7.help_task_config.progress + "/" + _0x3651b7.help_task_config.max);
      } else {
        let _0x48529f = _0x59190b.get(_0x44faaf, "message", "");
        this.log("助力账号[" + _0x3651b7.index + "][" + _0x3651b7.name + "]失败[" + _0x2c5b97 + "]: " + _0x48529f);
      }
    } catch (_0x6c09a5) {
      console.log(_0x6c09a5);
    }
  }
  async task_reward(_0x11f239, _0x43e6ad = {}) {
    try {
      let _0x37bc05 = {
        id: _0x11f239.id
      };
      let _0x321e1b = {
        fn: "task_reward",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/task/reward",
        searchParams: _0x37bc05,
        headers: this.gen_sign(_0x37bc05)
      };
      let {
        result: _0x1282ad
      } = await this.request(_0x59190b.copy(_0x321e1b));
      let _0x17a0ca = _0x59190b.get(_0x1282ad, "code", -1);
      if (_0x17a0ca == 0) {
        this.log("领取任务[" + _0x11f239.title + "]奖励成功");
      } else {
        let _0x2a370d = _0x59190b.get(_0x1282ad, "message", "");
        this.log("领取任务[" + _0x11f239.title + "]奖励失败[" + _0x17a0ca + "]: " + _0x2a370d);
      }
    } catch (_0xe12418) {
      console.log(_0xe12418);
    }
  }
  async user_role_get(_0x5a3a10 = {}) {
    try {
      let _0x50768e = {
        fn: "user_role_get",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-role/get",
        headers: this.gen_sign()
      };
      let {
        result: _0x37f152
      } = await this.request(_0x59190b.copy(_0x50768e));
      let _0x5472ff = _0x59190b.get(_0x37f152, "code", -1);
      if (_0x5472ff == 0) {
        _0x37f152?.["data"]?.["isReward"] && (await this.user_role_reward());
        for (let _0x49fb40 of _0x37f152?.["data"]?.["roleList"] || []) {
          if (_0x49fb40.status > 0) {
            continue;
          }
          if (_0x49fb40.unlockType == 1) {
            this.gold >= _0x49fb40.unlockNum ? await this.user_role_goldUnlock(_0x49fb40) : this.all_role_unlock = false;
          } else {
            _0x49fb40.unlockType == 2 && (this.need_help_unlock = true, await this.user_role_findFriendHelpInfo(_0x49fb40));
          }
        }
      } else {
        let _0x351157 = _0x59190b.get(_0x37f152, "message", "");
        this.log("查询伴手礼失败[" + _0x5472ff + "]: " + _0x351157);
      }
    } catch (_0x2e409b) {
      console.log(_0x2e409b);
    }
  }
  async user_role_findFriendHelpInfo(_0x13c3c8, _0x5b58aa = {}) {
    try {
      let _0x5573a9 = {
        userRoleId: _0x13c3c8.id
      };
      let _0x4821c1 = {
        fn: "user_role_findFriendHelpInfo",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-role/findFriendHelpInfo",
        searchParams: _0x5573a9,
        headers: this.gen_sign(_0x5573a9)
      };
      let {
        result: _0x3bf323
      } = await this.request(_0x59190b.copy(_0x4821c1));
      let _0x8cff41 = _0x59190b.get(_0x3bf323, "code", -1);
      if (_0x8cff41 == 0) {
        const _0x4d0b52 = {
          id: _0x13c3c8.id,
          progress: _0x3bf323?.["data"]?.["length"] || 0,
          max: _0x13c3c8.unlockNum
        };
        this.help_role_config = _0x4d0b52;
      } else {
        let _0x1158c8 = _0x59190b.get(_0x3bf323, "message", "");
        this.log("查询角色[" + _0x13c3c8.name + "]邀请进度失败[" + _0x8cff41 + "]: " + _0x1158c8);
      }
    } catch (_0x32927f) {
      console.log(_0x32927f);
    }
  }
  async user_role_friendHelpUnlock(_0x540dd4, _0x2f2311 = {}) {
    try {
      let _0x36f5f0 = {
        userRoleId: _0x540dd4.help_role_config.id
      };
      let _0x1de5c4 = {
        fn: "user_role_friendHelpUnlock",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-role/friendHelpUnlock",
        searchParams: _0x36f5f0,
        headers: this.gen_sign(_0x36f5f0)
      };
      let {
        result: _0x48cb1b
      } = await this.request(_0x59190b.copy(_0x1de5c4));
      let _0xb0a154 = _0x59190b.get(_0x48cb1b, "code", -1);
      if (_0xb0a154 == 0) {
        _0x540dd4.help_role_config.progress++;
        this.log("助力账号[" + _0x540dd4.index + "][" + _0x540dd4.name + "]解锁角色成功: 已邀请" + _0x540dd4.help_role_config.progress + "/" + _0x540dd4.help_role_config.max);
      } else {
        let _0x1e2545 = _0x59190b.get(_0x48cb1b, "message", "");
        this.log("助力账号[" + _0x540dd4.index + "][" + _0x540dd4.name + "]解锁角色失败[" + _0xb0a154 + "]: " + _0x1e2545);
      }
    } catch (_0x42a7cd) {
      console.log(_0x42a7cd);
    }
  }
  async user_role_goldUnlock(_0x5f4c42, _0x11c62d = {}) {
    try {
      let _0x3bdae4 = {
        roleId: _0x5f4c42.roleId
      };
      let _0x34a308 = {
        fn: "user_role_goldUnlock",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-role/goldUnlock",
        searchParams: _0x3bdae4,
        headers: this.gen_sign(_0x3bdae4)
      };
      let {
        result: _0x2895f3
      } = await this.request(_0x59190b.copy(_0x34a308));
      let _0x12d8cb = _0x59190b.get(_0x2895f3, "code", -1);
      if (_0x12d8cb == 0) {
        this.gold -= _0x5f4c42.unlockNum;
        this.log("解锁角色[" + _0x5f4c42.name + "]成功");
        await this.user_role_reward();
      } else {
        let _0x2b13e4 = _0x59190b.get(_0x2895f3, "message", "");
        this.log("解锁角色[" + _0x5f4c42.name + "]失败[" + _0x12d8cb + "]: " + _0x2b13e4);
      }
    } catch (_0x3590f5) {
      console.log(_0x3590f5);
    }
  }
  async user_role_reward(_0x3016bd = {}) {
    try {
      let _0x3a245f = {
        fn: "user_role_reward",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-role/reward",
        headers: this.gen_sign()
      };
      let {
        result: _0x40ccac
      } = await this.request(_0x59190b.copy(_0x3a245f));
      let _0x11fe05 = _0x59190b.get(_0x40ccac, "code", -1);
      if (_0x11fe05 == 0) {
        this.log("领取伴手礼成功: " + _0x40ccac?.["data"]?.["name"]);
      } else {
        let _0x39845a = _0x59190b.get(_0x40ccac, "message", "");
        this.log("领取伴手礼失败[" + _0x11fe05 + "]: " + _0x39845a);
      }
    } catch (_0x2e34bb) {
      console.log(_0x2e34bb);
    }
  }
  async user_land_get(_0x2ccd91 = {}) {
    try {
      let _0x594f52 = {
        fn: "user_land_get",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-land/get",
        headers: this.gen_sign()
      };
      let {
        result: _0x3bd3c6
      } = await this.request(_0x59190b.copy(_0x594f52));
      let _0x91fdcc = _0x59190b.get(_0x3bd3c6, "code", -1);
      if (_0x91fdcc == 0) {
        for (let _0xd129cd of _0x3bd3c6?.["data"]?.["gaUserLandList"] || []) {
          let {
            id: _0x2e6838,
            no: _0x12b15c,
            status: _0x39903f,
            step: _0x476521,
            leftSunCount: _0x4c538c,
            sumSunCount: _0x5bb4d1,
            sunTime: _0x4afa42,
            sunTimestamp: _0x455012,
            needSun: _0x26f73c,
            useSunCount: _0x8874ee,
            unlockGold: _0x57c4ea
          } = _0xd129cd;
          if (!this.land[_0x12b15c]) {
            this.land[_0x12b15c] = {};
          }
          Object.assign(this.land[_0x12b15c], {
            id: _0x2e6838,
            no: _0x12b15c,
            status: _0x39903f,
            step: _0x476521,
            leftSunCount: _0x4c538c,
            sumSunCount: _0x5bb4d1,
            sunTime: _0x4afa42,
            sunTimestamp: _0x455012,
            needSun: _0x26f73c,
            useSunCount: _0x8874ee
          });
          _0x39903f == 0 && (this.gold >= _0x57c4ea ? await this.user_land_unlock(_0xd129cd) : this.all_land_unlock = false);
        }
      } else {
        let _0x23fcc2 = _0x59190b.get(_0x3bd3c6, "message", "");
        this.log("获取账号信息失败[" + _0x91fdcc + "]: " + _0x23fcc2);
      }
    } catch (_0x34f7af) {
      console.log(_0x34f7af);
    }
  }
  async user_land_unlock(_0x3737bf, _0x57ccb5 = {}) {
    try {
      let _0x326f50 = {
        fn: "user_land_unlock",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-land/unlock",
        headers: this.gen_sign()
      };
      let {
        result: _0xe101ac
      } = await this.request(_0x59190b.copy(_0x326f50));
      let _0x27f74e = _0x59190b.get(_0xe101ac, "code", -1);
      if (_0x27f74e == 0) {
        this.log("[" + _0x3737bf.no + "号土地]解锁成功");
        this.gold -= _0x3737bf.unlockGold;
        await this.user_land_get();
      } else {
        let _0x43994e = _0x59190b.get(_0xe101ac, "message", "");
        this.log("[" + _0x3737bf.no + "号土地]解锁失败[" + _0x27f74e + "]: " + _0x43994e);
      }
    } catch (_0x515c4d) {
      console.log(_0x515c4d);
    }
  }
  async user_land_result(_0x39d09c, _0x16a7e9 = {}) {
    let _0x524f4b = false;
    try {
      let _0x2b0983 = {
        no: _0x39d09c.no
      };
      let _0x4aaf10 = {
        fn: "user_land_result",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-land/result",
        searchParams: _0x2b0983,
        headers: this.gen_sign(_0x2b0983)
      };
      let {
        result: _0x5b28d9
      } = await this.request(_0x59190b.copy(_0x4aaf10));
      let _0x5597e7 = _0x59190b.get(_0x5b28d9, "code", -1);
      if (_0x5597e7 == 0) {
        _0x524f4b = true;
        this.refresh_land_step = true;
        this.log("[" + _0x39d09c.no + "号土地]收获成功: 番茄x" + (_0x5b28d9?.["data"] || 0));
        await this.user_land_get();
      } else {
        let _0x5139c5 = _0x59190b.get(_0x5b28d9, "message", "");
        this.log("[" + _0x39d09c.no + "号土地]收获失败[" + _0x5597e7 + "]: " + _0x5139c5);
      }
    } catch (_0x402d56) {
      console.log(_0x402d56);
    } finally {
      return _0x524f4b;
    }
  }
  async user_land_sow(_0x132693, _0x4fbc81 = {}) {
    let _0x5ab128 = false;
    try {
      let _0x41c6e4 = {
        no: _0x132693.no
      };
      let _0x3ae5da = {
        fn: "user_land_sow",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-land/sow",
        searchParams: _0x41c6e4,
        headers: this.gen_sign(_0x41c6e4)
      };
      let {
        result: _0x121ce7
      } = await this.request(_0x59190b.copy(_0x3ae5da));
      let _0x26001b = _0x59190b.get(_0x121ce7, "code", -1);
      if (_0x26001b == 0) {
        _0x5ab128 = true;
        this.refresh_land_step = true;
        this.log("[" + _0x132693.no + "号土地]种植成功");
        await this.user_land_get();
      } else {
        let _0x516d86 = _0x59190b.get(_0x121ce7, "message", "");
        this.log("[" + _0x132693.no + "号土地]种植失败[" + _0x26001b + "]: " + _0x516d86);
      }
    } catch (_0x54ab4c) {
      console.log(_0x54ab4c);
    } finally {
      return _0x5ab128;
    }
  }
  async user_land_sun(_0x4977f3, _0x5142c0 = {}) {
    let _0x1a4fdc = false;
    try {
      let _0x1c94a2 = {
        no: _0x4977f3.no
      };
      let _0x3cb531 = {
        fn: "user_land_sun",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-land/sun",
        searchParams: _0x1c94a2,
        headers: this.gen_sign(_0x1c94a2)
      };
      let {
        result: _0x19332a
      } = await this.request(_0x59190b.copy(_0x3cb531));
      let _0x6ef50c = _0x59190b.get(_0x19332a, "code", -1);
      if (_0x6ef50c == 0) {
        _0x1a4fdc = true;
        this.log("[" + _0x4977f3.no + "号土地]撒阳光成功");
        this.sun -= _0x4977f3.needSun;
        await this.user_land_get();
      } else {
        let _0x346fd2 = _0x59190b.get(_0x19332a, "message", "");
        this.log("[" + _0x4977f3.no + "号土地]撒阳光失败[" + _0x6ef50c + "]: " + _0x346fd2);
      }
    } catch (_0x4626c6) {
      console.log(_0x4626c6);
    } finally {
      return _0x1a4fdc;
    }
  }
  async user_land_level(_0x273356, _0x5a6748 = {}) {
    let _0x3e5ff2 = false;
    try {
      let _0x15f91a = {
        no: _0x273356.no
      };
      let _0x4c5aa1 = {
        fn: "user_land_level",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/user-land/level",
        searchParams: _0x15f91a,
        headers: this.gen_sign(_0x15f91a)
      };
      let {
        result: _0x524c7f
      } = await this.request(_0x59190b.copy(_0x4c5aa1));
      let _0x1545b5 = _0x59190b.get(_0x524c7f, "code", -1);
      if (_0x1545b5 == 0) {
        _0x3e5ff2 = true;
        this.refresh_land_step = true;
        this.log("[" + _0x273356.no + "号土地]浇水升级成功");
        await this.user_land_get();
      } else {
        let _0x5f20d5 = _0x59190b.get(_0x524c7f, "message", "");
        this.log("[" + _0x273356.no + "号土地]浇水升级失败[" + _0x1545b5 + "]: " + _0x5f20d5);
      }
    } catch (_0x27f1f5) {
      console.log(_0x27f1f5);
    } finally {
      return _0x3e5ff2;
    }
  }
  async take_risk_online(_0x221537 = {}) {
    let _0x519eda = false;
    try {
      let _0x1c0ee5 = {
        fn: "take_risk_online",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/take-risk/online",
        headers: this.gen_sign()
      };
      let {
        result: _0x454dbd
      } = await this.request(_0x59190b.copy(_0x1c0ee5));
      let _0x1f6c2a = _0x59190b.get(_0x454dbd, "code", -1);
      if (_0x1f6c2a != 0) {
        let _0x5980d7 = _0x59190b.get(_0x454dbd, "message", "");
        this.log("进入冒险页失败[" + _0x1f6c2a + "]: " + _0x5980d7);
      }
    } catch (_0xfdf459) {
      console.log(_0xfdf459);
    } finally {
      return _0x519eda;
    }
  }
  async take_risk_get(_0x51ad68 = {}) {
    let _0x15b00e = false;
    try {
      let _0x529e58 = {
        fn: "take_risk_get",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/common/take-risk/get",
        headers: this.gen_sign()
      };
      let {
        result: _0x4947bd
      } = await this.request(_0x59190b.copy(_0x529e58));
      let _0x447bbf = _0x59190b.get(_0x4947bd, "code", -1);
      if (_0x447bbf == 0) {
        this.risk_num = _0x4947bd?.["data"]?.["num"] || 0;
        _0x4947bd?.["data"]?.["complete"] === false && (await this.take_risk_up(_0x4947bd?.["data"]?.["gameMapEvent"]));
      } else {
        let _0x26bf38 = _0x59190b.get(_0x4947bd, "message", "");
        this.log("查询冒险次数失败[" + _0x447bbf + "]: " + _0x26bf38);
      }
    } catch (_0x34b87c) {
      console.log(_0x34b87c);
    } finally {
      return _0x15b00e;
    }
  }
  task_risk_print_award(_0x321270) {
    let _0x2fe2b6 = _0x321270?.["data"]?.["gameMapEvent"]?.["gameMapEventAnswerList"]?.["filter"](_0x5dd386 => _0x5dd386?.["dropReward"]?.["finalNum"]) || [];
    _0x2fe2b6?.["length"] ? this.log("触发冒险事件奖励: " + _0x2fe2b6.map(_0x2eb7c8 => _0x2eb7c8.dropReward.name + "x" + _0x2eb7c8.dropReward.finalNum).join(", ")) : this.log("触发冒险事件没有获取奖励");
  }
  async take_risk_go(_0x3f7f65 = {}) {
    let _0x55c1bc = false;
    try {
      let _0x29103e = {
        fn: "take_risk_go",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/common/take-risk/go",
        headers: this.gen_sign()
      };
      let {
        result: _0x43e9f0
      } = await this.request(_0x59190b.copy(_0x29103e));
      let _0x171a55 = _0x59190b.get(_0x43e9f0, "code", -1);
      if (_0x171a55 == 0) {
        this.risk_num = _0x43e9f0?.["data"]?.["num"] || 0;
        _0x43e9f0?.["data"]?.["complete"] ? this.task_risk_print_award(_0x43e9f0) : await this.take_risk_up(_0x43e9f0?.["data"]?.["gameMapEvent"]);
      } else {
        let _0x3b8b62 = _0x59190b.get(_0x43e9f0, "message", "");
        this.log("冒险失败[" + _0x171a55 + "]: " + _0x3b8b62);
        _0x3b8b62?.["includes"]("冒险暂停中") && (this.can_go_risk = false);
      }
    } catch (_0x3037f2) {
      console.log(_0x3037f2);
    } finally {
      return _0x55c1bc;
    }
  }
  async take_risk_up(_0x317f9e, _0x100cfe = {}) {
    let _0x12f613 = false;
    try {
      let _0x1849cd = _0x59190b.randomList(_0x317f9e?.["gameMapEventAnswerList"] || [])?.["jsonId"] || "";
      let _0x2a3723 = {
        jsonId: _0x1849cd
      };
      let _0x4fb251 = {
        fn: "take_risk_up",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/common/take-risk/up",
        searchParams: _0x2a3723,
        headers: this.gen_sign(_0x2a3723)
      };
      let {
        result: _0x138329
      } = await this.request(_0x59190b.copy(_0x4fb251));
      let _0xc2214 = _0x59190b.get(_0x138329, "code", -1);
      if (_0xc2214 == 0) {
        this.risk_num = _0x138329?.["data"]?.["num"] || 0;
        this.task_risk_print_award(_0x138329);
      } else {
        let _0x5e6f80 = _0x59190b.get(_0x138329, "message", "");
        this.log("触发冒险事件[" + _0x1849cd + "]失败[" + _0xc2214 + "]: " + _0x5e6f80);
      }
    } catch (_0x166ba8) {
      console.log(_0x166ba8);
    } finally {
      return _0x12f613;
    }
  }
  async take_risk_reward(_0x3d5304 = {}) {
    try {
      let _0x473417 = {
        fn: "take_risk_reward",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/take-risk/reward",
        headers: this.gen_sign()
      };
      let {
        result: _0x5c9b8a
      } = await this.request(_0x59190b.copy(_0x473417));
      let _0x632630 = _0x59190b.get(_0x5c9b8a, "code", -1);
      if (_0x632630 == 0) {
        this.log("领取冒险定时奖励成功");
      } else {
        let _0x2572ed = _0x59190b.get(_0x5c9b8a, "message", "");
        this.log("领取冒险定时奖励失败[" + _0x632630 + "]: " + _0x2572ed);
      }
    } catch (_0x47b56a) {
      console.log(_0x47b56a);
    }
  }
  async friend_help_task_risk(_0x87f36, _0x2d853d = {}) {
    try {
      let _0x162015 = {
        userId: _0x87f36.userId,
        type: 1,
        randomId: _0x59190b.randomString(32, "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")
      };
      let _0x56dbe7 = {
        fn: "friend_help_task_risk",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend-help/help",
        searchParams: _0x162015,
        headers: this.gen_sign(_0x162015)
      };
      let {
        result: _0x323531
      } = await this.request(_0x59190b.copy(_0x56dbe7));
      let _0x37352f = _0x59190b.get(_0x323531, "code", -1);
      if (_0x37352f == 0) {
        if (_0x323531?.["data"]) {
          this.can_help_risk = false;
          this.log("冒险助力账号[" + _0x87f36.index + "][" + _0x87f36.name + "]成功");
          await _0x87f36.take_risk_reward();
        } else {
          let _0x31db71 = _0x59190b.get(_0x323531, "message", "") || "";
          _0x31db71 = _0x31db71?.["replace"](/\r/, "")?.["split"]("\n")?.["filter"](_0x576498 => _0x576498)?.["join"](",") || "";
          this.log("冒险助力账号[" + _0x87f36.index + "][" + _0x87f36.name + "]失败: " + _0x31db71);
          if (_0x31db71?.["includes"]("助力次数")) {
            this.can_help_risk = false;
          } else {
            _0x31db71?.["includes"]("挂机时间已完成") && (_0x87f36.need_help_risk = false);
          }
        }
      } else {
        let _0x53afb7 = _0x59190b.get(_0x323531, "message", "");
        this.log("冒险助力账号[" + _0x87f36.index + "][" + _0x87f36.name + "]错误[" + _0x37352f + "]: " + _0x53afb7);
      }
    } catch (_0x5055e) {
      console.log(_0x5055e);
    }
  }
  async friend_help(_0x3849db, _0x1cf2f3 = {}) {
    try {
      let _0x548488 = {
        userId: _0x3849db.userId,
        type: 0,
        randomId: _0x59190b.randomString(32, "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")
      };
      let _0x504bcd = {
        fn: "friend_help",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend-help/help",
        searchParams: _0x548488,
        headers: this.gen_sign(_0x548488)
      };
      let {
        result: _0x203c1f
      } = await this.request(_0x59190b.copy(_0x504bcd));
      let _0xdad826 = _0x59190b.get(_0x203c1f, "code", -1);
      if (_0xdad826 == 0) {
        if (_0x203c1f?.["data"]) {
          await this.task_doHelpTask(_0x3849db);
        } else {
          let _0x5a4419 = _0x59190b.get(_0x203c1f, "message", "") || "";
          _0x5a4419 = _0x5a4419?.["replace"](/\r/, "")?.["split"]("\n")?.["filter"](_0x276cbf => _0x276cbf)?.["join"](",") || "";
          this.log("请求助力账号[" + _0x3849db.index + "][" + _0x3849db.name + "]失败: " + _0x5a4419);
          _0x5a4419?.["includes"]("助力次数") && (this.can_help_task = false);
        }
      } else {
        let _0x9f134d = _0x59190b.get(_0x203c1f, "message", "");
        this.log("请求助力账号[" + _0x3849db.index + "][" + _0x3849db.name + "]错误[" + _0xdad826 + "]: " + _0x9f134d);
      }
    } catch (_0x3c68f6) {
      console.log(_0x3c68f6);
    }
  }
  async friend_findRecommend(_0x28706b = {}) {
    try {
      let _0x5e41a3 = {
        fn: "friend_findRecommend",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend/findRecommend",
        headers: this.gen_sign()
      };
      let {
        result: _0x1ee3a0
      } = await this.request(_0x59190b.copy(_0x5e41a3));
      let _0x3bf45e = _0x59190b.get(_0x1ee3a0, "code", -1);
      if (_0x3bf45e == 0) {
        for (let _0x1297d4 of _0x1ee3a0?.["data"] || []) {
          if (!this.can_add_friend) {
            break;
          }
          if (_0x59190b.userList.filter(_0x3399a1 => _0x3399a1.userId == _0x1297d4.userId).length > 0) {
            continue;
          }
          await this.friend_addFriend(_0x1297d4);
        }
      } else {
        let _0x17e0de = _0x59190b.get(_0x1ee3a0, "message", "");
        this.log("查询添加好友列表失败[" + _0x3bf45e + "]: " + _0x17e0de);
      }
    } catch (_0x1b3445) {
      console.log(_0x1b3445);
    }
  }
  async friend_addFriend(_0x3127d9, _0xe2ce48 = {}) {
    try {
      let _0x470256 = {
        friendUserId: _0x3127d9.userId
      };
      let _0x2177b9 = {
        fn: "friend_addFriend",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend/addFriend",
        searchParams: _0x470256,
        headers: this.gen_sign(_0x470256)
      };
      let {
        result: _0x303693
      } = await this.request(_0x59190b.copy(_0x2177b9));
      let _0x4c474a = _0x59190b.get(_0x303693, "code", -1);
      if (_0x4c474a == 0) {
        this.log("添加好友[" + _0x3127d9.nickName + "]成功");
      } else {
        let _0x59d11e = _0x59190b.get(_0x303693, "message", "");
        this.log("添加好友[" + _0x3127d9.nickName + "]失败[" + _0x4c474a + "]: " + _0x59d11e);
        _0x59d11e?.["includes"]("达到好友上限") && (this.can_add_friend = false);
      }
    } catch (_0x3ab247) {
      console.log(_0x3ab247);
    }
  }
  async friend_deleteFriend(_0x52347f, _0x473533 = {}) {
    try {
      let _0x315af6 = {
        friendUserId: _0x52347f.userId
      };
      let _0xfe5df6 = {
        fn: "friend_deleteFriend",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend/deleteFriend",
        searchParams: _0x315af6,
        headers: this.gen_sign(_0x315af6)
      };
      let {
        result: _0x404cc1
      } = await this.request(_0x59190b.copy(_0xfe5df6));
      let _0x5e3349 = _0x59190b.get(_0x404cc1, "code", -1);
      if (_0x5e3349 == 0) {
        this.log("删除好友[" + _0x52347f.nickName + "]成功");
      } else {
        let _0x5adf96 = _0x59190b.get(_0x404cc1, "message", "");
        this.log("删除好友[" + _0x52347f.nickName + "]失败[" + _0x5e3349 + "]: " + _0x5adf96);
      }
    } catch (_0x33395f) {
      console.log(_0x33395f);
    }
  }
  async friend_findFriend(_0x55e49a = {}) {
    try {
      let _0x3274e8 = {
        fn: "friend_findFriend",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend/findFriend",
        headers: this.gen_sign()
      };
      let {
        result: _0x5acf79
      } = await this.request(_0x59190b.copy(_0x3274e8));
      let _0x36fa64 = _0x59190b.get(_0x5acf79, "code", -1);
      if (_0x36fa64 == 0) {
        for (let _0x2e2df0 of (_0x5acf79?.["data"]?.["friendList"] || []).sort(function (_0x4405a3, _0x268218) {
          return _0x268218.gold - _0x4405a3.gold;
        })) {
          await this.friend_stealGold(_0x2e2df0);
        }
      } else {
        let _0x1f44e8 = _0x59190b.get(_0x5acf79, "message", "");
        this.log("查询好友列表失败[" + _0x36fa64 + "]: " + _0x1f44e8);
      }
    } catch (_0x59ea0f) {
      console.log(_0x59ea0f);
    }
  }
  async friend_stealGold(_0x29e913, _0x3449ff = {}) {
    try {
      let _0x354e49 = {
        friendUserId: _0x29e913.userId
      };
      let _0x592159 = {
        fn: "friend_stealGold",
        method: "get",
        url: _0x1367a7 + "/qiehuangsecond/ga/friend/stealGold",
        searchParams: _0x354e49,
        headers: this.gen_sign(_0x354e49)
      };
      let {
        result: _0x102ff2
      } = await this.request(_0x59190b.copy(_0x592159));
      let _0x10dceb = _0x59190b.get(_0x102ff2, "code", -1);
      if (_0x10dceb == 0) {
        this.log("偷取好友[" + _0x29e913.nickName + "]: 阳光x" + (_0x102ff2?.["data"] || 0));
      } else {
        let _0x570099 = _0x59190b.get(_0x102ff2, "message", "");
        this.log("偷取好友[" + _0x29e913.nickName + "]阳光失败[" + _0x10dceb + "]: " + _0x570099);
      }
    } catch (_0x116716) {
      console.log(_0x116716);
    }
  }
  async risk_task(_0xe5737a = {}) {
    await this.take_risk_get();
    await this.take_risk_online();
    await this.take_risk_reward();
    this.log("可以冒险" + this.risk_num + "次");
    while (this.risk_num-- > 0 && this.can_go_risk) {
      await this.take_risk_go();
    }
  }
  async land_task(_0x5042ce = {}) {
    await this.user_land_get();
    this.all_land_unlock && this.all_role_unlock;
    for (let _0x34aa5c in this.land) {
      let _0x28c530 = this.land[_0x34aa5c];
      if (_0x28c530.status == 0) {
        continue;
      }
      let {
        step: _0x1845bc,
        useSunCount: _0x574ecf,
        leftSunCount: _0x768f77
      } = _0x28c530;
      let _0x29bc45 = _0x574ecf + _0x768f77;
      this.log("[" + _0x28c530.no + "号土地]: " + _0x4ecdfd[_0x1845bc] + ", 阶段" + _0x1845bc + ", 进度" + _0x574ecf + "/" + _0x29bc45);
      this.refresh_land_step = true;
      while (this.refresh_land_step) {
        this.refresh_land_step = false;
        switch (_0x1845bc) {
          case 0:
            await this.user_land_sow(_0x28c530);
            break;
          default:
            if (_0x768f77 == 0) {
              if (_0x1845bc == 5) {
                await this.user_land_result(_0x28c530);
              } else {
                let _0x2415eb = Date.now();
                _0x2415eb >= (_0x28c530.sunTime + _0x28c530.sunTimestamp) * 1000 && (await this.user_land_level(_0x28c530));
              }
            } else {
              if (this.sun >= _0x28c530.needSun) {
                let _0x4f7a26 = Date.now();
                _0x4f7a26 >= (_0x28c530.sunTime + _0x28c530.sunTimestamp) * 1000 && (await this.user_land_sun(_0x28c530));
              }
            }
            break;
        }
      }
    }
  }
  async userInfo_print() {
    await this.userInfo_get();
    const _0x4d2a5f = {
      notify: true
    };
    this.log(": 阳光x" + this.sun + ", 调料x" + this.gold + ", 番茄x" + this.score, _0x4d2a5f);
  }
  async userTask(_0x41914b = {}) {
    if (!(await this.login())) {
      return;
    }
    await this.userInfo_autoSun();
    await this.task_get();
    await this.userInfo_get();
    await this.user_role_get();
    await this.risk_task();
    await this.land_task();
  }
  async steal_task(_0xcc7f87 = 5, _0x130482 = {}) {
    for (let _0x284f65 = 0; _0x284f65 < _0xcc7f87 && this.can_add_friend && _0xa8898c; _0x284f65++) {
      await this.friend_findRecommend();
    }
    await this.friend_findFriend();
  }
}
!(async () => {
  if (!(await _0x2167a8())) {
    return;
  }
  if (!_0x59190b.read_env(_0x190ade)) {
    return;
  }
  _0x59190b.log("\n--------------- 开始日常任务 ---------------");
  for (let _0x24982e of _0x59190b.userList) {
    await _0x24982e.userTask();
  }
  let _0x281e91 = _0x59190b.userList.filter(_0x1a4a3b => _0x1a4a3b.valid);
  if (_0x281e91.length == 0) {
    return;
  }
  _0x59190b.log("\n--------------- 开始偷取好友 ---------------");
  for (let _0x3ad58e of _0x281e91) {
    await _0x3ad58e.steal_task();
  }
  if (_0x281e91.length > 1) {
    _0x59190b.log("\n--------------- 开始冒险互助 ---------------");
    for (let _0x37da5f of _0x281e91.filter(_0x546252 => _0x546252.need_help_risk)) {
      for (let _0x80621c of _0x281e91.filter(_0x1ff998 => _0x1ff998.index != _0x37da5f.index && _0x1ff998.can_help_risk)) {
        if (!_0x37da5f.need_help_risk) {
          break;
        }
        await _0x80621c.friend_help_task_risk(_0x37da5f);
      }
    }
    _0x59190b.log("\n--------------- 开始角色解锁互助 ---------------");
    for (let _0x257e8d of _0x281e91.filter(_0x529071 => _0x529071.need_help_unlock)) {
      _0x257e8d.log("角色解锁已邀请" + _0x257e8d.help_role_config.progress + "/" + _0x257e8d.help_role_config.max);
      for (let _0x176c08 of _0x281e91.filter(_0x1d5545 => _0x1d5545.index != _0x257e8d.index && _0x1d5545.can_help_unlock)) {
        if (_0x257e8d.help_role_config.progress >= _0x257e8d.help_role_config.max) {
          break;
        }
        await _0x176c08.user_role_friendHelpUnlock(_0x257e8d);
      }
    }
    _0x59190b.log("\n--------------- 开始阳光互助 ---------------");
    for (let _0x40922d = 0; _0x40922d < _0x281e91.length; _0x40922d++) {
      let _0x1fda80 = _0x281e91[_0x40922d];
      _0x1fda80.log("任务已邀请" + _0x1fda80.help_task_config.progress + "/" + _0x1fda80.help_task_config.max);
      for (let _0x45e6b8 = 0; _0x45e6b8 < _0x281e91.length - 1; _0x45e6b8++) {
        let _0x352293 = _0x281e91[(_0x40922d + _0x45e6b8 + 1) % _0x281e91.length];
        if (_0x1fda80.help_task_config.progress >= _0x1fda80.help_task_config.max) {
          break;
        }
        if (!_0x352293.can_help_task) {
          continue;
        }
        await _0x352293.friend_help(_0x1fda80);
      }
    }
  }
  _0x59190b.log("\n--------------- 查询状态 ---------------");
  for (let _0xc73501 of _0x281e91) {
    await _0xc73501.userInfo_print();
  }
})().catch(_0x2b3b11 => _0x59190b.log(_0x2b3b11)).finally(() => _0x59190b.exitNow());
async function _0x2167a8(_0x5a0b86 = 0) {
  let _0x2aade7 = false;
  try {
    let _0x140444 = {
      fn: "auth",
      method: "get",
      url: _0x55f8e0,
      timeout: 20000
    };
    let {
      statusCode: _0x343088,
      result: _0x114ed9
    } = await _0x3ddc05.request(_0x140444);
    if (_0x343088 != 200) {
      _0x5a0b86++ < _0x20385e && (_0x2aade7 = await _0x2167a8(_0x5a0b86));
      return _0x2aade7;
    }
    if (_0x114ed9?.["code"] == 0) {
      _0x114ed9 = JSON.parse(_0x114ed9.data.file.data);
      if (_0x114ed9?.["commonNotify"] && _0x114ed9.commonNotify.length > 0) {
        const _0x3de53a = {
          notify: true
        };
        _0x59190b.log(_0x114ed9.commonNotify.join("\n") + "\n", _0x3de53a);
      }
      _0x114ed9?.["commonMsg"] && _0x114ed9.commonMsg.length > 0 && _0x59190b.log(_0x114ed9.commonMsg.join("\n") + "\n");
      if (_0x114ed9[_0x58fb3a]) {
        let _0x56cce0 = _0x114ed9[_0x58fb3a];
        _0x56cce0.status == 0 ? _0x5a3373 >= _0x56cce0.version ? (_0x2aade7 = true, _0x59190b.log(_0x56cce0.msg[_0x56cce0.status]), _0x59190b.log(_0x56cce0.updateMsg), _0x59190b.log("现在运行的脚本版本是：" + _0x5a3373 + "，最新脚本版本：" + _0x56cce0.latestVersion)) : _0x59190b.log(_0x56cce0.versionMsg) : _0x59190b.log(_0x56cce0.msg[_0x56cce0.status]);
      } else {
        _0x59190b.log(_0x114ed9.errorMsg);
      }
    } else {
      _0x5a0b86++ < _0x20385e && (_0x2aade7 = await _0x2167a8(_0x5a0b86));
    }
  } catch (_0x1f1680) {
    _0x59190b.log(_0x1f1680);
  } finally {
    return _0x2aade7;
  }
}
function _0x1f8978(_0x58a9e0) {
  return new class {
    constructor(_0x189bc1) {
      this.name = _0x189bc1;
      this.startTime = Date.now();
      const _0x186d64 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x186d64);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x171341, _0x54ab32 = {}) {
      let _0x13d2b3 = {
        console: true
      };
      Object.assign(_0x13d2b3, _0x54ab32);
      if (_0x13d2b3.time) {
        let _0x270948 = _0x13d2b3.fmt || "hh:mm:ss";
        _0x171341 = "[" + this.time(_0x270948) + "]" + _0x171341;
      }
      if (_0x13d2b3.notify) {
        this.notifyStr.push(_0x171341);
      }
      if (_0x13d2b3.console) {
        console.log(_0x171341);
      }
    }
    get(_0x576cc5, _0x3364d5, _0x4263d3 = "") {
      let _0x5d3f40 = _0x4263d3;
      _0x576cc5?.["hasOwnProperty"](_0x3364d5) && (_0x5d3f40 = _0x576cc5[_0x3364d5]);
      return _0x5d3f40;
    }
    pop(_0x3a9a2d, _0x267597, _0x2b9a54 = "") {
      let _0xa74633 = _0x2b9a54;
      _0x3a9a2d?.["hasOwnProperty"](_0x267597) && (_0xa74633 = _0x3a9a2d[_0x267597], delete _0x3a9a2d[_0x267597]);
      return _0xa74633;
    }
    copy(_0x24815e) {
      return Object.assign({}, _0x24815e);
    }
    read_env(_0x3f077d) {
      let _0x263693 = _0x1533f1.map(_0x5ef76a => process.env[_0x5ef76a]);
      for (let _0x226f11 of _0x263693.filter(_0x345523 => !!_0x345523)) {
        for (let _0x18f3ab of _0x226f11.split(_0x45ff23).filter(_0x34bf43 => !!_0x34bf43)) {
          if (this.userList.includes(_0x18f3ab)) {
            continue;
          }
          this.userList.push(new _0x3f077d(_0x18f3ab));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x420774 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1533f1.map(_0x43fdf7 => "[" + _0x43fdf7 + "]").join("或"), _0x420774);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x5e6d30, _0x12ae82, _0x18cb1a = {}) {
      while (_0x12ae82.idx < _0x59190b.userList.length) {
        let _0x3d80fe = _0x59190b.userList[_0x12ae82.idx++];
        if (!_0x3d80fe.valid) {
          continue;
        }
        await _0x3d80fe[_0x5e6d30](_0x18cb1a);
      }
    }
    async threadTask(_0x1b77f8, _0x2c37ad) {
      let _0x23f81c = [];
      let _0x1f50c0 = {
        idx: 0
      };
      while (_0x2c37ad--) {
        _0x23f81c.push(this.threads(_0x1b77f8, _0x1f50c0));
      }
      await Promise.all(_0x23f81c);
    }
    time(_0x22198d, _0x33e535 = null) {
      let _0x3a8279 = _0x33e535 ? new Date(_0x33e535) : new Date();
      let _0xcd9019 = {
        "M+": _0x3a8279.getMonth() + 1,
        "d+": _0x3a8279.getDate(),
        "h+": _0x3a8279.getHours(),
        "m+": _0x3a8279.getMinutes(),
        "s+": _0x3a8279.getSeconds(),
        "q+": Math.floor((_0x3a8279.getMonth() + 3) / 3),
        S: this.padStr(_0x3a8279.getMilliseconds(), 3)
      };
      /(y+)/.test(_0x22198d) && (_0x22198d = _0x22198d.replace(RegExp.$1, (_0x3a8279.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3e28c7 in _0xcd9019) new RegExp("(" + _0x3e28c7 + ")").test(_0x22198d) && (_0x22198d = _0x22198d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xcd9019[_0x3e28c7] : ("00" + _0xcd9019[_0x3e28c7]).substr(("" + _0xcd9019[_0x3e28c7]).length)));
      return _0x22198d;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x21e872 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x21e872.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x433897, _0x48984a, _0x5c45fc = {}) {
      let _0x469dd4 = _0x5c45fc.padding || "0";
      let _0x8056f6 = _0x5c45fc.mode || "l";
      let _0x2bdb13 = String(_0x433897);
      let _0x95bc13 = _0x48984a > _0x2bdb13.length ? _0x48984a - _0x2bdb13.length : 0;
      let _0x4f689a = "";
      for (let _0x1aaba7 = 0; _0x1aaba7 < _0x95bc13; _0x1aaba7++) {
        _0x4f689a += _0x469dd4;
      }
      _0x8056f6 == "r" ? _0x2bdb13 = _0x2bdb13 + _0x4f689a : _0x2bdb13 = _0x4f689a + _0x2bdb13;
      return _0x2bdb13;
    }
    json2str(_0x3d15c6, _0x1564b, _0x4d3688 = false) {
      let _0x9e5f26 = [];
      for (let _0x32b01c of Object.keys(_0x3d15c6).sort()) {
        let _0x1f44c3 = _0x3d15c6[_0x32b01c];
        if (_0x1f44c3 && _0x4d3688) {
          _0x1f44c3 = encodeURIComponent(_0x1f44c3);
        }
        _0x9e5f26.push(_0x32b01c + "=" + _0x1f44c3);
      }
      return _0x9e5f26.join(_0x1564b);
    }
    str2json(_0x40f9a9, _0x53200d = false) {
      let _0x2eebad = {};
      for (let _0x4c418f of _0x40f9a9.split("&")) {
        if (!_0x4c418f) {
          continue;
        }
        let _0x4e4f68 = _0x4c418f.indexOf("=");
        if (_0x4e4f68 == -1) {
          continue;
        }
        let _0x5ef434 = _0x4c418f.substr(0, _0x4e4f68);
        let _0x1a1f10 = _0x4c418f.substr(_0x4e4f68 + 1);
        if (_0x53200d) {
          _0x1a1f10 = decodeURIComponent(_0x1a1f10);
        }
        _0x2eebad[_0x5ef434] = _0x1a1f10;
      }
      return _0x2eebad;
    }
    randomPattern(_0x42f0ad, _0x53b7f5 = "abcdef0123456789") {
      let _0x4975a0 = "";
      for (let _0x31d9a2 of _0x42f0ad) {
        if (_0x31d9a2 == "x") {
          _0x4975a0 += _0x53b7f5.charAt(Math.floor(Math.random() * _0x53b7f5.length));
        } else {
          _0x31d9a2 == "X" ? _0x4975a0 += _0x53b7f5.charAt(Math.floor(Math.random() * _0x53b7f5.length)).toUpperCase() : _0x4975a0 += _0x31d9a2;
        }
      }
      return _0x4975a0;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x136dff, _0x188089 = "abcdef0123456789") {
      let _0x1d5962 = "";
      for (let _0x3c538a = 0; _0x3c538a < _0x136dff; _0x3c538a++) {
        _0x1d5962 += _0x188089.charAt(Math.floor(Math.random() * _0x188089.length));
      }
      return _0x1d5962;
    }
    randomList(_0x2e46b0) {
      let _0x4b6322 = Math.floor(Math.random() * _0x2e46b0.length);
      return _0x2e46b0[_0x4b6322];
    }
    wait(_0x1cb19c) {
      return new Promise(_0x5a9b76 => setTimeout(_0x5a9b76, _0x1cb19c));
    }
    async exitNow() {
      await this.showmsg();
      let _0x50f0a8 = Date.now();
      let _0x3771d0 = (_0x50f0a8 - this.startTime) / 1000;
      this.log("");
      const _0x299b81 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3771d0 + "秒", _0x299b81);
      process.exit(0);
    }
    normalize_time(_0x20bfc3, _0x1ca093 = {}) {
      let _0x24e85a = _0x1ca093.len || _0x35d1da;
      _0x20bfc3 = _0x20bfc3.toString();
      let _0x597b74 = _0x20bfc3.length;
      while (_0x597b74 < _0x24e85a) {
        _0x20bfc3 += "0";
      }
      _0x597b74 > _0x24e85a && (_0x20bfc3 = _0x20bfc3.slice(0, 13));
      return parseInt(_0x20bfc3);
    }
    async wait_until(_0x189a94, _0x40af5 = {}) {
      let _0x530a25 = _0x40af5.logger || this;
      let _0x2d270b = _0x40af5.interval || _0x1ae35f;
      let _0x2ad480 = _0x40af5.limit || _0x2af1ea;
      let _0x298b09 = _0x40af5.ahead || _0x349fee;
      if (typeof _0x189a94 == "string" && _0x189a94.includes(":")) {
        if (_0x189a94.includes("-")) {
          _0x189a94 = new Date(_0x189a94).getTime();
        } else {
          let _0x504a07 = this.time("yyyy-MM-dd ");
          _0x189a94 = new Date(_0x504a07 + _0x189a94).getTime();
        }
      }
      let _0xd66c4 = this.normalize_time(_0x189a94) - _0x298b09;
      let _0x56d58a = this.time("hh:mm:ss.S", _0xd66c4);
      let _0x4667ab = Date.now();
      _0x4667ab > _0xd66c4 && (_0xd66c4 += 86400000);
      let _0x5cd7be = _0xd66c4 - _0x4667ab;
      if (_0x5cd7be > _0x2ad480) {
        const _0x35f05e = {
          time: true
        };
        _0x530a25.log("离目标时间[" + _0x56d58a + "]大于" + _0x2ad480 / 1000 + "秒,不等待", _0x35f05e);
      } else {
        const _0x21b8ea = {
          time: true
        };
        _0x530a25.log("离目标时间[" + _0x56d58a + "]还有" + _0x5cd7be / 1000 + "秒,开始等待", _0x21b8ea);
        while (_0x5cd7be > 0) {
          let _0x4a4cea = Math.min(_0x5cd7be, _0x2d270b);
          await this.wait(_0x4a4cea);
          _0x4667ab = Date.now();
          _0x5cd7be = _0xd66c4 - _0x4667ab;
        }
        const _0x21b9d0 = {
          time: true
        };
        _0x530a25.log("已完成等待", _0x21b9d0);
      }
    }
    async wait_gap_interval(_0x298d1a, _0xd90a04) {
      let _0x4d42c0 = Date.now() - _0x298d1a;
      _0x4d42c0 < _0xd90a04 && (await this.wait(_0xd90a04 - _0x4d42c0));
    }
  }(_0x58a9e0);
}