const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: children:"🔥 Devido à alta demanda, a promoção dura até HOJE, 19/01/2026"
    // Ou variações. Vou buscar pelo fixo "19/01/2026" se precisar.

    // Vou substituir por um array de children no React para injetar código JS.
    // children: ["Texto", new Date()...]

    const target = 'children:"🔥 Devido à alta demanda, a promoção dura até HOJE, 19/01/2026"';
    const replacement = 'children:["🔥 Devido à alta demanda, a promoção dura até HOJE, ",new Date().toLocaleDateString("pt-BR")]';

    if (content.includes(target)) {
        content = content.replace(target, replacement);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Data dinâmica aplicada no Header.');
    } else {
        // Tentar buscar por "Devido à alta demanda" e ser mais flexivel
        const regex = /children:\s*"🔥 Devido à alta demanda, a promoção dura até HOJE, \d{2}\/\d{2}\/\d{4}"/;
        if (regex.test(content)) {
            content = content.replace(regex, replacement);
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Data dinâmica aplicada via Regex.');
        } else {
            console.error('[ERRO] Header não encontrado.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
