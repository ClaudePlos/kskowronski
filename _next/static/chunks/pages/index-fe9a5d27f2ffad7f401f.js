_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,s=void 0!==i&&i;return n||a&&s}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),o=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function x(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var d=f[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var u=a.props[d],x=r[d]||new Set;"name"===d&&s||!x.has(u)?(x.add(u),r[d]=x):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(o.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:x,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var j=p;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||s()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("nKUr"),a=n("MX0m"),i=n.n(a),s=n("g4pe"),o=n.n(s),c=n("YFqc"),l=n.n(c);function d(){return Object(r.jsxs)("div",{className:"jsx-3585467787 container",children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{className:"jsx-3585467787",children:"Anfix"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-3585467787"})]}),Object(r.jsxs)("main",{className:"jsx-3585467787",children:[Object(r.jsxs)("h1",{className:"jsx-3585467787 title",children:["Anfix"," ",Object(r.jsx)(l.a,{href:"/posts/first-post",children:Object(r.jsx)("a",{className:"jsx-3585467787",children:"Klaudiusz Skowronski"})})]}),Object(r.jsxs)("p",{className:"jsx-3585467787 description",children:["Posty: ",Object(r.jsx)("code",{className:"jsx-3585467787",children:"kilknij w poni\u017cszy temat"})]}),Object(r.jsxs)("div",{className:"jsx-3585467787 grid",children:[Object(r.jsxs)("a",{href:"/kskowronski/posts/portal-pracowniczy",className:"jsx-3585467787 card",children:[Object(r.jsx)("h3",{className:"jsx-3585467787",children:"Portal Pracowniczy \u2192"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"Portal Pracowniczy jest dedykowany dla ka\u017cdej organizacji i jej pracownik\xf3w, niezale\u017cnie od stanowiska w strukturze."}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"G\u0142\xf3wnym zadaniem jest u\u0142atwienie czynno\u015bci zwi\u0105zanych z zarz\u0105dzaniem procesami HR w organizacji."})]}),Object(r.jsxs)("a",{href:"/kskowronski/posts/raporty-kasowe",className:"jsx-3585467787 card",children:[Object(r.jsx)("h3",{className:"jsx-3585467787",children:"Raporty Kasowe \u2192"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"Program prowadzi ewidencj\u0119 dokument\xf3w kasowych KP/KW i drukuje raport kasowy."}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"Mo\u017cliwo\u015b\u0107 wprowadzania wielu kas. Funkcjonalna, prosta i wygodna w u\u017cyciu aplikacja. Prosty i \u0142atwy w obs\u0142udze."})]}),Object(r.jsxs)("a",{href:"https://dataworkshop.eu/free-webinar?utm_source=youtube&utm_medium=description&utm_campaign=nlp2&utm_term=channel&utm_content=dataworkshop#joinwebinar",target:"_blank",className:"jsx-3585467787 card",children:[Object(r.jsx)("h3",{className:"jsx-3585467787",children:"NLP \u2192"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"How bulid AI code and develop."}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"2021-04-20"})]}),Object(r.jsxs)("a",{href:"https://github.com/ClaudePlos/pattern_ractive_dev",target:"_blank",className:"jsx-3585467787 card",children:[Object(r.jsx)("h3",{className:"jsx-3585467787",children:"Reactive in java \u2192"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"How write reactive code in java!"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"2021-04-19"})]}),Object(r.jsxs)("a",{href:"https://github.com/ClaudePlos/rusic",target:"_blank",className:"jsx-3585467787 card",children:[Object(r.jsx)("h3",{className:"jsx-3585467787",children:"Rust language \u2192"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"Fast project in RUST language."}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"2021-04-15"})]}),Object(r.jsxs)("a",{href:"https://github.com/ClaudePlos",target:"_blank",className:"jsx-3585467787 card",children:[Object(r.jsx)("h3",{className:"jsx-3585467787",children:"My github \u2192"}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"See my project."}),Object(r.jsx)("p",{className:"jsx-3585467787",children:"2021-03-19"})]})]})]}),Object(r.jsx)("footer",{className:"jsx-3585467787",children:Object(r.jsxs)("a",{href:"https://cash.rekeep.pl",target:"_blank",rel:"noopener noreferrer",className:"jsx-3585467787",children:["Powered by"," ","k.skowronski"]})}),Object(r.jsx)(i.a,{id:"989058121",children:[".container.jsx-3585467787{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-3585467787{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-3585467787{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-3585467787 img.jsx-3585467787{margin-left:0.5rem;}","footer.jsx-3585467787 a.jsx-3585467787{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-3585467787{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-3585467787 a.jsx-3585467787{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-3585467787 a.jsx-3585467787:hover,.title.jsx-3585467787 a.jsx-3585467787:focus,.title.jsx-3585467787 a.jsx-3585467787:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-3585467787{margin:0;line-height:1.15;font-size:3rem;}",".title.jsx-3585467787,.description.jsx-3585467787{text-align:center;}",".description.jsx-3585467787{line-height:1.5;font-size:1.5rem;}","code.jsx-3585467787{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",".grid.jsx-3585467787{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",".card.jsx-3585467787{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-3585467787:hover,.card.jsx-3585467787:focus,.card.jsx-3585467787:active{color:#0070f3;border-color:#0070f3;}",".card.jsx-3585467787 h3.jsx-3585467787{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-3585467787 p.jsx-3585467787{margin:0;font-size:1.25rem;line-height:1.5;}",".logo.jsx-3585467787{height:1em;}","@media (max-width:600px){.grid.jsx-3585467787{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),Object(r.jsx)(i.a,{id:"3379920139",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),o=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){s(n,e);var t=l(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);