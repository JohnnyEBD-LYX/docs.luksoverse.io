"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[6504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r=void 0,s={unversionedId:"mainnet/complete-node-guide/system-setup/bruteforce-shield",id:"mainnet/complete-node-guide/system-setup/bruteforce-shield",title:"bruteforce-shield",description:"3.7 Set Bruteforce Protection",source:"@site/docs/mainnet/complete-node-guide/3-system-setup/07-bruteforce-shield.md",sourceDirName:"mainnet/complete-node-guide/3-system-setup",slug:"/mainnet/complete-node-guide/system-setup/bruteforce-shield",permalink:"/docs/mainnet/complete-node-guide/system-setup/bruteforce-shield",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/3-system-setup/07-bruteforce-shield.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"firewall-config",permalink:"/docs/mainnet/complete-node-guide/system-setup/firewall-config"},next:{title:"Router Configuration",permalink:"/docs/mainnet/complete-node-guide/router-config/start-here"}},l={},c=[{value:"3.7 Set Bruteforce Protection",id:"37-set-bruteforce-protection",level:2},{value:"3.7.1 Install Fail2Ban",id:"371-install-fail2ban",level:3},{value:"3.7.2 Configure Protection Rules",id:"372-configure-protection-rules",level:3},{value:"3.7.3 Start the Fail2Ban Service",id:"373-start-the-fail2ban-service",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"37-set-bruteforce-protection"},"3.7 Set Bruteforce Protection"),(0,i.kt)("p",null,"Brute force protection is a critical aspect of securing blockchain nodes and servers. As these systems often manage valuable assets and sensitive information, they are prime targets for attackers seeking unauthorized access. Brute force attacks involve systematically attempting various combinations of ports, usernames, and passwords to gain access to a target system. To mitigate such attacks, it is essential to implement robust security measures on blockchain nodes and servers."),(0,i.kt)("p",null,"While we will protect our system with key authentication later on, it is smart limiting login attempts and pintests. One widely used security tool is called Fail2Ban. It is a security tool that helps protect your system against brute-force attacks and other types of unauthorized access attempts. It monitors log files for patterns that indicate malicious activities, such as repeated failed login attempts."),(0,i.kt)("p",null,"When such activities are detected, Fail2Ban automatically updates the firewall rules to block the offending IP addresses for a specified duration."),(0,i.kt)("h3",{id:"371-install-fail2ban"},"3.7.1 Install Fail2Ban"),(0,i.kt)("p",null,"First we need to get the service installed using APT:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install fail2ban\n")),(0,i.kt)("p",null,"After the installation was successful, we can continue it's configuration."),(0,i.kt)("h3",{id:"372-configure-protection-rules"},"3.7.2 Configure Protection Rules"),(0,i.kt)("p",null,"Fail2Ban comes with its own preset of configurations that are saved within the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/jail.conf")," file. However, the tool comes with its own behavior if you want to apply custom rules."),(0,i.kt)("p",null,"Within Fail2Ban, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/jail.local")," file is used to define custom configurations and rules for it. It allows you to specify settings for individual services, determine how many failed login attempts should trigger a ban, set the duration of the ban, and define other security measures."),(0,i.kt)("p",null,"By creating and editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"jail.local")," file, you can override the default settings found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/fail2ban/jail.conf")," without modifying the original configuration file."),(0,i.kt)("p",null,"Using a separate file for custom configurations is a recommended practice because it ensures that your changes are preserved when Fail2Ban is updated."),(0,i.kt)("p",null,"For the blockchain node, its recommended to set properties for the SSH deamon process, as it is the only way to access our node. We can do so by defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"[sshd]")," tag and set ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled=true"),". These are the recommended settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"port"),": This specifies the port number on which the SSH daemon is listening. Set your opened port number you've configured for SSH on the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"filter"),": This option sets the filter to be used for parsing log files and detecting failed login attempts. In our case, the filter should be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"sshd"),", which is a predefined filter for the SSH daemon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"logpath"),": This sets the path to the log file for monitoring for failed login attempts. The file typically contains information about authentication events, including failed SSH login attempts. I will set its path to ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/auth.log")," as it is the standard location for log files on Unix-based systems. It is designed to store log files generated by various system processes, services, and applications. Placing it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/")," directory follows the standard convention and allows system administrators to easily locate and manage log files related to different system components in a centralized location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxretry"),": This option sets the maximum number of failed login attempts allowed within the specified findtime period before an IP address gets banned. My personal preference would be ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," attemps, as its a common number also used for bankcard payments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"findtime"),": This option sets the time window in seconds, during which maxretry failed login attempts can occur before an IP address gets banned. In my case, I set to ",(0,i.kt)("inlineCode",{parentName:"li"},"300 seconds"),", e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"5 minutes")," but you could also reduce the number."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bantime"),": This option sets the duration in seconds for which an IP address will be banned after exceeding the allowed number of failed login attempts within the findtime period. In my case, it's set to ",(0,i.kt)("inlineCode",{parentName:"li"},"28,800 seconds"),", e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"8 hours")," before the IP address is allowed to try again."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"backend"),": This option sets the backend used to monitor the specified log file. When set to ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),", the service will automatically select the most appropriate backend based on your system's configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ignoreip"),": This option allows you to specify a list of IP addresses or address ranges that should not be banned, even if they exceed the maximum number of allowed failed login attempts. You can add the local IP range ",(0,i.kt)("inlineCode",{parentName:"li"},"127.0.0.1/8")," to prevent accidentally banning your own local connections or set single addresses.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also add custom IP addresses to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreip")," property, e.g., allow connections from your VPN service's address range. But keep in mind that people with the same VPN service could still bypass the restrictions.")),(0,i.kt)("p",null,"Open the configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vim /etc/fail2ban/jail.local\n")),(0,i.kt)("p",null,"Input the properties into the configuration snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[sshd]\nenabled=true\nport=<desired-port-number>\nfilter=sshd\nlogpath=/var/log/auth.log\nmaxretry=3\nfindtime=300\nbantime=28800\nbackend=auto\nignoreip=127.0.0.1/8\n")),(0,i.kt)("p",null,"Please make sure to exchange ",(0,i.kt)("inlineCode",{parentName:"p"},"<desired-port-number>")," with the port number you opened for SSH. You may want to change certain settings to personalize your setup."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that Fail2Ban functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.")),(0,i.kt)("h3",{id:"373-start-the-fail2ban-service"},"3.7.3 Start the Fail2Ban Service"),(0,i.kt)("p",null,"First we need to reload the system manager configuration. It is used when making changes to service configuration files or create new service files, ensuring that systemd is aware of the changes like before."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,i.kt)("p",null,"Afterwards we can start the Fail2Ban service using the system control command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start fail2ban\n")),(0,i.kt)("p",null,"To enable the Fail2Ban service to start automatically when the system boots we can use the system control to creates a symbolic link as we did before."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable fail2ban\n")),(0,i.kt)("p",null,"To check if the Fail2Ban service is running and configured properly, we can fetch the current status from the system control. It will display whether it is active, enabled, or disabled, and show any recent log entries."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status fail2ban\n")),(0,i.kt)("p",null,"The output should look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u25cf fail2ban.service - Fail2Ban Service\n     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor preset: enabled)\n     Active: active (running) since [DATE]; [TIME] ago\n       Docs: man:fail2ban(1)\n   Main PID: 5875 (fail2ban-server)\n      Tasks: 5 (limit: 38043)\n     Memory: [USED_MEMORY]\n        CPU: [EXECUTION_TIME]\n     CGroup: /system.slice/fail2ban.service\n             \u2514\u25005875 /usr/bin/python3 /usr/bin/fail2ban-server -xf start\n\n[DATE] [USER] systemd[PID]: Started Fail2Ban Service.\n[DATE] [USER] fail2ban-server[PID]: Server ready\n")),(0,i.kt)("p",null,"If everything was alright, we can start configuring our network and router settings for the node."))}d.isMDXComponent=!0}}]);