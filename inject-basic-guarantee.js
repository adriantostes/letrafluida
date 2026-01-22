const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: Botão do Pacote Básico
    // children: "Começar Agora" })] })
    // Eu preciso inserir o novo conteúdo ANTES do último `] })` que fecha o array de children da div pai.

    // Nota: A estrutura minificada pode variar ligeiramente nos espaços, então usarei partes menores.
    const targetButton = 'children: "Começar Agora" })] })';

    // Código a inserir (Baseado no Premium, mas simplificado/minificado para consistência)
    // Usarei e.jsx e e.jsxs conforme o contexto do arquivo original (variavel 'e' deve estar no escopo se eu colar dentro da function, mas aqui estou editando texto plano)
    // O texto plano funciona desde que eu use a sintaxe correta.

    const newContent = `, e.jsx("div", { className: "mt-4 flex justify-center relative z-0", children: e.jsx("img", { src: "/payment_methods_final.png", alt: "Formas de Pagamento", width: "320", height: "50", loading: "lazy", className: "w-full max-w-[260px] object-contain" }) }), e.jsxs("div", { className: "mt-6 flex flex-col items-center justify-center gap-2 text-xs text-[#5c5446] max-w-sm mx-auto", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(k, { size: 14, className: "text-green-600" }), e.jsx("span", { className: "font-bold", children: "Garantia Incondicional de 7 Dias" })] }), e.jsx("p", { className: "text-center italic opacity-90 leading-tight font-serif", children: "Se você não amar sua nova letra, nós devolvemos cada centavo. Sem perguntas, sem burocracia. O risco é todo nosso." })] })`;

    const replacement = 'children: "Começar Agora" })' + newContent + '] })';

    if (content.includes(targetButton)) {
        content = content.replace(targetButton, replacement);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Garantia e Pix inseridos no Pacote Básico.');
    } else {
        console.error('[ERRO] Alvo não encontrado. Tentando busca mais flexível...');
        // Fallback regex se houver diferenças de espaço
        const regex = /children:\s*"Começar Agora"\s*\}\)\]\s*\}\)/;
        if (regex.test(content)) {
            content = content.replace(regex, (match) => {
                return match.replace(')] })', ')' + newContent + '] })');
            });
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Garantia inserida via Regex.');
        } else {
            console.error('[FATAL] Não consegui encontrar o botão do Pacote Básico.');
        }
    }

} catch (err) {
    console.error('Erro IO:', err);
}
