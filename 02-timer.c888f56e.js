parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d2uN":[function(require,module,exports) {
const e=document.querySelector("#datetime-picker"),t=document.querySelector("[ data-start]");console.log(e.value);const o=!1,n={start(){const e=Date.now();setInterval(()=>{r(s(Date.now()-e))},1e3)}};function r({days:t,hours:o,minutes:n,seconds:r}){e.value=`${t}:${o}:${n}:${r}`}function a(e){return String(e).padStart(2,"0")}function s(e){return{days:a(Math.floor(e/864e5)),hours:a(Math.floor(e%864e5/36e5)),minutes:a(Math.floor(e%864e5%36e5/6e4)),seconds:a(Math.floor(e%864e5%36e5%6e4/1e3))}}t.addEventListener("click",()=>{t.setAttribute("disabled",!1),n.start()});
},{}]},{},["d2uN"], null)
//# sourceMappingURL=/goit-js-hw-09/02-timer.c888f56e.js.map