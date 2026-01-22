const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    const content = fs.readFileSync(targetFile, 'utf8');

    // 1. Check for suspicious dots
    // Looking for dot not preceded by digit/word char? Or dot surrounded by spaces?
    // Unexpected token . usually means `var .` or `. property` without object?

    // We look for patterns like ` , .` or ` [ . `
    const suspiciousDot = /[\s,\[(]\.[\s\w]/g;
    let match;
    let count = 0;
    while ((match = suspiciousDot.exec(content)) !== null) {
        console.log(`Suspicious dot at index ${match.index}: "${match[0]}"`);
        console.log(`Context: ${content.substring(match.index - 20, match.index + 20)}`);
        count++;
        if (count > 5) break;
    }

    // 2. Check for double commas
    const doubleComma = /,,/g;
    while ((match = doubleComma.exec(content)) !== null) {
        console.log(`Double comma at index ${match.index}`);
        console.log(`Context: ${content.substring(match.index - 20, match.index + 20)}`);
        count++;
        if (count > 10) break;
    }

    // 3. Count Keywords
    const bonusCount = (content.match(/BÔNUS EXCLUSIVO/g) || []).length;
    console.log(`\n'BÔNUS EXCLUSIVO' occurrences: ${bonusCount}`);

    const comboCount = (content.match(/Combo \+300/g) || []).length;
    console.log(`'Combo +300' occurrences: ${comboCount}`);

    const robotCount = (content.match(/App Corretor IA/g) || []).length;
    console.log(`'App Corretor IA' occurrences: ${robotCount}`);


    // 4. Dump Main Premium List Context again to be sure
    // Search for Button J which follows content
    const btnJIdx = content.indexOf('onClick: j');
    if (btnJIdx !== -1) {
        console.log(`\nMain Premium Pre-Button Context:`);
        // Show 200 chars before button
        console.log(content.substring(btnJIdx - 200, btnJIdx + 50));
    } else {
        console.log(`Button J not found!`);
        // Fallback: search for unique string from my injection
        const diamondIdx = content.indexOf('Benefício Exclusivo: Acesso vitalício');
        if (diamondIdx !== -1) {
            console.log(`Diamond Context:`);
            console.log(content.substring(diamondIdx, diamondIdx + 200));
        }
    }

} catch (e) {
    console.log(e);
}
