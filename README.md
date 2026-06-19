# TecPeper - Website

Website moderno e responsivo para a empresa TecPeper com design elegante focando em papel e tecnologia.

## 📁 Estrutura do Projeto

```
tecpeper/
├── index.html              # Arquivo HTML principal
├── css/
│   ├── style.css          # Estilos principais (cores, layout, responsividade)
│   └── animations.css     # Animações, efeitos e modo dark
├── js/
│   └── script.js          # Funcionalidades JavaScript (navegação, formulário, etc)
└── assets/
    ├── images/            # Pasta para imagens (fotos do produto, empresa, etc)
    └── icons/             # Pasta para ícones customizados
```

## 🎨 Características

- **Design Responsivo** - Funciona em celular, tablet e desktop
- **Navegação Suave** - Links com scroll smooth automático
- **Formulário de Contato** - Com validação e feedback visual
- **Redes Sociais** - Links para Instagram, Facebook, LinkedIn, Twitter, WhatsApp e YouTube
- **Animações** - Fade-in ao entrar na viewport
- **Dark Mode** - Suporte opcional a tema escuro
- **Acessibilidade** - Focado em boas práticas de UX

## 🚀 Como Usar

1. **Editar Textos**: Abra `index.html` e substitua os placeholders
2. **Adicionar Imagens**: Coloque as imagens em `assets/images/` e atualize os `[...]` nos placeholders
3. **Atualizar Links Sociais**: Modifique as URLs em `js/script.js` na função `atualizarLinksRedeSocial()`
4. **Personalizar Cores**: Edite as variáveis CSS em `css/style.css` (seção `:root`)

## 📝 Seções do Site

- **Header** - Logotipo, nome da empresa e navegação
- **Hero/Home** - Introdução com imagem principal e logo do produto
- **Sobre a Empresa** - Informações, missão e valores
- **Produto Principal** - Galeria de fotos e features do produto
- **Próximos Produtos** - Cards com "em breve" para futuros lançamentos
- **Contato** - Formulário e redes sociais
- **Footer** - Copyright e informações finais

## 🎯 Arquivos Principais

### `index.html`
- Estrutura completa do site
- Todos os elementos semânticos
- Referências aos arquivos CSS e JS

### `css/style.css`
- Variáveis de cor (fácil de customizar)
- Layout Grid/Flexbox
- Hover effects e transições
- Responsividade mobile-first

### `css/animations.css`
- Animações de entrada
- Modo dark mode
- Acessibilidade (focus states)

### `js/script.js`
- Scroll suave
- Destaque do link ativo
- Validação de formulário
- Rastreamento de eventos
- Lazy loading de imagens

## 🔧 Personalização

### Cores
Edite em `css/style.css`:
```css
:root {
    --cor-papel: #fdfaf5;
    --cor-tinta: #1a1a1a;
    --cor-tech: #2563eb;
    /* ... */
}
```

### Redes Sociais
Edite em `js/script.js`:
```javascript
const links = {
    instagram: 'https://instagram.com/seu_usuario',
    facebook: 'https://facebook.com/seu_usuario',
    // ...
};
```

### Informações de Contato
Edite no `index.html`:
- Email: `contato@tecpeper.com`
- Telefone: `+55 (11) 99999-9999`
- Localização: `São Paulo, SP - Brasil`

## 📱 Responsividade

O site é totalmente responsivo com breakpoint em:
- **Desktop**: 1400px max-width
- **Tablet**: 768px
- **Mobile**: < 768px

## ✨ Funcionalidades JavaScript

1. **Navegação Suave** - Clique nos links do menu
2. **Link Ativo** - Destaca automaticamente conforme você scroll
3. **Formulário** - Validação e envio com feedback
4. **Animações** - Fade-in ao entrar em viewport
5. **Redes Sociais** - Links diretos para suas contas
6. **Analytics Básico** - Log de cliques em links

## 🎓 Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Grid, Flexbox, Gradients)
- JavaScript vanilla (sem dependências)
- Font Awesome (ícones de redes sociais)

## 📧 Próximas Melhorias

- [ ] Backend para envio real de emails
- [ ] CMS para gerenciar conteúdo
- [ ] Blog/Notícias
- [ ] Galeria de clientes/cases
- [ ] Integração com analytics

---

**Desenvolvido com ❤️ para TecPeper**
