"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25619],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"useTable",title:"useTable"},d=void 0,p={unversionedId:"core/hooks/useTable",id:"core/hooks/useTable",isDocsHomePage:!1,title:"useTable",description:"useTable allows us to fetch data according to the sorter state, the filter state and the pagination states.",source:"@site/docs/core/hooks/useTable.md",sourceDirName:"core/hooks",slug:"/core/hooks/useTable",permalink:"/docs/core/hooks/useTable",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/useTable.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1652258824,formattedLastUpdatedAt:"5/11/2022",frontMatter:{id:"useTable",title:"useTable"},sidebar:"someSidebar",previous:{title:"useShow",permalink:"/docs/core/hooks/show/useShow"},next:{title:"useGetLocale",permalink:"/docs/core/hooks/translate/useGetLocale"}},s=[{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Pagination",id:"pagination",children:[],level:2},{value:"Sorting",id:"sorting",children:[],level:2},{value:"Filtering",id:"filtering",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," allows us to fetch data according to the sorter state, the filter state and the pagination states."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you're looking for a complete table library, Refine supports two table libraries out-of-the-box."),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://react-table.tanstack.com/"},"React Table")," (for Headless users) - ",(0,l.kt)("a",{parentName:"li",href:"/docs/packages/react-table"},"Documentation")," - ",(0,l.kt)("a",{parentName:"li",href:"/docs/examples/react-table/react-table"},"Example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ant.design/components/table/#header"},"Ant Design Table")," (for Ant Design users) - ",(0,l.kt)("a",{parentName:"li",href:"/docs/ui-frameworks/antd/hooks/table/useTable"},"Documentation")," - ",(0,l.kt)("a",{parentName:"li",href:"/docs/examples/table/useTable"},"Example"))))),(0,l.kt)("p",null,"Lets say you have a endpoint that returns the following data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 182,\n        "title": "A aspernatur rerum molestiae.",\n        "content": "Natus molestias incidunt voluptatibus. Libero delectus facilis...",\n        "status": "published",\n        "createdAt": "2021-04-18T00:09:11.607Z"\n    },\n    {\n        "id": 989,\n        "title": "A molestiae vel voluptatem enim.",\n        "content": "Voluptas consequatur quia beatae. Ipsa est qui culpa deleniti...",\n        "status": "draft",\n        "createdAt": "2020-01-28T02:57:58.892Z"\n    }\n]\n')),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("p",null,"In basic usage ",(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," returns the data as it comes from the endpoint."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/core";\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n}\n\nconst { tableQueryResult } = useTable<IPost>({\n    resource: "posts",\n});\n')),(0,l.kt)("h2",{id:"pagination"},"Pagination"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," has a pagination feature. The pagination is done by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"current")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pageSize")," props. The ",(0,l.kt)("inlineCode",{parentName:"p"},"current")," is the current page and the ",(0,l.kt)("inlineCode",{parentName:"p"},"pageSize")," is the number of records per page."),(0,l.kt)("p",null,"By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"current")," is 1 and the ",(0,l.kt)("inlineCode",{parentName:"p"},"pageSize")," is 10. You can change default values by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialCurrent")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"initialPageSize")," props to the ",(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,l.kt)("p",null,"You can also change the ",(0,l.kt)("inlineCode",{parentName:"p"},"current")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pageSize")," values by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setCurrent")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setPageSize")," functions that are returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," hook. Every change will trigger a new fetch."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/core";\n\nconst { pageSize, setPageSize, current, setCurrent } = useTable({\n    resource: "posts",\n    initialCurrent: 1,\n    initialPageSize: 10,\n});\n\nconsole.log(pageSize); // 10\nconsole.log(current); // 1\n\nsetPageSize(20);\nconsole.log(pageSize); // 20\n\nsetCurrent(2);\nconsole.log(current); // 2\n')),(0,l.kt)("h2",{id:"sorting"},"Sorting"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," has a sorter feature. The sorter is done by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"sorter")," state. The ",(0,l.kt)("inlineCode",{parentName:"p"},"sorter")," state is a ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/interfaceReferences#crudsorting"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudSorting"))," type that contains the field and the order of the sort. You can change the sorter state by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setSorter")," function. Every change will trigger a new fetch."),(0,l.kt)("p",null,"Also you can add initial sorter state by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialSorter")," prop and permanent sorter state by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"permanentSorter")," prop to the ",(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," hook. Even if you change the sorter state, the ",(0,l.kt)("inlineCode",{parentName:"p"},"permanentSorter")," will be used together with the sorter state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/core";\n\nconst { sorter, setSorter } = useTable({\n    resource: "posts",\n    initialSorter: [\n        {\n            field: "title",\n            order: "asc",\n        },\n    ],\n    permanentSorter: [\n        {\n            field: "id",\n            order: "desc",\n        },\n    ],\n});\n\nconsole.log(sorter); // [{ field: "id", order: "desc" }, { field: "title", order: "asc" }]\n\nsetSorter([\n    {\n        field: "createdAt",\n        order: "desc",\n    },\n]);\n\nconsole.log(sorter); // [{ field: "createdAt", order: "desc" }, { field: "id", order: "desc" }]\n')),(0,l.kt)("h2",{id:"filtering"},"Filtering"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," has a filter feature. The filter is done by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"filters")," state. The ",(0,l.kt)("inlineCode",{parentName:"p"},"filters")," state is a ",(0,l.kt)("a",{parentName:"p",href:"/docs/core/interfaceReferences#crudfilters"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," type that contains the field, the operator and the value of the filter. You can change the filter state by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setFilters")," function. Every change will trigger a new fetch."),(0,l.kt)("p",null,"Also you can add initial filter state by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"initialFilter")," prop and permanent filter state by passing the ",(0,l.kt)("inlineCode",{parentName:"p"},"permanentFilter")," prop to the ",(0,l.kt)("inlineCode",{parentName:"p"},"useTable")," hook. Even if you change the filter state, the ",(0,l.kt)("inlineCode",{parentName:"p"},"permanentFilter")," will be used together with the filter state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/core";\n\nconst { filters, setFilters } = useTable({\n    resource: "posts",\n    initialFilter: [\n        {\n            field: "title",\n            operator: "contains",\n            value: "rerum",\n        },\n    ],\n    permanentFilter: [\n        {\n            field: "status",\n            operator: "equals",\n            value: "published",\n        },\n    ],\n});\n\nconsole.log(filters); // [{ field: "title", operator: "contains", value: "rerum" }, { field: "status", operator: "equals", value: "published" }]\n\nsetFilter([\n    {\n        field: "title",\n        operator: "contains",\n        value: "A",\n    },\n]);\n\nconsole.log(filters); // [{ field: "title", operator: "contains", value: "A" }, { field: "status", operator: "equals", value: "published" }]\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource"),(0,l.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialCurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial page index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialPageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial number of items per page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialSorter"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial sorter state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permanentSorter"),(0,l.kt)("td",{parentName:"tr",align:null},"Default and unchangeable sorter state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudSorting"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial filter state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permanentFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"Default and unchangeable filter state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudFilters"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"syncWithLocation"),(0,l.kt)("td",{parentName:"tr",align:null},"Sortings, filters, page index and records shown per page are tracked by browser history"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Value set in ",(0,l.kt)("a",{parentName:"td",href:"/docs/core/components/refine-config#syncwithlocation"},"Refine"),". If a custom resource is given, it will be ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,l.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"{ data: TData[]; },"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TError>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metaData"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,l.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,l.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,l.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,l.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,l.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,l.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,l.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,l.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,l.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,l.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey[]; [key: string]: any; }"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,l.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,l.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Desription"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TData"),(0,l.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TError"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,l.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,l.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,l.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,l.kt)("h3",{id:"return-values"},"Return values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tableQueryResult"),(0,l.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,l.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,l.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,l.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"}," data: TData[];"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"}," total: number; },"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"}," TError>")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current"),(0,l.kt)("td",{parentName:"tr",align:null},"Current page index state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalPage"),(0,l.kt)("td",{parentName:"tr",align:null},"Total page count"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setCurrent"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that changes the current"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"React.Dispatch<React.SetStateAction<number>>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Current pageSize state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setPageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that changes the pageSize."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"React.Dispatch<React.SetStateAction<number>>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sorter"),(0,l.kt)("td",{parentName:"tr",align:null},"Current sorting state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudsorting"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudSorting")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setSorter"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that accepts a new sorter state."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(sorter: CrudSorting) => void"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filters"),(0,l.kt)("td",{parentName:"tr",align:null},"Current filters state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#crudfilters"},(0,l.kt)("inlineCode",{parentName:"a"},"CrudFilters")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setFilters"),(0,l.kt)("td",{parentName:"tr",align:null},"A function that accepts a new filter state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(filters: CrudFilters) => void"))))),(0,l.kt)("br",null))}m.isMDXComponent=!0}}]);