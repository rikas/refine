"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",slug:"docker-entrypoint",authors:"muhammad_khabbab",tags:["docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/docker-entrypoint",source:"@site/blog/2023-01-10-docker-entrypoint.md",title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",date:"2023-01-10T00:00:00.000Z",formattedDate:"January 10, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"}],readingTime:7.145,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",slug:"docker-entrypoint",authors:"muhammad_khabbab",tags:["docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/social.png",hide_table_of_contents:!1},prevItem:{title:"Building a Complete React CRUD App with Airtable",permalink:"/blog/react-crud-app-airtable"},nextItem:{title:"The refine Open Source Hackathon",permalink:"/blog/refine-hackathon"},relatedPosts:[{title:"How to Use Docker Copy Command",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.155,date:"2022-12-28T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.555,date:"2022-09-28T00:00:00.000Z"}],authorPosts:[{title:"How to Use Docker Copy Command",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.155,date:"2022-12-28T00:00:00.000Z"},{title:"git switch and git checkout \u2013 How to switch branches in git",permalink:"/blog/git-switch-and-git-checkout",formattedDate:"December 20, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.41,date:"2022-12-20T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.555,date:"2022-09-28T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"How does docker ENTRYPOINT work?",id:"how-does-docker-entrypoint-work",level:2},{value:"Docker entrypoint example commands",id:"docker-entrypoint-example-commands",level:2},{value:"Difference between ENTRYPOINT and CMD",id:"difference-between-entrypoint-and-cmd",level:2},{value:"When to use docker ENTRYPOINT vs CMD",id:"when-to-use-docker-entrypoint-vs-cmd",level:2},{value:"How to use a script as ENTRYPOINT",id:"how-to-use-a-script-as-entrypoint",level:2}],m=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"ENTRYPOINT is one of the many instructions you can write in a dockerfile. The ENTRYPOINT instruction is used to configure the executables that will always run after the container is initiated. For example, you can mention a script to run as soon as the container is started. Note that the ENTRYPOINT commands cannot be overridden or ignored, even when you run the container with command line arguments.  "),(0,o.kt)("p",null,"Docker ENTRYPOINT instructions can be written in both shell and exec forms, such as the following example below:"),(0,o.kt)("p",null,"\u2022\tShell form: ENTRYPOINT node app.js\n\u2022\tExec form: ENTRYPOINT ",'["node", "app.js"]'),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-does-docker-entrypoint-work"},"How does docker ENTRYPOINT work?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-entrypoint-example-commands"},"Docker entrypoint example commands")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#difference-between-entrypoint-and-cmd"},"Difference between ENTRYPOINT and CMD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#when-to-use-docker-entrypoint-vs-cmd"},"When to use docker ENTRYPOINT vs CMD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-to-use-a-script-as-entrypoint"},"How to use a script as ENTRYPOINT"))),(0,o.kt)("h2",{id:"how-does-docker-entrypoint-work"},"How does docker ENTRYPOINT work?"),(0,o.kt)("p",null,"Both forms of Docker entrypoint work differently when you specify any command at run time. The major difference between the two is whether the specified command is invoked inside a shell or not. Let's discuss both in detail:"),(0,o.kt)("p",null,"\u2022\tWhen you specify the command line arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command through ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," form, these arguments are appended to the end of all elements of the ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," form, so the specified commands will run after the executables mentioned in entrypoint. For example, if you pass the '-d' argument to the 'docker run' command, the Docker will consider these arguments as the arguments of entrypoint and will execute them in the background. By doing this, you can turn your container into an executable. You can even add additional arguments to the entrypoint to convert a complex command line tool into a single argument docker container. The ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," form just runs the binary you provide with the arguments you include but without any features of the shell parsing. "),(0,o.kt)("p",null,"\u2022\tThe ",(0,o.kt)("inlineCode",{parentName:"p"},"shell")," form will execute the shell parameters as parameters to ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh \u2013c"),". That allows you to expand variables, piping output, subcommands, chaining commands together, and other shell features. You cannot use ",(0,o.kt)("inlineCode",{parentName:"p"},"shell")," form to specify any command or the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command-line arguments while starting the container because the ENTRYPOINT command runs as a subcommand of ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/sh \u2013c"),". The executable has a different process ID than the container's 'PID 1'. If we pass any Unix signals like SIGTERM from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker stop")," command, the executable will receive it."),(0,o.kt)("p",null,"You can override the entrypoint instruction when initiating the container using the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2013entrypoint")," flag. Note that if you have mentioned multiple ENTRYPOINT instructions in the Dockerfile, then the last entrypoint will be executed. The recommended forms to use are:"),(0,o.kt)("p",null,"\u2022\tENTRYPOINT: exec form\n\u2022\tRUN: shell form\n\u2022\tCMD: exec form"),(0,o.kt)("hr",null),(0,o.kt)(m,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"docker-entrypoint-example-commands"},"Docker entrypoint example commands"),(0,o.kt)("p",null,'The following example shows an entrypoint instruction that launches the benchmarking tool to evaluate the Google website. Note that the website URL of "Google.com" is hardcoded inside the dockerfile. We will also show an example where the URL will be passed from the ',(0,o.kt)("inlineCode",{parentName:"p"},"Docker run")," command as an argument. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nENTRYPOINT ["ab" , "http://google.com/" ]\n')),(0,o.kt)("p",null,'The next step is to build the image from this docker file. Assume the name of the above docker file is "Dockerfile". The image name can be specified with "-t" parameter. In this example, the image name provided is "testentrypoint". The parameter "directoryName" is the folder having the default Dockerfile. '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build  <directoryName>  \u2013t testentrypoint\n")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/image1.png",alt:"docker entrypoint"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"During building the container image, the docker daemon will look for the entrypoint instruction and will specify it as a default program that will always run whether the command line input is added or not upon container start.\nNow that the image has been created, the next step is to run the container. Just mention the image name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Docker run testentrypoint\n")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/image2.png",alt:"docker entrypoint"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can see the benchmarking tool \u201cAb\u201d executing upon container start. "),(0,o.kt)("h2",{id:"difference-between-entrypoint-and-cmd"},"Difference between ENTRYPOINT and CMD"),(0,o.kt)("p",null,"Before we discuss the differences, let's look at some of the similarities between these two:"),(0,o.kt)("p",null,"\u2022\tBoth the commands are executed during ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),".\n\u2022\tBoth CMD and ENTRYPOINT instructions define the commands which will be executed upon running a container\n\u2022\tYou can override both commands by passing an argument during ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),".\n\u2022\tIf multiple declarations are made, only the last CMD and ENTRYPOINT will be valid."),(0,o.kt)("p",null,"Both commands are different in the following aspects:"),(0,o.kt)("p",null,"\u2022\tCMD command is ignored by Docker daemon if you specify parameters within the docker run command. ENTRYPOINT, on the other hand, is not ignored; instead, it is appended as command line parameters by considering those as arguments of the command.\n\u2022\tENTRYPOINT specifies the executable to be invoked when the container is started. Whereas CMD specifies the arguments that are passed to the ENTRYPOINT (for arguments). "),(0,o.kt)("p",null,"Here is a quick summary table that clarifies the behavior of using CMD and ENTRYPOINT:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/image3.png",alt:"docker entrypoint"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Let's extend the above entrypoint example to CMD. The below example will work the same way as the above example of entrypoint, however, this time using CMD."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nCMD ["ab"] ["http://google.com/"]\n')),(0,o.kt)("p",null,"However, if you run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run testentrypoint ab http://bing.com/ ")," then the whole CMD command inside the dockerfile will be ignored, and the command arguments passed through the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command will be given preference. That is not the case with entrypoint instruction. Whatever you provide through entrypoint actually appends to the existing entrypoint instruction in the dockerfile. Let's look at the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nENTRYPOINT ["ab"]\n')),(0,o.kt)("p",null,"Now you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run testentrypoint http://bing.com/ ")," to achieve the same results because the arguments to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," will be appended to the instruction present in dockerfile and will not be overridden. "),(0,o.kt)("p",null,"We can combine both CMD and entrypoint in the same image too. Look at the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nENTRYPOINT ["ab"]\nCMD ["http://bing.com"]\n')),(0,o.kt)("p",null,"Note that when ENTRYPOINT and CMD are both used in the same Dockerfile, everything specified in the CMD will be appended to the ENTRYPOINT as an argument."),(0,o.kt)("h2",{id:"when-to-use-docker-entrypoint-vs-cmd"},"When to use docker ENTRYPOINT vs CMD"),(0,o.kt)("p",null,"ENTRYPOINT instructions can be used for both single-purpose and multi-mode docker images where you want a specific command to run upon the container start. You can also use it to build wrapper container images that encapsulate legacy programs for containerization, ensuring that the program will always run. "),(0,o.kt)("p",null,"The optimal use case for CMD instruction is to specify default programs that should run if you do not provide any input arguments in the command line."),(0,o.kt)("p",null,"To conclude:\n\u2022\tUse ENTRYPOINT instructions when creating an executable Docker image with commands that must always be executed.\n\u2022\tUse CMD instructions for an additional set of arguments that will serve as default instructions in case there is an explicit command line argument provided when the container runs."),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"how-to-use-a-script-as-entrypoint"},"How to use a script as ENTRYPOINT"),(0,o.kt)("p",null,"Using a custom shell script inside the docker container is another use case for entrypoint. Here are the steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a script file e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"script.sh")," and put it in the same folder as the dockerfile"),(0,o.kt)("li",{parentName:"ol"},"Create the dockerfile as below. This will copy the script to the container and will run it as part of the ENTRYPOINT using the arguments from CMD. Assume the script expects to receive two input parameters upon its execution. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\nyum -y install httpd && \\\nyum clean all\nCOPY ./script.sh /\nRUN chmod +x /script.sh\nENTRYPOINT ["/script.sh"]\nCMD ["param1", "param2"]\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the docker file ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build -t <imageName>"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now run the container passing the parameters:\na.\t",(0,o.kt)("inlineCode",{parentName:"p"},"docker run --name <containerName> -d <imageName>"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can even pass the CMD arguments through ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command. It will override the arguments present in the Dockerfile. See below example:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --name <containerName> -d <imageName> <param1> <param2>\n")))}u.isMDXComponent=!0}}]);