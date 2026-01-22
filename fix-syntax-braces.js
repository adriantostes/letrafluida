const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Fix potential double closing blocks
    const doubleClosing = /\]\s*\}\)\s*,\s*\]\s*\}\)\s*,\s*e\.(jsx|jsxs)\("button"/g;

    if (doubleClosing.test(content)) {
        console.log('Found double closing block pattern!');
        content = content.replace(doubleClosing, (match, p1) => {
            return `] }), e.${p1}("button"`;
        });
    } else {
        console.log('Double closing pattern not found with full regex. Trying simpler one.');
        // Try even simpler: ] }), ] }),
        const stray = /\]\s*\}\)\s*,\s*\]\s*\}\)\s*,/g;
        // Wait, be careful. 
        // Let's just look at the onClick: N area specifically.
    }

    // Targeted fix for the N area
    const nArea = /"Acesso Vitalício"\s*\}\)\s*\]\s*\}\)\s*,?\s*\]\s*\}\)\s*,?\s*e\.jsx\("button",\s*\{\s*onClick:\s*N/;
    if (nArea.test(content)) {
        console.log('Fixed N area syntax!');
        content = content.replace(nArea, '"Acesso Vitalício" })] }), e.jsx("button", { onClick: N');
    }

    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Syntax fix applied.');

} catch (err) {
    console.error(err);
}
