(this.webpackJsonpvitl=this.webpackJsonpvitl||[]).push([[0],{110:function(t,e,n){},115:function(t,e,n){},136:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(0),a=n.n(r),i=n(29),o=n.n(i),u=(n(110),n(48)),s=n(40),d=n(24),l=n(87),j=n(88),b=n(94),p=n(93),f=(n(115),n(10)),O=n(64),h=n(170),x=n(16),v=n(66),m=n(161),g=n(165),y=n(175),k=n(166),S=n(89),C=n.n(S),B=n(164),T=n(163),N=n(51),E=n.n(N),w=Object(m.a)((function(t){return{root:{width:"300px",margin:t.spacing(2)},addToBasketBtn:{backgroundColor:"#face26",color:"white",display:"flex",textAlign:"center",margin:"0 auto",marginBottom:"20px",fontWeight:"bold","&:hover":{color:"#face26",backgroundColor:"#fef6dc"},"&:disabled":{color:"#f0efef",backgroundColor:"#e4e0e0"}},cartBtn:{fontSize:"2em"},basketWrapper:{border:"1px solid #face26",display:"flex",justifyContent:"center",flexWrap:"wrap"},basketItem:{backgroundColor:"white",padding:"10px",margin:"10px"},outterBasketWrapper:{marginBottom:"100px"},nutrientsUnitWrapper:{padding:"0 16px","& p":{margin:0,padding:0,marginBottom:"3px",fontStyle:"italic"}},innerNutrients:{marginBottom:"10px"}}})),L=function(t){var e,n=t.tunes,i=t.config,o=Object(d.b)(),u=Object(r.useState)([]),s=Object(O.a)(u,2),l=s[0],j=s[1];Object(r.useEffect)((function(){o({type:"BASKET_LIST",basketList:l})}),[l]);var b,p=(null===i||void 0===i||null===(e=i.tolerableUpperLimits)||void 0===e?void 0:e.reduce((function(t,e){return t[e.id]=e.amount,t}),{}))||{},f=[];f.push((b=p,function(t,e){var n=e.reduce((function(t,e){var n,c;return null===e||void 0===e||null===(n=e.product)||void 0===n||null===(c=n.nutrients)||void 0===c||c.forEach((function(n){t[n.id]=(t[n.id]||0)+n.amount*e.qty})),t}),{});return t.nutrients.every((function(t){return t.amount+(n[t.id]||0)<=b[t.id]}))}));var h=w(),m=function(t){return function(t){return f.every((function(e){return e(t,l||[])}))}(t)},S=function(t){if(m(t)){var e=l.find((function(e){return e.product.name===t.name}));j(e?[].concat(Object(v.a)(l.filter((function(e){var n;return(null===e||void 0===e||null===(n=e.product)||void 0===n?void 0:n.name)!==t.name}))),[Object(x.a)(Object(x.a)({},e),{},{qty:e.qty+1})]):[].concat(Object(v.a)(l),[{product:Object(x.a)({},t),qty:1}]))}};return Object(c.jsx)("div",{style:{marginTop:"100px"},children:Object(c.jsx)(T.a,{container:!0,className:h.root2,spacing:2,children:Object(c.jsxs)(T.a,{item:!0,xs:12,children:[Object(c.jsxs)("div",{className:h.outterBasketWrapper,children:[Object(c.jsx)("span",{style:{color:"#face26"},children:"Basket Area:"}),Object(c.jsxs)("div",{className:h.basketWrapper,children:[0===l.length&&Object(c.jsx)("p",{style:{color:"#face26"},children:"You currently have no items in my basket"}),l.map((function(t){var e;return Object(c.jsx)(a.a.Fragment,{children:Object(c.jsxs)("div",{className:h.basketItem,children:[Object(c.jsx)("span",{children:null===t||void 0===t||null===(e=t.product)||void 0===e?void 0:e.name}),Object(c.jsxs)("p",{children:["qty: ",null===t||void 0===t?void 0:t.qty]}),Object(c.jsx)(B.a,{className:h.cartBtn,disabled:!m(null===t||void 0===t?void 0:t.product),onClick:function(){return S(null===t||void 0===t?void 0:t.product)},children:"+"}),Object(c.jsx)(B.a,{className:h.cartBtn,onClick:function(){return function(t){var e=t.qty-1;j(0===e?l.filter((function(e){return t.product.name!==e.product.name})):[].concat(Object(v.a)(l.filter((function(e){return t.product.name!==e.product.name}))),[Object(x.a)(Object(x.a)({},t),{},{qty:e})]))}(t)},children:"-"})]})})}))]})]}),Object(c.jsx)(T.a,{container:!0,justify:"center",spacing:2,children:n.map((function(t,e){return Object(c.jsxs)(g.a,{className:h.root,children:[Object(c.jsx)(y.a,{action:Object(c.jsx)(k.a,{"aria-label":"settings",children:Object(c.jsx)(C.a,{})}),title:t.name,subheader:parseFloat(t.price).toFixed(2)+" "+(null===i||void 0===i?void 0:i.currency)}),Object(c.jsxs)("div",{className:h.nutrientsUnitWrapper,children:[Object(c.jsx)("h4",{style:{marginBottom:"10px",color:"#face26"},children:"Nutrients Info"}),t.nutrients.map((function(t,e){return Object(c.jsxs)("div",{className:h.innerNutrients,children:[Object(c.jsx)("p",{children:t.id}),Object(c.jsx)("p",{children:t.amount})]},e)}))]}),Object(c.jsxs)(B.a,{disabled:!m(t),onClick:function(){return S(t)},className:h.addToBasketBtn,"aria-label":"cart",children:["Add to ",Object(c.jsx)(E.a,{style:{marginLeft:"10px"},fontSize:"medium"})]})]},e)}))})]})})})},I=n(7),U=n(168),_=n(169),F=n(167),P=Object(I.a)((function(t){return{badge:{right:-3,top:13,padding:"0 4px",color:"white",backgroundColor:"#face26"}}}))(F.a),R=Object(m.a)((function(t){return{appBar:{background:"#fff"},favoriteIcon:{marginLeft:"auto"}}})),W=function(t){t.favoriteCount;var e=R(),n=Object(d.c)((function(t){return t.basketList}));return Object(r.useEffect)((function(){}),[n]),Object(c.jsx)(U.a,{className:e.appBar,children:Object(c.jsxs)(_.a,{children:[Object(c.jsx)("img",{src:"https://static.vitl.com/images/logo/vitl_logo.svg",style:{width:"50px"}}),Object(c.jsx)(k.a,{className:e.favoriteIcon,"aria-label":"cart",children:Object(c.jsx)(P,{badgeContent:n.length,color:"secondary",children:Object(c.jsx)(E.a,{fontSize:"large"})})})]})})},q=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t.products})),n=Object(d.c)((function(t){return t.config})),a=Object(r.useState)([]),i=Object(O.a)(a,2),o=i[0],u=i[1],s=Object(d.c)((function(t){return t.productsSuccess}));Object(r.useEffect)((function(){!0!==s&&(l(),u(e))}),[e]);var l=function(){t({type:"GET_PRODUCTS",fetchingProducts:!0})};return Object(c.jsxs)("div",{children:[Object(c.jsx)(W,{}),Object(c.jsx)(h.a,{maxWidth:"lg",children:Object(c.jsx)(L,{config:n,tunes:o})})]})},D=function(){return Object(c.jsx)(f.c,{children:Object(c.jsx)(f.a,{path:"/",exact:!0,component:q})})},A=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(D,{})})}}]),n}(r.Component),G=Object(f.f)(A),z={config:null,products:[],productsSuccess:null,basketList:[]},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PRODUCTS":return Object(x.a)(Object(x.a)({},t),{},{products:e.products});case"SET_CONFIG":return Object(x.a)(Object(x.a)({},t),{},{config:e.config});case"PRODUCT_SUCCESS":return Object(x.a)(Object(x.a)({},t),{},{productsSuccess:e.productsSuccess});case"BASKET_LIST":return Object(x.a)(Object(x.a)({},t),{},{basketList:e.basketList});default:return t}},K=n(173),Y=n(174),H=n(95),M=n(63),Q=n(92),V=n(91),X=n(59),Z=n(171),$=n(172),tt=n(36),et=n.n(tt),nt=n(52),ct=n(90),rt=n.n(ct),at=function(){var t=Object(nt.a)(et.a.mark((function t(e,n){var c;return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c="http://api.designanddev.co.uk/api"+e,t.next=4,rt.a.get(c);case 4:return t.abrupt("return",t.sent);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),it=function(){var t=Object(nt.a)(et.a.mark((function t(){return et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,at("/products");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ot=Object(Y.a)((function(t){return t.pipe(Object(H.a)("GET_PRODUCTS"),Object(V.a)((function(t){return Object(M.a)(it()).pipe(Object(X.a)((function(t){return t.data})),Object(Z.a)((function(t){return[{type:"SET_PRODUCTS",products:t.products},{type:"SET_CONFIG",config:t.config},{type:"PRODUCT_SUCCESS",productsSuccess:!0}]})),Object($.a)((function(t){return Object(Q.a)({type:"ERROR",error:t})})))})))})),ut=Object(Y.a)(ot),st=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))},dt=Object(K.a)(),lt=Object(s.c)(J,Object(s.a)(dt));dt.run(ut),o.a.render(Object(c.jsx)(d.a,{store:lt,children:Object(c.jsx)(u.a,{children:Object(c.jsx)(G,{})})}),document.getElementById("root")),st()}},[[136,1,2]]]);
//# sourceMappingURL=main.db320268.chunk.js.map