var PagerDuty;PagerDuty=(()=>{"use strict";var t={337:(t,e,r)=>{function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e,n=r.params,u=r.requestTimeout,i=void 0===u?3e4:u,f=(r.retryCount,c(r,["params","requestTimeout","retryCount"]));return t=l(t=new URL(t.toString()),n),e=p(e,i),a(t.toString(),3,o(o({},f),{},{headers:new Headers(o({"Content-Type":"application/json; charset=utf-8"},f.headers))}))}function a(t,e,r){return new Promise((function(n,o){fetch(t,r).then((function(u){if(0===e)return n(u);if(429===u.status){var c=r.retryTimeout;f(c).then((function(){a(t,e-1,r).then(n).catch(o)}))}else n(u)}))}))}r.r(e),r.d(e,{acknowledge:()=>A,all:()=>S,api:()=>w,change:()=>q,event:()=>_,resolve:()=>M,trigger:()=>C});var f=function(t){return new Promise((function(e){return setTimeout(e,t)}))};function l(t,e){if(!e)return t;for(var r=t.searchParams,n=0,o=Object.keys(e);n<o.length;n++){var u=o[n];r.append(u,e[u])}return t.search=r.toString(),t}function p(t,e){if(!e)return t;var r=new AbortController;return setTimeout((function(){return r.abort()}),e),o(o({},t),{},{signal:r.signal})}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){y=function(t,e){return new u(t,void 0,e)};var r=O(RegExp),n=RegExp.prototype,o=new WeakMap;function u(t,e,n){var u=r.call(this,t,e);return o.set(u,n||o.get(t)),u}function c(t,e){var r=o.get(e);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return b(u,r),u.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=c(e,this)),e},u.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=o.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var u=this;return n[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==s(t[t.length-1])&&t.push(c(t,u)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},y.apply(this,arguments)}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function O(t){var e="function"==typeof Map?new Map:void 0;return(O=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return v(t,arguments,h(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,t)})(t)}function v(t,e,r){return(v=g()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&d(o,r.prototype),o}).apply(null,arguments)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){if(!t.endpoint&&!t.url)return function(t){var e=t,r=function(t){return w(j(j({},e),t))},n=function(t){return function(r,n){return w(j(j({endpoint:r,method:t},e),n))}};return r.get=n("get"),r.post=n("post"),r.put=n("put"),r.patch=n("patch"),r.delete=n("delete"),r.all=function(t){return S(t)},r}(t);var e,r,n,o=t.endpoint,u=t.server,c=void 0===u?"api.pagerduty.com":u,i=t.token,a=t.url,f=t.version,l=void 0===f?2:f,p=t.data,s=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,["endpoint","server","token","url","version","data"]),y=j(j({method:"GET"},s),{},{headers:j({Accept:"application/vnd.pagerduty+json;version=".concat(l),Authorization:"Token token=".concat(i)},s.headers)});return r=y.method,!["PUT","POST","DELETE","PATCH"].includes(null!==(n=r.toUpperCase())&&void 0!==n?n:"GET")&&p?y.params=null!==(e=y.params)&&void 0!==e?e:p:y.body=JSON.stringify(p),E(null!=a?a:"https://".concat(c,"/").concat(o.replace(/^\/+/,"")),y)}function S(t){return w(t).then((function(t){return x([t])}))}function x(t){var e=t[t.length-1];return e.next?e.next().then((function(e){return x(t.concat([e]))})):Promise.resolve(t)}function E(t,e){return i(t,e).then((function(r){var n=r,o=function(t){var e=t.match(y(/.+.com\/([0-9A-Z_a-z]+)/,{resource:1}));return e?e[1]:null}(t);return r.json().then((function(u){return n.next=function(t,e,r){if(function(t){return void 0!==t.offset}(r)){if((null==r?void 0:r.more)&&void 0!==s(r.offset)&&r.limit)return function(){return E(t,j(j({},e),{},{params:j(j({},e.params),{},{limit:r.limit.toString(),offset:(r.limit+r.offset).toString()})}))}}else if(function(t){return void 0!==t.cursor}(r)&&(null==r?void 0:r.cursor))return function(){return E(t,j(j({},e),{},{params:j(j({},e.params),{},{cursor:r.cursor,limit:r.limit.toString()})}))}}(t,e,u),n.data=u,n.resource=o?u[o]:null,n.response=r,n}))}))}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _(t){var e=t.server,r=void 0===e?"events.pagerduty.com":e,n=t.type,o=void 0===n?"event":n,u=t.data,c=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,["server","type","data"]),a="https://".concat(r,"/v2/enqueue");return"change"===o&&(a="https://".concat(r,"/v2/change/enqueue")),function(t,e){return i(t,e).then((function(t){var e=t;return t.json().then((function(r){return e.data=r,e.response=t,e}))}))}(a,D({method:"POST",body:JSON.stringify(u)},c))}var R=function(t){return function(e){return _(D(D({},e),{},{data:D(D({},e.data),{},k({},"event_action",t))}))}},C=R("trigger"),A=R("acknowledge"),M=R("resolve"),q=function(t){return _(D(D({},t),{},{type:"change"}))}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(337)})();
//# sourceMappingURL=pdjs.js.map