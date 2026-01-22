const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === DEFINIÇÕES ===

    // Conteúdo original da lista "Não é mágica" (que foi substituida errada)
    // Recuperado do histórico
    const originalTechniqueList = `e.jsxs("li", { className: "flex gap-3", children: [e.jsx("div", { className: "bg-blue-100 p-2 rounded-full text-blue-600 h-fit", children: e.jsx(q, { size: 20 }) }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-bold text-gray-900", children: "Coordenação Motora Fina" }), e.jsx("p", { className: "text-sm text-gray-500", children: "Desbloqueie os movimentos do punho que deixam sua letra trêmula." })] })] }), e.jsxs("li", { className: "flex gap-3", children: [e.jsx("div", { className: "bg-purple-100 p-2 rounded-full text-purple-600 h-fit", children: e.jsx(T, { size: 20 }) }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-bold text-gray-900", children: "Memória Muscular" }), e.jsx("p", { className: "text-sm text-gray-500", children: "Exercícios repetitivos inteligentes que automatizam a escrita bonita." })] })] })`;

    // Novo Conteúdo Premium (que eu quero inserir no lugar certo)
    // Check Azul
    const checkIcon = `e.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { className: "text-blue-600 w-4 h-4", strokeWidth: 3 }) })`;

    // Itens
    const msg1 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "font-bold text-gray-800", children: "Tudo do Pacote Básico" })] })`;
    const msg2 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "font-bold text-gray-800", children: "O Método Letra Fluida (Completo)" })] })`;
    const msg3 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Módulo 1: O Alfabeto Executivo" })] })`;
    const msg4 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Módulo 2: Técnicas de Ligações e Fluidez" })] })`;
    const masterclassCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "🔥" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "MASTERCLASS: A ASSINATURA DE UM CEO" })] })`;
    const msg5 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Protocolo Biomecânico (Fim da Tensão)" })] })`;
    const msg6 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Caderno de Treino Diário (Para Imprimir)" })] })`;
    const appIaCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-xl", children: "🤖" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "text-[10px] uppercase font-bold text-[#8A7350] tracking-widest leading-none mb-0.5", children: "LANÇAMENTO" }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] leading-tight", children: "App Corretor IA (Acesso Vitalício)" })] })] })`;
    const msg7 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Guia Anti-Tensão (Soltar a mão)" })] })`;
    const msg8 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Biblioteca de Estilos (9 Tipos de Letras)" })] })`;
    const msg9 = `e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [${checkIcon}, e.jsx("span", { className: "text-base text-gray-800", children: "Guia de Canetas & Papéis Premium" })] })`;
    const letteringCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx(te, { size: 16, className: "text-white fill-white" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS: CALIGRAFIA ARTÍSTICA & LETTERING" })] })`;
    const exclusiveCard = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "💎" }) }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS EXCLUSIVO:" }), e.jsx("span", { className: "text-xs font-medium text-[#1e293b] leading-tight", children: "Benefício Exclusivo: Acesso vitalício! + Atualizações mensais" })] })] })`;

    const newPremiumListContent = [msg1, msg2, msg3, msg4, masterclassCard, msg5, msg6, appIaCard, msg7, msg8, msg9, letteringCard, exclusiveCard].join(', ');


    // === 1. RESTAURAR LISTA 'SPACE-Y-4' (CORREÇÃO DO ERRO) ===
    // Procura pela lista que contém "Tudo do Pacote Básico" mas tem class "space-y-4" (que é a errada)
    const wrongUlRegex = /e\.jsxs\("ul",\s*\{\s*className:\s*"space-y-4",\s*children:\s*\[[^\]]*Tudo do Pacote Básico[^\]]*\]\s*\}\)/;

    if (wrongUlRegex.test(content)) {
        content = content.replace(wrongUlRegex, `e.jsxs("ul", { className: "space-y-4", children: [${originalTechniqueList}] })`);
        console.log('[OK] Lista técnica restaurada (Erro corrigido).');
    } else {
        console.warn('[WARN] Lista técnica corrompida não encontrada. Verifique se o erro persiste.');
    }


    // === 2. APLICAR NOVA LISTA NO LUGAR CORRETO (SPACE-Y-3 MB-8) ===
    const rightUlRegex = /e\.jsxs\("ul",\s*\{\s*className:\s*"space-y-3 mb-8",\s*children:\s*\[([\s\S]*?)\]\s*\}\)/;

    if (rightUlRegex.test(content)) {
        // Verifica se já não foi aplicado (evitar loop se rodar 2x)
        if (!content.includes('Tudo do Pacote Básico" })] }), e.jsxs("li", { className: "flex gap-4 items-start text-gray-700", children: [e.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-100')) {
            content = content.replace(rightUlRegex, `e.jsxs("ul", { className: "space-y-3 mb-8", children: [${newPremiumListContent}] })`);
            console.log('[OK] Lista Premium atualizada no lugar correto.');
        } else {
            console.log('[INFO] Lista Premium já parece atualizada.');
        }
    } else {
        console.error('[ERRO] Lista Premium original (space-y-3) não encontrada.');
    }

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
