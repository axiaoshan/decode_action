//Sat Jan 11 2025 16:25:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function minsDiff(a) {
  return parseInt((new Date() - new Date(a)) / 60000);
}
function copy(a) {
  const b = $("#copy");
  b.text(a).show();
  b.select();
  document.execCommand("copy");
  b.hide();
  swal({
    title: "\u590D\u5236\u6210\u529F",
    icon: "success",
    timer: 1000,
    buttons: false
  });
}
function load(a) {
  a.status === 1 && document.getElementById("apple").insertAdjacentHTML("afterbegin", `<div class="col-lg-4 col-md-6 col-sm-12 col-xxl-3 mb-4"><div class="border-success card mb-3"><div class="border-success bg-transparent border-bottom-0 card-header"><h5 class="my-0 text-success"><i class="bi bi-check2-all me-3"></i>${a.username}<span class=float-end><i class="fi fi-${{
    "\u7F8E\u56FD": "us",
    "\u6FB3\u5927\u5229\u4E9A": "au",
    "\u4E2D\u56FD\u5927\u9646": "cn",
    "\u53F0\u6E7E": "tw",
    "\u9999\u6E2F": "hk",
    "\u97E9\u56FD": "kr",
    "\u65E5\u672C": "jp",
    "\u5370\u5EA6\u5C3C\u897F\u4E9A": "id",
    "\u571F\u8033\u5176": "tr",
    "\u8D8A\u5357": "vn",
    "\u6C99\u7279\u963F\u62C9\u4F2F": "sa",
    "\u963F\u5C14\u5DF4\u5C3C\u4E9A": "al",
    "\u52A0\u62FF\u5927": "ca",
    "\u6FB3\u95E8": "mo"
  }[a.country] || "un"} fis rounded-circle"></i>${a.country || ""}</span></h5></div><div class=card-body><p class=card-text>检测时间：${a.time}<code class=float-end>${minsDiff(a.time)}分钟前</code></p><button class="btn btn-outline-secondary waves-effect"onclick="copy('${a.username}')">复制帐号</button><button class="btn btn-outline-secondary waves-effect"onclick="copy('${a.password}')">复制密码</button></div></div></div>`);
}
function initialize(a) {
  document.querySelector("main").insertAdjacentHTML("beforeend", "<div class=\"row justify-content-center\"><div class=\"col-md-8\"><hr class=\"devider devider-dotted\"></div><div class=\"col-md-8\"><p>Designed to protect your Internet traffic.</p><p><a href=\"https://otakuyun.net/\" target=\"blank\">\u4E00\u9375\u63A5\u5165\uFF0C\u93C8\u63A5\u5168\u7403\uFF01</a></p></div></div><p class=\"mb-3 text-body-secondary\">2019~2024\xA9&nbsp;<a href=\"https://otakuyun.net/\" target=\"blank\">\u5FA1\u5B85\u4E91</a></p>");
  document.getElementById("apple").insertAdjacentHTML("beforebegin", `<div class="mb-3"><a class="btn btn-outline-primary btn-lg"href="https://ssr.otakuyun.net/register?aff=${a || "qJD41GJv"}"target="_blank">购买高速小火箭节点🚀</a></div>`);
  a = atob("YUhSMGNITTZMeTlwYldkdllpNXphR0V1WTNndk1qUXpObVZrTW1WaE56VmxPR0UwWVRNM05tWTBaRFkyTURJMllXVmpNbVE9CmFIUjBjSE02THk5M1puUTRaeTV6YUdFdVkzZ3ZabU5pWVRJNU1qZ3lOV0pqTW1Zd1lqVTNOV1ZoWm1GbU9EUTNOMlkyWW1NPQ").split("\n").map(e => $.getJSON(atob(e)).then(c => {
    c.forEach(d => load(d));
  }));
  const b = atob("YUhSMGNITTZMeTlvWlhoeVp5NXphR0V1WTNndllqSmlNekF4WW1ZM1l6QTRNVGxpWm1NNVpqVTNaV1V3WldSbE5qVmpaVFEKYUhSMGNITTZMeTgzYkhVek5pNXphR0V1WTNndk5HWTNZalF6WmpJME1qWmlaRE5oTm1Ga09HTXpZakkyTVdVMk9UVm1OMlkKYUhSMGNITTZMeTh6Wm1NNVpTNXphR0V1WTNndk56SXhaRE0wWkRWbE4yVTVPVGhqWmpGbU9UTmhZV0U0TjJWbFlUUTVORE0KYUhSMGNITTZMeTh5TmpoMmJ5NXphR0V1WTNndlpXRTBZVFV6TlRJd01HSmxaVFl4WlROaU4yWXhZekZpTlRSaVptWTNZek0KYUhSMGNITTZMeTl0ZVdWaFp5NXphR0V1WTNndk56Z3laREF4WXpsbFltWTROemN6T1RnMk56UXpNek5sWkdFelpqY3hZVFEKYUhSMGNITTZMeTluTW5sdU9TNXphR0V1WTNndk16Tm1OemsxTldFMU5qSTBZamd3T0ROaVpUVXhOamcxWkRRNU5UVmtOakUKYUhSMGNITTZMeTlzTWpZMk5pNXphR0V1WTNndk5tRTRNVGhrTURWaFpUSXpOemMxTUROaFpqSTJNMlU0TnpkbE1XRTVNV1UKYUhSMGNITTZMeTlrWVRGd2FDNXphR0V1WTNndk16ZzRNRFJrTXpoa1pEaGxNbU14T0RVMFpXVXhNR1ZsTXpGbE1qWTJaV1kKYUhSMGNITTZMeTk1T0djelp5NXphR0V1WTNndk5HWTFOelUxT0RFeFl6WmhOVGcwTW1ZM01qZzNOREZtWkRrd1pUSTNaakEKYUhSMGNITTZMeTlqWmpNemJTNXphR0V1WTNndk1XRmhaVE5sTlRrME5HSTFabVUyTlRBMlpqRmpZek13TldJellUQmlPVE0KYUhSMGNITTZMeTlqZUdJNWNpNXphR0V1WTNndk5EaGhNall6TTJVd05XUTFPRE13TlRoak1qRmhNRE16WWpReVpUbGlORGcKYUhSMGNITTZMeTlvTnpGMmJpNXphR0V1WTNndk9EaGhZamd3TWpReE5qWmxPREk1WXprNVl6QTBPVFUxWVRRM1ptVTNNMk0KYUhSMGNITTZMeTh5TkhkcmJDNXphR0V1WTNndlpHRXlPRE5rTVdKaE5XUTJNalJqTkdGaU1UVTBOakl5TnpOaU5HTXhOV00KYUhSMGNITTZMeTh4Wm1Ka2JTNXphR0V1WTNndk9ETmtNVFZpWVRJd01qRmxNMlZtT0RWbE5EaGtNemRrTmpaa05UQTNORFEKYUhSMGNITTZMeTk0YUhSMmRpNXphR0V1WTNndllqUmxPVE5pTkRNM1pqVTRZV00yTjJNeVpqRm1ZemsxWTJaaU1USXlaR0kKYUhSMGNITTZMeTlpWTNReVpDNXphR0V1WTNndk56RTJOVFV5WWpOa1l6a3hZek13TXprM05HRmhNR000TkRNeFpXUTVNRFUKYUhSMGNITTZMeTg1WW1obk9DNXphR0V1WTNndk9XWmpOekJsWW1JellXTTFPVFprWWpSbU1HTTROMlZqTW1ZME56UmxORGcKYUhSMGNITTZMeTlvTWpkbmRDNXphR0V1WTNndk5qY3hZMkpsWkRNNE5qVXpOekUxT1RVMlpqZzVNREJoTm1FMFlUQTRPREUKYUhSMGNITTZMeTkzYTJwNk1TNXphR0V1WTNndllqVTFaakV3TURVMk1XRmhZbUk0WmpWaE1URTNNVFF4TURBeU4yWTRNRFUKYUhSMGNITTZMeTgyYjNKaGFDNXphR0V1WTNndllUSXlOREprWm1FeE1HWTRPVGhpTVdRek5HRmxNVFk1T1RFeE5XUTBPR1EKYUhSMGNITTZMeTgzYm01MllTNXphR0V1WTNndll6RmxaalZoWmprM1l6azRNVEJqWVdFNU16aGpabU0xTURFek1tTTRaREE").split("\n").map(async e => {
    try {
      const c = await fetch(atob(e));
      if (c.ok) {
        const d = (await c.text()).match(/ad\s*=\s*'([^']+)'/);
        d && JSON.parse(d[1]).forEach(f => load(f));
      }
    } catch (c) {}
  });
  Promise.all([...a, ...b]).finally(() => {
    document.getElementById("loading").remove();
  });
}
window.X = initialize;