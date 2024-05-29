(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pdf-view-detail-pdf-view-detail-module"],{

/***/ "./node_modules/@pdftron/webviewer/webviewer.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/@pdftron/webviewer/webviewer.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var o, n; }}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(2),e.exports=n(6)},function(e,t,n){(function(o,i){var r,a;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o,i){"object"==s(t)&&void 0!==e?i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)}(0,(function(){"use strict";function e(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}function t(){}function n(e){if(!(this instanceof n))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function r(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,n._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void c(t.promise,e)}a(t.promise,o)}else(1===e._state?a:c)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==s(t)||"function"==typeof t)){var o=t.then;if(t instanceof n)return e._state=3,e._value=t,void l(e);if("function"==typeof o)return void u(function(e,t){return function(){e.apply(t,arguments)}}(o,t),e)}e._state=1,e._value=t,l(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&n._immediateFn((function(){e._handled||n._unhandledRejectionFn(e._value)}));for(var t=0,o=e._deferreds.length;o>t;t++)r(e,e._deferreds[t]);e._deferreds=null}function u(e,t){var n=!1;try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,c(t,e))}))}catch(e){if(n)return;n=!0,c(t,e)}}var d=setTimeout;n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,n,o)),o},n.prototype.finally=e,n.all=function(e){return new n((function(t,n){function o(e,a){try{if(a&&("object"==s(a)||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,(function(t){o(e,t)}),n)}i[e]=a,0==--r&&t(i)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var r=i.length,a=0;i.length>a;a++)o(a,i[a])}))},n.resolve=function(e){return e&&"object"==s(e)&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var o=0,i=e.length;i>o;o++)e[o].then(t,n)}))},n._immediateFn="function"==typeof o&&function(e){o(e)}||function(e){d(e,0)},n._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var f=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw Error("unable to locate global object")}();"Promise"in f?f.Promise.prototype.finally||(f.Promise.prototype.finally=e):f.Promise=n}))}).call(this,n(3).setImmediate,n(0))},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,i,r,a,s,c=1,l={},u=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){m(e.data)},o=function(e){r.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(m,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),o=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return l[c]=i,o(c),c++},f.clearImmediate=p}function p(e){delete l[e]}function m(e){if(u)setTimeout(m,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(5))},function(e,t){var n,o,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"getInstance",(function(){return M}));var o={ASM:"asm",WASM:"ems",JS_WORKER:"jsworker",THREADED_WASM:"wasm-threads"};function i(e,t){if("string"!=typeof e||!t)return e;var n=t.substr(0,t.lastIndexOf("/"));return/^(\/|%2F|[a-z0-9-]+:)/i.test(e)?e:n+"/"+e}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(a)?a:String(a)),o)}var i,a}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return u(e,arguments,p(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),f(o,e)})(e)}function u(e,t,n){return(u=d()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&f(i,n.prototype),i}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=0,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,o,i,r,l=(t=u,n=d(),function(){var e,o=p(t);if(n){var i=p(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return c(this,e)});function u(){return a(this,u),l.apply(this,arguments)}return o=u,(i=[{key:"connectedCallback",value:function(){var e=this.attachShadow({mode:"open"}),t=this.getAttribute("path");window.isApryseWebViewerWebComponent=!0,window.webViewerPath=t,this.id=this.getAttribute("id")||function e(){var t=localStorage.getItem("wv_instanceIds");if((t=t?t.split(","):[]).length&&t[m]){var n=t[m];return m++,n}var o=Math.random().toString(36).slice(-6);return-1===t.findIndex((function(e){return e===o}))?(t.push(o),localStorage.setItem("wv_instanceIds",t),m++,o):e()}()||"default",fetch("".concat(t,"/ui/index-wc.html")).then((function(e){return e.text()})).then((function(n){e.innerHTML=n,function e(t,n){if(!0===function(e){return"SCRIPT"===e.tagName}(t))t.parentNode.replaceChild(function(e,t){var n=document.createElement("script");n.text=e.innerHTML;for(var o=-1,i=e.attributes;++o<i.length;){var r=i[o];"src"===r.name?n.setAttribute("src","".concat(t).concat(r.value)):n.setAttribute(r.name,r.value)}return n.async=!1,n}(t,n),t);else for(var o=-1,i=t.childNodes;++o<i.length;)e(i[o],n);return t}(e,t),window.dispatchEvent(new Event("webviewerloaded"))}))}}])&&s(o.prototype,i),r&&s(o,r),Object.defineProperty(o,"prototype",{writable:!1}),u}(l(HTMLElement));try{customElements.define("apryse-webviewer",h)}catch(e){console.warn("This environment does not allow for usage of the WebComponent version of WebViewer: ".concat(e))}var v=function(e,t){return new Promise((function(n,o){var i=document.createElement("apryse-webviewer");i.setAttribute("id","wc-".concat(t.id)),e.l=e.l||e.licenseKey,e.azureWorkaround=e.azureWorkaround||e.enableAzureWorkaround,e.annotationAdmin=e.annotationAdmin||e.isAdminUser,e.enableReadOnlyMode=e.enableReadOnlyMode||e.isReadOnly,e.showLocalFilePicker=e.showLocalFilePicker||e.enableFilePicker,e.useSharedWorker=e.workerTransportPromise?"true":"false",e.path=e.path||"/lib",e.workerTransportPromise&&(window.apryseWorkerTransportPromise=e.workerTransportPromise),e.l&&(window.apryse_l=btoa(e.l));var r=["disableLogs","highContrastMode"];for(var a in["autoCreate","autoFocusNoteOnAnnotationSelection","enableOptimizedWorkers","enableAnnotations","preloadPDFWorker","useDownloader"].forEach((function(t){void 0===(null==e?void 0:e[t])&&(e[t]=!0)})),e)void 0!==(null==e?void 0:e[a])&&null!==(null==e?void 0:e[a])&&(r.includes(a)&&!1===e[a]?i.removeAttribute(a):e.encryption?i.setAttribute("auto_load",!1):"licenseKey"!==a&&"l"!==a&&i.setAttribute(a,e[a]));i.setAttribute("webviewerjsversion","10.9.0");var s=function(t){"requestl"===t.data&&t.source&&t.source.postMessage({type:"responsel",value:e.l||e.licenseKey},"*")};t.appendChild(i),i.addEventListener("ready",(function(){var e;null!==(e=i.instance)&&void 0!==e&&e.UI&&(i.instance.UI.dispose=function(){return new Promise((function(e){window.removeEventListener("message",s),console.clear(),i.instance.Core.documentViewer.closeDocument().then((function(){e()}))}))}),n(i.instance)})),window.addEventListener("message",s,!1)}))};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window.WebViewerWebComponent=v;var T={},P=0;"undefined"==typeof console&&(window.console={log:function(){},warn:function(){},error:function(){}});var O=function(){for(var e=1;e<arguments.length;e++)for(var t=Object.keys(arguments[e]),n=0;n<t.length;n++)arguments[0][t[n]]=arguments[e][t[n]];return arguments[0]},_=function(e){var t=[];return e.forEach((function(e){t.push(e)})),t},A=function(e,t){var n;try{n=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(o){(n=document.createEvent("Event")).initEvent(e,!0,!0),n.detail=t}return n};window.PDFNet&&!T.skipPDFNetWebViewerWarning&&console.warn("PDFNet.js and WebViewer.js have been included in the same context. See https://community.apryse.com/t/what-is-the-best-location-to-call-pdfnet-apis-when-used-in-conjunction-with-webviewer/5210 for an explanation of why this could be an error in your application.");var I=new Map,E=new Map;T.WebViewer=function(e,t){var n=this;if(E.get(t))throw new Error("Two instances of WebViewer were created on the same HTML element. Please create a new element for each instance of WebViewer");E.set(t,!0);t.addEventListener("ready",(function e(){I.get(t).instance=n.getCompleteInstance(),t.removeEventListener("ready",e)})),this._validateOptions(e);var o=e.webviewerServerURL||e.pdftronServer;e.fullAPI&&o&&(e.forceClientSideInit||console.warn("The fullAPI and webviewerServerURL options have both been set so the forceClientSideInit option is now enabled. This means that WebViewer will switch to client side rendering and processing to allow use of the full API."),e.forceClientSideInit=!0),this.options=O({},T.WebViewer.Options,e);var i=this.options.path.length-1;i>0&&"/"!==this.options.path[i]&&(this.options.path+="/"),this.options.uiPath=this.options.path+this.options.uiPath,t||console.error("ViewerElement is not defined. This may be caused by calling the WebViewer constructor before the DOM is loaded, or an invalid selector. Please see https://docs.apryse.com/documentation/web/get-started/ for an example."),this.element=t,this.element.style.overflow="hidden";var r=this;this.messageHandler=function(t){if("requestl"===t.data&&t.source&&t.source.postMessage({type:"responsel",value:e.l||e.licenseKey},"*"),"requestConfig"===t.data.type&&t.data.id===r.id&&t.source){var n=e.config?r._correctRelativePath(e.config):"";t.source.postMessage({type:"responseConfig",value:n},"*")}},window.addEventListener("message",this.messageHandler,!1),this.options.autoCreate&&this.create()};var S={licenseKey:void 0,enableAzureWorkaround:!1,isAdminUser:!1,isReadOnly:!1};T.WebViewer.prototype={version:"10.9.0",create:function(){if(this.options.initialDoc){var e=this._correctRelativePath(this.options.initialDoc);e=encodeURIComponent(JSON.stringify(e)),this.options.initialDoc=e}this._create()},_create:function(){this.id=++P,void 0===this._trigger&&(this._trigger=function(e,t){var n=A(e,t);this.element.dispatchEvent(n)});var e=this.options.type.replace(" ","").split(",");e.length<1&&(e[0]="html5"),this._createViewer(e)},_validateOptions:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var o=t[n];o in O({},S,T.WebViewer.Options)||console.warn("".concat(o," is not a valid option name. See https://docs.apryse.com/api/web/global.html#WebViewerOptions for all available options."))}var i=e.webviewerServerURL||e.pdftronServer;!e.enableRedaction||e.fullAPI||i||console.warn("FullAPI or WebViewer Server is needed to apply redactions")},_notSupportedMobile:function(){var e=document.createElement("div");e.id="webviewer-browser-unsupported",e.textContent="PDF document viewing is not supported by this browser.",this.element.appendChild(e)},_createViewer:function(e){var t,n=this;if(n.selectedType=null,this.isMobileDevice()){if(this.options.documentType&&"xod"!==this.options.documentType&&!this._testWebAssembly())return void this._notSupportedMobile();if(e=Array("html5Mobile"),n.selectedType="html5Mobile",this.options.mobileRedirect)return t=this.options.uiPath+this._getHTML5OptionsURL(),void(window.location=t)}for(var o=!1,i=!1,r=0;r<e.length;r++){if("html5mobile"===e[r].toLowerCase()){if(this.options.documentType&&"xod"!==this.options.documentType&&!this._testWebAssembly())continue;if(o=!0,n._testHTML5()){if(this.options.mobileRedirect)return n.selectedType="html5Mobile",t=this.options.uiPath+this._getHTML5OptionsURL(),void(window.location=t);if(this.options.xdomainProxyUrl||n.isSameOrigin(decodeURIComponent(n.options.initialDoc))||n._testCORS()){n.selectedType="html5Mobile";break}i=!0}}if("html5"===e[r].toLowerCase()&&(o=!0,n._testHTML5())){var a=n.isSameOrigin(decodeURIComponent(n.options.initialDoc));if(this.options.xdomainProxyUrl||a||n._testCORS()){n.selectedType="html5";break}i=!0}}if("html5"===n.selectedType)n._createHTML5();else if("html5Mobile"===n.selectedType)n._createHTML5Mobile();else{var s;if(i?s="This browser does not support cross origin requests. Please configure xdomain to support CORS.":o&&(s="Please use an HTML5 compatible browser."),s){var c=document.createElement("div");c.id="webviewer-browser-unsupported",c.textContent=s,n.element.appendChild(c)}}},_viewerLoaded:function(e){this._trigger("ready");try{var t=e.contentWindow;if(t.postMessage({type:"viewerLoaded"},"*"),void 0!==this.options.encryption){var n=decodeURIComponent(this.options.initialDoc);this.options.initialDoc&&(n=JSON.parse(n));var o={decrypt:t.Core.Encryption.decrypt,decryptOptions:this.options.encryption,documentId:this.options.documentId,extension:"xod"};this.getInstance().UI.loadDocument(n,o)}}catch(e){console.warn("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See https://docs.apryse.com/documentation/web/guides/wv-inside/#loading-webviewer-from-another-domain for more information.")}},_getHTML5OptionsURL:function(){var e,t,n,o=this.options,i=o.webviewerServerURL||o.pdftronServer,r="";if(o.initialDoc&&(r+="#d=".concat(o.initialDoc)),void 0===o.backendType&&(o.backendType=o.pdfBackend),o.documentType&&"xod"===o.documentType&&(e=o.documentType),o.preloadWorker&&"xod"===o.preloadWorker&&(e=o.preloadWorker),o.extension&&(e=o.extension),e&&(r+="&extension=".concat(e)),o.documentType&&"xod"!==o.documentType&&(t=o.documentType),o.preloadWorker&&"xod"!==o.preloadWorker&&(t=o.preloadWorker),t&&(r+="&preloadWorker=".concat(t)),o.backendType&&(r+="&pdf=".concat(o.backendType,"&office=").concat(o.backendType,"&legacyOffice=").concat(o.backendType)),o.filename&&(r+="&filename=".concat(o.filename)),void 0!==o.streaming&&(r+="&streaming=".concat(o.streaming)),o.externalPath){var a=this._correctRelativePath(o.externalPath);a=encodeURIComponent(a),r+="&p=".concat(a)}if(o.encryption&&(r+="&auto_load=false"),o.enableAnnotations&&(r+="&a=1"),o.disabledElements){var s=encodeURIComponent(o.disabledElements.join(","));r+="&disabledElements=".concat(s)}if(o.serverUrl){var c=this._correctRelativePath(o.serverUrl);c=encodeURIComponent(c),r+="&server_url=".concat(c)}if(o.serverUrlHeaders&&(r+="&serverUrlHeaders=".concat(JSON.stringify(o.serverUrlHeaders))),o.documentId&&(r+="&did=".concat(o.documentId)),o.css){var l=this._correctRelativePath(o.css);l=encodeURIComponent(l),r+="&css=".concat(l)}(o.disableI18n&&(r+="&disableI18n=1"),o.enableOfflineMode&&(r+="&offline=1"),o.startOffline&&(r+="&startOffline=1"),(o.enableReadOnlyMode||o.isReadOnly)&&(r+="&readonly=1"),o.hideAnnotationPanel&&(r+="&hideAnnotationPanel=1"),o.disableToolGroupReordering&&(r+="&disableToolGroupReordering=1"),void 0!==o.annotationUser&&(r+="&user=".concat(o.annotationUser)),void 0===o.annotationAdmin&&void 0===o.isAdminUser||(r+="&admin=".concat(o.annotationAdmin||o.isAdminUser?1:0)),void 0!==o.custom&&(r+="&custom=".concat(encodeURIComponent(o.custom))),void 0===o.showLocalFilePicker&&void 0===o.enableFilePicker||(r+="&filepicker=".concat(o.showLocalFilePicker||o.enableFilePicker?1:0)),void 0!==o.fullAPI&&(r+="&pdfnet=".concat(o.fullAPI?1:0)),void 0!==o.enableRedaction&&(r+="&enableRedaction=".concat(o.enableRedaction?1:0)),void 0!==o.disableVirtualDisplayMode&&(r+="&disableVirtualDisplayMode=".concat(o.disableVirtualDisplayMode?1:0)),void 0!==o.hideDetachedReplies&&(r+="&hideDetachedReplies=".concat(o.hideDetachedReplies?1:0)),void 0!==o.enableMeasurement&&(r+="&enableMeasurement=".concat(o.enableMeasurement?1:0)),void 0!==o.showToolbarControl&&(r+="&toolbar=".concat(o.showToolbarControl?"true":"false")),void 0!==o.notesInLeftPanel&&(r+="&notesInLeftPanel=".concat(o.notesInLeftPanel?1:0)),void 0!==o.autoExpandOutlines&&(r+="&autoExpandOutlines=".concat(o.autoExpandOutlines?1:0)),void 0!==o.enableAnnotationNumbering&&(r+="&enableAnnotationNumbering=".concat(o.enableAnnotationNumbering?1:0)),void 0!==o.enableOfficeEditing&&(r+="&enableOfficeEditing=".concat(o.enableOfficeEditing?1:0)),void 0!==o.xdomainProxyUrl)&&(n="string"==typeof o.xdomainProxyUrl?{url:o.xdomainProxyUrl}:o.xdomainProxyUrl,r+="&xdomain_urls=".concat(encodeURIComponent(JSON.stringify(n))));return(o.azureWorkaround||o.enableAzureWorkaround)&&(r+="&azureWorkaround=1"),o.enableOptimizedWorkers||(r+="&enableOptimizedWorkers=0"),o.useDownloader||(r+="&useDownloader=0"),o.disableWebsockets&&(r+="&disableWebsockets=1"),o.disableStreaming&&(r+="&disableStreaming=1"),o.forceClientSideInit&&(r+="&forceClientSideInit=1"),o.loadAsPDF&&(r+="&loadAsPDF=1"),void 0!==o.workerTransportPromise&&(r+="&useSharedWorker=".concat(o.workerTransportPromise?"true":"false")),void 0!==i&&i&&(r+="&webviewerServerURL=".concat(encodeURIComponent(i))),o.fallbackToClientSide&&(r+="&fallbackToClientSide=1"),void 0!==o.singleServerMode&&(r+="&singleServerMode=".concat(o.singleServerMode?"true":"false")),void 0!==o.accessibleMode&&(r+="&accessibleMode=".concat(o.accessibleMode?1:0)),o.disableLogs&&(r+="&disableLogs=1"),o.enableViewStateAnnotations&&(r+="&enableViewStateAnnotations=1"),o.disableFlattenedAnnotations&&(r+="&disableFlattenedAnnotations=1"),o.highContrastMode&&(r+="&highContrastMode=1"),void 0!==o.selectAnnotationOnCreation&&(r+="&selectAnnotationOnCreation=".concat(o.selectAnnotationOnCreation?1:0)),void 0!==o.autoFocusNoteOnAnnotationSelection&&(r+="&autoFocusNoteOnAnnotationSelection=".concat(o.autoFocusNoteOnAnnotationSelection?1:0)),o.disableIndexedDB&&(r+="&disableIndexedDB=1"),o.disableMultiViewerComparison&&(r+="&disableMultiViewerComparison=1"),o.showInvalidBookmarks&&(r+="&showInvalidBookmarks=1"),o.disableObjectURLBlobs&&(r+="&disableObjectURLBlobs=".concat(o.disableObjectURLBlobs)),r+="&id=".concat(this.id),(r+="&basePath=".concat(encodeURIComponent(window.location.pathname))).length>0&&"&"===r[0]&&(r="#".concat(r.slice(1))),r+="&webViewerJSVersion=".concat(this.version),o.ui&&!o.enableOfficeEditing&&(r+="&ui=".concat(o.ui)),r},setInstanceData:function(e){I.set(this.element,{iframe:e,l:this.options.l||this.options.licenseKey,workerTransportPromise:this.options.workerTransportPromise})},_createHTML5:function(){var e=this,t=this.options.uiPath+this._getHTML5OptionsURL(),n=document.createElement("iframe");this.setInstanceData(n),n.id="webviewer-".concat(this.id),n.src=t,n.title="webviewer",n.frameBorder=0,n.width="100%",n.height="100%",n.setAttribute("allowfullscreen",!0),n.setAttribute("webkitallowfullscreen",!0),n.setAttribute("mozallowfullscreen",!0),this.iframe=n,this.options.backgroundColor&&n.setAttribute("data-bgcolor",this.options.backgroundColor),this.options.assetPath&&n.setAttribute("data-assetpath",encodeURIComponent(this.options.assetPath)),this.element.appendChild(n);window.addEventListener("message",(function t(n){if("viewerLoaded"===n.data.type&&n.data.id===e.id)try{e.instance=e.iframe.contentWindow.instance}catch(e){}finally{window.removeEventListener("message",t),e._viewerLoaded(e.iframe)}}))},_createHTML5Mobile:function(){var e=this,t=this.options.uiPath+this._getHTML5OptionsURL(),n=document.createElement("iframe");this.setInstanceData(n),n.id="webviewer-".concat(this.id),n.src=t,n.frameborder=0,this.options.assetPath&&n.setAttribute("data-assetpath",encodeURIComponent(this.options.assetPath)),n.style.width="100%",n.style.height="100%",this.iframe=n,this.element.appendChild(n);window.addEventListener("message",(function t(n){if("viewerLoaded"===n.data.type&&n.data.id===e.id)try{e.instance=e.iframe.contentWindow.instance}catch(e){}finally{window.removeEventListener("message",t),e._viewerLoaded(e.iframe)}}))},dispose:function(){var e=this;return new Promise((function(t){I.delete(e.element),E.delete(e.element),window.removeEventListener("message",e.messageHandler),e.iframe=null,console.clear(),e.instance.Core.documentViewer.unmount().then((function(){t()}))}))},getInstance:function(){return this.instance},setCompleteInstance:function(e){this.completeInstance=e},getCompleteInstance:function(){return this.completeInstance},_correctRelativePath:function(e){var t=window.location.pathname;return Array.isArray(e)?e.map((function(e){return i(e,t)})):i(e,t)},_testHTML5:function(){try{var e=document.createElement("canvas");return e&&e.getContext("2d")}catch(e){return!1}},_testWebAssembly:function(){return!(!window.WebAssembly||!window.WebAssembly.validate)},_testCORS:function(){return"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest},isIE:function(){var e=navigator.userAgent.toLowerCase(),t=/(msie) ([\w.]+)/.exec(e)||/(trident)(?:.*? rv:([\w.]+)|)/.exec(e);return t?parseInt(t[2],10):t},isMobileDevice:function(){return!this.isIE()&&(0===this.scrollbarWidth()&&navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Touch/i)||navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/Silk/i))},scrollbarWidth:function(){var e=document.createElement("div");e.style.cssText="width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},isSameOrigin:function(e){var t=window.location,n=document.createElement("a");n.href=e,""===n.host&&(n.href=n.href);var o=window.location.port,i=n.port;return"http:"===n.protocol?(i=i||"80",o=o||"80"):"https:"===n.protocol&&(i=i||"443",o=o||"443"),n.hostname===t.hostname&&n.protocol===t.protocol&&i===o}},T.WebViewer.Options={initialDoc:void 0,annotationAdmin:void 0,isAdminUser:void 0,annotationUser:void 0,assetPath:void 0,autoCreate:!0,autoFocusNoteOnAnnotationSelection:!0,azureWorkaround:!1,additionalTranslations:void 0,enableAzureWorkaround:!1,enableOptimizedWorkers:!0,backgroundColor:void 0,backendType:void 0,css:void 0,config:void 0,custom:void 0,documentId:void 0,documentType:void 0,preloadWorker:void 0,extension:void 0,enableAnnotations:!0,filename:void 0,disableI18n:!1,disabledElements:void 0,disableWebsockets:!1,enableOfflineMode:!1,enableReadOnlyMode:!1,isReadOnly:!1,enableRedaction:!1,disableVirtualDisplayMode:!1,enableMeasurement:!1,encryption:void 0,externalPath:void 0,hideAnnotationPanel:!1,disableToolGroupReordering:!1,uiPath:"./ui/index.html",l:void 0,licenseKey:void 0,mobileRedirect:!1,path:"",pdfBackend:void 0,webviewerServerURL:void 0,fallbackToClientSide:!1,singleServerMode:!1,fullAPI:!1,preloadPDFWorker:!0,serverUrl:void 0,serverUrlHeaders:void 0,showLocalFilePicker:!1,enableFilePicker:!1,showToolbarControl:void 0,startOffline:!1,streaming:void 0,type:"html5",useDownloader:!0,workerTransportPromise:void 0,xdomainProxyUrl:void 0,ui:void 0,forceClientSideInit:!1,loadAsPDF:!1,accessibleMode:void 0,disableLogs:!1,enableViewStateAnnotations:!1,highContrastMode:!1,selectAnnotationOnCreation:!1,notesInLeftPanel:!1,autoExpandOutlines:!1,enableAnnotationNumbering:!1,enableOfficeEditing:!1,documentXFDFRetriever:void 0,disableMultiViewerComparison:void 0,showInvalidBookmarks:!0,disableObjectURLBlobs:!1,disableFlattenedAnnotations:!1,disableStreaming:!1};var k=function(e,t){return new Promise((function(n,o){e.l=e.l||e.licenseKey,e.azureWorkaround=e.azureWorkaround||e.enableAzureWorkaround,e.annotationAdmin=e.annotationAdmin||e.isAdminUser,e.enableReadOnlyMode=e.enableReadOnlyMode||e.isReadOnly,e.showLocalFilePicker=e.showLocalFilePicker||e.enableFilePicker;t.addEventListener("ready",(function r(){t.removeEventListener("ready",r);try{var a=t.querySelector("iframe").contentWindow;if(void 0===a.Core.Tools)throw new Error("Viewer isn't instantiated correctly. It could be caused by the 'path' option in the WebViewer constructor not being defined correctly. The 'path' option should be relative to the HTML file you're loading the script on and the lib folder needs to be publicly accessible.");var s=i.getInstance(),c={iframeWindow:a,dispose:i.dispose.bind(i)},l=O({},s,g({},s.UI_NAMESPACE_KEY,y(y({},s[s.UI_NAMESPACE_KEY]),c)));i.setCompleteInstance(l);var u=Promise.resolve();if(e.documentXFDFRetriever&&(u=l[s.CORE_NAMESPACE_KEY].documentViewer.setDocumentXFDFRetriever(e.documentXFDFRetriever)),e.additionalTranslations){var d=e.additionalTranslations;l[s.UI_NAMESPACE_KEY].setTranslations(d.language,d.translations)}u.then((function(){n(l)}))}catch(t){if("config"in e&&""!==e.config)return n();o("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See https://docs.apryse.com/documentation/web/guides/wv-inside/#loading-webviewer-from-another-domain for more information.")}}));var i=new T.WebViewer(e,t)}))},C=function(e){for(var t=_(I),n=0;n<t.length;n++){var o=t[n];if(o.iframe===e)return o}return null};k.l=function(e){var t=C(e);return t&&t.l},k.workerTransportPromise=function(e){var t=C(e);return t&&t.workerTransportPromise},k.WorkerTypes={ALL:"all",OFFICE:"office",LEGACY_OFFICE:"legacyOffice",PDF:"pdf",CONTENT_EDIT:"contentEdit",OFFICE_EDITOR:"officeEditor"},k.BackendTypes=o;var M=function(e){var t=_(I);if(!t.length||!t.filter((function(e){return e.instance})).length)return console.warn("WebViewer.getInstance() was called before any instances were available"),null;if(t.length>1&&!e)throw new Error("More than one instance of WebViewer was found, and no element was passed into getInstance(). Please specify which instance you want to get.");return e?(I.get(e)||{}).instance:(t[0]||{}).instance};k.getInstance=M,window.WebViewer=k,k.WebComponent=v,k.Iframe=k;t.default=k}])}));

/***/ }),

/***/ "./src/app/pdf-view-detail/pdf-view-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pdf-view-detail/pdf-view-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PdfViewDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewDetailRoutingModule", function() { return PdfViewDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pdf_view_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-view-detail.component */ "./src/app/pdf-view-detail/pdf-view-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pdf_view_detail_component__WEBPACK_IMPORTED_MODULE_2__["PdfViewDetailComponent"],
                data: {
                    title: 'pdf-view-detail'
                },
            }
        ]
    }
];
var PdfViewDetailRoutingModule = /** @class */ (function () {
    function PdfViewDetailRoutingModule() {
    }
    PdfViewDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], PdfViewDetailRoutingModule);
    return PdfViewDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/pdf-view-detail/pdf-view-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pdf-view-detail/pdf-view-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data\" class=\"row\">\r\n    <div class=\"col-8 card-container\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"px-3\">\r\n                    <form class=\"form form-horizontal striped-rows form-bordered\">\r\n                        <div class=\"form-body\">\r\n                            <h5 class=\"card-title\"> Personal Information</h5>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"Name\">Name</label>\r\n                                                    <input type=\"text\"\r\n                                                        class=\"form-control\"\r\n                                                        id=\"Name\"\r\n                                                        name=\"Name\"\r\n                                                        [value]=\"data.read.Identity.name\"\r\n                                                        [ngClass]=\"{'red-font': data.read.Identity.name_confidence < 0.9}\"\r\n                                                        (click)=\"highlightField(data.read.Identity.name_coordinate, data.read.Identity.page_number)\"\r\n                                                        [disabled]=\"item.status==='Done'\"\r\n                                                        >\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"AccountNumber\">Account Number</label>\r\n                                                    <input type=\"text\"\r\n                                                        class=\"form-control\"\r\n                                                        id=\"AccountNumber\"\r\n                                                        name=\"AccountNumber\"\r\n                                                        [value]=\"data.read.Identity.account_number\"\r\n                                                        [ngClass]=\"{'red-font': data.read.Identity.account_number_confidence < 0.9}\"\r\n                                                        (click)=\"highlightField(data.read.Identity.account_number_coordinate, data.read.Identity.page_number)\"\r\n                                                        [disabled]=\"item.status==='Done'\"\r\n                                                        >\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"BankOffice\">Bank Office</label>\r\n                                                    <input type=\"text\"\r\n                                                        class=\"form-control\"\r\n                                                        id=\"BankOffice\"\r\n                                                        name=\"BankOffice\"\r\n                                                        [value]=\"data.read.Identity.bank_office\"\r\n                                                        [ngClass]=\"{'red-font': data.read.Identity.bank_office_confidence < 0.9}\"\r\n                                                        (click)=\"highlightField(data.read.Identity.bank_office_coordinate, data.read.Identity.page_number)\"\r\n                                                        [disabled]=\"item.status==='Done'\"\r\n                                                        >\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"Currency\">Currency</label>\r\n                                                    <input type=\"text\"\r\n                                                        class=\"form-control\"\r\n                                                        id=\"Currency\"\r\n                                                        name=\"Currency\"\r\n                                                        [value]=\"data.read.Identity.currency\"\r\n                                                        [ngClass]=\"{'red-font': data.read.Identity.currency_confidence < 0.9}\"\r\n                                                        (click)=\"highlightField(data.read.Identity.currency_coordinate, data.read.Identity.page_number)\"\r\n                                                        [disabled]=\"item.status==='Done'\"\r\n                                                        >\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label for=\"Address\">Address</label>\r\n                                                    <textarea rows=\"5\"\r\n                                                        class=\"form-control\"\r\n                                                        id=\"Address\"\r\n                                                        name=\"Address\"\r\n                                                        [value]=\"data.read.Identity.address\"\r\n                                                        [ngClass]=\"{'red-font': data.read.Identity.address_confidence < 0.9}\"\r\n                                                        (click)=\"highlightField(data.read.Identity.address_coordinate, data.read.Identity.page_number)\"\r\n                                                        [disabled]=\"item.status==='Done'\"\r\n                                                        >\r\n                                                    </textarea>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <section id=\"simple\">\r\n                                            \r\n                                            <div class=\"row text-left\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <div class=\"card\">\r\n                                                        <div class=\"card-header\">\r\n                                                            <h5 class=\"card-title\">Transaction History</h5>\r\n                                                        </div>\r\n                                                        <div class=\"card-body\">\r\n                                                            <div class=\"card-block\">\r\n                                                                <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (userRowSelect)=\"onRowSelect($event)\"\r\n                                                                    (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\">\r\n                                                                </ng2-smart-table>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </section>\r\n                        </div>\r\n                        <div class=\"form-actions right\">\r\n                            <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" (click)=\"onBackClick()\"> \r\n                                   <i class=\"ft-x\"></i> Back\r\n                            </button>\r\n                            <button *ngIf=\"item.status !== 'Done'\" type=\"button\" class=\"btn btn-raised btn-info mr-1\" (click)=\"onSaveClick()\">\r\n                                   <i class=\"ft-save\"></i> Save & Back\r\n                            </button>\r\n                            <button *ngIf=\"item.status !== 'Done'\" type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"onSubmitClick()\">\r\n                                   <i class=\"fa fa-check-square-o\"></i> Submit\r\n                            </button>\r\n                            \r\n                     </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div #viewer class=\"viewer col-4\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pdf-view-detail/pdf-view-detail.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pdf-view-detail/pdf-view-detail.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container, .viewer {\n  width: 100%;\n  height: 70vh;\n  overflow-y: auto; }\n\n.red-font {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGRmLXZpZXctZGV0YWlsL0Q6XFxCU0ErIEhJVExcXEJTQSBnaXRodWJcXGFkcC9zcmNcXGFwcFxccGRmLXZpZXctZGV0YWlsXFxwZGYtdmlldy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3BkZi12aWV3LWRldGFpbC9wZGYtdmlldy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyAuZm9ybS1hcmVhIHtcclxuICAvLyAgIHdpZHRoOiAzMCU7XHJcbiAgLy8gICBwYWRkaW5nOiAyMHB4O1xyXG4gIC8vICAgb3ZlcmZsb3cteTogYXV0bzsgLyogRm9yIHNjcm9sbGluZyAqL1xyXG4gIC8vIH1cclxuXHJcblxyXG4uY2FyZC1jb250YWluZXIsIC52aWV3ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8vIE1ha2UgdGhlIGNhcmQgYW5kIHZpZXdlciBlYWNoIHRha2UgNTAlIHdpZHRoXHJcbiAgICBoZWlnaHQ6IDcwdmg7IC8vIE1ha2UgdGhlbSB0YWtlIGZ1bGwgaGVpZ2h0IG9mIHRoZSBjb250YWluZXJcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8vIEFkZCB2ZXJ0aWNhbCBzY3JvbGxpbmcgaWYgY29udGVudCBvdmVyZmxvd3NcclxufVxyXG5cclxuLnJlZC1mb250IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/pdf-view-detail/pdf-view-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pdf-view-detail/pdf-view-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: PdfViewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewDetailComponent", function() { return PdfViewDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pdftron/webviewer */ "./node_modules/@pdftron/webviewer/webviewer.min.js");
/* harmony import */ var _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pdftron_webviewer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PdfViewDetailComponent = /** @class */ (function () {
    function PdfViewDetailComponent(http, cdr, router, route, dataService) {
        this.http = http;
        this.cdr = cdr;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.coreControlsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dpi = 200;
        this.isDataLoaded = false;
        this.hasClickedInput = false;
        this.settings = {
            columns: {
                date: {
                    title: 'Date',
                    type: 'text',
                    filter: false,
                    valuePrepareFunction: function (cell, row) {
                        if (row.date_confidence < 0.9) {
                            return cell + " (WARNING!!!)";
                        }
                        return cell;
                    },
                },
                description: {
                    title: 'Description',
                    type: 'text',
                    filter: false,
                    valuePrepareFunction: function (cell, row) {
                        if (row.description_confidence < 0.9) {
                            return cell + " (WARNING!!!)";
                        }
                        return cell;
                    },
                },
                amount: {
                    title: 'Amount',
                    type: 'text',
                    filter: false,
                    valuePrepareFunction: function (cell, row) {
                        if (row.amount_confidence < 0.9) {
                            return cell + " (WARNING!!!)";
                        }
                        return cell;
                    },
                },
                ending_balance: {
                    title: 'Ending Balance',
                    type: 'text',
                    filter: false,
                    valuePrepareFunction: function (cell, row) {
                        if (row.ending_balance_confidence < 0.9) {
                            return cell + " (WARNING!!!)";
                        }
                        return cell;
                    },
                },
                type: { title: 'Type' }
            },
            actions: {
                add: true,
                edit: true,
                delete: true
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: "<i class='ft-x danger font-medium-1 mr-2'></i>"
            },
            edit: {
                confirmSave: false,
                editButtonContent: "<i class='ft-edit-2 info font-medium-1 mr-2'></i>"
            },
            add: {
                confirmCreate: true
            },
            attr: {
                class: "table table-responsive"
            },
            pager: {
                perPage: 6
            }
        };
        this.documentLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]([]);
    }
    PdfViewDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.item_id = +params.get('id');
            _this.loadData();
        });
    };
    PdfViewDetailComponent.prototype.convertGoogleVisionToPDFTron = function (googleX) {
        var scaleFactor = 72 / this.dpi;
        var coor = googleX * scaleFactor;
        return coor;
    };
    PdfViewDetailComponent.prototype.loadData = function () {
        var _this = this;
        console.log("item_id: ", this.item_id);
        this.dataService.getJson("tasklist.json").subscribe(function (response) {
            _this.item = response.find(function (response) { return response.id === _this.item_id; });
            if (_this.item.status === 'Done') {
                _this.settings.actions.add = false;
                _this.settings.actions.delete = false;
                _this.settings.actions.edit = false;
            }
            _this.dataService.getJson(_this.item.file_json).subscribe(function (response1) {
                _this.data = response1;
                console.log('Data loaded:', _this.data); // Check what data looks like when loaded
                _this.data.read.TransactionHistory.sort(function (a, b) {
                    var dateA = new Date(a.date);
                    var dateB = new Date(b.date);
                    return dateA.getTime() - dateB.getTime(); // Ascending order
                });
                _this.isDataLoaded = true;
                _this.source.load(_this.data.read.TransactionHistory);
                _this.cdr.detectChanges(); // Manually trigger change detection
                _this.initializeWebViewer();
            }, function (error1) {
                console.error('There was an error loading the data!', error1);
            });
        }, function (error) {
            console.error('There was an error loading the data!', error);
        });
    };
    PdfViewDetailComponent.prototype.highlightField = function (coordinates, page) {
        var _a = this.wvInstance.Core, documentViewer = _a.documentViewer, Annotations = _a.Annotations, annotationManager = _a.annotationManager;
        // Clear existing annotations if necessary
        console.log(coordinates);
        annotationManager.deleteAnnotations(annotationManager.getAnnotationsList());
        var rectangleAnnot = new Annotations.RectangleAnnotation({
            PageNumber: page,
            X: this.convertGoogleVisionToPDFTron(coordinates['x']) - this.dpi / 30,
            Y: this.convertGoogleVisionToPDFTron(coordinates['y']) - this.dpi / 30,
            Width: (this.convertGoogleVisionToPDFTron(coordinates['w'])) + this.dpi / 15,
            Height: (this.convertGoogleVisionToPDFTron(coordinates['h'])) + this.dpi / 15,
            Author: annotationManager.getCurrentUser(),
            FillColor: new Annotations.Color(0, 155, 0, 0.2),
            StrokeColor: new Annotations.Color(255, 0, 0),
            StrokeThickness: 2
        });
        annotationManager.addAnnotation(rectangleAnnot);
        annotationManager.redrawAnnotation(rectangleAnnot);
        documentViewer.setCurrentPage(page, true); // Adjust scrolling if necessary
        // Set flag to indicate that an input was clicked
        this.hasClickedInput = true;
    };
    PdfViewDetailComponent.prototype.clearAnnotations = function () {
        var annotationManager = this.wvInstance.Core.annotationManager;
        annotationManager.deleteAnnotations(annotationManager.getAnnotationsList());
    };
    PdfViewDetailComponent.prototype.ngAfterViewInit = function () {
        if (this.isDataLoaded) {
            this.initializeWebViewer();
        }
        // Add global click event listener to detect clicks outside inputs
        document.addEventListener('click', this.handleDocumentClick.bind(this));
    };
    PdfViewDetailComponent.prototype.handleDocumentClick = function (event) {
        // Check if the clicked element is an input inside the form-area
        var isInputClick = event.target.closest('.input');
        if (!isInputClick) {
            // If no input was clicked, clear annotations
            if (!this.hasClickedInput) {
                this.clearAnnotations();
            }
            // Reset the flag for the next check
            this.hasClickedInput = false;
        }
        else {
            // Set flag to indicate that an input was clicked
            this.hasClickedInput = true;
        }
    };
    PdfViewDetailComponent.prototype.initializeWebViewer = function () {
        var _this = this;
        _pdftron_webviewer__WEBPACK_IMPORTED_MODULE_3___default()({
            path: 'lib',
            initialDoc: this.item.file_pdf,
        }, this.viewer.nativeElement).then(function (instance) {
            _this.wvInstance = instance;
            _this.wvInstance.UI.disableElements([
                'header',
                'downloadButton',
                'printButton',
                'highlightToolGroupButton',
                'underlineToolGroupButton',
                'strikeoutToolGroupButton',
                'squigglyToolGroupButton',
                'stickyToolGroupButton',
                'freeTextToolGroupButton',
                'shapeToolGroupButton',
                'freeHandToolGroupButton',
                'freeHandHighlightToolGroupButton',
                'eraserToolButton',
                'viewControlsButton',
                'leftPanelButton',
                'searchButton',
                'menuButton',
                'pageNavOverlay'
            ]);
            _this.wvInstance.UI.setFitMode('FitWidth');
            // this.wvInstance.UI.FitMode.Zoom = '110%';
            _this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);
            var _a = instance.Core, documentViewer = _a.documentViewer, Annotations = _a.Annotations, annotationManager = _a.annotationManager;
            documentViewer.addEventListener('annotationsLoaded', function () {
                console.log('annotations loaded');
            });
        });
    };
    PdfViewDetailComponent.prototype.onRowSelect = function (event) {
        var selectedRow = event.data;
        var coordinatesArray = [
            selectedRow.date_coordinate,
            selectedRow.amount_coordinate,
            selectedRow.description_coordinate,
            selectedRow.ending_balance_coordinate
        ];
        console.log('coordinatesArray row:', coordinatesArray);
        var minx = Math.min.apply(Math, coordinatesArray.map(function (coordinates) { return coordinates.x; }));
        var miny = Math.min.apply(Math, coordinatesArray.map(function (coordinates) { return coordinates.y; }));
        var maxX = Math.max.apply(Math, coordinatesArray.map(function (coordinates) { return coordinates.x; }));
        var maxXIndex = coordinatesArray
            .map(function (coordinates) { return coordinates.x; })
            .reduce(function (maxIndex, currentValue, currentIndex, array) { return currentValue > array[maxIndex] ? currentIndex : maxIndex; }, 0);
        var sum_w = (coordinatesArray[maxXIndex].w + maxX) - minx;
        var max_h = Math.max.apply(Math, coordinatesArray.map(function (coordinates) { return coordinates.h; }));
        console.log('Selected row:', selectedRow);
        // Assuming the selected row contains coordinates and page number
        var coor = {
            x: minx,
            y: miny,
            w: sum_w,
            h: max_h,
        };
        console.log('coor:', coor);
        this.highlightField(coor, selectedRow.page_number);
    };
    PdfViewDetailComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Save
    PdfViewDetailComponent.prototype.onSaveConfirm = function (event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    //  For confirm action On Create
    PdfViewDetailComponent.prototype.onCreateConfirm = function (event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        }
        else {
            event.confirm.reject();
        }
    };
    PdfViewDetailComponent.prototype.onBackClick = function () {
        this.router.navigate(['/tasklist']);
    };
    PdfViewDetailComponent.prototype.onSubmitClick = function () {
        var _this = this;
        var updatedData = {
            read: {
                Identity: {
                    name: document.getElementById('Name').value,
                    account_number: document.getElementById('AccountNumber').value,
                    bank_office: document.getElementById('BankOffice').value,
                    currency: document.getElementById('Currency').value,
                    address: document.getElementById('Address').value,
                },
                TransactionHistory: this.source.getAll()
            }
        };
        // Update the in-memory data object
        this.data.read = updatedData.read;
        console.log(this.data.read);
        // Send updated data to backend
        console.log(this.item.file_json);
        this.dataService.updateJson(this.item.file_json, this.data, this.item_id, "Done").subscribe(function (response) {
            console.log('Data successfully updated:', response); // Adjust the logging here
            _this.router.navigate(['/tasklist']);
        }, function (error) {
            console.error('There was an error updating the data!', error);
        });
    };
    PdfViewDetailComponent.prototype.onSaveClick = function () {
        var _this = this;
        var updatedData = {
            read: {
                Identity: {
                    name: document.getElementById('Name').value,
                    account_number: document.getElementById('AccountNumber').value,
                    bank_office: document.getElementById('BankOffice').value,
                    currency: document.getElementById('Currency').value,
                    address: document.getElementById('Address').value,
                },
                TransactionHistory: this.source.getAll()
            }
        };
        // Update the in-memory data object
        this.data.read = updatedData.read;
        console.log(this.data.read);
        // Send updated data to backend
        console.log(this.item.file_json);
        this.dataService.updateJson(this.item.file_json, this.data, this.item_id, "On Progress").subscribe(function (response) {
            console.log('Data successfully updated:', response); // Adjust the logging here
            _this.router.navigate(['/tasklist']);
        }, function (error) {
            console.error('There was an error updating the data!', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PdfViewDetailComponent.prototype, "viewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PdfViewDetailComponent.prototype, "coreControlsEvent", void 0);
    PdfViewDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-view-detail',
            template: __webpack_require__(/*! ./pdf-view-detail.component.html */ "./src/app/pdf-view-detail/pdf-view-detail.component.html"),
            styles: [__webpack_require__(/*! ./pdf-view-detail.component.scss */ "./src/app/pdf-view-detail/pdf-view-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], PdfViewDetailComponent);
    return PdfViewDetailComponent;
}());



/***/ }),

/***/ "./src/app/pdf-view-detail/pdf-view-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pdf-view-detail/pdf-view-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: PdfViewDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewDetailModule", function() { return PdfViewDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_sharing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/sharing.module */ "./src/app/shared/sharing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _pdf_view_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdf-view-detail.component */ "./src/app/pdf-view-detail/pdf-view-detail.component.ts");
/* harmony import */ var _pdf_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdf-view-detail-routing.module */ "./src/app/pdf-view-detail/pdf-view-detail-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var app_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PdfViewDetailModule = /** @class */ (function () {
    function PdfViewDetailModule() {
    }
    PdfViewDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pdf_view_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["PdfViewDetailRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                app_shared_sharing_module__WEBPACK_IMPORTED_MODULE_3__["SharingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"]
            ],
            declarations: [
                _pdf_view_detail_component__WEBPACK_IMPORTED_MODULE_5__["PdfViewDetailComponent"],
            ],
            providers: [app_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
        })
    ], PdfViewDetailModule);
    return PdfViewDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=pdf-view-detail-pdf-view-detail-module.js.map