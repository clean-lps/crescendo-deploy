import{a as r}from"./react-vendor-dG2dvXGH.js";/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function F(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:U(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=t=>{let e="",n=!1;for(const o of t){if(o==="-"||o==="_"||o<=" "){n=e.length>0;continue}e.length===0?e+=o.toLowerCase():e+=n?o.toUpperCase():o,n=!1}return e};/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=t=>{const e=H(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(...t)=>t.filter((e,n,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function z(t){return t!=null}function X(t,e={}){var m,w;const n=e.attributeNames??{},o=s=>n[s]??s,d=t.size??t.width??a.width,u=t.size??t.height??a.height,k=((m=t.aliases)==null?void 0:m.filter(s=>typeof s=="string"&&s.trim()!=="").map(s=>`lucide-${s}`))??[],f=[...t.name?[`lucide-${t.name}`]:[],...k],c=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],y=e.includeDefaultClasses===!1?x(...c):x("lucide",...f,...c),b=e.absoluteStrokeWidth?Number(e.strokeWidth??a["stroke-width"])*Number(t.size??t.width??a.width)/Number(e.size??e.width??a.width):e.strokeWidth??a["stroke-width"];return["svg",{...Object.entries(a).reduce((s,[h,l])=>(s[o(h)]=l,s),{}),..."color"in e&&e.color&&{[o("stroke")]:e.color},..."size"in e&&z(e.size)&&{[o("width")]:e.size,[o("height")]:e.size},..."width"in e&&z(e.width)&&{[o("width")]:e.width},..."height"in e&&z(e.height)&&{[o("height")]:e.height},[o("stroke-width")]:b,...y&&{[o("class")]:y},[o("viewBox")]:`0 0 ${d} ${u}`,...e.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(s=>{const[h,l,g]=s,p=e.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...l}:l;return g?[h,p,g]:[h,p]})]}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Z(t,e={}){return X(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},J=r.createContext({}),O=()=>r.useContext(J),Q=r.forwardRef(({color:t,size:e,width:n,height:o,strokeWidth:d,absoluteStrokeWidth:u,nonScalingStroke:k,className:f="",children:c,iconNode:y=[],icon:b={node:y,aliases:[],size:24},...C},m)=>{const{size:w=24,strokeWidth:s=2,absoluteStrokeWidth:h=!1,nonScalingStroke:l=!1,color:g="currentColor",className:p=""}=O()??{},P=!!c||G(C),[q,B,E=[]]=Z(b,{color:t??g,width:n??e??w,height:o??e??w,strokeWidth:d??s,absoluteStrokeWidth:u??h,nonScalingStroke:k??l,className:x(p,f),hasA11yProp:P,attributes:C});return r.createElement(q,{ref:m,...B},[...E.map(([I,R])=>r.createElement(I,R)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function i(t,e=[],n=[]){const o=typeof t=="string"?F(t,e,n):t,d=r.forwardRef(({className:u,...k},f)=>r.createElement(Q,{ref:f,icon:o,className:u,...k}));return o.name&&(d.displayName=K(o.name)),d}/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _={name:"accessibility",size:24,node:[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]};_.node;const V=i(_);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};v.node;const Y=i(v);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};M.node;const ee=i(M);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};A.node;const te=i(A);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};N.node;const oe=i(N);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};$.node;const ne=i($);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};D.node;const se=i(D);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};S.node;const ie=i(S);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};W.node;const ce=i(W);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};L.node;const ae=i(L);/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};j.node;const re=i(j);export{V as A,oe as C,se as M,ae as P,re as X,Y as a,ee as b,te as c,ne as d,ie as e,ce as f};
