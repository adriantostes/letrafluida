const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // === DEFINIÇÃO DA NOVA LISTA ===
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


    // === SUBSTITUIÇÃO MANUAL ===

    // 1. Encontrar início do UL Premium
    const ulMarker = 'e.jsxs("ul", { className: "space-y-3 mb-8"';
    const startIdx = content.indexOf(ulMarker);

    // 2. Encontrar botão Checkout Premium (referência final)
    const btnMarker = 'onClick: j';
    const btnIdx = content.indexOf(btnMarker, startIdx); // Busca depois do UL

    if (startIdx !== -1 && btnIdx !== -1) {
        // Encontrar onde começa o botão exatamente (retroceder de 'onClick: j' até 'e.jsxs("button"' ou virgula anterior)
        // O UL termina antes do botão ser declarado.
        // A estrutura é: ... UL_FIM), e.jsxs("button", ...
        // Vou procurar a string 'e.jsxs("button"' antes de btnIdx

        const btnStartMarker = 'e.jsxs("button"';
        const replaceEndIdx = content.lastIndexOf(btnStartMarker, btnIdx);

        // Se lastIndexOf achar o botão CORRETO (que contem onClick: j)
        // O replaceEndIdx deve ser maior que startIdx.

        if (replaceEndIdx > startIdx) {
            // Agora tenho o intervalo [startIdx, replaceEndIdx]
            // Esse intervalo contém todo o UL (corrompido ou não) e o lixo, até o inicio do botão.
            // Mas cuidado: replaceEndIdx aponta para o 'e' de 'e.jsxs("button"'.
            // Precisamos preservar a virgula e espaço antes do botão se existirem, ou adicionar.
            // O intervalo a substituir é do UL até ANTES do botão.
            // Vou pegar content.substring(startIdx, replaceEndIdx).
            // E ver se termina com virgula.

            const segmentToReplace = content.substring(startIdx, replaceEndIdx);

            // Verificação de segurança: O segmento é muito grande? (Evitar deletar metade do arquivo)
            if (segmentToReplace.length < 50000) { // Lista grande tem uns 5-10kb
                // Verificar se replaceEndIdx-1 é virgula.
                let finalBlock = newUlBlock;

                // Se o segmento original terminava com virgula e espaço antes do botão,
                // precisamos garantir que a virgula exista.
                // Na estrutura JSX array: [ A, B ] -> A, B
                // Então deve ter virgula entre UL e Button.

                finalBlock += ', ';

                const newContent = content.substring(0, startIdx) + finalBlock + content.substring(replaceEndIdx);

                fs.writeFileSync(targetFile, newContent, 'utf8');
                console.log('[OK] Substituição Manual Precisa Realizada.');

            } else {
                console.error('[ERRO] Segmento alvo suspeito (muito grande): ' + segmentToReplace.length);
            }

        } else {
            console.error('[ERRO] Não encontrou inicio do botão após o UL.');
        }

    } else {
        console.error('[ERRO] Marcadores não encontrados:', { startIdx, btnIdx });
    }

} catch (err) {
    console.error('Erro:', err);
}
