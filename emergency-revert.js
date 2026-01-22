const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    console.log('REVERTENDO para versão segura...');

    // REMOVER minha injeção problemática Robot/Diamond
    // Procurar e deletar o bloco "App Corretor IA"
    const robotPattern = /e\.jsxs\("li",\s*\{\s*className:\s*"flex gap-4 items-center bg-\[#FEFCE8\][^}]+App Corretor IA[^}]+\}\)\]/g;
    content = content.replace(robotPattern, '');

    // Remover "BÔNUS EXCLUSIVO" (minha versão)
    const diamondPattern = /e\.jsxs\("li",\s*\{\s*className:\s*"flex gap-4 items-center bg-\[#FEFCE8\][^}]+BÔNUS EXCLUSIVO[^}]+Benefício Exclusivo[^}]+\}\)\]/g;
    content = content.replace(diamondPattern, '');

    // Limpar vírgulas duplas que podem ter ficado
    content = content.replace(/,\s*,/g, ',');

    // Limpar espaços duplos
    content = content.replace(/  +/g, ' ');

    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[OK] Código problemático REMOVIDO. Site deve voltar.');

} catch (err) {
    console.error('ERRO:', err);
}
