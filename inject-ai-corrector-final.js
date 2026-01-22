const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // --- 1. HERO ---
    // Update Text
    const heroOld = 'Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura.';
    const heroNew = 'O Primeiro e Único Método do Brasil com App de Correção por Inteligência Artificial. Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura.';

    if (content.indexOf(heroOld) !== -1) {
        content = content.replace(heroOld, heroNew);
        console.log('[OK] Hero Substituído.');
    } else {
        console.warn('[WARN] Texto Hero não encontrado exatamente.');
    }

    // --- 2. PACOTE BÁSICO ---
    // Target: Último item "Acesso Vitalício"
    // Regex flexível para capturar o LI inteiro
    // e.jsxs("li", { ... children: [ ... e.jsx("span", { children: "Acesso Vitalício" })] })
    // Como é complexo pegar o inicio do LI com regex reverso, vou focar no fechamento.
    // O LI fecha com `] })`. E ele é o último do array `children: [ ... ]`.
    // Então depois dele vem `] })` (fechamento do UL).
    // Vou procurar: `e.jsx("span",\s*\{\s*children:\s*"Acesso Vitalício"\s*\}\)\s*\]\s*\}\)`

    const basicInjector = ', e.jsxs("li", { className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-gray-800", children: "Acesso Vitalício ao Corretor IA" })] })';

    // Regex alvo: capture o fechamento do LI do "Acesso Vitalício"
    // Padrao: children:"Acesso Vitalício"})]})
    const regexBasic = /(children:\s*"Acesso Vitalício"\s*\}\)\s*\]\s*\}\))/;

    if (regexBasic.test(content)) {
        content = content.replace(regexBasic, '$1' + basicInjector);
        console.log('[OK] Básico: IA adicionada.');
    } else {
        console.warn('[WARN] Falha ao injetar no Básico.');
    }

    // --- 3. PACOTE PREMIUM ---
    // Target: "Benefício Exclusivo: Acesso vitalício! + Atualizações mensais"

    const premiumInjector = `, e.jsxs("li", { className: "flex gap-4 items-start text-[#1e293b] bg-yellow-400/10 p-2 rounded-sm -mx-2 border border-yellow-400/30", children: [e.jsx("div", { className: "w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx("span", { className: "text-xs", children: "🤖" }) }), e.jsx("span", { className: "text-base font-bold uppercase", children: "Acesso Vitalício ao Corretor IA" })] })`;

    const regexPremium = /(Benefício Exclusivo: Acesso vitalício! \+ Atualizações mensais"\s*\]\s*\}\))/;

    if (regexPremium.test(content)) {
        content = content.replace(regexPremium, '$1' + premiumInjector);
        console.log('[OK] Premium: IA adicionada.');
    } else {
        console.warn('[WARN] Falha ao injetar no Premium.');
    }

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
