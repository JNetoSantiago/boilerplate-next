This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Criar o Projeto Next

```
yarn create next-app boilerplate-next
```

## Integrar com o Typescript
```js
// Criar arquivo de configuração do typescript
touch tsconfig.json
```

```sh
# Adicionar os pacotes do typescript
yarn add --dev typescript @types/react @types/node
```

```js
// alterar o strict para true em tsconfig.json
"strict": true,
```

* Criar uma pasta src, e mover pages para a mesma.

## Configurar editorconfig
```
# editorconfig.org
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

## Configurar eslint

## Configurar pretier
```js
// Adicionar plugin do prettier no elslintrc.json
"extends": [
  "plugin:prettier/recommended"
]
```

## Instalar e configurar JEST

```
yarn add --dev jest babel-jest @babel/core @babel/preset-env @types/jest
```

```js
// adicionar em .eslintrc.json
{
  "env": {
        // ...
        "jest": true,
        "node": true
    },
    // ...
}
```

### Criar um arquivo de configuração do jest jest.config.js
### Criar um arquivo de configuração do babel .babelrc

