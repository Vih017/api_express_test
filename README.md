# api_express_test
Projeto Test de uma API Express

## Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

### Stack
- Node.js
- MongoDB
- Swagger

### Dependências
- body-parser
- dotenv
- express
- mongoose
- nodemon
- swagger-jsdoc
- swagger-ui-express

## Executando o projeto

### Pré-requisitos
- Node.js, recomendado a versão v20.16.0
- MongoDB, recomendado a versão v6.0.2
- Git, recomendado a versão v2.46.0

### Clonando o repositório
```bash
git clone https://github.com/Vih017/api_express_test.git
```
### Instalando as dependências
```bash
cd api_express_test
npm install
```

### Configurando as variáveis de ambiente
```bash
cp .env-example .env
```
**Obs:** Preencha as variáveis de ambiente no arquivo `.env` com as informações necessárias.

### Iniciando o projeto
```bash
npm start
```
Ou com o nodemon:
```bash
npm run dev
```

### Acessando a aplicação
Acesse a aplicação através da url-base: `http://localhost:4000`

### Acessando a documentação da API
Acesse a documentação da API através do link: `http://localhost:4000/api-docs`

## Estrutura do projeto
O projeto utiliza a seguinte estrutura de pastas:
```
api_express_test
├── node_modules (será criado após a instalação das dependências)
├── src
│   ├── config
│   ├── controllers
│   ├── mappers
│   ├── models
│   ├── routes
│   ├── swagger
│   ├── validators
│   ├── app.js
│   ├── index.js
├── .env-example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
```

Onde:
- `node_modules`: Contém as dependências do projeto.
- `src`: Contém o código fonte da aplicação.
  - `config`: Contém as configurações da base de dados.
  - `controllers`: Contém os controladores da aplicação, responsáveis por receber as requisições, processar e devolver uma resposta.
  - `mappers`: Contém os mappers da aplicação, responsáveis por mapear os objetos de entrada e saída.
  - `models`: Contém os modelos da aplicação, responsáveis por definir a estrutura dos dados.
  - `routes`: Contém as rotas da aplicação, responsáveis por definir as rotas da API e os métodos HTTP.
  - `swagger`: Contém os arquivos de configuração do Swagger.
  - `validators`: Contém os validadores da aplicação, responsáveis por validar os dados de entrada.
  - `app.js`: Arquivo que define o servidor da aplicação, configurações, routers e middlewares.
  - `index.js`: Arquivo principal da aplicação, responsável por iniciar o servidor.
- `.env-example`: Arquivo de exemplo das variáveis de ambiente.
- `.gitignore`: Arquivo que define os arquivos e pastas que devem ser ignorados pelo Git.
- `package.json`: Arquivo que contém as informações do projeto e as dependências.
- `package-lock.json`: Arquivo que contém as versões exatas das dependências instaladas.
- `README.md`: Arquivo que contém a documentação do projeto.

## Autor

### Vitoria Ferreira
- Email: [vi.ferreira012\@gmail.com](mailto:vi.ferreira012@gmail.com)
- Github: [https://github.com/Vih017](https://github.com/Vih017)
- LinkedIn: [[https://www.linkedin.com/in/vitoria-ferreira-1627b21b3/](https://www.linkedin.com/in/vitoria-ferreira-1627b21b3/)]
