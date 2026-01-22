const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: O span "Bloco" criado no passo anterior
    // Regex flexível para pegar o elemento inteiro
    // children: "APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"

    // Vou substituir o objeto de propriedades inteiro
    // Busca: e.jsx("span", { ... transform -rotate-1 ... "APP ... " })

    const regex = /e\.jsx\("span",\s*\{\s*className:\s*"[^"]*block w-fit[^"]*",\s*children:\s*"APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"\s*\}\)/;

    // Novo Design "Pill" (Selo Tecnológico)
    // - rounded-full : Pílula
    // - py-3 px-8 : Mais ar, mais elegante
    // - text-sm md:text-base : Tamanho equilibrado (não gritante gigante)
    // - tracking-[0.15em] : Espaçamento de letras premium
    // - bg-[#1e293b] : Azul Profundo
    // - text-[#FFD700] : Dourado Puro
    // - shadow-lg : Profundidade
    // - animation : Vamos tirar a rotação tosca, deixar clean.

    const pillBadge = `e.jsx("span", { className: "block w-fit mx-auto my-6 py-3 px-8 rounded-full text-xs md:text-sm font-bold tracking-[0.15em] text-[#FFD700] bg-[#1e293b] border border-[#FFD700]/50 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.5)] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:-translate-y-1 transition-all duration-300", children: "✨ APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL ✨" })`;
    // Adicionei os brilhos ✨ subtis porque o código permite string emojis e reforça o "Mágico".

    if (regex.test(content)) {
        content = content.replace(regex, pillBadge);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Hero Refinado para Formato Pílula (Selo Tech).');
    } else {
        console.warn('[WARN] Elemento anterior não encontrado. Tentando busca por texto...');
        // Fallback
        const textRegex = /(children:\s*"APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL")/;
        // Se achar o texto mas não o elemento todo, é perigoso substituir só o children sem classes.
        // Vou assumir que o regex falhou por espaços.
        // Tentar regex mais amplo para as classes
        const looseRegex = /e\.jsx\("span",\s*\{[^}]*APP DE CORREÇÃO POR INTELIGÊNCIA ARTIFICIAL"\s*\}\)/;
        if (looseRegex.test(content)) {
            content = content.replace(looseRegex, pillBadge);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Hero Refinado (Loose Regex).');
        } else {
            console.error('[ERRO] Não consegui localizar o bloco para refinamento.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
