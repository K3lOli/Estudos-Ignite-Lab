import{a as L,$ as F,j as E}from"./index-30f5a949.js";import{_ as P}from"./extends-98964cd2.js";import{r,R as f}from"./index-8db94870.js";import{r as W}from"./index-8ce4a492.js";import{I as q,r as K}from"./IconBase.esm-cf1cca2e.js";import{T as X}from"./Text-7a3ba766.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";function H(e,t=[]){let n=[];function o(s,d){const i=r.createContext(d),u=n.length;n=[...n,d];function a(l){const{scope:p,children:b,...$}=l,g=(p==null?void 0:p[e][u])||i,v=r.useMemo(()=>$,Object.values($));return r.createElement(g.Provider,{value:v},b)}function m(l,p){const b=(p==null?void 0:p[e][u])||i,$=r.useContext(b);if($)return $;if(d!==void 0)return d;throw new Error(`\`${l}\` must be used within \`${s}\``)}return a.displayName=s+"Provider",[a,m]}const c=()=>{const s=n.map(d=>r.createContext(d));return function(i){const u=(i==null?void 0:i[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...i,[e]:u}}),[i,u])}};return c.scopeName=e,[o,Z(c,...t)]}function Z(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(s){const d=o.reduce((i,{useScope:u,scopeName:a})=>{const l=u(s)[`__scope${a}`];return{...i,...l}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])}};return n.scopeName=t.scopeName,n}function R(e,t,{checkForDefaultPrevented:n=!0}={}){return function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)}}function T(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function G({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,c]=J({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:o,i=T(n),u=r.useCallback(a=>{if(s){const l=typeof a=="function"?a(e):a;l!==e&&i(l)}else c(a)},[s,e,c,i]);return[d,u]}function J({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,c=r.useRef(o),s=T(t);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}function Q(e){const t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const _=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};function V(e){const[t,n]=r.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,i;if("borderBoxSize"in s){const u=s.borderBoxSize,a=Array.isArray(u)?u[0]:u;d=a.inlineSize,i=a.blockSize}else d=e.offsetWidth,i=e.offsetHeight;n({width:d,height:i})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}function Y(e,t){return r.useReducer((n,o)=>{const c=t[n][o];return c??n},e)}const I=e=>{const{present:t,children:n}=e,o=ee(t),c=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),s=L(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null};I.displayName="Presence";function ee(e){const[t,n]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),d=e?"mounted":"unmounted",[i,u]=Y(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const a=N(o.current);s.current=i==="mounted"?a:"none"},[i]),_(()=>{const a=o.current,m=c.current;if(m!==e){const p=s.current,b=N(a);e?u("MOUNT"):b==="none"||(a==null?void 0:a.display)==="none"?u("UNMOUNT"):u(m&&p!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,u]),_(()=>{if(t){const a=l=>{const b=N(o.current).includes(l.animationName);l.target===t&&b&&W.flushSync(()=>u("ANIMATION_END"))},m=l=>{l.target===t&&(s.current=N(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:r.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}function N(e){return(e==null?void 0:e.animationName)||"none"}const te=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],j=te.reduce((e,t)=>{const n=r.forwardRef((o,c)=>{const{asChild:s,...d}=o,i=s?F:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(i,P({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),D="Checkbox",[ne,Ce]=H(D),[re,oe]=ne(D),ce=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:c,defaultChecked:s,required:d,disabled:i,value:u="on",onCheckedChange:a,...m}=e,[l,p]=r.useState(null),b=L(t,h=>p(h)),$=r.useRef(!1),g=l?!!l.closest("form"):!0,[v=!1,S]=G({prop:c,defaultProp:s,onChange:a}),B=r.useRef(v);return r.useEffect(()=>{const h=l==null?void 0:l.form;if(h){const C=()=>S(B.current);return h.addEventListener("reset",C),()=>h.removeEventListener("reset",C)}},[l,S]),r.createElement(re,{scope:n,state:v,disabled:i},r.createElement(j.button,P({type:"button",role:"checkbox","aria-checked":x(v)?"mixed":v,"aria-required":d,"data-state":U(v),"data-disabled":i?"":void 0,disabled:i,value:u},m,{ref:b,onKeyDown:R(e.onKeyDown,h=>{h.key==="Enter"&&h.preventDefault()}),onClick:R(e.onClick,h=>{S(C=>x(C)?!0:!C),g&&($.current=h.isPropagationStopped(),$.current||h.stopPropagation())})})),g&&r.createElement(ie,{control:l,bubbles:!$.current,name:o,value:u,checked:v,required:d,disabled:i,style:{transform:"translateX(-100%)"}}))}),se="CheckboxIndicator",ae=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=oe(se,n);return r.createElement(I,{present:o||x(s.state)||s.state===!0},r.createElement(j.span,P({"data-state":U(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ie=e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.useRef(null),d=Q(n),i=V(t);return r.useEffect(()=>{const u=s.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(d!==n&&l){const p=new Event("click",{bubbles:o});u.indeterminate=x(n),l.call(u,x(n)?!1:n),u.dispatchEvent(p)}},[d,n,o]),r.createElement("input",P({type:"checkbox","aria-hidden":!0,defaultChecked:x(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function x(e){return e==="indeterminate"}function U(e){return x(e)?"indeterminate":e?"checked":"unchecked"}const ue=ce,de=ae;var k=new Map;k.set("bold",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});k.set("duotone",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});k.set("fill",function(){return f.createElement(f.Fragment,null,f.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});k.set("light",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});k.set("thin",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});k.set("regular",function(e){return f.createElement(f.Fragment,null,f.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var le=function(t,n){return K(t,n,k)},z=r.forwardRef(function(e,t){return f.createElement(q,Object.assign({ref:t},e,{renderPath:le}))});z.displayName="Check";const fe=z;function A(e){return E.jsx(ue,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",...e,children:E.jsx(de,{asChild:!0,children:E.jsx(fe,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}try{A.displayName="Checkbox",A.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ee={title:"Components/Checkbox",component:A,args:{},argTypes:{},decorators:[e=>E.jsxs("div",{className:"flex items-center gap-2",children:[e(),E.jsx(X,{size:"sm",children:"Lembrar-se de mim por 30 dias"})]})]},y={};var M,w,O;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(O=(w=y.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const ge=["Default"];export{y as Default,ge as __namedExportsOrder,Ee as default};
//# sourceMappingURL=Checkbox.stories-3d150a9e.js.map
