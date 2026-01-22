const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    const target = 'SUPER PACOTE COMPLETO';
    const replacement = 'PACOTE PREMIUM';

    // Tenta replace direto (mais comum em props de react minificado 'children:"TEXTO"')
    if (content.includes(target)) {
        const newContent = content.replace(new RegExp(target, 'g'), replacement);
        fs.writeFileSync(targetFile, newContent, 'utf8');
        console.log('[OK] "SUPER PACOTE COMPLETO" substituído por "PACOTE PREMIUM"');
    } else {
        console.error('[ERRO] String alvo não encontrada no arquivo.');
    }
} catch (err) {
    console.error('Erro:', err);
}
