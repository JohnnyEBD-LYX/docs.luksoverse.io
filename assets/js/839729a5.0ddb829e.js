"use strict";(self.webpackChunkcommunity_docs=self.webpackChunkcommunity_docs||[]).push([[7526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Prometheus Setup",s={unversionedId:"mainnet/complete-node-guide/monitoring/prometheus",id:"mainnet/complete-node-guide/monitoring/prometheus",title:"Prometheus Setup",description:"Now that all exporters are installed and running, we can set up the main application.",source:"@site/docs/mainnet/complete-node-guide/7-monitoring/05-prometheus.md",sourceDirName:"mainnet/complete-node-guide/7-monitoring",slug:"/mainnet/complete-node-guide/monitoring/prometheus",permalink:"/docs/mainnet/complete-node-guide/monitoring/prometheus",draft:!1,editUrl:"https://github.com/Luksoverse/community-docs/tree/main/packages/create-docusaurus/templates/shared/docs/mainnet/complete-node-guide/7-monitoring/05-prometheus.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blackbox Exporter Setup",permalink:"/docs/mainnet/complete-node-guide/monitoring/blackbox-exporter"},next:{title:"Grafana Dashboard",permalink:"/docs/mainnet/complete-node-guide/monitoring/grafana"}},l={},c=[{value:"7.5.1 Creating a new User",id:"751-creating-a-new-user",level:3},{value:"7.5.2 Installing Prometeus",id:"752-installing-prometeus",level:3},{value:"Extract the Archive",id:"extract-the-archive",level:4},{value:"Copy the Service Binaries into the System&#39;s Path",id:"copy-the-service-binaries-into-the-systems-path",level:4},{value:"7.5.3 Set Prometheus Permissionsets",id:"753-set-prometheus-permissionsets",level:3},{value:"7.5.4 Cleaning up Install Files",id:"754-cleaning-up-install-files",level:3},{value:"7.5.5 Configuring External Datasets",id:"755-configuring-external-datasets",level:3},{value:"Global Parameters",id:"global-parameters",level:4},{value:"Scrape Config Parameters",id:"scrape-config-parameters",level:4},{value:"Prometheus Jobs",id:"prometheus-jobs",level:4},{value:"7.5.6 Add Data Directory and Permissions",id:"756-add-data-directory-and-permissions",level:3},{value:"7.5.7 Configuring the Service",id:"757-configuring-the-service",level:3},{value:"Logging",id:"logging",level:4},{value:"7.5.8 Start the Prometheus Service",id:"758-start-the-prometheus-service",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prometheus-setup"},"Prometheus Setup"),(0,n.kt)("p",null,"Now that all exporters are installed and running, we can set up the main application."),(0,n.kt)("h3",{id:"751-creating-a-new-user"},"7.5.1 Creating a new User"),(0,n.kt)("p",null,"Like explained and done ",(0,n.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"previously"),", we will create a new user to specifically to run the JSON Exporter service. Running services as a system user with minimal privileges is a common security best practice."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--system"),": This flag indicates that a system user should be created. System users are used to run services and daemons, rather than for people to log in with."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--group"),": This flag instructs the user tool to to create a new group with the same name as the user."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--no-create-home"),": By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with an login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user ",(0,n.kt)("inlineCode",{parentName:"li"},"node-exporter-worker")," so we can differenciate the service, that is often using the exact name of the program written in underscores, and the user account related to it. Feel free to come up with your own name, but bare in mind that you will have to change future commands.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo adduser --system prometheus-worker --group --no-create-home\n")),(0,n.kt)("p",null,"If you want to confirm that the user has been created, you can search for it within the password file ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/passwd"),", that houses all essential information for each user account. Using ",(0,n.kt)("inlineCode",{parentName:"p"},"grep"),", a powerful command-line tool fror global expression search within files or text, we can check if the user exists within the file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'grep "blackbox-exporter-worker" /etc/passwd\n')),(0,n.kt)("h3",{id:"752-installing-prometeus"},"7.5.2 Installing Prometeus"),(0,n.kt)("p",null,"Before downloading or installing anything, make sure you are in the home directory so everything is in one place:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd\n")),(0,n.kt)("p",null,"We can then continue to download the current version of Prometheus using the previous installed ",(0,n.kt)("inlineCode",{parentName:"p"},"wget")," tool. In this case, we're downloading the service directly from GitHub. Check the official ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"Prometheus Download Page")," and look at the latest LTS version. Make sure to update your version if there is a newer release."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/prometheus/prometheus/releases/download/v2.37.8/prometheus-2.37.8.linux-amd64.tar.gz\n")),(0,n.kt)("h4",{id:"extract-the-archive"},"Extract the Archive"),(0,n.kt)("p",null,"After it has been downloaded, we can extract the tape archive using the related Ubuntu tool. We're going to extract (",(0,n.kt)("inlineCode",{parentName:"p"},"x"),") and compress (",(0,n.kt)("inlineCode",{parentName:"p"},"z"),") the archive into its previous packaged files (",(0,n.kt)("inlineCode",{parentName:"p"},"f"),") using verbose mode (",(0,n.kt)("inlineCode",{parentName:"p"},"v"),") to list all files being processed during the extraction and compression."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"tar xzvf prometheus-2.37.8.linux-amd64.tar.gz\n")),(0,n.kt)("h4",{id:"copy-the-service-binaries-into-the-systems-path"},"Copy the Service Binaries into the System's Path"),(0,n.kt)("p",null,"After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services."),(0,n.kt)("p",null,"First move into the Prometheus folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd prometheus-2.37.8.linux-amd64\n")),(0,n.kt)("p",null,"You will see Promtool and Prometheus showing up as executable programs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prometheus"),": The main component of the Prometheus system. It's a time-series database server that collects and stores metrics from monitored targets at specified intervals. It retrieves these metrics via HTTP requests on specified endpoints. Prometheus includes a flexible query language called PromQL to leverage its dimensionality. It also includes a web interface for executing queries and visualizing results."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Promtool"),": This is the related command-line tool used for various tasks related to Prometheus, such as checking the syntax of your Prometheus configuration, validating rule files, simulating alert rule evaluation, and debugging PromQL expressions. It's a useful tool for any Prometheus operator as it helps to ensure that configuration files and rule files are syntactically correct and work as expected. It does not collect or store metrics; it's more of a helper tool used in conjunction with the main Prometheus server.")),(0,n.kt)("p",null,"Both need to be copied into the system's path. Lets start with the Prometheus application itself:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp prometheus /usr/local/bin/\n")),(0,n.kt)("p",null,"Then continue with copying the CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cp promtool /usr/local/bin/\n")),(0,n.kt)("h3",{id:"753-set-prometheus-permissionsets"},"7.5.3 Set Prometheus Permissionsets"),(0,n.kt)("p",null,"Now we can change the owner of the software applications to admin access. This is commonly done for security reasons. By giving root ownership to these binary files, you prevent non-root users or exporter workers from modifying or replacing these important executables, which could lead to unauthorized or unexpected behavior."),(0,n.kt)("p",null,"Like previously explained in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/node-exporter"},"Node Exporter")," section of the guide, we can set both, the user and group to the specified user of the service."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown root:root /usr/local/bin/prometheus\n")),(0,n.kt)("p",null,"The same applies to the CLI tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown root:root /usr/local/bin/promtool\n")),(0,n.kt)("p",null,"Not only do we need to change the owner this time, but we also need to change the access mode of the executable. We need to allow the owner to read, write, and execute the file, while the group and all other services can only read from it."),(0,n.kt)("p",null,"We can use the change mode tool ",(0,n.kt)("inlineCode",{parentName:"p"},"chmod")," like we did it already within the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/monitoring/blackbox-exporter"},"Blackbox Exporter")," section of the guide."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /usr/local/bin/prometheus\n")),(0,n.kt)("p",null,"We do the same for the CLI tool again"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /usr/local/bin/promtool\n")),(0,n.kt)("h3",{id:"754-cleaning-up-install-files"},"7.5.4 Cleaning up Install Files"),(0,n.kt)("p",null,"After we copied the executable file into the system's program path and gave it the appropriate user rights, we can remove the extracted folders."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf prometheus-2.37.8.linux-amd64\n")),(0,n.kt)("p",null,"The same applies to the tape archive, which we have previously downloaded:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"rm prometheus-2.37.8.linux-amd64.tar.gz\n")),(0,n.kt)("h3",{id:"755-configuring-external-datasets"},"7.5.5 Configuring External Datasets"),(0,n.kt)("p",null,"After installation, we want to create a separate configuration file for the Prometheus server that will collect all the information from the exporters. It will tell Prometheus where to scrape data from, how often to scrape it, and how to handle the scraped data."),(0,n.kt)("p",null,"Here is a quick description of the needed folders:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/console_libraries"),": This directory is typically used to store library files that are shared between different console templates. Console libraries are essentially snippets of reusable code that can be used in multiple console files to avoid code duplication."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/consoles"),": This directory holds console templates. These are Prometheus's built-in web UI templates that allow you to create HTML pages displaying the results of PromQL expressions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/files_sd"),":This directory is for file-based service discovery configuration files. Prometheus uses these to dynamically discover targets for scraping. These files are in JSON or YAML format and list the targets for Prometheus to scrape metrics from."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/rules"),": This directory is where you store rules files. Rules files contain the definitions for alerting rules and recording rules. Alerting rules specify conditions under which Prometheus should trigger an alert, and recording rules precompute frequently used or expensive PromQL expressions and save their result as a new set of time series."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/rules.d"),": This directory is used to organize rules files for individual services, keeping them separate from general rules in the rules directory. This is useful in large setups where you have many rules related to different services or components, and you want to keep them in separate files for better management."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/prometheus"),": This directory is typically used for storing the Prometheus time-series database files. These files are created and managed by Prometheus while it's running to hold all the samples it collects from the targets it scrapes.")),(0,n.kt)("p",null,"For this configuration, we will check that all needed Prometheus folders are there, so no error will appear while running it. If they should already exist, we leave them as they are, if not, we will create empty folders. This can be easily done using the parent ",(0,n.kt)("inlineCode",{parentName:"p"},"-p")," flag as already described before within the ",(0,n.kt)("a",{parentName:"p",href:"/docs/mainnet/complete-node-guide/access-connection/ssh-config"},"SSH Config")," section of the guide."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p /etc/prometheus/console_libraries /etc/prometheus/consoles /etc/prometheus/files_sd /etc/prometheus/rules /etc/prometheus/rules.d /var/lib/prometheus\n")),(0,n.kt)("p",null,"Afterwards, we can create a new server configuration file for Prometheus to define how Prometheus will function and what services it will monitor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/prometheus/prometheus.yaml\n")),(0,n.kt)("p",null,"Here is a breakdown of the various parts we will add to the configuration:"),(0,n.kt)("h4",{id:"global-parameters"},"Global Parameters"),(0,n.kt)("p",null,"These settings apply to the Prometheus server itself."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"scrape_interval"),": This is the frequency with which Prometheus will collect data from your targets. A common average value that has proven to be a great balance for metrics is ",(0,n.kt)("inlineCode",{parentName:"li"},"15 seconds"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"evaluation_interval"),": This is the frequency with which Prometheus will evaluate rules. Its usually the same as the scrape interval. I've set it to ",(0,n.kt)("inlineCode",{parentName:"li"},"15 seconds")," as well.")),(0,n.kt)("h4",{id:"scrape-config-parameters"},"Scrape Config Parameters"),(0,n.kt)("p",null,"This section is a list of jobs that Prometheus will monitor. Each job can have its own settings."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"job_name"),": This is the name of the job as it will appear in Prometheus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"scrape_interval"),": This is the frequency with which Prometheus will collect data from this job. If this is not set, the global ",(0,n.kt)("inlineCode",{parentName:"li"},"scrape_interval")," will be used."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"metrics_path"),": This specifies the endpoint to hit when scraping metrics. It defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"/metrics")," if not set."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"params"),": This is used to pass URL parameters to the scrape request. It will mainly be used in our network probing services having ",(0,n.kt)("inlineCode",{parentName:"li"},"ICMP"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"static_configs"),": This is a list of targets for the job. Each target is a ",(0,n.kt)("inlineCode",{parentName:"li"},"host:port")," pair that Prometheus will scrape metrics from. In some services, we will target some API URLs to fetch data responses."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"relabel_configs"),": This allows us to modify the labels of the target before scraping. In we want to ping services for Prometheus, we're using this to set the ",(0,n.kt)("inlineCode",{parentName:"li"},"__address__")," label to the address of the Blackbox exporter, and the instance label to the IP we're pinging.")),(0,n.kt)("h4",{id:"prometheus-jobs"},"Prometheus Jobs"),(0,n.kt)("p",null,"Let's walk through each of the job we want to set up for Prometheus. Please note that the ports are configured to be used within Geth and Prysm. If you are using other clients, make sure to adjust some properties."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prometheus-job"),": This job is for scraping metrics from the Prometheus server itself. It will scrape every ",(0,n.kt)("inlineCode",{parentName:"li"},"5")," seconds from the address ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:9090"),", which is the default address and port for a locally running Prometheus server as described within the ",(0,n.kt)("a",{parentName:"li",href:"/docs/mainnet/complete-node-guide/monitoring/core-tools"},"Monitoring Port")," section of the guide."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"consensus-client-job"),": This job scrapes metrics from a the consensus node running locally at the address ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:8080"),". The scrape interval is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"5")," seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"node-exporter-job"),": The Node Exporter is a Prometheus exporter for hardware and OS metrics. This job scrapes metrics from the Node Exporter service running locally at the address ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:9100")," every ",(0,n.kt)("inlineCode",{parentName:"li"},"5")," seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"validator-job"),": This job is set to scrape metrics from the validator client running locally at ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:8081")," every ",(0,n.kt)("inlineCode",{parentName:"li"},"5")," seconds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"google-ping-job"),": This jobs uses the Blackbox Exporter to probe the Google DNS server at '8.8.8.8' using ",(0,n.kt)("inlineCode",{parentName:"li"},"ICMP")," echo requests, also called pings. The metrics will be available at the ",(0,n.kt)("inlineCode",{parentName:"li"},"/probe")," endpoint on the Blackbox Exporter, which is running locally at ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:9115"),". The relabeling configurations are used to properly label these targets for Prometheus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cloudflare-ping-job"),": This job uses the Blackbox Exporter to probe the Cloudflares DNS server at ",(0,n.kt)("inlineCode",{parentName:"li"},"1.1.1.1")," using ",(0,n.kt)("inlineCode",{parentName:"li"},"ICMP")," echo requests, also called pings. The metrics will be available at the ",(0,n.kt)("inlineCode",{parentName:"li"},"/probe")," endpoint on the Blackbox Exporter, which is running locally at ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:9115"),". The relabeling configurations are used to properly label these targets for Prometheus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"json-exporter-job"),": This job is for scraping metrics from the JSON Exporter running locally at ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:7979"),". This service is used for converting JSON data into a format that Prometheus can scrape."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lyx-price-job"),": This job is set to scrape metrics LYX price information from the GoinGecko API using the JSON Exporter. The metrics will be available at the ",(0,n.kt)("inlineCode",{parentName:"li"},"/probe")," endpoint on the JSON Exporter, which is running locally at ",(0,n.kt)("inlineCode",{parentName:"li"},"127.0.0.1:7979"),". The relabeling configurations are used to properly label these targets for Prometheus.")),(0,n.kt)("p",null,"The configuration file looks like the following. Its recommended to leave the job names like that so we can easily easily associate them with the corresponding services underneath."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus-job'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:9090']\n  - job_name: 'consensus-client-job'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:8080']\n  - job_name: 'node-exporter-job'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:9100']\n  - job_name: 'validator-client-job'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['127.0.0.1:8081']\n  - job_name: 'google-ping-job'\n    metrics_path: /probe\n    params:\n      module: [icmp]\n    static_configs:\n      - targets:\n        - 8.8.8.8\n    relabel_configs:\n      - source_labels: [__address__]\n        target_label: __param_target\n      - source_labels: [__param_target]\n        target_label: instance\n      - target_label: __address__\n        replacement: 127.0.0.1:9115  # The blackbox exporter's real hostname:port.\n  - job_name: 'cloudflare-ping-job'\n    metrics_path: /probe\n    params:\n      module: [icmp]\n    static_configs:\n      - targets:\n        - 1.1.1.1\n    relabel_configs:\n      - source_labels: [__address__]\n        target_label: __param_target\n      - source_labels: [__param_target]\n        target_label: instance\n      - target_label: __address__\n        replacement: 127.0.0.1:9115  # The blackbox exporter's real hostname:port.\n  - job_name: 'json-exporter-job'\n    static_configs:\n    - targets:\n      - 127.0.0.1:7979\n  - job_name: 'lyx-price-job'\n    metrics_path: /probe\n    static_configs:\n    - targets:\n      - https://api.coingecko.com/api/v3/simple/price?ids=lukso-token&vs_currencies=eur\n    relabel_configs:\n    - source_labels: [__address__]\n      target_label: __param_target\n    - source_labels: [__param_target]\n      target_label: instance\n    - target_label: __address__\n      replacement: 127.0.0.1:7979\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the Prometheus server functions properly.")),(0,n.kt)("p",null,"If you want the LYX price showing up in a different currency than ",(0,n.kt)("inlineCode",{parentName:"p"},"EUR"),", please change the ",(0,n.kt)("inlineCode",{parentName:"p"},"vs_currencies")," property of the taget URL for the ",(0,n.kt)("inlineCode",{parentName:"p"},"lyx-price-job"),". For USD, it would look like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"    - targets:\n      - https://api.coingecko.com/api/v3/simple/price?ids=lukso-token&vs_currencies=usd\n")),(0,n.kt)("p",null,"Those properties will later on be used within the Grafana Dashboard to fetch the token prices and build metrics based on our validator service."),(0,n.kt)("h3",{id:"756-add-data-directory-and-permissions"},"7.5.6 Add Data Directory and Permissions"),(0,n.kt)("p",null,"After the main configuration file and all main service folders are set up, we can continue to give the Prometheus application special user rights for security reasons. Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"-R")," flag, we can assure that the new owner is applied to all files and subfolders accordingly."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown -R prometheus-worker:prometheus-worker /etc/prometheus\n")),(0,n.kt)("p",null,"As the Prometheus time-series database files within ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/prometheus")," are created and managed by Prometheus while it's running, we will also need to adjust owner and access permissions on this end. First lets change the owner:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chown prometheus-worker:prometheus-worker /var/lib/prometheus\n")),(0,n.kt)("p",null,"Afterwards we can change the permissions itself, like we did previously:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo chmod 755 /var/lib/prometheus\n")),(0,n.kt)("h3",{id:"757-configuring-the-service"},"7.5.7 Configuring the Service"),(0,n.kt)("p",null,"After installation and job configuration, we want to define how the Prometheus service should be run itself. Within Ubuntu, the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," directory is where system service unit files are stored and used to configure services to start automatically at boot."),(0,n.kt)("p",null,"Here, we can create a file called ",(0,n.kt)("inlineCode",{parentName:"p"},"prometheus.service"),". A service file is generally used to define how a deamon processes should be started. In our case, we create the file with the exact name of the Prometheus service that also stored within the system directory, in order to modify Prometheus' startup process. We can use nano, as we did before on various other files."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/systemd/system/prometheus.service\n")),(0,n.kt)("p",null,"The configuration file is split between multiple sections: ",(0,n.kt)("inlineCode",{parentName:"p"},"[Unit]"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"[Service]"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"[Install]"),". The unit contains generic options that are not dependent on the type of service and provide documentation. The service and install section is where we will house our configuration properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Description"),": Provides a concise but meaningful explanation of the service used in the configuration"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Documentation"),": Provides a URL where more information to the program can be found"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Wants"),": Minor requirement for the startup to safely proceed. In our case it indicates that the service should want an internet connection, but continues even if it can not be established."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"After"),": Ensures that the service is started after the network has been set up."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User"),": Specifies under which user the service will run. In this case, it will be ",(0,n.kt)("inlineCode",{parentName:"li"},"prometheus-worker"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Group"),": - ",(0,n.kt)("strong",{parentName:"li"},"User"),": Specifies under which usergroup the service will run. In this case, it will be ",(0,n.kt)("inlineCode",{parentName:"li"},"prometheus-worker"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type"),": This option configures the process start-up type for this service unit. The ",(0,n.kt)("inlineCode",{parentName:"li"},"simple")," value means the exec command configured will be the main process of the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ExecStart"),": Specifies the command to run when the service starts. In this case, it's ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/prometheus")," as program folder of Prometheus. In addition, there are several other options passed to the startup. It will load the configuration from ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/prometheus.yaml"),", it will store the database within ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/prometheus/"),", it will set the data storing expiring date to one month, it will set the directory containing the web console template files to ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/consoles"),", and last but not least, it will specify the folder of the console library files at ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/prometheus/console_libraries"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ExecReload"),": Specifies the command to execute when the systemd service is reloaded. In our case, the ",(0,n.kt)("inlineCode",{parentName:"li"},"kill")," command is used to send a signal (HUP) to the main process of the service, indicated by the main process ID. It will cause the process to restart and re-read its configuration files. Therefore, this will apply changes without fully stopping the service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Restart"),": Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The ",(0,n.kt)("inlineCode",{parentName:"li"},"always")," value means the service will be restarted regardless of whether it exited cleanly or not."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RestartSec"),": This option configures the time to sleep before restarting a service. The value ",(0,n.kt)("inlineCode",{parentName:"li"},"5")," means the service will wait for 5 seconds before it restarts. It is a common default value and a balance between trying to restart the service quickly after a failure and not restarting it so rapidly that you could exacerbate problems."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"StandardOutput"),": Logfile where output from the Blackbox Exporter will be logged."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"StandardError"),": Logfile where errors from the Blackbox Exporter will be logged."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SyslogIdentifier"),": Sets the program name used when messages are logged to the system log."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ProtectSystem"),": Protection rules to specify where the service can write files to the disk. If set to ",(0,n.kt)("inlineCode",{parentName:"li"},"full")," it will limit the areas of the file system that the Exporter can write outside of his regular application folder. This works best as we are just using it for logging."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoNewPrivileges"),": Prevent the Prometheus service and its children from gaining new service privileges on its own."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PrivateTmp"),": Set to allow the service to generate a private ",(0,n.kt)("inlineCode",{parentName:"li"},"/tmp")," directory that other processes can't access."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WantedBy"),": This option creates a small dependency and makes the service get started at boot time. If we input ",(0,n.kt)("inlineCode",{parentName:"li"},"multi-user.target")," we can specify that the service will start when the system is set up for multiple users. In our case, every Exporter service will have its own user, kinda fitting the description.")),(0,n.kt)("h4",{id:"logging"},"Logging"),(0,n.kt)("p",null,"By default, the service will write journal logs into the ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/journal/")," folder using the ",(0,n.kt)("inlineCode",{parentName:"p"},"journald")," service. But you can also configure it to use system logs that are written into the ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/syslog")," folder by the ",(0,n.kt)("inlineCode",{parentName:"p"},"syslog")," process. Here is a quick rundown:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"journald"),": The logs are structured and include metadata about each log entry, which can make them easier to filter and analyze, but harder to read our bugfix. The service includes rate limiting and log rotation by default, which can help keep log sizes small. It also stores logs in a binary format, which can be more space-efficient and faster to process than text-based logs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"syslog"),": System logs are text-based logs, which is easier to read, bugfix, and process with traditional command-line tools. It also has a network protocol, so it could send logs to remote servers, if thats something you need.")),(0,n.kt)("p",null,"I will keep the default journald for now. Therefore, the content of the Prometheus service configuration should look like the one below. Make sure that you change the ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," property if you've previously changed the name. Feel free to make any adjustments that better suite your environment."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=Prometheus\nDocumentation=https://github.com/prometheus/prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus-worker\nGroup=prometheus-worker\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yaml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --storage.tsdb.retention.time=31d \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\nExecReload=/bin/kill -HUP $MAINPIDRestart=always\nRestartSec=5\nStandardOutput=journald\nStandardError=journald\nSyslogIdentifier=blackbox_exporter\nProtectSystem=full\nNoNewPrivileges=true\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the Prometheus functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.")),(0,n.kt)("h3",{id:"758-start-the-prometheus-service"},"7.5.8 Start the Prometheus Service"),(0,n.kt)("p",null,"First we need to reload the system manager configuration. It is used when making changes to service configuration files or create new service files, ensuring that systemd is aware of the changes like before."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,n.kt)("p",null,"Afterwards we can start the Prometheus service using the system control command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start prometheus\n")),(0,n.kt)("p",null,"To enable the Prometheus service to start automatically when the system boots we can use the system control to creates a symbolic link as we did before."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable prometheus\n")),(0,n.kt)("p",null,"To check if the Prometheus service is running and configured properly, we can fetch the current status from the system control. It will display whether it is active, enabled, or disabled, and show any recent log entries."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status prometheus\n")),(0,n.kt)("p",null,"The output should look similar to this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"TODO:\n")))}u.isMDXComponent=!0}}]);