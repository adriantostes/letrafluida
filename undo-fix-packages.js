const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. Reverter Método Letra Fluida no Básico (Remover)
    const basicItem = `e.jsxs("li", { className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-gray-800", children: "Método Letra Fluida (Curso Base)" })] }),`;

    if (content.includes(basicItem)) {
        content = content.replace(basicItem, '');
        console.log('[OK] Item Básico revertido (removido).');
    }

    // 2. Reverter Masterclass (De Amarelo para Normal)
    const mcYellow = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "🔥" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "MASTERCLASS: A ASSINATURA DE UM CEO" })] })`;

    const mcOriginal = `e.jsxs("li", { className: "flex gap-4 items-start text-[#1e293b] bg-yellow-400/10 p-2 rounded-sm -mx-2 border border-yellow-400/30", children: [e.jsx("div", { className: "w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx("span", { className: "text-xs", children: "🔥" }) }), e.jsx("span", { className: "text-base font-bold uppercase", children: "Masterclass: A Assinatura de um CEO" })] })`;

    if (content.includes(mcYellow)) {
        content = content.replace(mcYellow, mcOriginal);
        console.log('[OK] Masterclass revertida.');
    }

    // 3. Reverter Bônus (De Lettering Amarelo para Bônus Exclusivo Red)
    // Atenção: Usei regex na passada anterior se falhou search literal, mas aqui vou tentar literal.
    const bonusYellow = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx(te, { size: 16, className: "text-white fill-white" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS: CALIGRAFIA ARTÍSTICA & LETTERING" })] })`;

    const bonusRed = `e.jsxs("li", { className: "flex gap-2 items-center text-sm font-black text-red-600 uppercase tracking-widest bg-red-50 p-2 rounded-sm border border-red-100", children: [e.jsx(te, { size: 18, className: "shrink-0 fill-red-600" }), " Bônus exclusivo!"] })`;

    if (content.includes(bonusYellow)) {
        content = content.replace(bonusYellow, bonusRed);
        console.log('[OK] Bônus revertido para Red.');
    }

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
