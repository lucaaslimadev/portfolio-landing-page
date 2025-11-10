# 🚀 Guia de Deploy - Portfólio Profissional

## 📋 Pré-requisitos

- Conta no [GitHub](https://github.com)
- Git instalado no seu computador
- Node.js 18+ instalado

## 🔧 Passo a Passo

### 1. Inicializar o Repositório Git

```bash
# Inicializar git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: Portfólio profissional completo com Next.js 15, TypeScript e animações modernas"
```

### 2. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em **"New repository"**
3. Nome sugerido: `portfolio-landing-page` ou `portfolio-profissional`
4. **NÃO** marque "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### 3. Conectar e Fazer Push

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/portfolio-landing-page.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

### 4. Deploy na Vercel (Recomendado)

1. Acesse [Vercel](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `portfolio-landing-page`
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Clique em **"Deploy"**

### 5. Configurar Domínio Personalizado (Opcional)

1. No dashboard da Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio personalizado
3. Siga as instruções de DNS

## ✅ Verificações Pós-Deploy

- [ ] Site está acessível
- [ ] Todas as imagens carregam
- [ ] Formulário de contato funciona
- [ ] Links externos funcionam
- [ ] Responsividade testada
- [ ] Performance verificada (Lighthouse)

## 🔄 Atualizações Futuras

Para atualizar o site após mudanças:

```bash
# Adicionar mudanças
git add .

# Commit
git commit -m "feat: descrição da mudança"

# Push
git push origin main
```

A Vercel fará deploy automático! 🎉

## 📝 Notas Importantes

- O arquivo `.env.local` **NÃO** deve ser commitado (já está no .gitignore)
- Configure variáveis de ambiente na Vercel se necessário
- O projeto já está otimizado para produção

