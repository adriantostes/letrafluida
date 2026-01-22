const fs = require('fs');
const path = 'c:\\My Web Sites\\letrafluidacopy\\letrafluida.com.br\\assets\\index-BY5pObJn.js';

try {
    let content = fs.readFileSync(path, 'utf8');
    let originalLength = content.length;
    let changes = 0;

    function safeReplace(target, replacement, label) {
        if (content.includes(target)) {
            content = content.replace(target, replacement);
            console.log(`[OK] Replaced: ${label}`);
            changes++;
        } else {
            console.log(`[FAIL] Not found: ${label}`);
        }
    }

    // --- HERO ---
    // 1. H1 (Parte 1 e 2) - Ajustado com espaços
    // Remover o garrancho
    safeReplace(
        `"Transforme o seu ", e.jsx("span", { className: "text-red-700 italic", children: '"garrancho"' }), " ",`,
        `"Sua caligrafia está sabotando ",`,
        "Hero H1 Part 1"
    );
    safeReplace(
        `"em uma letra bonita e elegante."`,
        `"sua imagem profissional?"`,
        "Hero H1 Part 2"
    );

    // 2. Subtitulo Hero
    safeReplace(
        `children: ["O método rápido para ter ", e.jsx("strong", { className: "underline decoration-[#8A7350] underline-offset-4", children: "orgulho da sua escrita" }), " em ", e.jsx("strong", { className: "underline decoration-[#8A7350] underline-offset-4", children: "menos de 7 dias" }), ". Funciona para ", e.jsx("strong", { className: "underline decoration-[#8A7350] underline-offset-4", children: "adultos e crianças" }), ", do zero."]`,
        `children: "Um protocolo biomecânico para quem exige autoridade, clareza e respeito em cada assinatura."`,
        "Hero Subtitle"
    );

    // 3. Botão Hero
    safeReplace(
        `children: "QUERO MELHORAR MINHA LETRA AGORA"`,
        `children: "Garantir Minha Vaga"`,
        "Hero Button"
    );

    // --- BENEFÍCIOS ---
    // 4.1
    safeReplace(`title: "Letra Bonita e Rápida"`, `title: "Escrita Ágil e Elegante"`, "Ben 1 Title");
    safeReplace(
        `desc: "Abandone os garranchos. Aprenda a escrever rápido sem perder a elegância e a clareza."`,
        `desc: "Abandone o garranchos. Aprenda a técnica que une velocidade com beleza estética imediata."`,
        "Ben 1 Desc"
    );
    // 4.2
    safeReplace(`title: "Terapia para a Mente"`, `title: "Foco e Concentração"`, "Ben 2 Title");
    safeReplace(
        `desc: "Escrever à mão acalma a ansiedade. É o seu momento de relaxar e colocar as ideias no papel."`,
        `desc: "A prática da caligrafia é uma meditação ativa que acalma a mente e melhora sua atenção plena."`,
        "Ben 2 Desc"
    );
    // 4.3
    safeReplace(`title: "Mão Firme e Leve"`, `title: "Coordenação Fina"`, "Ben 3 Title");
    safeReplace(
        `desc: "Chega de dor ao escrever. Nossos exercícios soltam a sua mão para o traço sair perfeito sem esforço."`,
        `desc: "O fim da 'mão boba'. Desenvolva firmeza e precisão milimétrica em cada traço."`,
        "Ben 3 Desc"
    );
    // Extra Raciocinio e Confiança (não mudou no request, mantido)

    // --- ANTES / DEPOIS ---
    // Botão "Quero Assinar Com Autoridade"
    safeReplace(
        `children: ["QUERO TER UMA LETRA MELHOR", e.jsx(_,`,
        `children: ["Quero Assinar Com Autoridade", e.jsx(_,`,
        "Botão Antes/Depois"
    );
    // No request ta "Letra de Autoridade (Status)" no lugar de "Letra Bonita e Elegante"
    safeReplace(`children: "Letra Bonita e Elegante"`, `children: "Letra de Autoridade (Status)"`, "Legenda Depois");


    // --- DEPOIMENTOS ---
    // 5.1
    safeReplace(
        `name: "Beatriz Souza", time: "2h", text: "Eu tinha pavor de emprestar meu caderno na faculdade pq minha letra era um garrancho. Em 1 semana fazendo os exercícios de soltura, minha letra mudou da água pro vinho. Até minha mãe elogiou! 😍"`,
        `name: "Roberto Alves", time: "2h", text: "Sempre tive vergonha de escrever no quadro nas reuniões. Depois do protocolo, até me pedem para fazer a ata. A sensação de autoridade é real."`,
        "Depoimento 1"
    );
    // 5.2
    safeReplace(
        `name: "Ricardo Mendes", time: "5h", text: "Sempre apertei muito a caneta, chegava a doer o dedo. O módulo de 'mão leve' foi a salvação. Agora escrevo páginas inteiras sem sentir dor e a letra sai redondinha. Valeu cada centavo."`,
        `name: "Juliana Martins", time: "5h", text: "Sou advogada e minha letra parecia de criança. A tensão na mão era exatamente o meu problema. Soltei a mão e a letra ficou elegante em uma semana."`,
        "Depoimento 2"
    );
    // 5.3
    safeReplace(
        `name: "Cláudia F.", time: "1d", text: "Comprei pq tinha vergonha de preencher ficha em loja e consultório. O curso é muito prático, direto ao ponto. Ontem precisei assinar um documento e pela primeira vez fiz com gosto. Recomendo demais!"`,
        `name: "Marcos Paulo", time: "1d", text: "Comprei o pacote completo só pela curiosidade da 'Assinatura de CEO'. Melhor investimento do ano. Minha assinatura agora impõe respeito no cartório kkk"`,
        "Depoimento 3"
    );
    // 5.4
    safeReplace(
        `name: "Patrícia Lima", time: "2d", text: "Gente, comprei pra mim mas meu filho de 10 anos começou a fazer junto. A coordenação motora dele melhorou 100% e a minha letra tá linda. É uma terapia pra gente fazer junto à noite."`,
        `name: "Carla Diniz", time: "2d", text: "A didática é incrível. Tinha muita dificuldade em manter a mão firme, mas os exercícios de soltura funcionaram como mágica. Hoje sinto prazer em escrever."`,
        "Depoimento 4"
    );

    // --- COMUNIDADE ---
    // 6
    safeReplace(
        `children: ["QUERO ENTRAR PARA O GRUPO", e.jsx(_,`,
        `children: ["Quero Fazer Parte Disso", e.jsx(_,`,
        "CTA Comunidade"
    );

    // --- INTRO METODOLOGIA ---
    // 7
    safeReplace(
        `children: "Passo a passo desenhado para quem não tem tempo a perder. Funciona para adultos e crianças."`,
        `children: 'Você não tem "letra feia", você sofre de Excesso de Tensão. A força desnecessária no punho impede que sua mão obedeça. Nossos exercícios de reprogramação neuro-motora soltam essa trava, permitindo elegância sem esforço.'`,
        "Intro Metodo"
    );


    // --- SECTION FINAL (ASSINATURA) ---
    // 8
    safeReplace(
        `children: ["Sua assinatura é seu ", e.jsx("span", { className: "text-[#8A7350] italic", children: "cartão de visitas" })]`,
        `children: ["Chega de pedir desculpas ", e.jsx("span", { className: "text-[#8A7350] italic", children: "pela sua letra" })]`,
        "Final Title"
    );
    safeReplace(
        `children: "Em um mundo onde tudo é digital, sua escrita manuscrita é o que te diferencia. Domine essa arte."`,
        `children: "Não deixe que a vergonha te impeça de crescer. Você merece assinar seu nome com orgulho."`,
        "Final Text"
    );
    safeReplace(
        `children: "QUERO TRANSFORMAR MINHA LETRA"`,
        `children: "COMEÇAR MEU TREINO AGORA"`,
        "Final CTA"
    );


    if (changes > 0) {
        fs.writeFileSync(path, content, 'utf8');
        console.log(`Saved ${changes} changes to ${path}`);
    } else {
        console.log("No changes made.");
    }
} catch (e) { console.error(e); }
