const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Fix Footer Basic List (N)
    // We saw: ... Acesso Vitalício" })] }), e.jsx("button", { onClick: N
    // Should be: ... Acesso Vitalício" })] })] }), e.jsx("button", { onClick: N
    const nFix = /"Acesso Vitalício"\s*\}\)\s*\]\s*\}\)\s*,\s*e\.jsx\("button",\s*\{\s*onClick:\s*N/;
    if (nFix.test(content)) {
        console.log('Fixing Footer Basic (N) braces...');
        content = content.replace(nFix, '"Acesso Vitalício" })] })] }), e.jsx("button", { onClick: N');
    }

    // Fix Main Premium (j) - Just to be sure
    const jFix = /"BÔNUS EXCLUSIVO: Acesso Vitalício \+ Updates"\s*\}\)\s*\]\s*\}\)\s*,\s*e\.jsxs\("button",\s*\{\s*onClick:\s*j/;
    if (jFix.test(content)) {
        console.log('Fixing Main Premium (j) braces...');
        content = content.replace(jFix, '"BÔNUS EXCLUSIVO: Acesso Vitalício + Updates" })] })] }), e.jsxs("button", { onClick: j');
    }

    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Brace fix applied.');

} catch (err) {
    console.error(err);
}
