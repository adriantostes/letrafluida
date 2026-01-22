const fs = require('fs');

// Vou procurar no diretório dist/build original
const distPath = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\dist\\assets\\index-BY5pObJn.js';
const targetPath = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    if (fs.existsSync(distPath)) {
        fs.copyFileSync(distPath, targetPath);
        console.log('[OK] Restaurado do dist/');
    } else {
        console.log('Dist não existe. Procurando alternativas...');

        // Tentar encontrar QUALQUER versão anterior
        const searchPaths = [
            'c:\\My Web Sites\\letrafluidacopy\\node_modules\\.vite\\',
            'c:\\My Web Sites\\letrafluidacopy\\.vite\\',
            'c:\\My Web Sites\\letrafluidacopy\\dist\\assets\\'
        ];

        for (const path of searchPaths) {
            if (fs.existsSync(path)) {
                console.log('Encontrado:', path);
            }
        }
    }
} catch (e) {
    console.error(e);
}
