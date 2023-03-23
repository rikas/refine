"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73854],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},56873:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"/packages/core/src/hooks/auth/useLogout/index.ts"},i=void 0,u={unversionedId:"api-reference/core/hooks/auth/useLogout",id:"api-reference/core/hooks/auth/useLogout",title:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"@site/docs/api-reference/core/hooks/auth/useLogout.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogout",permalink:"/docs/api-reference/core/hooks/auth/useLogout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useLogout.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679580061,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"/packages/core/src/hooks/auth/useLogout/index.ts"},sidebar:"someSidebar",previous:{title:"useLogin",permalink:"/docs/api-reference/core/hooks/auth/useLogin"},next:{title:"usePermissions",permalink:"/docs/api-reference/core/hooks/auth/usePermissions"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after logout",id:"redirection-after-logout",level:2}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError.\nData that is resolved from ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,r.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values ",(0,r.kt)("inlineCode",{parentName:"li"},'{ name: "useLogout Error", message: "Something went wrong during logout" }'),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"By default, Refine already provides a logout button on the sider and if you want to use this default button you won't need to handle the logout flow manually.\nIf you want to build a custom logout button instead of the default one, ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/customLogoutButton"',title:'"components/customLogoutButton"'},'import { useLogout } from "@refinedev/core";\n\nexport const LogoutButton = () => {\n    const { mutate: logout } = useLogout();\n\n    return <button onClick={() => logout()}>Logout</button>;\n};\n')),(0,r.kt)("h2",{id:"redirection-after-logout"},"Redirection after logout"),(0,r.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogout } from "@refinedev/core";\n\nconst { mutate: logout } = useLogout();\n\nlogout({ redirectPath: "/custom-url" });\n')),(0,r.kt)("p",null,"Then, you can handle this URL in your ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    logout: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," can accept any kind of object for values since the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}p.isMDXComponent=!0}}]);