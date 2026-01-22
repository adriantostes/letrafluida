const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === DEFINIÇÃO DOS BLOCOS ===

    // Checkmark Azul Genérico (usado para itens normais)
    const checkIcon = `e.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { className: "text-blue-600 w-4 h-4", strokeWidth: 3 }) })`;

    // 1. Itens Iniciais
    const msg1 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "font-bold text-gray-800", children: "Tudo do Pacote Básico" })] })`;
    const msg2 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "font-bold text-gray-800", children: "O Método Letra Fluida (Completo)" })] })`;
    const msg3 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Módulo 1: O Alfabeto Executivo" })] })`;
    const msg4 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Módulo 2: Técnicas de Ligações e Fluidez" })] })`;

    // 2. Masterclass (Card Amarelo)
    const masterclassCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "🔥" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "MASTERCLASS: A ASSINATURA DE UM CEO" })] })`;

    // 3. Itens Intermediários 1 (Protocolo e Caderno)
    const msg5 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Protocolo Biomecânico (Fim da Tensão)" })] })`;
    const msg6 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Caderno de Treino Diário (Para Imprimir)" })] })`;

    // 4. NOVO: App Corretor IA (Card Amarelo)
    // Layout especial: Row com Icone Robo e Coluna de Texto (Eyebrow + Title)
    // Ícone: 🤖 (Robô)
    const appIaCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-xl", children: "🤖" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "text-[10px] uppercase font-bold text-[#8A7350] tracking-widest leading-none mb-0.5", children: "LANÇAMENTO" }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] leading-tight", children: "App Corretor IA (Acesso Vitalício)" })] })] })`;

    // 5. Itens Intermediários 2
    const msg7 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Guia Anti-Tensão (Soltar a mão)" })] })`;
    const msg8 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Biblioteca de Estilos (9 Tipos de Letras)" })] })`;
    const msg9 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Guia de Canetas & Papéis Premium" })] })`;

    // 6. Bônus Lettering (Card Amarelo)
    const letteringCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx(te, { size: 16, className: "text-white fill-white" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS: CALIGRAFIA ARTÍSTICA & LETTERING" })] })`;

    // 7. NOVO: Bônus Exclusivo Vitalício (Card Amarelo com Diamante)
    const exclusiveCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "💎" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS EXCLUSIVO:" }), e.jsx("span", { className: "text-xs font-medium text-[#1e293b] leading-tight", children: "Benefício Exclusivo: Acesso vitalício! + Atualizações mensais" })] })] })`;


    // === MONTAGEM DA LISTA NOVA ===
    const newListContent = [msg1, msg2, msg3, msg4, masterclassCard, msg5, msg6, appIaCard, msg7, msg8, msg9, letteringCard, exclusiveCard].join(', ');


    // === PROCESSO DE SUBSTITUIÇÃO ===

    // Precisamos encontrar o UL inteiro do Premium.
    // Ele começa DEPOIS do preço "R$ 39,90" e "Acesso Vitalício" (no código, isso é text-xs mt-3 uppercase tracking-wider).
    // E antes do botão "SIM! QUERO MUDAR MINHA LETRA".

    // A estrutura é: e.jsxs("ul", { className: "space-y-4", children: [ ... ] })

    // O conteúdo INTERNO (children) é o que vamos substituir.
    // Vou usar regex para capturar o miolo do UL.
    // O UL do Premium tem className="space-y-4" e children com muitos itens.
    // O UL do Básico tem className="space-y-3...".

    // Regex: e.jsxs("ul", { className: "space-y-4", children: [ (CAPTURE_GROUP) ] })

    const ulRegex = /e\.jsxs\("ul",\s*\{\s*className:\s*"space-y-4",\s*children:\s*\[([\s\S]*?)\]\s*\}\)/;

    if (ulRegex.test(content)) {
        content = content.replace(ulRegex, `e.jsxs("ul", { className: "space-y-4", children: [${newListContent}] })`);
        console.log('[OK] Lista Premium reconstruída com sucesso.');
        fs.writeFileSync(targetFile, content, 'utf8');
    } else {
        console.error('[ERRO] Não foi possível localizar o UL do Premium.');
        // Log para debug
        // console.log(content.substring(content.indexOf("PACOTE PREMIUM"), content.indexOf("SIM! QUERO")));
    }

} catch (err) {
    console.error('Erro:', err);
}
