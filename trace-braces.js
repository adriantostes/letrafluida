const fs = require('fs');

function checkBalancing(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let stack = [];
    let lines = content.split('\n');
    let paren = 0;
    let brace = 0;
    let bracket = 0;

    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        if (char === '(') paren++;
        else if (char === ')') paren--;
        else if (char === '{') brace++;
        else if (char === '}') brace--;
        else if (char === '[') bracket++;
        else if (char === ']') bracket--;

        if (paren < 0) { console.log(`UNBALANCED PAREN at char ${i}: ${content.substring(i - 20, i + 20)}`); paren = 0; }
        if (brace < 0) { console.log(`UNBALANCED BRACE at char ${i}: ${content.substring(i - 20, i + 20)}`); brace = 0; }
        if (bracket < 0) { console.log(`UNBALANCED BRACKET at char ${i}: ${content.substring(i - 20, i + 20)}`); bracket = 0; }
    }
    console.log(`Final counts - Paren: ${paren}, Brace: ${brace}, Bracket: ${bracket}`);
}

checkBalancing('c:/My Web Sites/letrafluidacopy/letrafluida.com.br/assets/index-BY5pObJn.js');
