// ==UserScript==
// @name         Blocking selection protector
// @version      0.1
// @description  Protection agaings blocking of user selection
// @author       Georgi Naumov
// @include http://*
// @include https://*
// @include *
// ==/UserScript==
var script = document.createElement('script'); 
script.type = "text/javascript"; 
function main() {
	const maxInterval = 180000;
	const starTime = (new Date()).getTime();

	function cleanProtection() {
		var css = ["* {",
		  "-webkit-touch-callout: default !important;",
		  "-webkit-user-select: auto !important;",
		  "-khtml-user-select: auto !important;",
		  "-moz-user-select: auto !important;",
		  "-ms-user-select: auto !important;",
		  "user-select: auto !important;",
		  "cursor: auto !important;",
		  "-webkit-tap-highlight-color: black !important;",
		"}"].join("\n");
		var head = document.head || document.getElementsByTagName('head')[0];
		var style = document.createElement('style');
		head.appendChild(style);
		style.type = 'text/css';
		style.appendChild(document.createTextNode(css));
		if (typeof document.body.style.MozUserSelect != "undefined") {
		  document.body.style.MozUserSelect = "auto";
		}
		document.body.style.cursor = "default";
		document.ondragstart = function () {}
		document.oncontextmenu = function () {}
		document.onkeydown = function () {}
		document.onselectstart = function () {}
		document.body.ondragstart = function () {}
		document.body.oncontextmenu = function () {}
		document.body.onkeydown = function () {}
		document.body.onselectstart = function () {}
		document.body.ondragstart = function () {}
		document.onmousedown = null
	}
	cleanProtection();
	setTimeout(function clear() {
		if(((new Date()).getTime() - starTime) < maxInterval || typeof document.onmousedown == "function") {
			setTimeout(clear,100);
		}
	}, 100);
};
script.textContent = "(" + main.toString() + ")();";
document.getElementsByTagName('head')[0].appendChild(script);
