/* Cookies Directive - The rewrite. Now a jQuery plugin
 * Version: 2.0.1
 * Author: Ollie Phillips
 * 24 October 2013
 */

/*
Copyright (C) 2011 - 2016 by Ollie Phillips

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..
*/
(function (c) {
    c.cookiesDirective = function (a) {
        a = c.extend({ explicitConsent: !0, position: "top", duration: 10, limit: 0, message: null, cookieScripts: null, privacyPolicyUri: "privacy.html", scriptWrapper: function () { }, fontColor: "#FFFFFF", fontSize: "13px", backgroundColor: "#000000", backgroundOpacity: "80", linkColor: "#CA0000" }, a); if (f("cookiesDirective")) a.scriptWrapper.call(); else {
            if (0 < a.limit) {
                if (f("cookiesDisclosureCount")) { var d = f("cookiesDisclosureCount"); d++; h("cookiesDisclosureCount", d, 1) } else h("cookiesDisclosureCount",
                    1, 1); a.limit >= f("cookiesDisclosureCount") && l(a)
            } else l(a); a.explicitConsent || a.scriptWrapper.call()
        }
    }; c.cookiesDirective.loadScript = function (a) { a = c.extend({ uri: "", appendTo: "body" }, a); var d = String(a.appendTo), b = document.createElement("script"); b.src = a.uri; b.type = "text/javascript"; b.onload = b.onreadystatechange = function () { }; switch (a.appendTo) { case "head": c("head").append(b); break; case "body": c("body").append(b); break; default: c("#" + d).append(b) } }; var f = function (a) {
        a += "="; for (var d = document.cookie.split(";"),
            b = 0; b < d.length; b++) { for (var c = d[b]; " " == c.charAt(0);)c = c.substring(1, c.length); if (0 === c.indexOf(a)) return c.substring(a.length, c.length) } return null
    }, h = function (a, c, b) { var e = ""; b && (e = new Date, e.setTime(e.getTime() + 864E5 * b), e = "; expires=" + e.toGMTString()); document.cookie = a + "=" + c + e + "; path=/" }, m = function () {
        var a; if ("Microsoft Internet Explorer" == navigator.appName) {
            null !== /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1)); if (8 >= a) return !0; if (9 == a && "BackCompat" == document.compatMode) return a =
                document.createElement("meta"), a.content = "IE=EmulateIE8", document.getElementsByTagName("head")[0].appendChild(a), !0
        } return !1
    }, l = function (a) {
        a.css = "fixed"; m() && (a.position = "top", a.css = "absolute"); var d = ""; if (a.cookieScripts) { var d = a.cookieScripts.split(","), b = d.length, e = ""; if (1 < b) { for (var f = 0; f < b - 1; f++)e += d[f] + ", "; d = " We use " + e.substring(0, e.length - 2) + " and " + d[b - 1] + " scripts, which all set cookies. " } else d = " We use a " + d[0] + " script which sets cookies." } b = '<div id="epd">' + ('<div id="cookiesdirective" style="position:' +
            a.css + ";" + a.position + ":-300px;left:0px;width:100%;"); b += "height:auto;background:" + a.backgroundColor + ";opacity:." + a.backgroundOpacity + ";"; b += "-ms-filter: \u201calpha(opacity=" + a.backgroundOpacity + ")\u201d; filter: alpha(opacity=" + a.backgroundOpacity + ");"; b += "-khtml-opacity: ." + a.backgroundOpacity + "; -moz-opacity: ." + a.backgroundOpacity + ";"; b += "color:" + a.fontColor + ";font-family:" + a.fontFamily + ";font-size:" + a.fontSize + ";letter-spacing: 0;"; b += 'text-align:center;z-index:1000;">'; b += '<div class="cookieText" style="position:relative;height:auto;width:90%;padding:10px;margin-left:auto;margin-right:auto;">';
        !a.message && a.explicitConsent && (a.message = "This site uses cookies. Some of the cookies we ", a.message += "use are essential for parts of the site to operate and have already been set."); b += a.message; a.explicitConsent ? (b += d + "You may delete and block all cookies from this site, but parts of the site will not work.", b += "To find out more about cookies on this website", b += "<br/>", b += '<div id="epdnotick" style="color:#ca0000;display:none;margin:2px;"><span style="background:#cecece;padding:2px;">You must tick the "I accept cookies from this site" box to accept</span></div>',
            b += '<div style="margin-top:5px;">I accept cookies from this site <input type="checkbox" name="epdagree" id="epdagree" />&nbsp;', b += '<input type="submit" name="explicitsubmit" id="explicitsubmit" value="Continue"/><br/></div></div>') : (b += d, b += '<input style="margin-left:10px;line-height:0;height:1.85em;color:#424a4d;border-width:1px;border-radius:0;border-style:solid;background-color:transparent;border-color:#424a4d;" type="submit" name="impliedsubmit" id="impliedsubmit" value="x"/></div>'); b += "</div></div>";
        c("body").append(b); var g = a.position.toLowerCase(); "top" != g && "bottom" != g && (g = "top"); var k = d = null; "top" == g ? (d = { top: "0" }, k = { top: "-300" }) : (d = { bottom: "0" }, k = { bottom: "-300" }); c("#cookiesdirective").animate(d, 1E3, function () {
            a.explicitConsent ? c("#explicitsubmit").click(function () { c("#epdagree").is(":checked") ? (h("cookiesDirective", 1, 365), c("#cookiesdirective").animate(k, 1E3, function () { c("#cookiesdirective").remove(); location.reload(!0) })) : c("#epdnotick").css("display", "block") }) : c("#impliedsubmit").click(function () {
                h("cookiesDirective",
                    1, 365); c("#cookiesdirective").animate(k, 1E3, function () { c("#cookiesdirective").remove() })
            }); 0 < a.duration && setTimeout(function () { c("#cookiesdirective").animate({ opacity: "0" }, 2E3, function () { c("#cookiesdirective").css(g, "-300px") }) }, 1E3 * a.duration)
        })
    }
})(jQuery);