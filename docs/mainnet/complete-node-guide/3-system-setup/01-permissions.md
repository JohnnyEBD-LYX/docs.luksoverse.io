# Change Permission Set

By locking the root account, we can enhance the security of the node system, as it requires users to use superuser permissions to execute commands with root privileges, which leaves an audit trail of actions performed with elevated permissions.

#### Super User Permission

The root access does have unlimited rights. But as set up a regular user profile, some commands will require superuser privileges to run. The related `sudo` option, short for "superuser do", is a command-line utility that allows users to execute commands with the privileges of another user, typically the superuser or "root" user. It provides a controlled way to grant administrative access to specific users without sharing the root password. By using sudo, users can run commands that require elevated permissions

> Always be cautious when using `sudo`, as there is the risk of accidentally performing potentially harmful actions on the system.

Log into the system with the previous configured user profile. Type in the specified username followed by the password.

#### Password Utility

The `passwd` command is a fundamental utility in Unix-based operating systems, including Linux, for managing user passwords. It allows users to change their own passwords and, when executed with administrative privileges, to modify passwords for other users on the system.

The command offers various options for managing passwords, such as setting password expiry, locking and unlocking user accounts, and forcing users to change their password at the next login.

### 3.1.1 Disbale Root Access

Using the `passwd` command, we can lock the root account on the node system, effectively disabling the ability to directly log in as the root user using a password. We use the `-l` option to lock the specified account.

```sh
sudo passwd -l root
```

The outcome should look like this:

```text
passwd: password expiry information changed.
```

### 3.1.2 Check Root Account

To verify that the change was effective, use the password command again with the `-S` option, so you can see the status of the root account:

```sh
sudo passwd -S root
```

The outcome should look like this:

```text
root L 02/17/2023 0 99999 7 -1
```

The uppercase `L` behind the account name means the root account has been locked successfully. If you see a uppercase `P`, it indicates that the account is not locked and still has a valid password. If the `L` shows up, all commands will now always have to ask for the sudo password, as you can not log in as root account anymore.
