# 📧 Guia de Integração - Formulário de Contato

Este arquivo explica como integrar seu formulário de contato com um serviço de envio de emails.

## Opções de Integração

### ✅ Opção 1: Formspree (Mais Fácil - Recomendado)

**Formspree** é um serviço gratuito que captura envios de formulários sem necessidade de backend.

#### Passo a passo:

1. **Acesse** https://formspree.io
2. **Crie uma conta** com seu email
3. **Configure um novo formulário**
   - Nome: "TecPeper Contato"
   - Email para recebimento: seu@email.com
4. **Copie o ID do formulário**
5. **Cole em `js/config.js`**:
   ```javascript
   formulario: {
       usar_formspree: true,
       formspree_id: "xyzabc123" // seu ID aqui
   }
   ```
6. **Atualize o formulário em `index.html`**:
   ```html
   <form class="formulario" method="POST" action="https://formspree.io/f/xyzabc123">
       <!-- campos do formulário -->
   </form>
   ```

**Vantagens:**
- ✅ Sem necessidade de servidor
- ✅ Gratuito
- ✅ Simples de configurar
- ✅ Proteção contra spam

---

### ✅ Opção 2: Email.js (JavaScript Puro)

**Email.js** permite enviar emails diretamente do JavaScript.

#### Passo a passo:

1. **Acesse** https://www.emailjs.com
2. **Crie uma conta** gratuita
3. **Configure um Email Service** (Gmail, Outlook, etc)
4. **Copie sua chave pública**
5. **Adicione o script ao HTML**:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
   ```
6. **Use este código no `js/script.js`**:
   ```javascript
   // Inicializar Email.js
   emailjs.init("YOUR_PUBLIC_KEY");

   const form = document.querySelector('.formulario');
   form.addEventListener('submit', (e) => {
       e.preventDefault();
       
       emailjs.sendForm('service_id', 'template_id', form)
           .then(() => alert('Email enviado!'))
           .catch(err => alert('Erro: ' + err));
   });
   ```

**Vantagens:**
- ✅ Sem necessidade de backend
- ✅ Controle total
- ✅ Integração com sua conta de email
- ✅ Templates customizáveis

---

### ✅ Opção 3: Backend Próprio (Node.js + Express)

Se você tem um servidor, aqui está um exemplo básico:

#### Backend (Node.js):

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configurar transporter de email
const transporter = nodemailer.createTransport({
    service: 'gmail', // ou outro serviço
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Rota para receber contatos
app.post('/api/contato', async (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;

    try {
        // Validar
        if (!nome || !email || !assunto || !mensagem) {
            return res.status(400).json({ erro: 'Campos obrigatórios' });
        }

        // Enviar email
        await transporter.sendMail({
            from: email,
            to: process.env.ADMIN_EMAIL,
            subject: `Contato TecPeper: ${assunto}`,
            html: `
                <h2>Novo contato</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${assunto}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${mensagem}</p>
            `
        });

        res.json({ sucesso: true, msg: 'Email enviado!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao enviar email' });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
```

#### Frontend (atualizar `js/script.js`):

```javascript
const form = document.querySelector('.formulario');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        assunto: document.getElementById('assunto').value,
        mensagem: document.getElementById('mensagem').value
    };

    try {
        const response = await fetch('http://seu-servidor.com/api/contato', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        const result = await response.json();
        if (result.sucesso) {
            alert('✓ Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('❌ Erro: ' + result.erro);
        }
    } catch (err) {
        alert('❌ Erro ao enviar: ' + err.message);
    }
});
```

---

### ✅ Opção 4: Netlify Forms

Se você hospeda no Netlify, use o form handler nativo:

```html
<form name="contato" method="POST" netlify>
    <input type="hidden" name="form-name" value="contato">
    <!-- campos do formulário -->
</form>
```

---

## 🔒 Segurança

**Importante:**
- 🔐 Nunca coloque senhas em `config.js`
- 🔐 Use variáveis de ambiente (`.env`)
- 🔐 Sempre valide dados no backend
- 🔐 Ative reCAPTCHA para evitar spam

### Adicionar reCAPTCHA v3:

```html
<script src="https://www.google.com/recaptcha/api.js?render=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></script>

<script>
grecaptcha.ready(function() {
    document.querySelector('.formulario').addEventListener('submit', async (e) => {
        e.preventDefault();
        const token = await grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI');
        // Enviar token com o formulário
    });
});
</script>
```

---

## 📊 Monitorando Envios

### Com Formspree:
- Acesse seu painel formspree.io
- Veja todos os emails recebidos em tempo real

### Com Email.js:
- Acesse seu painel emailjs.com
- Veja histórico de envios

### Com Backend:
- Use um serviço como SendGrid, Mailgun ou AWS SES
- Mantenha logs de envios no seu banco de dados

---

## ❌ Solução de Problemas

**"Formulário não está enviando?"**
1. Abra o console do navegador (F12)
2. Veja se há mensagens de erro
3. Verifique se a chave/URL está correta

**"Email foi para spam?"**
1. Configure SPF, DKIM, DMARC
2. Use um serviço confiável (SendGrid, Mailgun)
3. Adicione um Reply-To válido

**"Muitos abusos/spam?"**
1. Ative reCAPTCHA
2. Limite requisições por IP
3. Valide emails antes de enviar

---

**Dúvidas?** Consulte a documentação dos serviços acima!
