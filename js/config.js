/* 
  CONFIGURAÇÃO DO SITE
  Edite este arquivo para customizar o comportamento do seu site
*/

const CONFIG = {
    // ===== INFORMAÇÕES DA EMPRESA =====
    empresa: {
        nome: "TecPeper",
        email: "contato@tecpeper.com",
        telefone: "+55 (11) 99999-9999",
        endereco: "São Paulo, SP - Brasil",
        descricao: "Inovação em Papel e Tecnologia"
    },

    // ===== REDES SOCIAIS =====
    redes_sociais: {
        instagram: "https://instagram.com/tecpeper",
        facebook: "https://facebook.com/tecpeper",
        linkedin: "https://linkedin.com/company/tecpeper",
        twitter: "https://twitter.com/tecpeper",
        whatsapp: "https://wa.me/5511999999999",
        youtube: "https://youtube.com/@tecpeper"
    },

    // ===== FORMULÁRIO =====
    formulario: {
        // Opção 1: Usar Formspree (https://formspree.io)
        // Após se registrar, substitua 'your-form-id' pelo seu ID
        usar_formspree: false,
        formspree_id: "your-form-id",

        // Opção 2: Usar seu próprio backend
        backend_url: "https://seu-servidor.com/api/contato",
        
        // Mensagens personalizadas
        msg_sucesso: "✓ Mensagem enviada com sucesso! Obrigado por entrar em contato.",
        msg_erro: "❌ Erro ao enviar mensagem. Tente novamente mais tarde.",
        msg_validacao: "⚠️ Por favor, preencha todos os campos!",
        tempo_envio: 1000 // em ms
    },

    // ===== CORES CUSTOMIZADAS =====
    cores: {
        papel: "#fdfaf5",
        papel_escuro: "#ede8df",
        tinta: "#1a1a1a",
        tinta_suave: "#555555",
        tech: "#2563eb",
        tech_claro: "#3b82f6",
        destaque: "#f59e0b",
        borda: "#d4cfc7"
    },

    // ===== PRODUTOS =====
    produtos: [
        {
            nome: "Produto Principal",
            descricao: "Descrição do seu primeiro produto",
            imagem: "assets/images/produto-1.jpg"
        },
        {
            nome: "Produto 2",
            descricao: "Em breve...",
            status: "coming-soon"
        },
        {
            nome: "Produto 3",
            descricao: "Em breve...",
            status: "coming-soon"
        }
    ],

    // ===== ANALYTICS =====
    analytics: {
        ativar: true,
        google_analytics_id: "", // Coloque seu ID do Google Analytics (ex: "G-XXXXXXXXXX")
        rastrear_cliques: true,
        rastrear_formulario: true
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
