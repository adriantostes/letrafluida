const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // 1. Atualizar Hero Description
    const targetHero = 'Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura.';
    const newHero = 'O Primeiro e Único Método do Brasil com App de Correção por Inteligência Artificial. Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura.';

    // 2. Adicionar "Acesso Vitalício ao Corretor IA" no Pacote Básico
    // Vou buscar o último item do básico: "Acesso Vitalício" (que está no texto)
    // E adicionar um novo <li>
    // Código Básico: e.jsx("span",{children:"Acesso Vitalício"})]})
    // Inserir antes do ]})

    const basicItem = ', e.jsxs("li", { className: "flex gap-3 items-start", children: [e.jsx("div", { className: "bg-purple-100 text-purple-600 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5", children: e.jsx(l, { size: 10, strokeWidth: 4 }) }), e.jsx("span", { className: "font-bold text-purple-700", children: "Acesso Vitalício ao Corretor IA" })] })';

    const targetBasicEnd = 'e.jsx("span",{children:"Acesso Vitalício"})]})]'; // Final da lista do Básico

    // 3. Adicionar no Pacote Premium
    // Vou buscar o item "Bônus exclusivo!" ou similar para injetar perto
    // Ou buscar o final da lista premium.
    // Premium código tem: e.jsx(S,{size:18,className:"shrink-0 fill-yellow-500"})," Acesso vitalício + Atualizações"]})]})

    const premiumItem = `, e.jsxs("li", { className: "flex gap-3 text-sm font-bold text-purple-600 bg-purple-50 p-2 rounded-lg mt-2", children: [e.jsx(S, { size: 18, className: "shrink-0 fill-purple-500" }), " Acesso Vitalício ao Corretor IA"] })`;

    const targetPremiumEnd = 'className:"shrink-0 fill-yellow-500"})," Acesso vitalício + Atualizações"]})]})'; // Final da lista Premium (Antigo, mas mudei o texto no passo anterior!)
    // O texto anterior mudou para: " Benefício Exclusivo: Acesso vitalício! + Atualizações mensais"

    const targetPremiumEndNew = 'className:"shrink-0 fill-yellow-500"})," Benefício Exclusivo: Acesso vitalício! + Atualizações mensais"]})]})';


    // Aplicar
    // Hero
    if (content.includes(targetHero)) {
        content = content.replace(targetHero, newHero);
        console.log('[OK] Hero atualizado.');
    } else {
        console.warn('[WARN] Hero não encontrado exato.');
    }

    // Basic
    // Preciso achar um ponto de ancoragem seguro no Básico.
    // "children:"Acesso Vitalício"})]})"
    const regexBasic = /e\.jsx\("span",\{children:"Acesso Vitalício"\}\)\]\}\)\]\}/;
    if (regexBasic.test(content)) {
        content = content.replace(regexBasic, (match) => {
            return match.replace(']})]', ']})' + basicItem + ']');
        });
        console.log('[OK] Básico atualizado com IA.');
    } else {
        // Fallback texto simples
        const strBasic = 'e.jsx("span",{children:"Acesso Vitalício"})]})';
        if (content.includes(strBasic)) {
            content = content.replace(strBasic, strBasic + basicItem);
            console.log('[OK] Básico atualizado (String Fallback).');
        } else {
            console.warn('[WARN] Básico não encontrado.');
        }
    }

    // Premium
    const regexPremium = /Benefício Exclusivo: Acesso vitalício! \+ Atualizações mensais"\]\}\)\]\}\)/;
    if (regexPremium.test(content)) {
        content = content.replace(regexPremium, (match) => {
            return match.replace(']})', ']})' + premiumItem);
        });
        console.log('[OK] Premium atualizado com IA.');
    } else {
        // Tentar buscar apenas o texto se a estrutura falhar
        const strPrem = 'Benefício Exclusivo: Acesso vitalício! + Atualizações mensais"]})';
        if (content.includes(strPrem)) {
            content = content.replace(strPrem, strPrem + premiumItem);
            console.log('[OK] Premium atualizado (String Fallback).');

        } else {
            console.warn('[WARN] Premium não encontrado.');
        }
    }

    fs.writeFileSync(targetFile, content, 'utf8');

} catch (err) {
    console.error('Erro:', err);
}
