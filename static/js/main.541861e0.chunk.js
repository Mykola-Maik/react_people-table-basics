(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c(8),r=c(2),s=(c(34),c(35),c(36),c(0)),i=c(10),j=c.n(i),l=c(3),o=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.b,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(l.jsx)(a.b,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:"people",children:"People"})]})})})},h=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(r.b,{})})})]})},b=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),u=(c(38),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=function(e){var t=e.person,c=void 0===t?{slug:"",name:"",sex:""}:t,n=c.slug,r=c.name,s=c.sex;return Object(l.jsx)(a.a,{to:"".concat(n),className:j()({"has-text-danger":"f"===s}),children:r})},m=function(e){var t=e.person,c=Object(r.q)().slug,n=t.slug===c,s=t.sex,i=t.name,o=t.born,h=t.died,b=t.mother,d=t.father,u=t.motherName,O=t.fatherName;return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":n}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(a.a,{className:j()({"has-text-danger":"f"===s}),to:"".concat(t.slug),children:i})}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:o}),Object(l.jsx)("td",{children:h}),Object(l.jsxs)("td",{children:[b&&Object(l.jsx)(x,{person:t.mother}),!b&&"".concat(u||"-")]}),Object(l.jsxs)("td",{children:[d&&Object(l.jsx)(x,{person:t.father}),!d&&"".concat(O||"-")]})]})},p=c(23),f=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(d.a)(a,2),i=r[0],j=r[1],o=Object(s.useState)(!1),h=Object(d.a)(o,2),b=h[0],x=h[1];Object(s.useEffect)((function(){x(!0),O().then((function(e){return n(e)})).catch((function(){return j(!0)})).finally((function(){return x(!1)}))}),[]);var f=function(e){var t=new Map;return e.forEach((function(e){t.set(e.name,e)})),e.map((function(e){var c=t.get(e.motherName),n=t.get(e.fatherName);return Object(p.a)(Object(p.a)({},e),{},{mother:c,father:n})}))}(c);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[b&&Object(l.jsx)(u,{}),i&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!b&&0===c.length&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:f.map((function(e){return Object(l.jsx)(m,{person:e},e.slug)}))})]})]})})]})},g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})})]})},v=Object(a.c)([{path:"/",element:Object(l.jsx)(h,{}),errorElement:Object(l.jsx)(g,{}),children:[{index:!0,element:Object(l.jsx)(b,{})},{path:"/people",element:Object(l.jsx)(f,{}),children:[{path:":slug",element:Object(l.jsx)(f,{})}]},{path:"home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})}]}]);Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(r.d,{router:v}))}},[[39,1,2]]]);
//# sourceMappingURL=main.541861e0.chunk.js.map