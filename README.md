# 🔎 CityBook

[🌐 Live Demo](https://citybook.vercel.app/)

The search engine for books __and__ cities you never knew you needed!

## 🧑‍💻 Setup

In order to run CityBook, you'll need to have the following installed on your system:

* [Node](https://nodejs.org/en/download/) - v19.6.0
* [NPM](https://nodejs.org/en/download/) - 9.4.0

_If_ you have [`nvm`](https://github.com/nvm-sh/nvm) installed (__not required__), you can run `nvm use` in the project root to use the specified node version.

With the above dependencies in place, run the following in the project root:

```
npm install
```

## 🛠 Developing
To start the dev server, run the following in the project root:

```
npm run dev
```

This will give you a URL to go to for previewing CityBook.

You can start making changes! Any changes made should be immediately visible on the preview page.

## 🧪 Testing
CityBook uses [Vitest](https://vitest.dev/). You can run the test suite with:

```
npm run test:ui
```

If you prefer CLI only output:
```
npm test
```

Pull Requests and commits to `main` will be tested automatically using [GitHub Actions](https://github.com/features/actions).

## 🏗 Building
The following command will build the project for production:

```
npm run build
```

Once built, all the artefacts will be inside the `dist/` folder.