const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: O array de children modificado no passo anterior (Selo Pílula)
    // Padrão anterior: children:["O Primeiro e Único ...", e.jsx("span", { ... "APP DE CORREÇÃO..."}), "Um protocolo ..."]
    // Vamos substituir toda a estrutura 'children:[ ... ]' do Hero description.

    // Como o conteúdo varia, vou usar um regex que pega o inicio e o fim conhecidos.

    // Inicio: children:["O Primeiro e Único Método do Brasil com
    // Fim: respeito em cada assinatura."]

    const regex = /children:\s*\[\s*"O Primeiro e Único Método do Brasil com",\s*e\.jsx\("span",\s*\{[^}]*APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"\s*\}\),\s*"Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura\."\s*\]/s;

    // Novo Design (Opção 1): Texto Corrido, Destaque Tipográfico
    // Usaremos a cor #8A7350 (Ouro Escuro do Tema) para garantir leitura no fundo claro. 
    // #FFD700 (Amarelo) sumiria no bege.

    const newHighlight = `e.jsx("span", { className: "font-bold text-[#8A7350] underline decoration-[#8A7350]/30 underline-offset-4", children: "App de Correção por Inteligência Artificial" })`;

    const newContent = `children:["O Primeiro e Único Método do Brasil com ", ${newHighlight}, ". Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."]`;

    if (regex.test(content)) {
        content = content.replace(regex, newContent);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Aplicado Opção 1: Destaque Elegante (Tipografia).');
    } else {
        console.warn('[WARN] Padrão exato não encontrado. Tentando Regex de Emergência...');

        // Regex mais agressivo caso haja pequenas variações de espaço ou vírgula
        const looseRegex = /children:\s*\["O Primeiro e Único Método do Brasil com",.*?APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL.*?assinatura\."\]/s;

        if (looseRegex.test(content)) {
            content = content.replace(looseRegex, newContent);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Aplicado Opção 1 via Loose Regex.');
        } else {
            console.error('[ERRO] Não foi possível encontrar o bloco Hero para reverter.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
