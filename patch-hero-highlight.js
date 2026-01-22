const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Regex Robusto
    // Busca por: children: "O Primeiro e Único ... assinatura."
    const regex = /children:\s*"O Primeiro e Único Método do Brasil com App de Correção por Inteligência Artificial\. Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura\."/;

    // Novo Elemento
    const highlightElement = 'e.jsx("span", { className: "font-black text-[#1e293b] bg-[#8A7350]/20 px-1 rounded-sm border-b-2 border-[#8A7350]", children: "App de Correção por Inteligência Artificial" })';
    const replacement = `children:["O Primeiro e Único Método do Brasil com ", ${highlightElement}, ". Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]`;

    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Destaque aplicado com Regex Robusto.');
    } else {
        console.error('[ERRO] Ainda não encontrado. Tentando match ultra-flexível...');
        // Match apenas pelo inicio e fim
        const regex2 = /children:\s*"O Primeiro e Único Método.*?assinatura\."/;
        if (regex2.test(content)) {
            content = content.replace(regex2, replacement);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Destaque aplicado com Regex Ultra-Flexível.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
