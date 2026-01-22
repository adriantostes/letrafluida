const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === RECONSTRUIR LISTA PREMIUM ===
    const checkIcon = `e.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { className: "text-blue-600 w-4 h-4", strokeWidth: 3 }) })`;

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
    const newUlBlock = `e.jsxs("ul", { className: "space-y-3 mb-8", children: [${newPremiumListContent}] })`;

    // === SUBSTITUIÇÃO SEGURA (LIMPEZA DE LIXO) ===
    // Encontra desde o início do UL Premium até o começo do botão de checkout (j)
    // Isso engloba o UL novo (e possivelmente o lixo à direita) e substitui por um UL limpo.

    // Procura: e.jsxs("ul", { className: "space-y-3 mb-8" ... [ATÉ] ... e.jsxs("button", { onClick: j
    // Nota: O arquivo minificado pode ter variações de espaço, então uso \s*
    // O botão pode ser e.jsx ou e.jsxs. No dump apareceu e.jsxs("button"

    const cleanupRegex = /e\.jsxs\("ul",\s*\{\s*className:\s*"space-y-3 mb-8"[\s\S]*?(?=,\s*e\.jsxs\("button",\s*\{\s*onClick:\s*j)/;

    if (cleanupRegex.test(content)) {
        content = content.replace(cleanupRegex, newUlBlock);
        console.log('[OK] Lista Premium limpa e corrigida (Removido lixo duplicado).');
        fs.writeFileSync(targetFile, content, 'utf8');
    } else {
        console.error('[ERRO] Bloco Premium não encontrado para limpeza. Verifique se o botão J está próximo.');
        // Debug: tentar achar só o botão j
        if (content.includes('onClick: j')) {
            console.log('Botão J encontrado.');
        } else {
            console.log('Botão J NÃO encontrado.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
