!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-player-light"]=t():e["utils/keymap-toggle-player-light"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>i});const o=coreApis.componentApis.video.playerLight,i={name:"keymap.actions.togglePlayerLight",displayName:"快捷键扩展 - 开关灯",description:'在快捷键的动作列表里添加一个 "开关灯".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.togglePlayerLight={displayName:"开关灯",run:async()=>{(0,o.toggleLight)()}}})),t("keymap.presets",(e=>{e.togglePlayerLight="shift l"}))},commitHash:"3d43a4e0c0dbc2b967fcde6d3f0c1b50f98cc818",coreVersion:"2.7.6"};return t=t.plugin})()));