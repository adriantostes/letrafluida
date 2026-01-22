const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === LISTA DE SEGURANÇA (EMERGENCY OVERRIDE) ===
    // Sem variáveis externas (l, te, S, etc). Apenas HTML/React puro e Emojis.

    // Itens:
    // 1. Pacote Básico
    // 2. Método Completo
    // 3. Módulo 1
    // 4. MASTERCLASS (🔥)
    // 5. Protocolo Biomecânico
    // 6. Caderno
    // 7. App Corretor IA (🤖)
    // 8. Guia Anti-Tensão
    // 9. Caligrafia Artística (T -> ✍️)
    // 10. BÔNUS EXCLUSIVO (💎)

    const safeItems = [
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800", children: [e.jsx("span", { children: "✅" }), e.jsx("span", { children: "Pacote Básico" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800", children: [e.jsx("span", { children: "✅" }), e.jsx("span", { children: "Método Letra Fluida Completo" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800", children: [e.jsx("span", { children: "✅" }), e.jsx("span", { children: "Módulo 1: Alfabeto Executivo" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800 bg-[#FEFCE8] p-2 rounded border border-yellow-300", children: [e.jsx("span", { children: "🔥" }), e.jsx("span", { className: "font-bold", children: "MASTERCLASS: A ASSINATURA DE UM CEO" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800", children: [e.jsx("span", { children: "✅" }), e.jsx("span", { children: "Protocolo Biomecânico" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800", children: [e.jsx("span", { children: "✅" }), e.jsx("span", { children: "Caderno de Treino (PDF)" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800 bg-[#FEFCE8] p-2 rounded border border-yellow-300", children: [e.jsx("span", { children: "🤖" }), e.jsx("span", { className: "font-bold", children: "LANÇAMENTO: App Corretor IA (Acesso Vitalício)" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800", children: [e.jsx("span", { children: "✅" }), e.jsx("span", { children: "Guia Anti-Tensão" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800 bg-[#FEFCE8] p-2 rounded border border-yellow-300", children: [e.jsx("span", { children: "✍️" }), e.jsx("span", { className: "font-bold", children: "BÔNUS: Caligrafia Artística" })] })`,
        `e.jsxs("li", { className: "flex gap-2 items-center text-gray-800 bg-[#FEFCE8] p-2 rounded border border-yellow-300", children: [e.jsx("span", { children: "💎" }), e.jsx("span", { className: "font-bold", children: "BÔNUS EXCLUSIVO: Acesso Vitalício + Updates" })] })`
    ];

    const safeListString = safeItems.join(", ");
    const safeUlBlock = `e.jsxs("ul", { className: "space-y-4", children: [${safeListString}] })`;

    // Regex para substituir a lista do Main Premium (antes do botão J)
    // Aceita qualquer conteúdo dentro do UL space-y-4 anterior
    const mainPremiumRegex = /e\.jsxs\("ul",\s*\{\s*className:\s*"space-y-4"[\s\S]*?(?=,\s*e\.jsxs\("button",\s*\{\s*onClick:\s*j)/;

    if (mainPremiumRegex.test(content)) {
        content = content.replace(mainPremiumRegex, safeUlBlock);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Emergency Override aplicado. Lista substituída por versão segura.');
    } else {
        console.error('[ERRO] Não encontrou o bloco da lista Premium para substituir.');
    }

} catch (err) {
    console.error('Erro Fatal:', err);
}
