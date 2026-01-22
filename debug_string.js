const fs = require('fs');
const path = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';
try {
    const content = fs.readFileSync(path, 'utf8');

    // Check 1: Garrancho
    const idx = content.indexOf('garrancho');
    if (idx >= 0) {
        console.log("--- HERO RAW ---");
        console.log(JSON.stringify(content.substring(idx - 100, idx + 100)));
    } else {
        console.log("HERO NOT FOUND");
    }

    // Check 2: Beatriz Souza
    const idx2 = content.indexOf('Beatriz Souza');
    if (idx2 >= 0) {
        console.log("--- DEPOIMENTO RAW ---");
        console.log(JSON.stringify(content.substring(idx2 - 50, idx2 + 200)));
    } else {
        console.log("DEPOIMENTO NOT FOUND");
    }

    // Check 3: Letra Bonita e Rápida
    const idx3 = content.indexOf('Letra Bonita e Rápida');
    if (idx3 >= 0) {
        console.log("--- BENEFICIO RAW ---");
        console.log(JSON.stringify(content.substring(idx3 - 50, idx3 + 50)));
    }

} catch (e) { console.error(e); }
