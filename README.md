## Requisitos
* Conferir a versão do Node.js 22 ou superior: node -v

## Como rodar o projeto baixado
* Instalação de todas as dependências indicadas no arquivo package.json
```
npm install ou npm i
```
* Compilar o arquivo TypeScript.
```
npx tsc
```
* Executar o arquivo gerado com Node.js.
```
node dist/index.js
```

## Sequência para criar o projeto
* Criar o arquivo package.json
```
npm init -y
```
* Instalar o Express para gerenciar as requisições, rotas e URLs, entre outras funcionalidades
```
npm i express
```
* Instalar os pacotes para suporte ao TypeScript
```
npm i @types/node @types/express -D
```
* Instalar o compilador do projeto com Typescript e reiniciar o projeto quando o arquivo é modificado
```
npm i --save-dev ts-node
```

* Gerar o arquivo de configuração para o TypeScript.
```
npx tsc --init
```

* Compilar o arquivo TypeScript.
```
npx tsc
```

* Executar o arquivo gerado com Node.js.
```
node dist/index.js
```

* Acessar o projeto no navegador pela URL: 
```
http://localhost:sua_rota_porta_definida/
```
## Como enviar e baixar os arquivos do GitHub

* Baixar os arquivos do Git.
```
git clone -b <branch_name> <repository_url> .
```

* Verificar em qual está branch.
```
git branch 
```

* Baixar as atualizações do GitHub.
```
git pull
```

* Adicionar todos os arquivos modificados no staging area - área de preparação.
```
git add .
```

* Commit representa um conjunto de alterações em um ponto específico da história do seu projeto, registra apenas as alterações adicionadas ao índice de preparação.
* O comando -m permite que insira a mensagem de commit diretamente na linha de comando.
```
git commit -m "Base projeto"
```

* Enviar os commits locais, para um repositório remoto.
```
git push <remote> <branch>
git push origin develop
```