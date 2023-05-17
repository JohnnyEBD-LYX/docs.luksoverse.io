"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[2577],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(o),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return o?n.createElement(g,a(a({ref:t},m),{},{components:o})):n.createElement(g,a({ref:t},m))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},498:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={},a="Node Monitoring",c={unversionedId:"mainnet/complete-node-guide/monitoring/start-here",id:"mainnet/complete-node-guide/monitoring/start-here",title:"Node Monitoring",description:"This section of the blockchain node guide provides a comprehensive overview of the monitoring process. It features the use of various tools like Node Exporter, JSON Exporter, Blackbox Exporter, Prometheus, Promtool, and Grafana for tasks such as hardware monitoring, web scraping, network checks, real-time monitoring, and data visualization.",source:"@site/docs/mainnet/complete-node-guide/7-monitoring/00-start-here.md",sourceDirName:"mainnet/complete-node-guide/7-monitoring",slug:"/mainnet/complete-node-guide/monitoring/start-here",permalink:"/docs/mainnet/complete-node-guide/monitoring/start-here",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/7-monitoring/00-start-here.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker-setup",permalink:"/docs/mainnet/complete-node-guide/blockchain-clients/docker-setup"},next:{title:"core-tools",permalink:"/docs/mainnet/complete-node-guide/monitoring/core-tools"}},s={},l=[],m={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-monitoring"},"Node Monitoring"),(0,r.kt)("p",null,"This section of the blockchain node guide provides a comprehensive overview of the monitoring process. It features the use of various tools like Node Exporter, JSON Exporter, Blackbox Exporter, Prometheus, Promtool, and Grafana for tasks such as hardware monitoring, web scraping, network checks, real-time monitoring, and data visualization."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/core-tools"},"Core Tools and Open Ports")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Hardware Monitoring: Node Exporter")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/json-exporter"},"Web Scraping: JSON Exporter")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/blackbox-exporter"},"Network Checks: Blackbox Exporter")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/prometheus"},"Prometheus and Promtool Monitoring")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/grafana"},"Using Grafana Dashboards"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Continue with Section 8: ",(0,r.kt)("a",{parentName:"strong",href:"/docs/mainnet/complete-node-guide/8-notifications/"},"Grafana Notifications"))))}p.isMDXComponent=!0}}]);