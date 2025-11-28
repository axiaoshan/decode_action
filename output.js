//Fri Nov 28 2025 14:56:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function validateRegistrationLink() {
  const _0x26628b = "http://jigjei484.yyshbc.cn/#/Register?activityId=1002&invitationCode=tlSE39Dh4",
    _0x12c9ee = require("fs").readFileSync(__filename, "utf8"),
    _0x471332 = _0x12c9ee.split("\n");
  if (_0x471332.length >= 14) {
    const _0x2f23d8 = _0x471332[13].trim();
    if (!_0x2f23d8.includes(_0x26628b)) {
      {
        console["¹ï"]("❌ 脚本完整性验证失败！");
        console.log("❌ 检测到第14行注册链接已被修改！");
        console.log("❌ 当前第14行内容：", _0x2f23d8);
        console.log("❌ 预期内容应包含：", _0x26628b);
        console.log("❌ 脚本无法运行，请使用原始版本！");
        return false;
      }
    }
  } else return console.log("⚠️  警告：无法验证脚本完整性，行数不足"), true;
  console.log("✅ 脚本完整性验证通过");
  return true;
}
const DEBUG_MODE = false,
  TASK_CONFIG = {
    "WATCH_SEC": 10,
    "RETRY_COUNT": 3,
    "INTERVAL_SEC": 5,
    "LOGIN_RETRY": 2
  },
  axios = require("axios"),
  {
    exec
  } = require("child_process"),
  crypto = require("crypto");
function log(_0x4f46fc, _0xe4a925 = "INFO", _0xc1cbce = null) {
  const _0x594997 = {
      "SUCCESS": "✅",
      "ERROR": "❌",
      "WARN": "⚠️",
      "INFO": "ℹ️",
      "DEBUG": "🐞"
    },
    _0x24b1b0 = "[" + (_0x594997[_0xe4a925] || "ℹ️") + " " + _0xe4a925 + "] " + _0x4f46fc;
  DEBUG_MODE && _0xc1cbce ? (console.log(_0x24b1b0), console.log("详细数据：", JSON.stringify(_0xc1cbce, null, 2))) : console.log(_0x24b1b0);
}
function extractDeviceInfo(_0x12b1ec) {
  const _0x3c1bfb = _0x12b1ec.match(/GZHealth\/(\d+\.\d+\.\d+)/),
    _0x52c4ba = _0x12b1ec.match(/(iOS|Android) \d+/);
  return {
    "appVersion": _0x3c1bfb ? _0x3c1bfb[1] : "未知版本",
    "platform": _0x52c4ba ? _0x52c4ba[1] : "未知平台"
  };
}
function encryptPassword(_0xd7a8e4) {
  return crypto.createHash("md5").update(_0xd7a8e4).digest("hex").toUpperCase();
}
async function login(_0x2b3339, _0x15cb54, _0x21333d) {
  const _0x1f4214 = extractDeviceInfo(_0x21333d),
    _0x20758d = encryptPassword(_0x15cb54);
  let _0x461361 = TASK_CONFIG.LOGIN_RETRY;
  while (_0x461361 > 0) {
    try {
      log("开始登录：手机号=" + _0x2b3339 + "（密码已MD5加密）", "INFO");
      if (DEBUG_MODE) log("加密后密码：" + _0x20758d, "DEBUG");
      const _0x53977e = {
          "version": _0x1f4214.appVersion,
          "platform": _0x1f4214.platform,
          "Content-Type": "application/json; charset=UTF-8",
          "User-Agent": _0x21333d
        },
        _0x278b90 = await axios({
          "url": "http://gw.yyzqsh.cn/api/web/auth/pwdLogin",
          "method": "POST",
          "headers": _0x53977e,
          "data": {
            "phone": _0x2b3339,
            "password": _0x20758d
          },
          "timeout": 10000
        });
      if (!_0x278b90.data.success || _0x278b90.data.code !== 200) throw new Error("[" + _0x278b90.data.code + "] " + _0x278b90.data.message);
      const _0x42ff42 = _0x278b90.data.result?.["token"];
      if (!_0x42ff42) throw new Error("登录成功但未返回令牌");
      log("登录成功 | 账号ID：" + _0x278b90.data.result?.["id"], "SUCCESS");
      return _0x42ff42;
    } catch (_0x5d6b01) {
      _0x461361--;
      log("登录失败（剩余" + _0x461361 + "次重试）：" + _0x5d6b01.message, "ERROR");
      if (_0x461361 > 0) await new Promise(_0x20ae19 => setTimeout(_0x20ae19, 2000));else throw new Error("登录失败（已重试" + TASK_CONFIG.LOGIN_RETRY + "次）");
    }
  }
}
async function request(_0x396210, _0x3ff5c1, _0x415c03 = {}) {
  let _0x512bfe = TASK_CONFIG.RETRY_COUNT;
  while (_0x512bfe > 0) {
    try {
      {
        DEBUG_MODE && (log("请求接口：" + _0x396210, "DEBUG"), log("请求头：", "DEBUG", _0x3ff5c1), log("请求参数：", "DEBUG", _0x415c03));
        const _0x26ab9c = await axios({
          "url": _0x396210,
          "method": "POST",
          "headers": _0x3ff5c1,
          "data": _0x415c03,
          "timeout": 10000
        });
        if (DEBUG_MODE) log("接口响应：" + _0x396210, "DEBUG", _0x26ab9c.data);
        if (_0x26ab9c.data.success) return _0x26ab9c.data;
        throw new Error("接口失败：" + _0x26ab9c.data.message);
      }
    } catch (_0x344027) {
      DEBUG_MODE && (log("请求错误：" + _0x396210, "ERROR"), log("错误响应：", "ERROR", _0x344027.response?.["data"] || "无响应"));
      _0x512bfe--;
      if (_0x512bfe === 0) throw new Error("请求失败（已重试" + TASK_CONFIG.RETRY_COUNT + "次）：" + _0x344027.message);
      await new Promise(_0x1d8a0d => setTimeout(_0x1d8a0d, 2000));
    }
  }
}
function showPersonalInfo(_0x459999) {
  const _0x5bd8ab = _0x459999.result || {};
  log("\n----- 个人信息 -----", "INFO");
  log("账号ID：" + (_0x5bd8ab.memberId || "未知"), "INFO");
  log("贡献值：" + (_0x5bd8ab.contribution || 0), "INFO");
  log("兑换值：" + (_0x5bd8ab.ipValue || 0), "INFO");
}
function getTaskProgress(_0x215cf5) {
  const _0x205e0c = _0x215cf5.result || {},
    _0x5b81a8 = Number(_0x205e0c.videoCount || 0),
    _0x3caa9d = Number(_0x205e0c.watchedVideoCount || 0),
    _0x9e700a = _0x5b81a8 - _0x3caa9d;
  let _0x15607f = "未知状态";
  if (_0x5b81a8 === 0) _0x15607f = "无任务";else {
    if (_0x9e700a > 0) _0x15607f = "进行中";else {
      if (_0x9e700a === 0 && _0x3caa9d === _0x5b81a8) _0x15607f = "已完成";else {
        if (_0x3caa9d > _0x5b81a8) _0x15607f = "数据异常";
      }
    }
  }
  return {
    "total": _0x5b81a8,
    "watched": _0x3caa9d,
    "remaining": _0x9e700a,
    "status": _0x15607f
  };
}
async function processAd(_0xac9538, _0x647bd7) {
  log("获取广告ID=" + _0xac9538 + "的播放链接...", "INFO");
  const _0x1b4796 = await request("http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement", _0x647bd7),
    _0x53e901 = _0x1b4796.result?.["videoUrl"];
  if (!_0x53e901) throw new Error("未获取到广告视频链接");
  if (DEBUG_MODE) log("广告链接：" + _0x53e901, "DEBUG");
  log("开始播放广告（" + TASK_CONFIG.WATCH_SEC + "秒）...", "INFO");
  const _0x5c3fe0 = process.platform === "win32" ? "start" : process.platform === "darwin" ? "open" : "xdg-open",
    _0x27d168 = exec(_0x5c3fe0 + " \"" + _0x53e901 + "\"");
  await new Promise(_0x300e96 => setTimeout(_0x300e96, TASK_CONFIG.WATCH_SEC * 1000));
  _0x27d168.kill();
  log("领取广告ID=" + _0xac9538 + "的福利...", "INFO");
  const _0x26a3d0 = await request("http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen?videoId=" + _0xac9538, _0x647bd7);
  return _0x26a3d0.result || {};
}
async function runAccount(_0x11b37c, _0x17b91e, _0x167c4d) {
  let _0x8a3841, _0x4b1b00;
  if (_0x167c4d) {
    {
      const _0x5dc49a = _0x11b37c,
        _0x3987b9 = _0x17b91e;
      _0x4b1b00 = _0x167c4d;
      log("检测到账号密码格式，开始自动登录...", "INFO");
      _0x8a3841 = await login(_0x5dc49a, _0x3987b9, _0x4b1b00);
    }
  } else _0x8a3841 = _0x11b37c, _0x4b1b00 = _0x17b91e, log("检测到令牌格式，直接使用已有令牌...", "INFO");
  const _0xf7b113 = extractDeviceInfo(_0x4b1b00),
    _0x1dc4d3 = {
      "Host": "gw.yyzqsh.cn",
      "platform": _0xf7b113.platform,
      "version": _0xf7b113.appVersion,
      "Authorization": _0x8a3841,
      "User-Agent": _0x4b1b00,
      "Content-Type": "application/json"
    };
  if (DEBUG_MODE) log("账号请求头信息：", "DEBUG", _0x1dc4d3);
  log("\n===== 初始信息 =====", "INFO");
  const _0x9ae9a2 = await request("http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo", _0x1dc4d3);
  showPersonalInfo(_0x9ae9a2);
  const _0x2502f9 = getTaskProgress(_0x9ae9a2);
  log("\n----- 任务进度 -----", "INFO");
  log("任务状态：" + _0x2502f9.status, "INFO");
  log("需看总数：" + _0x2502f9.total + "个 | 已看：" + _0x2502f9.watched + "个 | 剩余：" + _0x2502f9.remaining + "个", "INFO");
  if (_0x2502f9.remaining <= 0) {
    {
      log("\n无需执行任务（已完成或无任务）", "INFO");
      return;
    }
  }
  log("\n开始执行" + _0x2502f9.remaining + "个剩余广告...", "INFO");
  for (let _0x235480 = 0; _0x235480 < _0x2502f9.remaining; _0x235480++) {
    const _0x114662 = _0x2502f9.watched + _0x235480 + 1;
    log("\n===== 执行第" + _0x114662 + "/" + _0x2502f9.total + "个广告 =====", "INFO");
    try {
      {
        const _0x2a1804 = await processAd(_0x114662, _0x1dc4d3);
        log("福利领取成功：贡献值+" + (_0x2a1804.receiveContribution || 0), "SUCCESS");
        _0x114662 < _0x2502f9.total && (log("等待" + TASK_CONFIG.INTERVAL_SEC + "秒后继续...", "INFO"), await new Promise(_0x2d4315 => setTimeout(_0x2d4315, TASK_CONFIG.INTERVAL_SEC * 1000)));
      }
    } catch (_0x13508d) {
      log("第" + _0x114662 + "个广告执行失败：" + _0x13508d.message, "ERROR");
    }
  }
  log("\n===== 最终信息 =====", "INFO");
  const _0x10e49f = await request("http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo", _0x1dc4d3);
  showPersonalInfo(_0x10e49f);
  const _0x178160 = getTaskProgress(_0x10e49f);
  log("\n----- 任务完成校验 -----", "INFO");
  log("最终状态：" + _0x178160.status, "INFO");
  log("最终进度：需看" + _0x178160.total + "个 | 已看" + _0x178160.watched + "个 | 剩余" + _0x178160.remaining + "个", "INFO");
}
async function main() {
  try {
    {
      console.log("🔍 正在验证脚本完整性...");
      !validateRegistrationLink() && (console.log("❌ 脚本终止运行"), process.exit(1));
      let _0x568018 = "";
      const _0x57fb2b = "AINAN";
      for (const _0x13ad04 in process.env) {
        if (_0x13ad04.toUpperCase() === _0x57fb2b) {
          {
            _0x568018 = process.env[_0x13ad04];
            break;
          }
        }
      }
      if (!_0x568018) {
        throw new Error("请配置环境变量AINAN（支持两种格式：\n1. Authorization令牌#完整User-Agent\n2. 账号#密码#完整User-Agent）");
      }
      const _0x4ac6bf = _0x568018.split(/\r?\n|\n/).map(_0x500d76 => _0x500d76.trim()).filter(_0x4bc394 => _0x4bc394);
      log("共检测到" + _0x4ac6bf.length + "个账号，开始执行任务...", "INFO");
      for (let _0x55455f = 0; _0x55455f < _0x4ac6bf.length; _0x55455f++) {
        const _0x28eedb = _0x4ac6bf[_0x55455f].split("#");
        if (_0x28eedb.length === 2) {
          {
            const [_0x4414f6, _0x34d234] = _0x28eedb;
            if (!_0x4414f6 || !_0x34d234) {
              log("第" + (_0x55455f + 1) + "个账号格式错误（格式1），跳过", "WARN");
              continue;
            }
            log("\n========== 开始处理第" + (_0x55455f + 1) + "个账号（令牌格式） ==========", "INFO");
            await runAccount(_0x4414f6, _0x34d234);
          }
        } else {
          if (_0x28eedb.length === 3) {
            const [_0x4ec8a7, _0x1a65c0, _0xfd4909] = _0x28eedb;
            if (!_0x4ec8a7 || !_0x1a65c0 || !_0xfd4909) {
              {
                log("第" + (_0x55455f + 1) + "个账号格式错误（格式2），跳过", "WARN");
                continue;
              }
            }
            log("\n========== 开始处理第" + (_0x55455f + 1) + "个账号（账号密码格式） ==========", "INFO");
            await runAccount(_0x4ec8a7, _0x1a65c0, _0xfd4909);
          } else {
            log("第" + (_0x55455f + 1) + "个账号格式错误（需2段或3段），跳过", "WARN");
            continue;
          }
        }
      }
      log("\n所有账号任务处理完成", "SUCCESS");
    }
  } catch (_0x5dbce3) {
    log("全局错误：" + _0x5dbce3.message, "ERROR");
  } finally {
    process.exit(0);
  }
}
main();