(this["webpackJsonpmainapp-ia"]=this["webpackJsonpmainapp-ia"]||[]).push([[0],{33:function(t,e,a){},52:function(t,e,a){},59:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),s=a(27),i=a.n(s),r=(a(33),a(8)),j=a.n(r),o=(a.p,a(52),a(25),a(9)),l=a(11),b=a(1);var d=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),a=e[0],n=e[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/"}).then((function(t){n(t.data)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[a.map((function(t){return Object(b.jsx)(l.b,{className:"nav-link",to:{pathname:"/category/".concat(t.id,"/"),froDashboard:!1},children:t.name})})),Object(b.jsx)("li",{className:"nav-item"})]})})]})})};var h=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(o.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)([]),d=Object(o.a)(r,2),h=d[0],p=d[1],u=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(t){i(t.data),p(t.data.posts)}))}),[u]),Object(b.jsxs)("div",{children:["Category id ",s.id,Object(b.jsxs)("p",{children:["Category: ",Object(b.jsx)("strong",{children:s.name})," "]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"row",children:h.map((function(t){return Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h4",{children:t.title}),Object(b.jsx)("p",{children:t.content}),Object(b.jsx)("p",{children:t.id}),Object(b.jsx)(l.b,{to:{pathname:"/post/".concat(t.id,"/"),froDashboard:!1},children:"Detail:"})]},t.id)}))})]})};var p=function(t){var e=t.match,a=Object(c.useState)({}),n=Object(o.a)(a,2),s=n[0],i=n[1],r=e.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/posts".concat(r,"/")}).then((function(t){i(t.data)}))}),[r]),Object(b.jsxs)("div",{children:["Post with id ",s.id,Object(b.jsxs)("p",{children:["Title ",Object(b.jsx)("strong",{children:s.title})]})]})},u=a(2);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/posts/:id",exect:!0,component:p}),Object(b.jsx)(u.a,{path:"/category/:id",exect:!0,component:h})]})]})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[59,1,2]]]);
//# sourceMappingURL=main.982bc966.chunk.js.map