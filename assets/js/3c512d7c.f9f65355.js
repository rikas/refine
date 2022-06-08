"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81046],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(87462),a=t(67294),o=t(72389),i=t(79443);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(89521),c=t(86010),d="tabItem_vU9c";function u(e){var n,t,r,o=e.lazy,i=e.block,u=e.defaultValue,p=e.values,m=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),v=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),w=b.tabGroupChoices,y=b.setTabGroupChoices,x=(0,a.useState)(k),N=x[0],C=x[1],P=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==N&&f.some((function(e){return e.value===E}))&&C(E)}var T=function(e){var n=e.currentTarget,t=P.indexOf(n),r=f[t].value;r!==N&&(S(n),C(r),null!=m&&y(m,r))},L=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=P.indexOf(e.currentTarget)+1;t=P[r]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},g)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":N===n}),key:n,ref:function(e){return P.push(e)},onKeyDown:L,onFocus:T,onClick:T},null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function p(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},79443:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},1079:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(26396),s=t(58215),l=t(96990),c=["components"],d={id:"i18n-provider",title:"i18n Provider"},u=void 0,p={unversionedId:"core/providers/i18n-provider",id:"core/providers/i18n-provider",isDocsHomePage:!1,title:"i18n Provider",description:"refine is capable of supporting any i18n framework but a i18nProvider according to the relevant library must be created.",source:"@site/docs/core/providers/i18n-provider.md",sourceDirName:"core/providers",slug:"/core/providers/i18n-provider",permalink:"/docs/core/providers/i18n-provider",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/providers/i18n-provider.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1654166048,formattedLastUpdatedAt:"6/2/2022",frontMatter:{id:"i18n-provider",title:"i18n Provider"},sidebar:"someSidebar",previous:{title:"Data Provider",permalink:"/docs/core/providers/data-provider"},next:{title:"Live Provider",permalink:"/docs/core/providers/live-provider"}},m=[{value:"Example",id:"example",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Creating i18n Instance",id:"creating-i18n-instance",children:[],level:3},{value:"Wraping app with React.Suspense",id:"wraping-app-with-reactsuspense",children:[],level:3},{value:"Creating i18n Provider",id:"creating-i18n-provider",children:[],level:3},{value:"Adding Translations Files",id:"adding-translations-files",children:[],level:3},{value:"Changing The Locale",id:"changing-the-locale",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],g={toc:m};function h(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"refine is capable of supporting any i18n framework but a ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," according to the relevant library must be created."),(0,o.kt)("p",null,"The default language of refine is currently English. If you want to use other languages, follow the instructions above. If your application is in English, you don't need to create an i18nProvider."),(0,o.kt)("p",null,"If you want to add i18n support in the app, refine expects the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," type as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const i18nProvider = {\n    translate: (key: string, params: object) => string,\n    changeLocale: (lang: string) => Promise,\n    getLocale: () => string,\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," allows us to put translation features to hooks (",(0,o.kt)("inlineCode",{parentName:"p"},"useTranslate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useSetLocale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useGetLocale"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useTranslate")," shows translation between different languages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSetLocale")," changes locale at runtime."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useGetLocale")," getting current locale.")),(0,o.kt)("p",null,"After creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", you can pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport i18nProvider from "./i18nProvider";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            i18nProvider={i18nProvider}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},(0,o.kt)("strong",{parentName:"a"},"superplate"))," to initialize your refine projects. It configures the project according to your needs including i18n provider."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example is for SPA react apps, for Next.js ",(0,o.kt)("a",{parentName:"p",href:"/docs/examples/i18n/i18n-nextjs"},"refer to i18n Nextjs example ")))),(0,o.kt)("p",null,"Let's add multi-language support using the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-i18next")," framework. At the end of our example, our application will support both German and English."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react.i18next.com/getting-started"},"Refer to the react-i18next docs for detailed information ","\u2192")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Run the following command within your project directory to install both ",(0,o.kt)("inlineCode",{parentName:"p"},"react-i18next")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"i18next")," packages :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install react-i18next i18next\n")),(0,o.kt)("h3",{id:"creating-i18n-instance"},"Creating i18n Instance"),(0,o.kt)("p",null,"First, we will create an i18n instance using ",(0,o.kt)("inlineCode",{parentName:"p"},"react-i18next"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/i18n.ts"',title:'"src/i18n.ts"'},'import i18n from "i18next";\nimport { initReactI18next } from "react-i18next"; // https://react.i18next.com/latest/using-with-hooks\nimport Backend from "i18next-http-backend"; // adding lazy loading for translations, more information here: https://github.com/i18next/i18next-http-backend\nimport detector from "i18next-browser-languagedetector"; // auto detect the user language, more information here: https://github.com/i18next/i18next-browser-languageDetector\n\ni18n.use(Backend)\n    .use(detector)\n    .use(initReactI18next)\n    .init({\n        supportedLngs: ["en", "de"],\n        backend: {\n            loadPath: "/locales/{{lng}}/{{ns}}.json", // locale files path\n        },\n        defaultNS: "common",\n        fallbackLng: ["en", "de"],\n    });\n\nexport default i18n;\n')),(0,o.kt)("h3",{id:"wraping-app-with-reactsuspense"},"Wraping app with React.Suspense"),(0,o.kt)("p",null,"Then we will import the i18n instance we created and wrap the application with ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Suspense"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport App from "./App";\n\n// highlight-next-line\nimport "./i18n";\n\nReactDOM.render(\n    <React.StrictMode>\n// highlight-start\n        <React.Suspense fallback="loading">\n            <App />\n        </React.Suspense>\n// highlight-end\n    </React.StrictMode>,\n    document.getElementById("root"),\n);\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Suspense")," because it improves performance by preventing the app from rendering unnecessarily."))),(0,o.kt)("h3",{id:"creating-i18n-provider"},"Creating i18n Provider"),(0,o.kt)("p",null,"Next, we will include the i18n instance and create the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"react-i18next"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n// highlight-next-line\nimport { useTranslation } from "react-i18next";\n\nimport { PostList } from "pages/posts";\n\nconst App: React.FC = () => {\n// highlight-start\n    const { t, i18n } = useTranslation();\n\n    const i18nProvider = {\n        translate: (key: string, params: object) => t(key, params),\n        changeLocale: (lang: string) => i18n.changeLanguage(lang),\n        getLocale: () => i18n.language,\n    };\n// highlight-end\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-next-line\n            i18nProvider={i18nProvider}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n')),(0,o.kt)("p",null,"After we pass the i18nProvider to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, translation hooks(",(0,o.kt)("inlineCode",{parentName:"p"},"useTranslate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useSetLocale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useGetLocale"),") are fully ready to use."),(0,o.kt)("h3",{id:"adding-translations-files"},"Adding Translations Files"),(0,o.kt)("p",null,"Before we get started, let's look at the translations that refine uses in components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pages": {\n        "login": {\n            "signin": "Sign in",\n            "signup": "Sign up",\n            "username": "Username",\n            "password": "Password",\n            "remember": "Remember me",\n            "forgotPassword": "Forgot password?",\n            "title": "Sign in your account",\n            "noAccount": "Don\u2019t have an account?"\n        },\n        "error": {\n            "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n            "404": "Sorry, the page you visited does not exist.",\n            "resource404": "Are you sure you have created the {{resource}} resource.",\n            "backHome": "Back Home"\n        }\n    },\n    "buttons": {\n        "create": "Create",\n        "save": "Save",\n        "logout": "Logout",\n        "delete": "Delete",\n        "edit": "Edit",\n        "cancel": "Cancel",\n        "confirm": "Are you sure?",\n        "filter": "Filter",\n        "clear": "Clear",\n        "refresh": "Refresh",\n        "show": "Show",\n        "undo": "Undo",\n        "import": "Import",\n        "clone": "Clone",\n        "notAccessTitle": "You don\'t have permission to access",\n    },\n    "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n    "notifications": {\n        "success": "Successful",\n        "error": "Error (status code: {{statusCode}})",\n        "undoable": "You have {{seconds}} seconds to undo",\n        "createSuccess": "Successfully created {{resource}}",\n        "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n        "deleteSuccess": "Successfully deleted {{resource}}",\n        "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n        "editSuccess": "Successfully edited {{resource}}",\n        "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n        "importProgress": "Importing: {{processed}}/{{total}}"\n    },\n    "loading": "Loading",\n    "tags": {\n        "clone": "Clone"\n    },\n    "dashboard": {\n        "title": "Dashboard"\n    }\n}\n')),(0,o.kt)("p",null,"All components of refine supports i18n. If you want to change the refine component texts, you can create your own translation file with reference to the keys above."),(0,o.kt)("p",null,"Now, let's add the language files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"|-- public\n|   |-- locales\n|       |-- en\n|       |   |-- common.json\n|       |-- de\n|           |-- common.json\n|-- src\n|-- package.json\n|-- tsconfig.json\n")),(0,o.kt)(i.Z,{defaultValue:"en",values:[{label:"English",value:"en"},{label:"German",value:"de"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"en",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n    "pages": {\n        "login": {\n            "signin": "Sign in",\n            "signup": "Sign up",\n            "username": "Username",\n            "password": "Password",\n            "remember": "Remember me",\n            "forgotPassword": "Forgot password?",\n            "title": "Sign in your account",\n            "noAccount": "Don\u2019t have an account?"\n        },\n        "error": {\n            "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n            "404": "Sorry, the page you visited does not exist.",\n            "resource404": "Are you sure you have created the {{resource}} resource.",\n            "backHome": "Back Home"\n        }\n    },\n    "buttons": {\n        "create": "Create",\n        "save": "Save",\n        "logout": "Logout",\n        "delete": "Delete",\n        "edit": "Edit",\n        "cancel": "Cancel",\n        "confirm": "Are you sure?",\n        "filter": "Filter",\n        "clear": "Clear",\n        "refresh": "Refresh",\n        "show": "Show",\n        "undo": "Undo",\n        "import": "Import",\n        "clone": "Clone",\n        "notAccessTitle": "You don\'t have permission to access",\n    },\n    "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n    "notifications": {\n        "success": "Successful",\n        "error": "Error (status code: {{statusCode}})",\n        "undoable": "You have {{seconds}} seconds to undo",\n        "createSuccess": "Successfully created {{resource}}",\n        "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n        "deleteSuccess": "Successfully deleted {{resource}}",\n        "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n        "editSuccess": "Successfully edited {{resource}}",\n        "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n        "importProgress": "Importing: {{processed}}/{{total}}"\n    },\n    "loading": "Loading",\n    "tags": {\n        "clone": "Clone"\n    },\n    "dashboard": {\n        "title": "Dashboard"\n    },\n    "posts": {\n        "posts": "Posts",\n        "fields": {\n            "id": "Id",\n            "title": "Title",\n            "category": "Category",\n            "status": {\n                "title": "Status",\n                "published": "Published",\n                "draft": "Draft",\n                "rejected": "Rejected"\n            },\n            "content": "Content",\n            "createdAt": "Created At"\n        },\n        "titles": {\n            "create": "Create Post",\n            "edit": "Edit Post",\n            "list": "Posts",\n            "show": "Show Post"\n        }\n    },\n    "table": {\n        "actions": "Actions"\n    }\n}\n'))),(0,o.kt)(s.Z,{value:"de",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/de/common.json"',title:'"/locales/de/common.json"'},'{\n    "pages": {\n        "login": {\n            "signin": "Einloggen",\n            "signup": "Anmelden",\n            "username": "Benutzername",\n            "password": "Passwort",\n            "remember": "Login speichern",\n            "forgotPassword": "Passwort Vergessen?",\n            "title": "Benutzerkonto einloggen",\n            "noAccount": "Noch kein Benutzerkonto?"\n        },\n        "error": {\n            "info": "Sie haben vergessen, {{action}} component zu {{resource}} hinzuf\xfcgen.",\n            "404": "Leider existiert diese Seite nicht.",\n            "resource404": "Haben Sie die {{resource}} resource erstellt?",\n            "backHome": "Zur\xfcck"\n        }\n    },\n    "buttons": {\n        "create": "Erstellen",\n        "save": "Speichern",\n        "logout": "Abmelden",\n        "delete": "L\xf6schen",\n        "edit": "Bearbeiten",\n        "cancel": "Abbrechen",\n        "confirm": "Sicher?",\n        "filter": "Filter",\n        "clear": "L\xf6schen",\n        "refresh": "Erneuern",\n        "show": "Zeigen",\n        "undo": "Undo",\n        "import": "Importieren",\n        "clone": "Klon",\n        "notAccessTitle": "Sie haben keine zugriffsberechtigung",\n    },\n    "warnWhenUnsavedChanges": "Nicht gespeicherte \xc4nderungen werden nicht \xfcbernommen.",\n    "notifications": {\n        "success": "Erfolg",\n        "error": "Fehler (status code: {{statusCode}})",\n        "undoable": "Sie haben {{seconds}} Sekunden Zeit f\xfcr Undo.",\n        "createSuccess": "{{resource}} erfolgreich erstellt.",\n        "createError": "Fehler beim Erstellen {{resource}} (status code: {{statusCode}})",\n        "deleteSuccess": "{{resource}} erfolgreich gel\xf6scht.",\n        "deleteError": "Fehler beim L\xf6schen {{resource}} (status code: {{statusCode}})",\n        "editSuccess": "{{resource}} erfolgreich bearbeitet.",\n        "editError": "Fehler beim Bearbeiten {{resource}} (status code: {{statusCode}})",\n        "importProgress": "{{processed}}/{{total}} importiert"\n    },\n    "loading": "Wird geladen",\n    "tags": {\n        "clone": "Klon"\n    },\n    "dashboard": {\n        "title": "Dashboard"\n    },\n    "posts": {\n        "posts": "Eintr\xe4ge",\n        "fields": {\n            "id": "Id",\n            "title": "Titel",\n            "category": "Kategorie",\n            "status": {\n                "title": "Status",\n                "published": "Ver\xf6ffentlicht",\n                "draft": "Draft",\n                "rejected": "Abgelehnt"\n            },\n            "content": "Inhalh",\n            "createdAt": "Erstellt am"\n        },\n        "titles": {\n            "create": "Erstellen",\n            "edit": "Bearbeiten",\n            "list": "Eintr\xe4ge",\n            "show": "Eintrag zeigen"\n        }\n    },\n    "table": {\n        "actions": "Aktionen"\n    }\n}\n')))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We can override refine's default texts by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"common.json")," files in the example above."))),(0,o.kt)("h3",{id:"changing-the-locale"},"Changing The Locale"),(0,o.kt)("p",null,"Next, we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Header>")," component. This component will allow us to change the language."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { useGetLocale, useSetLocale } from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    Space,\n    Menu,\n    Button,\n    Icons,\n    Dropdown,\n    Avatar,\n} from "@pankod/refine-antd";\nimport { useTranslation } from "react-i18next";\n\nconst { DownOutlined } = Icons;\n\nexport const Header: React.FC = () => {\n    const { i18n } = useTranslation();\n    const locale = useGetLocale();\n    const changeLanguage = useSetLocale();\n\n    const currentLocale = locale();\n\n    const menu = (\n        <Menu selectedKeys={currentLocale ? [currentLocale] : []}>\n            {[...(i18n.languages || [])].sort().map((lang: string) => (\n                <Menu.Item\n                    key={lang}\n                    onClick={() => changeLanguage(lang)}\n                    icon={\n                        <span style={{ marginRight: 8 }}>\n                            <Avatar\n                                size={16}\n                                src={`/images/flags/${lang}.svg`}\n                            />\n                        </span>\n                    }\n                >\n                    {lang === "en" ? "English" : "German"}\n                </Menu.Item>\n            ))}\n        </Menu>\n    );\n\n    return (\n        <AntdLayout.Header\n            style={{\n                display: "flex",\n                justifyContent: "flex-end",\n                alignItems: "center",\n                padding: "0px 24px",\n                height: "48px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            <Dropdown overlay={menu}>\n                <Button type="link">\n                    <Space>\n                        <Avatar\n                            size={16}\n                            src={`/images/flags/${currentLocale}.svg`}\n                        />\n                        {currentLocale === "en" ? "English" : "German"}\n                        <DownOutlined />\n                    </Space>\n                </Button>\n            </Dropdown>\n        </AntdLayout.Header>\n    );\n};\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"Then, we will pass ",(0,o.kt)("inlineCode",{parentName:"p"},"<Header>")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component as a property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, Resource } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport { useTranslation } from "react-i18next";\nimport "./i18n";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { Header } from "components";\n\nconst App: React.FC = () => {\n    const { t, i18n } = useTranslation();\n\n    const i18nProvider = {\n        translate: (key: string, params: object) => t(key, params),\n        changeLocale: (lang: string) => i18n.changeLanguage(lang),\n        getLocale: () => i18n.language,\n    };\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            i18nProvider={i18nProvider}\n// highlight-next-line\n            Header={Header}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"Finally, we will create the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PostList>")," page and then we will translate texts using ",(0,o.kt)("inlineCode",{parentName:"p"},"useTranslate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { \n    // highlight-next-line\n    useTranslate,\n    useMany,\n } from "@pankod/refine-core";\nimport {\n    List,\n    Table,\n    TextField,\n    useTable,\n    Space,\n    EditButton,\n    ShowButton,\n} from "@pankod/refine-antd";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostList: React.FC = () => {\n// highlight-next-line\n    const translate = useTranslate();\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column\n                    dataIndex="title"\n// highlight-next-line\n                    title={translate("posts.fields.title")}\n                />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n// highlight-next-line\n                    title={translate("posts.fields.category")}\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <Table.Column<IPost>\n// highlight-next-line\n                    title={translate("table.actions")}\n                    dataIndex="actions"\n                    key="actions"\n                    render={(_value, record) => (\n                        <Space>\n                            <EditButton size="small" recordItemId={record.id} />\n                            <ShowButton size="small" recordItemId={record.id} />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="interfaces/index.d.ts"',title:'"interfaces/index.d.ts"'},'export interface ICategory {\n    id: string;\n    title: string;\n}\n\nexport interface IPost {\n    id: string;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: ICategory;\n}\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Language change action"})),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/pankod/refine/tree/master/examples/i18n?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-i18n-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0},96990:function(e,n,t){n.Z=t.p+"assets/images/changing-language-2d0d0ecbb92147b92e4ae9dee454265d.gif"}}]);