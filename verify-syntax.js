const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

const content = fs.readFileSync(targetFile, 'utf8');

console.log('--- FOOTER AREA ---');
const footerMark = 'e.jsxs("ul", { className: "space-y-3 mb-8"';
const footerIdx = content.indexOf(footerMark);
if (footerIdx !== -1) {
    console.log(content.substring(footerIdx, footerIdx + 1000));
} else {
    console.log('Footer UL not found');
}

console.log('\n--- MAIN PREMIUM AREA ---');
const mainMark = 'e.jsxs("ul", { className: "space-y-4"';
// Main Premium is probably the SECOND occurence of space-y-4? Or identified by button J.
// Let's search for button J and look back.
const btnJMark = 'onClick: j';
const btnJIdx = content.indexOf(btnJMark);
if (btnJIdx !== -1) {
    console.log(content.substring(btnJIdx - 3000, btnJIdx + 100));
} else {
    console.log('Button J not found');
}
