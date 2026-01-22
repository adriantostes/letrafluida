(function () {
    // Configuração Anti-Bug
    const CONFIG = {
        maxAttempts: 100, // 10 segundos tentando
        intervalMs: 100,
        debug: true
    };

    let attempts = 0;

    function log(msg) {
        if (CONFIG.debug) console.log(`%c[SmartOrder] ${msg}`, 'color: #00ff00; background: #000; font-weight: bold;');
    }

    function fixStructureAndCopy() {
        // --- PARTE 1: Correção de Copy Fallback (Segurança Dupla) ---
        // Caso o cache do arquivo JS persista, forçamos a troca do texto via DOM.

        // Mapeamento de textos antigos para novos
        const textReplacements = [
            { old: "Simples, Prático e Direto", new: "Eliminar a Tensão" },
            { old: "Passo 1: Destravando a Mão", new: "Protocolo 1: Biomecânica" },
            { old: "Passo 2: O Alfabeto Perfeito", new: "Protocolo 2: Alfabeto Executivo" },
            { old: "Passo 3: Criando sua Assinatura", new: "Protocolo 3: Assinatura de Alto Valor" }
        ];

        // Varre todos elementos de texto relevantes (h3, spans, p do metodo)
        // Isso é pesado? Não para uma LP simples.
        const elementsToCheck = document.querySelectorAll('h3, span, p, h2');
        elementsToCheck.forEach(el => {
            if (el.childNodes.length === 1 && el.firstChild.nodeType === 3) { // Só nós de texto diretos
                let txt = el.textContent;
                let changed = false;
                textReplacements.forEach(pair => {
                    if (txt.includes(pair.old)) {
                        // Replace seguro
                        el.textContent = txt.replace(pair.old, pair.new);
                        changed = true;
                        log(`Copy corrigida na força bruta: ${pair.old} -> ${pair.new}`);
                    }
                });
                // Fix específico para "Passo 1" contendo parenteses
                if (txt.includes("Passo 1") && txt.includes("Fim da Dor")) {
                    el.textContent = "Protocolo 1: Biomecânica (Fim da Dor)";
                    log("Copy Protocolo 1 corrigida.");
                }
            }
        });


        // --- PARTE 2: Reordenação de Seções ---

        // Localizar Seções Chave
        const headings = Array.from(document.querySelectorAll('h2'));
        let sectionBeneficios = null;
        let sectionPerfil = null;
        let sectionOQueVaiAprender = null;

        for (const h2 of headings) {
            const text = (h2.textContent || "").toLowerCase();
            const section = h2.closest('section');
            if (!section) continue;

            if (text.includes("benefícios que você")) {
                sectionBeneficios = section;
            } else if (text.includes("para quem é")) {
                sectionPerfil = section;
            } else if (text.includes("o que você vai aprender")) {
                sectionOQueVaiAprender = section;
            }
        }

        // Verifica estado atual
        if (!sectionBeneficios || !sectionPerfil || !sectionOQueVaiAprender) {
            // Ainda não carregou tudo
            return false;
        }

        // Verifica se JÁ está na ordem certa para não rodar à toa
        // Ordem desejada: OQueVaiAprender -> Benefícios -> Perfil
        if (sectionOQueVaiAprender.nextElementSibling === sectionBeneficios &&
            sectionBeneficios.nextElementSibling === sectionPerfil) {
            // log("Ordem já está correta.");
            return true; // Stop attempts
        }

        try {
            const parent = sectionOQueVaiAprender.parentNode;

            // Move Benefícios para DEPOIS de O Que Vai Aprender
            parent.insertBefore(sectionBeneficios, sectionOQueVaiAprender.nextElementSibling);

            // Move Perfil para DEPOIS de Benefícios
            parent.insertBefore(sectionPerfil, sectionBeneficios.nextElementSibling);

            log("Seções REORDENADAS com sucesso.");
            return true;
        } catch (e) {
            console.error("[SmartOrder] Erro ao mover:", e);
            return false;
        }
    }

    // Inicialização Robusta
    const interval = setInterval(() => {
        attempts++;
        if (fixStructureAndCopy() || attempts > CONFIG.maxAttempts) {
            if (attempts > CONFIG.maxAttempts) log("Timeout de tentativas.");
            clearInterval(interval);
        }
    }, CONFIG.intervalMs);

    // Observer como backup para mudanças tardias (SPA navigation)
    const observer = new MutationObserver(() => {
        fixStructureAndCopy();
    });
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    }

})();
