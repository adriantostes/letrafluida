const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: O span anterior (Dourado metálico #D4AF37)
    // children: "APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"

    // Regex para capturar o span existente
    const regex = /e\.jsx\("span",\s*\{[^}]*children:\s*"APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"\s*\}\)/;

    // Novo Elemento com Dourado Vibrante (#FFD700)
    // Adicionei style={{color: "#FFD700"}} para garantir override de qualquer classe pai.

    const newHighlight = `e.jsx("span", { className: "font-extrabold tracking-wide", style: { color: "#FFD700" }, children: "APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL" })`;

    if (regex.test(content)) {
        content = content.replace(regex, newHighlight);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Aplicado Dourado Vibrante (#FFD700) com style inline.');
    } else {
        console.warn('[WARN] Span anterior não encontrado. Tentando busca por texto...');
        // Fallback
        const looseRegex = /e\.jsx\("span",\s*\{[^}]*APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"\s*\}\)/;
        if (looseRegex.test(content)) {
            content = content.replace(looseRegex, newHighlight);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Aplicado Dourado Vibrante via Loose Regex.');
        } else {
            console.error('[ERRO] Não consegui localizar o elemento para atualização de cor.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
