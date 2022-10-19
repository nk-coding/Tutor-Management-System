"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8],{4852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9243:function(e,t,n){var a,r=n(9231),o=["title","titleId"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.Z=function(e){var t=e.title,n=e.titleId,s=l(e,o);return r.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":n},s),t?r.createElement("title",{id:n},t):null,a||(a=r.createElement("path",{d:"M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z"})))}},5946:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(9841),r=n(9231),o="wrapper_W4Tl",i="wrapper-small_uos1";var l=function(e){var t=e.icon,n=e.small;return r.createElement("span",{className:(0,a.Z)(o,n&&i)},r.createElement(t,null))}},9082:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(9841),r=n(9231),o="roleContainer_8hVM",i="roleLabel_fz5b",l="role_FQxn";var s=function(e){var t=e.roles,n=(0,r.useMemo)((function(){return t.filter((function(e){return!!e})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).sort()}),[t]);return r.createElement("div",{className:o},r.createElement("span",{className:i},"Roles:"),n.map((function(e){return r.createElement("span",{key:e,className:(0,a.Z)("badge badge--primary",l)},e)})))}},3559:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return b},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return y}});var a,r=n(4011),o=n(4126),i=n(9231),l=n(4852),s=n(9082),c=n(5946),p=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=function(e){var t=e.title,n=e.titleId,r=m(e,p);return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,a||(a=i.createElement("path",{d:"M7 10l5 5 5-5H7z"})))},h=n(9243),f=["components"],g={id:"sheet_gradings",title:"Gradings for Sheets",sidebar_label:"Sheet Gradings"},v=void 0,k={unversionedId:"handbook/sheet_gradings",id:"handbook/sheet_gradings",isDocsHomePage:!1,title:"Gradings for Sheets",description:"Overview",source:"@site/docs/handbook/sheet_grading.md",sourceDirName:"handbook",slug:"/handbook/sheet_gradings",permalink:"/Tutor-Management-System/docs/handbook/sheet_gradings",editUrl:"https://github.com/Dudrie/Tutor-Management-System/edit/main/docs/docs/handbook/sheet_grading.md",version:"current",frontMatter:{id:"sheet_gradings",title:"Gradings for Sheets",sidebar_label:"Sheet Gradings"},sidebar:"handbook",previous:{title:"Attendance",permalink:"/Tutor-Management-System/docs/handbook/attendances"},next:{title:"Scheinexam Gradings",permalink:"/Tutor-Management-System/docs/handbook/scheinexam_gradings"}},y=[{value:"Overview",id:"overview",children:[]},{value:"Enter Points",id:"enter-points",children:[]}],N={toc:y};function b(e){var t=e.components,a=(0,o.Z)(e,f);return(0,l.kt)("wrapper",(0,r.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{roles:["tutor","corrector"],mdxType:"Roles"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Overview page for sheet gradings",src:n(2834).Z})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Sheet Selection"),": Select the sheet you want to display and/or edit the gradings of.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Team Card"),": Displays the information about the grading for the team. If the students have different gradings a special note is being displayed.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Enter Points"),": Click the button to enter points for the complete team. If you want to enter points for a single student of that team click the small arrow icon ",(0,l.kt)(c.Z,{icon:u,mdxType:"IconInText"}),' on the right and select "Single for students".'),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'If students already have individual gradings for the selected sheet the "Single for students" option is pre-selected and cannot be changed.')))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Card Menu"),": To access more options for a team click on the menu icon ",(0,l.kt)(c.Z,{icon:h.Z,mdxType:"IconInText"})," in the upper right of a card."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"PDF Preview"),": A dialog opens up which shows a preview of the content of the PDF(s). If students have different gradings the previews are seperated by name.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Dowload PDF(s)"),": Download the PDF(s) which belong to the team. If multiple PDFs need to be generated (bc students have different gradings) they are bundled in a ZIP file.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Create PDFs"),": Create PDFs for all gradings of this sheet. PDFs are created for each team (if several students of that team have the same grading) and for each student with an individual grading. All created PDFs are bundled in a ZIP file."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The names of the PDF files are unified throughout the app. The administration can change the name of the files through their settings menu."))))),(0,l.kt)("h2",{id:"enter-points"},"Enter Points"),(0,l.kt)("p",null,"Below you can find an explanation of the page for entering the points of a complete team or for an individual student."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Form for entering sheet gradings",src:n(1246).Z})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Select Exercise"),": Select the exercise of the sheet you want to enter the grading for. You can change the selection without the need to save your changes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Select Team"),": Select the team you want to enter the grading for."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you change the team you have to save your changes. You will be prompted to do so.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Points of Exercise"),": Specify the points the students get for this exercise. If the exercise has subexercises you must enter the points for each subexercise.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Comment for Exercise"),": Enter a comment for the exercise. The comment fully supports GitHub flavored markdown.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Preview"),': Switch the textfield into "Preview" mode (or exit it if it is enabled) to view the rendered markdown.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Reset"),": Reset the form of the team ",(0,l.kt)("em",{parentName:"p"},"for the whole sheet")," to the last saved state.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Save"),": Save the changes made for the currently selected team. Furthermore, you can save the changes by"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Hitting the ",(0,l.kt)("inlineCode",{parentName:"li"},"Enter")," key on your keyboard while focusing a textfield for points."),(0,l.kt)("li",{parentName:"ul"},"Hitting ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + Enter")," (or your Mac equivalent) while focusing the textfield for comments."),(0,l.kt)("li",{parentName:"ul"},"Hitting ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl + S")," (or your Mac equivalent) at any time while the page is opened up."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Back"),": Go back to the overview page."))))}b.isMDXComponent=!0},9841:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1246:function(e,t,n){t.Z=n.p+"assets/images/sheet_grading_form-e8f8f4fcb4faf1e53c57a888c0192726.png"},2834:function(e,t,n){t.Z=n.p+"assets/images/sheet_grading_overview-5b6a9d91d472d2514fd07dd8df234c55.png"}}]);