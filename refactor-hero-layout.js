const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Regex para encontrar o array children atual do Hero
    // Procura por: children:["O Primeiro e Único ...", e.jsx("span", ...), ". Um protocolo ..."]
    // Vamos usar um pattern que pega do inicio ao fim do array

    const startPattern = 'children:["O Primeiro e Único Método do Brasil com ",';
    // O final do array children tem o texto final
    const endPattern = 'Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]';

    // Como tem código no meio (jsx), vamos tentar localizar inicio e fim e substituir o intervalo
    const startIndex = content.indexOf('children:["O Primeiro e Único Método do Brasil com ",');
    const endIndex = content.indexOf('Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]', startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
        const fullEndIndex = endIndex + 'Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]'.length;

        // Novo Badge Estilo Bloco
        const badgeBlock = `e.jsx("span", { className: "block w-fit mx-auto my-6 py-3 px-6 rounded-md text-sm md:text-xl font-black text-[#FFD700] bg-[#1e293b] border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.25)] transform -rotate-1 hover:rotate-0 transition-transform tracking-widest", children: "APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL" })`;

        // Nova Estrutura
        const newContent = `children:["O Primeiro e Único Método do Brasil com", ${badgeBlock}, "Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]`;

        // Realizar a substituição manual via string slice para ser cirúrgico
        const before = content.substring(0, startIndex);
        const after = content.substring(fullEndIndex);

        content = before + newContent + after;

        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Layout Hero Refatorado para Bloco Centralizado.');
    } else {
        console.warn('[WARN] Padrão exato não encontrado. Tentando Regex flexível...');

        // Regex de emergência
        const regex = /children:\s*\["O Primeiro e Único Método do Brasil com ",.*?,.*?"\. Um protocolo biomecânico.*?assinatura\."\]/s;

        if (regex.test(content)) {
            // Recriar badge
            const badgeBlock = `e.jsx("span", { className: "block w-fit mx-auto my-6 py-3 px-6 rounded-md text-sm md:text-xl font-black text-[#FFD700] bg-[#1e293b] border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.25)] transform -rotate-1 hover:rotate-0 transition-transform tracking-widest", children: "APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL" })`;
            const replacement = `children:["O Primeiro e Único Método do Brasil com", ${badgeBlock}, "Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]`;

            content = content.replace(regex, replacement);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Layout Hero Refatorado via Regex.');
        } else {
            console.error('[ERRO] Falha total na localização do Hero text.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
