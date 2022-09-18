"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const s={},a="OpenSSH Server Setup",i={unversionedId:"Community Guides/ssh",id:"Community Guides/ssh",title:"OpenSSH Server Setup",description:"This guide is meant to be followed after a successful installation of a WireGuard VPN tunnel, by which, for SSH purposes, the only port exposed/forwarded in your router should be IPv4 51820/udp. This way you'll also have access outside of your local network by activating WireGuard in your client's device before attempting to SSH into your remote server.",source:"@site/docs/Community Guides/ssh.md",sourceDirName:"Community Guides",slug:"/Community Guides/ssh",permalink:"/docs/Community Guides/ssh",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/Community Guides/ssh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 5 - Monitoring",permalink:"/docs/the-guide/monitoring"},next:{title:"Remote login through a WireGuard tunnel using PiVPN",permalink:"/docs/Community Guides/vpn"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling SSH on Ubuntu",id:"enabling-ssh-on-ubuntu",level:2},{value:"Connecting to the SSH Server",id:"connecting-to-the-ssh-server",level:2},{value:"Setup SSH Keys based Login",id:"setup-ssh-keys-based-login",level:2},{value:"Generate a new SSH key pair",id:"generate-a-new-ssh-key-pair",level:3},{value:"Copy the public key",id:"copy-the-public-key",level:3},{value:"Login to your server using SSH keys",id:"login-to-your-server-using-ssh-keys",level:3},{value:"\ud83d\udca1Termius as client",id:"termius-as-client",level:2},{value:"Disabling SSH Password Authentication",id:"disabling-ssh-password-authentication",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openssh-server-setup"},"OpenSSH Server Setup"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/gVb9yHS.png",alt:null})),(0,r.kt)("p",null,"\u26a0\ufe0f This guide is meant to be followed after a successful installation of a ",(0,r.kt)("a",{parentName:"p",href:"https://luksoverse.io/2022/07/secure-remote-login/"},"WireGuard VPN tunnel"),", by which, ",(0,r.kt)("strong",{parentName:"p"},"for SSH purposes, the only port exposed/forwarded in your router should be IPv4 51820/udp.")," This way you'll also have access outside of your local network by activating WireGuard in your client's device before attempting to SSH into your remote server."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OpenSSH")," is a freely available version of the Secure Shell (SSH) protocol family of tools for remotely controlling or transferring data between networked devices. Traditional tools used to accomplish these functions, such as telnet or rcp, are insecure and transmit the user\u2019s password in cleartext when used. OpenSSH provides a server daemon and client tools to facilitate secure, encrypted remote control and file transfer operations, effectively replacing the legacy tools."),(0,r.kt)("p",null,"The OpenSSH server component, ",(0,r.kt)("strong",{parentName:"p"},"sshd"),", listens continuously for client connections from any of the client tools. When a connection request occurs, sshd sets up the correct connection depending on the type of client tool connecting. For example, if the remote device is connecting with the ssh client application, the OpenSSH server sets up a remote control session after authentication. If a remote user connects to an OpenSSH server with scp, the OpenSSH server daemon initiates a secure copy of files between the server and client after authentication. OpenSSH can use many authentication methods, including plain password, public key, and Kerberos tickets."),(0,r.kt)("p",null,"This tutorial explains how to install and enable OpenSSH on an Ubuntu machine. Enabling SSH will allow you to connect to your system remotely and perform administrative tasks. You\u2019ll also be able to securely transfer files via scp and sftp."),(0,r.kt)("h2",{id:"enabling-ssh-on-ubuntu"},"Enabling SSH on Ubuntu"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/foR0XbR.jpg",alt:null})),(0,r.kt)("p",null,"By default, when Ubuntu is first installed, remote access via SSH is not allowed. Enabling SSH on Ubuntu is fairly straightforward."),(0,r.kt)("p",null,"Perform the following steps as root or user with sudo privileges to install and enable SSH on your Ubuntu system. Open the terminal with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Ctrl+Alt+T"))," and install the openssh-server package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update && sudo apt upgrade -y\nsudo apt install openssh-server\n")),(0,r.kt)("p",null,"When prompted, enter your password and press ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Enter"))," to continue with the installation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/iQgUcFj.png",alt:null})),(0,r.kt)("p",null,"Once the installation is complete, the SSH service will start automatically. You can verify that SSH is running by typing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl status ssh\n")),(0,r.kt)("p",null,"The output should tell you that the service is running and enabled to start on system boot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u25cf ssh.service - OpenBSD Secure Shell server`\n    `Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)`\n    `Active: active (running) since Mon 2022-08-15 12:34:00 CEST; 9h ago\n")),(0,r.kt)("p",null,"Press ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Q"))," to get back to the command line prompt."),(0,r.kt)("p",null,"If not running enable the SSH server and start it by typing the following systemctl commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl enable ssh\nsudo systemctl start ssh\n")),(0,r.kt)("p",null,"Ubuntu ships with a firewall configuration tool called UFW. Make sure the firewall is enabled on your system and open the SSH port with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ufw allow ssh\nsudo ufw enable\nsudo ufw status\n")),(0,r.kt)("p",null,"\ud83c\udf89 That\u2019s it! You can now connect to your Ubuntu server via SSH from any remote client."),(0,r.kt)("h2",{id:"connecting-to-the-ssh-server"},"Connecting to the SSH Server"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/j45KizC.jpg",alt:null})),(0,r.kt)("p",null,"\u2139\ufe0f In this section you'll be setting up a client on a separate Ubuntu machine inside your local network. Make sure to change ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"username"))," with the actual user name and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ip_address"))," with the IP Address of the Ubuntu machine where you installed the OpenSSH server. ",(0,r.kt)("strong",{parentName:"p"},"If you won't be using a Linux based device feel free to skip ahead to chapter ",(0,r.kt)("em",{parentName:"strong"},"Termius as client"),".")),(0,r.kt)("p",null,"To connect to your Ubuntu server over LAN invoke the SSH command followed by the username and the IP address in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh username@ip_address\n")),(0,r.kt)("p",null,"If you don\u2019t know your IP address you can easily find it by using the ip command on your server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ip a\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Cp8T0CQ.png",alt:null})),(0,r.kt)("p",null,"As you can see from the ethernet output, the system IP address is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"10.0.2.15"))),(0,r.kt)("p",null,"Once you\u2019ve found the IP address, log into your remote server by running the following SSH command on your client machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh username@10.0.2.15\n")),(0,r.kt)("p",null,"When you connect the first time, you will see a message like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The authenticity of host '10.0.2.15 (10.0.2.15)' can't be established.\nECDSA key fingerprint is SHA256:Vybt22mVXuNuB5unE++yowF7lgA/9/2bLSiO3qmYWBY.\nAre you sure you want to continue connecting (yes/no)?\n")),(0,r.kt)("p",null,"Type yes and you\u2019ll be prompted to enter your password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Warning: Permanently added '10.0.2.15' (ECDSA) to the list of known hosts.\nusername@10.0.2.15's password:\n")),(0,r.kt)("p",null,"Once you enter the password, you will be greeted with the default Ubuntu message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Welcome to Ubuntu 22.04.1 LTS (GNU/Linux 5.15.0-46-generic x86_64)\n\n Documentation:  https://help.ubuntu.com\n Management:     https://landscape.canonical.com\n Support:        https://ubuntu.com/advantage\n ...\n")),(0,r.kt)("p",null,"\ud83c\udf89 You are now logged into your Ubuntu machine."),(0,r.kt)("h2",{id:"setup-ssh-keys-based-login"},"Setup SSH Keys based Login"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/c8Nm6Wn.jpg",alt:null})),(0,r.kt)("p",null,"To set up a passwordless SSH login in Ubuntu all you need to do is to generate a public authentication key and append it to the remote hosts ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"~/.ssh/authorized_keys"))," file."),(0,r.kt)("p",null,"The following steps will describe the process for configuring passwordless SSH login:"),(0,r.kt)("h3",{id:"generate-a-new-ssh-key-pair"},"Generate a new SSH key pair"),(0,r.kt)("p",null,"The following command will generate a new 4096 bits SSH key pair with your email address as a comment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ssh-keygen -t rsa -b 4096 -C "your_email@domain.com"\n')),(0,r.kt)("p",null,"Press ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Enter"))," to accept the default file location and file name:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Enter file in which to save the key (/home/yourusername/.ssh/id_rsa):"))),(0,r.kt)("p",null,"Next, the ssh-keygen tool will ask you to type a secure passphrase. Whether you want to use passphrase it\u2019s up to you, if you choose to use passphrase you will get an extra layer of security. In most cases, developers and system administrators use SSH without a passphrase because they are useful for fully automated processes. If you don\u2019t want to use a passphrase just press ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Enter")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter passphrase (empty for no passphrase):\n")),(0,r.kt)("p",null,"The whole interaction looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/NVXE0YP.png",alt:null})),(0,r.kt)("p",null,"To be sure that the SSH keys are generated you can list your new private and public keys with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls ~/.ssh/id_*\n")),(0,r.kt)("p",null,"Expected output should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/home/yourusername/.ssh/id_rsa /home/yourusername/.ssh/id_rsa.pub\n")),(0,r.kt)("h3",{id:"copy-the-public-key"},"Copy the public key"),(0,r.kt)("p",null,"Now that you have generated an SSH key pair, in order to be able to login to your server without a password you need to copy the public key to the server you want to manage."),(0,r.kt)("p",null,"The easiest way to copy your public key to your server is to use a command called ssh-copy-id. On your local client terminal type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh-copy-id remote_username@server_ip_address\n")),(0,r.kt)("p",null,"You will be prompted to enter the remote_username password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"remote_username@server_ip_address's password:\n")),(0,r.kt)("p",null,"Once the user is authenticated, the public key will be appended to the remote user authorized_keys file and connection will be closed."),(0,r.kt)("p",null,"If by some reason the ssh-copy-id utility is not available on your local computer you can use the following command to copy the public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat ~/.ssh/id_rsa.pub | ssh remote_username@server_ip_address "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"\n')),(0,r.kt)("h3",{id:"login-to-your-server-using-ssh-keys"},"Login to your server using SSH keys"),(0,r.kt)("p",null,"After completing the steps above you should be able log into the remote server without being prompted for a password. To test it just try to log into your server via SSH:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh remote_username@server_ip_address\n")),(0,r.kt)("p",null,"\ud83c\udf89 If everything went well, you'll be logged in immediately."),(0,r.kt)("p",null,"\ud83d\udca1 One can also create shortcuts for SSH client login by creating a config file as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vim ~/.ssh/config\n")),(0,r.kt)("p",null,"Type in the following and replace host, user, ip & port:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Host replace-host\n    User replace-user\n    HostName replace-ip\n    Port replace-port\n")),(0,r.kt)("p",null,"As an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Host: lukso\n    User: johnnyebd\n    HostName: 10.0.2.15\n    Port: 22\n")),(0,r.kt)("p",null,"Save the file ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CapsLock+Esc+ZZ"))," and attempt connection to verify the configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh lukso\n")),(0,r.kt)("h2",{id:"termius-as-client"},"\ud83d\udca1Termius as client"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/xSBeFjH.png",alt:null})),(0,r.kt)("p",null,"If you're not using an Ubuntu machine as the client, we emphatically recommend using Termius, specifically if you're on an ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/termius-ssh-shell-console-terminal/id549039908"},"iOS")," or ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.server.auditor.ssh.client&hl=en"},"Android")," phone as terminal."),(0,r.kt)("p",null,"\u2139\ufe0f There's also ",(0,r.kt)("a",{parentName:"p",href:"https://termi.us/win"},"Windows")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.termius.com/download/linux/Termius.deb"},"Linux")," versions for those of you using a desktop interface."),(0,r.kt)("p",null,"It'll have the option to generate ECDSA (Elliptic Curve Digital Signature Algorithm) keys, which in turn will be stored in your SEP (Secure Enclave Processor) or equivalent processor if available, giving you an extra layer of security, all in its free to use version.\nTo configure it is fairly simple and you just have to follow their own ",(0,r.kt)("a",{parentName:"p",href:"https://support.termius.com/hc/en-us/articles/4578043155737-Quick-Start"},"quick start guide"),"."),(0,r.kt)("h2",{id:"disabling-ssh-password-authentication"},"Disabling SSH Password Authentication"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ecRiswm.png",alt:null})),(0,r.kt)("p",null,"After setting up all of the intended clients and to solely use the previously generated keys as access you have to disable the password authentication for SSH."),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Before disabling the SSH password authentication make sure you can log in to your server without a password and the user you are logging in with has sudo privileges.")),(0,r.kt)("p",null,"Log into your remote server with SSH keys, either as a user with sudo privileges or root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh sudo_user@server_ip_address\n")),(0,r.kt)("p",null,"Open the SSH configuration file with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo vim /etc/ssh/sshd_config\n")),(0,r.kt)("p",null,"Search for the following directives and modify them if needed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PermitRootLogin prohibit-password\nAllowUsers username\nPasswordAuthentication no\nPermitEmptyPasswords no\nKbdInteractiveAuthentication no\nUsePAM no\n")),(0,r.kt)("p",null,"Once you are done save the file ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CapsLock+Esc+ZZ"))," and restart the SSH service by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl restart ssh\n")),(0,r.kt)("p",null,"Only thing left for your peace of mind is to recheck that SSH is running with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl status ssh\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This guide has been compiled from several other sources of information freely available online to suit the purpose of accessing an SSH server which already contains a VPN host that in turn houses a blockchain validating node, in this case Lukso. After completing both VPN and SSH guides, you'll be able to securely access your node's command line and get Grafana stats, whether from inside your local network or remotely by enabling the pre-established WireGuard tunnel on your client's device. We at Luksoverse hope this information was useful and easy to follow."))}c.isMDXComponent=!0}}]);