(this.webpackJsonptest2=this.webpackJsonptest2||[]).push([[0],{44:function(e){e.exports=JSON.parse('{"shopping_list":"Shopping List","messenger":"Messenger","settings":"Settings","language":"Language","comming_soon":"Comming Soon"}')},45:function(e){e.exports=JSON.parse('{"shopping_list":"\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f","messenger":"\u067e\u06cc\u0627\u0645 \u0631\u0633\u0627\u0646","settings":"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a","language":"\u0632\u0628\u0627\u0646","comming_soon":"\u0628\u0647 \u0632\u0648\u062f\u06cc"}')},51:function(e,t,n){},53:function(e,t,n){},67:function(e,t,n){},71:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var s,c=n(1),a=n(20),r=n.n(a),i=n(11),o=n(15),j=n(4),l=n(10),u=n.n(l),b=n(13),p=n(25),d=(n(51),n.p+"static/media/logo-white.38a3a261.png"),O=n(2),h=function(){return Object(O.jsxs)("div",{className:"main-header",children:[Object(O.jsx)("span",{className:"title",children:"anbilak"}),Object(O.jsx)("img",{src:d,alt:"Xanbilak Logo",className:"xanbilak-logo"})]})},x=n(82),g=(n(53),n(38)),m=n(37),f=n(36),v=function(){var e=Object(x.a)().t;return Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:e("shopping_list")}),Object(O.jsx)(f.a,{className:"list-icon"})]})}),Object(O.jsx)(o.b,{to:"/messenger",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:e("messenger")}),Object(O.jsx)(m.a,{className:"messenger-icon"})]})}),Object(O.jsx)(o.b,{to:"/settings",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:e("settings")}),Object(O.jsx)(g.a,{className:"setting-icon"})]})})]})},N=Object({NODE_ENV:"production",PUBLIC_URL:"/test2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_BASE_URL||"",S=Object({NODE_ENV:"production",PUBLIC_URL:"/test2",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_VERSION||"",_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S;return fetch(t+"/"+n+"/"+e,{method:"GET",headers:{accept:"application/json"}}).then((function(e){return{response:e.json(),status:e.status,statusText:e.statusText}})).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var n,s,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.response,s=t.status,c=t.statusText,e.t0=s,e.next=200===e.t0||201===e.t0||204===e.t0?4:5;break;case 4:return e.abrupt("return",n);case 5:return e.next=7,n;case 7:throw a=e.sent,new Error("Error "+s+" : "+(a&&a.message?a.message:c||"No error message"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:S,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"POST";return fetch(n+"/"+s+"/"+e,{method:c,headers:{"content-type":"application/json",accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return{response:e.json(),status:e.status,statusText:e.statusText}})).then(function(){var e=Object(b.a)(u.a.mark((function e(t){var n,s,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.response,s=t.status,c=t.statusText,e.t0=s,e.next=200===e.t0||201===e.t0||204===e.t0?4:5;break;case 4:return e.abrupt("return",n);case 5:return e.next=7,n;case 7:throw a=e.sent,new Error("Error "+s+" : "+(a&&a.message?a.message:c||"No error message"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},T=(n(67),n(26)),k=n.n(T),w=n(23),C=function(e){var t=e.item,n=e.onChange,s=t.id,a=t.title,r=t.isBought,o=t.description,j=t.createDate,l=Object(c.useState)(!1),u=Object(i.a)(l,2),b=u[0],p=u[1];return k.a.loadPersian({dialect:"persian-modern",usePersianDigits:!0}),Object(O.jsxs)("li",{className:"shopping-item",children:[Object(O.jsxs)("div",{className:"main-info",onClick:function(e){return p(!b)},children:[Object(O.jsx)("input",{type:"checkbox",onChange:function(e){return n(s)},checked:r}),Object(O.jsx)("span",{className:"title",children:a.length>30&&!b?a.substring(0,30)+"...":a})]}),Object(O.jsxs)("div",{className:"extra-info"+(b?"":" is-collapse"),children:[Object(O.jsx)("div",{className:"description",children:o}),Object(O.jsxs)("div",{className:"date-and-time",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(w.a,{className:"abc"}),k()(j).format("dddd\u060c jD jMMMM jYYYY")]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(w.b,{}),k()(j).format("HH:mm:ss")]})]})]})]})},P=(n(71),n(39)),L=n(30),y=n(40),A=n.n(y),F=Object(L.css)(s||(s=Object(P.a)(["\ndisplay: block;\nmargin: 0 auto;\nborder-color: #AE00FF;\n"]))),R=function(e){var t=e.color,n=void 0===t?"#FFFFFF":t,s=e.size,c=void 0===s?40:s;return Object(O.jsx)(A.a,{color:n,loading:!0,css:F,size:c})},D=function(e){var t,n=Object(c.useState)([]),s=Object(i.a)(n,2),a=s[0],r=s[1],o=Object(c.useState)(!0),j=Object(i.a)(o,2),l=j[0],d=j[1],x=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,_("shoppingList");case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error in reading shopping list :",e.t0);case 11:d(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,E("shoppingItem/create",{title:t||"<No Title>"});case 4:n=e.sent,p.b.success("\xab"+n.title+"\xbb \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0628\u0647 \u0644\u06cc\u0633\u062a \u0627\u0636\u0627\u0641\u0647 \u0634\u062f"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error in creating shopping item :",e.t0);case 11:d(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==n.charCode){e.next=5;break}return e.next=3,g(n.target.value);case 3:t.value="",x();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){};return Object(c.useEffect)((function(){return x(),function(){}}),[]),Object(O.jsxs)("div",{className:"page-wrapper",children:[Object(O.jsx)(h,{}),Object(O.jsx)("div",{className:"add-box",children:Object(O.jsx)("input",{type:"text",onKeyPress:m,ref:function(e){return t=e}})}),Object(O.jsx)("div",{className:"shopping-list",children:Object(O.jsx)("ul",{children:l?Object(O.jsx)(R,{}):0===a.length?Object(O.jsx)("span",{children:"No Items in list"}):a.map((function(e,t){return Object(O.jsx)(C,{item:e,onChange:f},e.id)}))})}),Object(O.jsx)(v,{})]})},I=function(){return Object(O.jsx)("div",{children:"Login Page"})},H=function(){return Object(O.jsx)("div",{children:"404"})},K=Object(c.createContext)(null),W=(n(77),function(){var e=Object(x.a)().t;return Object(O.jsxs)("div",{className:"page-wrapper",children:[Object(O.jsxs)("div",{className:"messenger-box",style:{textAlign:"center"},children:[Object(O.jsx)("h2",{children:e("messenger")}),Object(O.jsx)("h3",{children:e("comming_soon")})]}),Object(O.jsx)(v,{})]})}),B=n(16),J=(n(78),function(){var e=Object(c.useState)("\u0641\u0627\u0631\u0633\u06cc"),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(x.a)().t;return Object(O.jsxs)("div",{className:"page-wrapper",children:[Object(O.jsxs)("div",{className:"settings-box",children:[Object(O.jsx)("h2",{children:a("settings")}),Object(O.jsx)("hr",{}),Object(O.jsxs)("span",{children:[a("language")," :"]}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){"en"===(localStorage.getItem("i18nextLng")||"en")?(localStorage.setItem("i18nextLng","fa"),B.a.changeLanguage("fa"),console.log("fa"),s("\u0641\u0627\u0631\u0633\u06cc")):(localStorage.setItem("i18nextLng","en"),B.a.changeLanguage("en"),console.log("en"),s("English"))},children:n})]}),Object(O.jsx)(v,{})]})}),M=(n(79),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(i.a)(a,2),l=r[0],u=r[1];return Object(c.useEffect)((function(){return u({id:1,userName:"emit",firstName:"\u0639\u0645\u0627\u062f",lastName:"\u0622\u0631\u0645\u0648\u0646"}),s(!0),function(){}}),[]),Object(O.jsx)("div",{className:"app-wrapper",children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(K.Provider,{value:l,children:[n?Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(O.jsx)(j.a,{exact:!0,path:"/messenger",component:W}),Object(O.jsx)(j.a,{exact:!0,path:"/settings",component:J}),Object(O.jsx)(j.a,{path:"/404",component:H}),Object(O.jsx)(j.a,{path:"*",component:H})]}):Object(O.jsx)(j.c,{children:Object(O.jsx)(j.a,{exact:!0,path:"*",component:I})}),Object(O.jsx)(p.a,{rtl:!0,draggable:!0,closeOnClick:!0,position:"bottom-center",className:"toast-box"})]})})})}),U=n(19),V=n(42),Y=n(43),z={en:{translation:n(44)},fa:{translation:n(45)}};B.a.use(V.a).use(Y.a).use(U.e).init({resources:z,fallbackLng:["en"],detection:{checkWhitelist:!0},debug:!1,whitelist:["en","fa"],interpolation:{escapeValue:!1}});B.a,n(80);r.a.render(Object(O.jsx)(c.Suspense,{fallback:"...",children:Object(O.jsx)(M,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.2f45fb95.chunk.js.map