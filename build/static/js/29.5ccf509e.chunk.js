"use strict";(self.webpackChunktest_currency=self.webpackChunktest_currency||[]).push([[29],{3845:function(e,r,t){t.d(r,{t:function(){return c},a:function(){return a.a}});var a=t(1895),n=t(4165),o=t(5861),i=t(885),s=t(2791),c=function(e){var r=e.fetcher,t=s.useState(!1),a=(0,i.Z)(t,2),c=a[0],l=a[1],d=s.useState(null),u=(0,i.Z)(d,2),p=u[0],v=u[1],f=s.useState(""),m=(0,i.Z)(f,2),h=m[0],g=m[1],Z=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,r(t);case 4:a=e.sent,g(""),v(a),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),"string"===typeof e.t0?g(e.t0):g("Unknown error"),v(null);case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(r){return e.apply(this,arguments)}}();return{isLoading:c,error:h,fetchData:Z,result:p}}},29:function(e,r,t){t.r(r),t.d(r,{default:function(){return ce}});var a=t(885),n=t(2791),o=t(1245),i=t(184),s=(0,o.Z)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save"),c=t(7462),l=t(3366),d=t(8182),u=t(4419),p=t(5513),v=t(277),f=t(5878),m=t(1217);function h(e){return(0,m.Z)("MuiTableContainer",e)}(0,f.Z)("MuiTableContainer",["root"]);var g=["className","component"],Z=(0,v.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,r){return r.root}})({width:"100%",overflowX:"auto"}),y=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiTableContainer"}),a=t.className,n=t.component,o=void 0===n?"div":n,s=(0,l.Z)(t,g),v=(0,c.Z)({},t,{component:o}),f=function(e){var r=e.classes;return(0,u.Z)({root:["root"]},h,r)}(v);return(0,i.jsx)(Z,(0,c.Z)({ref:r,as:o,className:(0,d.Z)(f.root,a),ownerState:v},s))})),x=t(6650);var b=n.createContext();function C(e){return(0,m.Z)("MuiTable",e)}(0,f.Z)("MuiTable",["root","stickyHeader"]);var j=["className","component","padding","size","stickyHeader"],w=(0,v.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.stickyHeader&&r.stickyHeader]}})((function(e){var r=e.theme,t=e.ownerState;return(0,c.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,c.Z)({},r.typography.body2,{padding:r.spacing(2),color:(r.vars||r).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})})),k="table",T=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiTable"}),a=t.className,o=t.component,s=void 0===o?k:o,v=t.padding,f=void 0===v?"normal":v,m=t.size,h=void 0===m?"medium":m,g=t.stickyHeader,Z=void 0!==g&&g,y=(0,l.Z)(t,j),x=(0,c.Z)({},t,{component:s,padding:f,size:h,stickyHeader:Z}),T=function(e){var r=e.classes,t={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,u.Z)(t,C,r)}(x),M=n.useMemo((function(){return{padding:f,size:h,stickyHeader:Z}}),[f,h,Z]);return(0,i.jsx)(b.Provider,{value:M,children:(0,i.jsx)(w,(0,c.Z)({as:s,role:s===k?null:"table",ref:r,className:(0,d.Z)(T.root,a),ownerState:x},y))})}));var M=n.createContext();function R(e){return(0,m.Z)("MuiTableHead",e)}(0,f.Z)("MuiTableHead",["root"]);var H=["className","component"],z=(0,v.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,r){return r.root}})({display:"table-header-group"}),S={variant:"head"},N="thead",P=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiTableHead"}),a=t.className,n=t.component,o=void 0===n?N:n,s=(0,l.Z)(t,H),v=(0,c.Z)({},t,{component:o}),f=function(e){var r=e.classes;return(0,u.Z)({root:["root"]},R,r)}(v);return(0,i.jsx)(M.Provider,{value:S,children:(0,i.jsx)(z,(0,c.Z)({as:o,className:(0,d.Z)(f.root,a),ref:r,role:o===N?null:"rowgroup",ownerState:v},s))})})),A=t(4942),O=t(2065);function B(e){return(0,m.Z)("MuiTableRow",e)}var D=(0,f.Z)("MuiTableRow",["root","selected","hover","head","footer"]),F=["className","component","hover","selected"],L=(0,v.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.head&&r.head,t.footer&&r.footer]}})((function(e){var r,t=e.theme;return r={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,A.Z)(r,"&.".concat(D.hover,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),(0,A.Z)(r,"&.".concat(D.selected),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,O.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,O.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}),r})),q=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiTableRow"}),a=t.className,o=t.component,s=void 0===o?"tr":o,v=t.hover,f=void 0!==v&&v,m=t.selected,h=void 0!==m&&m,g=(0,l.Z)(t,F),Z=n.useContext(M),y=(0,c.Z)({},t,{component:s,hover:f,selected:h,head:Z&&"head"===Z.variant,footer:Z&&"footer"===Z.variant}),x=function(e){var r=e.classes,t={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,u.Z)(t,B,r)}(y);return(0,i.jsx)(L,(0,c.Z)({as:s,ref:r,className:(0,d.Z)(x.root,a),role:"tr"===s?null:"row",ownerState:y},g))})),I=q,V=t(9853);function _(e){return(0,m.Z)("MuiTableCell",e)}var W=(0,f.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),$=["align","className","component","padding","scope","size","sortDirection","variant"],E=(0,v.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],r["size".concat((0,V.Z)(t.size))],"normal"!==t.padding&&r["padding".concat((0,V.Z)(t.padding))],"inherit"!==t.align&&r["align".concat((0,V.Z)(t.align))],t.stickyHeader&&r.stickyHeader]}})((function(e){var r=e.theme,t=e.ownerState;return(0,c.Z)({},r.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:r.vars?"1px solid ".concat(r.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===r.palette.mode?(0,O.$n)((0,O.Fq)(r.palette.divider,1),.88):(0,O._j)((0,O.Fq)(r.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===t.variant&&{color:(r.vars||r).palette.text.primary,lineHeight:r.typography.pxToRem(24),fontWeight:r.typography.fontWeightMedium},"body"===t.variant&&{color:(r.vars||r).palette.text.primary},"footer"===t.variant&&{color:(r.vars||r).palette.text.secondary,lineHeight:r.typography.pxToRem(21),fontSize:r.typography.pxToRem(12)},"small"===t.size&&(0,A.Z)({padding:"6px 16px"},"&.".concat(W.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(r.vars||r).palette.background.default})})),J=n.forwardRef((function(e,r){var t,a=(0,p.Z)({props:e,name:"MuiTableCell"}),o=a.align,s=void 0===o?"inherit":o,v=a.className,f=a.component,m=a.padding,h=a.scope,g=a.size,Z=a.sortDirection,y=a.variant,x=(0,l.Z)(a,$),C=n.useContext(b),j=n.useContext(M),w=j&&"head"===j.variant;t=f||(w?"th":"td");var k=h;!k&&w&&(k="col");var T=y||j&&j.variant,R=(0,c.Z)({},a,{align:s,component:t,padding:m||(C&&C.padding?C.padding:"normal"),size:g||(C&&C.size?C.size:"medium"),sortDirection:Z,stickyHeader:"head"===T&&C&&C.stickyHeader,variant:T}),H=function(e){var r=e.classes,t=e.variant,a=e.align,n=e.padding,o=e.size,i={root:["root",t,e.stickyHeader&&"stickyHeader","inherit"!==a&&"align".concat((0,V.Z)(a)),"normal"!==n&&"padding".concat((0,V.Z)(n)),"size".concat((0,V.Z)(o))]};return(0,u.Z)(i,_,r)}(R),z=null;return Z&&(z="asc"===Z?"ascending":"descending"),(0,i.jsx)(E,(0,c.Z)({as:t,ref:r,className:(0,d.Z)(H.root,v),"aria-sort":z,scope:k,ownerState:R},x))})),U=J;function X(e){return(0,m.Z)("MuiTableBody",e)}(0,f.Z)("MuiTableBody",["root"]);var G=["className","component"],K=(0,v.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,r){return r.root}})({display:"table-row-group"}),Q={variant:"body"},Y="tbody",ee=n.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiTableBody"}),a=t.className,n=t.component,o=void 0===n?Y:n,s=(0,l.Z)(t,G),v=(0,c.Z)({},t,{component:o}),f=function(e){var r=e.classes;return(0,u.Z)({root:["root"]},X,r)}(v);return(0,i.jsx)(M.Provider,{value:Q,children:(0,i.jsx)(K,(0,c.Z)({className:(0,d.Z)(f.root,a),as:o,ref:r,role:o===Y?null:"rowgroup",ownerState:v},s))})})),re=t(3811),te=function(e){var r=e.rates,t=e.selectedCurrency,a=e.savedCurrencies,n=e.onToggleSaveCurrency;return(0,i.jsx)(y,{component:x.Z,children:(0,i.jsxs)(T,{size:"small",children:[(0,i.jsx)(P,{children:(0,i.jsxs)(I,{children:[(0,i.jsx)(U,{children:"Base"}),(0,i.jsx)(U,{children:"To"}),(0,i.jsx)(U,{align:"right",children:"Icon"})]})}),(0,i.jsx)(ee,{children:r.map((function(e){return(0,i.jsxs)(I,{children:[(0,i.jsxs)(U,{component:"th",scope:"row",children:["1 ",t," = ",e.rate," ",e.symbol]}),(0,i.jsxs)(U,{children:[(1/e.rate).toFixed(6)," ",t," = 1 ",e.symbol]}),(0,i.jsx)(U,{align:"right",children:(0,i.jsx)(re.Z,{onClick:function(){return n(e.symbol)},children:(0,i.jsx)(s,{sx:a.includes(e.symbol)?{color:"red"}:{}})})})]},e.symbol)}))})]})})},ae=t(4760),ne=t(5354),oe=t(3845),ie=t(1593),se=function(e){var r=e.rates,t=e.savedCurrencies;return n.useMemo((function(){return r?Object.entries(r).map((function(e){var r=(0,a.Z)(e,2);return{symbol:r[0],rate:r[1]}})).sort((function(e){return t.includes(e.symbol)?-1:1})):[]}),[r,t])},ce=function(){var e=(0,n.useContext)(ae.$R),r=(0,a.Z)(e,2),t=r[0],o=t.selectedCurrency,s=t.savedCurrencies,c=r[1],l=(0,oe.a)({fetcher:function(){return(0,ne.jD)({base:o})},deps:[o]}),d=l.result,u=l.isLoading,p=l.error,v=se({rates:d?d.rates:{},savedCurrencies:s});return(0,i.jsx)(ie.Z,{isLoading:u,error:p,children:(0,i.jsx)(te,{rates:v,selectedCurrency:o,savedCurrencies:s,onToggleSaveCurrency:function(e){s.includes(e)?c((0,ae.m5)(e)):c((0,ae.nw)(e))}})})}},1593:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(1245),n=t(184),o=(0,a.Z)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error"),i=t(6015),s=(t(2791),function(){return(0,n.jsx)("div",{"data-testid":"loader",className:"lds-dual-ring"})}),c=(0,t(277).ZP)(i.Z)({display:"flex",justifyContent:"center",alignItems:"center"}),l=function(e){var r=e.isLoading,t=e.error,a=e.children;return r?(0,n.jsx)(c,{"data-testid":"loader-icon",children:(0,n.jsx)(s,{})}):t?(0,n.jsx)(c,{"data-testid":"error-icon",children:(0,n.jsx)(o,{})}):(0,n.jsx)(i.Z,{children:a})}}}]);
//# sourceMappingURL=29.5ccf509e.chunk.js.map