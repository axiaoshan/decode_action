//Fri Nov 28 2025 13:25:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var x = H;
(function (f, b, u, d) {
  var h = H;
  var i = function () {
    return arguments[0].split(" ").pop().split("]")[0];
  }(Object.prototype.toString.call((typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this)[Symbol.toStringTag]));
  var j = q();
  var k = f(u);
  _0x12s(k, k[8], k[1]);
  var l = _0x18M;
  var g = _0x18M_;
  var m = l(g[13]);
  var n = l(g[0]);
  for (;;) {
    try {
      var p = parseInt(h(628)) / 1 + -parseInt(h(501)) / 2 + parseInt(h(600)) / 3 * (parseInt(h(631)) / 4) + -parseInt(h(605)) / 5 * (parseInt(h(610)) / 6) + parseInt(h(543)) / 7 + -parseInt(h(571)) / 8 * (parseInt(h(544)) / 9) + parseInt(h(596)) / 10;
      if (p === b) {
        break;
      }
      throw "";
    } catch (d) {
      k[m](k[n](0, 1)[0]);
    }
  }
  function q() {
    var f = false;
    var b = t[`${162997 .toString(24)}`]({
      x: [[`${14 .toString(19)}num${14 .toString(19)}r${201 .toString(19)}l${14 .toString(19)}`, f], [`${2567563955762 .toString(36)}`, !f], [`${1001341021973436 .toString(35)}${749 .toString(35)}`, f]],
      F: `${46974914 .toString(35)}`
    });
    b(u, u.String, u.Array);
  }
  function t() {
    var h = Object.fromEntries(this.x);
    var [r, f, b] = arguments[2][`${15 .toString(27)}r${670 .toString(27)}`](arguments);
    Object.defineProperty(b.prototype, `sp${27189 .toString(25)}`, {
      [this.F]: function () {
        if (this.length === 1 && this[0] === 1) {
          var h = new q();
          var b = ["[", "|", ",", "^", "\"", " ", "]", ">>>", "]]", "==", "[[", "$"];
          b["m" + 10 .toString(23) + "p"]((d, f) => {
            if (f % 2 == 0) {
              h[d] = b[f + 1];
            }
          });
          return h;
        }
      },
      ...h
    });
    Object.defineProperty(f.prototype, `${640 .toString(34)}${32 .toString(34).toUpperCase()}${16219 .toString(34)}${15 .toString(34).toUpperCase()}${33159193 .toString(34)}`, {
      [this.F]: function (d, b) {
        if (this.toString() === "l") {
          var g = "";
          var t = ".";
          var l = b ? d + "" + b : d;
          var m = b ? 3 : "^";
          l[`s${21652 .toString(29)}t`](m)["m" + 10 .toString(19) + "p"](d => {
            if (!d) {
              return;
            }
            g += f.fromCharCode(d);
          });
          var n = (h, b) => {
            var d = [`r${14 .toString(16)}pl${2766 .toString(16)}`];
            var f = parseInt(h[d](/./g, d => "‌‍⁠⁡⁢⁣⁤"[`${31323561 .toString(36)}${24 .toString(36).toUpperCase()}${15 .toString(36)}`](d)), 7).toString(36) + "⁢";
            return f[d](b, "");
          };
          var h = n("⁠⁠⁤‍⁠⁤⁢‌⁡", "")[`r${14 .toString(21)}pl${4676 .toString(21)}`](/[a-z]/g, ".")[`sl${8204 .toString(21)}`](0, -1);
          var p = n("⁡‍⁤‍‍‌⁣‍⁢‍‌⁠⁢⁤‍", "")[`${30067086 .toString(32)}`](0, -1);
          var k = n("⁤⁣⁤⁡⁠", "")[`s${527669 .toString(29)}`](0, -1);
          var q = "v".toUpperCase();
          var j = r[`_0x${1 .toString(9)}ry`];
          if (j && j === p + t + k + t + q + h) {
            return g + this;
          } else {
            return g;
          }
        }
      },
      ...h
    });
  }
})(K, 514774, typeof window !== "undefined" ? window : global);
var h = {};
h[x(536)] = x(564);
h.RECEIVE_WELFARE = "https://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen";
h[x(582)] = x(568);
h[x(679)] = "https://gw.yyzqsh.cn/api/web/member/getMemberInfo";
const z = x(649);
const B = require("axios");
console[x(513)](x(502));
console[x(513)]("==================================================");
const b = h;
const d = x(671);
const k = require("fs");
const l = require(x(673));
const i = require("crypto");
const f = require("querystring");
function g() {
  var g = x;
  var b = {};
  b[g(651)] = g(531);
  b.RLXMv = g(510);
  b.wSbtk = g(629);
  b.CvJtR = "ayztP";
  b.NNcYI = function (f, b) {
    return f + b;
  };
  b[g(601)] = g(672);
  var h = b;
  try {
    var f = l.resolve(__filename);
    var i = k.readFileSync(f, h[g(651)])[g(520)](/\r?\n/);
    if (i.length < 2) {
      throw new Error(h.RLXMv);
    }
    if (i[1][g(554)]() !== d) {
      console[g(513)](g(549));
      console.log(h.wSbtk + d);
      process.exit(1);
    }
    console.log(g(646));
  } catch (b) {
    if (h.CvJtR === g(675)) {
      console[g(513)](h.NNcYI(h.uVTBu, b.message));
      process[g(563)](1);
    } else {
      h(g(579), "INFO");
      f.exit(0);
    }
  }
}
g();
var j = {
  API: b,
  [x(642)]: v
};
const q = j;
function t(h, b = "INFO") {
  var d = x;
  var f = {
    SUCCESS: "✅",
    ERROR: "❌",
    WARN: "⚠️",
    [d(594)]: "ℹ️",
    CHECK: "🔍"
  };
  console[d(513)]("[" + (f[b] || "ℹ️") + " " + b + "] " + h);
}
function u(h) {
  var b = x;
  var d = h.match(/GZHealth\/(\d+\.\d+\.\d+)/);
  var f = h[b(606)](/(iOS|Android) \d+\.\d+\.\d+/);
  if (!d) {
    throw new Error("UA解析失败：未找到APP版本（UA：" + h + "）");
  }
  if (f) {
    return {
      version: d[1],
      platform: f[1]
    };
  }
  throw new Error("UA解析失败：未找到设备平台（UA：" + h + "）");
}
function w(i = 8) {
  var b = x;
  var d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let f = "";
  for (let g = 0; g < i; g++) {
    f += d[Math[b(621)](Math.random() * d.length)];
  }
  return f;
}
function y(h) {
  var j = x;
  var d = {
    [j(517)]: function (f, b) {
      return f != b;
    },
    EkcBI: function (f, b) {
      return f !== b;
    }
  };
  var k = d;
  h = Object.entries(h).filter(([, f]) => {
    var b = String(f).trim();
    return k.zrYUs(null, f) && k.EkcBI("", b);
  }).sort(([f], [b]) => f.localeCompare(b)).map(([g, b]) => f.escape(g) + "=" + f.escape(String(b))).join("&");
  return i.createHash("md5").update(h, "utf8")[j(529)]("hex");
}
async function A(h, b, d = "POST", f = {}) {
  var i = x;
  var j = {
    ZuzBi: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    sgGxC: function (f, b) {
      return f < b;
    },
    oiHPp: function (f, b) {
      return f === b;
    },
    [i(650)]: function (f, b) {
      return f + b;
    },
    [i(655)]: function (f, b) {
      return f * b;
    },
    xvlUV: function (f, b) {
      return f + b;
    }
  };
  var k = j;
  let l = q.TASK.RETRY_COUNT;
  for (; l >= 0;) {
    try {
      if (i(613) !== "CEOhe") {
        return (await B({
          url: h,
          method: d,
          headers: b,
          data: k[i(602)](i(530), d) ? f : undefined,
          timeout: q.TASK.TIMEOUT,
          validateStatus: d => d >= 200 && d < 300
        })).data;
      } else {
        var m = k.ZuzBi;
        let d = "";
        for (let b = 0; k.sgGxC(b, k); b++) {
          d += m[l[i(621)](r.random() * m.length)];
        }
        return d;
      }
    } catch (d) {
      var r = d.response?.data?.message || d.message;
      if (k[i(602)](0, l)) {
        throw new Error("请求失败（重试" + q.TASK[i(609)] + "次）：" + r);
      }
      t(k.GtilM("请求失败（剩余" + l + "次），" + k.WIcuQ(5, k.xvlUV(q.TASK.RETRY_COUNT - l, 1)) + i(657), r), "ERROR");
      await new Promise(d => setTimeout(d, (q.TASK.RETRY_COUNT - l + 1) * 5000));
      l--;
    }
  }
}
async function m(f) {
  t("等待" + f + "秒后继续...", "INFO");
  await new Promise(b => setTimeout(b, f * 1000));
}
async function C(f) {
  var b = x;
  var d = {
    [b(627)]: function (f, b) {
      return f / b;
    },
    suPNp: function (f, b) {
      return f <= b;
    }
  };
  var h = d;
  t(b(522) + f + "秒", b(594));
  const j = f;
  let k = f;
  const n = q[b(642)][b(677)];
  return new Promise(f => {
    var b = {
      yhzQP: function (f, b) {
        return h.ocIuD(f, b);
      },
      fciCd: function (f, b) {
        return f - b;
      },
      SEdRK: function (f, b) {
        var d = H;
        return h[d(526)](f, b);
      },
      ygodJ: function (d) {
        return d();
      }
    };
    const d = setInterval(() => {
      var g = H;
      k -= n / 1000;
      var h = Math.round(b.yhzQP(b[g(654)](j, k), j) * 100);
      process.stdout.write(g(659) + Math[g(637)](k) + g(639) + h + "%");
      if (b.SEdRK(k, 0)) {
        clearInterval(d);
        process.stdout.write(g(661));
        b.ygodJ(f);
      }
    }, n);
  });
}
async function D(h) {
  var j = x;
  var d = {
    DrNbm: function (g, b, d) {
      return g(b, d);
    },
    wbCBl: j(612),
    LStif: j(534)
  };
  d[j(638)](t, j(636), d.wbCBl);
  var h = await A(q.API[j(679)], h);
  var f = h.result?.upShardCode || "";
  var g = h[j(552)]?.[j(680)] || j(633);
  var h = h.result?.phone || d.LStif;
  if (f !== z) {
    throw new Error("账号验证失败：upShardCode=" + f + j(652));
  }
  var i = {
    realName: g,
    [j(644)]: h
  };
  t(j(553), j(511));
  return i;
}
async function E(k) {
  var m = x;
  var {
    contribution: k,
    totalContribution: d,
    watchedVideoCount: f,
    videoCount: g
  } = (await A(q.API[m(582)], k))[m(552)] || {};
  var i = {
    current: k || 0,
    total: d || 0,
    watched: f,
    [m(509)]: g
  };
  return i;
}
async function n(b, d, f) {
  var h = x;
  var i = {
    FujAf: function (f, b) {
      return f + b;
    },
    czMim: function (f, b) {
      return f / b;
    },
    PAnXZ: function (f, b) {
      return f / b;
    },
    TBDCe: h(594),
    ikpUJ: h(578),
    HXCfo: function (f, b) {
      return f(b);
    },
    JilUN: "gw.yyzqsh.cn",
    YjGFz: h(575),
    ECFhu: h(550),
    hXnfT: "CHECK",
    HhHSm: function (g, b, d) {
      return g(b, d);
    },
    edghx: "SUCCESS",
    tZfOe: function (f, b) {
      return f - b;
    },
    VDbKx: function (f, b) {
      return f < b;
    },
    fJNjR: function (f, b) {
      return f + b;
    },
    AJivJ: h(676),
    jVBCa: h(608),
    sijMf: function (f, b) {
      return f === b;
    },
    bPQnb: h(516),
    wZUrB: function (g, b, d) {
      return g(b, d);
    },
    tUprl: h(592),
    JbeyG: h(618),
    eVcnf: "linux",
    tqkgE: "xdg-open",
    ArKwo: "open",
    msEvL: h(567),
    ydTec: "WlQbv",
    bWVEr: function (g, b, d) {
      return g(b, d);
    },
    kubkt: function (f, b) {
      return f(b);
    },
    kgjZI: function (g, b, d) {
      return g(b, d);
    },
    hGRXn: h(577),
    WiEpK: h(515),
    dfYZI: "gzip",
    EAChD: "?videoId=",
    Jklfm: function (g, b, d) {
      return g(b, d);
    },
    gzvQR: function (f, b) {
      return f <= b;
    },
    kfMEd: function (f, b) {
      return f !== b;
    },
    dJsPL: h(625),
    WiXiw: function (f, b) {
      return f + b;
    },
    jFGaV: function (f, b) {
      return f < b;
    },
    idblO: h(667),
    ZtYui: h(512)
  };
  t("\n==================================================", i[h(519)]);
  t(h(619) + (b + 1) + "个账号任务", "INFO");
  t(i.ikpUJ, i[h(519)]);
  try {
    var {
      platform: k,
      version: l
    } = i[h(668)](u, f);
    var n = {
      Host: i[h(505)],
      platform: k,
      version: l,
      Authorization: d,
      "User-Agent": f,
      "Content-Type": h(641),
      Accept: i[h(665)],
      "Accept-Language": h(683)
    };
    t("账号信息：设备=" + k + " | APP版本=" + l + h(634) + q.TASK.WATCH_DURATION_MODE, h(511));
    var {} = await D(n);
    t(i[h(607)], i.hXnfT);
    var {
      current: g,
      total: p,
      watched: r,
      totalTask: s
    } = await E(n);
    if (h(542) != typeof r || typeof s != "number") {
      throw new Error(h(617));
    }
    i.HhHSm(t, h(524) + s + h(556) + r + h(574) + (s - r) + "个", "CHECK");
    t(h(685), i.hXnfT);
    t(h(585) + g, i[h(678)]);
    t(h(597) + p, "CHECK");
    if ((await A(q.API[h(582)], n)).result?.[h(586)] !== 1) {
      throw new Error(h(589));
    }
    if (s <= r) {
      i.HhHSm(t, h(632), i.edghx);
    } else {
      var j = i.tZfOe(s, r);
      for (let u = 0; i[h(570)](u, j); u++) {
        var v = i.fJNjR(r + u, 1);
        t(h(663) + v + "/" + s + "个广告 =====", "INFO");
        try {
          if (i[h(681)] === "FRVvz") {
            t(i.jVBCa, i.hXnfT);
            var z = (await A(q[h(506)][h(536)], n)).result || {};
            if (!z.id || !z.videoUrl) {
              throw new Error(h(591));
            }
            var F = z.id;
            var G = z[h(648)] || h(538);
            var I = z.description || h(622);
            var M = z.createTime || h(565);
            var P = z[h(497)] ? i[h(573)](1, z.enableState) ? h(643) : h(521) : i.bPQnb;
            var Q = (i.HhHSm(t, h(576), "SUCCESS"), i.wZUrB(t, i[h(611)]("- ID：", F), i.edghx), i.wZUrB(t, h(539) + G, "SUCCESS"), t(i[h(533)] + I, i[h(562)]), t(h(626) + M, i.edghx), t(h(624) + P, i[h(562)]), t(h(503) + z.videoUrl, i.edghx), i.HhHSm(t, i[h(616)], i[h(519)]), require("child_process")).exec;
            var V = Q((i[h(573)](i.eVcnf, process.platform) ? i[h(635)] : i[h(614)]) + (" \"" + z[h(508)] + "\""));
            let f = q[h(642)].FIXED_WATCH_SEC;
            if (i.sijMf(i[h(640)], q.TASK[h(666)])) {
              try {
                if (i.sijMf(i[h(584)], h(527))) {
                  var W = {
                    method: "HEAD",
                    [h(559)]: z.videoUrl,
                    [h(560)]: 10000
                  };
                  var ja = i.PAnXZ((await i[h(668)](B, W)).headers[h(535)] || 0, 1024) / 1024;
                  f = Math.ceil(ja * 8);
                  f = Math[h(545)](f, 10);
                  t("auto模式：文件大小≈" + ja[h(500)](1) + "MB | 估算观看时长=" + f + "秒", "INFO");
                } else {
                  var ka = {
                    [h(511)]: "✅",
                    ERROR: "❌",
                    WARN: "⚠️",
                    INFO: "ℹ️",
                    [h(612)]: "🔍"
                  };
                  p.log(i.FujAf("[" + (ka[I] || "ℹ️") + " " + F + "] ", ja));
                }
              } catch (b) {
                if (h(523) !== "czZJz") {
                  i -= i[h(518)](k, 1000);
                  var la = l.round((n - n) / qa * 100);
                  r[h(498)].write(h(659) + k.ceil(na) + "秒 | " + la + "%");
                  if (Q <= 0) {
                    M(g);
                    p[h(498)].write("\r[⏳ 观看进度] 0秒 | 100%（观看完成）\n");
                    ma();
                  }
                } else {
                  i.bWVEr(t, "auto模式：无法获取视频大小，默认观看" + (f = 15) + "秒", h(684));
                }
              }
            } else {
              i.HhHSm(t, h(546) + f + "秒", i[h(519)]);
            }
            await i[h(653)](C, f);
            V.kill();
            i.kgjZI(t, i.hGRXn, i[h(562)]);
            i[h(620)](t, "领取福利（videoId=" + F + "）...", "INFO");
            var ma = String(Math.floor(Date.now()));
            var na = w(8);
            var oa = {
              "User-Agent": i.WiEpK,
              "Accept-Encoding": i.dfYZI,
              "content-length": "0",
              timestamp: ma,
              randomnumber: na,
              sign: y({
                videoId: F,
                timeStamp: ma,
                randomNumber: na
              }),
              authorization: d,
              version: q.TASK.APP_VERSION,
              platform: k,
              Host: i[h(505)]
            };
            var pa = await A(i.FujAf(q[h(506)].RECEIVE_WELFARE + i.EAChD, F), oa, q[h(642)][h(603)]);
            if (!pa.success) {
              throw new Error(i.fJNjR(h(548), pa[h(595)] || h(658)));
            }
            t("福利领取成功：贡献值+" + (pa.result?.receiveContribution || 0) + h(555) + (pa.result?.orderSn || h(525)), i.edghx);
            t("等待" + q[h(642)][h(670)] + h(514), i.TBDCe);
            await new Promise(d => setTimeout(d, q.TASK[h(670)] * 1000));
            i[h(496)](t, h(540), h(612));
            var qa = (await E(n))[h(541)];
            var ra = (qa - g).toFixed(2);
            t(h(499) + g + " → " + qa + h(593) + ra + "）", i.hXnfT);
            if (i[h(528)](ra, 0)) {
              t(h(551), "WARN");
            }
            i.wZUrB(t, "===== 第" + v + h(656), i.edghx);
            if (i[h(570)](v, s)) {
              await m(q[h(642)].INTERVAL_SEC);
            }
          } else {
            j(h(522) + f + "秒", h(594));
            const m = i;
            let b = k;
            const d = l.TASK.COUNTDOWN_REFRESH_INTERVAL;
            return new n(f => {
              var g = {
                GsJrq: function (f, b) {
                  var d = H;
                  return i[d(598)](f, b);
                },
                iMceI: function (f, b) {
                  return f <= b;
                },
                euUww: function (d) {
                  return d();
                }
              };
              const h = m(() => {
                var i = H;
                b -= g.GsJrq(d, 1000);
                var j = f[i(587)]((m - b) / m * 100);
                h.stdout.write(i(659) + sa[i(637)](b) + i(639) + j + "%");
                if (g[i(561)](b, 0)) {
                  v(h);
                  z.stdout[i(599)](i(661));
                  g[i(572)](f);
                }
              }, d);
            });
          }
        } catch (d) {
          if (i.kfMEd(h(625), i.dJsPL)) {
            pa.log(h(672) + p.message);
            I.exit(1);
          } else {
            t(i.WiXiw("第" + v + "个广告执行失败：", d.message), "ERROR");
            if (i.jFGaV(v, s)) {
              await m(q[h(642)].INTERVAL_SEC);
            }
          }
        }
      }
      t("\n🎉 该账号今日" + s + "个广告任务全部完成！", "SUCCESS");
      var {
        current: sa,
        total: ga
      } = await E(n);
      var ha = (sa - g).toFixed(2);
      t(i[h(590)], "SUCCESS");
      t(i[h(611)](h(557), g), i.edghx);
      t(h(660) + sa, "SUCCESS");
      t(h(674) + ha, h(511));
      t(h(597) + ga, "SUCCESS");
    }
  } catch (d) {
    t(i.ZtYui + d[h(595)], h(537));
  }
}
async function p() {
  var s = x;
  var b = {
    WLrYC: function (f, b) {
      return f === b;
    },
    jbnxe: "SDWWR",
    OxfYa: function (g, b, d) {
      return g(b, d);
    },
    KGJcd: function (d) {
      return d();
    },
    Srcuo: s(547),
    gRXqL: function (g, b, d) {
      return g(b, d);
    },
    dATFQ: function (f, b) {
      return f + b;
    },
    pMopv: "ERROR",
    VRqCv: "INFO",
    YwDOQ: function (g, b, d) {
      return g(b, d);
    },
    LZUue: function (g, b, d) {
      return g(b, d);
    },
    EejpJ: "=================================================="
  };
  var d = function () {
    var k = s;
    var g = {
      EcYpE: function (f, b) {
        return f(b);
      },
      gPewx: function (f, b) {
        return f(b);
      }
    };
    if (b[k(566)]("tfcHT", k(630))) {
      var h = g[k(623)](d, f).trim();
      return i != null && h !== "";
    } else {
      var n = true;
      return function (h, b) {
        var l = k;
        if (l(580) !== "yXpus") {
          return e[o]()[u](v)[p]()[ZaPOWW[l(645)](w, g[16])](n)[a](h);
        } else {
          var m;
          if (n) {
            m = function () {
              var k = l;
              if (b) {
                if (k(682) !== "IPlcX") {
                  var g = d[k(569)](f, arguments);
                  i = null;
                  return g;
                } else {
                  var d = b.apply(h, arguments);
                  b = null;
                  return d;
                }
              }
            };
          } else {
            m = function () {};
          }
          n = false;
          return m;
        }
      };
    }
  }();
  var f = _0x18M;
  var i = _0x18M_;
  var h = f(i[8]);
  var j = f(i[2]);
  var g = f(i[4]);
  var l = b.OxfYa(d, this, function () {
    if (b.WLrYC(b.jbnxe, b.jbnxe)) {
      return l[h]()[j](g)[h]()[f(i[16])](l)[j](g);
    } else {
      L = function () {};
    }
  });
  b[s(647)](l);
  try {
    var u = process[s(507)][s(532)] || "";
    if (!u) {
      throw new Error(b.Srcuo);
    }
    var v = u[s(520)](/\r?\n|\n/).filter(d => d.trim() !== "");
    if (b.WLrYC(0, v[s(686)])) {
      throw new Error(s(558));
    }
    t("共检测到" + v.length + "个账号，开始批量执行任务", s(511));
    for (let d = 0; d < v.length; d++) {
      var [p, w] = v[d][s(554)]().split("#");
      if (p && w) {
        await n(d, p, w);
        if (d < v.length - 1) {
          t("\n第" + (d + 1) + s(604) + q.TASK[s(581)] + s(669), s(594));
          await m(q.TASK[s(581)]);
        }
      } else {
        b[s(583)](t, "第" + b[s(588)](d, 1) + "个账号格式错误（需为：Authorization#User-Agent），跳过", b[s(504)]);
      }
    }
    t("\n==================================================", b.VRqCv);
    b[s(615)](t, "所有" + v[s(686)] + "个账号任务执行完毕！", "SUCCESS");
    b.LZUue(t, b[s(662)], b[s(664)]);
  } catch (d) {
    t("\n❌ 全局任务执行异常：" + d.message, "ERROR");
  } finally {
    t(s(579), "INFO");
    process.exit(0);
  }
}
function K(M) {
  M._0x1ry = N;
  var b = [1][`sp${1 .toString(9)}ice`]();
  var O = "$ 73 ^ 70 ^ 6c ^ 69 ^ 63 ^ 65 >>>^| 63 ^ 68 ^ 61 ^ 72 ^ 43 ^ 6f ^ 64 ^ 65 ^ 41 ^ 74 >>>^| 73 ^ 65 ^ 61 ^ 72 ^ 63 ^ 68 >>>^| 73 ^ 6c ^ 69 ^ 63 ^ 65 >>>^| 28 ^ 28 ^ 28 ^ 2e ^ 2b ^ 29 ^ 2b ^ 29 ^ 2b ^ 29 ^ 2b ^ 24 >>>^| 41 ^ 42 ^ 43 ^ 44 ^ 45 ^ 41 ^ 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 >>>^| 6d ^ 61 ^ 70 >>>^| 6b ^ 65 ^ 79 ^ 43 ^ 6f ^ 64 ^ 65 >>>^| 74 ^ 6f ^ 53 ^ 74 ^ 72 ^ 69 ^ 6e ^ 67 >>>^| 6f ^ 6e ^ 6b ^ 65 ^ 79 ^ 64 ^ 6f ^ 77 ^ 6e >>>^| 74 ^ 65 ^ 73 ^ 74 >>>^| 74 ^ 6f ^ 4c ^ 6f ^ 77 ^ 65 ^ 72 ^ 43 ^ 61 ^ 73 ^ 65 >>>^| 70 ^ 72 ^ 6f ^ 74 ^ 6f ^ 74 ^ 79 ^ 70 ^ 65 >>>^| 70 ^ 75 ^ 73 ^ 68 >>>^| 69 ^ 6e ^ 64 ^ 65 ^ 78 ^ 4f ^ 66 >>>^| 66 ^ 69 ^ 6c ^ 74 ^ 65 ^ 72 >>>^| 63 ^ 6f ^ 6e ^ 73 ^ 74 ^ 72 ^ 75 ^ 63 ^ 74 ^ 6f ^ 72 >>>^| 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 ^ 33 ^ 34 ^ 31 ^ 32 ^ 41 ^ 42 ^ 43 ^ 44 ^ 45 ^ 41 >>>^| 63 ^ 61 ^ 6c ^ 6c >>>^| 73 ^ 70 ^ 6c ^ 69 ^ 74 >>>^| 66 ^ 72 ^ 6f ^ 6d ^ 43 ^ 68 ^ 61 ^ 72 ^ 43 ^ 6f ^ 64 ^ 65 >>>^| 72 ^ 65 ^ 70 ^ 6c ^ 61 ^ 63 ^ 65 ==";
  var d = 10131123108397;
  var f = 39931013653108;
  var h = "l"[`${586 .toString(31)}W${13486 .toString(31)}${15 .toString(31).toUpperCase()}${22990450 .toString(31)}`](d, f);
  for (var i in b) {
    O = O["r" + h](b[i], i);
  }
  function j() {
    while (O[r] === " " || O[r] === "\n" || O[r] === "\r" || O[r] === "\t") {
      r++;
    }
  }
  function l() {
    j();
    if (O[r] === "\"") {
      r++;
      var d = "";
      while (O[r] !== "\"") {
        d += O[r];
        r++;
      }
      r++;
      return d;
    }
  }
  function m() {
    j();
    if (O[r] === "{") {
      r++;
      j();
      var g = {};
      while (O[r] !== "}") {
        var b = l();
        j();
        var h = P();
        g[b] = h;
      }
      r++;
      return g;
    }
  }
  function n() {
    if (O[r] === "[") {
      r++;
      j();
      var g = [];
      var b = true;
      while (O[r] !== "]") {
        if (!b) {
          q();
          j();
        }
        var h = P();
        g.push(h);
        b = false;
      }
      r++;
      return g;
    }
  }
  function p() {
    var d = r;
    if (O[r] === "-") {
      r++;
    }
    if (O[r] === "0") {
      r++;
    } else if (O[r] >= "1" && O[r] <= "9") {
      r++;
      while (O[r] >= "0" && O[r] <= "9") {
        r++;
      }
    }
    if (O[r] === ".") {
      r++;
      while (O[r] >= "0" && O[r] <= "9") {
        r++;
      }
    }
    if (O[r] === "e" || O[r] === "E") {
      r++;
      if (O[r] === "-" || O[r] === "+") {
        r++;
      }
      while (O[r] >= "0" && O[r] <= "9") {
        r++;
      }
    }
    if (r > d) {
      return O.slice(d, r);
    }
  }
  function q() {
    if (O[r] !== ",") {}
    r++;
  }
  var r = 0;
  function P() {
    j();
    return l() || m() || n() || p() || j();
  }
  var t = P();
  function u(g) {
    var h = {
      "7": "_0x6s3",
      "30": "_0x6mD",
      "-1": "B",
      "7": "_0x6zY",
      "5": "o",
      "25": "_0x6yK",
      "13": "X",
      "3": "_0x6R5"
    };
    var d = "";
    g[22 .toString(24) + "ap"](f => {
      d += String.fromCharCode(Number(0 + h[13] + f));
    });
    return d;
  }
  var w = M;
  w._0x18M_ = t;
  w._0x18M = u;
  var x = "0x61O0o142O0x63O0o144O0x65O0o146O0x67O0o150O0x69O0x6aO0x6bO0o154O0x6dO0x6eO0o157O0x70O0o161O0o162O0o163O0o164O0x75O0x76O0o167O0o170O0o171O0o172O0x41O0o102O0o103O0x44O0x45O0o106O0x47O0x48O0x49O0o112O0x4bO0x4cO0o115O0o116O0x4fO0o120O0o121O0x52O0x53O0x54O0x55O0x56O0o127O0o130O0o131O0o132O0x30O0o61O0x32O0x33O0o64O0o65O0o66O0x37O0x38O0o71O0o53O0o57O0o75O";
  function y() {}
  y[u(t[8])] = d => {
    return String[u(t[20])](d);
  };
  var z = x[u(t[19])](String[u(t[20])](79));
  var A = "";
  z[u(t[6])](d => {
    A += y[u(t[8])](d);
  });
  w._0x1tS = A;
  var Q = function b(f) {
    this._0x6Ix = f;
  };
  w._0x12s = function (j, b, d) {
    var f;
    var k = [];
    var i = d || "_0x3abrhM9cd";
    for (f in this[431173 .toString(27) + "t" + 13793 .toString(27)] || {}) {
      if (i === f) {
        k.push(j !== f);
      } else {
        k.push(j === f);
      }
    }
  }.bind(M);
  Q[u(t[12])][u(t[8])] = function () {
    return this._0x6Ix[u(t[8])]()[u(t[21])](/,/g, "");
  };
  M[u(t[9])] = function () {
    var b = M[`${14 .toString(20)}v${14 .toString(20)}nt`] || arguments[0];
    if (b[u(t[7])] == 123) {
      return false;
    }
  };
  var C = _0x1tS;
  var D = ["type", "t", "char", "P", "pr", "th", "has", "ll", "from", "s", "wn", "roperty", "a", "S", "h", "pu", "to", "har", "O", "app", "c", "ode", "ly", "leng", "C", "ring", "f", "A", "index", "oto"];
  var G = G || function (p) {
    function i() {}
    var b = {};
    var d = b._0x7kO = {};
    var f = d._0x7Id = {
      _0x7hW: function (d) {
        i[D[4] + D[29] + D[0]] = this;
        var b = new i();
        if (d) {
          b._0x7YN(d);
        }
        if (!b[D[6] + D[18] + D[10] + D[3] + D[11]]("_0x7A6")) {
          b._0x7A6 = function () {
            b._0x7wQ._0x7A6[D[19] + D[22]](this, arguments);
          };
        }
        (b._0x7A6[D[4] + D[29] + D[0]] = b)._0x7wQ = this;
        return b;
      },
      _0x7Iz: function () {
        var d = this._0x7hW();
        d._0x7A6[D[19] + D[22]](d, arguments);
        return d;
      },
      _0x7A6: function () {},
      _0x7YN: function (f) {
        for (var b in f) {
          if (f[D[6] + D[18] + D[10] + D[3] + D[11]](b)) {
            this[b] = f[b];
          }
        }
        if (f[D[6] + D[18] + D[10] + D[3] + D[11]](D[16] + D[13] + D[25])) {
          this[D[16] + D[13] + D[25]] = f[D[16] + D[13] + D[25]];
        }
      }
    };
    var q = d._0x7Eu = f._0x7hW({
      _0x7A6: function (f, g) {
        f = this._0x7vY = f || [];
        this._0x73o = g != null ? g : f[D[23] + D[5]] * 4;
      },
      [D[16] + D[13] + D[25]]: function (d) {
        return (d || h)._0x7Z0(this);
      },
      _0x7oN: function (i) {
        var j = this._0x7vY;
        var d = i._0x7vY;
        var f = this._0x73o;
        i = i._0x73o;
        this._0x7O2();
        if (f % 4) {
          for (var g = 0; g < i; g++) {
            j[f + g >>> 2] |= (d[g >>> 2] >>> 24 - g % 4 * 8 & 255) << 24 - (f + g) % 4 * 8;
          }
        } else if (d[D[23] + D[5]] > 65535) {
          for (g = 0; g < i; g += 4) {
            j[f + g >>> 2] = d[g >>> 2];
          }
        } else {
          j[D[15] + D[9] + D[14]][D[19] + D[22]](j, d);
        }
        this._0x73o += i;
        return this;
      },
      _0x7O2: function () {
        var b = this._0x7vY;
        var d = this._0x73o;
        b[d >>> 2] &= 4294967295 << 32 - d % 4 * 8;
        b[D[23] + D[5]] = p.ceil(d / 4);
      }
    });
    var g = b._0x7g3 = {};
    var h = g._0x70R = {
      _0x73P: function () {
        for (var h = "B9985912E7F603D24B126EA8A7A9397E10BB44B3EC74A0DD9090351DC70D217F704F2AB7B51E0E8E93B55FD4A2860E3786B05BF8AC675E728A20F6C8CC243489FCBF084EAC78556C3C10068684F08F764249A6E3C25F600C8F9AF2DC334B63A960E8F1104FC22A625F9090841FAEFEAAC615F26C9603D71D2EB8A95B0302BE83B2D5C81F2CC7C6760CB00DCDBBE032E70EE564C2AECD25B3643277E280B34A89DA7BA47D8732152F99D54BCEA865F410C97D9C7DB342923A091F0B0CA5A9C7F865CAA852976948AAD1B887920BF99109F0BAB3A43B764BACA669C61A7555BCE054A7C646A404E1AF3DC13516654AB3DEF2A62F916D5DBBC96CB41CD3B10F8808BF3D713FBC01DE1E01D56B75851E3362FFD70849831B431D0F8E1E82C67ABBBFD949084B654E2AE65AB9F6D9147B67DAB0AF3E571CC830E8B34D689D0F92F7B6D7C324202D7C3408AA9CB89917F1DD5696BD6EAFFE90648189024BD30938F94D9DF09814A130C190EDDAC0CEF5A63C5F27998A1FF0FF470C634F57E81C0283295B081C11616CBEA5BF628B19A31BF454BB7DF115960ACC13E247173F29898651F84A3ABB3EA6E8E78E5BF788B67DE77371D06B1D7CAB5D6CF446FB9971780D2A01A6B3CA51EBB6C061356CB3FD785E7165C1F73528A12651D6D9DFBB147D63F12E110BDF732DF18986CB7DFCB28E359301D80D73FA564D24B9EC31BE689DBFB6E3AC64E2719161096AC1E7ED98C91ED493D483353070895BAF78112A229C142EDDF5E6982D17055E98BACBB53D5C83E37465644FC1472E6631EBE3CCC5644E5F6A0473B07C030F1C81B02CE4328D2D0E7803615E4D87570DD00736F5A7968BBFB39B29F002974FFFBBEDFA51D230F7D38A6EC26D3C413E4A6FDD40557572616489E2A24D20EC12EAFA583876A26EB7E6BB0761126D46DC5457FCC8DDB446B41F1DDA8DF105640ADB05D7D9FBC3C430EAFEED644EF0B48ADA8C688FA6C1DBB40FC739A088D2043BC54C762EA9A5792836B67B9FCBE95E88128C69DD5C1930CE33B9A20B0B27B8897A1C73C3EECD7008E0FC69283CFFDFB30F52653F438297ED3A085EA9D3A41DF0B8ED30E16DDFFE946EAD647BA1CC512CC12C354071B695219A7591DAF39280D9EDF0887997E6FF84C1EC2EA83236D43B3880BB01EECF5E43FAF994036DFED61ACACF461E422F3E1DD0152A4A9C9B817C5232BDDEE5EC8050213A90E48DE1E05867D21240B8EC1FED3A05C7577D0A0F9474450998718D123082A9EC47734998DFAF71EA007F215FE072256859031AFFDC1911BF83B6DFAADE5F236254DD17F57806A61B7CDDA3961F51E743AA4D336E20709A9844259CD09FA9DB90297D9A1D2661BABC2DB87D014D8AE72313B2A6BD818B3194978548813567DB8D47CDD81C594A87257E1EFDE606F6AC8CD1744748D71FAC2621FF75327BE3B86C489BF55DF0D118451B1195220E36D38AE89E8B63ED0330B5AA32DC0ABA7B270F6C2FB80F61CD8FE26C529872DF0D8539DBB00564ACB90DC9B30A0711F5AF1CF25DF561849B599768E4395F6E312348F0A4CF69942D169263882B77A1FBD99214CD64A795E27C7CF1504DC6E59476DA81478EC6856A378AF796664132C88FDFB6AA63EA6AF15F33091F8710A2AB74DA296691424CB5D71A6F6903437B525E43C6B61D49404F1F0C827C2F71A8DC1DB3B9E55E1609D245A3E61476E8B9AF4FDA2911577B8BF1E77300EC5C4FC20A2F76CC3EBC735938B1B84FB82B506EEEDBF112A22414899769718068FAFABC9648E4B4243672C530D33B0EB0D60F1E8FCADB1D6006C2A4EDE544D72A8D3577AD6B03AC8A5338A5EF8BB27BD6E50F6E06F68AAAAE4E280E02E5383BD01BB49D9242468AA46F45175C384ABD0D69944FD25BA0AF59E1A5A7DEE06E9C90A1059F5FA0589718CCEE581AF2EF727E6A09F89FC9B07B12A86B4CF9BF6C666A21BC6A3F1AC3B6E826BBD3EBA3CCD3D8AADD5A9533082F4585E03A32683BD079FA32104D580A783C19FBBB613FBA320B923FC2579B0CC4AE3C25CB0FE4EC2076327467B641119ACFE37967BFF47AFB248E5446D1140239F437B461F12B41EBAC2FD3060393D7E8EEC600782786AA6E1B06A4CE45025F2CC9252D8E9401540ACD7C989E78068288DC49ACF4CF4827D06F586688E5EFF85AF4439E69BA7C86D534C46098EFF706FD1C38FFCAE93979493A43AD401AE57D7A008380DFFA56D210F6B43B937C1DC976773CFC50BF90889536A3001E8D58E0CE549C3C13778C139747B4C53AD1F858A33093DFC79E0C3D1A2328CBD2A2CFA46FC73A8625F35F4707B33F121B6FF70AB669071E0EA844489AD90775F6E32DF4CD82D9A0A52E4716EE0A0AF7CF87B531072775FDF5986C98D0207FF58C06CD4F6CDA442692550942129C2AA683FE31D0D3C6A5C7F43E5BC893CE5014CED65144B265795AB638768D1EC1F69A89A6D977680CF4FAB7F0751DB682A9969C5EDB8F5A75E6ECD5F075B94670D032EAAB1885417413E83BCFB8BC1DDC1C7C5726A1C02FDF8841E058AAB68E1BBA7A0339A5FA88994161292EA283B1E450532D36AB91A5CC31D3257FA9CCE3B67C21C14D7687433AFDFF5B67582BB073B1349CC4B7BDA4990EA48BDC6FF91BC540938E20B5C54B57D9293AA3CA1418644E6F2388E181155F4358DB4A24F49C81308DC04BEEE89C4DDCA66583AEB632F9C1E7FF0E2565330EBD7BAE3CB1B42DD2128F7E33C2135552E898A2B08E1DD96417ACAF83B873C4497D3BA0B037FF546CA06AE6E576A85ABF7998AF32051F584F38583043A866DC1EBD2813CFE0C425EC9549B48B81976A8D78CABEB81F91A7D18904E616B946DF068D7BEF99DBB00AC79C6B697D7F1F2623D77B999EA9DAF4589D8A57627C12AB9C67312DEA9A5B42B1EBFFF2CA72ACC30846F4E2985FF46DD8E41A98DEA144672A5143ECE7557EEAC1ACDFC2DCA7369FA8214D7F44613F9578EEC286A5D736C890B0326E2E9555619600EE7F79A362E24DEE8F3FAE93B608DEB96B8363AB37C53113C536E8DD768BDB83BD033A52F086277CD38ADA81E30D6F21FB295AEFA0BE034FEE078A1707754A085B8B50E01A3628900BA578FB579F32C6A7725ECD5E14A62F78461D5AAFFBE701FC350FC148F34807D583FCBE89E504D61CFD55DEAFC6AE67E290355A71583F9D884B9B424B254B436822279BDBDB6986C84A9E7F8762348E0204E3A688C91C32634D840C1CC9887C1A9433C9DE1D789DD69B1C4604C67A6AC63D3E48996A38AF37D13995AB274CC3E6E8FAE7A5EF51311DCCF8A8D1D253C5652A90FA919CA028461151A1C6A5B2654B712F6F335F3E9EF9BCED894E946A81EF1BB148EF36613A8A5A1FA1F56E18D974AF2ED028B8754817C0C6B5F0CF98D06C2F9CD074B48209A20F87572EAF122CE041F953B439EF183D117045CF056B81FF68CB6B265A2DB818E31F315913A710F866862707880B481A599A41B4E0430B56B710EE426D5173E2C338AF808A93315E335D02586965FC14E8608E856AEAA14C59FDC47D01B3E8AC0B1FA96EEB489FA1B23A59575DE439AB2B9162A48C9D59FA56104408511A3ECED994FD799833A6283A0A936BB52726302CB672376CC2599FCA4C3D2C970557F1BD7386B1AD839D8E59EFB4A8779D97D47C23C33089699172F57308224692ECACE78AB56D910DE9A002053BF1FB6029F1D2B7FB189452241D38D95A3FCF4CC054B025F4BAF616BECD9A8EB909BF1054BA4D7367B02F8079F896D75628C8810DB0B31B65DDB8835722CF36FC34E5CD73A9E21421E655AB81D4A5367A86A9583CCD3DD6B1C63CED91F2A9A5DF2DB6093C1431787B7BEF3DFA2C1EF3BB9B6AEDD6DA459AF5A4D9FAF4EEE8CCF4579A8F8E81CC1879E3E25467A09BB810C83220F9A022CFA514BB9968BA60D6AABE0A0ABB4EF6987F7A4B0EF9F60BD9E6290DBBF523B98C4442E1E7F80B88A731F6482A0FDBB716EE596DD380900410687BE4A5D500A7141D10CB9D2B180A28C9D8969C69057FDC81E048971A5CED362297230867BEB0E5B4EB6136611C0A633AB11C599E60E6C0EAF15E9052BF7268133B34B1FE1E3E13434469AE7FD9B98E77436EF4D88748D0DEF40BAF21EC9312D70EAF2BAE140DFB1BDAD4E674D40A394152A9A4FD59AEF0BA35B62FA608D78ECA3B69EA369E2D88FB04B6501239054B9F0DE3A691A7B7472F6380C7531562236F55B578EB92B9EFED9E04374E50B77CBD186F28AC4B191AF3BE621B03E9415515EAFBE6D162379C47165706A9EF340BE041AC41B3FD62A658087E0B0B5D606BFDF1C60E06CDB6F8A4E3DA956A6B103541D4BAEFF1B5D3EBFD090EAF8E07BDBDE8F506742AB65E06CD54A7AAAC16E43158C981C546FB96FF5B7AD4F9C85B0C52A716741301C30679E7E6507E5E9AC7825422E812C07021B0B9E5538062D8049459A9913A1B8A69579DCAD46A398626168FD0FBF98005E362F242595931A8CFACB633B5AEC107C13BC737E45406391DB31090756957AEDA7F311E93D38696C69B4AC0CE9054F4C0D2C4B35B348B45B3CD2961080B16712A3F2485BA9D36A941AAAC4084D7FED5FE0ADFE3288CE47BCB7CF4F80337225C3F283F38308C21CBDDEAA7CB35557D4DF81A4CF8AC754BD944F9DB1FE86060C00351E7721BED3702ADF0450D886F147E51726AF3ED4C86B911E394E51C38814F04EEA7DBCABE44121BF52D6143A6B39B9DAA9A30C170004790649B740774B0B1FFC714717953AFA8B432475781FE4D633505B95917CA4565A8785CA2A399E894CC2AD283E8290A800DDE7CDBABE788FA423BCC240C6A39CF69DCAF231109EF1C9FBDD0568AC44BE7BEFD60CE2CCB9EF029C93906BA9AAA8264B453D675C6E3AD2884427D55B1DB8C2DB858CCED2CE4A3139BC89EDDFDCED4C3CB94A3DA107993F6422D4FF3B22C02FE350375FA2C034468BE9C8B4ADA3D42A67BAB057E83A5372C53DF918400968E72911A1F5C23B42C740D25B41C62536C62BC879E327FC8465D7DDA61A346A982A1C32115105DD51D8CF910A25DDD7536A89093CDCD471DB9FB96AF9C5287F8C05818B024556734BC38A07C0D74727DA8215AAF402768D642AF9891AA1F3DE69D4CD5779CC1C3DDE6ADD1BB7ACFCF65D42B516B2817C2B6D7FE83EA5073B4F545F7432E0E1C74F7567CCE32DB87A1F94BF79A88C05686C1DBE886CFDC81383AF8D63F87D2259CE653F6B8FE8C4A7B168F1D20702CA158BCF502230A29BAEF6677949722CD324F4CBE98BA62E64BF52C5C3B46D5E77A3F9210550F497124BCB7323AE9506EBF570C2B35611DFFCE9F09AE79519F991A47844AB00140E64A971A5FBEAD2851056DDA47953A78F452F378DCF26F0B218048F839660EBD83C0DBE2CBAD3809C9E140E30FC683545E6569DBCE6F346D6C12FB4E824784751F2DCB6802B651A63A84D63B6E8FB3A56E4833257806F803B9C7ACB70D764137D3EF07D7562E993B213CE85C1F53F6003E35DEEE31DBABFD7BDAE92BAAEB9165768D62E8454CDBF701D261614CD2E1C0880760C90210B431DB0A57DC5E05044B2CE0880D796820AAE6E3DA378E267CE9B721A6277E84A1CFDE870E54F29DCF5716D0C78B77226345746B88DD0A27B60F50244AD10F33172062D3C29CF95384EC73F856B77B29AC23F501F996207A5EE026E27D06DB172E36026DA5FAA7C347F8EE15C150EF0BA669EBE6E19E8EC1900AC8AA14FD63C3B4E091F24EF5485D46964F0DBDC6075A637D35EC592A00EB6002AB866BBF65D2142926FF7601047A6AD1F4A0640A761549C3E5E4678801449CC7B5C33693C105932BE12DD681BF94B8AF49C3C9B2F0A1173D80B734FCC8410AEEADE0C0A32BD1949D72083B49A2CD8EDA56FA6933F25DA2BAFAEEA051C9DC4D12A20117E2FA9F11F3686FEE3C1E7E1F83A718A6BF5ECD15CE2CD8AC7D6968EB35", b = h[D[23] + D[5]], d = [], f = 0; f < b; f += 2) {
          d[f >>> 3] |= parseInt(h.substr(f, 2), 16) << 24 - f % 8 * 4;
        }
        return new q._0x7A6(d, b / 2);
      }
    };
    var j = g._0x7UK = {
      _0x7Z0: function (h) {
        var i = h._0x7vY;
        h = h._0x73o;
        for (var d = [], f = 0; f < h; f++) {
          d[D[15] + D[9] + D[14]](String[D[8] + D[24] + D[17] + D[24] + D[21]](i[f >>> 2] >>> 24 - f % 4 * 8 & 255));
        }
        return d.join("");
      },
      _0x73P: function (h) {
        for (var b = h[D[23] + D[5]], d = [], f = 0; f < b; f++) {
          d[f >>> 2] |= (h[D[2] + D[24] + D[21] + D[27] + D[1]](f) & 255) << 24 - f % 4 * 8;
        }
        return new q._0x7A6(d, b);
      }
    };
    var k = g._0x7Wn = {
      _0x7Z0: function (d) {
        try {
          return decodeURIComponent(escape(j._0x7Z0(d)));
        } catch (d) {}
      }
    };
    d._0x7b5 = f._0x7hW({
      _0x7W4: function () {
        this._0x7kk = new q._0x7A6();
        this._0x7QS = 0;
      },
      _0x7Tm: function (d) {
        if (typeof d == "string") {
          d = k._0x73P(d);
        }
        this._0x7kk._0x7oN(d);
        this._0x7QS += d._0x73o;
      },
      _0x7Bx: function (b) {
        var j = this._0x7kk;
        var f = j._0x7vY;
        var g = j._0x73o;
        var m = this._0x7L8;
        var i = g / (m * 4);
        var i = b ? p.ceil(i) : p.max((i | 0) - this._0x73l, 0);
        var g = p.min((b = i * m) * 4, g);
        if (b) {
          for (var n = 0; n < b; n += m) {
            this._0x7xG(f, n);
          }
          n = f.splice(0, b);
          j._0x73o -= g;
        }
        return new q._0x7A6(n, g);
      },
      _0x73l: 0
    });
    b._0x7HS = {};
    return b;
  }(Math);
  (function () {
    var l = G;
    var m = l._0x7kO._0x7Eu;
    l._0x7g3._0x72g = {
      _0x7Z0: function () {
        var b = l._0x7g3._0x70R._0x73P();
        var m = b._0x7vY;
        var n = b._0x73o;
        var g = this._0x7fa;
        b._0x7O2();
        b = [];
        for (var h = 0; h < n; h += 3) {
          for (var p = (m[h >>> 2] >>> 24 - h % 4 * 8 & 255) << 16 | (m[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255) << 8 | m[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, q = 0; q < 4 && h + q * 0.75 < n; q++) {
            b[D[15] + D[9] + D[14]](g[D[2] + D[27] + D[1]](p >>> (3 - q) * 6 & 63));
          }
        }
        if (m = g[D[2] + D[27] + D[1]](64)) {
          for (; b[D[23] + D[5]] % 4;) {
            b[D[15] + D[9] + D[14]](m);
          }
        }
        return b.join("");
      },
      _0x73P: function (d) {
        var b = d[D[23] + D[5]];
        var n = this._0x7fa;
        if ((q = n[D[2] + D[27] + D[1]](64)) && (q = d[D[28] + D[18] + D[26]](q)) != -1) {
          b = q;
        }
        for (var g, p, q = [], r = 0, s = 0; s < b; s++) {
          if (s % 4) {
            g = n[D[28] + D[18] + D[26]](d[D[2] + D[27] + D[1]](s - 1)) << s % 4 * 2;
            p = n[D[28] + D[18] + D[26]](d[D[2] + D[27] + D[1]](s)) >>> 6 - s % 4 * 2;
            q[r >>> 2] |= (g | p) << 24 - r % 4 * 8;
            r++;
          }
        }
        return m._0x7Iz(q, r);
      },
      _0x7fa: C
    };
  })();
  if (!G._0x7kO._0x7H8) {
    (function () {
      var n = G;
      var b = n._0x7kO;
      var d = b._0x7Id;
      var q = b._0x7Eu;
      var f = b._0x7b5;
      var h = n._0x7g3._0x72g;
      n._0x7g3._0x7Wn._0x73P;
      var g = b._0x7H8 = f._0x7hW({
        _0x7HC: d._0x7hW(),
        _0x743: function (f, b) {
          return this._0x7Iz(2, f, b);
        },
        _0x7A6: function (g, b, d) {
          this._0x7HC = this._0x7HC._0x7hW(d);
          this._0x7yB = g;
          this._0x7NW = b;
          this._0x7W4();
        },
        _0x7W4: function () {
          f._0x7W4[D[20] + D[12] + D[7]](this);
          this._0x74C();
        },
        _0x7H9: function (d) {
          if (d) {
            this._0x7Tm(d);
          }
          return this._0x7MS();
        },
        _0x7ZJ: function (i) {
          return {
            _0x7r7: function () {
              var [b, d, f] = [h._0x7Z0(), {
                _0x7vY: [825373492, 825373492, 825377090, 1128547649],
                _0x73o: 16
              }, {
                _0x7d3: {
                  _0x7vY: [1094861636, 1161900338, 859058482, 859058482],
                  _0x73o: 16
                },
                _0x712: G._0x712._0x7xY,
                padding: G._0x7dc._0x7tB
              }];
              return (typeof d == "string" ? c : p)._0x7r7(i, b, d, f)[D[16] + D[13] + D[25]](G._0x7g3._0x7Wn).split("$");
            }
          };
        }
      });
      var j = n._0x712 = {};
      var k = (b._0x7V8 = d._0x7hW({
        _0x743: function (f, b) {
          return this._0x7zx._0x7Iz(f, b);
        },
        _0x7A6: function (f, b) {
          this._0x7wa = f;
          this._0x7eC = b;
        }
      }))._0x7hW();
      k._0x7zx = k._0x7hW({
        _0x7qd: function (i, b) {
          var d = this._0x7wa;
          var f = d._0x7L8;
          var g = i.slice(b, b + f);
          d._0x79Z(i, b);
          (function (i, b, d) {
            var f = this._0x7eC;
            if (f) {
              this._0x7eC = undefined;
            } else {
              f = this._0x7bS;
            }
            for (var j = 0; j < d; j++) {
              i[b + j] ^= f[j];
            }
          })[D[20] + D[12] + D[7]](this, i, b, f);
          this._0x7bS = g;
        }
      });
      j = j._0x7xY = k;
      k = (n._0x7dc = {})._0x7tB = {
        _0x7Bg: function (d) {
          d._0x73o -= d._0x7vY[d._0x73o - 1 >>> 2] & 255;
        }
      };
      b._0x76f = g._0x7hW({
        _0x7W4: function () {
          g._0x7W4[D[20] + D[12] + D[7]](this);
          var h = this._0x7HC;
          var i = h._0x7d3;
          var d = (h = h._0x712)._0x743;
          this._0x73l = 1;
          this._0x7Ex = d[D[20] + D[12] + D[7]](h, this, i && i._0x7vY);
        },
        _0x7xG: function (f, b) {
          this._0x7Ex._0x7qd(f, b);
        },
        _0x7MS: function () {
          var f;
          var g = this._0x7HC.padding;
          if (this._0x7yB == 1) {
            g._0x7dc(this._0x7kk, this._0x7L8);
            f = this._0x7Bx(true);
          } else {
            f = this._0x7Bx(true);
            g._0x7Bg(f);
          }
          return f;
        },
        _0x7L8: 4
      });
      var r = b._0x7aZ = d._0x7hW({
        _0x7A6: function (d) {
          this._0x7YN(d);
        }
      });
      var j = (n._0x7xc = {})._0x7zN = {
        _0x73P: function (g) {
          var i;
          var j = (g = h._0x73P(g))._0x7vY;
          if (j[0] == 1398893684 && j[1] == 1701076831) {
            i = q._0x7Iz(j.slice(2, 4));
            j.splice(0, 4);
            g._0x73o -= 16;
          }
          return r._0x7Iz({
            _0x7j7: g,
            salt: i
          });
        }
      };
      var p = b._0x7CG = d._0x7hW({
        _0x7HC: d._0x7hW({
          _0x7xc: j
        }),
        _0x7r7: function (h, b, i, f) {
          f = this._0x7HC._0x7hW(f);
          b = this._0x7Nv(b, f._0x7xc);
          return h._0x743(i, f)._0x7H9(b._0x7j7);
        },
        _0x7Nv: function (f, b) {
          if (typeof f == "string") {
            return b._0x73P(f, this);
          } else {
            return f;
          }
        }
      });
    })();
  }
  (function () {
    for (var f = G, b = f._0x7kO._0x76f, d = f._0x7HS, r = [], h = [], j = [], l = [], m = [], p = [], i = [], k = 0; k < 256; k++) {
      i[k] = k < 128 ? k << 1 : k << 1 ^ 283;
    }
    for (var n = 0, s = 0, k = 0; k < 256; k++) {
      var u = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
      var A = i[h[r[n] = u = u >>> 8 ^ u & 255 ^ 99] = n];
      var C = i[A];
      var D = i[C];
      n;
      n;
      n;
      n;
      j[u] = (C = D * 16843009 ^ C * 65537 ^ A * 257 ^ n * 16843008) << 24 | C >>> 8;
      l[u] = C << 16 | C >>> 16;
      m[u] = C << 8 | C >>> 24;
      p[u] = C;
      if (n) {
        n = A ^ i[i[i[D ^ A]]];
        s ^= i[i[s]];
      } else {
        n = s = 1;
      }
    }
    var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var d = d._0x7Bu = b._0x7hW({
      _0x74C: function () {
        for (var i, n = (s = this._0x7NW)._0x7vY, q = s._0x73o / 4, s = ((this._0x7WI = q + 6) + 1) * 4, t = this._0x7TW = [], h = 0; h < s; h++) {
          if (h < q) {
            t[h] = n[h];
          } else {
            i = t[h - 1];
            if (h % q) {
              if (q > 6 && h % q == 4) {
                i = r[i >>> 24] << 24 | r[i >>> 16 & 255] << 16 | r[i >>> 8 & 255] << 8 | r[i & 255];
              }
            } else {
              i = r[(i = i << 8 | i >>> 24) >>> 24] << 24 | r[i >>> 16 & 255] << 16 | r[i >>> 8 & 255] << 8 | r[i & 255];
              i ^= E[h / q | 0] << 24;
            }
            t[h] = t[h - q] ^ i;
          }
        }
        n = this._0x7E0 = [];
        q = 0;
        for (; q < s; q++) {
          h = s - q;
          i = q % 4 ? t[h] : t[h - 4];
          n[q] = q < 4 || h <= 4 ? i : j[r[i >>> 24]] ^ l[r[i >>> 16 & 255]] ^ m[r[i >>> 8 & 255]] ^ p[r[i & 255]];
        }
      },
      _0x79Z: function (g, b) {
        var d = g[b + 1];
        g[b + 1] = g[b + 3];
        g[b + 3] = d;
        this._0x72o(g, b, this._0x7E0, j, l, m, p, h);
        d = g[b + 1];
        g[b + 1] = g[b + 3];
        g[b + 3] = d;
      },
      _0x72o: function (f, b, d, g, h, i, j, k) {
        for (var l = this._0x7WI, m = f[b] ^ d[0], n = f[b + 1] ^ d[1], p = f[b + 2] ^ d[2], q = f[b + 3] ^ d[3], r = 4, s = 1; s < l; s++) {
          var u = g[m >>> 24] ^ h[n >>> 16 & 255] ^ i[p >>> 8 & 255] ^ j[q & 255] ^ d[r++];
          var D = g[n >>> 24] ^ h[p >>> 16 & 255] ^ i[q >>> 8 & 255] ^ j[m & 255] ^ d[r++];
          var E = g[p >>> 24] ^ h[q >>> 16 & 255] ^ i[m >>> 8 & 255] ^ j[n & 255] ^ d[r++];
          var q = g[q >>> 24] ^ h[m >>> 16 & 255] ^ i[n >>> 8 & 255] ^ j[p & 255] ^ d[r++];
          var m = u;
          var n = D;
          var p = E;
        }
        u = (k[m >>> 24] << 24 | k[n >>> 16 & 255] << 16 | k[p >>> 8 & 255] << 8 | k[q & 255]) ^ d[r++];
        D = (k[n >>> 24] << 24 | k[p >>> 16 & 255] << 16 | k[q >>> 8 & 255] << 8 | k[m & 255]) ^ d[r++];
        E = (k[p >>> 24] << 24 | k[q >>> 16 & 255] << 16 | k[m >>> 8 & 255] << 8 | k[n & 255]) ^ d[r++];
        q = (k[q >>> 24] << 24 | k[m >>> 16 & 255] << 16 | k[n >>> 8 & 255] << 8 | k[p & 255]) ^ d[r++];
        f[b] = u;
        f[b + 1] = D;
        f[b + 2] = E;
        f[b + 3] = q;
      }
    });
    f._0x7Bu = b._0x7ZJ(d);
  })();
  var H = G._0x7Bu._0x7r7();
  var I = function d() {
    return true;
  };
  var v = E(H, F, !I());
  function E(h, g, d) {
    return h[u(t[6])](f => {
      if (typeof g === "function") {
        return g(f, d);
      } else {
        return f[g];
      }
    }).reduce((b, d, f) => {
      if (!b[d]) {
        b[d] = [h[f]];
      } else {
        b[d] = b[d].concat(h[f]);
      }
      return b;
    }, {});
  }
  function F(f, b) {
    if (b) {
      return !~f[u(t[14])]("/x28");
    } else {
      return !!~f[u(t[14])]("/x28");
    }
  }
  K = function () {
    return v[false];
  };
  return K();
}
p();