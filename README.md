**_Utilizando Babel para Build_**

**_Utilizando Sucrase para Dev ECMASCRIPT6_**

**_Utilizando ESLINT_**
no visual studio instale o puguin do ESLINT\
no visual studio instale extensão Prettier - Code formatter\
no visual studio instale o plugin Prettier-Standard - JavaScript formatter\
iniciar eslint: .\node_modules\.bin\eslint --init \
guias de estilo: popular/standard\
abrir papeleta cmd: ctrl+shift+p procurar por setting.json adicionar a chave abaixo:\
"editor.formatOnSave" : true\
"prettier.eslintIntegration": true\
"[javascript]": {
"editor.defaultFormatter": "numso.prettier-standard-vscode"
}\
Para permitir o eslint corrigir de forma automatica após salvar erros baseado com o style guide escolhido.\

**_Utilizando Nodemon para reload Server_**

**_Utilizando Morgan para logs da requisição_**

**_Utilizando dotenv para configurar variaveis de ambiente_**

**_Utilizando cors para configurar os cors da requisição_**
