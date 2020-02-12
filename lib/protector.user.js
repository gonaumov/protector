// ==UserScript==
// @name         Blocking selection protector
// @version      0.1
// @description  Protection against  blocking of user selection
// @author       Georgi Naumov
// @include http://*
// @include https://*
// @include *
// ==/UserScript==
var script=document.createElement("script");script.type="text/javascript";function main(){var head=document.getElementsByTagName("head")[0];var style=document.createElement("style");head.appendChild(style);style.appendChild(document.createTextNode("* {\n        -webkit-touch-callout: default !important;\n        -webkit-user-select: auto !important;\n        -khtml-user-select: auto !important;\n        -moz-user-select: auto !important;\n        -ms-user-select: auto !important;\n        user-select: auto !important;\n        cursor: auto !important;\n        -webkit-tap-highlight-color: black !important;\n        }"));if(typeof document.body.style.MozUserSelect!="undefined"){document.body.style.MozUserSelect="auto"}document.body.style.cursor="default";["selectstart","mousedown","contextmenu"].forEach(function(eventType){window.addEventListener(eventType,function(event){return event.stopPropagation()},true)})}script.textContent="("+main.toString()+")();";document.getElementsByTagName("head")[0].appendChild(script);