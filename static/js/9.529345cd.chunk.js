(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1108:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Xe}));var c,r,i,a,o,s,b,l,j,u,d,O,m,x,p,f,h,g,v,k,y,w,C,T,S=n(35),z=n(0),N=n(5),B=n(22),F=n(146),P=n(3),L=n.n(P),R=n(8),A=n(32),Q=n(43),U=n(14),H=n(84),I=n(838),M=n(6),q=n(10),E=n.n(q),D=n(104),W=n(46),J=n(20),K=n(189),V=n(119),X=function(){var e=Object(z.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],r=Object(Q.c)().account,i=Object(V.a)().fastRefresh;return Object(z.useEffect)((function(){r&&function(){var e=Object(R.a)(L.a.mark((function e(){var t,n,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.a.map((function(e){return{address:Object(J.l)(),name:"pending".concat(Object(D.capitalize)(U.b.tokenKeyMasterChef)),params:[e.pid,r]}})),e.next=3,Object(W.a)(U.b.masterChefABI,t);case 3:n=e.sent,i=K.a.map((function(e,t){return Object(M.a)(Object(M.a)({},e),{},{balance:new E.a(n[t])})})),c(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},$=n(246),_=function(){var e=Object(z.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],r=Object(Q.c)().account,i=Object(V.a)().fastRefresh;return Object(z.useEffect)((function(){r&&function(){var e=Object(R.a)(L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=K.a.map((function(e){return{address:Object(J.l)(),name:"pending".concat(Object(D.capitalize)(U.b.tokenKeyMasterChef)),params:[e.pid,r]}})),e.next=3,Object(W.a)(U.b.masterChefABI,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},Y=n(79),G=n(144),Z=n(804),ee=n(814),te=n(7),ne=N.e.div(c||(c=Object(S.a)(["\n  margin-bottom: 24px;\n"]))),ce=function(){var e=Object(H.b)().t,t=Object(Q.c)().account,n=_().reduce((function(e,t){var n=new E.a(t);return n.eq(0)?e:e+n.div(G.g).toNumber()}),0),c=Object(Y.C)(),r=new E.a(n).multipliedBy(c).toNumber();return t?Object(te.jsxs)(ne,{children:[Object(te.jsx)(Z.a,{value:n,lineHeight:"1.5"}),!c.eq(0)&&Object(te.jsx)(ee.a,{value:r})]}):Object(te.jsx)(B.Pb,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},re=n(794),ie=n(65),ae=function(){var e=Object(H.b)().t,t=Object(re.a)(Object(J.e)()),n=Object(Y.C)(),c=new q.BigNumber(Object(ie.c)(t)).multipliedBy(n).toNumber();return Object(Q.c)().account?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Z.a,{value:Object(ie.c)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.eq(0)?Object(te.jsx)("br",{}):Object(te.jsx)(ee.a,{value:c})]}):Object(te.jsx)(B.Pb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},oe=Object(N.e)(B.v)(r||(r=Object(S.a)(["\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"])),U.b.homeStakingCardBackground),se=N.e.div(i||(i=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),be=N.e.img(a||(a=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),le=N.e.div(o||(o=Object(S.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),je=N.e.div(s||(s=Object(S.a)(["\n  margin-top: 24px;\n"]))),ue=function(){var e=Object(z.useState)(!1),t=Object(A.a)(e,2),n=t[0],c=t[1],r=Object(Q.c)().account,i=Object(H.b)().t,a=X().filter((function(e){return e.balance.toNumber()>0})),o=Object(I.a)(a.map((function(e){return e.pid}))).onReward,s=Object(z.useCallback)(Object(R.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(te.jsx)(oe,{children:Object(te.jsxs)(B.w,{children:[Object(te.jsx)(B.T,{scale:"xl",mb:"24px",children:i("Farms & Staking")}),Object(te.jsx)(be,{src:U.b.tokenImage,alt:"".concat(U.b.tokenSymbol," logo"),width:64,height:64}),Object(te.jsxs)(se,{children:[Object(te.jsxs)(le,{children:[U.b.tokenSymbol.toUpperCase()," to Harvest:"]}),Object(te.jsx)(ce,{})]}),Object(te.jsxs)(se,{children:[Object(te.jsxs)(le,{children:[U.b.tokenSymbol.toUpperCase()," in Wallet:"]}),Object(te.jsx)(ae,{})]}),Object(te.jsx)(je,{children:r?Object(te.jsx)(B.r,{id:"harvest-all",disabled:a.length<=0||n,onClick:s,width:"100%",children:n?"Collecting ".concat(U.b.tokenSymbol.toUpperCase()):i("Harvest all (%count%)",{count:a.length})}):Object(te.jsx)($.a,{width:"100%"})})]})})},de=n(839),Oe=n(848),me=n(795),xe=n(821),pe=n(878),fe=n(879),he=n(914),ge=Object(N.e)(B.v)(b||(b=Object(S.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),ve=(N.e.div(l||(l=Object(S.a)(["\n  margin-bottom: 16px;\n"]))),N.e.img(j||(j=Object(S.a)(["\n  margin-bottom: 16px;\n"])))),ke=(N.e.div(u||(u=Object(S.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),N.e.div(d||(d=Object(S.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),Object(N.e)(B.T).attrs({scale:"xl"})(O||(O=Object(S.a)(["\n  line-height: 44px;\n"])))),ye=function(){Object(Q.c)().account,Object(de.a)();var e=Object(z.useState)(!1),t=Object(A.a)(e,2),n=(t[0],t[1]),c=Object(H.b)().t,r=(Object(xe.b)(),Object(B.hc)(Object(te.jsx)(fe.a,{}))),i=Object(A.a)(r,1)[0],a=Object(me.c)(),o=(a.claimAmount,a.setLastUpdated),s=Object(Oe.c)().onMultiClaim,b=(Object(re.a)(Object(J.e)()),Object(re.a)(Object(J.s)())),l=Object(pe.a)(i),j=(l.handleApprove,l.requestedApproval,Object(z.useCallback)(Object(R.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,s();case 4:e.sent&&(n(!1),o()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[s,n,o]),Object(B.hc)(Object(te.jsx)(he.a,{max:b})));Object(A.a)(j,1)[0];return Object(te.jsx)(ge,{children:Object(te.jsxs)(B.w,{children:[Object(te.jsx)(B.T,{scale:"xl",mb:"24px",children:c("Your Lottery Winnings")}),Object(te.jsx)(ve,{src:"/images/ticket.svg",alt:"cake logo",width:64,height:64}),Object(te.jsx)(ke,{color:"#7645d9",children:c("Coming Soon")})]})})},we=Object(N.e)(B.v)(m||(m=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Ce=N.e.div(x||(x=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),Te=function(){Object(H.b)().t;var e=Object(re.d)(),t=Object(Y.C)(),n=Object(ie.c)(Object(re.b)(Object(J.e)())),c=e?Object(ie.c)(e)-n:0,r=t.times(c);return Object(te.jsx)(we,{children:Object(te.jsxs)(B.w,{children:[Object(te.jsxs)(B.T,{scale:"xl",mb:"24px",children:[U.b.tokenSymbol.toUpperCase()," Stats"]}),Object(te.jsxs)(Ce,{children:[Object(te.jsx)(B.Pb,{fontSize:"14px",children:"Market Cap"}),Object(te.jsx)(Z.a,{fontSize:"14px",value:r.toNumber(),decimals:0,prefix:"$"})]}),Object(te.jsxs)(Ce,{children:[Object(te.jsxs)(B.Pb,{fontSize:"14px",children:["Total ",U.b.tokenSymbol.toUpperCase()," Supply"]}),c&&Object(te.jsx)(Z.a,{fontSize:"14px",value:c})]}),Object(te.jsxs)(Ce,{children:[Object(te.jsxs)(B.Pb,{fontSize:"14px",children:["Total ",U.b.tokenSymbol.toUpperCase()," Burned"]}),Object(te.jsx)(Z.a,{fontSize:"14px",decimals:0,value:n})]}),Object(te.jsxs)(Ce,{children:[Object(te.jsxs)(B.Pb,{fontSize:"14px",children:["New ",U.b.tokenSymbol.toUpperCase(),"/block"]}),Object(te.jsx)(Z.a,{fontSize:"14px",decimals:1,value:U.b.tokenPerBlock})]})]})})},Se=Object(N.e)(B.v)(p||(p=Object(S.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ze=function(){var e=Object(Y.H)();return Object(te.jsx)(Se,{children:Object(te.jsxs)(B.w,{children:[Object(te.jsx)(B.T,{size:"lg",mb:"24px",children:"Total Value Locked (TVL)"}),Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Z.a,{value:e.toNumber(),prefix:"$",decimals:2}),Object(te.jsx)(B.Pb,{color:"textSubtle",children:"Across all Farms and Pools"})]})]})})},Ne=n(925),Be=n.n(Ne),Fe=n(103),Pe=n(849),Le=Object(N.e)(B.v)(f||(f=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Re=Object(N.e)(B.T).attrs({scale:"xl"})(h||(h=Object(S.a)(["\n  line-height: 44px;\n"]))),Ae=function(){var e=Object(H.b)().t,t=Object(Y.f)().data,n=Object(Y.k)(),c=Object(Y.C)(),r=Object(z.useMemo)((function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken&&n){var t=n[Object(J.b)(e.quoteToken.address).toLowerCase()],r=new E.a(e.lpTotalInQuoteToken).times(t);return Object(Pe.a)(e.poolWeight,c,r)}return null})),r=Be()(e);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[c,t,n]);return Object(te.jsx)(Le,{children:Object(te.jsx)(Fe.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(te.jsxs)(B.w,{children:[Object(te.jsx)(B.T,{color:"contrast",scale:"lg",children:"Earn up to"}),Object(te.jsx)(Re,{color:"#7645d9",children:r?"".concat(r,"% ").concat(e("APR")):Object(te.jsx)(B.Fb,{animation:"pulse",variant:"rect",height:"44px"})}),Object(te.jsxs)(B.S,{justifyContent:"space-between",children:[Object(te.jsx)(B.T,{color:"contrast",scale:"lg",children:"in Farms"}),Object(te.jsx)(B.f,{mt:30,color:"primary"})]})]})})})},Qe=n(822),Ue=n.n(Qe),He=Object(N.e)(B.v)(g||(g=Object(S.a)(["\n  background: linear-gradient(#69aefe, #f3acf4);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ie=Object(N.e)(B.T).attrs({scale:"xl"})(v||(v=Object(S.a)(["\n  line-height: 44px;\n"]))),Me=function(){var e=Object(Y.f)().data,t=Ue()(e,(function(e){return Number(e.liquidity)}),"asc").map((function(e){return e.token.symbol})),n=Array.from(new Set(t)).slice(0,6).join(", ");return Object(te.jsx)(He,{children:Object(te.jsx)(Fe.c,{exact:!0,activeClassName:"active",to:"/pools",id:"pool-cta",children:Object(te.jsxs)(B.w,{children:[Object(te.jsx)(B.T,{color:"contrast",scale:"lg",children:"Stake"}),Object(te.jsx)(Ie,{color:"invertedContrast",children:n}),Object(te.jsxs)(B.S,{justifyContent:"space-between",children:[Object(te.jsx)(B.T,{color:"contrast",scale:"lg",children:"in Pools"}),Object(te.jsx)(B.f,{mt:30,color:"primary"})]})]})})})},qe=Object(N.e)(B.v)(k||(k=Object(S.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ee=Object(N.e)(B.T).attrs({scale:"xl"})(y||(y=Object(S.a)(["\n  line-height: 44px;\n"]))),De=function(){var e=Object(H.b)().t;return Object(te.jsx)(qe,{children:Object(te.jsx)(Fe.c,{exact:!0,activeClassName:"active",to:"/",id:"lottery-pot-cta",children:Object(te.jsxs)(B.w,{children:[Object(te.jsx)(B.T,{color:"contrast",scale:"lg",children:e("Lottery")}),Object(te.jsx)(Ee,{color:"#7645d9",children:e("Coming Soon")}),Object(te.jsxs)(B.S,{justifyContent:"space-between",children:[Object(te.jsx)(B.T,{color:"contrast",scale:"lg"}),Object(te.jsx)(B.f,{mt:30,color:"primary"})]})]})})})},We=n(850),Je=n(255),Ke=(N.e.div(w||(w=Object(S.a)(["\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 0;\n  padding-top: 0;\n  text-align: center;\n\n  "," {\n    background-image: url('","'), url('","');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}),U.b.homeHeroImg1,U.b.homeHeroImg2),Object(N.e)(B.j)(C||(C=Object(S.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}))),Ve=Object(N.e)(B.j)(T||(T=Object(S.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Xe=function(){return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Je.a,{title:U.b.title,subtitle:U.b.homeSecondaryTitle,rightContent:Object(te.jsx)("img",{src:U.c.image,alt:U.c.title,width:56===U.b.chain?180:"",height:56===U.b.chain?180:""}),leftFlex:2,hideRightOnMobile:!0}),Object(te.jsxs)(F.a,{children:[Object(te.jsx)(We.a,{style:{marginBottom:64}}),Object(te.jsxs)(Ke,{children:[Object(te.jsx)(ue,{}),U.c.hasLottery&&Object(te.jsx)(ye,{})]}),Object(te.jsxs)(Ke,{children:[Object(te.jsx)(Te,{}),Object(te.jsx)(ze,{})]}),Object(te.jsxs)(Ve,{children:[Object(te.jsx)(Ae,{}),Object(te.jsx)(Me,{}),U.c.hasLottery&&Object(te.jsx)(De,{})]})]})]})}},806:function(e,t,n){var c=n(807),r=n(808)(c);e.exports=r},807:function(e,t,n){var c=n(403),r=n(249);e.exports=function(e,t){return e&&c(e,t,r)}},808:function(e,t,n){var c=n(145);e.exports=function(e,t){return function(n,r){if(null==n)return n;if(!c(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}},822:function(e,t,n){var c=n(823),r=n(80);e.exports=function(e,t,n,i){return null==e?[]:(r(t)||(t=null==t?[]:[t]),r(n=i?void 0:n)||(n=null==n?[]:[n]),c(e,t,n))}},823:function(e,t,n){var c=n(401),r=n(250),i=n(404),a=n(824),o=n(825),s=n(406),b=n(826),l=n(186),j=n(80);e.exports=function(e,t,n){t=t.length?c(t,(function(e){return j(e)?function(t){return r(t,1===e.length?e[0]:e)}:e})):[l];var u=-1;t=c(t,s(i));var d=a(e,(function(e,n,r){return{criteria:c(t,(function(t){return t(e)})),index:++u,value:e}}));return o(d,(function(e,t){return b(e,t,n)}))}},824:function(e,t,n){var c=n(806),r=n(145);e.exports=function(e,t){var n=-1,i=r(e)?Array(e.length):[];return c(e,(function(e,c,r){i[++n]=t(e,c,r)})),i}},825:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},826:function(e,t,n){var c=n(827);e.exports=function(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var b=c(i[r],a[r]);if(b)return r>=s?b:b*("desc"==n[r]?-1:1)}return e.index-t.index}},827:function(e,t,n){var c=n(121);e.exports=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,i=e===e,a=c(e),o=void 0!==t,s=null===t,b=t===t,l=c(t);if(!s&&!l&&!a&&e>t||a&&o&&b&&!s&&!l||r&&o&&b||!n&&b||!i)return 1;if(!r&&!a&&!l&&e<t||l&&n&&i&&!r&&!a||s&&n&&i||!o&&i||!b)return-1}return 0}},838:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return O}));var c=n(41),r=n(3),i=n.n(r),a=n(8),o=n(0),s=n(43),b=n(52),l=n(93),j=n(803),u=n(242),d=function(e){var t=Object(b.b)(),n=Object(s.c)().account,c=Object(u.m)();return{onReward:Object(o.useCallback)(Object(a.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(j.b)(c,e,n);case 2:return a=r.sent,t(Object(l.d)(n)),r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)}))),[n,t,e,c])}},O=function(e){var t=Object(s.c)().account,n=Object(u.m)();return{onReward:Object(o.useCallback)(Object(a.a)(i.a.mark((function r(){var a;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.reduce((function(e,r){return[].concat(Object(c.a)(e),[Object(j.b)(n,r,t)])}),[]),r.abrupt("return",Promise.all(a));case 2:case"end":return r.stop()}}),r)}))),[t,e,n])}}},849:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(10);var c=n(144),r=function(e,t,n){var r=c.e.times(c.c).times(e).times(t).times(100);return n.toNumber()&&(r=r.div(n)),r.isNaN()||!r.isFinite()?null:r.toNumber()}},850:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c,r,i,a=n(6),o=n(35),s=(n(0),n(22)),b=n(880),l=n(5),j=n(14),u=n(7),d=l.e.a(c||(c=Object(o.a)(["\n  display: flex;\n  justify-content: space-around;\n  font-family: sans-serif;\n  text-align: center;\n  padding-top: 20px;\n  width: 100%;\n  margin: 0 auto 32px;\n"]))),O=l.e.div(r||(r=Object(o.a)(["\n  text-align: center;\n"]))),m=l.e.p(i||(i=Object(o.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),x=3600,p=86400,f=function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{fontSize:32},children:t}),Object(u.jsx)("div",{children:e})]})};function h(e){var t=e.style,n=void 0===t?{}:t,c=Date.now(),r=(j.b.startTime.getTime()-c)/1e3,i=Math.ceil(r/p)*p,o=Object(s.gc)().isXl,l="".concat(j.c.explorerUrl,"/block/countdown/").concat(j.b.startBlock);if(c>j.b.startTime.getTime())return Object(u.jsx)(u.Fragment,{});var h={isPlaying:!0,size:o?120:80,strokeWidth:o?6:2};return Object(u.jsxs)("div",{style:n,children:[Object(u.jsxs)(d,{href:l,target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},h),{},{colors:"#7E2E84",duration:i,initialRemainingTime:r,children:function(e){var t=e.elapsedTime;return f("days",(i-t)/p|0)}})),Object(u.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},h),{},{colors:"#D14081",duration:p,initialRemainingTime:r%p,onComplete:function(e){return[r-e>x,0]},children:function(e){var t=e.elapsedTime;return f("hours",(p-t)%p/x|0)}})),Object(u.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},h),{},{colors:"#EF798A",duration:x,initialRemainingTime:r%x,onComplete:function(e){return[r-e>60,0]},children:function(e){var t=e.elapsedTime;return f("minutes",(x-t)%x/60|0)}})),Object(u.jsx)(b.CountdownCircleTimer,Object(a.a)(Object(a.a)({},h),{},{colors:"#218380",duration:60,initialRemainingTime:r%60,onComplete:function(e){return[r-e>0,0]},children:function(e){var t=e.elapsedTime;return f("seconds",60-t|0)}}))]}),Object(u.jsxs)(O,{children:[Object(u.jsx)("p",{style:{color:"white",marginBottom:16},children:Object(u.jsx)("strong",{children:j.b.startTime.toString()})}),Object(u.jsx)(m,{children:Object(u.jsxs)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:["Farming starts in Block #",j.b.startBlock]})})]})]})}},925:function(e,t,n){var c=n(418),r=n(419),i=n(186);e.exports=function(e){return e&&e.length?c(e,i,r):void 0}}}]);