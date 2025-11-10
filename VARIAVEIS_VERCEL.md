# 🔐 Variáveis de Ambiente para Vercel

## 📋 Copie e Cole estas Variáveis na Vercel

Acesse: **Settings** > **Environment Variables** no seu projeto na Vercel

### Variáveis para Adicionar:

```
RESEND_API_KEY=re_fbZVwad9_9KviVoxwrRz4uJS15Xhjb1xe
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=lucaaslimadev@gmail.com
```

---

## 📝 Passo a Passo na Vercel

1. **Acesse seu projeto** na Vercel
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Environment Variables"**
4. Para cada variável, clique em **"Add New"** e preencha:

### Variável 1:
- **Name**: `RESEND_API_KEY`
- **Value**: `re_fbZVwad9_9KviVoxwrRz4uJS15Xhjb1xe`
- **Environment**: Marque todas (Production, Preview, Development)

### Variável 2:
- **Name**: `RESEND_FROM_EMAIL`
- **Value**: `onboarding@resend.dev`
- **Environment**: Marque todas (Production, Preview, Development)

### Variável 3:
- **Name**: `RESEND_TO_EMAIL`
- **Value**: `lucaaslimadev@gmail.com`
- **Environment**: Marque todas (Production, Preview, Development)

5. Clique em **"Save"** em cada uma
6. Faça um **novo deploy** (ou aguarde o próximo automático)

---

## ✅ Pronto!

Após configurar, todas as mensagens do formulário serão enviadas para:
📧 **lucaaslimadev@gmail.com**

---

## 🔄 Atualizar Email Remetente (Opcional)

Se você verificar um domínio no Resend, pode mudar o `RESEND_FROM_EMAIL` para:
- `contato@seu-dominio.com`
- `noreply@seu-dominio.com`
- Ou qualquer email do seu domínio verificado

Por enquanto, `onboarding@resend.dev` funciona perfeitamente para testes e produção!

