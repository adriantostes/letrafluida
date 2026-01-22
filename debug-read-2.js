const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

const content = fs.readFileSync(targetFile, 'utf8');
const ulMarker = 'e.jsxs("ul", { className: "space-y-3 mb-8"';
const startIdx = content.indexOf(ulMarker);

if (startIdx !== -1) {
    console.log('--- CONTENT TAIL START ---');
    // Start reading from 4000 chars after UL start (skipping the new list)
    console.log(content.substring(startIdx + 4000, startIdx + 8000));
    console.log('--- CONTENT TAIL END ---');
} else {
    console.log('UL Start not found');
}
