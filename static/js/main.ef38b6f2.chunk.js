(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var d=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),u=Object(r.a)(o,2),d=u[0],j=u[1],N=d!==s.NONE||n,O=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;case s.NONE:return 0;default:throw new Error("Invalid sort type")}})),c?o.reverse():o}(h,{isReversed:n,sortType:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":d!==s.ALPHABET}),onClick:function(){return j(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":d!==s.LENGTH}),onClick:function(){return j(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!n}),onClick:function(){return c(!n)},children:"Reverse"}),N&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(s.NONE),c(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:O.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ef38b6f2.chunk.js.map