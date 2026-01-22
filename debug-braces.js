const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    const content = fs.readFileSync(targetFile, 'utf8');
    const idx = content.indexOf('onClick: j');

    if (idx !== -1) {
        // Read 1000 chars before button
        const snippet = content.substring(idx - 1000, idx);
        console.log('--- PRE-BUTTON SNIPPET ---');
        console.log(snippet);
        console.log('--- END SNIPPET ---');

        // Count [ { ( ) } ] in snippet
        const counts = { '{': 0, '}': 0, '(': 0, ')': 0, '[': 0, ']': 0 };
        for (const char of snippet) {
            if (counts[char] !== undefined) counts[char]++;
        }
        console.log('Counts:', counts);
    } else {
        console.log('Button J not found');
    }

} catch (e) {
    console.error(e);
}
