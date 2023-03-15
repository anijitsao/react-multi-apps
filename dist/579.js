"use strict";(self.webpackChunkreact_app_simple_calculator=self.webpackChunkreact_app_simple_calculator||[]).push([[579],{579:(n,e,r)=>{r.r(e),r.d(e,{default:()=>w});var o=r(294),t=r(438),A=r(893);const i=n=>{const{value:e,rowIndex:r,colIndex:o,onClickHandler:i}=n,a=(r+o+1)%2==0?"even-box box":"odd-box box",l=(0,t.g)();return(0,A.jsx)("div",{id:`${r}-${o}`,className:a,onClick:i,children:e==l.USER_MOVE?"X":e==l.COMPUTER_MOVE?"O":""})},a=(0,t.g)(),l=(n,e,r)=>r[n][e]==a.EMPTY_CELL,s=n=>{let e="",r="";const o=a.GRID_LENGTH;for(let t=0;t<o;t++)for(let A=0;A<o;A++)t==A&&(e=`${e}${n[t][A]}`),t+A+1==o&&(r=`${r}${n[t][A]}`);return[e,r]};var c=r(379),d=r.n(c),E=r(795),C=r.n(E),g=r(569),p=r.n(g),m=r(565),h=r.n(m),u=r(216),B=r.n(u),x=r(589),v=r.n(x),b=r(632),f={};f.styleTagTransform=v(),f.setAttributes=h(),f.insert=p().bind(null,"head"),f.domAPI=C(),f.insertStyleElement=B(),d()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals;const w=n=>{const e=(0,t.g)(),[r,a]=(0,o.useState)(e.BOX_INITIAL),[c,d]=(0,o.useState)(!0),[E,C]=(0,o.useState)(!1),[g,p]=(0,o.useState)("TBD");(0,o.useEffect)((()=>{Array.isArray(r)&&!c&&(B(),v())}));const m=e.GRID_LENGTH,h=n=>{const{id:e}=n.target;if(console.log("code comes here",e),E)b();else{const[n,o]=(n=>{let[e,r]=n.split("-");return e=parseInt(e),r=parseInt(r),[e,r]})(e);!0===l(n,o,r)&&u(n,o)}},u=(n,o)=>{console.log("Code for user move");const t=JSON.parse(JSON.stringify(r));t[n][o]=e.USER_MOVE,a(t),d(!1)},B=()=>{for(let n=0;n<m;n++){let e=r[n].join("");x(e)}const n=r[0].map(((n,e)=>r.map((n=>n[e]))));for(let e=0;e<m;e++){let r=n[e].join("");x(r)}let[e,o]=s(r);x(e),x(o)},x=n=>{const r=n.split("").every((r=>r!=e.EMPTY_CELL&&r==n[0]));if(n&&r){const r=n[0]==e.USER_MOVE?e.USER_MOVE:e.COMPUTER_MOVE;b(r)}},v=()=>{for(;!c;){let n=Math.floor(Math.random()*m)+0,o=Math.floor(Math.random()*m)+0;if(console.log("random cell generated",n," ",o),l(o,n,r)){const t=JSON.parse(JSON.stringify(r));return t[o][n]=e.COMPUTER_MOVE,a(t),void d(!0)}}},b=n=>{let r=n?n==e.USER_MOVE?"You won":"Computer won":"GAME TIED";console.log("RESULT of the game is",g),C(!0),"TBD"==g&&p(r)};return(0,A.jsx)("div",{className:"box-container",children:g&&"TBD"!=g?(0,A.jsx)("div",{className:"result--div",children:`${g}!!!`}):Array.isArray(r)&&r.map(((n,e)=>(0,A.jsx)("div",{className:"row-container",children:n.map(((n,r)=>(0,A.jsx)(i,{value:n,rowIndex:e,colIndex:r,onClickHandler:h},r)))},e)))})}},632:(n,e,r)=>{r.d(e,{Z:()=>a});var o=r(537),t=r.n(o),A=r(645),i=r.n(A)()(t());i.push([n.id,"/* Tic Tac Toe box related */\n.box-container {\n  background-color: var(--lighter-grey);\n  padding: 1em;\n\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.row-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 7px 1px;\n  text-align: center;\n  width: 30vw;\n}\n\n/* all the boxes of the tic tac toe */\n.box {\n  color: var(--lighter-grey);\n  padding: 1.17em;\n  font-weight: 700;\n  font-size: 1.5rem;\n  height: 6rem;\n}\n\n.box:hover {\n  opacity: 0.8;\n  transition: var(--slow-transition);\n  cursor: pointer;\n}\n\n.even-box {\n  background-color: var(--lighter-grey);\n  color: var(--light-purple);\n}\n\n.odd-box {\n  background-color: var(--light-purple);\n  color: var(--lighter-grey);\n}\n\n.result--div {\n  font-size: 1.5rem;\n  font-weight: 100;\n}\n\n/* media queries to make it responsive */\n@media only screen and (max-width: 600px) {\n  .row-container {\n    width: 39vw;\n  }\n\n  .box {\n    padding: 2.1em;\n    width: 3rem;\n  }\n\n  .box-container {\n    padding-left: 0;\n    padding-right: 5rem;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/tictactoe.css"],names:[],mappings:"AAAA,4BAA4B;AAC5B;EACE,qCAAqC;EACrC,YAAY;;EAEZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA,qCAAqC;AACrC;EACE,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,wCAAwC;AACxC;EACE;IACE,WAAW;EACb;;EAEA;IACE,cAAc;IACd,WAAW;EACb;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;AACF",sourcesContent:["/* Tic Tac Toe box related */\n.box-container {\n  background-color: var(--lighter-grey);\n  padding: 1em;\n\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.row-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 7px 1px;\n  text-align: center;\n  width: 30vw;\n}\n\n/* all the boxes of the tic tac toe */\n.box {\n  color: var(--lighter-grey);\n  padding: 1.17em;\n  font-weight: 700;\n  font-size: 1.5rem;\n  height: 6rem;\n}\n\n.box:hover {\n  opacity: 0.8;\n  transition: var(--slow-transition);\n  cursor: pointer;\n}\n\n.even-box {\n  background-color: var(--lighter-grey);\n  color: var(--light-purple);\n}\n\n.odd-box {\n  background-color: var(--light-purple);\n  color: var(--lighter-grey);\n}\n\n.result--div {\n  font-size: 1.5rem;\n  font-weight: 100;\n}\n\n/* media queries to make it responsive */\n@media only screen and (max-width: 600px) {\n  .row-container {\n    width: 39vw;\n  }\n\n  .box {\n    padding: 2.1em;\n    width: 3rem;\n  }\n\n  .box-container {\n    padding-left: 0;\n    padding-right: 5rem;\n  }\n}\n"],sourceRoot:""}]);const a=i}}]);
//# sourceMappingURL=579.js.map