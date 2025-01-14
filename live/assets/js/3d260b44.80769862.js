"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7994],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>b,useMDXComponents:()=>s,withMDXComponents:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){return function(t){var r=s(t.components);return n.createElement(e,i({},t,{components:r}))}},s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,h=m["".concat(o,".").concat(p)]||m[p]||f[p]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const i={id:"torchlive_media.blob",title:"Interface: Blob",sidebar_label:"Blob",custom_edit_url:null},o=void 0,l={unversionedId:"api/core/interfaces/torchlive_media.blob",id:"api/core/interfaces/torchlive_media.blob",title:"Interface: Blob",description:"torchlive/media.Blob",source:"@site/docs/api/core/interfaces/torchlive_media.blob.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/torchlive_media.blob",permalink:"/live/docs/next/api/core/interfaces/torchlive_media.blob",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"torchlive_media.blob",title:"Interface: Blob",sidebar_label:"Blob",custom_edit_url:null},sidebar:"api",previous:{title:"NativeJSRef",permalink:"/live/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},next:{title:"Module",permalink:"/live/docs/next/api/core/interfaces/torchlive_torch.module"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"size",id:"size",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"arrayBuffer",id:"arraybuffer",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"slice",id:"slice",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/modules/torchlive_media"},"torchlive/media"),".Blob"),(0,a.mdx)("h2",{id:"properties"},"Properties"),(0,a.mdx)("h3",{id:"size"},"size"),(0,a.mdx)("p",null,"\u2022 ",(0,a.mdx)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.mdx)("strong",{parentName:"p"},"size"),": ",(0,a.mdx)("inlineCode",{parentName:"p"},"number")),(0,a.mdx)("p",null,"The Blob interface's size property returns the size of the Blob in bytes."),(0,a.mdx)("h4",{id:"defined-in"},"Defined in"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/torchlive/media.ts#L23"},"torchlive/media.ts:23")),(0,a.mdx)("h2",{id:"methods"},"Methods"),(0,a.mdx)("h3",{id:"arraybuffer"},"arrayBuffer"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"arrayBuffer"),"(): ",(0,a.mdx)("inlineCode",{parentName:"p"},"Promise"),"<Uint8Array",">"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"arrayBuffer()")," function returns a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Promise")," that resolves with the\ncontents of the blob as binary data contained in an ArrayBuffer."),(0,a.mdx)("h4",{id:"returns"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"Promise"),"<Uint8Array",">"),(0,a.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/torchlive/media.ts#L19"},"torchlive/media.ts:19")),(0,a.mdx)("hr",null),(0,a.mdx)("h3",{id:"slice"},"slice"),(0,a.mdx)("p",null,"\u25b8 ",(0,a.mdx)("strong",{parentName:"p"},"slice"),"(",(0,a.mdx)("inlineCode",{parentName:"p"},"start?"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"end?"),"): ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")),(0,a.mdx)("p",null,"The `slice() function creates and returns a new ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," object which contains\ndata from a subset of the blob on which it's called."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice"},"https://developer.mozilla.org/en-US/docs/Web/API/Blob/slice")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"slice()\nslice(start)\nslice(start, end)\n")),(0,a.mdx)("h4",{id:"parameters"},"Parameters"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"start?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"An index into the ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," indicating the first byte to include in the new ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob"),". If you specify a negative value, it's treated as an offset from the end of the ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," toward the beginning. For example, -10 would be the 10th from last byte in the ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob"),". The default value is 0. If you specify a value for ",(0,a.mdx)("inlineCode",{parentName:"td"},"start")," that is larger than the size of the source ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob"),", the returned ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," has size 0 and contains no data.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"end?")),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"number")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"An index into the ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," indicating the first byte that will ",(0,a.mdx)("em",{parentName:"td"},"not")," be included in the new ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," (i.e. the byte exactly at this index is not included). If you specify a negative value, it's treated as an offset from the end of the ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," toward the beginning. For example, -10 would be the 10th from last byte in the ",(0,a.mdx)("a",{parentName:"td",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob"),". The default value is ",(0,a.mdx)("inlineCode",{parentName:"td"},"size"),".")))),(0,a.mdx)("h4",{id:"returns-1"},"Returns"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")),(0,a.mdx)("p",null,"A new ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/api/core/interfaces/torchlive_media.blob"},"Blob")," object containing the specified subset of the data contained\nwithin the blob on which this method was called. The original blob is not altered."),(0,a.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/966a71c9/react-native-pytorch-core/src/torchlive/media.ts#L51"},"torchlive/media.ts:51")))}s.isMDXComponent=!0}}]);