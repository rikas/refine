"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"general-concepts",title:"General Concepts"},i=void 0,s={unversionedId:"api-reference/general-concepts",id:"api-reference/general-concepts",title:"General Concepts",description:"-   refine core is fully independent of UI. So you can use core components and hooks without any UI dependency.",source:"@site/docs/api-reference/general-concepts.md",sourceDirName:"api-reference",slug:"/api-reference/general-concepts",permalink:"/docs/api-reference/general-concepts",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/general-concepts.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679580061,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"general-concepts",title:"General Concepts"},sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/docs/api-reference"},next:{title:"Core API",permalink:"/docs/api-reference/core"}},p={},l=[{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refine")," core is fully independent of UI. So you can use core components and hooks without any UI dependency."),(0,a.kt)("li",{parentName:"ul"},"All the ",(0,a.kt)("strong",{parentName:"li"},"data")," related hooks(",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable")),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm")),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useList"},(0,a.kt)("inlineCode",{parentName:"a"},"useList"))," etc.) of ",(0,a.kt)("strong",{parentName:"li"},"refine")," can be given some common properties like ",(0,a.kt)("inlineCode",{parentName:"li"},"resource"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"meta"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"queryOptions")," etc.")),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a params. This parameter is usually used to as a API endpoint path. It all depends on how to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),". See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},(0,a.kt)("inlineCode",{parentName:"a"},"creating a data provider"))," section for an example of how ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," are handled."),(0,a.kt)("p",null,"How does refine know what the resource value is?"),(0,a.kt)("p",null,"1- The resource value is determined from the active route where the component or the hook is used."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To make the inference work, you need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from your router package choice.")),(0,a.kt)("p",null,"Like below, if you are using the hook in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},'"posts"'),". Because the active route is ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts")," and its also defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerBindings from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\nimport { PostList } from "pages/posts/list.tsx";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "posts",\n                        list: "/posts",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/posts" element={<PostList />} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"2- The resource value is determined from the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop of the hook."),(0,a.kt)("p",null,"You can override the default ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value hook by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop to the hook like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n    const result = useTable({\n        //highlight-next-line\n        resource: "users",\n    });\n\n    return <div>...</div>;\n};\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The value you pass to the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property is also used to determine the active ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," array. Defining the resource in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," array is ",(0,a.kt)("strong",{parentName:"p"},"not")," required for your API interactions to work but it will enable features of ",(0,a.kt)("strong",{parentName:"p"},"refine")," such as redirecting to the list page after a successful create or update operation.")),(0,a.kt)("p",null,"How can I request an API with nested route?"),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-can-i-request-an-api-with-nested-route"},"Refer to how to use resource with nested routes documentation for more information. ","\u2192")),(0,a.kt)("h3",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h3"},"meta")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is used following three purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,a.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON)."),(0,a.kt)("li",{parentName:"ul"},"Hooks related with routing also uses ",(0,a.kt)("inlineCode",{parentName:"li"},"meta")," to fill additional parameters in the target routes.")),(0,a.kt)("p",null,"How to use ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," to pass additional information to data provider methods?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    resource: "posts",\n    id: 1,\n    // highlight-start\n    meta: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    ...\n    getOne: async ({ resource, id, meta }) => {\n        // highlight-next-line\n        const headers = meta?.headers ?? {};\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        //highlight-next-line\n        const { data } = await httpClient.get(url, { headers });\n\n        return {\n            data,\n        };\n    },\n    ...\n};\n')),(0,a.kt)("p",null,"In the above example, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-i-can-override-specific-function-of-data-providers"},"Refer to the how to pass ",(0,a.kt)("inlineCode",{parentName:"a"},"meta")," to your existing ",(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider")," methods. ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/data-provider/graphql"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"GraphQL")," guide to learn how to use ",(0,a.kt)("inlineCode",{parentName:"a"},"meta")," to create GraphQL queries. ","\u2192")))}d.isMDXComponent=!0}}]);