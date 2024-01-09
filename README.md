# Node.js Template

Template for [Node.js](https://nodejs.org/) projects.

_This template is best suited for library authors. For backend development check
out the [Express Template](https://github.com/pfraces/express-template). For
frontend development checkout the
[Vite Template](https://github.com/pfraces/vite-template)._

## Usage

Create a new `nodejs-template`-based project using
[degit](https://github.com/Rich-Harris/degit).

```sh
npx degit pfraces/nodejs-template/root my-project
```

### Post-install

1. Change project name and description in `README.md` and `package.json`
2. Install dependencies

## What's included

### Core settings

- [Git](https://git-scm.com/)
- [EditorConfig](https://editorconfig.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Linters and formatters

- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [HTMLHint](https://htmlhint.com/)
- [markdownlint](https://github.com/DavidAnson/markdownlint-cli2)
- [Prettier](https://prettier.io/)

## Decission making

### Module `exports` (`package.json`)

<https://nodejs.org/api/packages.html#package-entry-points>

> The `exports` provides a modern alternative to `main` allowing multiple entry
> points to be defined, conditional entry resolution support between
> environments, and preventing any other entry points besides those defined in
> `exports`. This encapsulation allows module authors to clearly define the
> public interface for their package.
>
> For new packages targeting the currently supported versions of Node.js, the
> `exports` field is recommended.
