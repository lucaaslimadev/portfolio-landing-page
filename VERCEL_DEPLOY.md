# 🚀 Deploy na Vercel - Guia Rápido

## ✅ Passo a Passo

### 1. Acesse a Vercel
👉 https://vercel.com

### 2. Faça Login
- Clique em **"Sign Up"** ou **"Log In"**
- Escolha **"Continue with GitHub"**
- Autorize a Vercel a acessar seus repositórios

### 3. Criar Novo Projeto
1. No dashboard, clique em **"Add New Project"**
2. Você verá seus repositórios do GitHub
3. Procure por **"portfolio-landing-page"**
4. Clique em **"Import"**

### 4. Configuração do Projeto
A Vercel detecta automaticamente que é um projeto Next.js, então:

✅ **Framework Preset**: Next.js (já detectado)
✅ **Root Directory**: `./` (deixe como está)
✅ **Build Command**: `npm run build` (automático)
✅ **Output Directory**: `.next` (automático)
✅ **Install Command**: `npm install` (automático)

**NÃO precisa alterar nada!** Apenas clique em **"Deploy"**

### 5. Aguardar o Deploy
- O processo leva cerca de 1-2 minutos
- Você verá o progresso em tempo real
- Quando terminar, verá uma mensagem de sucesso

### 6. Acessar seu Site
- Após o deploy, você receberá uma URL tipo:
  - `https://portfolio-landing-page-xxx.vercel.app`
- Clique para acessar seu site!

### 7. (Opcional) Domínio Personalizado
1. No dashboard do projeto, vá em **Settings** > **Domains**
2. Adicione seu domínio personalizado
3. Siga as instruções de DNS

## 🎉 Pronto!

Seu site está no ar! A Vercel faz deploy automático a cada push no GitHub.

## 📝 Próximas Atualizações

Sempre que você fizer push no GitHub:
```bash
git add .
git commit -m "sua mensagem"
git push
```

A Vercel detecta automaticamente e faz o deploy! 🚀

