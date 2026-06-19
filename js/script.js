// ===== NAVEGAÇÃO SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== DESTACAR LINK ATIVO DA NAV =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== FORMULÁRIO DE CONTATO =====
const form = document.querySelector('.formulario');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Validar
        if (!nome || !email || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        // Simular envio
        const botao = form.querySelector('.submit-button');
        const textOriginal = botao.textContent;
        botao.textContent = 'Enviando...';
        botao.disabled = true;

        setTimeout(() => {
            // Aqui você pode enviar para um servidor
            console.log({
                nome,
                email,
                assunto,
                mensagem
            });

            // Feedback para o usuário
            alert('✓ Mensagem enviada com sucesso!\nObrigado por entrar em contato.');
            
            // Limpar formulário
            form.reset();
            
            // Restaurar botão
            botao.textContent = textOriginal;
            botao.disabled = false;
        }, 1000);
    });
}

// ===== ANIMAÇÃO DE ENTRADA (FADE-IN) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação a elementos específicos
document.querySelectorAll('.feature-item, .coming-soon-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===== MODAL/POPUP PARA IMAGENS =====
function criarModalImagem() {
    const imagemBoxes = document.querySelectorAll('.image-box, .empresa-image, .produto-img-principal, .produto-img-small');
    
    imagemBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Aqui você pode adicionar funcionalidade de modal se quiser
            console.log('Clique em imagem:', this);
        });
    });
}

criarModalImagem();

// ===== SOCIAL MEDIA LINKS =====
function atualizarLinksRedeSocial() {
    const links = {
        instagram: 'https://instagram.com/tecpeper',
        facebook: 'https://facebook.com/tecpeper',
        linkedin: 'https://linkedin.com/company/tecpeper',
        twitter: 'https://twitter.com/tecpeper',
        whatsapp: 'https://wa.me/5511999999999',
        youtube: 'https://youtube.com/@tecpeper'
    };

    // Atualizar links reais (substitua os valores acima)
    document.querySelectorAll('.social-links a').forEach((link, index) => {
        const platforms = Object.values(links);
        if (platforms[index]) {
            link.href = platforms[index];
        }
    });
}

atualizarLinksRedeSocial();

// ===== CARREGAR IMAGENS DINAMICAMENTE =====
function configurarImagensPlaceholder() {
    const placeholders = document.querySelectorAll('[data-imagem]');
    
    placeholders.forEach(img => {
        const tipo = img.getAttribute('data-imagem');
        // Aqui você pode carregar imagens reais substituindo os placeholders
        console.log('Placeholder de imagem:', tipo);
    });
}

configurarImagensPlaceholder();

// ===== CONTADOR DE VISITANTES (EXEMPLO) =====
function inicializarContador() {
    const visitantes = localStorage.getItem('tecpeper_visitantes') || 0;
    const novoTotal = parseInt(visitantes) + 1;
    localStorage.setItem('tecpeper_visitantes', novoTotal);
    console.log('Total de visitantes (locais):', novoTotal);
}

inicializarContador();

// ===== THEME ESCURO (OPCIONAL) =====
function ativarTemaEscuro() {
    const botaoTema = document.querySelector('[data-toggle-tema]');
    if (botaoTema) {
        botaoTema.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('tema', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // Restaurar tema anterior
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

ativarTemaEscuro();

// ===== ANALYTICS SIMPLES =====
function rastrearCliques() {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) {
            const link = e.target.closest('a');
            console.log('Clique em link:', link.href);
        }
    });
}

rastrearCliques();

// ===== LAZY LOADING PARA IMAGENS =====
if ('IntersectionObserver' in window) {
    const imagemLazyload = document.querySelectorAll('img[data-lazy]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.lazy;
                img.removeAttribute('data-lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    imagemLazyload.forEach(img => imageObserver.observe(img));
}

console.log('Script carregado com sucesso! 🚀');
