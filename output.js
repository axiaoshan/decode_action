//Tue Jan 20 2026 05:18:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _Item_BetaCapsule = function () {
  return function (bytecode, _Kaiju_Juggler_539) {
    {
      const _Ultra_King_EmeriumRay = [];
      let _Ultra_Ultraman_Slugger = 0;
      while (_Ultra_Ultraman_Slugger < bytecode.length) {
        {
          const _Kaiju_Zog_755 = bytecode[_Ultra_Ultraman_Slugger++];
          switch (_Kaiju_Zog_755) {
            case 158:
              _Ultra_King_EmeriumRay.push(bytecode[_Ultra_Ultraman_Slugger++]);
              break;
            case 43:
              {
                {
                  const _Ultra_Mebius_SolgentRay = _Ultra_King_EmeriumRay.pop();
                  const _Kaiju_Bemular_702 = _Ultra_King_EmeriumRay.pop();
                  _Ultra_King_EmeriumRay.push(_Ultra_Mebius_SolgentRay + _Kaiju_Bemular_702);
                }
              }
              break;
            case 96:
              {
                {
                  const _Ultra_Ginga_SpaciumBeam = _Ultra_King_EmeriumRay.pop();
                  const _Kaiju_Tartarus_218 = _Ultra_King_EmeriumRay.pop();
                  _Ultra_King_EmeriumRay.push(_Kaiju_Tartarus_218 - _Ultra_Ginga_SpaciumBeam);
                }
              }
              break;
            case 60:
              {
                const _Ultra_Victory_WreckingBurst = _Ultra_King_EmeriumRay.pop();
                const _Kaiju_Grimdo_855 = _Ultra_King_EmeriumRay.pop();
                _Ultra_King_EmeriumRay.push(_Ultra_Victory_WreckingBurst ^ _Kaiju_Grimdo_855);
              }
              break;
            case 58:
              return _Ultra_King_EmeriumRay.pop();
            default:
              _Ultra_King_EmeriumRay.push(_Kaiju_Juggler_539 ^ _Kaiju_Zog_755);
          }
        }
      }
    }
  };
}();
const _Item_GutsSparklence = function () {
  try {
    {
      const _Ultra_Victory_ZepellionRay = Math.sin.toString().indexOf("[native code]") !== -1;
      if (!_Ultra_Victory_ZepellionRay) {
        return 57005;
      }
      return 48879;
    }
  } catch (_Ultra_King_LeoKick) {
    return 0;
  }
}();
const _M78_Link_e11506 = function () {
  const _Ultra_Decker_StriumRay = typeof console !== "undefined" && console.log ? console : {
    log: function () {}
  };
  const _Ultra_Dyna_M87Ray = /(token|key|auth|password|secret|cookie)[=:\s]*[\w\-\.]{10,}/gi;
  return function (..._Kaiju_HyperZetton_924) {
    try {
      const _Kaiju_Gatanothor_491 = _Kaiju_HyperZetton_924.map(_Kaiju_Mephilas_114 => {
        {
          if (typeof _Kaiju_Mephilas_114 === "string") {
            return _Kaiju_Mephilas_114.replace(_Ultra_Dyna_M87Ray, "$1=***[SECURE]***");
          }
          return _Kaiju_Mephilas_114;
        }
      });
      _Ultra_Decker_StriumRay.log.apply(_Ultra_Decker_StriumRay, _Kaiju_Gatanothor_491);
    } catch (_Kaiju_Greeza_780) {}
  };
}();
const fs = require("fs");
const axios = require("axios");
const CryptoJS = require("crypto-js");
(function checkIntegrity() {
  try {
    {
      const _Ultra_Blazar_SpaciumBeam = fs.readFileSync(__filename, "utf-8");
      const _Kaiju_RedKing_965 = _Ultra_Blazar_SpaciumBeam.split(/\r?\n/);
      const targetLine = _Kaiju_RedKing_965[2] || "";
      if (!targetLine.includes("shardCode=f2m8PqcbK")) {
        {
          _M78_Link_e11506("\n❌ 头部注释被篡改，保护机制触发，程序退出。\n");
          process.exit(1);
        }
      }
    }
  } catch (_Kaiju_Grimdo_68) {}
})();
const CONFIG = {
  DEFAULT_UA: "okhttp/4.10.0",
  MIN_WATCH: 10,
  RETRY: 3,
  INTERVAL: 3000
};
const log = _Ultra_Taiga_Slugger => {
  const _Kaiju_Mephilas_162 = new Date().toLocaleTimeString();
  _M78_Link_e11506("[" + _Kaiju_Mephilas_162 + "] " + _Ultra_Taiga_Slugger);
};
const sleep = _Ultra_Orb_SpaciumBeam => new Promise(_Kaiju_Mephilas_688 => setTimeout(_Kaiju_Mephilas_688, _Ultra_Orb_SpaciumBeam));
function encryptId(_Kaiju_Baltan_313, code) {
  try {
    {
      const _Ultra_Blazar_PhotonEdge = CryptoJS.enc.Utf8.parse(code.substring(0, 8));
      return CryptoJS.DES.encrypt(String(_Kaiju_Baltan_313), _Ultra_Blazar_PhotonEdge, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
    }
  } catch (_Kaiju_Grimdo_468) {
    return null;
  }
}
function encryptPwd(_Ultra_Ginga_SolgentRay) {
  return CryptoJS.MD5(String(_Ultra_Ginga_SolgentRay)).toString().toUpperCase();
}
async function request(_Ultra_Taro_EmeriumRay, _Kaiju_Gatanothor_653, _Kaiju_RedKing_28 = "POST", data = null, _Kaiju_Tartarus_411 = null) {
  let _Kaiju_Tartarus_774 = CONFIG.RETRY;
  while (_Kaiju_Tartarus_774 >= 0) {
    try {
      const _Kaiju_Baltan_611 = _Kaiju_RedKing_28 === "POST" && (!data || Object.keys(data).length === 0);
      let _Kaiju_Baltan_503 = {};
      if (typeof _Kaiju_Gatanothor_653 === "string") {
        {
          _Kaiju_Baltan_503 = {
            Host: "gw.jiudageapp.com",
            platform: "Android",
            version: "v1.6.2",
            authorization: _Kaiju_Gatanothor_653,
            "user-agent": CONFIG.DEFAULT_UA,
            "content-type": "application/json;charset=UTF-8",
            "accept-encoding": "gzip"
          };
        }
      } else {
        _Kaiju_Baltan_503 = _Kaiju_Gatanothor_653;
      }
      const _Ultra_Nexus_M87Ray = {
        url: _Ultra_Taro_EmeriumRay,
        method: _Kaiju_RedKing_28,
        headers: _Kaiju_Baltan_503,
        params: _Kaiju_Tartarus_411,
        data: _Kaiju_Baltan_611 ? "" : data || {},
        timeout: 15000
      };
      if (_Kaiju_Baltan_611) {
        _Ultra_Nexus_M87Ray.transformRequest = [(_Kaiju_Belial_448, _Kaiju_Eleking_377) => {
          delete _Kaiju_Eleking_377["Content-Type"];
          return _Kaiju_Belial_448;
        }];
      }
      const _Ultra_Jack_SolgentRay = await axios(_Ultra_Nexus_M87Ray);
      return _Ultra_Jack_SolgentRay.data;
    } catch (_Kaiju_Empera_194) {
      if (_Kaiju_Tartarus_774 === 0) {
        throw _Kaiju_Empera_194;
      }
      _Kaiju_Tartarus_774--;
      await sleep(1500);
    }
  }
}
async function doLogin(_Kaiju_Tartarus_480, _Ultra_80_CosmoMiracleRay) {
  log("检测到账密格式，正在登录 (" + _Kaiju_Tartarus_480 + ")...");
  const _Kaiju_Zog_40 = {
    platform: "Android",
    version: "v1.6.2",
    "user-agent": CONFIG.DEFAULT_UA,
    "content-type": "application/json;charset=UTF-8"
  };
  const _Kaiju_Bemular_202 = {
    phone: _Kaiju_Tartarus_480,
    password: encryptPwd(_Ultra_80_CosmoMiracleRay)
  };
  try {
    {
      const _Kaiju_Gomora_784 = await request("https://gw.jiudageapp.com/api/web/auth/pwdLogin", _Kaiju_Zog_40, "POST", _Kaiju_Bemular_202);
      if (_Kaiju_Gomora_784.code == 200 && _Kaiju_Gomora_784.result && _Kaiju_Gomora_784.result.token) {
        log("✅ 登录成功，获取到 Token");
        return _Kaiju_Gomora_784.result.token;
      } else {
        {
          throw new Error(_Kaiju_Gomora_784.message || "登录失败");
        }
      }
    }
  } catch (_Kaiju_Gomora_790) {
    {
      log("❌ 登录异常: " + _Kaiju_Gomora_790.message);
      return null;
    }
  }
}
async function runAccount(_Kaiju_Gatanothor_536, _Ultra_King_LightningNoa) {
  _M78_Link_e11506("\n========== 账号 " + (_Kaiju_Gatanothor_536 + 1) + " ==========");
  let token = "";
  const _Kaiju_Belial_263 = _Ultra_King_LightningNoa.split("#");
  if (_Kaiju_Belial_263.length >= 2 && /^\d{11}$/.test(_Kaiju_Belial_263[0])) {
    {
      token = await doLogin(_Kaiju_Belial_263[0], _Kaiju_Belial_263[1]);
      if (!token) {
        return;
      }
    }
  } else {
    token = _Kaiju_Belial_263[0];
  }
  try {
    {
      log("正在获取任务...");
      const info = await request("https://gw.jiudageapp.com/api/web/member/getMemberCenterInfo", token);
      if (!info || info.code != 200) {
        {
          log("❌ 获取失败: " + (info ? info.message : "接口无响应/Token失效"));
          return;
        }
      }
      const result = info.result || info.data || {};
      const inviteCode = result.inviteCode;
      const _Kaiju_HyperZetton_575 = result.videoCount || 0;
      const _Ultra_Legend_PhotonEdge = result.watchedVideoCount || 0;
      const _Kaiju_Greeza_792 = result.unlockTaskState;
      const memberPhone = result.memberPhone || result.nickName || "未知用户";
      const _Ultra_Blazar_CosmoMiracleRay = result.contribution || 0;
      if (!inviteCode) {
        {
          log("❌ 致命错误: 未获取到邀请码 (Key)，无法加密，请检查账号状态");
          return;
        }
      }
      if (_Kaiju_Greeza_792 != 1) {
        log("❌ 任务未开启或状态异常 (State: " + _Kaiju_Greeza_792 + ")");
        return;
      }
      log("用户: " + memberPhone + " | 进度: " + _Ultra_Legend_PhotonEdge + "/" + _Kaiju_HyperZetton_575 + " | 贡献: " + _Ultra_Blazar_CosmoMiracleRay);
      if (_Ultra_Legend_PhotonEdge >= _Kaiju_HyperZetton_575) {
        {
          log("✅ 今日任务已全部完成");
          return;
        }
      }
      const _Kaiju_Tregear_95 = _Kaiju_HyperZetton_575 - _Ultra_Legend_PhotonEdge;
      for (let _Kaiju_HyperZetton_463 = 0; _Kaiju_HyperZetton_463 < _Kaiju_Tregear_95; _Kaiju_HyperZetton_463++) {
        {
          const _Ultra_Decker_CosmoMiracleRay = _Ultra_Legend_PhotonEdge + _Kaiju_HyperZetton_463 + 1;
          _M78_Link_e11506("\n--- 任务 " + _Ultra_Decker_CosmoMiracleRay + " / " + _Kaiju_HyperZetton_575 + " ---");
          const _Ultra_Taiga_LeoKick = await request("https://gw.jiudageapp.com/api/web/member/get/internalAdvertisement", token);
          const _Kaiju_Tregear_812 = _Ultra_Taiga_LeoKick.result || (_Ultra_Taiga_LeoKick.data?.["list"] ? _Ultra_Taiga_LeoKick.data.list[0] : null);
          if (!_Kaiju_Tregear_812) {
            log("⚠️ 暂无广告可获取");
            break;
          }
          const {
            id: _Kaiju_Belial_285,
            videoId: videoId,
            videoUrl: _Ultra_Dyna_StriumRay,
            title: _Ultra_Cosmos_CosmoMiracleRay
          } = _Kaiju_Tregear_812;
          const _Ultra_Zero_M87Ray = _Kaiju_Belial_285 || videoId;
          log("广告: " + _Ultra_Cosmos_CosmoMiracleRay);
          let _Ultra_Cosmos_PhotonEdge = 30;
          if (_Ultra_Dyna_StriumRay && _Ultra_Dyna_StriumRay.startsWith("http")) {
            try {
              {
                const _Kaiju_Baltan_606 = await axios.head(_Ultra_Dyna_StriumRay, {
                  timeout: 5000
                });
                const _Ultra_Zero_StriumRay = (_Kaiju_Baltan_606.headers["content-length"] || 0) / 1024 / 1024;
                _Ultra_Cosmos_PhotonEdge = Math.max(Math.ceil(8 * _Ultra_Zero_StriumRay), CONFIG.MIN_WATCH);
                log("大小: " + _Ultra_Zero_StriumRay.toFixed(2) + "MB -> 观看: " + _Ultra_Cosmos_PhotonEdge + "s");
              }
            } catch {
              log("获取大小失败，使用默认时长");
            }
          }
          log("⏳ 模拟观看中...");
          await sleep(_Ultra_Cosmos_PhotonEdge * 1000);
          const _Kaiju_Tartarus_206 = encryptId(_Ultra_Zero_M87Ray, inviteCode);
          if (!_Kaiju_Tartarus_206) {
            log("❌ 加密失败 (Key无效)，跳过");
            continue;
          }
          const _Ultra_Blazar_ZepellionRay = await request("https://gw.jiudageapp.com/api/web/newPeopleUnlock/receiveWelfareNineteenV2", token, "POST", null, {
            videoId: _Kaiju_Tartarus_206
          });
          if (_Ultra_Blazar_ZepellionRay.code == 200) {
            {
              log("✅ 领取成功");
            }
          } else {
            {
              log("⚠️ 结果: " + _Ultra_Blazar_ZepellionRay.message);
            }
          }
          if (_Kaiju_HyperZetton_463 < _Kaiju_Tregear_95 - 1) {
            await sleep(CONFIG.INTERVAL);
          }
        }
      }
    }
  } catch (_Kaiju_Baltan_955) {
    {
      log("❌ 运行异常: " + _Kaiju_Baltan_955.message);
    }
  }
}
(async () => {
  _M78_Link_e11506("\n==================================================\n               神秘代码：1067957630                \n==================================================\n    ");
  const _Ultra_Legend_StriumRay = process.env.DDD_AUTH;
  if (!_Ultra_Legend_StriumRay) {
    _M78_Link_e11506("❌ 请设置环境变量 DDD_AUTH");
    _M78_Link_e11506("💡 格式: Token 或 手机号#密码");
    return;
  }
  const _Kaiju_Gatanothor_182 = _Ultra_Legend_StriumRay.split(/\r?\n/).map(_Kaiju_Greeza_965 => _Kaiju_Greeza_965.trim()).filter(_Ultra_Gaia_SpaciumBeam => _Ultra_Gaia_SpaciumBeam && !_Ultra_Gaia_SpaciumBeam.startsWith("#"));
  _M78_Link_e11506("▶️ 共 " + _Kaiju_Gatanothor_182.length + " 个账号");
  for (let _Kaiju_Eleking_119 = 0; _Kaiju_Eleking_119 < _Kaiju_Gatanothor_182.length; _Kaiju_Eleking_119++) {
    {
      await runAccount(_Kaiju_Eleking_119, _Kaiju_Gatanothor_182[_Kaiju_Eleking_119]);
      if (_Kaiju_Eleking_119 < _Kaiju_Gatanothor_182.length - 1) {
        await sleep(5000);
      }
    }
  }
  _M78_Link_e11506("\n✅ 全部结束");
})();