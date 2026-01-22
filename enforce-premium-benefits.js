const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. Refinar "Bônus exclusivo!"
    // Atual: e.jsx(te, { size: 18, className: "shrink-0" }), " Bônus exclusivo!"
    // Quero: Icone vermelho preenchido + Texto Vermelho Negrito Extremo

    // Procura o LI que contém esse texto
    // O atual no arquivo é: className: "flex gap-3 text-sm font-bold text-red-500"

    const bonusRegex = /e\.jsxs\("li",\s*\{\s*className:\s*"[^"]*text-red-500[^"]*",\s*children:\s*\[\s*e\.jsx\(te,\s*\{\s*size:\s*18,\s*className:\s*"shrink-0"\s*\}\),\s*" Bônus exclusivo!"\s*\]\s*\}\)/;

    const newBonus = `e.jsxs("li", { className: "flex gap-2 items-center text-sm font-black text-red-600 uppercase tracking-widest bg-red-50 p-2 rounded-sm border border-red-100", children: [e.jsx(te, { size: 18, className: "shrink-0 fill-red-600" }), " Bônus exclusivo!"] })`;

    if (bonusRegex.test(content)) {
        content = content.replace(bonusRegex, newBonus);
        console.log('[OK] Bônus Exclusivo refinado.');
    } else {
        // Tentar replace simples caso o regex falhe por espaços
        const simpleBonus = `e.jsx(te, { size: 18, className: "shrink-0" }), " Bônus exclusivo!"`;
        if (content.includes(simpleBonus)) {
            // Substituir o LI inteiro é difícil só com o miolo.
            // Vou substituir o estilo do container se achar
            console.warn('[WARN] Regex complexo falhou. Tentando localizar string simples...');
        }
    }

    // 2. Refinar "Benefício Exclusivo"
    // Atual: fill-yellow-500
    // Quero: fill-[#8A7350] para harmonia

    const benefitRegex = /e\.jsx\(S,\s*\{\s*size:\s*18,\s*className:\s*"shrink-0 fill-yellow-500"\s*\}\)/;
    const newIcon = `e.jsx(S, { size: 18, className: "shrink-0 fill-[#8A7350] text-[#8A7350]" })`;

    if (benefitRegex.test(content)) {
        content = content.replace(benefitRegex, newIcon);
        console.log('[OK] Ícone Benefício ajustado para Ouro.');
    }

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
