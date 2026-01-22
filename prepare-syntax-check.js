const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';
const checkFile = 'c:\\My Web Sites\\letrafluidacopy\\temp-check.mjs';

try {
    fs.copyFileSync(targetFile, checkFile);
    console.log('File copied to .mjs for syntax check.');
} catch (e) {
    console.error('Copy failed:', e);
}
