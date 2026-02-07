//Sat Feb 07 2026 07:09:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const axios = require("axios");
const {
  machineIdSync
} = require("node-machine-id");
class AuthService {
  constructor(_0x45ec39 = {}) {
    this.onStatusChange = _0x45ec39.onStatusChange || null;
    this.onInvalid = _0x45ec39.onInvalid || null;
    this.configFile = path.join(__dirname, "auth_config.json");
    this.stateFile = path.join(__dirname, "auth_state.json");
    this.deviceIdFile = path.join(__dirname, "auth_device_id.txt");
    this.failedValidations = 0;
    this.heartbeatTimer = null;
    this.config = this.loadConfig();
    this.configValidation = this.validateConfig(this.config);
    this.deviceId = this.loadDeviceId();
    this.state = this.loadState();
    this.state.authorized && this.state.token && this.startHeartbeat();
  }
  loadConfig() {
    const _0x2b4091 = {
      appId: "6986093f",
      secretKey: "zQ96wwUcXAZRVltG",
      apiUrl: "http://api.kushao.net/v3/",
      mode: 0,
      changeMode: 1,
      heartDuration: 600,
      authKey: ""
    };
    if (!fs.existsSync(this.configFile)) {
      return _0x2b4091;
    }
    try {
      const _0xc7ffa7 = fs.readFileSync(this.configFile, "utf8");
      const _0x4bd102 = JSON.parse(_0xc7ffa7) || {};
      return {
        ..._0x2b4091,
        apiUrl: _0x4bd102.apiUrl || _0x2b4091.apiUrl,
        authKey: _0x4bd102.authKey || ""
      };
    } catch (_0x2f8627) {
      return _0x2b4091;
    }
  }
  validateConfig(_0x56d274) {
    if (!_0x56d274 || typeof _0x56d274 !== "object") {
      return {
        ok: false,
        error: "配置为空"
      };
    }
    if (!_0x56d274.appId || String(_0x56d274.appId).trim() === "") {
      return {
        ok: false,
        error: "appId 不能为空"
      };
    }
    const _0x1dc3a1 = String(_0x56d274.secretKey || "");
    if (!_0x1dc3a1) {
      return {
        ok: false,
        error: "secretKey 不能为空"
      };
    }
    if (_0x1dc3a1.length !== 16) {
      return {
        ok: false,
        error: "secretKey 长度必须为 16 位"
      };
    }
    if (!_0x56d274.apiUrl || String(_0x56d274.apiUrl).trim() === "") {
      return {
        ok: false,
        error: "认证线路不能为空"
      };
    }
    const _0x3b3a70 = Number(_0x56d274.mode);
    if (![0, 1].includes(_0x3b3a70)) {
      return {
        ok: false,
        error: "模式参数错误，仅支持 0 或 1"
      };
    }
    const _0xf68421 = Number(_0x56d274.heartDuration);
    if (!Number.isFinite(_0xf68421) || _0xf68421 < 200 || _0xf68421 > 3500) {
      return {
        ok: false,
        error: "心跳间隔必须为 200–3500 秒"
      };
    }
    return {
      ok: true
    };
  }
  updateConfig(_0x52aea7 = {}) {
    const _0x8e6cb7 = {
      ...this.config,
      apiUrl: _0x52aea7.apiUrl !== undefined ? _0x52aea7.apiUrl : this.config.apiUrl,
      authKey: _0x52aea7.authKey !== undefined ? _0x52aea7.authKey : this.config.authKey
    };
    const _0x370746 = this.validateConfig(_0x8e6cb7);
    this.configValidation = _0x370746;
    if (!_0x370746.ok) {
      return _0x370746;
    }
    this.config = _0x8e6cb7;
    try {
      fs.writeFileSync(this.configFile, JSON.stringify({
        apiUrl: this.config.apiUrl,
        authKey: this.config.authKey
      }, null, 2), "utf8");
    } catch (_0x30a8b6) {
      return {
        ok: false,
        error: _0x30a8b6.message
      };
    }
    this.state.authorized && this.startHeartbeat();
    return {
      ok: true
    };
  }
  getConfig() {
    return {
      apiUrl: this.config.apiUrl,
      authKey: this.config.authKey || ""
    };
  }
  loadDeviceId() {
    try {
      if (fs.existsSync(this.deviceIdFile)) {
        const _0x7b081f = fs.readFileSync(this.deviceIdFile, "utf8").trim();
        if (_0x7b081f) {
          return _0x7b081f;
        }
      }
    } catch (_0x10529b) {}
    let _0x27f61a = "";
    try {
      _0x27f61a = machineIdSync({
        original: true
      });
    } catch (_0x1445f1) {
      _0x27f61a = Date.now() + "_" + Math.random();
    }
    const _0x1495be = this.sha1(_0x27f61a);
    try {
      fs.writeFileSync(this.deviceIdFile, _0x1495be, "utf8");
    } catch (_0x994a53) {}
    return _0x1495be;
  }
  loadState() {
    if (!fs.existsSync(this.stateFile)) {
      return {
        authorized: false,
        code: null,
        message: "未验证",
        token: null,
        remark: "",
        expireAt: null,
        surplusCount: null,
        lastVerifiedAt: null,
        lastVerifySuccess: false
      };
    }
    try {
      const _0x40eda2 = fs.readFileSync(this.stateFile, "utf8");
      const _0x56a70c = JSON.parse(_0x40eda2) || {};
      return {
        authorized: !!_0x56a70c.authorized,
        code: _0x56a70c.code ?? null,
        message: _0x56a70c.message || "未验证",
        token: _0x56a70c.token || null,
        remark: _0x56a70c.remark || "",
        expireAt: _0x56a70c.expireAt || null,
        surplusCount: _0x56a70c.surplusCount || null,
        lastVerifiedAt: _0x56a70c.lastVerifiedAt || null,
        lastAccount: _0x56a70c.lastAccount,
        lastPassword: _0x56a70c.lastPassword,
        lastVerifySuccess: _0x56a70c.lastVerifySuccess !== undefined ? _0x56a70c.lastVerifySuccess : !!_0x56a70c.authorized
      };
    } catch (_0x1751f3) {
      return {
        authorized: false,
        code: null,
        message: "未验证",
        token: null,
        remark: "",
        expireAt: null,
        surplusCount: null,
        lastVerifiedAt: null,
        lastVerifySuccess: false
      };
    }
  }
  saveState() {
    try {
      fs.writeFileSync(this.stateFile, JSON.stringify(this.state, null, 2), "utf8");
    } catch (_0x21bea1) {}
  }
  sha1(_0x9739ec) {
    return crypto.createHash("sha1").update(String(_0x9739ec)).digest("hex");
  }
  aesEncrypt(_0x4dd124) {
    if (!this.configValidation.ok) {
      throw new Error(this.configValidation.error || "配置错误");
    }
    const _0x45483e = Buffer.from(this.config.secretKey, "utf8");
    const _0x3dc987 = crypto.createCipheriv("aes-128-ecb", _0x45483e, null);
    _0x3dc987.setAutoPadding(true);
    const _0x594b28 = Buffer.concat([_0x3dc987.update(String(_0x4dd124), "utf8"), _0x3dc987.final()]);
    return _0x594b28.toString("base64");
  }
  aesDecrypt(_0x5707e5) {
    if (!this.configValidation.ok) {
      throw new Error(this.configValidation.error || "配置错误");
    }
    const _0x668ed = Buffer.from(this.config.secretKey, "utf8");
    const _0x2cadd7 = crypto.createDecipheriv("aes-128-ecb", _0x668ed, null);
    _0x2cadd7.setAutoPadding(true);
    const _0x371191 = Buffer.concat([_0x2cadd7.update(String(_0x5707e5), "base64"), _0x2cadd7.final()]);
    return _0x371191.toString("utf8");
  }
  getTimestamp() {
    return String(Math.floor(Date.now() / 1000));
  }
  buildUrl(_0x261ba2) {
    const _0x337ad5 = this.config.apiUrl.endsWith("/") ? this.config.apiUrl : this.config.apiUrl + "/";
    return "" + _0x337ad5 + _0x261ba2;
  }
  async request(_0x28b5b4, _0x42ee4d) {
    if (!this.configValidation.ok) {
      return {
        code: "403",
        msg: this.configValidation.error || "配置错误"
      };
    }
    if (!this.config.apiUrl) {
      return {
        code: this.aesEncrypt("403"),
        msg: this.aesEncrypt("未配置认证线路")
      };
    }
    const _0x1ddf33 = _0x42ee4d.join("|");
    const _0x3c98f7 = this.aesEncrypt(_0x1ddf33);
    const _0x267376 = [_0x28b5b4, ..._0x42ee4d, this.config.secretKey];
    const _0x40704f = this.sha1(_0x267376.join(""));
    try {
      const _0x407909 = await axios.post(this.buildUrl(_0x28b5b4), {
        data: _0x3c98f7,
        sign: _0x40704f
      }, {
        headers: {
          "User-Agent": "Node_" + this.config.appId
        },
        timeout: 10000
      });
      return _0x407909.data;
    } catch (_0x24f1fe) {
      return {
        code: this.aesEncrypt("403"),
        msg: this.aesEncrypt(_0x24f1fe.message)
      };
    }
  }
  async verify(_0x5c4b5d, _0x55bb67 = "") {
    if (!this.configValidation.ok) {
      return {
        code: "403",
        msg: this.configValidation.error || "配置错误"
      };
    }
    const _0xdcc9ac = String(_0x5c4b5d || "").trim();
    const _0xb0058d = String(_0x55bb67 || "").trim();
    if (!_0xdcc9ac) {
      return {
        code: "400",
        msg: "卡密/账号不能为空"
      };
    }
    const _0x11ec6e = this.getTimestamp();
    const _0x984830 = "License/verify/" + this.config.appId;
    const _0x2fbe68 = [this.config.mode, _0xdcc9ac, _0xb0058d, this.deviceId, Number(_0x11ec6e)];
    const _0x5286e3 = await this.request(_0x984830, _0x2fbe68);
    _0x5286e3.code = this.aesDecrypt(_0x5286e3.code);
    if (_0x5286e3.code === "200") {
      const _0x28c4f0 = this.aesDecrypt(_0x5286e3.token);
      const _0x2f144c = this.aesDecrypt(_0x5286e3.remark);
      const _0x381c3c = this.aesDecrypt(_0x5286e3.timeStamp);
      let _0x226e43 = [];
      let _0x15e5f = null;
      let _0x175712 = null;
      if (this.config.mode === 0) {
        const _0x61c509 = this.aesDecrypt(_0x5286e3.endDate);
        _0x15e5f = _0x61c509;
        _0x226e43 = [_0x5286e3.code, _0x61c509, _0x28c4f0, _0x2f144c, _0x381c3c, this.config.secretKey];
        _0x5286e3.msg = "有效期到：" + _0x61c509;
      } else {
        const _0x3d1d47 = this.aesDecrypt(_0x5286e3.surplusCount);
        _0x175712 = _0x3d1d47;
        _0x226e43 = [_0x5286e3.code, _0x3d1d47, _0x28c4f0, _0x2f144c, _0x381c3c, this.config.secretKey];
        _0x5286e3.msg = "您还剩余：" + _0x3d1d47 + " 次可用次数";
      }
      if (_0x5286e3.sign !== this.sha1(_0x226e43.join(""))) {
        return {
          code: "503",
          msg: "签名错误"
        };
      }
      if (Math.abs(Number(_0x381c3c) - Number(_0x11ec6e)) > 100) {
        return {
          code: "502",
          msg: "签名过期"
        };
      }
      this.state = {
        authorized: true,
        code: _0x5286e3.code,
        message: _0x5286e3.msg,
        token: _0x28c4f0,
        remark: _0x2f144c,
        expireAt: _0x15e5f,
        surplusCount: _0x175712,
        lastVerifiedAt: new Date().toISOString(),
        lastAccount: _0xdcc9ac,
        lastPassword: _0xb0058d,
        lastVerifySuccess: true
      };
      this.saveState();
      this.failedValidations = 0;
      this.startHeartbeat();
      this.emitStatusChange();
      return {
        ...this.state
      };
    }
    let _0xc36749 = "";
    try {
      _0xc36749 = this.aesDecrypt(_0x5286e3.msg);
    } catch (_0x5db3ee) {
      _0xc36749 = _0x5286e3.msg || "验证失败";
    }
    this.invalidate(_0xc36749 || "验证失败", _0x5286e3.code);
    return {
      code: _0x5286e3.code,
      msg: _0xc36749 || "验证失败"
    };
  }
  async changeDevice(_0x1cb954 = "") {
    return {
      code: "409",
      msg: "已禁用换机功能"
    };
  }
  async heartBeat(_0x277101 = {}) {
    if (!this.state.token) {
      return {
        ok: false,
        code: "401",
        message: "未验证"
      };
    }
    if (!this.configValidation.ok) {
      return {
        ok: false,
        code: "403",
        message: this.configValidation.error || "配置错误"
      };
    }
    const _0x26917a = this.getTimestamp();
    const _0x5ec4fa = "License/heartBeat/" + this.config.appId;
    const _0xbd0689 = [this.state.token, this.deviceId, Number(_0x26917a)];
    const _0x1185ee = await this.request(_0x5ec4fa, _0xbd0689);
    _0x1185ee.code = this.aesDecrypt(_0x1185ee.code);
    const _0xbec22a = new Set(["100", "101", "103", "201", "203", "502", "503", "504", "600", "601"]);
    if (_0x1185ee.code === "200") {
      this.failedValidations = 0;
      const _0x3ed807 = this.aesDecrypt(_0x1185ee.timeStamp);
      if (this.config.mode === 0) {
        const _0x1fe999 = this.aesDecrypt(_0x1185ee.endDate);
        const _0x3ced2d = [_0x1185ee.code, _0x1fe999, _0x3ed807, this.config.secretKey];
        if (_0x1185ee.sign !== this.sha1(_0x3ced2d.join(""))) {
          return this.invalidate("签名错误", "503");
        }
        this.state.expireAt = _0x1fe999;
      } else {
        const _0x2504e9 = this.aesDecrypt(_0x1185ee.surplusCount);
        const _0x390e50 = [_0x1185ee.code, _0x2504e9, _0x3ed807, this.config.secretKey];
        if (_0x1185ee.sign !== this.sha1(_0x390e50.join(""))) {
          return this.invalidate("签名错误", "503");
        }
        this.state.surplusCount = _0x2504e9;
      }
      if (Math.abs(Number(_0x3ed807) - Number(_0x26917a)) > 100) {
        return this.invalidate("签名过期", "502");
      }
      this.saveState();
      this.emitStatusChange();
      return {
        ok: true,
        status: this.getStatus()
      };
    }
    if (_0xbec22a.has(String(_0x1185ee.code))) {
      let _0x75c394 = "";
      try {
        _0x75c394 = this.aesDecrypt(_0x1185ee.msg);
      } catch (_0x2e4f31) {
        _0x75c394 = "";
      }
      this.invalidate(_0x75c394 || "心跳失败", _0x1185ee.code);
      return {
        ok: false,
        code: _0x1185ee.code,
        message: _0x75c394 || "心跳失败",
        invalidated: true
      };
    }
    this.failedValidations += 1;
    if (this.failedValidations >= 3) {
      let _0x4e3703 = "";
      try {
        _0x4e3703 = this.aesDecrypt(_0x1185ee.msg);
      } catch (_0xaebfdb) {
        _0x4e3703 = "";
      }
      this.invalidate(_0x4e3703 || "心跳失败", _0x1185ee.code);
      return {
        ok: false,
        code: _0x1185ee.code,
        message: _0x4e3703 || "心跳失败",
        invalidated: true
      };
    }
    let _0x16133d = "";
    try {
      _0x16133d = this.aesDecrypt(_0x1185ee.msg);
    } catch (_0x3db449) {
      _0x16133d = "";
    }
    return {
      ok: false,
      code: _0x1185ee.code,
      message: _0x16133d || "心跳失败",
      retryable: true
    };
  }
  startHeartbeat() {
    this.stopHeartbeat();
    const _0x54c07a = Math.max(200, Number(this.config.heartDuration || 600)) * 1000;
    this.heartbeatTimer = setInterval(() => {
      this.heartBeat();
    }, _0x54c07a);
  }
  stopHeartbeat() {
    this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this.heartbeatTimer = null);
  }
  invalidate(_0x5901e0, _0x4b119e) {
    this.stopHeartbeat();
    this.state.authorized = false;
    this.state.code = _0x4b119e || "401";
    this.state.message = _0x5901e0 || "验证失败";
    this.state.token = null;
    this.state.lastVerifiedAt = new Date().toISOString();
    this.state.lastVerifySuccess = false;
    this.saveState();
    this.emitStatusChange();
    this.onInvalid && this.onInvalid(this.state);
  }
  logout() {
    this.stopHeartbeat();
    this.state = {
      authorized: false,
      code: null,
      message: "已退出验证",
      token: null,
      remark: "",
      expireAt: null,
      surplusCount: null,
      lastVerifiedAt: new Date().toISOString(),
      lastVerifySuccess: false
    };
    this.saveState();
    this.emitStatusChange();
  }
  emitStatusChange() {
    this.onStatusChange && this.onStatusChange(this.getStatus());
  }
  getStatus() {
    const _0x541bac = {
      authorized: !!this.state.authorized,
      code: this.state.code,
      message: this.state.message,
      remark: this.state.remark || "",
      expireAt: this.state.expireAt || null,
      surplusCount: this.state.surplusCount || null,
      lastVerifiedAt: this.state.lastVerifiedAt || null
    };
    const _0x5e491d = this.getAuthorizationStatus();
    _0x541bac.authorized = _0x5e491d.authorized;
    _0x5e491d.message && (_0x541bac.message = _0x5e491d.message, _0x541bac.code = _0x5e491d.code || _0x541bac.code);
    return _0x541bac;
  }
  isAuthorized() {
    return this.getAuthorizationStatus().authorized;
  }
  async ensureAuthorized(_0x1c7a88 = {}) {
    const _0x37fcec = _0x1c7a88.mode || "start";
    const _0x433b8b = _0x1c7a88.account;
    const _0x8adb29 = _0x1c7a88.password || "";
    if (!this.configValidation.ok) {
      return {
        ok: false,
        code: "403",
        message: this.configValidation.error || "配置错误"
      };
    }
    if (!this.state.authorized) {
      if (_0x433b8b) {
        const _0x282405 = await this.verify(_0x433b8b, _0x8adb29);
        if (_0x282405 && _0x282405.authorized) {
          return {
            ok: true,
            status: this.getStatus()
          };
        }
        return {
          ok: false,
          code: _0x282405.code || "401",
          message: _0x282405.msg || "未验证"
        };
      }
      if (this.state.lastAccount) {
        const _0x2855cb = await this.verify(this.state.lastAccount, this.state.lastPassword || "");
        if (_0x2855cb && _0x2855cb.authorized) {
          return {
            ok: true,
            status: this.getStatus()
          };
        }
        return {
          ok: false,
          code: _0x2855cb.code || "401",
          message: _0x2855cb.msg || "未验证"
        };
      }
      return {
        ok: false,
        code: "401",
        message: "未验证"
      };
    }
    if (!this.state.token) {
      return {
        ok: false,
        code: "401",
        message: "未验证"
      };
    }
    if (_0x433b8b && _0x433b8b !== this.state.lastAccount) {
      const _0x3aae94 = await this.verify(_0x433b8b, _0x8adb29);
      if (_0x3aae94 && _0x3aae94.authorized) {
        return {
          ok: true,
          status: this.getStatus()
        };
      }
      return {
        ok: false,
        code: _0x3aae94.code || "401",
        message: _0x3aae94.msg || "未验证"
      };
    }
    if (!this.state.lastVerifySuccess) {
      return {
        ok: false,
        code: "401",
        message: "请先完成网络验证"
      };
    }
    const _0x480597 = await this.heartBeat({
      mode: _0x37fcec
    });
    if (_0x480597 && _0x480597.ok) {
      return {
        ok: true,
        status: this.getStatus()
      };
    }
    return {
      ok: false,
      code: _0x480597?.["code"] || "401",
      message: _0x480597?.["message"] || "验证失败"
    };
  }
  getAuthorizationStatus() {
    if (!this.state.authorized) {
      return {
        authorized: false
      };
    }
    if (!this.state.token) {
      return {
        authorized: false,
        message: "未验证",
        code: "401"
      };
    }
    if (!this.configValidation.ok) {
      return {
        authorized: false,
        message: this.configValidation.error || "配置错误",
        code: "403"
      };
    }
    if (Number(this.config.mode) === 0) {
      if (this.state.expireAt) {
        const _0x199730 = Date.parse(String(this.state.expireAt).replace(/-/g, "/"));
        if (Number.isFinite(_0x199730) && Date.now() > _0x199730) {
          return {
            authorized: false,
            message: "授权已过期",
            code: "101"
          };
        }
      }
    } else {
      const _0x246619 = Number(this.state.surplusCount || 0);
      if (_0x246619 <= 0) {
        return {
          authorized: false,
          message: "次数不足",
          code: "201"
        };
      }
    }
    return {
      authorized: true
    };
  }
}
module.exports = AuthService;