//Fri Oct 11 2024 12:54:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign: x5,
  getToken: x6,
  checkCk: x7,
  getCookies: x8,
  getUserInfo: x9,
  validateCarmeWithType: xx,
  checkCarmeCount: xp,
  tryCatchPromise: xZ
} = require("./common.js");
const xc = require("request");
const {
  wait: xu
} = require("./common");
const xP = 6;
const xF = process.env.ELE_CARME;
let xV = 0;
let xi = 0;
let xe = 0;
let xX;
const xR = require("crypto");
function xE(p) {
  const xS = xR.createHash("md5").update(p).digest("hex");
  return xS;
}
function xW(p) {
  return Object.values(p).length === 0;
}
async function xG(p) {
  const pZ = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: p
  };
  const pc = {
    actId: "20221207144029906162546384",
    collectionId: "20230224114656384938530468",
    componentId: "20230224114825216373367998",
    bizScene: "game_center",
    bizCode: "LOTTERY",
    longitude: "120.21993197500706",
    latitude: "30.178378857672215",
    asac: "2A232091VOX6SPEQYH6RG4",
    extParams: "{\"bizType\":\"LOTTERY\"}",
    ua: "140#CK1oj11hzzW9Szo2K52s+pN8s77HHUFmuM/UtDDs0Qi3WsJVBjgCRSpLBmwg1t45dolchfqRmKl1bALrrsgqlbzxhMT65/VGzzcSb1NVl3MzzPzbVXlqlYfWGwrfAdGuzF4SLIuKlpODzPzYVXEul+Fx3DH3uJBlzFzb2mD5lp1bojnSONdOHaU+WFtTI267wOPmhF8Lb1t1AGAMJzaUhlSZ37eoVlUxdJDMRuBaLMfDybLO0h1eFD9Bu8b+DVPhp0zq91yfNSAXB7K0jltKROauR0mY6uMsohEuI04aSewXLPQudoCKe4KTqOdcfQxcM7naN0frsSX8GkmfK7MJZvMjY1U5qUZ8S6B6etbmdFpXI71kiclSbDtLx68pvrlX+Fc4UR+S3Pe1djdcWkhUqAOMMF1UoPppTe48HVaz+8QLqCm5C+vFVcG/nR4fp/Nqr9zxZZ1BEF2cqauKj9rwh1wg0ciKSZHr7d7+iqSugixQcmeWHucfFqAnDSqbHS8s0IlgXzfyfX4mbjfwsHaceDK5eauu/HlurzK0IpFhTLNn95u4XaF2p+Vx7/iLXMyEDky/HPCNi8XALSXJrmIz7wz6xcq2coakOoMyCQhrEhtsCgKAdzI0tjMldN3kNPusrd2JYaqKN6tK0a3ntrBfPvKjkXqX7p9CYI7DIp40BjnHwQCDKd3fZl6Fu4aOYZlfXnVkuSnuL0gkYtscTU4hIBmZsaKOKXSJdWYdynhh29HJVvpLAptEkD8Lnvm9nXnk7GorF+NPoY/dpJ+S2eh8/XksaIyRH3zWcpW5Ua30Hn94YEcqMFI/gQVjPHTdGkzBbjU8oTiLJ5Y5qSIY5eDM6T7XYoSwhGbyAL+=",
    umidtoken: "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0="
  };
  const pu = new Date().getTime();
  const pP = 12574478;
  var pF = "data=" + encodeURIComponent(JSON.stringify(pc));
  const pf = x6(p);
  const pV = pf.split("_")[0];
  const pi = await x5(pV + "&" + pu + "&" + pP + "&" + JSON.stringify(pc), xF);
  const pe = {
    url: "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + pu + "&sign=" + pi + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: pZ,
    body: pF
  };
  return xZ(pX => {
    xc(pe, async (pE, pW, pG) => {
      if (!pE && pW.statusCode === 200) {
        try {
          const ph = JSON.parse(pG);
          if (xW(ph.data.data)) {
            console.log(ph.ret[0]);
            pX(false);
          } else {
            if (ph.data.data.errorMsg) {
              console.log(ph.data.data.errorMsg);
            } else {
              let py = ph.data.data.sendRightList[0];
              const pv = py.materialInfo.description + py.materialInfo.title;
              console.log(pv);
            }
            pX(ph);
          }
        } catch (pk) {
          pX(false);
        }
      } else {
        pX(false);
      }
    });
  });
}
async function xn(p) {
  const p4 = await x7(p);
  const p5 = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    asac: "2A21607NIIT1ND5C4YXJ6C",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    cookie: p4,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const p6 = new Date().getTime();
  const p7 = 12574478;
  const p8 = {
    bizScene: "game_center",
    asac: "2A21607NIIT1ND5C4YXJ6C",
    umidtoken: "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@" + p6
  };
  var pV = "data=" + encodeURIComponent(JSON.stringify(p8));
  const pi = x6(p4);
  const pe = pi.split("_")[0];
  const pX = await x5(pe + "&" + p6 + "&" + p7 + "&" + JSON.stringify(p8), xF);
  const pR = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.6.1&appKey=" + p7 + "&t=" + p6 + "&sign=" + pX + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141",
    method: "POST",
    headers: p5,
    body: pV
  };
  return xZ(pD => {
    xc(pR, async (pG, pn, pg) => {
      if (!pG && pn.statusCode == 200) {
        const ph = JSON.parse(pg);
        ph.data.errorMsg ? console.log(ph.data.errorMsg) : console.log("签到成功");
        pD(ph);
      } else {
        pD(null);
      }
    });
  });
}
async function xg(p) {
  const p5 = {
    bizScene: "LIANLIANKAN",
    bizMethod: "login",
    bizParam: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
    longitude: 108.2048221292035,
    latitude: 22.678892108345327
  };
  const p6 = await xr(p, p5);
  return p6.data.token + "_" + p6.data.openId;
}
async function xU(p, xA) {
  const p7 = {
    gameId: null,
    token: xA
  };
  const p8 = JSON.stringify(p7);
  const px = {
    bizScene: "LIANLIANKAN",
    bizMethod: "startGameV2",
    bizParam: p8,
    longitude: 108.2048221292035,
    latitude: 22.678892108345327
  };
  const pp = await xr(p, px);
  if (pp.bizErrorMsg != "success") {
    console.log(pp.bizErrorMsg);
    return null;
  }
  return pp.data.gameCode;
}
async function xa(p, xA, xb) {
  const p7 = {
    name: "page_view",
    obj: {}
  };
  p7.obj.sname = "GameExp";
  p7.obj.level = xb;
  const p9 = {
    eventInfos: [p7],
    gameId: null,
    token: "_0x79d754"
  };
  const px = JSON.stringify(p9);
  const pZ = {
    bizScene: "LIANLIANKAN",
    bizMethod: "reportLog",
    bizParam: px,
    longitude: 108.2048221292035,
    latitude: 22.678892108345327
  };
  const pc = await xr(p, pZ, 2);
  if (pc.bizErrorMsg != "success") {
    console.log(pc.bizErrorMsg);
    return null;
  }
  return pc.data.gameCode;
}
async function xQ(p, xA, xb) {
  const p6 = {
    sname: "ReviveExp",
    failurereason: 0,
    droptimes: xb
  };
  const p7 = {
    name: "page_view",
    obj: p6
  };
  const p9 = {
    eventInfos: [p7],
    gameId: null,
    token: "_0x79d754"
  };
  const px = JSON.stringify(p9);
  const pZ = {
    bizScene: "LIANLIANKAN",
    bizMethod: "reportLog",
    bizParam: px,
    longitude: 108.2048221292035,
    latitude: 22.678892108345327
  };
  const pc = await xr(p, pZ);
  if (pc.bizErrorMsg != "success") {
    console.log(pc.bizErrorMsg);
    return null;
  }
  return pc.data.gameCode;
}
async function xM(p, xA, xb) {
  const p7 = {
    name: "page_view",
    obj: {}
  };
  p7.obj.sname = "GameFailExp";
  p7.obj.failurereason = 0;
  p7.obj.irise = 1;
  p7.obj.droptimes = xb;
  const p9 = {
    eventInfos: [p7],
    gameId: null,
    token: "_0x79d754"
  };
  const px = JSON.stringify(p9);
  const pZ = {
    bizScene: "LIANLIANKAN",
    bizMethod: "reportLog",
    bizParam: px,
    longitude: 108.2048221292035,
    latitude: 22.678892108345327
  };
  const pc = await xr(p, pZ);
  if (pc.bizErrorMsg != "success") {
    console.log(pc.bizErrorMsg);
    return null;
  }
  return pc.data.gameCode;
}
async function xH(p, xA, xb, xz) {
  const p7 = new Date().getTime();
  let p8 = p7 - xX;
  xV = p8;
  console.log(p8);
  const p9 = "Game[" + xz + "]-" + xb + "|" + xA + p8;
  const px = await xE(p9);
  const pZ = {
    gameCode: xA,
    passLevelTime: p8,
    sign: px,
    gameId: null,
    token: xb
  };
  const pc = JSON.stringify(pZ);
  const pP = {
    bizScene: "LIANLIANKAN",
    bizMethod: "settlement",
    bizParam: pc,
    longitude: 108.2048221292035,
    latitude: 22.678892108345327
  };
  const pF = await xr(p, pP, p7);
  if (pF.bizErrorMsg != "success") {
    console.log(pF.bizErrorMsg);
    return null;
  }
  return pF.data.lastLevelId;
}
async function xr(p, xA, xb = 0) {
  const p7 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: p,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  let p8 = new Date().getTime();
  let p9 = 12574478;
  xi = p8;
  xb == 2 && xe == 0 && (xX = xi, xe++);
  xb != 0 && xb != 2 && (p8 = xb);
  var px = "data=" + encodeURIComponent(JSON.stringify(xA));
  let pp = x6(p);
  let pZ = pp.split("_")[0];
  let pc = await xE(pZ + "&" + p8 + "&" + p9 + "&" + JSON.stringify(xA), xF);
  const pu = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + p8 + "&sign=" + pc + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: p7,
    body: px
  };
  return xZ(pP => {
    xc(pu, async (pF, pf, pV) => {
      if (!pF && pf.statusCode == 200) {
        try {
          const pG = JSON.parse(pV);
          _0x25dc12 = JSON.parse(pG.data.data);
          pP(_0x25dc12);
        } catch (pn) {
          console.log(pV);
          pP(null);
        }
      } else {
        pP(null);
      }
    });
  });
}
async function xl(p, xA, xb = 0) {
  console.log("发放中...");
  const p7 = {
    Host: "shopping.ele.me",
    "x-ltraffic-src": "%7B%22afid%22%3A%22afc_launch%5Eme.ele%5E1012_Initiactive%5E3878ccd3-3646-4a80-a9cd-2186c602d4ae_1723134419515%22%2C%22pvid%22%3A%22a2ogi.bx903203__Zoq5ZZVQvj0DADRgLoZBLSGu__P4o%2FfxW_%22%7D",
    "x-eleme-requestid": "ADEA5439FE8340A29040F669FCAD4C31|1723137437692",
    "x-sid": "2e43b42b3e13e4d2a765e9791d7365aae",
    "x-uid": "2214541497400",
    "x-nettype": "UNKNOWN",
    "x-server-ip": "180.76.0.0",
    "x-pv": "6.3",
    "x-nq": "5G",
    "x-features": "1051",
    "x-app-conf-v": "0",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    cookie: p,
    "x-bx-version": "6.6.240501.37153015",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_11.11.88",
    "x-app-ver": "11.11.88",
    "x-c-traceid": "Zoq5ZZVQvj0DADRgLoZBLSGu17231374376810241131437",
    "x-elder-mode": "0",
    "x-pgi-requestid": "5bce4caf-e493-4d94-b68c-4777ff0dc0c1",
    "x-umt": "udcBrb5LPIYh7gKRMvGWBIPWh4fRziH0",
    "x-utdid": "Zoq5ZZVQvj0DADRgLoZBLSGu",
    "c-launch-info": "3,0,1723137437680,1723134439818,1",
    asac: "2A23C08X4VP4SVOKFBKCA9",
    "x-appkey": "24895413",
    "x-falco-id": "696f8c1075a344b79b195d11edf7cf0d",
    "x-page-url": "https%3A%2F%2Fr.ele.me%2Flinkgame%2Findex.html%3FnavType%3D3%26longitude%3D106.4976118505001%26latitude%3D26.36270485818386%26spm%3Da13.b_activity_kb_m71293.0.0",
    "x-page-name": "me.ele.component.webcontainer.view.AppUCWebActivity",
    "x-sufei-token": "BO_vGx8i1dIwhdHRl8VKN2L4dQH5lEO2iI4LbwF8bt5lUY5SCWX2BzIG1wZIFhsu",
    "accept-encoding": "gzip"
  };
  const p9 = {
    url: "https://shopping.ele.me/gw/mtop.alsc.playgame.mini.game.event.report/1.0/?wua=W28h_7yZ26hu1JwalIpn%2FcX%2BzfziRWkHYEHsdZmVqXeA2%2FwYUa%2B8bCP0ArVl3I6Gh%2F%2FZqmRdRrj4AjAJUfG%2B3oLrJivFwm63Kg7PpjAsW6VXjHIaMutgOxAOWOcPl6%2BqCMhOSEcqmPAKdCuKLfw1IsX1w%2Bl%2BAitNeCtzTcBQ62VSinUDNlE9u6PyJ%2BIfTDJ%2Fu%2B7iQoXsnE8Y5xIk%2BLbShF5csC%2FOseW6sXYruCygJZUPaB%2FObURmlJ66Ne%2FH2dG6q5NW4r9zMwQ%2FGbRggiD25B5UCTpZV6%2BAaUeFtkfv86LPF3q%2FbM8a%2BoPlvNIDknTIqiitKdpzIFAvRHD9E3KV13DG8ImkGu8bUXyoE9fuAmQc%2BwGlBGEXZ%2BObQTCFMfCxFIOlkP8ReaaqbxN7eAygPPlXq2w%3D%3D&data=%7B%22gameSource%22%3A%22ISV%22%2C%22gameOperateName%22%3A%22LIANLIANKAN%22%2C%22gameTaskId%22%3A%22%22%2C%22bizScene%22%3A%22LIANLIANKAN%22%2C%22gameStage%22%3A%22completeLevel2%22%2C%22gameName%22%3A%22LIANLIANKAN%22%2C%22ua%22%3A%22140%23FQbKI49pzzZ5Rzo2lztHbLBtc73bS2IMYbuJEeuqgRiXdaFM2Dz39221q3iA%2BzMtievkImG5TP6N9j%5C%2F%2BEGyMBLT7i4IY%5C%2FbjI29K%2B41W%2B4kyaDOR1I9pqwQyUSnDHzVcYxKoZkGCoBL0P46NCPD%2BGqVnDIIye7uAUUa%5C%2F4rsRCVqj7f8%5C%2FC7H%2Bxx3qByjcWbSBaxt2mPGie09o7It60HQpAa5bkYmQKrfxz9NU8uLWIEsrZ5EnTBXCRzYwv3hSoUMA77RUi28W83%5C%2FnBLR8DGQUHeJdVKwseB0E6zM6JRDP05n0P0UrYR86rb5Tvrm3uqwCGPFem8KIdRAuQYCSY9D%5C%2F2v%5C%2FhFUNXcDgIfU079T4gK2ZfT2jCIlFbZ6BxSW8WZJzOrZV0n8sLBf51kGiuQmOQPX2JjJmOx4HxpoCZHGs6nSAp%5C%2FfKD760TcCjs0%2BvB9UjApsqSdIN%2BwMzPiwoT2Kbom8qUUmlsF00GqOB1TK0haffuU1lBATdivazk65BzQlsUXpBW%5C%2FzF1Ik0pFlbqOA7g87oZcNskNY2OglrenfDFo7Njhx9viGfzMA%5C%2FdRS9AnqysjgHRwa08GK02dONhLQykvGI9kC1sHOVJ%2BoK9jRsqU2oi21yrNnwgqGse8Vaa7uspDEVBDYg%5C%2FJ122kdbYnrZS6w9UGq4Mba6lOmDH%2B3CPC72WWfqILu0AHbk3b8%2Bnsj8Yioy%5C%2FRj6N3wg0ocld9QGwX9VySatt%2B9KQ266l0WbiDFBdKCD8JaM37bVhGoCasQnYjKLJsvcCxXK%5C%2FzVGvAY5lWxGukuu%5C%2FayuhXOo4YJptmA7poaU2ZPP6yCJGknjMUzwwK4IjRzbPIcgBDc2Xlcs3jN0mh3YxOr5hC8Q89zr05BTsL0XU0mGkYA6C0FErtQT27HcVkTi3lw8zNkQYNX2LO3yjlVo%2BhvdIxcY3bZ48x3ibO9RhfQmLMgSLxOL9gBc8%5C%2FE6L5nPj%2B1VlxSKaTfyXUj0dqfYkhNO%2BNXuUq%2BUKeM3jhwrqydmIvYZnXRgbEAIoQLqi42rVVbqDEwR1ctD%2BMEtg%5C%2Fzvj2Oaa3s3nV%2BvMlmmCUSEyHAvovDRS%5C%2Flp1zzXdEnDgOYFrxvok%2B93Etzzrb22U3laNMHN9B3WeQIqfxRrEWSfT4Pi%5C%2FPaOMFvM5oF7OiA5ROHMHn24Ze3LluxS3VXhN1N7bnA02bisKuEzftQ0B28OJXDooDQLYsv4fKT8nD5s6SRMWV2ZJ%2BpG5izjpbZsTvlIAx5cdIr53Cd59ozP%2BfA83bFOSimQxxvwFxh8rwEOUUHFDCXcL%2BojCoFORbQhh6NLOXFv6Z2UKuMx2j5cgvTRJRKbhfCHlF0%2Bx%5C%2FduxVxFCJvfGnRpu6%5C%2Fq21zf2TXcRvXcd350%2BKVdJtyRGxfNDKEBwSoSC9Rnx5orkJLzsbho8qUSpILc4uMXmzXbXiXgo0I%2B9qnfGI0HYr5M3aH0m4QqIYPxpR5z3oPMNjzwftEKrQ%2BSD8XkY%2BB6NX6rdr92EKPMVyFX9S8W7uagLDXMY4UL8%5C%2FZDeIY%2B58lQSoFiyic5ssmS4YXAi1qGMfFRSbaXh%2BBIY4zKziEImqwMDWXU2rx0u0TftVV11UvQdDFVOb6ekqlz2s7PoWXLgJ8zdOLYQel95Dn5uiE7BLFFdDQvyiX2lIzE5I32lSDSyo08oGjI0tsGtzIw44DtYH8r3VfOsjv6MtrtRVesxAAfmtXuuxzLe3F1Sbv2g3cdaPzzTSEUHqDFoo20%2BT%5C%2F8b9MQZIhT8%5C%2FRcZo08njcAatDFmGXZg2I5Fw0SoyR%2B6plciz0cLIcxpNmpZDXVY3rRTGFf3Yj85svRxDuw%2B0vactOxpkXTHHntkBnFl6XTEM5XuxxM02fd3BsbH8OILZ0aO2lkui2X0mlpYazDcLV2eDFT1D2zTJGth%5C%2Fzcl9XXeHM62zzDzbV1h%5C%2FlQzzm8c3IWO1z2ry2X8%2Bl6TIzPxiE%2B5jwFrx2DD38phqfAbbD183lp1zzcFiVBYYN7Yl2Ic%2BV3g%5C%2FWQrbOXMCv9Y2zIriVXl%5C%2FbQrzeWV3EBcQzFzb2%2BBnlk1zzm1VV2lBUzxL2PoO0tTczbri21U30GOzJPDuV2QSLQrx2DD3lthq9Mdu2oOGlpTzzDxkV2Q8%2Bkxx2mwKV6hqzzxy2XlxU6J8x8rbVXl%5C%2FEQrz2DD3VphqyrDC2OMkUpsxzDzb8uV%5C%2FQRtz2mQ%5C%2Fnph%5C%2FzzzbE18%2BC5kJFDzEV1hqMr%2BzqIc3ZpY6zcOi2XU3lGrxzDaEE%2BQmnFrz2DD3vphqzzzb2O8%2BuEKxzIDZIOJqlbzzXPc3yS1Kz2DcL283lpOzEPriVWo%5C%2FjMzzh8P%2BVtg%5C%2Fznzi22yMv9hrz8riVXl%5C%2FbzrzLxn3EF1%2BzFrb22eulpTzMUnfVPnWMbrz2DoXUtg9ZQzh2183ltMzHDrbrZctvC1x2PD3VRcFznzi2ci7lpTzzDoWV2QltS2z7PH%2BVtg%5C%2Fzd%2Bi2mwelEQxzPrbVXl5TzxQwDo7YphqzzoD2XM6lYFz78riV2E%5C%2Fl8sx2KK%2BppTkxFri22U30GOzXNXVVABBUbrz2Do3E3gBaMrbi2Y4lp1zz3%2BiVCHqszDRLDc3Vtg%5C%2Fzbrb22I2e3fzbPzlVOGgqbrx2DD39thq%2BB3b2zwW8ubxzDzbNh7%5C%2FCfDHXDzZr6h%5C%2FzFzbQO8%2B1kFzF8riVXl%5C%2FyQrzU%5C%2Fc3t3EtzFSp23VRleuz4DogV2l%5C%2FlQx22PzXwrSLzLsv2X84lpGdzPzgVB4%5C%2FCQrx2PD3VX83zKdioul3tlrxzPzbVZVqlQziXPxpB3h%5C%2FzzzbR28%2BYHszSPriV2E%5C%2FlM2x2DsFr369zQri22U31KrzZNeiVZJtlzro2IoXUtgb4zzzL183l6TzAIrbUl0%5C%2FvGzD2PD3VtgtzFzb22UdlpG%5C%2FMI2b%5C%2FnJqlQzz2nj%2BV%2BxmFzDM11Y4lp1zz4FiVFU%5C%2FDf%2BzoDK%2BVtluzDbi2rG4GNBAz8riVXl%5C%2FTFrzhcc8sIbJzFrS2XUblpYRzHObVf4ulFrz2DDy936aFHRb2DSJlpTcx8xIV25HPNrx2Hc%2BVthqzzxb2XedvvtxzK2VV2lqlQxA2PzGKZSXz3TV2X8%2Bl66KzPzPEAq%5C%2FvhFd2Pc4V6kuzFDU2XKoZfFxzPFbVu4qlNyx0Pc3ttnFzFzb2m01lQ2xk0rbXUoqlQzz2%2BD%2BVdzFprzba2KDl6TzzD%2BiVXl%5C%2Fl5Tx2DxlttTAxQri22U36gXz34ObBrWqlQzz2%2BN%2BV%2BXaFQzY2O83U3TzHPrbsoW%5C%2FlUFx2PD3V%5C%2F7hzmdb9sl3n5MxzPzbVj4qlsMxa8D3P3EtzFzb2HPylMAxmDDrV1hqMbfzQPc3XtYRzL2V2X8%2Bl66xzPDJEP8qv7To2Pc3VtkFzFzu2xbRl8zrzPrbVXUIOQrz2QgGGHmijDapVrMn%5C%2F2I4jearIkM%2BIXKnqdqAtmQHpN6GrWj6F166bAdG8P3RYEV0xlyEiFLyn1TeFc78jJ4XXbeYkL0ea5XSsKKr8y2yHKuDJvJARVs%5C%2F8BXIYBZJ5RySEZGsQzgenKYPJw0QvCi3j8%2BhHS07aFcCMone5VD2rGPehDRDCyQFz7CnoDj%5C%2F2v8DL3Fp3o3hVjzbjy03B9P5IJWXjLwo%5C%2FAnAuXRI1njUveHm7P5Bz7Y1EAhKcxjQNma6t7pwE%5C%2FPKsyfMXKZSx8WI5mOUN%5C%2F%5C%2FAWEwDMfTuopNbNsYHmwpF%5C%2FIpDE1ZfqkqbQtkehGj%5C%2FhQxsWGn3waqTVjTGE8p3LAjStn778J4Qqicih%2BkHC9phvSLeUyuth3iiJE6c1w0pV%2Bt11OG0DzgT78WUbyI52Z7gNENLWbbDK0Oo2HzywJgLByqQXH%5C%2F1sD4NKSE%5C%2F%2BEZEkqU%5C%2FXuZlkua60ceFO8AqWPvN%5C%2FirmQ0gqs1tzKxg6LFyW%2Bil2JtElAQpqbDzEFc8adLjU%5C%2FzTesWAyrNT3C9XCBWa9JkUQBlE0AFDvHxeKDIhl2kFrtlnnDS8d276hlAp839hySd3MxhChdiZEYGyuYEXozQM60YXdScAOIZAB5D0L49iQq3psw02A9Shm6MiEVf0DYXvG7N%5C%2FmhlA0yJn24ezP7LOxeis%3D%22%2C%22umidtoken%22%3A%22T2gAaiSNjjeU6VQUQvMrWoSrYMAjIMiJisFmHSX_A-9Vcl_wwFRnHwH8HHdljFRGMqs%3D%22%7D&type=originaljson&asac=2A23C08X4VP4SVOKFBKCA9",
    method: "GET",
    headers: p7
  };
  return xZ(px => {
    xc(p9, async (pc, pu, pP) => {
      if (!pc && pu.statusCode == 200) {
        try {
          const pD = JSON.parse(pP);
          _0x25dc12 = JSON.parse(pD.data.data);
          px(_0x25dc12);
        } catch (pE) {
          console.log(pP);
          px(null);
        }
      } else {
        px(null);
      }
    });
  });
}
async function xy(p, xA, xb = 0) {
  console.log("已发放...");
  const p7 = {
    Host: "shopping.ele.me",
    "x-ltraffic-src": "%7B%22afid%22%3A%22afc_launch%5Eme.ele%5E1012_Initiactive%5E3878ccd3-3646-4a80-a9cd-2186c602d4ae_1723134419515%22%2C%22pvid%22%3A%22a2ogi.bx903203__Zoq5ZZVQvj0DADRgLoZBLSGu__P4o%2FfxW_%22%7D",
    "x-sid": "2e43b42b3e13e4d2a765e9791d7365aae",
    "x-uid": "2214541497400",
    "x-nettype": "UNKNOWN",
    "x-server-ip": "180.76.0.0",
    "x-pv": "6.3",
    "x-nq": "5G",
    "x-features": "1051",
    "x-app-conf-v": "0",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    cookie: p,
    "x-bx-version": "6.6.240501.37153015",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_11.11.88",
    "x-app-ver": "11.11.88",
    "x-c-traceid": "Zoq5ZZVQvj0DADRgLoZBLSGu17231374376820242131437",
    "x-elder-mode": "0",
    "x-pgi-requestid": "d8d11dce-3ab2-48a6-8fdb-c0207e660902",
    "x-umt": "udcBrb5LPIYh7gKRMvGWBIPWh4fRziH0",
    "x-utdid": "Zoq5ZZVQvj0DADRgLoZBLSGu",
    "c-launch-info": "3,0,1723137437682,1723134439818,1",
    asac: "2A23C08X4VP4SVOKFBKCA9",
    "x-appkey": "24895413",
    "x-falco-id": "12d348ab6b414fb3887df15a233d651e",
    "x-page-url": "https%3A%2F%2Fr.ele.me%2Flinkgame%2Findex.html%3FnavType%3D3%26longitude%3D106.4976118505001%26latitude%3D26.36270485818386%26spm%3Da13.b_activity_kb_m71293.0.0",
    "x-page-name": "me.ele.component.webcontainer.view.AppUCWebActivity",
    "x-sufei-token": "BHBwBYRP4sfbEL78fNjdAnltSjzCuVQDI_vkwmrB2UueJJHPEsgBkhkTeGvjiwzb",
    "accept-encoding": "gzip"
  };
  const p9 = {
    url: "https://shopping.ele.me/gw/mtop.alsc.playgame.mini.game.event.report/1.0/?wua=W28h_e%2BzbQ%2FZQwkxbgEEcvzOoeRqNbdJ07LYgNhrNzku0o%2Fzil8ScM4wjQiER4i%2FOXvnxj4IFjggxqVJTyJhKHkWlMrm1MvumBNTH244akkm2xOXwbMBCweqJfmood679mFYoLb0kJEY7LsQ4vw1%2BEDdcD3%2Fz%2FRvgpNuyPNwU9rGYvlZx8ksbt0NGo%2FnkbaDkt1Uf41a5IBApFuDMQwS1xnXtLYLOinEMznQR3otqacwNDKoDhdDKqpcRTqG1ZEjuHaPVo6GzrvmjWqK436n3Xn17gCsSE6FSSl1%2FxzIi3il4jfxrCQPi1mO3jEzilTlS6AlRzP%2FoSEsQVfrj4arlCF8PAMj0Ee2c4bi4LSaBscAQ%2F5rPvPDWhF4lQ537bDB1v0Yg&data=%7B%22gameSource%22%3A%22ISV%22%2C%22gameOperateName%22%3A%22LIANLIANKAN%22%2C%22gameTaskId%22%3A%22%22%2C%22bizScene%22%3A%22LIANLIANKAN%22%2C%22gameStage%22%3A%22completeAll%22%2C%22gameName%22%3A%22LIANLIANKAN%22%2C%22ua%22%3A%22140%23mM2KIJ7szzZg3zo2lztHbLBtc73bS2IMYbuJEeuqgRiXdaFM2Dz39221q3iA%2BzMtievkImG5TP6N9j%5C%2F%2BEGyMBLT7i4IY%5C%2FbjI29K%2B41W%2B4kyaDOR1I9pqwQyUSnDHzVcYxKoZkGCoBL0P46NCPD%2BGqVnDIIye7uAUUa%5C%2F4rsRCVqj7f8%5C%2FC7H%2Bxx3qByjcWbSBaxt2mPGie09o7It60HQpAa5bkYmQKrfxz9NU8uLWIEsrZ5EnTBXCRzYwv3hSoUMA77RUi28W83%5C%2FnBLR8DGQUHeJdVKwseB0E6zM6JRDP05n0P0UrYR86rb5Tvrm3uqwCGPFem8KIdRAuQYCSY9D%5C%2F2v%5C%2FhFUNXcDgIfU079T4gK2ZfT2jCIlFbZ6BxSW8WZJzOrZV0n8sLBf51kGiuQmOQPX2JjJmOx4HxpoCZHGs6nSAp%5C%2FfKD760TcCjs0%2BvB9UjApsqSdIN%2BwMzPiwoT2Kbom8qUUmlsF00GqOB1TK0haffuU1lBATdivazk65BzQlsUXpBW%5C%2FzF1Ik0pFlbqOA7g87oZcNskNY2OglrenfDFo7Njhx9viGfzMA%5C%2FdRS9AnqysjgHRwa08GK02dONhLQykvGI9kC1sHOVJ%2BoK9jRsqU2oi21yrNnwgqGse8Vaa7uspDEVBDYg%5C%2FJ122kdbYnrZS6w9UGq4Mba6lOmDH%2B3CPC72WWfqILu0AHbk3b8%2Bnsj8Yioy%5C%2FRj6N3wg0ocld9QGwX9VySatt%2B9KQ266l0WbiDFBdKCD8JaM37bVhGoCasQnYjKLJsvcCxXK%5C%2FzVGvAY5lWxGukuu%5C%2FayuhXOo4YJptmA7poaU2ZPP6yCJGknjMUzwwK4IjRzbPIcgBDc2Xlcs3jN0mh3YxOr5hC8Q89zr05BTsL0XU0mGkYA6C0FErtQT27HcVkTi3lw8zNkQYNX2LO3yjlVo%2BhvdIxcY3bZ48x3ibO9RhfQmLMgSLxOL9gBc8%5C%2FE6L5nPj%2B1VlxSKaTfyXUj0dqfYkhNO%2BNXuUq%2BUKeM3jhwrqydmIvYZnXRgbEAIoQLqi42rVVbqDEwR1ctD%2BMEtg%5C%2Fzvj2Oaa3s3nV%2BvMlmmCUSEyHAvoJDRASlp1zzXdEnDgOYFrx12jc7pEtzzrb22U3laNMHN9B3WeQIqfxRrEWSfT4Pi%5C%2FPaOMFvM5oF7OiA5ROHMHn24Ze3LluxS3VXhN1N7bnA02bisKuEzftQ0B28OJXDooDQLYsv4fKT8nD5s6SRMWV2ZJ%2BpG5izjpbZsTvlIAx5cdIr53Cd59ozP%2BfA83bFOSimQxxvwFxh8rwEOUUHFDCXcL%2BojCoFORbQhh6NLOXFv6Z2UKuMx2j5cgvTRJRKbhfCHlF0%2Bx%5C%2FduxVxFCJvfGnRpu6%5C%2Fq21zf2TXcRvXcd350%2BKVdJtyRGxfNDKEBwSoSC9Rnx5orkJLzsbho8qUSpILc4uMXmzXbXiXgo0I%2B9qnfGI0HYr5M3aH0m4QqIYPxpR5z3oPMNjzwftEKrQ%2BSD8XkY%2BB6NX6rdr92EKPMVyFX9S8W7uagLDXMY4UL8%5C%2FZDeIY%2B58lQSoFiyic5ssmS4YXAi1qGMfFRSbaXh%2BBIY4zKziEImqwMDWXU2rx0u0TftVV11UvQdDFVOb6ekqlz2s7PoWXLgJ8zdOLYQel95Dn5uiE7BLFFdDQvyiX2lIzE5I32lSDSyo08oGjI0tsGtzIw44DtYH8r3VfOsjv6MtrtRVesxAAfmtXuuxzLe3F1Sbv2g3cdaPzzTSEUHqDFoo20%2BT%5C%2F8b9MQZIhT8%5C%2FRcZo08njcAatDFmGXZg2I5Fw0SoyR%2B6plciz0cLIcxpNmpZDXVY3rRTGFf3Yj85svRxDuw%2B0vactOxpkXTHHntkBnFl6XTEM5XuxxS02fd3BsbH8OILZ0aO2lkui0yKMlpTrzIrbL8%5C%2FqxQrxoPdoFt6zOsOi2Xlbdyuz58QiVXl%5C%2FlQ2x2DD3VtoZzzPe2OM%2BUpsxzDzb7Yh%5C%2FvSrz9PK%2BVtg%5C%2Fzrui238rlMFxzPrbVXUB0bzE6PzEi3luzFzb2%2Bmole1z00rbxF%5C%2FqlQzz2%2B8%2BVHODFzok2X8%2Bl66mzPxZVXM5%2BbrxLDK353hqRCrbIXkKlpMzzcFiVWo%5C%2F2Qrz08K%2BVtg%5C%2Fzdzi2D971kKlz8riVXl%5C%2FTFrzJPdpm3TYzQri22U309szWDFb%5C%2FlVqlbzz2rD%2BV3g%5C%2Fzz%2Bi2xyRHDOzs8fiV2E%5C%2FlMFx2r1jwpTESbri2XU3l1zxzHxb20m%5C%2F%5C%2Fz2x2PhKEJCMz%2BsiT1lvlpTzzDxNV2EA3Srzirj%2BV3g%5C%2Fzx%2Bi22U3l6Mxzo5bozh%5C%2Fmbux2PD3VRY%5C%2FzxsxX2M3DFMxzPrSVfoqlQD62xW3EZzfzFrb22l6lp1rgwrbPf7qlQzz2%2Bk%2BV3paFzDx2O83l6TzMPriVAYqYbDsmDc%2BV3g%5C%2FAFrbAs7HtnuxzP2bVjCql9QzXIoETphqzzxN2Xl6lphyz8riVXl%5C%2F7zrzNcn4EeLFzFrb22lqlp11zDDEV2lqlbzz%5C%2FIc3gq%5C%2FvRbri22U3VXQzsDoBVPmqlQrz2DD096TuzWObsXILlp1zzcFiVqTRcboBLDc%2BV3g%5C%2FFzrbLDRvlQsozPrbVXUs7FogXCY3d3Jjzzzb22kKl6TdzDsiVFE%5C%2Fqz%2Bz%2BDw%2BVtg%5C%2FzDbi2mQ4vGk2ySXiV2E%5C%2FlEXx2Hm3ZGk%5C%2Fvz2i2X8%2Bl1MxzdQvVuhqlQzz2cI%2BVHBnz4SV2X8dMpLAzPDOVBn%5C%2Fszrx2DD35thqyfzcX2MwU3Sxz8rb8%2Bv%5C%2Fuzzk2HD%2BVthqzzoo2Xesvb3zzob0V2l%5C%2FlQDA2Pc37LYq1zri2XU3lGsxzdtVVZEqlQrz2Do4EpgfvFzbdOY4lp1zzdTiVusPfQDw2Ic%2BV6ltAFrbChc5WMbxzPzbVtJqlyjIXDztn6hqzzzb2O8%2Bl6TzDDrbMbotl%5C%2Frn2Pc3VtgGzFx4aTl3KgbozPrbVXUhNbDzXzBKES3zzFrI2XUylphozASbwdJqlQzz2nY%2BVx3P4QDCL183U6OzmPrbdxZAAFoK28c%2BV3g%5C%2FHzrbdue7vGkSxIriI1E%5C%2FvFrzxPxsBt6qzFri22U3vG1z8ccGE%2BQtnbrx2Pc3U3hqpzo02XePl3MxzDzbQTm%5C%2FBfDjXDzG43h%5C%2FzbzbX18%2BKWbKzzOiV2lBUQxK2PxSLPXvz4bN2X8%2Bl6TMzPD3VnjqvN1o2Pc3Vtk4zFDJXoyGleuKzPzbVXlulFzz2DDPS6g%5C%2Fkb2bYOamlp1zznbiVB0epqrO2Pc3VtkrzFxLJ%2BhKtCuxzPuvVjWqlVUr2Do9Y3hqzzxe2XMTv5yzzKzIV2l%5C%2FlQzN2PxzFAZfz%2BfV2X8%2Bl6T9zPzHEKo%5C%2FDQ2x2P82I2Y4zKQiR1M%5C%2Fl3MxzDzbE%2Bl%5C%2FfroiXPz8%2Bth%5C%2FzzzbB18%2BXUKAzPD%5C%2FIXVqlbzzlPc%2BVD%2B4kqPI1wba7X53xl82VUpji2Jpo20oiliCyCPTD7BJqZrUJfK4%5C%2FXdZquSVwqs1GbtGu1FD5KK43fxaT07EUc23qJIRpjswLmoVi%2B9PLPVvz7GhewXhnT0U2N0MBTwRR%2BMqB%2Bz46ZENS7e9sLe1WwsVK89LaYSxy6z56uXQIxKfpqQ0FyGurzHe5QQ0v8LTbIWfmWFEq1Ub2c9RVwYfsX7MUcIAbleZeCccXNxUp96PIYMswQHkN%2BeqEibwsmIYJCjhAslMV7LA3coSRzuS1sPY37vlefTebpd4nzhBOm7KIIe7fn17FskrAnJvO%2Bn%5C%2FpqkwvkTzBrkZERJtkPDOduKnP24bUqWXUa3EEFvZ6gFpSa4qGZCzeBB%5C%2FfGEtxJesCu72tWtYA6IA%5C%2FYOWP9VyVFsE4CGZ95CrbZpRQIeFh3ILdYIMspTHeToBG1uzV%2BmTINkl9CizN7yGSc7COYWzYn%2BxN9OW7hmo4h7L6tVcLPI5N8wv%2BbbUC2Vz1oZVDpHJ%2BdZPyy28Pm5zZCdQFdvL%2BQsjVY0WD53ZIatccZH0iPyPgggn3992Wn%5C%2FXmN4TAwsN1iMckz%5C%2Fwxr4nP%2BnqMuD3ghsuimIt5kg6Ei1s2lD%5C%2Fo99Rhm00m%2BTq%5C%2FcN%2BIO4y0m5llcPU3MbgFXsJhyuOBaOd8KHNQ7czp30oMzM%3D%22%2C%22umidtoken%22%3A%22T2gAaiSNjjeU6VQUQvMrWoSrYMAjIMiJisFmHSX_A-9Vcl_wwFRnHwH8HHdljFRGMqs%3D%22%7D&type=originaljson&asac=2A23C08X4VP4SVOKFBKCA9",
    method: "GET",
    headers: p7
  };
  return xZ(px => {
    xc(p9, async (pu, pP, pF) => {
      if (!pu && pP.statusCode == 200) {
        try {
          const pR = JSON.parse(pF);
          _0x25dc12 = JSON.parse(pR.data.data);
          px(_0x25dc12);
        } catch (pD) {
          console.log(pF);
          px(null);
        }
      } else {
        px(null);
      }
    });
  });
}
async function xv(p, xA, xb) {
  let p6 = await xU(p, xA);
  if (p6) {
    let p8 = await xa(p, xA, 1);
    console.log("延迟10秒");
    await xu(10);
    console.log("再延迟15秒");
    await xu(15);
    p8 = await xQ(p, xA, 1);
    console.log("再延迟15秒就稳了");
    await xu(15);
    let p9 = await xl(p, "2");
    _0x10e546 = await xH(p, p6, xA, xb);
    if (_0x10e546 == 3) {
      console.log("玩连连看领取300乐园币成功，进入饿了么记录查看");
    } else {
      _0x10e546 == 2 ? console.log("只过了第二关，重新运行一遍脚本就能成功") : console.log("本次运行不正常，但我运行时能成功");
    }
  }
  let p7 = await xy(p, "3");
  return;
}
async function xk(p) {
  const p2 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"login\"}",
    bizMethod: "login"
  };
  const p3 = await xr(p, p2);
  return p3;
}
async function xd(p) {
  const p2 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"gameSuccess\"}",
    bizMethod: "gameSuccess"
  };
  const p3 = await xr(p, p2);
  return p3;
}
async function xL(p, xA) {
  const p6 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + xA + "\",\"type\":1}}",
    bizMethod: "getPassPrize"
  };
  const p7 = await xr(p, p6);
  return p7;
}
async function xm(p) {
  const p4 = await xk(p);
  const p5 = p4.passConf;
  const p6 = [];
  for (let px of Object.values(p5)) {
    p6.push(px.passNum);
  }
  var p7 = await xd(p);
  var p8 = p7.info.todayPass;
  var p9 = 0;
  while (p8 <= p6[p6.length - 1]) {
    p7 = await xd(p);
    p8 = p7.info.todayPass;
    console.log("欢乐倒水第" + p8 + "关闯关成功");
    if (p6.includes(p8)) {
      p9 = p6.indexOf(p8) + 1;
      const pp = await xL(p, p9);
      console.log("获得：" + pp.goldnum + "乐园币");
    }
  }
  console.log("快乐倒水闯关完成");
}
async function xo() {
  await xx(xF, 1);
  const p3 = x8();
  for (let p4 = 0; p4 < p3.length; p4++) {
    xV = 0;
    xi = 0;
    xe = 0;
    xX = 0;
    const p5 = p3[p4];
    if (!p5) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let p6 = await x7(p5, p4);
        if (!p6) {
          continue;
        }
        let p7 = await x9(p6);
        if (!p7.username) {
          console.log("第", p4 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const p8 = p7.user_id;
        await xp(xF, p8, xP);
        console.log("******开始【饿了么账号", p4 + 1, "】", p7.username, "*********");
        console.log("开始签到");
        await xn(p6);
        console.log("防止黑号延时3-4秒");
        await xu(xN(3, 4));
        console.log("开始抽奖");
        await xG(p6);
        console.log("防止黑号延时3-4秒");
        await xu(xN(3, 4));
        console.log("开始倒水");
        await xm(p6);
        console.log("防止黑号延时10-15秒");
        await xu(xN(10, 15));
      } catch (p9) {
        console.log(p9);
      }
    }
  }
  process.exit(0);
}
!(async () => {
  await xo();
})().catch(p => {
  xY.log(p);
}).finally(() => {
  xY.done({});
});
function xN(p, xA) {
  return Math.floor(Math.random() * (xA - p + 1) + p);
}
function xC(p, xA) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class p5 {
    constructor(p6) {
      this.env = p6;
    }
    send(p6, p7 = "GET") {
      p6 = "string" == typeof p6 ? {
        url: p6
      } : p6;
      let pc = this.get;
      "POST" === p7 && (pc = this.post);
      return new Promise((pu, pP) => {
        pc.call(this, p6, (pV, pi, pe) => {
          pV ? pP(pV) : pu(pi);
        });
      });
    }
    get(p6) {
      return this.send.call(this.env, p6);
    }
    post(p6) {
      return this.send.call(this.env, p6, "POST");
    }
  }
  return new class {
    constructor(p6, p7) {
      this.name = p6;
      this.http = new p5(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, p7);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(p6, p7 = null) {
      try {
        return JSON.parse(p6);
      } catch {
        return p7;
      }
    }
    toStr(p6, p7 = null) {
      try {
        return JSON.stringify(p6);
      } catch {
        return p7;
      }
    }
    getjson(p6, p7) {
      let p9 = p7;
      const px = this.getdata(p6);
      if (px) {
        try {
          p9 = JSON.parse(this.getdata(p6));
        } catch {}
      }
      return p9;
    }
    setjson(p6, p7) {
      try {
        return this.setdata(JSON.stringify(p6), p7);
      } catch {
        return false;
      }
    }
    getScript(p6) {
      return new Promise(p8 => {
        const pp = {
          url: p6
        };
        this.get(pp, (pZ, pc, pu) => p8(pu));
      });
    }
    runScript(p6, p7) {
      return new Promise(pp => {
        let pe = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        pe = pe ? pe.replace(/\n/g, "").trim() : pe;
        let pX = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        pX = pX ? 1 * pX : 20;
        pX = p7 && p7.timeout ? p7.timeout : pX;
        const [pR, pD] = pe.split("@");
        const pE = {
          url: "http://" + pD + "/v1/scripting/evaluate",
          body: {
            script_text: p6,
            mock_type: "cron",
            timeout: pX
          },
          headers: {
            "X-Key": pR,
            Accept: "*/*"
          }
        };
        this.post(pE, (pW, pG, pn) => pp(pn));
      }).catch(pp => this.logErr(pp));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const pP = this.path.resolve(this.dataFile);
        const pF = this.path.resolve(process.cwd(), this.dataFile);
        const pf = this.fs.existsSync(pP);
        const pV = !pf && this.fs.existsSync(pF);
        if (!pf && !pV) {
          return {};
        }
        {
          const pi = pf ? pP : pF;
          try {
            return JSON.parse(this.fs.readFileSync(pi));
          } catch (pe) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const pu = this.path.resolve(this.dataFile);
        const pP = this.path.resolve(process.cwd(), this.dataFile);
        const pF = this.fs.existsSync(pu);
        const pf = !pF && this.fs.existsSync(pP);
        const pV = JSON.stringify(this.data);
        pF ? this.fs.writeFileSync(pu, pV) : pf ? this.fs.writeFileSync(pP, pV) : this.fs.writeFileSync(pu, pV);
      }
    }
    lodash_get(p6, p7, p8) {
      const pc = p7.replace(/\[(\d+)\]/g, ".$1").split(".");
      let pu = p6;
      for (const pP of pc) if (pu = Object(pu)[pP], undefined === pu) {
        return p8;
      }
      return pu;
    }
    lodash_set(p6, p7, p8) {
      return Object(p6) !== p6 ? p6 : (Array.isArray(p7) || (p7 = p7.toString().match(/[^.[\]]+/g) || []), p7.slice(0, -1).reduce((pf, pV, pi) => Object(pf[pV]) === pf[pV] ? pf[pV] : pf[pV] = Math.abs(p7[pi + 1]) >> 0 == +p7[pi + 1] ? [] : {}, p6)[p7[p7.length - 1]] = p8, p6);
    }
    getdata(p6) {
      let pZ = this.getval(p6);
      if (/^@/.test(p6)) {
        const [, pc, pu] = /^@(.*?)\.(.*?)$/.exec(p6);
        const pP = pc ? this.getval(pc) : "";
        if (pP) {
          try {
            const pF = JSON.parse(pP);
            pZ = pF ? this.lodash_get(pF, pu, "") : pZ;
          } catch (pf) {
            pZ = "";
          }
        }
      }
      return pZ;
    }
    setdata(p6, p7) {
      let pf = false;
      if (/^@/.test(p7)) {
        const [, pV, pi] = /^@(.*?)\.(.*?)$/.exec(p7);
        const pe = this.getval(pV);
        const pX = pV ? "null" === pe ? null : pe || "{}" : "{}";
        try {
          const pR = JSON.parse(pX);
          this.lodash_set(pR, pi, p6);
          pf = this.setval(JSON.stringify(pR), pV);
        } catch (pD) {
          const pE = {};
          this.lodash_set(pE, pi, p6);
          pf = this.setval(JSON.stringify(pE), pV);
        }
      } else {
        pf = this.setval(p6, p7);
      }
      return pf;
    }
    getval(p6) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(p6) : this.isQuanX() ? $prefs.valueForKey(p6) : this.isNode() ? (this.data = this.loaddata(), this.data[p6]) : this.data && this.data[p6] || null;
    }
    setval(p6, p7) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(p6, p7) : this.isQuanX() ? $prefs.setValueForKey(p6, p7) : this.isNode() ? (this.data = this.loaddata(), this.data[p7] = p6, this.writedata(), true) : this.data && this.data[p7] || null;
    }
    initGotEnv(p6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      p6 && (p6.headers = p6.headers ? p6.headers : {}, undefined === p6.headers.Cookie && undefined === p6.cookieJar && (p6.cookieJar = this.ckjar));
    }
    get(p6, p7 = () => {}) {
      p6.headers && (delete p6.headers["Content-Type"], delete p6.headers["Content-Length"]);
      const pi = {
        "X-Surge-Skip-Scripting": false
      };
      const pe = {
        hints: false
      };
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (p6.headers = p6.headers || {}, Object.assign(p6.headers, pi)), $httpClient.get(p6, (pX, pR, pD) => {
        !pX && pR && (pR.body = pD, pR.statusCode = pR.status);
        p7(pX, pR, pD);
      })) : this.isQuanX() ? (this.isNeedRewrite && (p6.opts = p6.opts || {}, Object.assign(p6.opts, pe)), $task.fetch(p6).then(pX => {
        const {
          statusCode: pn,
          statusCode: pg,
          headers: pU,
          body: pa
        } = pX;
        const pQ = {
          status: pn,
          statusCode: pg,
          headers: pU,
          body: pa
        };
        p7(null, pQ, pa);
      }, pX => p7(pX))) : this.isNode() && (this.initGotEnv(p6), this.got(p6).on("redirect", (pX, pR) => {
        try {
          if (pX.headers["set-cookie"]) {
            const pa = pX.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            pa && this.ckjar.setCookieSync(pa, null);
            pR.cookieJar = this.ckjar;
          }
        } catch (pQ) {
          this.logErr(pQ);
        }
      }).then(pX => {
        const {
          statusCode: pn,
          statusCode: pg,
          headers: pU,
          body: pa
        } = pX;
        const pQ = {
          status: pn,
          statusCode: pg,
          headers: pU,
          body: pa
        };
        p7(null, pQ, pa);
      }, pX => {
        const {
          message: pD,
          response: pE
        } = pX;
        p7(pD, pE, pE && pE.body);
      }));
    }
    post(p6, p7 = () => {}) {
      const pi = {
        "X-Surge-Skip-Scripting": false
      };
      if (p6.body && p6.headers && !p6.headers["Content-Type"] && (p6.headers["Content-Type"] = "application/x-www-form-urlencoded"), p6.headers && delete p6.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (p6.headers = p6.headers || {}, Object.assign(p6.headers, pi));
        $httpClient.post(p6, (pe, pX, pR) => {
          !pe && pX && (pX.body = pR, pX.statusCode = pX.status);
          p7(pe, pX, pR);
        });
      } else {
        const pe = {
          hints: false
        };
        if (this.isQuanX()) {
          p6.method = "POST";
          this.isNeedRewrite && (p6.opts = p6.opts || {}, Object.assign(p6.opts, pe));
          $task.fetch(p6).then(pX => {
            const {
              statusCode: pW,
              statusCode: pG,
              headers: pn,
              body: pg
            } = pX;
            const pU = {
              status: pW,
              statusCode: pG,
              headers: pn,
              body: pg
            };
            p7(null, pU, pg);
          }, pX => p7(pX));
        } else {
          if (this.isNode()) {
            this.initGotEnv(p6);
            const {
              url: pX,
              ...pR
            } = p6;
            this.got.post(pX, pR).then(pD => {
              const {
                statusCode: pU,
                statusCode: pa,
                headers: pQ,
                body: pM
              } = pD;
              const pH = {
                status: pU,
                statusCode: pa,
                headers: pQ,
                body: pM
              };
              p7(null, pH, pM);
            }, pD => {
              const {
                message: pG,
                response: pn
              } = pD;
              p7(pG, pn, pn && pn.body);
            });
          }
        }
      }
    }
    time(p6, p7 = null) {
      const pf = p7 ? new Date(p7) : new Date();
      let pV = {
        "M+": pf.getMonth() + 1,
        "d+": pf.getDate(),
        "H+": pf.getHours(),
        "m+": pf.getMinutes(),
        "s+": pf.getSeconds(),
        "q+": Math.floor((pf.getMonth() + 3) / 3),
        S: pf.getMilliseconds()
      };
      /(y+)/.test(p6) && (p6 = p6.replace(RegExp.$1, (pf.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let pi in pV) new RegExp("(" + pi + ")").test(p6) && (p6 = p6.replace(RegExp.$1, 1 == RegExp.$1.length ? pV[pi] : ("00" + pV[pi]).substr(("" + pV[pi]).length)));
      return p6;
    }
    msg(p6 = p, p7 = "", p8 = "", p9) {
      const pe = pX => {
        if (!pX) {
          return pX;
        }
        if ("string" == typeof pX) {
          return this.isLoon() ? pX : this.isQuanX() ? {
            "open-url": pX
          } : this.isSurge() ? {
            url: pX
          } : undefined;
        }
        if ("object" == typeof pX) {
          if (this.isLoon()) {
            let pQ = pX.openUrl || pX.url || pX["open-url"];
            let pM = pX.mediaUrl || pX["media-url"];
            const pH = {
              openUrl: pQ,
              mediaUrl: pM
            };
            return pH;
          }
          if (this.isQuanX()) {
            let pr = pX["open-url"] || pX.url || pX.openUrl;
            let pl = pX["media-url"] || pX.mediaUrl;
            const ph = {
              "open-url": pr
            };
            ph["open-url"] = pr;
            ph["media-url"] = pl;
            return ph;
          }
          if (this.isSurge()) {
            let py = pX.url || pX.openUrl || pX["open-url"];
            const pv = {
              url: py
            };
            return pv;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(p6, p7, p8, pe(p9)) : this.isQuanX() && $notify(p6, p7, p8, pe(p9))), !this.isMuteLog) {
        let pX = ["", "==============📣系统通知📣=============="];
        pX.push(p6);
        p7 && pX.push(p7);
        p8 && pX.push(p8);
        console.log(pX.join("\n"));
        this.logs = this.logs.concat(pX);
      }
    }
    log(...p6) {
      p6.length > 0 && (this.logs = [...this.logs, ...p6]);
      console.log(p6.join(this.logSeparator));
    }
    logErr(p6, p7) {
      const pP = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      pP ? this.log("", "❗️" + this.name + ", 错误!", p6.stack) : this.log("", "❗️" + this.name + ", 错误!", p6);
    }
    wait(p6) {
      return new Promise(p7 => setTimeout(p7, p6));
    }
    done(p6 = {}) {
      const pF = new Date().getTime();
      const pf = (pF - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + pf + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(p6);
    }
  }(p, xA);
}
const xY = new xC("饿了么乐园币");