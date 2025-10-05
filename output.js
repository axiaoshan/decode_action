//Sun Oct 05 2025 01:47:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function generateRandomInteractionMessage() {
  const _0x9d12ff = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x9d12ff[Math.floor(Math.random() * _0x9d12ff.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getAccountConfigsFromEnv() {
  const _0x184f0a = process.env.ksck;
  if (!_0x184f0a) return console.log("未找到 ksck 环境变量"), [];
  const _0x57a731 = _0x184f0a.split("&").map(_0x4672c9 => _0x4672c9.trim()).filter(Boolean);
  console.log("从ksck环境变量中解析到 " + _0x57a731.length + " 个配置");
  return _0x57a731;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length;
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊PLUS版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("================================================================================");
console.log("🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
const baseRemoteUrl = "http://154.222.26.251:10933",
  proxyApiUrl = baseRemoteUrl + "/sign_modified.php",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
function generateKuaishouDid() {
  try {
    const _0x283a9c = _0xdca4b9 => {
        {
          const _0x16831c = "0123456789abcdef";
          let _0x214f0b = "";
          for (let _0x2b7010 = 0; _0x2b7010 < _0xdca4b9; _0x2b7010++) {
            _0x214f0b += _0x16831c.charAt(Math.floor(Math.random() * _0x16831c.length));
          }
          return _0x214f0b;
        }
      },
      _0xfa25e6 = _0x283a9c(16),
      _0x4430f1 = "ANDROID_" + _0xfa25e6;
    return _0x4430f1;
  } catch (_0x5863ed) {
    console.log("生成did失败: " + _0x5863ed.message);
    const _0x25bf7d = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x25bf7d.substring(0, 16);
  }
}
async function sendRequest(_0x4e3548, _0x5245ce = null, _0x1b77bd = "Unknown Request") {
  const _0x555e22 = {
    ..._0x4e3548
  };
  if (_0x5245ce) {
    try {
      _0x555e22.agent = new SocksProxyAgent(_0x5245ce);
      if (isDevMode) {
        console.log("[调试] " + _0x1b77bd + " 使用代理: " + _0x5245ce);
      }
    } catch (_0x4a5d5f) {
      console.log("[错误] " + _0x1b77bd + " 代理URL无效(" + _0x4a5d5f.message + ")，尝试直连模式");
      if (isDevMode) {
        console.log("[调试] 代理无效，自动切换到直连模式");
      }
    }
  } else isDevMode && console.log("[调试] 未配置代理，使用直连模式");
  if (isDevMode) {
    {
      const _0x31dba3 = _0x555e22.method || "GET";
      console.log("[调试] " + _0x1b77bd + " -> " + _0x31dba3 + " " + _0x555e22.url);
    }
  }
  return new Promise(_0x153353 => {
    request(_0x555e22, (_0x8a8a18, _0x3f5df9, _0x328f58) => {
      {
        if (_0x8a8a18) return _0x8a8a18.name === "AggregateError" && Array.isArray(_0x8a8a18.errors) ? console.log("[调试] " + _0x1b77bd + " 请求错误: AggregateError\n" + _0x8a8a18.errors.map((_0x57377a, _0x28a045) => "  [" + _0x28a045 + "] " + (_0x57377a?.["message"] || _0x57377a)).join("\n")) : console.log("[调试] " + _0x1b77bd + " 请求错误: " + (_0x8a8a18.message || String(_0x8a8a18))), _0x153353(null);
        if (!_0x3f5df9 || _0x3f5df9.statusCode !== 200) {
          const _0x2784f2 = _0x3f5df9 ? _0x3f5df9.statusCode : "无响应";
          console.log("[调试] " + _0x1b77bd + " HTTP状态码异常: " + _0x2784f2);
          return _0x153353(null);
        }
        try {
          _0x153353(JSON.parse(_0x328f58));
        } catch {
          _0x153353(_0x328f58);
        }
      }
    });
  });
}
async function testProxyConnectivity(_0x2c441c, _0x3a3754 = "代理连通性检测") {
  if (!_0x2c441c) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x42b8bf = await sendRequest({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x2c441c, _0x3a3754 + " → ipinfo.io");
  if (!_0x42b8bf) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ipinfo.io",
    "ip": ""
  };
  const _0x268420 = _0x42b8bf.ip || _0x42b8bf.ip_address || "";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x268420 || "未知"),
    "ip": _0x268420 || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x42b146, _0x3aef06, _0x56bc58 = "?") {
  const _0x14ad31 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x165a67 = await sendRequest({
      "method": "GET",
      "url": _0x14ad31,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x42b146,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x3aef06, "账号[" + _0x56bc58 + "] 获取基本信息");
  if (_0x165a67 && _0x165a67.result === 1 && _0x165a67.data) return {
    "nickname": _0x165a67.data.userData?.["nickname"] || null,
    "totalCoin": _0x165a67.data.totalCoin ?? null,
    "allCash": _0x165a67.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0x1afcdc, _0x4f9b2c) {
  _0x1afcdc = String(_0x1afcdc);
  if (_0x1afcdc.length >= _0x4f9b2c) return _0x1afcdc.substring(0, _0x4f9b2c);
  const _0x4b62a8 = _0x4f9b2c - _0x1afcdc.length,
    _0x98422a = Math.floor(_0x4b62a8 / 2),
    _0x3ae5d4 = _0x4b62a8 - _0x98422a;
  return " ".repeat(_0x98422a) + _0x1afcdc + " ".repeat(_0x3ae5d4);
}
class KuaishouAdTask {
  constructor({
    index: _0x2f2861,
    salt: _0x355ca6,
    cookie: _0x5d462b,
    nickname = "",
    proxyUrl = null
  }) {
    this.index = _0x2f2861;
    this.salt = _0x355ca6;
    this.cookie = _0x5d462b;
    this.nickname = nickname || "账号" + _0x2f2861;
    this.proxyUrl = proxyUrl;
    this.coinLimit = 500000;
    this.coinExceeded = false;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    Object.keys(this.taskConfigs).forEach(_0x4d40f0 => {
      this.taskStats[_0x4d40f0] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      };
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = 10;
    this.lowRewardLimit = 3;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    Object.keys(this.taskConfigs).forEach(_0x340b72 => {
      this.taskLimitReached[_0x340b72] = false;
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x537452 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
      if (_0x537452 && _0x537452.totalCoin) {
        const _0x34de9c = parseInt(_0x537452.totalCoin);
        if (_0x34de9c >= this.coinLimit) {
          console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x34de9c + "，超过 " + this.coinLimit + " 阈值，将停止任务");
          this.coinExceeded = true;
          this.stopAllTasks = true;
          return true;
        }
      }
      return false;
    } catch (_0x5aaea7) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x5aaea7.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x135fb3 = this.cookie.match(/egid=([^;]+)/),
          _0x41abbc = this.cookie.match(/did=([^;]+)/),
          _0x2920fd = this.cookie.match(/userId=([^;]+)/),
          _0x4cecd0 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x561ca5 = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x135fb3 ? _0x135fb3[1] : "";
        this.did = _0x41abbc ? _0x41abbc[1] : "";
        this.userId = _0x2920fd ? _0x2920fd[1] : "";
        this.kuaishouApiSt = _0x4cecd0 ? _0x4cecd0[1] : "";
        this.appver = _0x561ca5 ? _0x561ca5[1] : "13.7.20.10468";
        if (!this.egid || !this.did) {
          console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
        }
      }
    } catch (_0x4bcecb) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x4bcecb.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x45c2a7, _0x25d9bd] of Object.entries(this.taskStats)) {
      const _0x294969 = this.taskConfigs[_0x45c2a7].name;
      console.log("  " + _0x294969 + ": 成功" + _0x25d9bd.success + "次, 失败" + _0x25d9bd.failed + "次, 总奖励" + _0x25d9bd.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x26e842, _0x515844, _0x3e3ee2 = 3, _0x496b2c = 2000) {
    let _0x45c655 = 0,
      _0xde7082 = null;
    while (_0x45c655 < _0x3e3ee2) {
      try {
        {
          const _0xe74975 = await _0x26e842();
          if (_0xe74975) return _0xe74975;
          _0xde7082 = new Error(_0x515844 + " 返回空结果");
        }
      } catch (_0x5d796d) {
        _0xde7082 = _0x5d796d;
        console.log("账号[" + this.nickname + "] " + _0x515844 + " 异常: " + _0x5d796d.message);
      }
      _0x45c655++;
      _0x45c655 < _0x3e3ee2 && (console.log("账号[" + this.nickname + "] " + _0x515844 + " 失败，重试 " + _0x45c655 + "/" + _0x3e3ee2), await new Promise(_0x4098fa => setTimeout(_0x4098fa, _0x496b2c)));
    }
    isDevMode && _0xde7082 && console.log("[调试] " + _0x515844 + " 最终失败: " + _0xde7082.message);
    return null;
  }
  async ["getAdInfo"](_0x31101a) {
    try {
      {
        const _0x447f50 = "/rest/e/reward/mixed/ad",
          _0x533d8e = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x375ea6 = {
            "earphoneMode": "1",
            "mod": "Xiaomi(23116PN5BC)",
            "appver": this.appver,
            "isp": "CUCC",
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": "WIFI",
            "kcv": "1599",
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": "11.6",
            "android_os": "0",
            "boardPlatform": "pineapple",
            "kpn": "NEBULA",
            "androidApiLevel": "35",
            "country_code": "cn",
            "sys": "ANDROID_15",
            "sw": "1080",
            "sh": "2400",
            "abi": "arm64",
            "userRecoBit": "0"
          },
          _0x1bd387 = {
            "appInfo": {
              "appId": "kuaishou_nebula",
              "name": "快手极速版",
              "packageName": "com.kuaishou.nebula",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this.did,
              "screenSize": {
                "width": 1080,
                "height": 2249
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 11101,
              "subPageId": _0x31101a.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x24bcb5 = Buffer.from(JSON.stringify(_0x1bd387)).toString("base64"),
          _0xe19f6a = await this.generateSignature2(_0x447f50, querystring.stringify({
            ..._0x375ea6,
            ..._0x533d8e
          }), this.salt, _0x24bcb5);
        if (!_0xe19f6a) return console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0x31101a.name), null;
        const _0x4c195a = {
          ..._0x375ea6,
          "sig": _0xe19f6a.sig,
          "__NS_sig3": _0xe19f6a.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0xe19f6a.__NStokensig
        };
        _0x533d8e.encData = _0xe19f6a.encData;
        _0x533d8e.sign = _0xe19f6a.sign;
        const _0x1f9b9f = "https://api.e.kuaishou.com" + _0x447f50 + "?" + querystring.stringify(_0x4c195a),
          _0x290a99 = await sendRequest({
            "method": "POST",
            "url": _0x1f9b9f,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x533d8e,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (!_0x290a99) return null;
        if (_0x290a99.errorMsg === "OK" && _0x290a99.feeds && _0x290a99.feeds[0] && _0x290a99.feeds[0].ad) {
          {
            const _0x19f524 = _0x290a99.feeds[0].caption || _0x290a99.feeds[0].ad?.["caption"] || "";
            _0x19f524 && console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0x19f524);
            const _0x37422d = _0x290a99.feeds[0].exp_tag || "",
              _0x24c875 = _0x37422d.split("/")[1]?.["split"]("_")?.[0] || "";
            return {
              "cid": _0x290a99.feeds[0].ad.creativeId,
              "llsid": _0x24c875,
              "mediaScene": "video"
            };
          }
        }
        isDevMode && console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x290a99));
        return null;
      }
    } catch (_0x1e37bb) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x1e37bb.message);
      return null;
    }
  }
  async ["generateSignature"](_0x5a6011, _0x393d92, _0x5f1859, _0x238d40) {
    try {
      {
        const _0x5d4b46 = JSON.stringify({
            "businessId": _0x238d40.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x5a6011,
              "extInfo": "",
              "llsid": _0x393d92,
              "requestSceneType": _0x238d40.requestSceneType,
              "taskType": _0x238d40.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": 11101,
            "posId": _0x238d40.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x238d40.subPageId
          }),
          _0x1e3126 = "bizStr=" + encodeURIComponent(_0x5d4b46) + "&cs=false&client_key=2ac2a76d",
          _0x185014 = this.queryParams + "&" + _0x1e3126,
          _0x49c29a = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "urldata": _0x185014,
            "api_client_salt": this.salt
          }, "账号[" + this.nickname + "] 生成报告签名");
        if (!_0x49c29a || !_0x49c29a.data) {
          return null;
        }
        return {
          "sig": _0x49c29a.data.sig,
          "sig3": _0x49c29a.data.__NS_sig3,
          "sigtoken": _0x49c29a.data.__NStokensig,
          "post": _0x1e3126
        };
      }
    } catch (_0x1cc6fd) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0x1cc6fd.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x437ce8, _0x17f99d, _0x3d586c, _0x3719d8) {
    const _0x29a41c = await this.requestSignService({
      "urlpath": _0x437ce8,
      "urldata": _0x17f99d,
      "api_client_salt": _0x3d586c,
      "req_str": _0x3719d8
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x29a41c) return null;
    return _0x29a41c.data || _0x29a41c;
  }
  async ["submitReport"](_0x54362b, _0x24b41d, _0x2b8b15, _0x58e35b, _0x4a47ab, _0x129350) {
    try {
      const _0x399f78 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x54362b + "&__NS_sig3=" + _0x24b41d + "&__NS_xfalcon=&__NStokensig=" + _0x2b8b15),
        _0x2576da = await sendRequest({
          "method": "POST",
          "url": _0x399f78,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": this.cookie,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x58e35b,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
      if (!_0x2576da) {
        return {
          "success": false,
          "reward": 0
        };
      }
      if (_0x2576da.result === 1) {
        const _0x4b71ca = _0x2576da.data?.["neoAmount"] || 0;
        console.log("💰 账号[" + this.nickname + "] " + _0x129350.name + _0x4b71ca + "金币奖励！");
        _0x4b71ca < 1000 && (this.did = generateKuaishouDid(), console.log("⚠️ 金币低于阈值,模拟下载应用提升权重^^^^^^"));
        return {
          "success": true,
          "reward": _0x4b71ca
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x2576da.result)) return console.log("⚠️ 账号[" + this.nickname + "] " + _0x129350.name + " 已达上限"), this.taskLimitReached[_0x4a47ab] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "] " + _0x129350.name + " 奖励失败，result=" + _0x2576da.result + " msg=" + (_0x2576da.data || ""));
      isDevMode && console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x2576da));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x3e7223) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0x3e7223.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x5d02c5, _0x2977df) {
    const _0xc935eb = (process.env.km || "").trim();
    if (!_0xc935eb) return null;
    const _0x4aa2d3 = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0xc935eb),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0xc935eb
      },
      "body": JSON.stringify(_0x5d02c5),
      "timeout": 15000
    }, null, _0x2977df + "（签名服务）");
    if (!_0x4aa2d3) return null;
    if (_0x4aa2d3.success && _0x4aa2d3.status === "queued" && _0x4aa2d3.queue_id) {
      const _0x15cabf = await this.pollQueueStatus(_0x4aa2d3.queue_id);
      if (_0x15cabf && _0x15cabf.success && (_0x15cabf.status === "completed" || _0x15cabf.status === "processed")) return _0x15cabf;
      console.log("账号[" + this.nickname + "] 签名失败: " + (_0x15cabf?.["error"] || _0x15cabf?.["status"] || "未知"));
      return null;
    }
    if (_0x4aa2d3.success && (!_0x4aa2d3.status || _0x4aa2d3.status === "processed" || _0x4aa2d3.status === "completed")) return _0x4aa2d3;
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x4aa2d3.error || _0x4aa2d3.message || _0x4aa2d3.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x523750, _0x18cfb0 = 30000, _0x309847 = 2000) {
    const _0x7835db = Date.now();
    while (Date.now() - _0x7835db < _0x18cfb0) {
      {
        const _0x19ef91 = await sendRequest({
          "method": "GET",
          "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x523750),
          "headers": {
            "User-Agent": "Mozilla/5.0"
          },
          "timeout": 10000
        }, null, "账号[" + this.nickname + "] 签名排队");
        if (_0x19ef91?.["success"]) {
          if (_0x19ef91.status === "completed" || _0x19ef91.status === "processed") return _0x19ef91;
          if (_0x19ef91.status === "failed") return _0x19ef91;
        }
        await new Promise(_0x422f52 => setTimeout(_0x422f52, _0x309847));
      }
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x406adb) {
    const _0x2942b8 = this.taskConfigs[_0x406adb];
    if (!_0x2942b8) return console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x406adb), false;
    if (this.taskLimitReached[_0x406adb]) return false;
    try {
      const _0x1266f1 = await this.retryOperation(() => this.getAdInfo(_0x2942b8), "获取" + _0x2942b8.name + "信息", 3);
      if (!_0x1266f1) return this.taskStats[_0x406adb].failed++, false;
      const _0xabe7f4 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x2942b8.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0xabe7f4 / 1000) + " 秒");
      await new Promise(_0x87bf85 => setTimeout(_0x87bf85, _0xabe7f4));
      const _0x4de298 = await this.retryOperation(() => this.generateSignature(_0x1266f1.cid, _0x1266f1.llsid, _0x406adb, _0x2942b8), "生成" + _0x2942b8.name + "签名", 3);
      if (!_0x4de298) return this.taskStats[_0x406adb].failed++, false;
      const _0x36f1fc = await this.retryOperation(() => this.submitReport(_0x4de298.sig, _0x4de298.sig3, _0x4de298.sigtoken, _0x4de298.post, _0x406adb, _0x2942b8), "提交" + _0x2942b8.name + "报告", 3);
      if (_0x36f1fc?.["success"]) {
        this.taskStats[_0x406adb].success++;
        this.taskStats[_0x406adb].totalReward += _0x36f1fc.reward || 0;
        if ((_0x36f1fc.reward || 0) <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true);
        } else this.lowRewardStreak = 0;
        return true;
      }
      this.taskStats[_0x406adb].failed++;
      return false;
    } catch (_0x2a3868) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x406adb + "): " + _0x2a3868.message);
      this.taskStats[_0x406adb].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x4efc1f = Object.keys(this.taskConfigs),
      _0x4da6c6 = {};
    for (const _0x2f6a21 of _0x4efc1f) {
      {
        if (this.stopAllTasks) break;
        console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0x2f6a21].name);
        _0x4da6c6[_0x2f6a21] = await this.executeTask(_0x2f6a21);
        if (this.stopAllTasks) break;
        if (_0x2f6a21 !== _0x4efc1f[_0x4efc1f.length - 1]) {
          const _0x13b107 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x13b107 / 1000) + " 秒");
          await new Promise(_0x133d5d => setTimeout(_0x133d5d, _0x13b107));
        }
      }
    }
    return _0x4da6c6;
  }
}
function parseAccountConfig(_0x91d22) {
  const _0x156840 = String(_0x91d22 || "").trim().split("#");
  if (_0x156840.length < 2) return null;
  const _0x53896d = _0x156840[0],
    _0x235a2d = _0x156840.slice(1, _0x156840.length - (_0x156840.length >= 3 ? 1 : 0)).join("#");
  let _0x1dc31e = null;
  if (_0x156840.length >= 3) {
    const _0x47f386 = _0x156840[_0x156840.length - 1].trim();
    console.log(_0x47f386);
    if (_0x47f386.includes("|")) {
      console.log("开始解析格式1 " + _0x47f386);
      const _0x223184 = _0x47f386.split("|");
      if (_0x223184.length >= 2) {
        const [_0x3dc47d, _0x530042, _0x5d01c0, _0x39e849] = _0x223184;
        _0x1dc31e = "socks5://" + _0x5d01c0 + ":" + _0x39e849 + "@" + _0x3dc47d + ":" + _0x530042;
      }
    } else _0x1dc31e = /^socks5:\/\/.+/i.test(_0x47f386) ? _0x47f386 : null;
    !_0x1dc31e && console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x47f386);
  }
  return {
    "salt": _0x235a2d,
    "cookie": _0x53896d,
    "proxyUrl": _0x1dc31e
  };
}
function loadAccountsFromEnv() {
  const _0x1fdf36 = process.env.ksck;
  if (!_0x1fdf36) return console.log("未找到 ksck 环境变量"), [];
  const _0x568b11 = _0x1fdf36.split("&").map(_0x39e2bd => _0x39e2bd.trim()).filter(Boolean);
  console.log("从ksck环境变量中解析到 " + _0x568b11.length + " 个配置");
  const _0x4e4840 = [];
  for (const _0x4de56a of _0x568b11) {
    {
      const _0x4e75c8 = parseAccountConfig(_0x4de56a);
      _0x4e75c8 ? _0x4e4840.push(_0x4e75c8) : console.log("账号格式错误：" + _0x4de56a);
    }
  }
  _0x4e4840.forEach((_0x112b77, _0x4b16c1) => {
    _0x112b77.index = _0x4b16c1 + 1;
  });
  return _0x4e4840;
}
async function concurrentExecute(_0x7a7832, _0x281494, _0x35ce4c) {
  const _0x5218ac = new Array(_0x7a7832.length);
  let _0x20b56c = 0;
  async function _0x3601c7() {
    while (true) {
      const _0x17ce58 = _0x20b56c++;
      if (_0x17ce58 >= _0x7a7832.length) {
        return;
      }
      const _0x292e2e = _0x7a7832[_0x17ce58];
      try {
        _0x5218ac[_0x17ce58] = await _0x35ce4c(_0x292e2e, _0x17ce58);
      } catch (_0x214adc) {
        console.log("并发执行异常（index=" + (_0x17ce58 + 1) + "）：" + _0x214adc.message);
        _0x5218ac[_0x17ce58] = null;
      }
    }
  }
  const _0x1b08b0 = Array.from({
    "length": Math.min(_0x281494, _0x7a7832.length)
  }, _0x3601c7);
  await Promise.all(_0x1b08b0);
  return _0x5218ac;
}
async function processAccount(_0x466d00, _0xf552c7 = 10) {
  if (_0x466d00.proxyUrl) {
    console.log("账号[" + _0x466d00.index + "]" + (_0x466d00.remark ? "（" + _0x466d00.remark + "）" : "") + " 🔌 测试代理连接中...");
    const _0x6848e1 = await testProxyConnectivity(_0x466d00.proxyUrl, "账号[" + _0x466d00.index + "]");
    console.log("  - " + (_0x6848e1.ok ? "✅ 代理验证通过，IP: " + _0x6848e1.ip : "❌ 代理验证失败") + ": " + _0x6848e1.msg);
    if (_0x6848e1.ok && _0x6848e1.ip && _0x6848e1.ip !== "localhost") {
      usedProxies.has(_0x6848e1.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x6848e1.ip + "），请立即检查！"), process.exit(1));
      usedProxies.add(_0x6848e1.ip);
    }
  } else console.log("账号[" + _0x466d00.index + "] 未配置代理，走直连");
  console.log("账号[" + _0x466d00.index + "]" + (_0x466d00.remark ? "（" + _0x466d00.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x2a6f86 = await getAccountBasicInfo(_0x466d00.cookie, _0x466d00.proxyUrl, _0x466d00.index),
    _0x5285e3 = _0x2a6f86?.["nickname"] || "账号" + _0x466d00.index;
  if (_0x2a6f86) {
    const _0x1c58ec = _0x2a6f86.totalCoin != null ? _0x2a6f86.totalCoin : "未知",
      _0x57d833 = _0x2a6f86.allCash != null ? _0x2a6f86.allCash : "未知";
    console.log("账号[" + _0x5285e3 + "] ✅ 登录成功，💰 当前金币: " + _0x1c58ec + "，💸 当前余额: " + _0x57d833);
  } else console.log("账号[" + _0x5285e3 + "] ❌ 基本信息获取失败，继续执行");
  const _0x1060a0 = new KuaishouAdTask({
    ..._0x466d00,
    "nickname": _0x5285e3
  });
  await _0x1060a0.checkCoinLimit();
  if (_0x1060a0.coinExceeded) {
    console.log("账号[" + _0x1060a0.nickname + "] 初始金币已超过阈值，不执行任务");
    const _0x1fbd29 = await getAccountBasicInfo(_0x466d00.cookie, _0x466d00.proxyUrl, _0x466d00.index),
      _0x41ad78 = _0x2a6f86?.["totalCoin"] || 0,
      _0x23bd62 = _0x1fbd29?.["totalCoin"] || 0,
      _0x429e69 = _0x23bd62 - _0x41ad78,
      _0x6857a1 = _0x2a6f86?.["allCash"] || 0,
      _0x579c5b = _0x1fbd29?.["allCash"] || 0,
      _0x5b6afc = _0x579c5b - _0x6857a1;
    return {
      "index": _0x466d00.index,
      "nickname": _0x5285e3,
      "initialCoin": _0x41ad78,
      "finalCoin": _0x23bd62,
      "coinChange": _0x429e69,
      "initialCash": _0x6857a1,
      "finalCash": _0x579c5b,
      "cashChange": _0x5b6afc,
      "stats": _0x1060a0.getTaskStats(),
      "coinLimitExceeded": true
    };
  }
  for (let _0x3e5eb7 = 0; _0x3e5eb7 < _0xf552c7; _0x3e5eb7++) {
    const _0x5204e4 = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x1060a0.nickname + "] ⌛ 第" + (_0x3e5eb7 + 1) + "轮，先随机等待 " + Math.round(_0x5204e4 / 1000) + " 秒");
    await new Promise(_0x290af9 => setTimeout(_0x290af9, _0x5204e4));
    console.log("账号[" + _0x1060a0.nickname + "] 🚀 开始第" + (_0x3e5eb7 + 1) + "轮任务");
    const _0x47f9eb = await _0x1060a0.executeAllTasksByPriority();
    Object.values(_0x47f9eb).some(Boolean) ? console.log("账号[" + _0x1060a0.nickname + "] ✅ 第" + (_0x3e5eb7 + 1) + "轮执行完成") : console.log("账号[" + _0x1060a0.nickname + "] ⚠️ 第" + (_0x3e5eb7 + 1) + "轮没有成功任务");
    if (_0x1060a0.stopAllTasks) {
      console.log("账号[" + _0x1060a0.nickname + "] 🏁 达到停止条件，终止后续轮次");
      break;
    }
    if (_0x3e5eb7 < _0xf552c7 - 1) {
      const _0x15522d = Math.floor(Math.random() * 10000) + 10000;
      console.log("账号[" + _0x1060a0.nickname + "] ⌛ 等待 " + Math.round(_0x15522d / 1000) + " 秒进入下一轮");
      await new Promise(_0x9bdc36 => setTimeout(_0x9bdc36, _0x15522d));
    }
  }
  const _0x58cd74 = await getAccountBasicInfo(_0x466d00.cookie, _0x466d00.proxyUrl, _0x466d00.index),
    _0x2eb0d5 = _0x2a6f86?.["totalCoin"] || 0,
    _0x4617e0 = _0x58cd74?.["totalCoin"] || 0,
    _0x4b68e7 = _0x4617e0 - _0x2eb0d5,
    _0x31f90f = _0x2a6f86?.["allCash"] || 0,
    _0x5bf994 = _0x58cd74?.["allCash"] || 0,
    _0x55bcf5 = _0x5bf994 - _0x31f90f;
  _0x1060a0.printTaskStats();
  return {
    "index": _0x466d00.index,
    "nickname": _0x5285e3,
    "initialCoin": _0x2eb0d5,
    "finalCoin": _0x4617e0,
    "coinChange": _0x4b68e7,
    "initialCash": _0x31f90f,
    "finalCash": _0x5bf994,
    "cashChange": _0x55bcf5,
    "stats": _0x1060a0.getTaskStats(),
    "coinLimitExceeded": _0x1060a0.coinExceeded
  };
}
function printAccountsSummary(_0xcaf1f7) {
  if (!_0xcaf1f7.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x53288b = _0xcaf1f7.reduce((_0x391170, _0x147b34) => {
      return _0x391170 + (parseInt(_0x147b34.initialCoin) || 0);
    }, 0),
    _0x35b804 = _0xcaf1f7.reduce((_0x47a5ac, _0x2a5eb3) => {
      return _0x47a5ac + (parseInt(_0x2a5eb3.finalCoin) || 0);
    }, 0),
    _0x307788 = _0x35b804 - _0x53288b,
    _0x17386d = _0xcaf1f7.reduce((_0x4f3a91, _0x50fc4c) => {
      return _0x4f3a91 + (parseFloat(_0x50fc4c.initialCash) || 0);
    }, 0),
    _0x34fdf1 = _0xcaf1f7.reduce((_0x24a85c, _0x59c7ff) => {
      return _0x24a85c + (parseFloat(_0x59c7ff.finalCash) || 0);
    }, 0),
    _0x5c24cf = _0x34fdf1 - _0x17386d;
  let _0x4c94b3 = 0,
    _0x1108e8 = 0,
    _0x47c337 = 0;
  _0xcaf1f7.forEach(_0x3d674d => {
    if (_0x3d674d.stats) {
      Object.values(_0x3d674d.stats).forEach(_0x30cca8 => {
        _0x4c94b3 += _0x30cca8.success + _0x30cca8.failed;
        _0x1108e8 += _0x30cca8.success;
        _0x47c337 += _0x30cca8.totalReward;
      });
    }
  });
  const _0x5e221f = _0x4c94b3 > 0 ? (_0x1108e8 / _0x4c94b3 * 100).toFixed(1) : "0.0",
    _0x38d6f6 = _0xcaf1f7.filter(_0x9e55da => _0x9e55da.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0xcaf1f7.length).padEnd(22) + ("超过金币阈值账号: " + _0x38d6f6).padEnd(22) + ("总任务数: " + _0x4c94b3).padEnd(22) + ("任务成功率: " + _0x5e221f + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x307788).padEnd(26) + ("总金币奖励: " + _0x47c337).padEnd(26) + ("总余额变化: " + _0x5c24cf.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x5d961b = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x597823 = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x5acbc8 = "|";
  _0x5d961b.forEach((_0x1a1d11, _0x4c4e47) => {
    _0x5acbc8 += centerAlign(_0x1a1d11, _0x597823[_0x4c4e47]) + "|";
  });
  console.log(_0x5acbc8);
  let _0x1a8ba4 = "|";
  _0x597823.forEach(_0xb1264e => {
    _0x1a8ba4 += "-".repeat(_0xb1264e) + "|";
  });
  console.log(_0x1a8ba4);
  _0xcaf1f7.forEach(_0x532af4 => {
    let _0x219a38 = "|";
    _0x219a38 += centerAlign(_0x532af4.index, _0x597823[0]) + "|";
    const _0x196d9a = (_0x532af4.nickname || "-") + (_0x532af4.coinLimitExceeded ? " ⚠️" : "");
    _0x219a38 += centerAlign(_0x196d9a.substring(0, _0x597823[1] - 2), _0x597823[1]) + "|";
    _0x219a38 += centerAlign(_0x532af4.initialCoin, _0x597823[2]) + "|";
    _0x219a38 += centerAlign(_0x532af4.finalCoin, _0x597823[3]) + "|";
    const _0x39a041 = _0x532af4.coinChange >= 0 ? "+" + _0x532af4.coinChange : _0x532af4.coinChange;
    _0x219a38 += centerAlign(_0x39a041, _0x597823[4]) + "|";
    _0x219a38 += centerAlign(_0x532af4.initialCash, _0x597823[5]) + "|";
    _0x219a38 += centerAlign(_0x532af4.finalCash, _0x597823[6]) + "|";
    const _0x463473 = _0x532af4.cashChange >= 0 ? "+" + _0x532af4.cashChange.toFixed(2) : _0x532af4.cashChange.toFixed(2);
    _0x219a38 += centerAlign(_0x463473, _0x597823[7]) + "|";
    console.log(_0x219a38);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x1684c0 = loadAccountsFromEnv();
  console.log("共找到 " + _0x1684c0.length + " 个有效账号");
  !_0x1684c0.length && process.exit(1);
  const _0x402b77 = parseInt(process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "888", 10) || 888,
    _0x447d3b = parseInt(process.env.ROUNDS || "35", 10) || 35;
  console.log("\n防黑并发：" + _0x402b77 + "    防黑轮数：" + _0x447d3b + "\n");
  const _0x443705 = [];
  await concurrentExecute(_0x1684c0, _0x402b77, async _0x376f4d => {
    console.log("\n—— 🚀 开始账号[" + _0x376f4d.index + "]" + (_0x376f4d.remark ? "（" + _0x376f4d.remark + "）" : "") + " ——");
    try {
      const _0x20f918 = await processAccount(_0x376f4d, _0x447d3b);
      _0x443705.push({
        "index": _0x376f4d.index,
        "remark": _0x376f4d.remark || "无备注",
        "nickname": _0x20f918?.["nickname"] || this.nickname,
        "initialCoin": _0x20f918?.["initialCoin"] || 0,
        "finalCoin": _0x20f918?.["finalCoin"] || 0,
        "coinChange": _0x20f918?.["coinChange"] || 0,
        "initialCash": _0x20f918?.["initialCash"] || 0,
        "finalCash": _0x20f918?.["finalCash"] || 0,
        "cashChange": _0x20f918?.["cashChange"] || 0,
        "stats": _0x20f918?.["stats"] || {},
        "coinLimitExceeded": _0x20f918?.["coinLimitExceeded"] || false
      });
    } catch (_0x1f1d46) {
      console.log("账号[" + _0x376f4d.index + "] ❌ 执行异常：" + _0x1f1d46.message);
      _0x443705.push({
        "index": _0x376f4d.index,
        "remark": _0x376f4d.remark || "无备注",
        "nickname": this.nickname,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x1f1d46.message
      });
    }
  });
  _0x443705.sort((_0x15a393, _0x7c10e7) => _0x15a393.index - _0x7c10e7.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x443705);
})();