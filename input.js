function minsDiff(a) {
    return parseInt((new Date - new Date(a)) / 6E4)
}

function copy(a) {
    const b = $("#copy");
    b.text(a).show();
    b.select();
    document.execCommand("copy");
    b.hide();
    swal({
        title: "复制成功",
        icon: "success",
        timer: 1E3,
        buttons: !1
    })
}

function load(a) {
    a.status === 1 && document.getElementById("apple").insertAdjacentHTML("afterbegin", `<div class="col-lg-4 col-md-6 col-sm-12 col-xxl-3 mb-4"><div class="border-success card mb-3"><div class="border-success bg-transparent border-bottom-0 card-header"><h5 class="my-0 text-success"><i class="bi bi-check2-all me-3"></i>${a.username}<span class=float-end><i class="fi fi-${({"美国":"us","澳大利亚":"au","中国大陆":"cn","台湾":"tw","香港":"hk",
"韩国":"kr","日本":"jp","印度尼西亚":"id","土耳其":"tr","越南":"vn","沙特阿拉伯":"sa","阿尔巴尼亚":"al","加拿大":"ca","澳门":"mo"})[a.country]||"un"} fis rounded-circle"></i>${a.country||""}</span></h5></div><div class=card-body><p class=card-text>检测时间：${a.time}<code class=float-end>${minsDiff(a.time)}分钟前</code></p><button class="btn btn-outline-secondary waves-effect"onclick="copy('${a.username}')">复制帐号</button><button class="btn btn-outline-secondary waves-effect"onclick="copy('${a.password}')">复制密码</button></div></div></div>`)
}

function initialize(a) {
    document.querySelector("main").insertAdjacentHTML("beforeend", '<div class="row justify-content-center"><div class="col-md-8"><hr class="devider devider-dotted"></div><div class="col-md-8"><p>Designed to protect your Internet traffic.</p><p><a href="https://otakuyun.net/" target="blank">一鍵接入，鏈接全球！</a></p></div></div><p class="mb-3 text-body-secondary">2019~2024©&nbsp;<a href="https://otakuyun.net/" target="blank">御宅云</a></p>');
    document.getElementById("apple").insertAdjacentHTML("beforebegin", `<div class="mb-3"><a class="btn btn-outline-primary btn-lg"href="https://ssr.otakuyun.net/register?aff=${a||"qJD41GJv"}"target="_blank">购买高速小火箭节点🚀</a></div>`);
    a = atob("YUhSMGNITTZMeTlwYldkdllpNXphR0V1WTNndk1qUXpObVZrTW1WaE56VmxPR0UwWVRNM05tWTBaRFkyTURJMllXVmpNbVE9CmFIUjBjSE02THk5M1puUTRaeTV6YUdFdVkzZ3ZabU5pWVRJNU1qZ3lOV0pqTW1Zd1lqVTNOV1ZoWm1GbU9EUTNOMlkyWW1NPQ").split("\n").map(e => $.getJSON(atob(e)).then(c => {
        c.forEach(d => load(d))
    }));
    const b = atob("YUhSMGNITTZMeTlvWlhoeVp5NXphR0V1WTNndllqSmlNekF4WW1ZM1l6QTRNVGxpWm1NNVpqVTNaV1V3WldSbE5qVmpaVFEKYUhSMGNITTZMeTgzYkhVek5pNXphR0V1WTNndk5HWTNZalF6WmpJME1qWmlaRE5oTm1Ga09HTXpZakkyTVdVMk9UVm1OMlkKYUhSMGNITTZMeTh6Wm1NNVpTNXphR0V1WTNndk56SXhaRE0wWkRWbE4yVTVPVGhqWmpGbU9UTmhZV0U0TjJWbFlUUTVORE0KYUhSMGNITTZMeTh5TmpoMmJ5NXphR0V1WTNndlpXRTBZVFV6TlRJd01HSmxaVFl4WlROaU4yWXhZekZpTlRSaVptWTNZek0KYUhSMGNITTZMeTl0ZVdWaFp5NXphR0V1WTNndk56Z3laREF4WXpsbFltWTROemN6T1RnMk56UXpNek5sWkdFelpqY3hZVFEKYUhSMGNITTZMeTluTW5sdU9TNXphR0V1WTNndk16Tm1OemsxTldFMU5qSTBZamd3T0ROaVpUVXhOamcxWkRRNU5UVmtOakUKYUhSMGNITTZMeTlzTWpZMk5pNXphR0V1WTNndk5tRTRNVGhrTURWaFpUSXpOemMxTUROaFpqSTJNMlU0TnpkbE1XRTVNV1UKYUhSMGNITTZMeTlrWVRGd2FDNXphR0V1WTNndk16ZzRNRFJrTXpoa1pEaGxNbU14T0RVMFpXVXhNR1ZsTXpGbE1qWTJaV1kKYUhSMGNITTZMeTk1T0djelp5NXphR0V1WTNndk5HWTFOelUxT0RFeFl6WmhOVGcwTW1ZM01qZzNOREZtWkRrd1pUSTNaakEKYUhSMGNITTZMeTlqWmpNemJTNXphR0V1WTNndk1XRmhaVE5sTlRrME5HSTFabVUyTlRBMlpqRmpZek13TldJellUQmlPVE0KYUhSMGNITTZMeTlqZUdJNWNpNXphR0V1WTNndk5EaGhNall6TTJVd05XUTFPRE13TlRoak1qRmhNRE16WWpReVpUbGlORGcKYUhSMGNITTZMeTlvTnpGMmJpNXphR0V1WTNndk9EaGhZamd3TWpReE5qWmxPREk1WXprNVl6QTBPVFUxWVRRM1ptVTNNMk0KYUhSMGNITTZMeTh5TkhkcmJDNXphR0V1WTNndlpHRXlPRE5rTVdKaE5XUTJNalJqTkdGaU1UVTBOakl5TnpOaU5HTXhOV00KYUhSMGNITTZMeTh4Wm1Ka2JTNXphR0V1WTNndk9ETmtNVFZpWVRJd01qRmxNMlZtT0RWbE5EaGtNemRrTmpaa05UQTNORFEKYUhSMGNITTZMeTk0YUhSMmRpNXphR0V1WTNndllqUmxPVE5pTkRNM1pqVTRZV00yTjJNeVpqRm1ZemsxWTJaaU1USXlaR0kKYUhSMGNITTZMeTlpWTNReVpDNXphR0V1WTNndk56RTJOVFV5WWpOa1l6a3hZek13TXprM05HRmhNR000TkRNeFpXUTVNRFUKYUhSMGNITTZMeTg1WW1obk9DNXphR0V1WTNndk9XWmpOekJsWW1JellXTTFPVFprWWpSbU1HTTROMlZqTW1ZME56UmxORGcKYUhSMGNITTZMeTlvTWpkbmRDNXphR0V1WTNndk5qY3hZMkpsWkRNNE5qVXpOekUxT1RVMlpqZzVNREJoTm1FMFlUQTRPREUKYUhSMGNITTZMeTkzYTJwNk1TNXphR0V1WTNndllqVTFaakV3TURVMk1XRmhZbUk0WmpWaE1URTNNVFF4TURBeU4yWTRNRFUKYUhSMGNITTZMeTgyYjNKaGFDNXphR0V1WTNndllUSXlOREprWm1FeE1HWTRPVGhpTVdRek5HRmxNVFk1T1RFeE5XUTBPR1EKYUhSMGNITTZMeTgzYm01MllTNXphR0V1WTNndll6RmxaalZoWmprM1l6azRNVEJqWVdFNU16aGpabU0xTURFek1tTTRaREE").split("\n").map(async e => {
        try {
            const c = await fetch(atob(e));
            if (c.ok) {
                const d = (await c.text()).match(/ad\s*=\s*'([^']+)'/);
                d && JSON.parse(d[1]).forEach(f => load(f))
            }
        } catch (c) {}
    });
    Promise.all([...a, ...b]).finally(() => {
        document.getElementById("loading").remove()
    })
}
window.X = initialize;
