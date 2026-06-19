# 🚀 Guia de Teste e Deployment

## 🧪 Testando Localmente

### Opção 1: Abrir Diretamente no Navegador
1. Clique com botão direito em `index.html`
2. Selecione "Abrir com" → Seu navegador favorito
3. Pronto! O site abrirá (funcionalidade limitada para arquivos locais)

### Opção 2: Usar um Servidor Local (Recomendado)

#### Python 3:
```bash
cd /caminho/para/tecpeper
python -m http.server 8000
# Abra http://localhost:8000
```

#### Python 2:
```bash
cd /caminho/para/tecpeper
python -m SimpleHTTPServer 8000
# Abra http://localhost:8000
```

#### Node.js + http-server:
```bash
npm install -g http-server
cd /caminho/para/tecpeper
http-server
# Abra http://localhost:8080
```

#### Live Server (VS Code):
1. Instale a extensão "Live Server" 
2. Clique com direito em `index.html`
3. Selecione "Open with Live Server"
4. Abre automaticamente e recarrega ao editar

---

## 🌐 Hospedagem (Deploy)

### ✅ Opção 1: Netlify (Gratuito e Fácil)

1. **Acesse** https://app.netlify.com
2. **Clique** "Add new site" → "Deploy manually"
3. **Arraste** a pasta `tecpeper` ou conecte seu GitHub
4. **Pronto!** Seu site estará em `seu-site.netlify.app`

**Vantagens:**
- ✅ Grátis
- ✅ HTTPS automático
- ✅ Deploy em segundos
- ✅ Suporte a formas Netlify
- ✅ Domínio customizado

---

### ✅ Opção 2: Vercel

1. **Acesse** https://vercel.com
2. **Importe seu repositório GitHub**
3. **Clique Deploy**
4. **Seu site estará pronto em segundos**

**Vantagens:**
- ✅ Muito rápido
- ✅ Grátis
- ✅ Excelente performance
- ✅ Analytics incluído

---

### ✅ Opção 3: GitHub Pages (Gratuito)

1. **Crie um repositório** `seu-usuario.github.io`
2. **Faça upload dos arquivos**
3. **Seu site estará em** `https://seu-usuario.github.io`

**Vantagens:**
- ✅ Hospedagem permanente
- ✅ Versionamento incluído
- ✅ Sem custo

---

### ✅ Opção 4: Servidor Próprio/Hospedagem

Se tem um servidor ou contrata hospedagem:

1. **Conecte via FTP/SFTP**
2. **Envie todos os arquivos**
3. **Atualize o DNS** para apontar para seu servidor
4. **Configure SSL/HTTPS**

**Hospedadores Recomendados:**
- Hostinger ($$)
- Bluehost ($$)
- SiteGround ($$)
- 000webhost (Grátis)

---

## 📋 Checklist Antes de Publicar

- [ ] Remover placeholders `[...]`
- [ ] Adicionar todas as imagens reais
- [ ] Atualizar nome empresa em todos os lugares
- [ ] Verificar todos os links estão funcionando
- [ ] Testar formulário de contato
- [ ] Testar redes sociais
- [ ] Verificar responsividade (F12 → Ctrl+Shift+M)
- [ ] Remover `console.log()` de debug
- [ ] Atualizar `.env` com variáveis corretas
- [ ] Testar em navegadores diferentes
- [ ] Verificar SEO (meta tags, titles)
- [ ] Adicionar favicon (`assets/icon/favicon.ico`)
- [ ] Ativar analytics (Google Analytics)
- [ ] Configurar domínio customizado

---

## 🔍 Ferramentas de Teste

### Verificar Performance
- https://pagespeed.web.dev/ (Google)
- https://www.webpagetest.org/

### Verificar SEO
- https://moz.com/free-seo-tools
- https://search.google.com/search-console

### Verificar Acessibilidade
- https://www.achecker.ca/
- https://wave.webaim.org/

### Verificar Links
- https://www.w3schools.com/html/html_formatting.asp
- Ctrl+F5 (limpar cache)

---

## 🎯 Otimizações para Performance

### 1. Comprimir Imagens
```bash
# Usar TinyPNG (online) ou:
ffmpeg -i imagem.jpg -quality 80 imagem-otimizado.jpg
```

### 2. Minificar CSS/JS
```bash
npm install -g minify
minify css/style.css > css/style.min.css
minify js/script.js > js/script.min.js
```

### 3. Usar CDN
```html
<!-- CloudFlare CDN -->
<link href="https://cdnjs.cloudflare.com/...">
```

### 4. Lazy Loading
```html
<img src="..." loading="lazy">
```

---

## 🔐 Segurança

1. **HTTPS** - Use sempre (Netlify/Vercel faz automaticamente)
2. **Headers** - Configure X-Frame-Options, X-Content-Type-Options
3. **CORS** - Se usar API externa
4. **Validação** - Sempre validar no frontend E backend
5. **Rate Limiting** - Limitar requisições por IP

---

## 📊 Analytics

### Google Analytics
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Hotjar (Mapa de calor)
```html
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1234567,hjsv:6};
        // ...
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## 📱 Testar em Dispositivos Reais

1. **Seu computador** - Redimensione a janela
2. **Seu celular** - Use `http://seu-ip-local:8000`
3. **Ferramentas** - Chrome DevTools (F12)
4. **Online** - https://responsively.app/

---

## 🐛 Debugging

### Console do Navegador
- F12 → Console
- Procure por erros (vermelho)
- Use `console.log()` para debug

### Network Tab
- F12 → Network
- Veja requisições lentas
- Otimize imagens grandes

### Performance Tab
- F12 → Performance
- Registre e veja gargalos
- Otimize operações lentas

---

## 📞 Suporte

Precisa de ajuda?
1. Abra o DevTools (F12)
2. Veja se há erros
3. Procure nos documentos da ferramenta (Netlify, Vercel, etc)
4. Busque no Stack Overflow

---

**Boa sorte! 🚀**
