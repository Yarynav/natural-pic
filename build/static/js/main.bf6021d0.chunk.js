(this["webpackJsonpdesafio-natural-pic"]=this["webpackJsonpdesafio-natural-pic"]||[]).push([[0],{21:function(t,e,c){},22:function(t,e,c){},24:function(t,e,c){},25:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(10),s=c(8),o=c(11),i=c(4),a=(c(21),c(7)),j=c(2),u=(c(22),c(1));function l(){return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)(a.b,{to:"/",children:" Home "})," | ",Object(u.jsx)(a.b,{to:"/favoritos",children:" Favoritos "})]})}var d=c(12),b=(c(24),Object(n.createContext)({})),f=function(t){var e=t.children,c=t.value;return Object(u.jsx)(b.Provider,{value:c,children:Object(u.jsx)("div",{children:e})})};function O(t){var e=t.filled;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("svg",{width:"40px",viewBox:"0 0 24 24",children:Object(u.jsx)("path",{fill:e?"red":"white",d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"})})})}var h=function(t){var e=t.photo,c=t.onClick;return Object(u.jsxs)("div",{className:"foto",style:{backgroundImage:"url(".concat(e.src.portrait,")")},onClick:function(){try{c()}catch(t){}},children:[Object(u.jsx)(O,{filled:e.liked}),Object(u.jsx)("p",{children:e.alt})]})};function x(){var t=Object(n.useContext)(b),e=t.fotos,c=t.setFotos;return Object(u.jsx)("div",{className:"galeria grid-columns-5 p-3",children:e.map((function(t,n){return Object(u.jsx)(h,{onClick:function(){return function(t){var n=Object(d.a)(e);n[t].liked=!n[t].liked,c(n)}(n)},photo:t},n)}))})}function v(){return Object(u.jsxs)("div",{id:"Home",children:[Object(u.jsx)("h1",{children:"Natural Pic"}),Object(u.jsx)(x,{})]})}function p(){var t=Object(n.useContext)(b).fotos;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Fotos favoritas"}),Object(u.jsx)("div",{className:"p-3 galeria grid-columns-4",children:t.filter((function(t){return t.liked})).map((function(t,e){return Object(u.jsx)(h,{photo:t},e)}))})]})}function m(){var t=Object(n.useState)([]),e=Object(i.a)(t,2),c=e[0],r=e[1],d=function(){var t=Object(o.a)(Object(s.a)().mark((function t(){var e,c;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/fotos.json",t.next=3,fetch("/fotos.json");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,r(c.photos);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{value:{fotos:c,setFotos:r},children:Object(u.jsxs)(a.a,{children:[Object(u.jsx)(l,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/",element:Object(u.jsx)(v,{})}),Object(u.jsx)(j.a,{path:"/favoritos",element:Object(u.jsx)(p,{})})]})]})})})}var C=document.getElementById("root");Object(r.createRoot)(C).render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(m,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.bf6021d0.chunk.js.map