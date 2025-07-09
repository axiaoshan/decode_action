//Wed Jul 09 2025 18:09:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
process.noDeprecation = true;
NAME = "恐龙打工日记";
VALY = ["kldgrj"];
CK = "";
let m = process.env.qyweixin;
let R = process.env[VALY[0] + "bf"];
let G = process.env[VALY[0] + "ys"] || "";
let O = process.env[VALY[0] + "dl"] || "";
let e = process.env.WECHAT_SERVER || "";
let f = "vip.dsrhkj.cn";
let h = "/app/index.php?i=3&t=0&v=1.15&from=wxapp&c=entry&a=wxapp&do=distribute&m=bh_cat";
let w = "https://" + f;
const Y = ["\n", "@"];
const b0 = 0;
usid = 0;
class b1 {
  constructor(b) {
    this.num = ++usid;
    this.one = 0;
    this.strck = b;
    this.token = b.split("#")[0];
  }
  async moshi() {
    const P = {
      cfDuo: function (Q, k) {
        return Q * k;
      },
      tsIhW: "wxid",
      AjeDX: function (Q, k) {
        return Q !== k;
      },
      fzafw: "lWMMD",
      UeBiI: "AFHVj",
      TijSB: "当前使用CK模式",
      TojUx: function (Q, k) {
        return Q !== k;
      },
      CNbHE: "GnEbH",
      XDnxW: "ZZDAT",
      CxegT: "3|2|1|4|0"
    };
    if (!this.token.startsWith("wxid")) {
      console.log("当前使用CK模式");
      this.wxcode = 0;
    } else {
      {
        console.log("当前使用code模式");
        this.wxid = this.token;
        await this.readck();
        this.wxcode = 1;
        this.token = this.ck;
      }
    }
  }
  headers() {
    let E = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13) XWEB/9129",
      xweb_xhr: "1",
      referer: "https://servicewechat.com/wxebc856cb722e51d1/2/page-frame.html",
      "accept-language": "zh-CN,zh;q=0.9"
    };
    return E;
  }
  async hqdl() {
    let Q = await $.task("get", O, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = Q.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async user_task_list() {
    await $.wait($.RT(1000, 3000));
    await this.list();
    await $.wait($.RT(1000, 3000));
    await this.gxqk();
    await $.wait($.RT(3000, 5000));
    await this.hyxtqk();
  }
  async huoqucode() {
    const P = {
      upfiH: "info",
      NFCDK: "capacity",
      gFcQZ: "warehouse",
      dDgJK: "code",
      XfteZ: "post",
      orozj: "application/json",
      DrMpl: function (Z, V) {
        return Z == V;
      },
      GUUyX: function (Z, V) {
        return Z === V;
      },
      VJgCr: "fAyIC",
      NdEDu: "WLyJh"
    };
    this.one = 1;
    const k = Object.keys(this.headers()).find(Z => Z.toLowerCase() === "referer");
    const E = this.headers()[k];
    const p = new URL(E).pathname.split("/")[1];
    let F = await $.task("post", e + "/wx/app/code", {
      "Content-Type": "application/json"
    }, "{\"wxid\": \"" + this.wxid + "\",\"appid\": \"" + p + "\"}");
    if (F.Code == 0) {
      {
        let Z = F.Data.code;
        await this.logintoken(Z);
      }
    } else {
      {
        return;
      }
    }
  }
  async logintoken(A) {
    const Q = {
      SViRj: "获取ck",
      CJwdq: "get",
      hfltb: function (p, F) {
        return p == F;
      },
      cJQaz: function (p, F) {
        return p !== F;
      },
      JptIy: "vtMzy",
      HsyIb: "UqRnn",
      MzqoI: "dFILm",
      MMKxa: "HIymO",
      ZVCkC: function (p, F) {
        return p !== F;
      },
      CKpuW: function (p, F) {
        return p === F;
      },
      zNaEx: "pOPxM"
    };
    let k = "获取ck";
    await $.wait($.RT(1000, 3000));
    let E = await this.task("get", "" + w + h + "&code=" + A + "&parent_id=&contr=noLogin&action=login&version=1.0.43", this.headers());
    if (E.status == 1) {
      {
        this.token = E.info;
        this.ck = this.token;
        await this.writeck();
        await $.wait($.RT(3000, 5000));
      }
    } else {
      {
        let F = E.msg;
        console.log(this.num + " " + k + "：" + F);
        if (m !== undefined) {
          {
            await this.wxpusher(F);
          }
        }
        return;
      }
    }
  }
  async login() {
    let A = "用户信息";
    let P = await this.task("get", "" + w + h + "&action=home&contr=index&parent_id=0&token=" + this.token + "&is_new=1&version=1.0.43", this.headers());
    if (P.status == 1) {
      {
        this.isLogin = true;
        let {
          nickname: k,
          currency: E,
          foodstuff: p,
          money: F,
          warehouse_level: Z
        } = P.info.member;
        let V = P.info.look_num;
        this.num = "|" + k + "|";
        console.log(this.num + " 金币：" + E + " 💰：" + F + " 食物：" + p);
        !P.info.daily_food.status && (await $.wait($.RT(3000, 5000)), await this.shiwu());
        if (!P.info.is_sign) {
          {
            await $.wait($.RT(3000, 5000));
            await this.qiandao();
          }
        }
        let C = P.info.config.daily_video_num;
        for (let c = V; c < C; c++) {
          {
            await $.wait($.RT(3000, 5000));
            await this.shu();
          }
        }
      }
    } else {
      {
        this.isLogin = false;
        let W = P.info;
        console.log(this.num + " " + A + "：" + W);
        if (W.includes("login") && this.wxcode && !this.one) {
          {
            await this.huoqucode();
            await $.wait($.RT(3000, 5000));
            await this.login();
          }
        } else {
          m && (await this.wxpusher(W));
        }
      }
    }
  }
  async qiandao() {
    let Q = "签到";
    let k = await this.task("get", "" + w + h + "&action=sign&contr=my&token=" + this.token + "&version=1.0.43", this.headers());
    if (k.status == 1) {
      {
        console.log(this.num + " " + Q + "：成功！");
      }
    } else {
      {
        let p = k.info;
        console.log(this.num + " " + Q + "：" + p);
      }
    }
  }
  async shu() {
    let Q = "📚";
    let k = await this.task("get", "" + w + h + "&action=video&contr=food&token=" + this.token + "&version=1.0.43", this.headers());
    if (k.status == 1) {
      {
        console.log(this.num + " " + Q + "：" + k.info.video_currency + "食物");
      }
    } else {
      {
        let p = k.info;
        console.log(this.num + " " + Q + "：" + p);
      }
    }
  }
  async gxqk() {
    let A = "贡献情况";
    let P = await this.task("get", "" + w + h + "&action=upcurrency&contr=my&token=" + this.token + "&collect=2&version=1.0.43", this.headers());
    if (P.status == 1) {
      {
        if (P.info.warehouse_currency > 10) {
          {
            await $.wait($.RT(3000, 5000));
            await this.qiandaofanbei();
          }
        }
      }
    } else {
      {
        let p = P.info;
        console.log(this.num + " " + A + "：" + p);
      }
    }
  }
  async qiandaofanbei() {
    let Q = "贡献";
    let k = await this.task("get", "" + w + h + "&action=upcurrency&contr=my&token=" + this.token + "&collect=1&version=1.0.43", this.headers());
    if (k.status == 1) {
      {
        console.log(this.num + " " + Q + "：" + k.info.collect_currency + "金币");
      }
    } else {
      {
        let F = k.info;
        console.log(this.num + " " + Q + "：" + F);
      }
    }
  }
  async hyxtqk() {
    let A = "好友系统情况";
    let P = await this.task("get", "" + w + h + "&action=warehouse&contr=my&token=" + this.token + "&version=1.0.43", this.headers());
    if (P.status == 1) {
      {
        let Q = P.info.capacity.warehouse.share_num;
        let k = P.info.capacity.all_share;
        if (Q <= k) {
          {
            await $.wait($.RT(3000, 5000));
            await this.hyxt();
          }
        }
      }
    } else {
      {
        let Z = P.info;
        console.log(this.num + " " + A + "：" + Z);
      }
    }
  }
  async hyxt() {
    let A = "🍀";
    let P = await this.task("get", "" + w + h + "&action=open_capacity&contr=my&token=" + this.token + "&version=1.0.43", this.headers());
    if (P.status == 1) {
      {
        let Q = P.info.capacity.warehouse.warehouse;
        console.log(this.num + " " + A + "：✅ 可容纳" + Q + "金币");
      }
    } else {
      {
        let E = P.info;
        console.log(this.num + " " + A + "：" + E);
      }
    }
  }
  async shiwu() {
    let Q = "食物";
    let k = await this.task("get", "" + w + h + "&action=daily&contr=food&token=" + this.token + "&version=1.0.43", this.headers());
    if (k.status == 1) {
      {
        console.log(this.num + " " + Q + "：领取成功！");
      }
    } else {
      {
        let p = k.info;
        console.log(this.num + " " + Q + "：" + p);
      }
    }
  }
  async list() {
    let Q = "广告id";
    let k = await this.task("get", "" + w + h + "&action=index&contr=task&token=" + this.token + "&version=1.0.43", this.headers());
    if (k.status == 1) {
      {
        let E = k.info.task.s;
        for (let p of E) {
          {
            let {
              id: Z
            } = p;
            await $.wait($.RT(23000, 23500));
            await this.guangao(Z);
          }
        }
      }
    } else {
      {
        let J = k.info;
        console.log(this.num + " " + Q + "：" + J);
      }
    }
  }
  async weishi() {
    const P = {
      xoGzC: "喂食龙群",
      qMWBs: "get",
      PJGso: function (E, p) {
        return E == p;
      },
      eBlFR: function (E, p) {
        return E !== p;
      },
      xOBaf: "aajXB",
      DvqOu: "pYgIB"
    };
    let Q = "喂食龙群";
    let k = await this.task("get", "" + w + h + "&action=feed&contr=my&token=" + this.token + "&is_remind=1&version=1.0.43", this.headers());
    if (k.status == 1) {
      console.log(this.num + " " + Q + "：加" + k.info.percentage + "体力");
    } else {
      {
        let F = k.info;
        console.log(this.num + " " + Q + "：" + F);
      }
    }
  }
  async guangao(A) {
    const Q = {
      WZSdp: "Content-Length",
      YKHAW: "get",
      HdcWx: function (p, F) {
        return p == F;
      },
      xjHli: function (p, F) {
        return p === F;
      },
      iYEtZ: "cXjnJ",
      YeZwP: function (p, F) {
        return p !== F;
      },
      rMBfy: "iJWof",
      bjofX: "EnRnN"
    };
    let k = "📺";
    let E = await this.task("get", "" + w + h + "&action=complete&contr=task&task_id=" + A + "&token=" + this.token + "&version=1.0.43", this.headers());
    if (E.status == 1) {
      {
        console.log(this.num + " " + k + "：" + E.info.msg);
      }
    } else {
      {
        let F = E.info;
        console.log(this.num + " " + k + "：" + F);
      }
    }
  }
  async xinxi() {
    const P = {
      EDfQW: "用户信息",
      ebTjY: "get",
      OLlce: function (E, p) {
        return E == p;
      },
      uLGPt: function (E, p) {
        return E !== p;
      },
      sqfiL: "sBNWz",
      JZpKd: function (E, p) {
        return E > p;
      },
      fwKMT: function (E, p) {
        return E === p;
      },
      wBHYB: "zmBLZ",
      ryFSs: function (E, p) {
        return E !== p;
      },
      bmFeU: "kFkEC"
    };
    let Q = "用户信息";
    let k = await this.task("get", "" + w + h + "&action=index&contr=my&token=" + this.token + "&version=1.0.43 ", this.headers());
    if (k.status == 1) {
      {
        let {
          currency: p,
          foodstuff: F,
          bonus_level: Z,
          money: V
        } = k.info.member;
        console.log(this.num + " 金币：" + p + " 💰：" + V + " 食物：" + F);
        if (F > 0) {
          {
            await $.wait($.RT(3000, 5000));
            await this.weishi();
          }
        }
      }
    } else {
      {
        this.isLogin = false;
        let n = k.info;
        console.log(this.num + " " + Q + "：" + n);
      }
    }
  }
  async fenhong() {
    const A;
    let Q = "📺";
    let k = await this.task("get", "" + w + h + "&action=upgrade&contr=index&token=" + this.token + "&version=1.0.43", this.headers());
    if (k.status == 1) {
      {
        console.log(this.num + " " + Q + "：" + k.info.msg);
      }
    } else {
      {
        let p = k.info;
        console.log(this.num + " " + Q + "：" + p);
      }
    }
  }
  async wxpusher(A) {
    let k = "{\"msgtype\": \"text\",\"text\": {\"content\": \"" + NAME + "\n[" + this.num + "]:" + A + "\n" + m.split("#")[1] + "\"}}";
    let E = await $.task("post", "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=" + m.split("#")[0], {}, k);
    if (E.errcode == 0) {
      console.log("微信通知" + E.errmsg);
    } else {
      {
        console.log("微信通知失败");
      }
    }
  }
  async writeck() {
    let A = "写入";
    const P = require("fs");
    const Q = "xg_" + VALY + ".json";
    let k = {};
    if (P.existsSync(Q)) {
      {
        try {
          {
            const p = P.readFileSync(Q, "utf8");
            k = JSON.parse(p);
          }
        } catch (Z) {
          {
            console.log(A + "：读取文件失败", Z);
            return;
          }
        }
      }
    }
    k[this.wxid] = {
      ck: this.ck
    };
    try {
      P.writeFileSync(Q, JSON.stringify(k, null, 2));
      console.log(A + "：成功写入CK");
    } catch (J) {
      {
        console.log(A + "：写入文件失败", J);
      }
    }
  }
  async readck() {
    let A = "读取ck";
    const P = require("fs");
    const Q = "xg_" + VALY + ".json";
    if (!P.existsSync(Q)) {
      {
        console.log(A + "：文件不存在，需要获取code");
        await this.huoqucode();
        return;
      }
    }
    try {
      {
        const p = P.readFileSync(Q, "utf8");
        const F = JSON.parse(p);
        if (F[this.wxid] && F[this.wxid].ck) {
          {
            this.ck = F[this.wxid].ck;
          }
        } else {
          {
            console.log(A + "：未找到对应wxid的CK，需要获取code");
            await this.huoqucode();
          }
        }
      }
    } catch (C) {
      console.log(A + "：读取文件失败", C);
      await this.huoqucode();
    }
  }
  async task(A, P, Q, k) {
    const E = {
      Rsncx: "当前使用CK模式",
      WaYkW: function (V, C) {
        return V * C;
      },
      FVHEM: function (V, C) {
        return V + C;
      },
      WRBDy: "http://",
      UTchy: function (V, C) {
        return V(C);
      },
      JeboA: "node-rsa",
      mZfvy: "-----BEGIN PUBLIC KEY-----\n",
      dFKhv: "\n-----END PUBLIC KEY-----",
      DlPBm: "pkcs1",
      bOOlw: "base64",
      LGeWT: "utf8",
      lqEuN: function (V, C) {
        return V === C;
      },
      JCEau: "rptWV",
      Zjshz: "xVNea",
      wVqfy: function (V, C) {
        return V == C;
      },
      gDnGv: function (V, C) {
        return V === C;
      },
      BpiXQ: "lloQA",
      NGiqL: "VeUZu",
      SdhAP: "BUyrL",
      WcXvf: "zMXOV",
      uAmhj: function (V, C) {
        return V === C;
      },
      epUzn: "JQIWz",
      qYGwI: "asWsO",
      WnmuA: function (V, C) {
        return V === C;
      },
      nlOrG: "yjVMD",
      fHbTK: "LzYEk",
      nafBX: function (V, C) {
        return V !== C;
      },
      qctHX: "vkqpM",
      UyZwp: function (V, C) {
        return V !== C;
      },
      SMfse: "dWQSr",
      vpyIU: "hyWlS",
      JJdxl: function (V, C) {
        return V == C;
      },
      CvmDW: "ORePK",
      xypAF: "EzTmj",
      GKdwT: "BnWvr",
      JuhOo: "snoeW",
      dpQpT: function (V, C) {
        return V(C);
      },
      SRgqs: "object",
      HsYoF: "0123456789",
      YGqvd: function (V, C) {
        return V < C;
      },
      RFJpm: "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
      UZsgO: "rvVxo",
      tcuxy: "delete",
      kItNd: "request",
      lkTJn: function (V, C) {
        return V && C;
      },
      IXGqJ: function (V, C) {
        return V === C;
      },
      BHGdz: "post",
      uboqu: function (V, C) {
        return V === C;
      },
      pVdDJ: "QjEXa",
      MBBxT: "Content-Type",
      IUdgB: "content-type",
      Gvvbj: "Content-Length",
      AhZeR: "content-length",
      Okxgf: "application/json;charset=utf-8",
      zcALM: "application/x-www-form-urlencoded",
      dsEJj: function (V, C) {
        return V === C;
      },
      pPJky: "get",
      Jmwxa: "ONEmr",
      jGReS: "PMUCB",
      ymwgW: function (V, C) {
        return V >= C;
      },
      dGEVQ: function (V, C) {
        return V !== C;
      },
      htTLm: "GUZJR",
      ZMjTN: "EkkYS",
      MPmJk: "DGjjt",
      vexhV: "NkLyO",
      SpAkZ: "Host"
    };
    A = A === "delete" ? A.toUpperCase() : A;
    const p = require("request");
    const F = {
      proxy: "http://" + this.dlip
    };
    const Z = {
      url: P,
      headers: Q,
      timeout: 20000,
      ...(O && F)
    };
    if (A === "post") {
      {
        ["Content-Type", "content-type", "Content-Length", "content-length"].forEach(V => delete Q[V]);
        Q["content-type"] = $.safeGet(k) ? "application/json;charset=utf-8" : "application/x-www-form-urlencoded";
        if (k) {
          Q["content-length"] = $.lengthInUtf8Bytes(k);
        }
      }
    } else {
      A === "get" && ["Content-Type", "content-type", "Content-Length", "content-length"].forEach(J => delete Q[J]);
    }
    if (A.indexOf("T") >= 0) {
      {
        Z.form = JSON.parse(k);
      }
    } else {
      Z.body = k;
    }
    Q.Host = P.replace("//", "/").split("/")[1];
    return new Promise(async c => {
      {
        p[A.toLowerCase()](Z, async (o, W, N) => {
          {
            try {
              {
                b0 == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(Z)), console.log("==================返回=================="), console.log(N));
              }
            } catch (v) {} finally {
              {
                if (!o) {
                  {
                    if ($.safeGet(N)) {
                      {
                        N = JSON.parse(N);
                      }
                    } else {
                      {
                        N = N;
                      }
                    }
                  }
                } else {
                  {
                    if (O == undefined) {
                      {
                        console.log("请检查网络设置");
                        N = JSON.parse("{\"code\":\"99\"}");
                      }
                    } else {
                      {
                        await this.hqdl();
                        N = await this.task(A, P, Q, k);
                      }
                    }
                  }
                }
                return c(N);
              }
            }
          }
        });
      }
    });
  }
}
$ = b2();
!(async () => {
  console.log("🔔[" + NAME + "] 📅 " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  await $.ExamineCookie();
  const A = !!O;
  console.log("当前使用" + (A ? "代理" : "本地") + "网络运行脚本");
  this.dlqk = A ? 1 : 0;
  if (!R) {
    {
      for (let P of $.cookie_list) {
        {
          console.log("-".repeat(20));
          if (!b0 && G !== "1") {
            {
              const Q = $.RT(150000, 490000);
              console.log("随机延迟" + Math.round(Q * 0.001) + "秒");
              await $.wait(Q);
            }
          }
          A && (await P.hqdl());
          await P.moshi();
          await P.login();
          P.isLogin && (await P.user_task_list(), await P.xinxi());
        }
      }
    }
  } else {
    {
      if (!b0 && G !== "1") {
        {
          const J = $.RT(150000, 490000);
          console.log("随机延迟" + Math.round(J * 0.001) + "秒");
          await $.wait(J);
        }
      }
      A && (await $.Multithreading("hqdl"));
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("moshi");
      await $.Multithreading("login");
      let V = $.cookie_list.filter(n => n.isLogin == true);
      if (V.length == 0) {
        {
          console.log("Cookie格式错误 或 账号被禁封");
          return;
        }
      } else {
        {
          console.log("\n-------- 任务列表 --------");
          await $.Multithreading("user_task_list");
          console.log("\n-------- 运行结果 --------");
        }
      }
      for (let U of $.cookie_list) {
        {
          U.xinxi();
        }
      }
    }
  }
})().catch(b => {
  console.log(b);
}).finally(() => {});
function b2() {
  const P = {
    XGvNS: function (E, p) {
      return E !== p;
    },
    xAOnM: "ZPWXj",
    DqpRW: "BIYKd",
    SKEfK: function (E, p) {
      return E === p;
    },
    mqEhr: "QOmae",
    bEviX: "XIBFF",
    wsbPm: "Brpcj",
    ICOha: function (E, p) {
      return E === p;
    },
    fekrP: "RHtyJ",
    Jyrek: "Content-Type",
    hjghS: "content-type",
    nLuYb: "Content-Length",
    giPlZ: "content-length",
    rySnJ: "cMiZs",
    XSTDM: "OiDZl",
    bZEyX: "(((.+)+)+)+$",
    xIYkv: function (E, p) {
      return E === p;
    },
    ptEul: "bGndI",
    nGjsA: "sZXUe",
    lFgCO: "2|1|4|3|0|5",
    DkLkd: function (E, p) {
      return E(p);
    },
    TiFZL: "request",
    OXpKj: function (E, p) {
      return E(p);
    },
    ccgkB: "node-rsa",
    yNnqQ: function (E, p) {
      return E(p);
    },
    GFBRP: "crypto-js",
    ZbQzx: "jsrsasign",
    uenEI: "utf8",
    gUzuW: function (E, p) {
      return E !== p;
    },
    TLfxD: "MQXyh",
    dYmuf: "okDZP",
    vZeVE: function (E, p) {
      return E === p;
    },
    ciUMl: "psrGL",
    IxqgM: "kzLbs",
    myAGU: function (E, p) {
      return E + p;
    },
    Fuycm: "****",
    DszUw: function (E, p) {
      return E == p;
    },
    WbUPr: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13) XWEB/9129",
    CZDli: "https://servicewechat.com/wxebc856cb722e51d1/2/page-frame.html",
    BoIFv: "zh-CN,zh;q=0.9",
    pooVZ: "HepSC",
    Wmwaz: function (E, p) {
      return E === p;
    },
    jtPDd: "HqLAy",
    DBesU: "lrjNw",
    DZcBs: "hIWle",
    kTrZY: "nZFXt",
    KxJsw: "Content-type",
    KiNcq: "content-Type",
    fWzQu: "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789",
    dDEht: function (E, p) {
      return E < p;
    },
    UZgdU: function (E, p) {
      return E * p;
    },
    KgGvL: function (E, p) {
      return E + p;
    },
    wmFhn: "WlvNh",
    SZYlW: "qCerf",
    AmZsY: function (E, p) {
      return E !== p;
    },
    pYFYQ: "lzrjP",
    DSdYy: "uBxsp",
    uciaU: "fdIzN",
    wLSMI: "LTLDQ",
    ZyLZv: "oLlWK",
    Kcymb: function (E, p) {
      return E === p;
    },
    xpvex: "BZNAZ",
    EsTOj: "hgGTj",
    jEEpD: function (E, p) {
      return E !== p;
    },
    ebviH: "vIQNg",
    obgzZ: "3|0|1|4|2",
    ataLZ: "application/json;charset=UTF-8",
    FLFVo: "application/x-www-form-urlencoded",
    LjpHT: function (E, p) {
      return E + p;
    },
    NpbQH: function (E, p) {
      return E + p;
    },
    dLSNB: function (E, p) {
      return E * p;
    },
    hDuRA: function (E, p) {
      return E - p;
    },
    GuLLw: function (E, p) {
      return E === p;
    },
    QiTnz: function (E, p) {
      return E(p);
    },
    CozHW: function (E, p) {
      return E(p);
    },
    LuVbp: function (E, p) {
      return E(p);
    },
    waIQw: function (E, p) {
      return E !== p;
    },
    LwBDq: "nrwqS",
    yRbjP: function (E, p) {
      return E < p;
    },
    Hfscs: "fUTlT",
    lBbwe: "http://",
    VZmaS: "hKvjv",
    rIKTO: function (E, p) {
      return E + p;
    },
    lZEzx: function (E, p) {
      return E !== p;
    },
    rFLuk: "lBKZk",
    qhZQo: "udgLi",
    BRZOx: "proxy",
    COKRX: "0|5|4|2|1|3",
    oSaYO: function (E, p) {
      return E(p);
    },
    GdGhz: function (E, p) {
      return E < p;
    },
    HepkD: function (E, p) {
      return E + p;
    },
    IexWM: function (E, p) {
      return E + p;
    },
    JeIzz: function (E, p) {
      return E / p;
    },
    BkmVo: function (E, p) {
      return E * p;
    },
    GuGgM: function (E, p) {
      return E === p;
    },
    qOKha: function (E, p) {
      return E + p;
    },
    hMspM: "   API请求失败，请检查网络重试\n",
    wTAXa: "IvUcf",
    zDnkR: "YQAwR",
    Dbkcn: "genfV",
    WxWSf: "eIsnx",
    JvhaL: "WBZTR",
    ADzcz: "ICuGX",
    Vzbno: function (E, p) {
      return E == p;
    },
    ivzOL: "YsJEi",
    kEeaf: "fmlre",
    sQkAW: "OXfKJ",
    xCjGn: "qXzIq",
    IeZmc: "VTdwW",
    Esfqe: "SRVId",
    ceIRX: "ojKiV",
    zKERS: "fMYcH",
    xyZgu: "vuLum",
    TAFEs: function (E, p) {
      return E != p;
    },
    xBBHK: "CNrCm",
    EiERx: "FdXRn",
    CZMYS: function (E, p) {
      return E !== p;
    },
    pygUC: "ZVtBu",
    SHstS: "moPkh",
    HXHGO: "sGgqo",
    AUPUF: "ztCHF",
    vJvJS: function (E, p) {
      return E + p;
    },
    JMaeO: function (E, p) {
      return E === p;
    },
    IgNoB: "GnPvZ",
    tjjSB: "bMudE",
    urDsH: "delete",
    SDicf: function (E, p) {
      return E !== p;
    },
    kDLor: "AXNxk",
    AlmyQ: "PuRes",
    fkHQB: function (E, p) {
      return E !== p;
    },
    ygfxu: "WUNla",
    HQEOB: function (E, p) {
      return E == p;
    },
    LeUBC: "post",
    dyMiX: function (E, p) {
      return E === p;
    },
    uNQCR: "uvVlM",
    QlJaK: "XbCXh",
    SlIfO: function (E, p) {
      return E === p;
    },
    cZeFQ: "wzJkk",
    SadIM: "LEbMp",
    SaAKy: function (E, p) {
      return E !== p;
    },
    xjCDy: "toVLO",
    UNAtj: "ljViL",
    woswG: function (E, p) {
      return E == p;
    },
    YbVvC: "get",
    fHZqL: "ctrdn",
    faaeR: "Host",
    SyMSd: "replace",
    XXRfj: "split",
    MdWJk: function (E, p) {
      return E === p;
    },
    nyrfh: "BBymN",
    PZLQq: "TOabI",
    PzSoA: function (E, p) {
      return E + p;
    },
    hQGQL: function (E, p) {
      return E + p;
    },
    vBOcw: function (E, p) {
      return E === p;
    },
    mxOyx: "UTSVQ",
    yMHce: function (E, p, F) {
      return E(p, F);
    },
    LIBzu: function (E, p) {
      return E * p;
    },
    gRaQe: function (E, p) {
      return E !== p;
    },
    bNYsb: "FDalg",
    mvGxk: "TNteB",
    mxTMl: function (E, p) {
      return E >= p;
    },
    nUwxn: function (E, p) {
      return E - p;
    },
    YEnLA: function (E, p) {
      return E * p;
    },
    uIwMH: function (E, p) {
      return E * p;
    },
    kskaU: function (E, p) {
      return E * p;
    },
    oazWg: "dGYzZ",
    pEYfW: function (E, p) {
      return E === p;
    },
    kfcPi: "tEguM",
    ZjoHC: function (E, p) {
      return E / p;
    },
    wTqua: "uJbHn",
    cGSOC: "eXKgE",
    IdxXj: function (E, p) {
      return E === p;
    },
    YNbzn: "JOigG",
    vtsoC: "mPvxR",
    TtYYX: function (E, p) {
      return E == p;
    },
    RKUkg: "WPGSI",
    fOsxl: "bDHbk",
    kHXXT: function (E, p) {
      return E + p;
    },
    LbUMW: function (E, p) {
      return E + p;
    },
    QfbeA: function (E, p) {
      return E + p;
    },
    UBgKk: function (E, p) {
      return E < p;
    },
    eksHN: function (E, p) {
      return E + p;
    },
    hRZWP: function (E, p) {
      return E + p;
    },
    MAMYH: function (E, p) {
      return E + p;
    },
    xUYPT: function (E, p) {
      return E + p;
    },
    zlACw: function (E, p) {
      return E + p;
    },
    IQHpD: function (E, p) {
      return E === p;
    },
    LWxze: "PoeEo",
    KUEhC: function (E, p) {
      return E == p;
    },
    BAPWJ: "zKPNw",
    tBzjB: "BhvBQ",
    Fpmay: function (E, p) {
      return E < p;
    },
    MSMkO: function (E, p) {
      return E + p;
    },
    QJvlk: function (E, p) {
      return E + p;
    },
    QmkzC: function (E, p) {
      return E + p;
    },
    RpMfo: function (E, p) {
      return E === p;
    },
    VDChy: "YbwLN",
    xpwcg: "HiKty",
    OmaAp: function (E, p) {
      return E < p;
    },
    mlrol: function (E, p) {
      return E === p;
    },
    IpyuN: "ewCBx",
    YFtag: "mFvzm",
    GDqsr: function (E, p) {
      return E !== p;
    },
    WBomN: "fKgtj",
    tfSUR: "sWCJF",
    LqNbo: "VrmRZ",
    lsXMK: "mgdqh",
    AIafn: function (E, p) {
      return E + p;
    },
    gozCq: function (E, p) {
      return E + p;
    },
    KquYT: function (E, p) {
      return E === p;
    },
    suLcc: "CRGiu",
    guvKg: "kTsEm",
    BrsIC: "rBJJL",
    bQsTE: function (E, p) {
      return E == p;
    },
    AGAuo: "object",
    pBCLv: "SEjps",
    JiuFf: function (E, p) {
      return E === p;
    },
    wLjtU: "CHolz",
    ecvkV: function (E, p) {
      return E == p;
    },
    ORjcY: function (E, p) {
      return E !== p;
    },
    QKaFQ: "ATEEu",
    zYbha: "CcaTk",
    zjKHB: "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
    NDtgd: "kMMlg",
    bFImq: function (E, p) {
      return E * p;
    },
    tuTok: "qwertyuiopasdfghjklzxcvbnm0123456789",
    eWzLl: function (E, p) {
      return E * p;
    },
    fzjEh: "0123456789",
    wpfMw: function (E, p) {
      return E * p;
    },
    eheQc: function (E, p) {
      return E | p;
    },
    IxQtf: function (E, p) {
      return E * p;
    },
    YeSPR: function (E, p) {
      return E + p;
    },
    NfWVL: function (E, p) {
      return E + p;
    },
    FElFU: function (E, p) {
      return E + p;
    },
    KmmzF: function (E, p) {
      return E + p;
    },
    oztBR: function (E, p) {
      return E + p;
    },
    MZNoB: function (E, p) {
      return E + p;
    },
    wMtEb: function (E, p) {
      return E + p;
    },
    tvDho: function (E) {
      return E();
    },
    jpaNt: function (E) {
      return E();
    },
    MxTJG: function (E) {
      return E();
    },
    VrCFk: function (E) {
      return E();
    },
    sGzBB: function (E, p) {
      return E < p;
    },
    wANHU: function (E, p) {
      return E + p;
    },
    bTOHF: function (E, p) {
      return E + p;
    },
    bnJyd: function (E, p) {
      return E(p);
    },
    qqEuJ: function (E, p) {
      return E * p;
    },
    wFdNJ: function (E, p) {
      return E - p;
    },
    WQmla: function (E, p) {
      return E * p;
    },
    CNPIw: function (E, p) {
      return E * p;
    },
    tZBol: function (E, p) {
      return E >= p;
    },
    ucRCF: function (E, p) {
      return E * p;
    },
    BGDnQ: function (E, p) {
      return E == p;
    },
    GXhga: function (E, p) {
      return E == p;
    },
    tUmIc: function (E, p) {
      return E == p;
    },
    ZYULa: "-----BEGIN PUBLIC KEY-----\n",
    IEmbT: "\n-----END PUBLIC KEY-----",
    YmJXl: "pkcs1",
    ugyTh: "base64",
    Fuvud: function (E, p) {
      return E + p;
    },
    FCmcW: function (E, p) {
      return E + p;
    },
    rKqmO: "-----BEGIN PRIVATE KEY-----\n",
    Nutjy: "\n-----END PRIVATE KEY-----",
    aEgtm: "SHA256withRSA",
    EqHxy: function (E, p, F) {
      return E(p, F);
    }
  };
  return new class {
    constructor() {
      {
        this.cookie_list = [];
        this.message = "";
        this.CryptoJS = require("crypto-js");
        this.NodeRSA = require("node-rsa");
        this.request = require("request");
        this.Sha_Rsa = require("jsrsasign");
      }
    }
    maskPhone(E) {
      {
        if (E && E.length === 11) {
          {
            return E.substring(0, 3) + "****" + E.substring(7);
          }
        }
        return E;
      }
    }
    async Multithreading(E, p, F) {
      const V = {
        BeEwV: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13) XWEB/9129",
        TkDYi: "https://servicewechat.com/wxebc856cb722e51d1/2/page-frame.html",
        EzNCk: "zh-CN,zh;q=0.9"
      };
      {
        let C = [];
        !F && (F = 1);
        while (F--) {
          {
            for (let n of $.cookie_list) {
              {
                C.push(n[E](p));
              }
            }
          }
        }
        await Promise.allSettled(C);
      }
    }
    ExamineCookie() {
      const E = {
        CHBCv: "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789",
        VktnQ: function (p, F) {
          return p < F;
        },
        jSJyr: function (p, F) {
          return p * F;
        },
        RbEAf: function (p, F) {
          return p + F;
        }
      };
      {
        let p = process.env[VALY] || CK;
        let F = 0;
        if (p) {
          {
            for (let Z of Y) {
              {
                if (p.includes(Z)) {
                  {
                    this.splitor = Z;
                    break;
                  }
                }
              }
            }
            for (let J of p.split(this.splitor).filter(n => !!n)) {
              {
                $.cookie_list.push(new b1(J));
              }
            }
            F = $.cookie_list.length;
          }
        } else {
          {
            console.log("\n【" + NAME + "】：未填写变量: " + VALY);
          }
        }
        console.log("共找到" + F + "个账号");
        return $.cookie_list;
      }
    }
    task(E, p, F, Z, V) {
      const C = {
        Qhpvi: "0|5|4|2|1|3",
        LBajm: function (J, n) {
          return J(n);
        },
        YFOVW: "request",
        vcYYe: "node-rsa",
        wADUH: "jsrsasign",
        AJkEt: "crypto-js",
        FGuAx: function (J, n) {
          return J < n;
        },
        kmFoc: function (J, n) {
          return J + n;
        },
        vvTzH: function (J, n) {
          return J + n;
        },
        bnXHP: function (J, n) {
          return J / n;
        },
        kDzkA: function (J, n) {
          return J * n;
        },
        rsmce: "Content-Type",
        gLmfo: "application/x-www-form-urlencoded",
        gFueq: function (J, n) {
          return J * n;
        },
        ttFjY: function (J, n) {
          return J === n;
        },
        VCVgp: function (J, n) {
          return J + n;
        },
        mvnGT: "****",
        iOfWO: "application/json;charset=UTF-8",
        hrlFL: function (J, n) {
          return J + n;
        },
        VxMOA: "   API请求失败，请检查网络重试\n",
        hOtNg: function (J, n) {
          return J === n;
        },
        nJzpA: "IvUcf",
        vlSIq: "YQAwR",
        tfSRP: function (J, n) {
          return J !== n;
        },
        ITolG: "genfV",
        HpbhS: "eIsnx",
        gEEno: "WBZTR",
        KmtTz: "ICuGX",
        JtmJm: function (J, n) {
          return J == n;
        },
        iVECX: "YsJEi",
        stwUj: "fmlre",
        afJlZ: "OXfKJ",
        pYwEp: function (J, n) {
          return J === n;
        },
        wdMxn: "qXzIq",
        tzsaL: function (J, n) {
          return J === n;
        },
        KwrAr: "VTdwW",
        HjfQR: function (J, n) {
          return J + n;
        },
        DzRUi: function (J, n) {
          return J !== n;
        },
        lhNGr: "SRVId",
        IQxqO: "ojKiV",
        woDTo: "fMYcH",
        ThlmO: "vuLum",
        bNRVP: function (J, n) {
          return J != n;
        },
        wsRvy: "CNrCm",
        GiuHe: "FdXRn",
        uSfeI: function (J, n) {
          return J !== n;
        },
        hPYjo: "ZVtBu",
        FcnQa: "moPkh",
        JDCeM: function (J, n) {
          return J === n;
        },
        dztXy: "sGgqo",
        VRNYV: "ztCHF",
        hWrom: function (J, n) {
          return J + n;
        }
      };
      {
        if (E == "delete") {
          {
            E = E.toUpperCase();
          }
        } else {
          E = E;
        }
        if (E == "post") {
          {
            delete F["content-type"];
            delete F["Content-type"];
            delete F["content-Type"];
            if ($.safeGet(Z)) {
              {
                F["Content-Type"] = "application/json;charset=UTF-8";
              }
            } else {
              {
                F["Content-Type"] = "application/x-www-form-urlencoded";
              }
            }
            Z && (F["Content-Length"] = $.lengthInUtf8Bytes(Z));
          }
        }
        if (E == "get") {
          {
            delete F["content-type"];
            delete F["Content-type"];
            delete F["content-Type"];
            delete F["Content-Length"];
          }
        }
        F.Host = p.replace("//", "/").split("/")[1];
        return new Promise(async X => {
          {
            if (E.indexOf("T") < 0) {
              {
                var v = {
                  url: p,
                  headers: F,
                  body: Z,
                  proxy: "http://" + V
                };
              }
            } else {
              {
                var v = {
                  url: p,
                  headers: F,
                  form: JSON.parse(Z),
                  proxy: "http://" + V
                };
              }
            }
            if (!V) {
              {
                delete v.proxy;
              }
            }
            this.request[E.toLowerCase()](v, (D, L, y) => {
              {
                try {
                  {
                    if (y) {
                      {}
                    }
                  }
                } catch (j) {
                  {
                    console.log(j, p + "\n" + F);
                  }
                } finally {
                  {
                    let a = "";
                    if (!D) {
                      {
                        if ($.safeGet(y)) {
                          {
                            a = JSON.parse(y);
                          }
                        } else {
                          if (y.indexOf("/") != -1 && y.indexOf("+") != -1) {
                            {
                              a = $.decrypts(y);
                            }
                          } else {
                            a = y;
                          }
                        }
                      }
                    } else {
                      a = p + "   API请求失败，请检查网络重试\n" + D;
                    }
                    return X(a);
                  }
                }
              }
            });
          }
        });
      }
    }
    lengthInUtf8Bytes(E) {
      {
        let F = encodeURIComponent(E).match(/%[89ABab]/g);
        return E.length + (F ? F.length : 0);
      }
    }
    randomArr(E) {
      {
        return E[parseInt(Math.random() * E.length, 10)];
      }
    }
    wait(E) {
      {
        return new Promise(p => setTimeout(p, E));
      }
    }
    time(E) {
      {
        if (E == 10) {
          {
            return Math.round(+new Date() / 1000);
          }
        } else {
          {
            return +new Date();
          }
        }
      }
    }
    timenow(E) {
      const p = {
        BLvIp: function (Z, V) {
          return Z == V;
        }
      };
      {
        let V = new Date();
        if (E == undefined) {
          {
            let J = new Date();
            let n = J.getFullYear() + "-";
            let c = (J.getMonth() + 1 < 10 ? "0" + (J.getMonth() + 1) : J.getMonth() + 1) + "-";
            let U = J.getDate() < 10 ? "0" + J.getDate() : J.getDate() + " ";
            let o = J.getHours() + ":";
            let W = J.getMinutes() + ":";
            let d = J.getSeconds() + 1 < 10 ? "0" + J.getSeconds() : J.getSeconds();
            return n + c + U + o + W + d;
          }
        } else {
          if (E == 0) {
            {
              return V.getFullYear();
            }
          } else {
            if (E == 1) {
              {
                return V.getMonth() + 1 < 10 ? "0" + (V.getMonth() + 1) : V.getMonth() + 1;
              }
            } else {
              if (E == 2) {
                return V.getDate() < 10 ? "0" + V.getDate() : V.getDate();
              } else {
                if (E == 3) {
                  {
                    return V.getHours();
                  }
                } else {
                  if (E == 4) {
                    return V.getMinutes();
                  } else {
                    if (E == 5) {
                      {
                        return V.getSeconds() + 1 < 10 ? "0" + V.getSeconds() : V.getSeconds();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    safeGet(E) {
      {
        try {
          {
            if (typeof JSON.parse(E) == "object") {
              return true;
            }
          }
        } catch (Z) {
          {
            return false;
          }
        }
      }
    }
    SJS(E, p) {
      if (p == 0) {
        {
          let F = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789";
          let Z = F.length;
          let V = "";
          for (let C = 0; C < E; C++) {
            {
              V += F.charAt(Math.floor(Math.random() * Z));
            }
          }
          return V;
        }
      } else {
        if (p == 1) {
          let c = "qwertyuiopasdfghjklzxcvbnm0123456789";
          let U = c.length;
          let o = "";
          for (let W = 0; W < E; W++) {
            o += c.charAt(Math.floor(Math.random() * U));
          }
          return o;
        } else {
          if (p == 2) {
            let N = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
            let d = N.length;
            let X = "";
            for (let v = 0; v < E; v++) {
              X += N.charAt(Math.floor(Math.random() * d));
            }
            return X;
          } else {
            let r = "0123456789";
            let T = r.length;
            let q = "";
            for (let l = 0; l < E; l++) {
              q += r.charAt(Math.floor(Math.random() * T));
            }
            return q;
          }
        }
      }
    }
    udid(E) {
      function F() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let Z = F() + F() + "-" + F() + "-" + F() + "-" + F() + "-" + F() + F() + F();
      return E == 0 ? Z.toUpperCase() : Z.toLowerCase();
    }
    encodeUnicode(E) {
      var p = [];
      for (var F = 0; F < E.length; F++) {
        p[F] = ("00" + E.charCodeAt(F).toString(16)).slice(-4);
      }
      return "\\u" + p.join("\\u");
    }
    decodeUnicode(E) {
      E = E.replace(/\\u/g, "%u");
      return unescape(unescape(E));
    }
    RT(E, p) {
      return Math.round(Math.random() * (p - E) + E);
    }
    arrNull(E) {
      var p = E.filter(F => {
        return F && F.trim();
      });
      return p;
    }
    nowtime() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    timecs() {
      let E = $.nowtime();
      JSON.stringify(E).indexOf(" ") >= 0 && (E = E.replace(" ", "T"));
      return new Date(E).getTime() - 28800000;
    }
    rtjson(E, p, F, Z) {
      return Z == 0 ? JSON.stringify(E.split(p).reduce((V, C) => {
        let J = C.split(F);
        V[J[0].trim()] = J[1].trim();
        return V;
      }, {})) : E.split(p).reduce((V, C) => {
        let J = C.split(F);
        V[J[0].trim()] = J[1].trim();
        return V;
      }, {});
    }
    MD5Encrypt(E, p) {
      if (E == 0) {
        return this.CryptoJS.MD5(p).toString().toLowerCase();
      } else {
        if (E == 1) {
          return this.CryptoJS.MD5(p).toString().toUpperCase();
        } else {
          if (E == 2) {
            return this.CryptoJS.MD5(p).toString().substring(8, 24).toLowerCase();
          } else {
            if (E == 3) {
              return this.CryptoJS.MD5(p).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    SHA_Encrypt(E, p, F) {
      return E == 0 ? this.CryptoJS[p](F).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[p](F).toString();
    }
    HmacSHA_Encrypt(E, p, F, Z) {
      return E == 0 ? this.CryptoJS[p](F, Z).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[p](F, Z).toString();
    }
    Base64(E, p) {
      return E == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(p)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(p));
    }
    DecryptCrypto(E, p, F, Z, V, C, J) {
      if (E == 0) {
        const n = this.CryptoJS[p].encrypt(this.CryptoJS.enc.Utf8.parse(V), this.CryptoJS.enc.Utf8.parse(C), {
          iv: this.CryptoJS.enc.Utf8.parse(J),
          mode: this.CryptoJS.mode[F],
          padding: this.CryptoJS.pad[Z]
        });
        return n.toString();
      } else {
        const c = this.CryptoJS[p].decrypt(V, this.CryptoJS.enc.Utf8.parse(C), {
          iv: this.CryptoJS.enc.Utf8.parse(J),
          mode: this.CryptoJS.mode[F],
          padding: this.CryptoJS.pad[Z]
        });
        return c.toString(this.CryptoJS.enc.Utf8);
      }
    }
    RSA(E, p) {
      const F = require("node-rsa");
      let Z = new F("-----BEGIN PUBLIC KEY-----\n" + p + "\n-----END PUBLIC KEY-----");
      const V = {
        encryptionScheme: "pkcs1"
      };
      Z.setOptions(V);
      return Z.encrypt(E, "base64", "utf8");
    }
    SHA_RSA(E, p) {
      let F = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(p, 76) + "\n-----END PRIVATE KEY-----");
      const Z = {
        alg: "SHA256withRSA"
      };
      let V = new this.Sha_Rsa.KJUR.crypto.Signature(Z);
      V.init(F);
      V.updateString(E);
      let C = V.sign();
      let J = this.Sha_Rsa.hextob64u(C);
      return J;
    }
  }();
}
async function b3(A, P) {
  const k = require("node-rsa");
  let E = new k("-----BEGIN PUBLIC KEY-----\n" + P + "\n-----END PUBLIC KEY-----");
  const p = {
    encryptionScheme: "pkcs1"
  };
  E.setOptions(p);
  return E.encrypt(A, "base64", "utf8");
}
function b4(b) {
  const P = new Date();
  const Q = P.getHours();
  const k = P.getMinutes();
  const E = P.getSeconds();
  const p = b === 0 ? String(Q).padStart(2, "0") : String(Q);
  const F = b === 0 ? String(k).padStart(2, "0") : String(k);
  const Z = b === 0 ? String(E).padStart(2, "0") : String(E);
  return p + ":" + F + ":" + Z;
}
function b5(b) {
  let P = "";
  const Q = new Date();
  const k = Q.getFullYear();
  b == 0 ? P = String(Q.getMonth() + 1).padStart(2, "0") : P = String(Q.getMonth() + 1);
  const E = String(Q.getDate()).padStart(2, "0");
  return k + "-" + P + "-" + E;
}