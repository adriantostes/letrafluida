const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Alvo: " Acesso vitalício + Atualizações"
    // Novo: " Benefício Exclusivo: Acesso vitalício! + Atualizações mensais"

    const target = ' Acesso vitalício + Atualizações';
    const replacement = ' Benefício Exclusivo: Acesso vitalício! + Atualizações mensais';

    if (content.includes(target)) {
        content = content.replace(target, replacement);
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[OK] Texto de Acesso Vitalício atualizado.');
    } else {
        console.error('[ERRO] Texto alvo "Acesso vitalício + Atualizações" não encontrado.');

        // Debug: mostrar contexto se falhar
        const regexPartial = /Acesso vitalício/;
        if (regexPartial.test(content)) {
            console.log('Encontrei "Acesso vitalício", mas não a string completa.');
        }
    }

} catch (err) {
    console.error('Erro:', err);
}
