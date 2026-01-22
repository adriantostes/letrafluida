const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: 'BÔNUS: Kit "Pai & Filho" (Material Infantil)'
    // Novo: 'BÔNUS: Caligrafia Artística & Lettering'

    // Como a string tem aspas duplas internas e no código JS elas podem estar escapadas (\") ou usando aspas simples externas,
    // vou tentar uma regex flexível.

    // Regex alvo: BÔNUS: Kit \"?Pai & Filho\"? \(Material Infantil\)

    const regex = /BÔNUS: Kit \\"Pai & Filho\\" \(Material Infantil\)/g;
    const replacement = 'BÔNUS: Caligrafia Artística & Lettering';

    let info = '';

    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        info = 'Regex 1 (Aspas escapadas)';
    } else {
        // Tentar aspas simples dentro de duplas ou vice versa se o grep mostrou algo diferente
        const regex2 = /BÔNUS: Kit "Pai & Filho" \(Material Infantil\)/g;
        if (regex2.test(content)) {
            content = content.replace(regex2, replacement);
            info = 'Regex 2 (Aspas normais)';
        } else {
            console.error('[ERRO] String do Bônus não encontrada.');
            // Fallback: tentar replace direto da string vista no view_file anterior
            // O view_file Step 358 mostrou: 'BÔNUS: Kit "Pai & Filho" (Material Infantil)' dentro de uma string delimitada por '?'
            // Na linha 21: 'children: \'BÔNUS: Kit "Pai & Filho" (Material Infantil)\''
            const targetExact = 'BÔNUS: Kit "Pai & Filho" (Material Infantil)';
            if (content.indexOf(targetExact) !== -1) {
                content = content.replace(targetExact, replacement);
                info = 'Replace String Exata';
            }
        }
    }

    if (info) {
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log(`[OK] Bônus substituído via ${info}`);
    }

} catch (err) {
    console.error('Erro IO:', err);
}
