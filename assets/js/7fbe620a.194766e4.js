"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67573],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=o,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={id:"index",title:"1. Intro",tutorial:{prev:"tutorial/introduction/select-framework",next:"tutorial/getting-started/prepare-env"}},i=void 0,l={unversionedId:"tutorial/getting-started/index",id:"version-3.xx.xx/tutorial/getting-started/index",title:"1. Intro",description:"Now that you have selected the Ant Design option as your UI preference, let's get started!",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/0-intro.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/index",permalink:"/docs/3.xx.xx/tutorial/getting-started/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/0-intro.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679580061,formattedLastUpdatedAt:"Mar 23, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Intro",tutorial:{prev:"tutorial/introduction/select-framework",next:"tutorial/getting-started/prepare-env"}}},p={},s=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("UIConditional"),c=d("Checklist"),u=d("ChecklistItem"),k={toc:s};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("p",null,"Now that you have selected the ",(0,o.kt)("strong",{parentName:"p"},"Ant Design")," option as your UI preference, let's get started!")),(0,o.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("p",null,"Now that you have selected the ",(0,o.kt)("strong",{parentName:"p"},"Chakra UI")," option as your UI preference, let's get started!")),(0,o.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("p",null,"Now that you have selected the ",(0,o.kt)("strong",{parentName:"p"},"headless")," option as your UI preference, let's get started!")),(0,o.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("p",null,"Now that you have selected the ",(0,o.kt)("strong",{parentName:"p"},"Mantine")," option as your UI preference, let's get started!")),(0,o.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("p",null,"Now that you have selected the ",(0,o.kt)("strong",{parentName:"p"},"Material UI")," option as your UI preference, let's get started!")),(0,o.kt)("admonition",{title:"Using Stackblitz?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Prefer to finish this tutorial in an online code editor? That's possible!"),(0,o.kt)("details",null,(0,o.kt)("summary",null,'Follow these instructions, then go directly to "Generate CRUD pages automatically with Inferencer" section!'),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Set up StackBlitz")),(0,o.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-antd?file=src%2FApp.tsx"},"here")," to open the Ant Design template."))),(0,o.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-chakra-ui?file=src%2FApp.tsx"},"here")," to open the Chakra UI template."))),(0,o.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-headless?file=src%2FApp.tsx"},"here")," to open the headless template."))),(0,o.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-mantine?file=src%2FApp.tsx"},"here")," to open the Mantine template."))),(0,o.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/next/examples/template-mui?file=src%2FApp.tsx"},"here")," to open the Material UI template."))),(0,o.kt)("ol",{parentName:"admonition",start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click \u201cSign in\u201d on the top right to log in using your GitHub credentials.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left of the StackBlitz editor window, click to \u201cfork\u201d the template (save to your own account dashboard)."))),(0,o.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition",start:4},(0,o.kt)("li",{parentName:"ol"},"Wait for the project to load, and you will see a live preview of the \u201crefine-antd-boilerplate\u201d starter."))),(0,o.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition",start:4},(0,o.kt)("li",{parentName:"ol"},"Wait for the project to load, and you will see a live preview of the \u201crefine-chakra-ui-boilerplate\u201d starter."))),(0,o.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition",start:4},(0,o.kt)("li",{parentName:"ol"},"Wait for the project to load, and you will see a live preview of the \u201crefine-headless-boilerplate\u201d starter."))),(0,o.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition",start:4},(0,o.kt)("li",{parentName:"ol"},"Wait for the project to load, and you will see a live preview of the \u201crefine-mantine-boilerplate\u201d starter."))),(0,o.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("ol",{parentName:"admonition",start:4},(0,o.kt)("li",{parentName:"ol"},"Wait for the project to load, and you will see a live preview of the \u201crefine-mui-boilerplate\u201d starter."))),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Make Changes")),(0,o.kt)(m,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,o.kt)(m,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,o.kt)(m,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,o.kt)(m,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,o.kt)(m,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In the file pane, you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.tsx"),". Click to open it, and follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages/"},"Generate CRUD pages automatically with Inferencer")," to make a change to this file.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Create a GitHub Repository")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Press the "Connect Repository" button at the top of your list of files, enter a new name for your repository, and click "Create repo & push".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you have changes to be committed back to GitHub, a \u201cCommit\u201d button will appear at the top left of your workspace. Clicking on this will allow you to enter a commit message, and update your repository."))),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Deploy your App")),(0,o.kt)("p",{parentName:"admonition"},"If you\u2019d like to deploy to Netlify, skip to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/deploy-project/"},"Deploy your app to the web"),". Otherwise, skip to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index/"},"Generate CRUD pages automatically with Inferencer")," to start building with ",(0,o.kt)("strong",{parentName:"p"},"refine"),"!"))),(0,o.kt)("h3",null,"Where are we going?"),(0,o.kt)("p",null,"In this unit, we will be covering the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting up your development environment."),(0,o.kt)("li",{parentName:"ul"},"Creating a new project."),(0,o.kt)("li",{parentName:"ul"},"Generating CRUD pages for your data model."),(0,o.kt)("li",{parentName:"ul"},"Store your project in a git repository."),(0,o.kt)("li",{parentName:"ul"},"Deploy your project to the cloud.")),(0,o.kt)("p",null,"As you make changes to your project, you can commit them to your GitHub repository. Netlify listens for changes to your GitHub repository to automatically rebuild and deploy your application on every commit. This allows anyone to access and view your website updates as you make them."),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(u,{id:"getting-started",mdxType:"ChecklistItem"},"Let's prepare to build a refine project!")))}h.isMDXComponent=!0}}]);