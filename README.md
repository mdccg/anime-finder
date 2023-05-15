# anime-snap

## Sumário

- [anime-snap](#anime-snap)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app foi desenvolvido com o objetivo de consumir duas APIs: a [Trace Moe](https://soruly.github.io/trace.moe-api/#/) e a [AniList](https://github.com/AniList/ApiV2-GraphQL-Docs). Ao consumir a API Trace Moe, o app consegue reconhecer os episódios e animes correspondentes às imagens inseridas pelos usuários. Além disso, utilizando a API AniList, é possível trazer informações detalhadas sobre cada um dos animes encontrados.

O app foi construído pensando em oferecer aos usuários uma experiência em português, facilitando a navegação e compreensão do conteúdo disponível. A interface do usuário é simples e intuitiva, permitindo que qualquer pessoa possa utilizá-la sem dificuldades. Foi utilizado um conjunto de tecnologias para garantir a qualidade e a eficiência do aplicativo. Entre elas, destacam-se o TypeScript e o Cypress, que ajudaram a criar um código mais seguro e robusto, além de permitirem a execução de testes automatizados.

Este foi o quinto repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial das atividades da unidade curricular Construção de Páginas Web IV.

| [&larr; Repositório anterior](https://github.com/mdccg/evolved-dictionary/) | [Próximo repositório &rarr;](https://github.com/mdccg/facebook-authentication-demo/) |
|-|-|

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| [Prototipagem](https://figma.fun/TFyq82) | [Figma](https://figma.com/) |
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Biblioteca de interface de usuário | [React](https://reactjs.org/) |
| Empacotador de módulos | [create-react-app](https://create-react-app.dev/) |
| Framework de teste | [Cypress](https://www.cypress.io/) |
| Base de dados | [Trace Moe](https://soruly.github.io/trace.moe-api/#/) |

Os créditos pelas mídias utilizadas estão disponíveis [aqui](./src/assets/README.md).

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;

2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Execute o Cypress através do seguinte comando:

Para npm:

```console
$ npm run cy:open
```

Para Yarn:

```console
$ yarn cy:open
```

6. O comando acima abrirá uma janela do Cypress solicitando que selecione o tipo de teste: E2E (teste de ponta a ponta) e Component (teste de componente). Selecione a opção desejada;

7. Selecionada a opção desejada, será solicitado que selecione um navegador web para executar os testes. É recomendado selecionar o navegador Electron, pois o mesmo foi desenvolvido pelo time do framework Cypress e contém ferramentas integradas que podem colaborar com a escrita dos testes unitários;

8. Selecionado o navegador web, os testes unitários, seja de ponta a ponta ou de componente, serão apresentados por diretório para que você os selecione para que sejam executados.
