const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: O span que criamos anteriormente
    // className: "font-black text-[#1e293b] bg-[#8A7350]/20 px-1 rounded-sm border-b-2 border-[#8A7350]"

    // Vou usar regex para capturar qualquer span com esse texto children
    const regex = /e\.jsx\("span",\s*\{[^}]*children:\s*"App de Correção por Inteligência Artificial"\s*\}\)/;

    // Novo Estilo "Gritante"
    // Fundo escuro, texto dourado brilhante, sombra dourada, rotação leve, padding generoso.
    const newElement = 'e.jsx("span", { className: "inline-block font-extrabold text-[#FFD700] bg-[#1e293b] px-3 py-1 mx-1 rounded-sm shadow-[0_0_20px_rgba(255,215,0,0.4)] border-2 border-[#FFD700] transform -rotate-1 hover:scale-105 transition-transform cursor-default", children: "App de Correção por Inteligência Artificial" })';

    if (regex.test(content)) {
        content = content.replace(regex, newElement);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Highlight Hero atualizado para estilo "Gritante".');
    } else {
        console.warn('[WARN] Span anterior não encontrado. Tentando buscar pelo texto simples...');
        // Fallback: se o span anterior não for achado (talvez mudou algo), busca pelo texto e recria
        const textRegex = /"App de Correção por Inteligência Artificial"/;
        if (textRegex.test(content)) {
            // Se achou só o texto, pode estar dentro de um children simples ou array
            // É arriscado substituir só a string se ela fizer parte de uma frase maior sem quebrar
            console.warn('[ABORT] Span não encontrado structure exata. Intervenção manual necessária se o replace falhou.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
