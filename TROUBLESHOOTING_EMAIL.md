# 🔧 Troubleshooting - Formulário de Contato

## ✅ Variáveis Configuradas Corretamente

Suas variáveis estão assim:
```
RESEND_API_KEY=re_fbZVwad9_9KviVoxwrRz4uJS15Xhjb1xe
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=lucaaslimadev@gmail.com
```

## 🔍 Como Verificar o Erro

### 1. Verificar Logs da Vercel

1. Acesse seu projeto na Vercel
2. Vá em **"Deployments"**
3. Clique no último deployment
4. Vá em **"Functions"** > **"/api/contact"**
5. Veja os logs quando alguém enviar o formulário

### 2. Erros Comuns

#### Erro: "Invalid API Key"
- ✅ Verifique se a API key está correta (sem espaços extras)
- ✅ Certifique-se de que copiou a chave completa
- ✅ Gere uma nova API key no Resend se necessário

#### Erro: "Domain not verified"
- O email `onboarding@resend.dev` deve funcionar sem verificação
- Se não funcionar, você precisa verificar um domínio no Resend

#### Erro: "Rate limit exceeded"
- Resend tem limite de 3.000 emails/mês no plano gratuito
- Verifique seu uso no dashboard do Resend

### 3. Testar Localmente

Para testar se está funcionando localmente:

1. Certifique-se de que o arquivo `.env.local` existe com as variáveis
2. Execute: `npm run dev`
3. Acesse: `http://localhost:3000`
4. Preencha o formulário
5. Veja os logs no terminal

### 4. Verificar no Console do Navegador

1. Abra o DevTools (F12)
2. Vá na aba **Console**
3. Envie o formulário
4. Veja se há erros no console

### 5. Verificar Resposta da API

No console do navegador, você verá:
- ✅ Se `emailSent: true` - Email foi enviado com sucesso
- ❌ Se `emailError: "..."` - Há um erro específico

## 🛠️ Soluções Rápidas

### Solução 1: Verificar se as variáveis estão ativas

Na Vercel:
1. Vá em **Settings** > **Environment Variables**
2. Certifique-se de que as variáveis estão marcadas para **Production**
3. Faça um **novo deploy** após adicionar/editar variáveis

### Solução 2: Testar API Key do Resend

1. Acesse: https://resend.com/api-keys
2. Verifique se a API key está ativa
3. Se necessário, crie uma nova e atualize na Vercel

### Solução 3: Verificar Domínio no Resend

1. Acesse: https://resend.com/domains
2. Se não tiver nenhum domínio, o `onboarding@resend.dev` deve funcionar
3. Se quiser usar seu próprio domínio, adicione e verifique

## 📧 Testar Envio de Email Diretamente

Você pode testar se o Resend está funcionando usando a API diretamente:

```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_fbZVwad9_9KviVoxwrRz4uJS15Xhjb1xe" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "onboarding@resend.dev",
    "to": "lucaaslimadev@gmail.com",
    "subject": "Teste",
    "html": "<p>Teste de email</p>"
  }'
```

Se isso funcionar, o problema está no código. Se não funcionar, o problema está na configuração do Resend.

## 🐛 Erro Específico: "onboarding@resend.dev"

Se o erro for relacionado ao email remetente:

1. **Opção 1**: Verificar um domínio no Resend e usar `contato@seu-dominio.com`
2. **Opção 2**: Usar um email de teste temporário

## 📝 Próximos Passos

1. ✅ Verifique os logs da Vercel
2. ✅ Teste localmente com `.env.local`
3. ✅ Verifique o console do navegador
4. ✅ Teste a API do Resend diretamente

Se ainda não funcionar, me envie:
- A mensagem de erro exata dos logs
- O que aparece no console do navegador
- Screenshot do erro (se possível)

