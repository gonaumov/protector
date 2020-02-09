// ==UserScript==
// @name         Blocking selection protector
// @version      0.1
// @description  Protection agaings blocking of user selection
// @author       Georgi Naumov
// @include http://*
// @include https://*
// @include *
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    const css = `* {
      -webkit-touch-callout: default !important;
      -webkit-user-select: auto !important;
      -khtml-user-select: auto !important;
      -moz-user-select: auto !important;
      -ms-user-select: auto !important;
      user-select: auto !important;
      cursor: auto !important;
      -webkit-tap-highlight-color: black !important;
    }`;
    const head = unsafeWindow.document.head || unsafeWindow.document.getElementsByTagName('head')[0];
    const style = unsafeWindow.document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(unsafeWindow.document.createTextNode(css));
    if (typeof unsafeWindow.document.body.style.MozUserSelect != "undefined") {
      unsafeWindow.document.body.style.MozUserSelect = "auto";
    }
    unsafeWindow.document.body.style.cursor = "default";
    unsafeWindow.document.ondragstart = function () {}
    unsafeWindow.document.oncontextmenu = function () {}
    unsafeWindow.document.onkeydown = function () {}
    unsafeWindow.document.onselectstart = function () {}
    unsafeWindow.document.body.ondragstart = function () {}
    unsafeWindow.document.body.oncontextmenu = function () {}
    unsafeWindow.document.body.onkeydown = function () {}
    unsafeWindow.document.body.onselectstart = function () {}
    unsafeWindow.document.body.ondragstart = function () {}
    unsafeWindow.document.onmousedown = function () {}
})();