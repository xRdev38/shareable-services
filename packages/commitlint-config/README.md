# @xrdev_38/commitlint-config

Commitlint configuration for enforcing Conventional Commits.

## Features

- Conventional Commit rules out of the box
- Ready for CI pipelines and local hooks

## Installation

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional @xrdev_38/commitlint-config
```

## Usage

In your `commitlint.config.js`:
```js
module.exports = {
  extends: ["@xrdev_38/commitlint-config"]
}
```

---

> MIT License
