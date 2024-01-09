# Node.js Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Template for [Node.js](https://nodejs.org/) projects.

_This template is best suited for library authors. For backend development check
out the [Express Template](https://github.com/pfraces/express-template). For
frontend development check out the
[Vite Template](https://github.com/pfraces/vite-template)._

## Usage

Create a new `nodejs-template`-based project using
[degit](https://github.com/Rich-Harris/degit).

```sh
npx degit pfraces/nodejs-template/root project-name
```

_Replace `project-name` with the name of your project._

### Post-install

1. Change project name and description in `README.md` and `package.json`
2. `git init` repository
3. `npm install` dependencies

_It's important to `git init` before `npm install` so husky can install the git
hooks._

## What's included

### Editor settings

- [EditorConfig](https://editorconfig.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Version control

- [Git](https://git-scm.com/)
- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)

### Linters and formatters

- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [HTMLHint](https://htmlhint.com/)
- [markdownlint](https://github.com/DavidAnson/markdownlint-cli2)
- [Prettier](https://prettier.io/)

### Unit testing

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

## Project structure

```text
./
  src/
    index.js
    index.test.js
```

### `./`

The root of the project. It contains all the config files and directories.

### `src/`

Where the development happens. It contains the source files and its companion
unit tests.

`npm test` is configured to execute all `.spec.js` or `.test.js` files inside
the `src/` directory.

## Package entry points

The project is configured to export `src/index.js` as main entry point.

_Learn more:
[Package entry points](https://nodejs.org/api/packages.html#package-entry-points)._

## NPM scripts

```json
{
  "test": "mocha src/**/*.{test,spec}.js",
  "format": "prettier --write --cache .",
  "lint:js": "eslint .",
  "lint:md": "markdownlint-cli2 **/*.md !node_modules"
}
```
