# 📧 Como Configurar o Recebimento de Emails do Formulário

## 🎯 Opção Recomendada: Resend (Gratuito)

O Resend é gratuito até **3.000 emails/mês** e muito fácil de configurar.

### Passo 1: Criar Conta no Resend

1. Acesse: https://resend.com
2. Clique em **"Sign Up"** (pode usar sua conta GitHub)
3. Confirme seu email

### Passo 2: Obter API Key

1. No dashboard do Resend, vá em **"API Keys"**
2. Clique em **"Create API Key"**
3. Dê um nome (ex: "Portfolio Contact Form")
4. Copie a chave gerada (ela só aparece uma vez!)

### Passo 3: Verificar Domínio (Opcional mas Recomendado)

Para usar seu próprio domínio no email:

1. Vá em **"Domains"** no dashboard
2. Clique em **"Add Domain"**
3. Adicione seu domínio (ex: `seu-site.com`)
4. Siga as instruções de DNS
5. Aguarde a verificação (pode levar alguns minutos)

**Se não verificar domínio**, você pode usar o domínio padrão do Resend:
- `onboarding@resend.dev` (apenas para testes)

### Passo 4: Configurar Variáveis de Ambiente

#### No Ambiente Local (.env.local)

Crie/edite o arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contato@seu-dominio.com
RESEND_TO_EMAIL=seu-email@gmail.com
```

**Explicação:**
- `RESEND_API_KEY`: A chave que você copiou do Resend
- `RESEND_FROM_EMAIL`: Email que aparecerá como remetente (use seu domínio verificado ou `onboarding@resend.dev`)
- `RESEND_TO_EMAIL`: Seu email pessoal onde você quer receber as mensagens

#### Na Vercel (Produção)

1. Acesse seu projeto na Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione as 3 variáveis:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
4. Clique em **Save**
5. Faça um novo deploy (ou aguarde o próximo)

### Passo 5: Testar

1. Acesse seu site
2. Preencha o formulário de contato
3. Envie a mensagem
4. Verifique seu email (pode estar na pasta de spam inicialmente)

## ✅ Pronto!

Agora você receberá todas as mensagens do formulário no seu email pessoal!

---

## 🔄 Alternativas

### Opção 2: Webhook (Zapier, Make, etc.)

Se preferir usar um serviço de automação:

1. Configure um webhook no Zapier/Make
2. Modifique a rota `/api/contact/route.ts` para enviar para o webhook
3. Configure ações automáticas (salvar em planilha, notificar no Slack, etc.)

### Opção 3: Banco de Dados

Para salvar as mensagens em um banco:

1. Configure um banco (PostgreSQL, MongoDB, etc.)
2. Modifique a rota para salvar os dados
3. Crie um dashboard para visualizar as mensagens

---

## 🐛 Troubleshooting

### Não estou recebendo emails

1. ✅ Verifique se as variáveis de ambiente estão configuradas
2. ✅ Confira se o domínio está verificado no Resend
3. ✅ Verifique a pasta de spam
4. ✅ Veja os logs da Vercel para erros
5. ✅ Teste com `onboarding@resend.dev` primeiro

### Erro "Invalid API Key"

- Verifique se copiou a chave completa
- Certifique-se de que não há espaços extras
- Gere uma nova chave se necessário

### Email vai para spam

- Verifique seu domínio no Resend
- Configure SPF e DKIM corretamente
- Use um domínio verificado como remetente

---

## 📝 Exemplo de Email Recebido

Quando alguém enviar uma mensagem, você receberá um email assim:

```
Assunto: Novo contato do portfólio - Nome da Pessoa

Nome: João Silva
Email: joao@exemplo.com
Mensagem: 
Olá! Gostaria de conversar sobre um projeto...
```

Você pode responder diretamente ao email que a resposta irá para o remetente original!

---

## 💡 Dica Extra

Para não perder nenhuma mensagem, você pode:

1. **Criar um filtro no Gmail** para destacar emails do formulário
2. **Configurar notificações** no seu celular
3. **Usar um email dedicado** apenas para contatos do portfólio

