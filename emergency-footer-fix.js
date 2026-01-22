const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === FOOTER BASIC OVERRIDE ===
    // Replace Footer Basic List with Safe Items (Combo +300 etc)
    const safeFooterItems = [
        `e.jsxs("li", { className: "flex gap-3 text-sm text-gray-600", children: [e.jsx("span", { children: "✅" }), " Combo +300 atividades"] })`,
        `e.jsxs("li", { className: "flex gap-3 text-sm text-gray-600", children: [e.jsx("span", { children: "✅" }), " Módulo de coordenação motora"] })`,
        `e.jsxs("li", { className: "flex gap-3 text-sm text-gray-600", children: [e.jsx("span", { children: "✅" }), " Módulo de alfabeto cursivo"] })`,
        `e.jsxs("li", { className: "flex gap-3 text-sm text-gray-600", children: [e.jsx("span", { children: "✅" }), " Módulo de lettering"] })`
    ];
    const safeFooterUl = `e.jsxs("ul", { className: "space-y-3 mb-8", children: [${safeFooterItems.join(', ')}] })`;

    // Regex: Find space-y-3 mb-8 literal followed by Button N
    // This targets the Footer Basic list
    const footerBasicRegex = /e\.jsxs\("ul",\s*\{\s*className:\s*"space-y-3 mb-8"[\s\S]*?(?=,\s*e\.jsx\("button",\s*\{\s*onClick:\s*N)/;

    if (footerBasicRegex.test(content)) {
        content = content.replace(footerBasicRegex, safeFooterUl);
        console.log('[OK] Footer Basic substituído por versão segura.');
    } else {
        console.log('[WARN] Footer Basic não encontrado.');
    }

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro Fatal:', err);
}
