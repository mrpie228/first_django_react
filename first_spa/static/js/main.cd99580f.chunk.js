(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{28:function(t,e,n){},46:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n(0),a=n.n(i),r=n(18),o=n.n(r),s=(n(28),n(22)),u=n(19),d=n.n(u),p=(n(46),n(21));var h=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(i.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/product",headers:""}).then((function(t){a(t.data)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"hi"}),Object(c.jsx)("ul",{children:n.map((function(t){return Object(c.jsxs)(p.a,{to:{pathname:"/product/".concat(t.id,"/"),fromDashboard:!1},children:[t.name,Object(c.jsx)("image",{src:"{p.image}"}),t.price]},t.id)}))})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),a(t),r(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),j()}},[[52,1,2]]]);
//# sourceMappingURL=main.cd99580f.chunk.js.map