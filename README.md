# Shareable Frontend Configs ⚡

A collection of shareable, ready-to-use configuration packages for modern frontend projects.  
Standardize your code quality, formatting, linting, testing, and release workflow for JavaScript, TypeScript, CSS, and SCSS — all under the `@xrdev_38` npm scope.

---

## Packages & Their Purpose

### [@xrdev_38/eslint-config](./packages/eslint-config)
Shareable ESLint config for JS & TS, with best practices and recommended plugins (unicorn, import, promise, jest, sonarjs, jsdoc, prettier).

### [@xrdev_38/stylelint-config](./packages/stylelint-config)
Stylelint config for CSS and SCSS (standard and SCSS rules, Prettier integration).

### [@xrdev_38/prettier-config](./packages/prettier-config)
Opinionated Prettier code formatting config for consistent style across all codebases.

### [@xrdev_38/jest-config](./packages/jest-config)
Jest config for modern unit testing (JS/TS support, code coverage, SWC/Babel, JSDOM).

### [@xrdev_38/typescript-config](./packages/typescript-config)
TypeScript base config for strict, modern TS projects, perfect for apps and libraries.

### [@xrdev_38/commitlint-config](./packages/commitlint-config)
Commitlint config to enforce Conventional Commits (for clean commit history and release automation).

### [@xrdev_38/commitizen-config](./packages/commitizen-config)
Commitizen adapter for Conventional Commits, helps you write standard commits interactively.

### [@xrdev_38/lint-staged-config](./packages/lint-staged-config)
Lint-staged config for efficient pre-commit linting and formatting (JS, TS, CSS, SCSS, JSON, MD).

### [@xrdev_38/postcss-config](./packages/postcss-config)
PostCSS config with preset-env, autoprefixer, and cssnano for CSS optimization.

### [@xrdev_38/semantic-release-config](./packages/semantic-release-config)
Semantic Release config for automated changelogs and npm publishing.

### [@xrdev_38/webpack-config](./packages/webpack-config)
Webpack config for building modern JS/TS/CSS/SCSS projects, easy to extend.

---

## Quick Start

1. **Install any config you need:**  
   ```bash
   pnpm add -D @xrdev_38/eslint-config
   ```
2. **Extend in your project's config file:**  
   _Example for ESLint:_
   ```js
   // .eslintrc.js
   module.exports = {
     extends: ["@xrdev_38/eslint-config"]
   }
   ```
3. **Repeat for other configs as needed (see below).**

---

## How To Use Each Config

Each config is documented in its own package (see `packages/*/README.md`).  
Refer to each README for peer dependencies, usage examples, and customization tips.

---

## Monorepo Structure

This repository uses [Lerna](https://lerna.js.org/) and [pnpm workspaces](https://pnpm.io/workspaces) for multi-package management.

```
/
├── packages/
│   ├── eslint-config/
│   ├── stylelint-config/
│   ├── prettier-config/
│   └── ...other configs
├── package.json
├── lerna.json
└── README.md
```

---

## Contributing

Contributions, feedback, and suggestions are welcome!  
Feel free to open issues or submit PRs to add new configs, plugins, or improvements.

---

**License:** MIT

---

## Links

- [All packages on npm](https://www.npmjs.com/org/xrdev_38)
- [Project homepage on GitHub](https://github.com/xRdev38/shareable-services)
