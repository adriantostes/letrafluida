const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. REMOVER ITENS ANTIGOS DA IA (Para não duplicar e mover pro topo)
    // Básico Antigo
    // Regex aproximado do que foi inserido antes
    // className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-gray-800", children: "Acesso Vitalício ao Corretor IA" })] })
    // Vou usar fragmentos unicos para remover
    const oldBasicIA = /e\.jsxs\("li",\s*\{[^}]*children:\s*\[[^}]*children:\s*"Acesso Vitalício ao Corretor IA"[^}]*\}\)\s*\]\s*\}\),?/;
    content = content.replace(oldBasicIA, ''); // Remove Básico

    // Premium Antigo
    // className: "flex gap-4 items-start text-[#1e293b] bg-yellow-400/10 p-2 rounded-sm -mx-2 border border-yellow-400/30"
    // children: "Acesso Vitalício ao Corretor IA"
    const oldPremiumIA = /e\.jsxs\("li",\s*\{[^}]*children:\s*\[[^}]*children:\s*"Acesso Vitalício ao Corretor IA"[^}]*\}\)\s*\]\s*\}\),?/;
    content = content.replace(oldPremiumIA, ''); // Remove Premium


    // 2. INSERIR NO TOPO (VISIBILIDADE MAXIMA)
    // Item IA Destacado (Novo Design)
    const newIaItem = `e.jsxs("li", { className: "flex gap-3 items-center bg-[#1e293b] p-3 rounded-sm -mx-2 border border-[#8A7350] shadow-md mb-2", children: [e.jsx("span", { className: "text-xl animate-bounce", children: "🤖" }), e.jsxs("div", { className: "leading-tight", children: [e.jsx("span", { className: "block text-[#8A7350] text-[10px] font-bold uppercase tracking-widest", children: "Lançamento" }), e.jsx("span", { className: "font-bold text-white text-sm", children: "App Corretor IA (Acesso Vitalício)" })] })] }),`;

    // Injetar no Básico
    // Procura o inicio do UL do básico.
    // Padrão: className: "space-y-3 mb-8 text-sm text-[#5c5446]", children: [
    const ulBasicRegex = /(className:\s*"space-y-3 mb-8 text-sm text-\[#5c5446\]",\s*children:\s*\[)/;
    if (ulBasicRegex.test(content)) {
        content = content.replace(ulBasicRegex, '$1' + newIaItem);
        console.log('[OK] IA movida para o topo do Básico.');
    } else {
        console.warn('[WARN] UL Básico não encontrado para topo.');
    }

    // Injetar no Premium
    // Padrão: className: "space-y-3 mb-8", children: [
    // Esse padrão é curto, perigo de conflito. Vou buscar contexto "Pacote Premium".
    // Mas o regex lookbehind não é suportado bem em todos nodes.
    // O UL do premium vem logo depois de uma imagem "package_cover".
    // Vou usar o regex daUL premium com styles.
    // No view_file: e.jsxs("ul", { className: "space-y-3 mb-8", children: [
    const ulPremiumRegex = /(className:\s*"space-y-3 mb-8",\s*children:\s*\[)/;
    if (ulPremiumRegex.test(content)) {
        content = content.replace(ulPremiumRegex, '$1' + newIaItem);
        console.log('[OK] IA movida para o topo do Premium.');
    } else {
        console.warn('[WARN] UL Premium não encontrado para topo.');
    }

    // 3. ATUALIZAR VISUAL "BÔNUS EXCLUSIVO" E "BENEFÍCIO EXCLUSIVO" (Imagem)
    // Bônus Exclusivo: Fogo Vermelho + Texto Vermelho
    // Atual: e.jsx(te, { size: 18, className: "shrink-0" }), " Bônus exclusivo!"
    // Novo: e.jsx(te, { size: 18, className: "shrink-0 fill-red-600 text-red-600" }), e.jsx("span", { className: "text-red-600 font-bold uppercase", children: "Bônus exclusivo!" })

    // O replace do texto antigo já foi feito em steps passados, então o 'children' é complexo.
    // Vou substituir o LI inteiro se conseguir achar.
    // LI do Bônus: className: "flex gap-3 text-sm font-bold text-red-500"
    // LI do Benefício: className: "flex gap-3 text-sm font-bold text-yellow-600 bg-yellow-50 p-2 rounded-sm"

    // Vou usar replace de string direta se possível para garantir cores.
    // "text-red-500" -> já está vermelho. Vou adicionar fill-red-500 no icone.
    content = content.replace(/className:"shrink-0"\}\),\s*" Bônus exclusivo!"/, 'className:"shrink-0 fill-red-600 text-red-600"}),e.jsx("span",{className:"text-red-600 font-extrabold uppercase",children:" Bônus exclusivo!"})');

    // "Benefício Exclusivo"
    // text-yellow-600 -> text-[#8A7350] (Dourado premium)
    // bg-yellow-50 -> bg-[#8A7350]/10
    content = content.replace('text-yellow-600 bg-yellow-50', 'text-[#8A7350] bg-[#8A7350]/10 border border-[#8A7350]/30');
    // Mudar icone S (Star) para Medalha se possivel, ou manter Star com fill dourado
    content = content.replace('className:"shrink-0 fill-yellow-500"', 'className:"shrink-0 fill-[#8A7350] text-[#8A7350]"');

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
