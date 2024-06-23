/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(process.env.INIT_CWD, 'commitlint.config.js');
const fileConfigObject = {
    extends: '@xrdev_38/commitlint-config',
};
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(
        filePath,
        `module.exports = ${JSON.stringify(fileConfigObject, undefined, 2)}`
    );
}