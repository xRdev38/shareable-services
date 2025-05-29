# @xrdev_38/lint-staged-config

Lint-staged configuration for running linters and formatters on staged files.

## Features

- Automatically lints and formats code before every commit
- Supports JS, TS, CSS, SCSS, JSON, Markdown

## Installation

```bash
pnpm add -D lint-staged prettier eslint stylelint @xrdev_38/lint-staged-config
```

## Usage

In your `lint-staged.config.js`:
```js
module.exports = require("@xrdev_38/lint-staged-config");
```

---

> MIT License
