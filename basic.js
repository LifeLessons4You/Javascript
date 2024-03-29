(function() {
    var p = "";
    var a = "";
    if (typeof pb_keyword != "undefined") {
        p = "?q=" + pb_keyword.substring(0, 1500)
    } else {
        try {
            a = escape(document.referrer);
            p = escape(window.location);
            p = escape(window.top.location)
        } catch (r) {}
    }
    var s = _$rh.BANNER.pop();
    var o = ((s && s.img_bnr_html) ? s.img_bnr_html : "image-banner.cib");
    if (o == "") {
        o = "image-banner.cib"
    }
    var d = ((s && s.prefix) ? s.prefix : "imgBanner/" + new Date().getTime() + "_0_");
    o = d + o;
    var h = c(s.size);
    var n = h.w;
    var j = h.h;
    var i = getKeywordFromMeta();
    if (i) {
        i = escape(i)
    }
    var b = g();
    var m = "https:" == document.location.protocol ? "https:" : "http:";
    if (s && s.dynadom && (m != "https:")) {
        var t = (s.dynamod || 5);
        var f = (s.dynasuf || ".com");
        b = s.dynadom + (2002 + new Date().getTime() % t) + f
    }
    var w = "&geo=" + (s && s.geo) ? s.geo : "";
    b = b.replace("cdn1.", "");
    var k = m + "//" + b + "/adServe/" + o + "?tid=" + s.cid + "&num=" + 1 + "&w=" + n + "&h=" + j + "&orig_url=" + p + "&ref_url=" + a + (s.redirurl ? "&redirurl=" + escape(s.redirurl) : "" + w + "&keywords=" + i + (s.ap ? "&ap=" + encodeURIComponent(s.ap) : ""));
    if (s.pid) {
        k = k + "&pid=" + s.pid
    }
    var l = document.createElement("iframe");
    var q = "rhfrm_";
    if (s.type) {
        q = q + s.type + "_"
    }
    l.setAttribute("name", q + s.cid);
    l.setAttribute("id", q + s.cid);
    l.setAttribute("frameBorder", "0");
    l.setAttribute("src", k);
    l.style.width = n + "px";
    l.style.height = j + "px";
    l.style.border = "none";
    l.scrolling = "no";
    l.setAttribute("htmlName", o);
    l.setAttribute("cid", s.cid);
    l.setAttribute("w", n);
    l.setAttribute("h", j);
    l.setAttribute("allowTransparency", "allowtransparency");
    l.setAttribute("hid", b);
    if (s.pid) {
        l.setAttribute("pid", s.pid)
    }
    var v = document.getElementById("rh_tag_BANNER_" + s.cid) == null ? document.getElementById("rh_tag_" + s.cid) : document.getElementById("rh_tag_BANNER_" + s.cid);
    document.getElementsByTagName("head")[0];
    if (v.parentNode != document.getElementsByTagName("head")[0]) {
        v.parentNode.insertBefore(l, v.nextSibling)
    } else {
        window.onload = function() {
            document.getElementsByTagName("body")[0].appendChild(l)
        }
    }

    function g() {
        var u = "clkads.com";
        var x = document.getElementById("rh_tag_BANNER_" + s.cid) == null ? document.getElementById("rh_tag_" + s.cid) : document.getElementById("rh_tag_BANNER_" + s.cid);
        if (x) {
            var A = x.src;
            var y = RegExp("^https?://([a-z0-9\\-\\.\\_\\:]+)/.*$");
            try {
                u = y.exec(A)[1]
            } catch (z) {}
            if (!u) {
                u = "clkads.com"
            }
        }
        return u
    }

    function c(e) {
        return {
            w: e.substr(0, e.indexOf("x")),
            h: e.substr(e.indexOf("x") + 1)
        }
    }
})();

function getMetaContent(b) {
    var c = document.getElementsByTagName("meta");
    if (c) {
        for (var a = 0; a < c.length; a++) {
            if (c[a].getAttribute("name") == b) {
                return c[a].getAttribute("content")
            }
        }
    }
    return null
}

function getKeywordFromMeta() {
    var a = getMetaContent("keywords");
    if (a == null) {
        a = getMetaContent("description");
        if (a == null) {
            a = document.title
        }
    }
    if (a != null && a.length > 80) {
        a = a.substr(0, 80)
    }
    return a
};