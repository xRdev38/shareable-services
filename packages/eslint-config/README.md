# @xrdev_38/eslint-config

Shareable ESLint configuration for modern JavaScript and TypeScript projects.

## Features

- Strict linting for both JS and TS
- Integrates best-practice plugins (unicorn, import, promise, jest, sonarjs, jsdoc, prettier)
- Works out-of-the-box for web apps, Node.js, React, and more

## Installation

```bash
pnpm add -D eslint @xrdev_38/eslint-config
```

## Usage

Extend your `.eslintrc.js`:
```js
module.exports = {
  extends: ["@xrdev_38/eslint-config"]
}
```

## Peer dependencies

See `package.json` for required plugins.

## Customization

Feel free to override or add custom rules in your own `.eslintrc.js`.

---

> MIT License
