const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    const content = fs.readFileSync(targetFile, 'utf8');

    // Patterns of syntax errors
    const patterns = [
        { name: 'Comma followed by Brace', regex: /,\s*\}/g },
        { name: 'Bracket followed by Brace', regex: /\[\s*\}/g },
        { name: 'Double Brace', regex: /\}\s*\}/g }, // Often invalid inside JSX structure unless closing blocks
        { name: 'Unmatched Parenthesis', regex: /\)\s*\}/g } // Valid: ) } (if functional)
    ];

    patterns.forEach(p => {
        let match;
        while ((match = p.regex.exec(content)) !== null) {
            console.log(`Found ${p.name} at ${match.index}: "${match[0]}"`);
            console.log(`Context: ${content.substring(match.index - 50, match.index + 50)}`);
        }
    });

} catch (e) {
    console.error(e);
}
