# JSON Exporter Setup

After installing the JSON Exporter, we will move on with the second exporter service for Prometheus: the JSON Exporter, as it's common practice to install the exporters before the main service, as [explained before](./02-node-exporter.md).

> The JSON Exporterscrapes data from JSON endpoints and expose it as Prometheus. In our case, it's being used to scrape LUKSO price information from CoinGecko. This is important because it enables us to monitor LUKSO's market performance directly from your Prometheus and Grafana setup, providing a unified view of both your node's performance and the associated token's market performance. It saves time and provides convenience, eliminating the need to check this information on separate platforms.

### 7.3.1 Creating a new User

Like explained and done [previously](./02-node-exporter.md), we will create a new user to specifically to run the JSON Exporter service. Running services as a system user with minimal privileges is a common security best practice.

- `--system`: This flag indicates that a system user should be created. System users are used to run services and daemons, rather than for people to log in with.
- `--group`: This flag instructs the user tool to to create a new group with the same name as the user.
- `--no-create-home`: By default, the user tool will create a home directory for each new user. This flag prevents that from happening, as we do not need different user directories if ye do not set the user up with an login. The option is typically used for users that are only meant to run a specific service and don't need a home directory. In this case, I'm naming the user `node-exporter-worker` so we can differenciate the service, that is often using the exact name of the program written in underscores, and the user account related to it. Feel free to come up with your own name, but bare in mind that you will have to change future commands.

```sh
sudo adduser --system json-exporter-worker --group --no-create-home
```

Once we configured the exporter, the node will run the service as this user, by specifying the user in our system deamon service file.

If you want to confirm that the user has been created, you can search for it within the password file `/etc/passwd`, that houses all essential information for each user account. Using `grep`,
a powerful command-line tool fror global expression search within files or text, we can check if the user exists within the file.

```sh
grep "json-exporter-worker" /etc/passwd
```

### 7.3.2 Installing the Dependencies

For the JSON Exporter we will need the programming language Go, as the JSON Exporter is a tool written in the Go programming language, to produce the executable.

Particularly in the infrastructure and cloud-native spaces services are commonly downloaded as source code and require the user to compile them. This allows the tool to be used on any system that has the compiler, regardless of its OS or architecture. The JSON Exporter also does not have an official listing on the Prometheus page.

#### Download the Dependencies

Before downloading anything, make sure you are in the home directory so everything is in one place:

```sh
cd
```

As first step we download Go from the official [Go Webpage](https://go.dev/dl/). Make sure to look up and download the latest supported one and no archived version. In my case, it is `v1.20.4` as of May 2023.

> Always download the current version.

```sh
wget https://go.dev/dl/go1.20.4.linux-arm64.tar.gz
```

#### Extract the Go Archive

After it has been downloaded, we can extract the tape archive using the related Ubuntu tool. We're going to extract (`x`) the archive into its previous packaged files (`f`) using verbose mode (`v`) to list all files being processed during the extraction.

```sh
tar xfv go1.20.4.linux-amd64.tar.gz
```

#### Copy the Service Binaries into the System's Path

After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services.

```sh
sudo mv go /usr/local/go-1.20.4
```

#### Creating Symbolic Link

As we want to have Go noticed as the main go command when building the JSON Exporter application. We can do this by creating a symbolic link (-s) using the link tool `ln`. We can specify that the binaries of version 1.20.4 are the ones that will be executed using the terminal. By using the `-f` flag we force the command to remove any existing files, in case something was installed previously. This is especially best practice if you want to update go or build any newer software release.

```sh
sudo ln -sf /usr/local/go-1.20.4/bin/go /usr/bin/go
```

#### Check Go Version

To verify that everything works as expected, start go using the version subcommand.

```sh
go version
```

The output should look similar to the one below. Versions could change based on when you did the installation.

```text
TODO:
```

#### Cleanup Dependency Download

If everything works properly, we can remove the downloaded tape archive. Note that your file might have a different version naming.

```sh
rm go1.20.4.linux-amd64.tar.gz
```

### 7.3.3 Installing the JSON Exporter

Before downloading anything, make sure you are still in the home directory so everything is in one place:

```sh
cd
```

#### Download the Repository

We can then continue to download this version using the previous installed `wget` tool. In this case, we're downloading the service directly from GitHub. Make sure to update your version if there is a newer release.

```sh
git clone https://github.com/prometheus-community/json_exporter.git
```

Move into the folder to build the file:

```sh
cd json_exporter
```

#### Create the Build using the Makefile

Now lets build the applciation from it's source code. We use the previously downloaded tool `make` to trigger the repositories Makefile. Makefiles are essentially a list of rules and dependencies used to build a project. They specify the relationships among files in your program and provide commands to update them and build executable applications.

```sh
make build
```

#### Copy the Service Binaries into the System's Path

After extraction we can copy the exporter binaries to the system's path so they show up as installed dependencies and can be properly used and linked within services.

```sh
sudo cp json_exporter /usr/local/bin/
```

#### Set JSON Exporter Permissionsets

Now we can change the owner of the JSON Exporter service to the one that we created especially for this purpose:

Like previously explained in the [Node Exporter](./02-node-exporter.md) section of the guide, we can set both, the user and group to the specified user of the service.

```sh
sudo chown json-exporter-worker:json-exporter-worker /usr/local/bin/json_exporter/
```

#### Cleaning up Install Files

Move back into the home directory:

```sh
cd
```

After we copied the executable file into the system's program path and gave it the appropriate user rights, we can remove the original repository folder we've downloaded.

```sh
rm -rf json_exporter
```

### 7.3.4 Configuring External Datasets

After installation, we want to create a separate configuration file to fetch external information, in this case the LYX price. We will create our own folder for the applciation's configuration files within `/etc/json_exporter/`.

```sh
sudo mkdir /etc/json_exporter/
```

Afterwards, we can change the owner of the service to the specific exporter user:

```sh
sudo chown json-exporter-worker:json-exporter-worker /etc/json_exporter/
```

Now we can create a new config file within this folder:

```sh
sudo nano /etc/json_exporter/json_exporter.yaml
```

Write the following properties into is file:

```text
modules:
  default:
    metrics:
    - name: lyx-in-eur
      path: "{.lukso-token.eur}"
      help: LUKSO (LYX) Price in EUR
```

In case you want to change the currency to something else, this is how it would look like in `USD`:

```text
modules:
  default:
    metrics:
    - name: lyx-in-usd
      path: "{.lukso-token.usd}"
      help: LUKSO (LYX) Price in USD
```

> Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the JSON Exporter functions properly and provides the desired level of security. Verify that you always use 2 spaces for each indentation and that the hyphen.

Those properties will later on be used within the Grafana Dashboard to fetch the token prices and build metrics based on our validator service.

Save and exit the file. As a final step, we give the exporter worker permissions to this file:

```sh
sudo chown json-exporter-worker:json-exporter-worker /etc/json_exporter/json_exporter.yaml
```

We can now continue the service configuration and link our external metrics there.

### 7.3.5 Configuring the Service

After installation, we want to define how the JSON Exporter service should be run. Within Ubuntu, the `/etc/systemd/system/` directory is where system service unit files are stored and used to configure services to start automatically at boot.

Here, we can create a file called `json_exporter.service`. A service file is generally used to define how a deamon processes should be started. In our case, we create the file with the exact name of the JSON Exporter service that also stored within the system directory, in order to modify the JSON Exporter's startup process. We can use nano, as we did before on various other files.

```sh
sudo nano /etc/systemd/system/json_exporter.service
```

The configuration file is split between multiple sections: `[Unit]`, `[Service]`, and `[Install]`. The unit contains generic options that are not dependent on the type of service and provide documentation. The service and install section is where we will house our configuration properties:

- **Description**: Provides a concise but meaningful explanation of the service used in the configuration
- **Documentation**: Provides a URL where more information to the program can be found
- **After**: Ensures that the service is started after the network has been set up.
- **User**: Specifies under which user the service will run. In this case, it will be `json-exporter-worker`.
- **Type**: This option configures the process start-up type for this service unit. The `simple` value means the exec command configured will be the main process of the service.
- **ExecStart**: Specifies the command to run when the service starts. In this case, it's `/usr/local/bin/json_exporter` as program folder of the JSON Exporter. We will also start it with our previously set up external data config file by passing it through the service using the `--config.file` flag.
- **Restart**: Configures whether the service shall be restarted when the service process exits, is killed, or a timeout is reached. The `always` value means the service will be restarted regardless of whether it exited cleanly or not.
- **RestartSec**: This option configures the time to sleep before restarting a service. The value `5` means the service will wait for 5 seconds before it restarts. It is a common default value and a balance between trying to restart the service quickly after a failure and not restarting it so rapidly that you could exacerbate problems.
- **StandardOutput**: Logfile where output from the JSON Exporter will be logged.
- **StandardError**: Logfile where errors from the JSON Exporter will be logged.
- **SyslogIdentifier**: Sets the program name used when messages are logged to the system log.
- **ProtectSystem**: Protection rules to specify where the service can write files to the disk. If set to `full` it will limit the areas of the file system that the Exporter can write outside of his regular application folder. This works best as we are just using it for logging.
- **NoNewPrivileges**: Prevent the JSON Exporter service and its children from gaining new service privileges on its own.
- **PrivateTmp**: Set to allow the service to generate a private `/tmp` directory that other processes can't access.
- **WantedBy**: This option creates a small dependency and makes the service get started at boot time. If we input `multi-user.target` we can specify that the service will start when the system is set up for multiple users. In our case, every Exporter service will have its own user, kinda fitting the description.

#### Logging

By default, the service will write journal logs into the `/var/log/journal/` folder using the `journald` service. But you can also configure it to use system logs that are written into the `/var/log/syslog` folder by the `syslog` process. You can find a full explanation within the [first exporter installation](./02-node-exporter.md).

```text
[Unit]
Description=JSON Exporter
Documentation=https://github.com/prometheus-community/json_exporter
After=network.target

[Service]
User=json-exporter-worker
Type=simple
ExecStart=/usr/local/bin/json_exporter ----config.file /etc/json_exporter/json_exporter.yaml
Restart=always
RestartSec=5
StandardOutput=journald
StandardError=journald
SyslogIdentifier=node_exporter
ProtectSystem=full
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

> Be cautious: When creating new rules or modifying existing ones, it's essential to follow the correct syntax and structure to ensure that the JSON Exporter functions properly and provides the desired level of security. Verify that you do not use spaces between properties and their values.

### 7.3.6 Start the JSON Exporter Service

First we need to reload the system manager configuration. It is used when making changes to service configuration files or create new service files, ensuring that systemd is aware of the changes like before.

```sh
sudo systemctl daemon-reload
```

Afterwards we can start the JSON Exporter service using the system control command:

```sh
sudo systemctl start json_exporter
```

To enable the JSON Exporter service to start automatically when the system boots we can use the system control to creates a symbolic link as we did before.

```sh
sudo systemctl enable json_exporter
```

To check if the JSON Exporter service is running and configured properly, we can fetch the current status from the system control. It will display whether it is active, enabled, or disabled, and show any recent log entries.

```sh
sudo systemctl status json_exporter
```

The output should look similar to this:

```text
TODO:
```