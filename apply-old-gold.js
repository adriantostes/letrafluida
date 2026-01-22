const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: O span vibrante criado no passo anterior
    // style: { color: "#FFD700" }

    // Novo Ouro Velho: #8A7350
    // Vou substituir o código de cor direto.

    // Regex para capturar o style inline
    const regex = /style:\s*\{\s*color:\s*"#FFD700"\s*\}/;

    if (regex.test(content)) {
        content = content.replace(regex, 'style: { color: "#8A7350" }');
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Cor ajustada para Ouro Velho (#8A7350).');
    } else {
        console.warn('[WARN] Estilo inline anterior não encontrado. Tentando busca textual...');

        // Pode ser que tenha aspas diferentes ou espaços
        const textReplace = content.replace('"#FFD700"', '"#8A7350"');
        if (textReplace !== content) {
            content = textReplace;
            fs.writeFileSync(targetFile, content, 'utf8');
            console.log('[OK] Cor ajustada via text replacement.');
        } else {
            console.error('[ERRO] Não consegui atualizar a cor.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
