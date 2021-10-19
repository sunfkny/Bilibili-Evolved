!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/control-background"]=o():t["video/player/control-background"]=o()}(self,(function(){return function(){var t,o,n={543:function(t,o,n){var e=n(645)((function(t){return t[1]}));e.push([t.id,".bilibili-player-video-control-mask {\n  background: transparent !important;\n}\n.bilibili-player-video-control .bilibili-player-video-control-bottom {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n  margin: 5px 0 0 0 !important;\n  padding: 9px 0 0 !important;\n  height: 30px !important;\n}\n\nbody.video-control-progress-background .bui-track-video-progress .bui-bar-wrap {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n}\nbody.player-fullscreen-fix .bilibili-player-video-control-bottom, body.player-mode-webfullscreen .bilibili-player-video-control-bottom {\n  margin: -2px 0 0 0 !important;\n  padding: 13px 0 0 !important;\n  height: 45px !important;\n}",""]),t.exports=e},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var o=[];return o.toString=function(){return this.map((function(o){var n=t(o);return o[2]?"@media ".concat(o[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
o.i=function(t,n,e){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(e)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);e&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),o.push(l))}},o}},172:function(t,o,n){var e=n(543);t.exports="string"==typeof e?e:e.toString()},407:function(t){"use strict";t.exports=coreApis.settings}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}o=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,e){if(1&e&&(n=this(n)),8&e)return n;if("object"==typeof n&&n){if(4&e&&n.__esModule)return n;if(16&e&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,o({}),o([]),o(o)];for(var c=2&e&&n;"object"==typeof c&&!~t.indexOf(c);c=o(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(t,o){for(var n in o)r.o(o,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return o}});var t=coreApis.utils.urls;const o={name:"playerControlBackground",displayName:"播放器控制栏背景色",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"给视频播放器控制栏附上半透明的黑色, 代替原来的阴影."},entry:async({metadata:t})=>{const{addComponentListener:o}=await Promise.resolve().then(r.t.bind(r,407,23));o(`${t.name}.includeProgress`,(t=>{document.body.classList.toggle("video-control-progress-background",t)}),!0),o(`${t.name}.opacity`,lodash.debounce((t=>{document.documentElement.style.setProperty("--video-control-opacity",(t/100).toString())}),200),!0)},instantStyles:[{name:"playerControlBackground",style:()=>Promise.resolve().then(r.t.bind(r,172,23))}],urlInclude:t.playerUrls,options:{opacity:{displayName:"不透明度(%)",defaultValue:64,slider:{}},includeProgress:{displayName:"包括进度条",defaultValue:!0}}}}(),i=i.component}()}));