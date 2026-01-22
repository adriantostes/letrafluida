const fs = require('fs');
const targetFile = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // --- 1. SEÇÃO BENEFÍCIOS (Benefits) ---
    // De: Borda arredondada simples
    // Para: Canto reto, Borda Simples, Borda Dourada no Topo (Elegante)
    const targetBenefits = 'className: "bg-white p-6 rounded-lg shadow-sm border border-[#e5d5b7] hover:border-[#8A7350] transition-all group hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"';
    const newBenefits = 'className: "bg-white p-6 rounded-sm shadow-sm border-x border-b border-[#e5d5b7] border-t-4 border-t-[#8A7350] hover:shadow-xl transition-all group relative overflow-hidden"';

    // --- 2. SEÇÃO PÚBLICO ALVO (Target Audience) ---
    // De: Fundo bege, arredondado
    // Para: Fundo branco, canto reto, sombra sólida (Estilo Clássico)
    const targetTarget = 'className: "bg-[#F9F5EB] p-8 rounded-lg border border-[#e5d5b7] hover:border-[#8A7350] transition-colors group text-center hover:shadow-lg hover:-translate-y-1 duration-300"';
    const newTarget = 'className: "bg-white p-8 rounded-sm border border-[#e5d5b7] shadow-[6px_6px_0_#e5d5b7] hover:shadow-[2px_2px_0_#8A7350] hover:border-[#8A7350] transition-all group text-center hover:-translate-y-1 duration-300"';

    // --- 3. SEÇÃO O QUE VAI APRENDER (Modules) ---
    // De: Arredondado
    // Para: Estilo "Ficha/Arquivo", borda esquerda escura
    const targetModules = 'className: "flex gap-4 items-start bg-[#fffdf5] p-6 rounded-lg shadow-sm border border-[#8A7350]/30 hover:border-[#8A7350] transition-colors group"';
    const newModules = 'className: "flex gap-4 items-start bg-white p-6 rounded-sm shadow-sm border border-gray-100 border-l-4 border-l-[#1e293b] hover:border-l-[#8A7350] transition-all group"';

    let changes = 0;

    // Apply Changes (usando replace com regex simples para flexibilidade de espaçamento se necessario, mas tentando string exata primeiro)

    if (content.includes(targetBenefits) || content.includes('bg-white p-6 rounded-lg')) {
        content = content.replace(targetBenefits, newBenefits);
        changes++;
    }

    if (content.includes(targetTarget) || content.includes('bg-[#F9F5EB] p-8 rounded-lg')) {
        content = content.replace(targetTarget, newTarget);
        changes++;
    }

    if (content.includes(targetModules) || content.includes('flex gap-4 items-start bg-[#fffdf5]')) {
        content = content.replace(targetModules, newModules);
        changes++;
    }

    if (changes > 0) {
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log(`[OK] Design atualizado em ${changes} seções (Look Profissional).`);
    } else {
        console.error('[ERRO] Não encontrei as classes CSS originais. O arquivo pode ter mudado.');
        // Fallback: Tentativa agressiva com Regex
        content = content.replace(/rounded-lg/g, 'rounded-sm'); // Remove arredondamento globalmente nestes targets
        fs.writeFileSync(targetFile, content, 'utf8');
        console.log('[WARN] Aplicado fallback global: rounded-lg -> rounded-sm');
    }

} catch (err) {
    console.error('Erro:', err);
}
