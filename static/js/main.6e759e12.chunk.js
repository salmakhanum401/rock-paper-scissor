(this["webpackJsonprock-paper-scissor"]=this["webpackJsonprock-paper-scissor"]||[]).push([[0],{21:function(e,c,s){},31:function(e,c,s){},32:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s.n(t),r=s(10),i=s.n(r),n=s(7),o=(s(21),s(8)),j=s(0),l=function(e){var c=e.score;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("span",{children:"Rock"}),Object(j.jsx)("span",{children:"Paper"}),Object(j.jsx)("span",{children:"Scissors"})]}),Object(j.jsxs)("div",{className:"score-box",children:[Object(j.jsx)("span",{children:"Score "}),Object(j.jsx)("div",{className:"score-box__score",children:Object(j.jsx)("span",{children:c})})]})]})},d=function(e){var c=e.userChoice,s=e.userScore,a=e.setUserScore,r=Object(t.useState)(""),i=Object(o.a)(r,2),l=i[0],d=i[1],b=Object(t.useState)(""),O=Object(o.a)(b,2),x=O[0],m=O[1];Object(t.useEffect)((function(){d(["rock","paper","scissors"][Math.floor(3*Math.random())])}),[]);return Object(t.useEffect)((function(){"rock"===c&&"scissors"===l?(m("Win"),a(s+1)):"rock"===l&&"scissors"===c?(m("Lose"),a(s-1)):"paper"===c&&"rock"===l?(m("Win"),a(s+1)):"rock"===c&&"paper"===l?(m("Lose"),a(s-1)):"scissors"===c&&"paper"===l?(m("Win"),a(s+1)):"paper"===c&&"scissors"===l?(m("Lose"),a(s-1)):m("Draw")}),[l]),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsxs)("div",{className:"game__you",children:[Object(j.jsx)("span",{className:"text",children:"You choose"}),Object(j.jsx)("div",{className:"icon icon--".concat(c)})]}),"Win"===x&&Object(j.jsxs)("div",{className:"result__play",children:[Object(j.jsx)("div",{className:"text",children:"You Win"}),Object(j.jsx)(n.b,{to:"/rock-paper-scissor",exact:!0,className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),"Lose"===x&&Object(j.jsxs)("div",{className:"result__play",children:[Object(j.jsx)("div",{className:"text",children:"You Loose"}),Object(j.jsx)(n.b,{to:"/rock-paper-scissor",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),"Draw"===x&&Object(j.jsxs)("div",{className:"result__play",children:[Object(j.jsx)("div",{className:"text",children:"Draw"}),Object(j.jsx)(n.b,{to:"/rock-paper-scissor",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),Object(j.jsxs)("div",{className:"game__comp",children:[Object(j.jsx)("span",{className:"text",children:"Computer Choose"}),Object(j.jsx)("div",{className:"icon icon--".concat(l)})]})]})},b=s.p+"static/media/bg-triangle.c0c30b56.svg",O=function(e){var c=e.setUserChoice,s=function(e){c(e.target.dataset.id)};return Object(j.jsxs)("div",{className:"play",children:[Object(j.jsx)("img",{src:b,className:"triangle",alt:""}),Object(j.jsxs)("div",{className:"items",children:[Object(j.jsx)(n.b,{to:"/game",children:Object(j.jsx)("div",{"data-id":"paper",onClick:s,className:"icon icon--paper"})}),Object(j.jsx)(n.b,{to:"/game",children:Object(j.jsx)("div",{"data-id":"scissors",onClick:s,className:"icon icon--scissors"})}),Object(j.jsx)(n.b,{to:"/game",children:Object(j.jsx)("div",{"data-id":"rock",onClick:s,className:"icon icon--rock"})})]})]})},x=s.p+"static/media/icon-close.bde602ec.svg",m=s.p+"static/media/image-rules.258b753f.svg",h=function(e){var c=e.toggle;return i.a.createPortal(Object(j.jsx)("div",{className:"modal-container",children:Object(j.jsxs)("div",{className:"modal-box",children:[Object(j.jsxs)("div",{className:"modal__header",children:[Object(j.jsx)("h1",{children:"Rules"}),Object(j.jsx)("button",{onClick:c,children:Object(j.jsx)("img",{src:x,alt:""})})]}),Object(j.jsx)("img",{src:m,alt:""})]})}),document.getElementById("modal"))},u=function(){var e=Object(t.useState)(!1),c=Object(o.a)(e,2),s=c[0],a=c[1],r=function(){a(!s)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("div",{className:"attribution"}),Object(j.jsx)("button",{className:"rules",onClick:r,children:"RULES"}),s?Object(j.jsx)(h,{toggle:r}):null]})})},p=s(2);s(31);var v=function(){var e=Object(t.useState)(""),c=Object(o.a)(e,2),s=c[0],a=c[1],r=Object(t.useState)(0),i=Object(o.a)(r,2),n=i[0],b=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l,{score:n}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/rock-paper-scissor",children:Object(j.jsx)(O,{setUserChoice:a})}),Object(j.jsx)(p.a,{exact:!0,path:"/game",children:Object(j.jsx)(d,{userChoice:s,userScore:n,setUserScore:b})})]})]}),Object(j.jsx)(u,{})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(n.a,{children:Object(j.jsx)(v,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.6e759e12.chunk.js.map