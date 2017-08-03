# SCMPv8{ctf} 

## Registration

1. Please make sure you are using an Unicode locale, e.g.
   ```bash
   export LC_ALL=en_US.UTF-8
   ```

2. All team members must have a GitHub account and [configure a SSH key in their account settings](https://github.com/settings/keys).

   **Note**: If you prefer team members to stay anonymous, you can create a single GitHub account for the entire team and share its credentials.
   
3. All team members must have the git client [correctly set up](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup). If you have never used git before, run:
   ```bash
   git config --global user.name "John Doe"
   git config --global user.email johndoe@example.com
   ```
   
4. All team members must clone the repository and install the dependencies:
   ```bash
   git clone git@github.com:SCMP-ctf/SCMPv8.git
   cd SCMPv8
   sudo apt-get install libsodium18
   sudo -H pip install -r pip-requirements.txt
   ```
   **Note**: If you are using Ubuntu 14.04, add [ppa:elt/libsodium](https://launchpad.net/~elt/+archive/ubuntu/libsodium) to your system to be able to install `libsodium18`. If you are using Debian, you need to get the package from [sid](https://packages.debian.org/sid/libsodium18).
  
5. If dependencies are installed correctly, you should now see the help menu when calling:
   ```bash
   ./ctf -h
   ```

6. The **leader of the team** must execute the following command and follow the instructions to register the team:
   ```bash
   ./ctf init
   ```
  
7. The **other members of the team** must login to GitHub without registering a new team, by running:
   ```bash
   ./ctf login
   ```
   
8. After that, **the leader** must share the `team-secrets.json` with the members of the team. The **other members of the team** must place the `team-secrets.json` file shared by the leader in their `PTE` directory.

## Challenges

~~Challenges are available on https://pwn2winctf.github.io.~~ **TODO**

If you prefer to browse them locally, you may also run a local webserver by typing `./ctf serve`, or list challenges through the command line interface:
```bash
./ctf challs
```

## Flag submission

To submit a flag:
```bash
./ctf submit --chall chall-id 'SCMPv8{fl4g_4qu1}'
```

You may omit `--chall chall-id` from the command, however it will be slower to run this way. In this case, we will look for the flag in every challenge released until now.

## Scoreboard

Currently, the scoreboard is only available through the command line interface:
```bash
./ctf score --names --pull
```

However we plan to make it available through the web interface in a future release.
