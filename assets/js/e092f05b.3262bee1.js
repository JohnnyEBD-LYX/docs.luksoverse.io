"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[2561],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={},i="Deposit Theory",s={unversionedId:"community-guides/validator-key-stake/deposit-theory",id:"community-guides/validator-key-stake/deposit-theory",title:"Deposit Theory",description:"There are a few theoratical things that you might have to understand in order to make deposits and put your own stake at risk. Most of these facts will be LUKSO specific.",source:"@site/docs/community-guides/validator-key-stake/01-deposit-theory.md",sourceDirName:"community-guides/validator-key-stake",slug:"/community-guides/validator-key-stake/deposit-theory",permalink:"/docs/community-guides/validator-key-stake/deposit-theory",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/community-guides/validator-key-stake/01-deposit-theory.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validator Staking Guide",permalink:"/docs/community-guides/validator-key-stake/"},next:{title:"Validator Deposit Launchpad",permalink:"/docs/community-guides/validator-key-stake/launchpad"}},l={},d=[{value:"The Network Start Process",id:"the-network-start-process",level:3},{value:"Initial Deposits",id:"initial-deposits",level:3},{value:"Genesis and Regular Validators",id:"genesis-and-regular-validators",level:3},{value:"LUKSO Genesis Deposit Contract",id:"lukso-genesis-deposit-contract",level:3},{value:"LUKSO Testnet",id:"lukso-testnet",level:3}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deposit-theory"},"Deposit Theory"),(0,n.kt)("p",null,"There are a few theoratical things that you might have to understand in order to make deposits and put your own stake at risk. Most of these facts will be LUKSO specific."),(0,n.kt)("h3",{id:"the-network-start-process"},"The Network Start Process"),(0,n.kt)("p",null,"LUKSO is started as PoS Blockchain with an initial genesis validator set. These validators deposited on the Ethereum blockchain and locked their LYXe in order to start off with the equal funds within the LUKSO blockchain itself."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More about the Network, Tokenomics, Withdrawals, and Earnings can be found in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/blockchain-clients/network-theory"},"Network Theory")," section of this guide.")),(0,n.kt)("h3",{id:"initial-deposits"},"Initial Deposits"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x42000421dd80D1e90E56E87e6eE18D7770b9F8cC#code"},"Genesis Deposit Contract")," was open for about 3 weeks and was frozen on the 9th of May. The PoS consensus was started with all genesis validators that deposited up to block 17,227,300. There was a 46,523 block delay after the freeze was triggered by the LUKSO team. The genesis deposit contract received 10.336 deposits from 223 unique addresses based on the ",(0,n.kt)("a",{parentName:"p",href:"https://dune.com/hmc/lukso-genesis-validators"},"Dune Analytics Dashboard"),". Each validator had to deposit 32 LYXe."),(0,n.kt)("p",null,"LUKSO mainnet was started on the 23rd May of 2023 using the genesis files created from the deposits on Ethereum. All future deposits will be done as regular validators."),(0,n.kt)("h3",{id:"genesis-and-regular-validators"},"Genesis and Regular Validators"),(0,n.kt)("p",null,"Genesis validator, were part of the genesis block of the LUKSO mainnet and could already stake to get LYX in the first weeks, before the migration of LYXe to LYX was started. They are the core community that started off the blockchain."),(0,n.kt)("p",null,"After the discovery month of about 4 weeks, LUKSO opened up the migration of LYXe to LYX, so everyone can convert the Ethereum representation of the coin to the actual blockchain's coin. Since then, regular validators can deposit on the LUKSO blockchain directly."),(0,n.kt)("h3",{id:"lukso-genesis-deposit-contract"},"LUKSO Genesis Deposit Contract"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Genesis Contract",src:a(9466).Z,width:"1170",height:"661"})),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x42000421dd80D1e90E56E87e6eE18D7770b9F8cC#code"},"LUKSO Genesis Deposit Contract")," had to do calls to the external LYXe ERC20-compatible token instead of doing it on the native chain with primary deposits."),(0,n.kt)("p",null,"Instead of just requiring a smaller amount of coins that can be transferred to the validator key step by step until 32 coins are reached, LUKSO's deposit contract required a fixed amount of 32 LYXe. This was mandatory to prepare the genesis files for the LUKSO mainnet after the contract was frozen. Thus, checks were applied if a public key is registered, preventing duplicate deposits."),(0,n.kt)("p",null,"This freezing involved additional storage and logic but is required to launch with a fixed amount of validators. On top, LUKSO's deposit function stored the votes for the initial coin supply of the mainnet. Every vote can still be fetched on the Ethereum blockchain. Everything had to be publicly verifiable as the LYX supply was set in stone to 42 million LYX when the contract closed."),(0,n.kt)("h3",{id:"lukso-testnet"},"LUKSO Testnet"),(0,n.kt)("p",null,"The testnet exists parallel to the mainnet with all updates and features."),(0,n.kt)("p",null,"Only whitelisted addresses are able to become validators, as it is mainly there to test smart contracts and forks."),(0,n.kt)("p",null,"Many temporary or changing validators could lead to a significant number of unstable validators and slashes in the long run, which might compromise the integrity of the network. Testnet validators are core members and organizations wanting to run and maintain their LUKSO Testnet node in a stable environment over a long period, as they assure healthy uptimes, stability, and quick response times from clients as demand from developers rises."))}u.isMDXComponent=!0},9466:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/genesis-contract-8be93cbb388188920848a265858c9d68.png"}}]);