const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. Target the previous "Elegant" highlight
    // Regex looking for the specific span we added in the last step
    // children: "App de Correção por Inteligência Artificial"

    const regex = /e\.jsx\("span",\s*\{[^}]*children:\s*"App de Correção por Inteligência Artificial"\s*\}\)/;

    // 2. New "Heavy Gold" Highlight
    // color: #D4AF37 (Metallic Gold)
    // font-weight: 800 (font-extrabold)
    // Uppercase: "APP DE CORREÇÃO..."
    // No underline.

    const newHighlight = `e.jsx("span", { className: "font-extrabold text-[#D4AF37] tracking-wide", children: "APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL" })`;

    // We need to replace the whole children array potentially IF I can match it, 
    // OR just the span if the text around it remains the same.
    // The previous step changed the children structure to: 
    // children:["O Primeiro...", newHighlight, ". Um protocolo..."]

    if (regex.test(content)) {
        content = content.replace(regex, newHighlight);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Aplicado Destaque Final (Negrito Dourado + Uppercase).');
    } else {
        console.warn('[WARN] Span anterior não encontrado. Tentando Regex mais amplo...');
        // Fallback for cases where maybe spacing changed
        const looseRegex = /children:\s*\["O Primeiro e Único Método do Brasil com ",.*?children:\s*"App de Correção por Inteligência Artificial".*?assinatura\."\]/s;

        // Reconstruct the whole children array string
        const replacement = `children:["O Primeiro e Único Método do Brasil com ", ${newHighlight}, ". Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]`;

        if (looseRegex.test(content)) {
            content = content.replace(looseRegex, replacement);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Aplicado Destaque Final via Regex Amplo.');
        } else {
            console.error('[ERRO] Não consegui localizar o elemento para atualização.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
