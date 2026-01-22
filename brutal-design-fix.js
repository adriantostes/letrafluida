const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // Substituições Globais para "Endurecer" o design

    // 1. Arredondamentos
    // rounded-lg (0.5rem) -> rounded-sm (0.125rem)
    content = content.replace(/rounded-lg/g, 'rounded-sm');

    // rounded-xl (0.75rem) -> rounded-md (0.375rem)
    content = content.replace(/rounded-xl/g, 'rounded-md');

    // rounded-2xl (1rem) -> rounded-lg (0.5rem)
    content = content.replace(/rounded-2xl/g, 'rounded-lg');

    // rounded-3xl (1.5rem) -> rounded-xl (0.75rem)
    content = content.replace(/rounded-3xl/g, 'rounded-xl');

    // 2. Cores de fundo "Infantis" (Bege excessivo)
    // Tentar mudar seções específicas que identificamos antes e que falharam
    // "bg-[#F9F5EB] p-8" -> "bg-white p-8" (Target Audience)
    content = content.replace(/bg-\[#F9F5EB\] p-8/g, 'bg-white p-8 border border-gray-200 shadow-sm');

    // "bg-[#F9F5EB] p-6" -> "bg-white p-6" (Se houver)
    content = content.replace(/bg-\[#F9F5EB\] p-6/g, 'bg-white p-6 border border-gray-100');

    // 3. Sombras suaves demais -> Sombras mais técnicas
    content = content.replace(/shadow-lg/g, 'shadow-md');

    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('[OK] Design Brutalmente Profissional Aplicado.');

} catch (err) {
    console.error('Erro:', err);
}
