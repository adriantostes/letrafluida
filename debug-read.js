const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

const content = fs.readFileSync(targetFile, 'utf8');
const startIdx = content.indexOf('e.jsxs("ul", { className: "space-y-3 mb-8"');

if (startIdx !== -1) {
    console.log('--- CONTENT START ---');
    console.log(content.substring(startIdx, startIdx + 5000)); // Ler 5000 chars
    console.log('--- CONTENT END ---');
} else {
    console.log('UL Start not found');
}
