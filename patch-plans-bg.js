const fs = require('fs');
const path = require('path');

const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Target string original
    const targetString = 'e.jsxs("section", { id: "plans", className: "py-24 bg-[#e5d5b7] relative overflow-hidden scroll-mt-20"';

    // Replacement string (bg-[#F9F5EB])
    const replacementString = 'e.jsxs("section", { id: "plans", className: "py-24 bg-[#F9F5EB] relative overflow-hidden scroll-mt-20"';

    if (content.includes(targetString)) {
        content = content.replace(targetString, replacementString);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Background da seção de Planos atualizado para #F9F5EB');
    } else {
        // Tentar buscar variações de espaçamento se a busca exata falhar
        // Criar RegEx para flexibilidade
        // "section", { id: "plans", className: "py-24 bg-[#e5d5b7]
        const regex = /e\.jsxs\("section",\s*\{\s*id:\s*"plans",\s*className:\s*"py-24\s+bg-\[#e5d5b7\]/g;
        if (regex.test(content)) {
            content = content.replace(regex, 'e.jsxs("section", { id: "plans", className: "py-24 bg-[#F9F5EB]');
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Background atualizado via Regex');
        } else {
            console.error('[ERRO] String alvo não encontrada.');
            // Dump de debug se falhar
            const indexPlan = content.indexOf('id: "plans"');
            if (indexPlan !== -1) {
                console.log('Contexto encontrado:', content.substring(indexPlan - 50, indexPlan + 100));
            }
        }
    }

} catch (err) {
    console.error('Erro ao ler/escrever arquivo:', err);
}
