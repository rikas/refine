"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}},i=void 0,l={unversionedId:"tutorial/adding-crud-pages/mui/index",id:"tutorial/adding-crud-pages/mui/index",title:"1. Adding List Page",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish.",source:"@site/docs/tutorial/4-adding-crud-pages/mui/add-list-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/index",permalink:"/docs/tutorial/adding-crud-pages/mui/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/add-list-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679580061,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}}},p={},s=[{value:"Creating List Page",id:"creating-list-page",level:2},{value:"Understanding the List Component",id:"understanding-the-list-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the List Page to the App",id:"adding-the-list-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=d("Checklist"),c=d("ChecklistItem"),m={toc:s};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish."),(0,o.kt)("h2",{id:"creating-list-page"},"Creating List Page"),(0,o.kt)("p",null,"First, let's create our file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,o.kt)("inlineCode",{parentName:"p"},"list.tsx"),". Then, we will copy the list page code generated by Inferencer and paste it into the file."),(0,o.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You can see the list page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,o.kt)("inlineCode",{parentName:"p"},"list.tsx")," file."))),(0,o.kt)("p",null,"You can see the list page code generated by Inferencer below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    Layout,\n    LightTheme,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("p",null,"Instead of coding the list page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,o.kt)("h2",{id:"understanding-the-list-component"},"Understanding the List Component"),(0,o.kt)("p",null,"We will go through the list page components and hooks one by one."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing create button or page title etc."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/list"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<List/>")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," is a native ",(0,o.kt)("strong",{parentName:"p"},"Material UI")," component that is used to display the data in a tabular format."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"Material UI")," ",(0,o.kt)("inlineCode",{parentName:"a"},"<DataGrid/>")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook, imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mui")," package, has been developed by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package. So, It provides all the features of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,o.kt)("p",{parentName:"li"},"It returns the values needed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataGridProps")," variable."),(0,o.kt)("p",{parentName:"li"},"This is the point where the \u2728real magic\u2728 happens!"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook fetches data from API and wraps them with various helper hooks required for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," component. Data interaction functions like sorting, filtering, and pagination will be instantly available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<DataGrid/>")," with this single line of code."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useDataGrid/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useDataGrid")," documentation for more information ","\u2192"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<EditButton/>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<ShowButton/>")," are ",(0,o.kt)("strong",{parentName:"p"},"refine")," components that are used to navigate to the edit and show pages of the record."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/edit-button/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<EditButton/>")," documentation for more information ","\u2192")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/buttons/show-button/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<ShowButton/>")," documentation for more information ","\u2192")))),(0,o.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,o.kt)("p",null,"Each blog post includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," field which has ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property. This is a foreign key that points to the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories"),' resource which is different than "blog_post" resource.'),(0,o.kt)("p",null,"There is a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," field In the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource. To display the category ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," in the table, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMany")," hook provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("p",null,"This hook allows us to fetch data for multiple records in a single request by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"'s of the related records. In this case, we need to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"'s of the blog posts categories. It is particularly useful when we need to fetch related data for multiple records."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useMany/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for more information ","\u2192")),(0,o.kt)("p",null,"In this tutorial, each blog post record has a ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," field as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/blog_posts"',title:'"https://api.fake-rest.refine.dev/blog_posts"'},'{\n  ...\n  "category": {\n    "id": 1\n  }\n  ...\n},\n{\n  ...\n  "category": {\n    "id": 2\n  }\n  ...\n}\n')),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMany")," hook to fetch the full category records for each of these blog posts, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@refinedev/core";\n\nconst { data } = useMany({\n    resource: "categories",\n    ids: blogPosts.map((blogPost) => blogPost.category.id),\n});\n')),(0,o.kt)("p",null,"This will pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),"\xa0and ",(0,o.kt)("inlineCode",{parentName:"p"},"ids")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getMany")," function. The ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," will then make a single request to the API to fetch the full records for each category related to the blog posts. The resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," variable will be an array of category records, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        id: 1,\n        title: "mock category title",\n    },\n    {\n        id: 2,\n        title: "another mock category title",\n    },\n];\n')),(0,o.kt)("p",null,"We can then use this ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," array to display the ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," of each category in the table."),(0,o.kt)("h2",{id:"adding-the-list-page-to-the-app"},"Adding the List Page to the App"),(0,o.kt)("p",null,"Now that we have created the list page, we need to add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the created ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    Layout,\n    LightTheme,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\n//highlight-next-line\nimport { BlogPostList } from "pages/blog-posts/list";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    {/* highlight-next-line */}\n                                    <Route index element={<BlogPostList />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,o.kt)("p",null,"Now, we can see the list page in the browser at ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(u,{mdxType:"Checklist"},(0,o.kt)(c,{id:"add-list-page-mui",mdxType:"ChecklistItem"},"I added the list page to the app."),(0,o.kt)(c,{id:"add-list-page-mui-2",mdxType:"ChecklistItem"},"I understood the list page components and hooks."),(0,o.kt)(c,{id:"add-list-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);