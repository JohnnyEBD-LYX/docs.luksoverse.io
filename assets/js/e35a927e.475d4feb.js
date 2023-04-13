"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[92],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},c),{},{components:n})):o.createElement(y,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={title:"Troubleshooting",sidebar_position:6},a="Troubleshooting L16 Testnet",s={unversionedId:"L16-archive/troubleshooting",id:"L16-archive/troubleshooting",title:"Troubleshooting",description:"Permission denied",source:"@site/docs/L16-archive/troubleshooting.md",sourceDirName:"L16-archive",slug:"/L16-archive/troubleshooting",permalink:"/docs/L16-archive/troubleshooting",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/L16-archive/troubleshooting.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Troubleshooting",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Backup and recovery",permalink:"/docs/L16-archive/node-backup"},next:{title:"mainnet-info",permalink:"/docs/mainnet/mainnet-info"}},l={},u=[{value:"Permission denied",id:"permission-denied",level:2},{value:"Sync issues",id:"sync-issues",level:2},{value:"Bootnodes",id:"bootnodes",level:2},{value:"Change your node name",id:"change-your-node-name",level:4},{value:"More fixes will be added if necessary.",id:"more-fixes-will-be-added-if-necessary",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting-l16-testnet"},"Troubleshooting L16 Testnet"),(0,r.kt)("h2",{id:"permission-denied"},"Permission denied"),(0,r.kt)("p",null,"If you get an error that the permission is denied use ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," in front of your command."),(0,r.kt)("h2",{id:"sync-issues"},"Sync issues"),(0,r.kt)("p",null,"When your node is not syncing use the following steps. All steps have to be executed in your node directory so first ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," to the right directory."),(0,r.kt)("p",null,"Update the LUKSO CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo curl https://install.l16.lukso.network | sudo bash\n")),(0,r.kt)("p",null,"Update your node files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo lukso network update\n")),(0,r.kt)("p",null,"Restart you node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo lukso network restart\n")),(0,r.kt)("p",null,"Start your validator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo lukso network validator start\n")),(0,r.kt)("p",null,"It will take some time before you are fully synced and showing up on the stats pages. You can see the syncing progress in your ",(0,r.kt)("a",{parentName:"p",href:"/docs/L16-archive/logs-stats-monitoring"},"logs"),"."),(0,r.kt)("h2",{id:"bootnodes"},"Bootnodes"),(0,r.kt)("p",null,"You can update Bootnodes with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network update\n")),(0,r.kt)("p",null,"You need to restart your node to make the changes effective"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lukso network restart\n")),(0,r.kt)("h4",{id:"change-your-node-name"},"Change your node name"),(0,r.kt)("p",null,"If you want to change your node name you can do this in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"node_config.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano node_config.yaml\n")),(0,r.kt)("p",null,"Change your node name close it with ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl+X")," and save it."),(0,r.kt)("h2",{id:"more-fixes-will-be-added-if-necessary"},"More fixes will be added if necessary."))}d.isMDXComponent=!0}}]);