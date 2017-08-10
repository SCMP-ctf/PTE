# Edição SCMPv8

Bem vindo ao CTF da SECOMP **Edição SCMPv8**.

## Registro

1. Utilize um Unicode locale, por exemplo:
  ```bash
  export LC_ALL=pt_BR.UTF-8
  ```

2. Todos os membros do time precisam ter uma conta no GitHub e [configurar uma chave SSH nas configurações de suas contas](https://github.com/settings/keys).

  **Obs**: Se preferir que os membros do time fiquem anônimos, é possível criar uma única conta no GitHub para todo o time e compartilhar suas credenciais.

3. Todos os membros do time precisam ter o client do git [configurado corretamente](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup). Se você nunca utilizou git, rode os comandos a seguir:
  ```bash
  git config --global user.name "Fulano"
  git config --global user.email fulano@exemplo.com
  ```

4. Todos os membros do time devem clonar o repositório e instalar as dependências:
  ```bash
  git clone git@github.com/SCMP-ctf/SCMPv8.git
  cd SCMPv8
  sudo apt-get install libsodium18
  sudo -H pip install -r pip-requirements.txt
  ```
  **Obs**: Se você está utilizando Ubuntu 14.04, adicione [ppa:elt/libsodium](https://launchpad.net/~elt/+archive/ubuntu/libsodium) ao seu sistema para poder instalar `libsodium18`. Se você está utilizando Debian, é necessário pegar o pacote via [sid](https://packages.debian.org/sid/libsodium18).

5. Se as dependências foram instaladas corretamente, você deve poder ver o menu de ajuda ao executar:
  ```bash
  ./ctf -h
  ```

6. O **lider do time** deve então executar o comando seguinte e seguir as instruções para registrar o time:
  ```bash
  ./ctf init
  ```

7. Os **outros membros do time** devem fazer login no GitHub sem registrar um novo time, executando:
  ```bash
  ./ctf login
  ```

8. Depois disso, **o lider** deve compartilhar o arquivo `team-secrets.json` com os membros do time. Os **outros membros do time** devem colocar o arquivo `team-secrets.json` compartilhado pelo lider em seus diretórios `SCMPv8`.

## Desafios

Os desafios podem ser acessados em https://pwn2winctf.github.io.

Se você preferir acessá-los localmente, você também pode rodar um webserver local executando `./ctf serve`, ou listar os desafios pela interface de linha de comando:
```bash
./ctf challs
```

## Submissão de flags

Para submeter uma flag:
```bash
./ctf submit --chall chall-id 'SCMPv8{fl4g_4qu1}'
```

Você pode omitir `--chall chall-id` do comando, porém será mais lento desta forma. Neste caso, iremos procurar pela flag em todos os desafios lançados até agora.

## Placar

Atualmente, o placar só é acessível pela interface de linha de comando:
```bash
./ctf score --names --pull
```

No entanto planejamos torná-lo acessível pela interface web futuramente.
