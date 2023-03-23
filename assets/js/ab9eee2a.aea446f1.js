"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},i=void 0,d={unversionedId:"tutorial/adding-crud-pages/mantine/add-delete-feature",id:"version-3.xx.xx/tutorial/adding-crud-pages/mantine/add-delete-feature",title:"5. Adding Delete Feature",description:"There are many ways to delete a record. In this tutorial, we will first use the `` to delete a record and then we will learn how to enable the delete feature on the show page and edit page.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/add-delete-feature",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-delete-feature.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679580061,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},l={},p=[{value:"Adding Delete Feature to List Page",id:"adding-delete-feature-to-list-page",level:2},{value:"Enabling Delete Feature on Show Page and Edit Page",id:"enabling-delete-feature-on-show-page-and-edit-page",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("Checklist"),c=s("ChecklistItem"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to delete a record. In this tutorial, we will first use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," to delete a record and then we will learn how to enable the delete feature on the show page and edit page."),(0,a.kt)("h2",{id:"adding-delete-feature-to-list-page"},"Adding Delete Feature to List Page"),(0,a.kt)("p",null,"Let's start by adding the delete feature to the list page. To do this, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," component that is used to delete a record. When you click on the delete button, it will show a confirmation modal. If you confirm the deletion, it will delete the record."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/components/buttons/delete-button/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<DeleteButton/>")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"To add a delete feature to the blog posts table, you can follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@pankod/refine-mantine";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component to the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    id: "actions",\n    accessorKey: "id",\n    header: "Actions",\n    cell: function render({ getValue }) {\n        return (\n            <Group spacing="xs" noWrap>\n                <ShowButton\n                    hideText\n                    recordItemId={getValue() as string}\n                />\n                <EditButton\n                    hideText\n                    recordItemId={getValue() as string}\n                />\n                <DeleteButton\n                    hideText\n                    recordItemId={getValue() as string}\n                />\n            </Group>\n        );\n    },\n},\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," is the id of the record you want to delete."))),(0,a.kt)("p",null,"Now, you can try to delete a record from the list page. Just click on the delete button of the record you want to delete and confirm the deletion."),(0,a.kt)("h2",{id:"enabling-delete-feature-on-show-page-and-edit-page"},"Enabling Delete Feature on Show Page and Edit Page"),(0,a.kt)("p",null,"When we define a resource, we can enable the delete feature on the show page and edit page by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'src="src/App.tsx"',src:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\n\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostShow } from "pages/blog-posts/show";\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: BlogPostList,\n                            edit: BlogPostEdit,\n                            show: BlogPostShow,\n                            create: BlogPostCreate,\n                            /highlight-next-line\n                            canDelete: true,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"After setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you will see a delete button on the show page and edit page. Because we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show/>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," components in the show page and edit page, the delete button will be added automatically in these components."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#candelete"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information about the ",(0,a.kt)("inlineCode",{parentName:"a"},"canDelete")," property ","\u2192")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine")," to delete a record."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information information ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)(u,{mdxType:"Checklist"},(0,a.kt)(c,{id:"add-delete-feature-mantine",mdxType:"ChecklistItem"},"I added the delete feature to the list page"),(0,a.kt)(c,{id:"add-delete-feature-mantine-2",mdxType:"ChecklistItem"},"I enabled the delete feature on the show page and edit page")))}f.isMDXComponent=!0}}]);