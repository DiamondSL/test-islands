var B=Object.defineProperty;var n=(e,t)=>B(e,"name",{value:t,configurable:!0});import{_ as Q,u as C,g as c,a as w,b as D,j as r,c as h,R as b,C as f,L as F,T as V,d as g,e as Y,r as s,A as K,f as S,S as U,M as R,N as Z,h as G,F as J,O as X,D as ee,i as te,k as re,I as ne,l as oe,m as j,n as ie,o as L}from"./vendor.c7af32f3.js";const ae=n(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}n(i,"getFetchOpts");function a(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}n(a,"processPreload")},"polyfill");ae();const se="modulepreload",T={},ce="https://DiamondSL.github.io/",I=n(function(t,i){return!i||i.length===0?t():Promise.all(i.map(a=>{if(a=`${ce}${a}`,a in T)return;T[a]=!0;const o=a.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":se,o||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),o)return new Promise((O,v)=>{d.addEventListener("load",O),d.addEventListener("error",v)})})).then(()=>t())},"preload");var u={exports:{}},le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ue=le,de=ue;function k(){}n(k,"emptyFunction");function W(){}n(W,"emptyFunctionWithReset");W.resetWarningCache=k;var me=n(function(){function e(a,o,l,d,O,v){if(v!==de){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}n(e,"shim"),e.isRequired=e;function t(){return e}n(t,"getShim");var i={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W,resetWarningCache:k};return i.PropTypes=i,i},"factoryWithThrowingShims");u.exports=me();function N(e){var t=e.children,i=e.query,a=Q(e,["children","query"]),o=C(i,a);return o?t(o):null}n(N,"Query");N.propTypes={client:u.exports.object,children:u.exports.func.isRequired,fetchPolicy:u.exports.string,notifyOnNetworkStatusChange:u.exports.bool,onCompleted:u.exports.func,onError:u.exports.func,pollInterval:u.exports.number,query:u.exports.object.isRequired,variables:u.exports.object,ssr:u.exports.bool,partialRefetch:u.exports.bool,returnPartialData:u.exports.bool};var pe=Object.defineProperty,m=n((e,t)=>pe(e,"name",{value:t,configurable:!0}),"__name$8");const p={};c`
    fragment Entry on ComponentDataEntry {
  id
  key
  value
}
    `;c`
    fragment Link on ComponentUiLink {
  id
  title
  url
}
    `;c`
    fragment Menu on ComponentUiMenu {
  id
  children {
    ...Link
  }
}
    `;c`
    fragment Seo on ComponentSharedSeo {
  id
  canonicalURL
  keywords
  metaTitle
  metaViewport
  metaDescription
}
    `;c`
    fragment Paragraph on ComponentUiParagraph {
  id
  value
}
    `;const fe=c`
    fragment File on UploadFileEntity {
  id
  attributes {
    previewUrl
    url
  }
}
    `;c`
    fragment Card on ComponentUiCard {
  id
  title
  subtitle
  description
  media {
    data {
      ...File
    }
  }
}
    `;c`
    fragment Tab on ComponentUiTab {
  id
  name
  pane {
    ...Card
  }
}
    `;const he=c`
    fragment Home on ComponentPageHome {
  id
  pathname
  hero {
    subtitle
    id
    description
    title
    media {
      data {
        ...File
      }
    }
  }
}
    `,ge=c`
    fragment ContactUs on ComponentPageContactUs {
  id
  pathname
  hero {
    subtitle
    id
    description
    title
    media {
      data {
        ...File
      }
    }
  }
}
    `,ye=c`
    fragment Website on Website {
  content {
    __typename
    ...Home
    ...ContactUs
  }
}
    `,ve=c`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;function be(e){const t={...p,...e};return w(ve,t)}n(be,"useForgotPasswordMutation");m(be,"useForgotPasswordMutation");const _e=c`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
  }
}
    `;function xe(e){const t={...p,...e};return w(_e,t)}n(xe,"useLoginMutation");m(xe,"useLoginMutation");const Pe=c`
    mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
  }
}
    `;function Ce(e){const t={...p,...e};return w(Pe,t)}n(Ce,"useRegisterMutation");m(Ce,"useRegisterMutation");const A=c`
    query me {
  me {
    email
    createdAt
    updatedAt
    customer {
      data {
        id
      }
    }
  }
}
    `;function we(e){const t={...p,...e};return C(A,t)}n(we,"useMeQuery");m(we,"useMeQuery");function Le(e){const t={...p,...e};return D(A,t)}n(Le,"useMeLazyQuery");m(Le,"useMeLazyQuery");const $=c`
    query website {
  website {
    data {
      id
      attributes {
        ...Website
      }
    }
  }
}
    ${ye}
${he}
${fe}
${ge}`,$e=m(e=>r(N,{query:$,...e}),"WebsiteComponent");function ze(e){const t={...p,...e};return C($,t)}n(ze,"useWebsiteQuery");m(ze,"useWebsiteQuery");function Oe(e){const t={...p,...e};return D($,t)}n(Oe,"useWebsiteLazyQuery");m(Oe,"useWebsiteLazyQuery");var Ee=Object.defineProperty,Se=n((e,t)=>Ee(e,"name",{value:t,configurable:!0}),"__name$7");const Re=Se(()=>h(b,{justify:"space-between",children:[r(f,{children:r(F,{to:"/",children:window.location.hostname})}),r(f,{children:h(V.Text,{children:["All rights reserved \xA9 ",new Date().getFullYear()]})})]}),"Footer");var Te=Object.defineProperty,Me=n((e,t)=>Te(e,"name",{value:t,configurable:!0}),"__name$6");const _=Me(({fixed:e=!0,children:t})=>r(g.Content,{className:Y({"ant-layout-content-fixed":e}),children:t}),"Content");var De={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"},Fe=De,q=n(function(t,i){return s.exports.createElement(K,S(S({},t),{},{ref:i,icon:Fe}))},"UnorderedListOutlined");q.displayName="UnorderedListOutlined";var Ue=s.exports.forwardRef(q);const je=n(e=>s.exports.createElement("svg",{role:"img",width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...e},s.exports.createElement("title",null,"Ant Design"),s.exports.createElement("path",{d:"M17.4511 6.6808c.5091-.5064.5091-1.3316 0-1.838l-1.8729-1.873.0027.0027c-.4957-.4957-1.3478-1.3478-2.5535-2.5508-.568-.5547-1.487-.5493-2.0498.0134L.426 10.9787a1.4426 1.4426 0 0 0 0 2.047l10.549 10.541a1.4506 1.4506 0 0 0 2.0497 0l4.4238-4.4211c.509-.5064.509-1.3317 0-1.8381a1.3049 1.3049 0 0 0-1.8408 0l-3.3493 3.3546c-.1393.1394-.3564.1394-.4957 0l-8.4268-8.4188c-.1394-.1393-.1394-.3563 0-.4956L11.76 3.3289c.0107-.0108.0241-.0188.0349-.0295.1393-.1099.3322-.0992.4608.0295l3.3547 3.352c.509.509 1.3343.509 1.8407 0zm-8.2446 5.375a2.8482 2.8456 0 1 0 5.6965 0 2.8482 2.8456 0 1 0-5.6965 0zm14.3672-1.0343l-3.293-3.277c-.5092-.5063-1.3344-.5063-1.8408.0028a1.2968 1.2968 0 0 0 0 1.838l2.2239 2.2213c.1393.1393.1393.3564 0 .4957l-2.1918 2.189a1.2968 1.2968 0 0 0 0 1.8382 1.3049 1.3049 0 0 0 1.8408 0l3.2635-3.2609a1.445 1.445 0 0 0-.0026-2.047Z"})),"ReactComponent$2"),Ie=n(e=>s.exports.createElement("svg",{role:"img",width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...e},s.exports.createElement("title",null,"React"),s.exports.createElement("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"})),"ReactComponent$1"),ke=n(e=>s.exports.createElement("svg",{role:"img",width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...e},s.exports.createElement("title",null,"Strapi"),s.exports.createElement("path",{d:"M7.684 0v8.035h7.775c.28 0 .502.236.502.483v7.802h8.025V.502A.502.502 0 0023.484 0zm-.5.5L.086 7.607a.251.251 0 00.178.428h6.92zm.5 8.035v7.283c0 .278.224.502.502.502h7.275V9.018c0-.278-.224-.482-.502-.483zm8.277 8.285v6.928c0 .224.271.336.43.178l7.095-7.106z"})),"ReactComponent");var We=Object.defineProperty,Ne=n((e,t)=>We(e,"name",{value:t,configurable:!0}),"__name$5");const Ae={ant:je,react:Ie,strapi:ke},qe=Ne(({type:e,...t})=>{const i=Ae[e]??null;return i&&r(i,{...t})},"SvgIcon");var He=Object.defineProperty,Be=n((e,t)=>He(e,"name",{value:t,configurable:!0}),"__name$4");const Qe=Be(()=>r(F,{to:"/",children:r(U,{direction:"horizontal",children:r(qe,{fill:"#2F2E8B",type:"strapi"})})}),"Logo");var Ve=Object.defineProperty,Ye=n((e,t)=>Ve(e,"name",{value:t,configurable:!0}),"__name$3");const Ke=Ye(({data:e})=>r(R,{theme:"light",mode:"horizontal",children:e?.map(t=>t?.url&&r(R.Item,{children:r(Z,{to:t.url,children:t.title})},t?.url))}),"Navigation");var Ze=Object.defineProperty,H=n((e,t)=>Ze(e,"name",{value:t,configurable:!0}),"__name$2");const Ge=H(()=>{const{burger:e}=st();return r(Ue,{onClick:e.toggle})},"BurgerMenu"),Je=H(()=>h(b,{align:"middle",justify:"space-between",wrap:!1,children:[r(f,{children:r(Qe,{})}),r(f,{children:r(U,{align:"end",children:h(b,{justify:"end",wrap:!1,align:"middle",children:[r(f,{xs:0,sm:0,md:0,lg:24,xl:24,xxl:24,children:r(Ke,{data:[{id:"1",url:"/",title:"Home"},{id:"2",url:"/contact-us",title:"Contact Us"}]})}),r(f,{xs:1,sm:1,md:1,lg:0,xl:0,xxl:0,children:r(Ge,{})})]})})})]}),"Header");var Xe=Object.defineProperty,x=n((e,t)=>Xe(e,"name",{value:t,configurable:!0}),"__name$1");const et=x(()=>r(_,{children:r(te,{size:"small"})}),"PageLoader"),tt=x(()=>{const{pathname:e}=G();function t(i=[]){return i.find(a=>a?.pathname===e)??null}return n(t,"filterByPathname"),x(t,"filterByPathname"),r(y.Consumer,{children:({burger:{opened:i,toggle:a}})=>h(g,{children:[r($e,{children:({data:o})=>h(J,{children:[r(g.Header,{children:r(_,{children:r(Je,{})})}),r(g.Content,{children:r(s.exports.Suspense,{fallback:r(et,{}),children:r(X,{context:t(o?.website?.data?.attributes?.content)})})}),r(g.Footer,{children:r(_,{children:r(Re,{})})})]})}),r(ee,{width:"50%",height:"100%",onClose:a,visible:i})]})})},"DefaultLayout"),M=s.exports.lazy(()=>I(()=>import("./index.f2fb2514.js"),["assets/index.f2fb2514.js","assets/index.156a733f.css","assets/vendor.c7af32f3.js"])),rt=s.exports.lazy(()=>I(()=>import("./index.71c54382.js"),["assets/index.71c54382.js","assets/vendor.c7af32f3.js"])),nt={"":{element:r(tt,{}),children:[{element:r(M,{}),path:"/"},{element:r(M,{}),path:"/contact-us"},{element:r(rt,{}),path:"*"}]}};var ot=Object.defineProperty,z=n((e,t)=>ot(e,"name",{value:t,configurable:!0}),"__name");const P={i18n:{locale:"en",setLocale:()=>{}},burger:{opened:!1,toggle:()=>{}},ui:{theme:"default",size:"middle"},user:{authenticated:null,role:null}},y=s.exports.createContext(P),it=z(({children:e})=>{const[t,i]=s.exports.useState(P.i18n.locale),[a,o]=ie(!1);return r(y.Provider,{value:{...P,i18n:{locale:t,setLocale:i},burger:{opened:a,toggle:o}},children:e})},"ContextProvider"),at=z(()=>r(it,{children:r(re.ClientProvider,{production:!0,children:r(y.Consumer,{children:({i18n:{locale:e},ui:{size:t}})=>r(ne,{locale:e,children:r(oe.UIProvider,{size:t,locale:e,children:r(j.RoutingProvider,{routes:nt})})})})})}),"App"),st=z(()=>s.exports.useContext(y),"useApp");await L.initMarker({enabled:!0,destination:{}.WEBSITE_MARKER_ID});L.initSentry({enabled:!0,dsn:{}.WEBSITE_SENTRY_DSN});j.renderApp(at,{strict:!1});L.reportWebVitals();
//# sourceMappingURL=index.2ee8938d.js.map
