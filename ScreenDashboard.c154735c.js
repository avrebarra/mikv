function e(e,t,s,a){Object.defineProperty(e,t,{get:s,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirefb8e;t.register("dTfoN",(function(s,a){e(s.exports,"Dashboard",(()=>c));var r=t("iM5HV"),n=t("fYo6y"),o=t("2LGbC"),i=t("8DQPK"),l=t("7cA6N");const c=({})=>{o.useToast();const[e,t]=n.useState(!1),[s,a]=n.useState(!1),[c,d]=n.useState("");return n.useEffect((()=>{(async()=>{})()}),[e]),r.jsxs(r.Fragment,{children:[s?r.jsx("div",{}):r.jsx(i.DashboardListKV,{onEntryClick:()=>{d("1"),a(!0)},onCreateNewClick:()=>{d(""),a(!0)}}),s?r.jsx(l.DashboardEditor,{targetKVID:c,onBackClick:()=>{a(!1),d("")}}):r.jsx("div",{})]})}})),t.register("8DQPK",(function(s,a){e(s.exports,"DashboardListKV",(()=>c));var r=t("iM5HV"),n=t("fYo6y"),o=t("2LGbC"),i=t("iu2BL"),l=t("jkeOd");const c=e=>{const t=o.useToast(),[s,a]=n.useState(!1);return n.useEffect((()=>{(async()=>{})()}),[s]),r.jsxs(r.Fragment,{children:[r.jsx(l.Header,{name:"dashboard"}),r.jsx("div",{className:"text-3xl font-bold mb-4",children:"My Keys & Values"}),r.jsxs("div",{id:"list",children:[["PASSWORD_SATU","PASSWORD_DUA","PASSWORD_TIGA","abcsd","pesa"].map((t=>r.jsx("div",{className:"cursor-pointer mb-2",onClick:e.onEntryClick,children:r.jsx(i.KVItem,{isSynced:!0,keyname:t})}))),r.jsx(o.Button,{className:"mb-2",colorScheme:"gray",w:"full",size:"sm",borderRadius:0,onClick:()=>{(async(e,s,a)=>{t({title:s,description:a,status:e,duration:3e3,position:"top",isClosable:!0})})("info","No More Entries","Cannot find anymore entries to fetch.")},children:"Show More"}),r.jsx(o.Button,{className:"mb-1",w:"full",colorScheme:"telegram",size:"md",borderRadius:0,onClick:e.onCreateNewClick,children:"+ Add new entry"})]})]})}})),t.register("iu2BL",(function(s,a){e(s.exports,"KVItem",(()=>l));var r=t("iM5HV"),n=t("fYo6y"),o=t("2LGbC"),i=(o=t("2LGbC"),t("ICgjM"));o=t("2LGbC");const l=e=>{o.useToast();const[t,s]=n.useState(!1);return n.useEffect((()=>{(async()=>{})()}),[t]),r.jsx(r.Fragment,{children:r.jsx(o.Box,{className:"border bg-white my-1 py-2 px-4 border-gray-200 text-gray-500 transition-colors hover:border-blue-400 overflow-hidden hover:text-blue-400 ",children:r.jsx("div",{className:"flex justify-between",children:r.jsxs("div",{className:"flex content-center items-center",children:[r.jsx(o.Tooltip,{placement:"left",label:"synced","aria-label":"synced",children:r.jsx(i.CheckCircleIcon,{w:4,h:4,color:e.isSynced?"#48BB78":"#EDF2F7",className:"mr-5"})}),r.jsx("div",{className:"align-middle text-sm font-mono",children:e.keyname})]})})})})}})),t.register("jkeOd",(function(s,a){e(s.exports,"Header",(()=>d));var r=t("iM5HV"),n=t("fYo6y"),o=t("5vu1T"),i=t("2LGbC"),l=(i=t("2LGbC"),t("ICgjM")),c=t("9c6op");const d=e=>{const[t,s]=n.useState(!1);return n.useEffect((()=>{(async()=>{})()}),[t]),r.jsx(r.Fragment,{children:r.jsxs("div",{id:"header",className:"flex justify-between items-center",children:[r.jsxs("div",{id:"title",className:"text-xl",children:[r.jsx("span",{className:"font-bold",children:r.jsx(o.Link,{className:"",to:"/",children:"#mikv"})}),r.jsxs("span",{children:["/",e.name]})]}),r.jsx("div",{id:"disconnect",children:r.jsx(o.Link,{className:"",to:"/",children:r.jsx(i.Tooltip,{label:"End Session","aria-label":"A tooltip",children:r.jsx(i.Button,{colorScheme:"red",size:"md",borderRadius:"full",children:r.jsx(l.Icon,{as:c.FaPowerOff})})})})})]})})}})),t.register("7cA6N",(function(s,a){e(s.exports,"DashboardEditor",(()=>m));var r=t("iM5HV"),n=t("fYo6y"),o=t("5vu1T"),i=t("2LGbC"),l=(i=t("2LGbC"),t("jkeOd")),c=t("ICgjM"),d=t("abe8a"),u=t("hTHOQ"),h=t("bvq94"),x=t("hznIA");const m=e=>{const t=i.useToast(),[s,a]=n.useState(!1),[m,f]=n.useState(!1),[g,b]=n.useState(!1),[j,v]=n.useState(""),[p,C]=n.useState("");return n.useEffect((()=>{(async()=>{s||""==e.targetKVID&&f(!0),m&&b(!0),a(!0)})()}),[m]),r.jsxs(r.Fragment,{children:[r.jsx(l.Header,{name:"editor"}),r.jsx("div",{className:"text-3xl font-bold mb-4",children:"KV Entry Editor"}),r.jsxs("div",{id:"form",children:[r.jsx(i.Input,{size:"sm",className:"mb-2 font-mono text-slate-600"+(m?"":" cursor-default"),borderRadius:0,value:j,readOnly:!m,onChange:e=>v(e.target.value),placeholder:"TYPE_YOUR_ID_HERE"}),r.jsx(i.Textarea,{size:"sm",className:"mb-3 font-mono text-slate-600"+(m?"":" cursor-pointer"),borderRadius:0,value:g?p:p.replace(/./g,"∙"),readOnly:!m,onChange:e=>C(e.target.value),placeholder:"Write the value of KV"}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx(o.Link,{to:"/dashboard",children:r.jsx(i.Button,{size:"md",borderRadius:0,onClick:e.onBackClick,children:"Back"})}),r.jsxs("div",{children:[m||""==e.targetKVID?r.jsx("span",{}):r.jsxs("div",{children:[r.jsx(i.Button,{id:"view",size:"md",colorScheme:g?"yellow":"gray",disabled:m,borderRadius:0,onClick:()=>{b(!g)},children:g?r.jsx(c.Icon,{as:u.BsEyeSlash}):r.jsx(c.Icon,{as:u.BsEye})}),r.jsx(i.Button,{id:"delete",size:"md",colorScheme:"red",borderRadius:0,children:r.jsx(c.Icon,{as:x.RiDeleteBinFill})}),r.jsx(i.Button,{id:"edit",colorScheme:m?"green":"telegram",size:"md",borderRadius:0,onClick:()=>{f(!m)},children:r.jsx(c.Icon,{as:h.FiEdit})})]}),m&&""!=e.targetKVID?r.jsxs("div",{children:[r.jsx(i.Button,{colorScheme:"red",size:"md",borderRadius:0,onClick:()=>{f(!m)},leftIcon:r.jsx(c.Icon,{as:d.MdCancel}),children:"Cancel"}),r.jsx(i.Button,{colorScheme:m?"green":"telegram",size:"md",borderRadius:0,onClick:()=>{f(!m)},leftIcon:r.jsx(c.Icon,{as:d.MdCheckCircle}),children:"Confirm"})]}):r.jsx("span",{}),""==e.targetKVID?r.jsx(i.Button,{colorScheme:m?"green":"telegram",size:"md",borderRadius:0,onClick:()=>{(async(e,s,a)=>{t({title:s,description:a,status:e,duration:3e3,position:"top",isClosable:!0})})("success","Success!","New key-value pairs succesfully created.")},leftIcon:r.jsx(c.Icon,{as:d.MdCheckCircle}),children:"Create KV"}):r.jsx("span",{})]})]})]})]})}})),t.register("abe8a",(function(s,a){e(s.exports,"MdCheckCircle",(()=>n)),e(s.exports,"MdCancel",(()=>o));var r=t("k0uqb");function n(e){return r.GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}}]})(e)}function o(e){return r.GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}}]})(e)}})),t.register("hTHOQ",(function(s,a){e(s.exports,"BsEyeSlash",(()=>n)),e(s.exports,"BsEye",(()=>o));var r=t("k0uqb");function n(e){return r.GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"}},{tag:"path",attr:{d:"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"}},{tag:"path",attr:{d:"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"}}]})(e)}function o(e){return r.GenIcon({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}},{tag:"path",attr:{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}}]})(e)}})),t.register("bvq94",(function(s,a){e(s.exports,"FiEdit",(()=>n));var r=t("k0uqb");function n(e){return r.GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(e)}})),t.register("hznIA",(function(s,a){e(s.exports,"RiDeleteBinFill",(()=>n));var r=t("k0uqb");function n(e){return r.GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z"}}]}]})(e)}}));