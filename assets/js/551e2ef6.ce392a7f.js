"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[1303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"mainnet/complete-node-guide/router-config/address-check",id:"mainnet/complete-node-guide/router-config/address-check",title:"address-check",description:"4.1 Node Address Checkups",source:"@site/docs/mainnet/complete-node-guide/4-router-config/01-address-check.md",sourceDirName:"mainnet/complete-node-guide/4-router-config",slug:"/mainnet/complete-node-guide/router-config/address-check",permalink:"/docs/mainnet/complete-node-guide/router-config/address-check",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/4-router-config/01-address-check.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Router Configuration",permalink:"/docs/mainnet/complete-node-guide/router-config/start-here"},next:{title:"static-address",permalink:"/docs/mainnet/complete-node-guide/router-config/static-address"}},d={},c=[{value:"4.1 Node Address Checkups",id:"41-node-address-checkups",level:2},{value:"Internet Protocoll Addresses",id:"internet-protocoll-addresses",level:4},{value:"4.1.1 Resolve the Node&#39;s IP Address",id:"411-resolve-the-nodes-ip-address",level:3},{value:"4.1.2 Resolve the Node&#39;s Hardware Address",id:"412-resolve-the-nodes-hardware-address",level:3},{value:"Media Access Controll",id:"media-access-controll",level:4}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"41-node-address-checkups"},"4.1 Node Address Checkups"),(0,o.kt)("p",null,"Since many routers use different software, we first make sure that we are reading the node's connection data correctly before making any substantial changes to the router."),(0,o.kt)("h4",{id:"internet-protocoll-addresses"},"Internet Protocoll Addresses"),(0,o.kt)("p",null,"When devices connect to a home network, they are usually assigned dynamic Internet Protocol addresses by the router through a Dynamic Host Configuration Protocol. It's a network protocol that automates the process of assigning IP addresses and other network configuration information to devices connected to a network. DHCP eliminates the need for manual configuration of IP addresses, making it easier to connect devices to a network and manage them efficiently."),(0,o.kt)("p",null,"When a device joins a network, it sends a request to the router, asking for an address and other network settings. The DHCP software on the router then assigns an available IP address from its pool to the device, along with the required network configuration. This IP address is leased to the device for a specific duration, after which the device needs to renew the lease or obtain a new IP address. However, this also means that devices can change their IP addresses over time, making it difficult to consistently access your node through SSH."),(0,o.kt)("h3",{id:"411-resolve-the-nodes-ip-address"},"4.1.1 Resolve the Node's IP Address"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ip")," command is a versatile and powerful networking tool in Linux, used to manage and display information about network interfaces, IP addresses, and other network-related configurations. We can use the command to display the default route information in the routing table of a Linux system. The default route, also known as the gateway, is the network path used by the system to send packets to destinations that are not on the local network. In simpler terms, it is the route that the system takes when it needs to send data to an IP address outside its local network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ip route show default\n")),(0,o.kt)("p",null,"The output will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"default via <GATEWAY_IP_ADDRESS> dev eno1 proto dhcp src <NODE_IP_ADDRESS> metric <ROUTING_WEIGHT>\n")),(0,o.kt)("p",null,"Alternatively you can also send an request to a commonly used and stable server IP, for instance Google. You will get back an response with your source IP address that you can filter using the text-processing tool ",(0,o.kt)("inlineCode",{parentName:"p"},"awk"),", used for pattern scanning and processing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ip route get 8.8.8.8 | awk '{print $7}'\n")),(0,o.kt)("h3",{id:"412-resolve-the-nodes-hardware-address"},"4.1.2 Resolve the Node's Hardware Address"),(0,o.kt)("h4",{id:"media-access-controll"},"Media Access Controll"),(0,o.kt)("p",null,"A MAC address is a unique identifier assigned to network interfaces for communication on a physical network segment. It is also commonly referred to as a hardware or physical address. MAC addresses are used at the data link layer, enabling network devices such as switches and routers to uniquely identify and manage devices on a local network."),(0,o.kt)("p",null,"Each MAC address is a 48-bit number, usually represented in a human-readable hexadecimal format, including a specific manufacturer registration code and individual product lineup iterations by the manufacturer to ensure that each network interface produced by the company has a unique MAC address."),(0,o.kt)("p",null,"We can use the previous networking tool to retrieve information about the MAC addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ip link show\n")),(0,o.kt)("p",null,"The output will list all the network interfaces on the system. Look into the interface that is used to broadcast and send information to the outside world using an Ethernet connection. The entry you're looking for looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"<NETWORK_INFERFACE_NAME>: <BROADCAST,MULTICAST,UP,LOWER_UP> ...\n    link/ether <MAC_ADDRESS> brd <BROADCAST_ADDRESS>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write down or remember both names so you can check them later on and identify your device for router settings.")))}u.isMDXComponent=!0}}]);