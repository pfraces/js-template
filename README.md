# Node Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code style: Prettier](https://img.shields.io/badge/Code_style-Prettier-ff69b4.svg)](https://prettier.io/)

Template for [Node.js](https://nodejs.org/) projects, tailored for library
authors.

## Usage

Create a new `node-template`-based project using
[degit](https://github.com/Rich-Harris/degit).

```sh
npx degit pfraces/node-template/root project-name
cd project-name
git init
npm install
```

_Replace `project-name` with the name of your project._

_**Keep in mind:** Run `git init` before `npm install` so husky can install its
git hooks._

### Post-install

- Change project name and description in `README.md` and `package.json`
- Change project name in `package-lock.json`

## What's included

### Editor settings

- [EditorConfig](https://editorconfig.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Version control

- [Git](https://git-scm.com/)
- [husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)

### Linters and formatters

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [markdownlint](https://github.com/DavidAnson/markdownlint-cli2)

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

## npm scripts

```json
{
  "test": "mocha src/**/*.{test,spec}.js",
  "format": "prettier --write --cache .",
  "lint:js": "eslint .",
  "lint:md": "markdownlint-cli2 **/*.md !node_modules"
}
```

## ES module imports

VSCode is configured to include file extensions from import path suggestions
(via `.vscode/settings.json`) which are required for ES modules.

### Absolute paths

The project is configured to support absolute paths from both Node.js (via
`imports` in `package.json`) and VSCode (via `jsconfig.json`).

To use absolute paths, prefix your import files with `#src/`. VSCode will give
you the right file suggestions.

_Learn more:_

- _[Node.js Subpath imports](https://nodejs.org/api/packages.html#subpath-imports)_
- _[VSCode jsconfig.json Reference](https://code.visualstudio.com/docs/languages/jsconfig)_

## Package entry points

The project is configured to export `src/index.js` as main entry point.

_Learn more:
[Package entry points](https://nodejs.org/api/packages.html#package-entry-points)._

## VSCode recommended extensions

- [editorconfig.editorconfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [davidanson.vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint)

VSCode is configured to recommend the previous extensions from the extensions
view (via `.vscode/extensions.json`).

## Publishing to npm

npm is configured to prevent accidental publication. To enable package
publication remove `{ "private": true }` from `package.json`.

### Licensing

> You should specify a license for your package so that people know how they are
> permitted to use it, and any restrictions you're placing on it.

Set the license in your `package.json`:

```json
{ "license": "<SPDX license identifier>" }
```

_Learn more:_

- _[Configuring npm - license](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#license)_
- _[Choose an open source license](https://choosealicense.com/)_
