const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === 1. Remover item IA duplicado no final do Básico ===
    const iaBasicOld = `e.jsxs("li", { className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-gray-800", children: "Acesso Vitalício ao Corretor IA" })] })`;

    // Como é um array, ele estará seguido de vírgula ou no final. Vamos tentar remover com virgula antes se possivel, ou depois.
    // Mas replace simples de string vazia resolve se sobrar virgula duplicada o JS lida as vezes ou quebra.
    // Melhor remover `iaBasicOld`
    if (content.includes(iaBasicOld)) {
        content = content.replace(iaBasicOld, ''); // Remove a string. Se ficar ",," pode dar erro de sintaxe em alguns parsers, mas arrays aceitam empty slots ou virgula trailing.
        // Vamos ser mais limpos: se tiver virgula antes, remove.
        // O item anterior termina em `})] }),`. O proximo começaria.
        // Vou fazer um replace mais generico: `, ` + iaBasicOld

        // Update: apenas replace simples por enquanto. JSX array com buraco é ignordado pelo React geralmente, mas sintaxe invalida quebra build.
        // Melhor substituir por `null`.
        // Mas `e.jsxs` espera filhos.
        // Vou substituir por `e.jsx(P.Fragment, {})` (Vazio) ou apenas deletar se conseguir pegar a virgula.

        // Tentativa de pegar com a virgula anterior
        // Na lista: item1, item2, item3
        // Se eu remover item3, item2 termina com virgula. Array `[a, b,]` é valido em JS.
        // Se item3 não for o ultimo?
        // Vou apenas substituir por string vazia e ver.
    }

    // === 2. Adicionar Método Letra Fluida no Básico ===
    const iaHeaderBasic = `"App Corretor IA (Acesso Vitalício)" })] })] }),`;
    const newBasicItem = `e.jsxs("li", { className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-gray-800", children: "Método Letra Fluida (Curso Base)" })] }),`;

    if (content.includes(iaHeaderBasic)) {
        // Replace apenas na primeira ocorrencia (Básico) - O Premium usa o mesmo Header?
        // Verificando view_file:
        // Básico: "Pacote Básico" ...
        // Premium: "Tudo do Pacote Básico", "O Método Letra Fluida (Completo)", etc...
        // O Premium NÃO tem o item "App Corretor (Lançamento)" no topo da lista no código original.
        // Espere! Eu adicionei o App IA no Premium no fim da lista no passo anterior?
        // No view_file 766, a lista do Premium começa com "Tudo do Pacote Básico".
        // O item de IA do premium está no FIM e tem style amarelo.
        // Então "App Corretor IA (Acesso Vitalício)" com icone de ROBO e texto "Lançamento" SÓ EXISTE NO BÁSICO no topo.
        // Posso substituir sem medo.
        content = content.replace(iaHeaderBasic, iaHeaderBasic + newBasicItem);
        console.log('[OK] Item Método adicionado ao Básico.');
    }

    // === 3. Masterclass Premium ===
    const masterclassOld = `e.jsxs("li", { className: "flex gap-4 items-start text-[#1e293b] bg-yellow-400/10 p-2 rounded-sm -mx-2 border border-yellow-400/30", children: [e.jsx("div", { className: "w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx("span", { className: "text-xs", children: "🔥" }) }), e.jsx("span", { className: "text-base font-bold uppercase", children: "Masterclass: A Assinatura de um CEO" })] })`;
    const masterclassNew = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "🔥" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "MASTERCLASS: A ASSINATURA DE UM CEO" })] })`;

    if (content.includes(masterclassOld)) {
        content = content.replace(masterclassOld, masterclassNew);
        console.log('[OK] Masterclass atualizado.');
    } else {
        // Tentar busca parcial se falhar
        console.warn('String Masterclass exata não encontrada. Tentando regex...');
        const regexMC = /e\.jsxs\("li",\s*\{[^}]*Masterclass: A Assinatura de um CEO"[^}]*\}\)/;
        if (regexMC.test(content)) {
            content = content.replace(regexMC, masterclassNew);
            console.log('[OK] Masterclass atualizado via Regex.');
        }
    }

    // === 4. Bônus Premium ===
    const bonusOld = `e.jsxs("li", { className: "flex gap-2 items-center text-sm font-black text-red-600 uppercase tracking-widest bg-red-50 p-2 rounded-sm border border-red-100", children: [e.jsx(te, { size: 18, className: "shrink-0 fill-red-600" }), " Bônus exclusivo!"] })`;
    const bonusNew = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FEFCE8] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx(te, { size: 16, className: "text-white fill-white" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS: CALIGRAFIA ARTÍSTICA & LETTERING" })] })`;

    if (content.includes(bonusOld)) {
        content = content.replace(bonusOld, bonusNew);
        console.log('[OK] Bônus Lettering atualizado.');
    } else {
        console.warn('String Bonus exata não encontrada. Tentando regex...');
        const regexBonus = /e\.jsxs\("li",\s*\{[^}]*Bônus exclusivo!"\s*\]\s*\}\)/;
        if (regexBonus.test(content)) {
            content = content.replace(regexBonus, bonusNew);
            console.log('[OK] Bônus Lettering atualizado via Regex.');
        }
    }

    // Remove item removido (limpeza se sobrou virgula duplicada ,, )
    content = content.replace(/,,/g, ',');

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
