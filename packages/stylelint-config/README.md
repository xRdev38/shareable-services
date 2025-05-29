# @xrdev_38/stylelint-config

Shareable Stylelint config for CSS and SCSS, with modern best practices.

## Features

- Standard and SCSS rule sets included
- Integrates Prettier and SCSS-specific plugins
- Ready for CSS-in-JS, pure CSS, and SCSS codebases

## Installation

```bash
pnpm add -D stylelint stylelint-scss stylelint-config-standard stylelint-config-recommended-scss stylelint-config-prettier-scss @xrdev_38/stylelint-config
```

## Usage

Extend your `stylelint.config.js`:
```js
module.exports = {
  extends: ["@xrdev_38/stylelint-config"]
}
```

---

> MIT License
