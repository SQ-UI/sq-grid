const fs = require('fs-extra');
const dir = './package';
const filesToCopy = ['sq-grid.css', 'sq-grid.scss', 'mixins.scss', 'README.md', 'package.json'];

fs.ensureDirSync(dir);

try {
    filesToCopy.forEach((fileName) => {
        let copyToDir = `${dir}`;

        if (fileName.indexOf('.css') > -1) {
            copyToDir += '/dist';
        }

        fs.copySync(fileName, `${copyToDir}/${fileName}`);
    });

    console.log('SUCCESS: Copied package files!');
} catch (err) {
    console.error(err);
}