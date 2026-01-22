const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === PACOTE BÁSICO ===

    // 1. Remover duplicata de IA no final do Básico
    // Texto: e.jsx("span", { className: "font-bold text-gray-800", children: "Acesso Vitalício ao Corretor IA" })] })
    // Regex segura para remover o LI inteiro que contem esse span especifico no contexto do Básico (que tem text-gray-800 e não white)
    const duplicateIaBasic = /e\.jsxs\("li",\s*\{[^}]*children:\s*\[[^}]*children:\s*e\.jsx\("span",\s*\{[^}]*children:\s*"Acesso Vitalício ao Corretor IA"[^}]*\}\)\s*\]\s*\}\),?/;
    content = content.replace(duplicateIaBasic, '');

    // 2. Adicionar "Método Letra Fluida" no Básico
    // Inserir logo após o LI do App IA (que é o primeiro do Básico depois do nosso update anterior)
    // O LI do App IA tem children: "App Corretor IA (Acesso Vitalício)"
    // Vamos procurar o fechamento desse LI e inserir o novo.

    const basicIaItemEnd = /children:\s*"App Corretor IA \(Acesso Vitalício\)"\s*\}\)\s*\]\s*\}\),/;
    const metodoItem = `e.jsxs("li", { className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-gray-800", children: "Método Letra Fluida (Curso Base)" })] }),`;

    if (basicIaItemEnd.test(content)) {
        // Cuidado para não substituir no Premium também, pois o IA está nos dois.
        // O Básico vem antes no código geralmente. Mas regex replace normal pega o primeiro.
        // O Básico: "Pacote Básico" ... UL ... LI(IA) ...
        // O Premium: "Pacote Premium" ... UL ... LI(IA) (no final normalmente, mas movi pro topo tambem)

        // Vamos ser mais específicos. O UL do Básico tem `className: "space-y-3 mb-8 text-sm text-[#5c5446]"`
        // Vou usar replace com função de callback ou split para garantir que insiro no lugar certo.

        // Na verdade, replace no arquivo todo adicionaria nos dois pacotes se o código for igual.
        // Se eu adicionar "Método Letra Fluida" nos DOIS pacotes logo abaixo do App IA, não é ruim, pois o Premium TAMBÉM tem o Método.
        // O Premium já tem "O Método Letra Fluida (Completo)" na lista (Step 735, linha 21).

        // Vou tentar injetar APENAS no Básico buscando contexto.
        const parts = content.split('Pacote Básico');
        if (parts.length > 1) {
            // parts[1] é o conteudo do basico e depois vem o resto.
            // Vamos fazer replace apenas em parts[1] até chegar em "Pacote Premium"
            let basicSection = parts[1].split('Pacote Premium')[0];

            if (basicIaItemEnd.test(basicSection)) {
                const newBasicSection = basicSection.replace(basicIaItemEnd, '$&' + metodoItem);
                content = content.replace(basicSection, newBasicSection);
                console.log('[OK] Método Letra Fluida adicionado ao Básico.');
            }
        }
    }


    // === PACOTE PREMIUM ===

    // 3. Estilizar "Masterclass: A Assinatura de um CEO"
    // Atual no arquivo: children: "Masterclass: A Assinatura de um CEO"
    // LI wrapper: text-[#1e293b] bg-yellow-400/10 ...

    // Vou usar regex para pegar o LI todo dessa Masterclass
    const masterclassRegex = /e\.jsxs\("li",\s*\{[^}]*children:\s*\[[^}]*children:\s*"🔥"[^}]*children:\s*"Masterclass: A Assinatura de um CEO"[^}]*\}\)\s*\]\s*\}\)/;

    // Novo estilo: Fundo Amarelo Claro (#FFF9C4), Borda Amarela, Texto Escuro Bold Uppercase
    const newMasterclass = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FFF9C4] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx("span", { className: "text-sm", children: "🔥" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "MASTERCLASS: A ASSINATURA DE UM CEO" })] })`;

    if (masterclassRegex.test(content)) {
        content = content.replace(masterclassRegex, newMasterclass);
        console.log('[OK] Masterclass Premium estilizada (Amarelo).');
    }

    // 4. Estilizar "Bônus exclusivo!" -> "BÔNUS: CALIGRAFIA ARTÍSTICA & LETTERING"
    // Usei enforce-premium-benefits.js antes, então o regex mudou.
    // Atual: children: " Bônus exclusivo!" ... bg-red-50 p-2 ...

    const bonusRegex = /e\.jsxs\("li",\s*\{[^}]*Bônus exclusivo!"\s*\]\s*\}\)/;

    // Novo estilo: Fundo Amarelo Claro (igual imagem), Icone T (Texto/Lettering) Vermelho/Amarelo
    const newBonus = `e.jsxs("li", { className: "flex gap-4 items-center bg-[#FFF9C4] p-3 rounded-md border border-yellow-300 shadow-sm -mx-2", children: [e.jsx("div", { className: "w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 text-white shadow-inner", children: e.jsx(te, { size: 16, className: "text-white fill-white" }) }), e.jsx("span", { className: "text-sm font-black text-[#1e293b] uppercase tracking-wide leading-tight", children: "BÔNUS: CALIGRAFIA ARTÍSTICA & LETTERING" })] })`;

    if (bonusRegex.test(content)) {
        content = content.replace(bonusRegex, newBonus);
        console.log('[OK] Bônus Lettering estilizado (Amarelo).');
    }

    // 5. Garantir "Benefício Exclusivo"
    // Atual está ok, só garantir consistencia se precisar. 
    // O usuário disse "ali nas ultimas partes é só colocar isso". 
    // Vou manter como está pois ajustei no passo anterior, a menos que ele queira style amarelo tambem.
    // Na imagem dele só tem DOIS destaques amarelos. Masterclass e Lettering. O Vitalício é check azul normal ou texto.
    // No código atual já está destacado (Ouro). Vou deixar assim pra não poluir.

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
