# @xrdev_38/jest-config

Shareable Jest configuration for JavaScript and TypeScript unit testing.

## Features

- Works for both JS and TS projects
- Modern transformer setup (SWC, Babel)
- Includes code coverage and JSDOM

## Installation

```bash
pnpm add -D jest @swc/jest ts-jest @xrdev_38/jest-config
```

## Usage

Add to your `jest.config.js`:
```js
module.exports = {
  ...require("@xrdev_38/jest-config")
}
```

---

> MIT License
