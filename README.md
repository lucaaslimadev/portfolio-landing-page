# 🚀 Portfólio Profissional - Lucas Lima

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-0055FF?style=for-the-badge&logo=framer)

**Landing Page Moderna e Profissional com Animações Fluidas e Design Premium**

[🌐 Demo](#) • [📖 Documentação](#documentação) • [💻 Tecnologias](#tecnologias) • [🚀 Deploy](#deploy)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Características Principais](#-características-principais)
- [🎨 Design e UX](#-design-e-ux)
- [💻 Tecnologias](#-tecnologias)
- [🚀 Início Rápido](#-início-rápido)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎯 Funcionalidades](#-funcionalidades)
- [⚡ Performance](#-performance)
- [🔧 Configuração](#-configuração)
- [📱 Responsividade](#-responsividade)
- [🌐 Deploy](#-deploy)
- [📝 Scripts Disponíveis](#-scripts-disponíveis)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este é um **portfólio profissional moderno** desenvolvido com as mais recentes tecnologias do ecossistema React. O projeto foi criado para demonstrar habilidades técnicas em desenvolvimento Full Stack, com foco em:

- **Performance otimizada** com Next.js 15
- **Animações fluidas** com Framer Motion
- **Design moderno** com Tailwind CSS
- **TypeScript** para type-safety
- **SEO otimizado** e acessibilidade

### 🎯 Objetivo

Criar uma landing page profissional que:
- ✅ Demonstre habilidades técnicas de forma impactante
- ✅ Seja visualmente atraente para recrutadores
- ✅ Tenha performance excepcional
- ✅ Seja totalmente responsiva
- ✅ Ofereça experiência de usuário premium

---

## ✨ Características Principais

### 🎨 Design Premium
- **Tema Dark** com predominância de navy blue
- **Glassmorphism** em cards e elementos
- **Gradientes sutis** e efeitos de blur
- **Tipografia moderna** com hierarquia clara
- **Espaçamento consistente** e layout harmonioso

### 🎭 Animações e Transições
- **Scroll suave** com Lenis
- **Animações de entrada** para seções
- **Efeitos de hover** interativos
- **Parallax** em elementos-chave
- **Transições fluidas** entre estados
- **3D Tilt Cards** com efeito de profundidade

### 📱 Responsividade Total
- **Mobile-first** approach
- **Breakpoints otimizados** para todos os dispositivos
- **Touch gestures** suportados
- **Menu mobile** com animações

### ⚡ Performance
- **Image optimization** com Next.js Image
- **Code splitting** automático
- **Lazy loading** de componentes
- **CSS otimizado** com Tailwind
- **Bundle size** reduzido

### 🔍 SEO e Acessibilidade
- **Metadata** completo
- **Open Graph** tags
- **Sitemap.xml** e robots.txt
- **Semântica HTML** correta
- **ARIA labels** para acessibilidade

---

## 🎨 Design e UX

### Paleta de Cores
- **Navy Blue** (#0F172A) - Cor principal
- **Accent** (#8B9DFF) - Destaques e CTAs
- **Purple** (#A855F7) - Gradientes e efeitos
- **White/Transparent** - Textos e overlays

### Componentes Visuais
- **Cards com glassmorphism** e bordas sutis
- **Gradientes mesh** no background
- **Partículas animadas** no Hero
- **Ícones coloridos** com gradientes
- **Badges e tags** para tecnologias

### Animações
- **Fade in** ao entrar na viewport
- **Stagger animations** para listas
- **Hover effects** com scale e glow
- **Scroll progress** bar no topo
- **Smooth scroll** com easing personalizado

---

## 💻 Tecnologias

### Core
- **[Next.js 15.0.3](https://nextjs.org/)** - Framework React para produção
- **[React 18.3.1](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5.6.3](https://www.typescriptlang.org/)** - Type safety

### Estilização
- **[Tailwind CSS 3.4.13](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion 11.11.17](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones adicionais

### Funcionalidades
- **[Lenis](https://github.com/studio-freight/lenis)** - Smooth scrolling
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[Swiper](https://swiperjs.com/)** - Carrossel moderno

### Deploy e Analytics
- **[Vercel Analytics](https://vercel.com/analytics)** - Analytics integrado
- **Next Themes** - Gerenciamento de temas

---

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/lucaaslimadev/portfolio-landing-page.git
cd portfolio-landing-page
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
portfolio-landing-page/
├── public/                 # Arquivos estáticos
│   ├── profile.png        # Foto de perfil
│   └── favicon.ico        # Ícone do site
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── api/          # API Routes
│   │   │   ├── contact/  # Endpoint de contato
│   │   │   └── github/   # Endpoint de dados GitHub
│   │   ├── globals.css   # Estilos globais
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   ├── robots.ts     # Configuração robots.txt
│   │   └── sitemap.ts    # Sitemap XML
│   ├── components/       # Componentes React
│   │   ├── About.tsx     # Seção Sobre
│   │   ├── Contact.tsx   # Seção Contato
│   │   ├── Footer.tsx    # Rodapé
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Navbar.tsx    # Navegação
│   │   ├── Projects.tsx  # Seção Projetos
│   │   ├── Skills.tsx  # Seção Habilidades
│   │   ├── SoftSkills.tsx # Soft Skills
│   │   ├── Stacks.tsx    # Tecnologias
│   │   ├── Stats.tsx    # Estatísticas
│   │   └── ...           # Outros componentes
│   └── lib/              # Utilitários
│       ├── images.ts     # Helpers de imagens
│       └── utils.ts      # Funções utilitárias
├── .gitignore
├── next.config.mjs       # Configuração Next.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts    # Configuração Tailwind
├── tsconfig.json         # Configuração TypeScript
└── README.md
```

---

## 🎯 Funcionalidades

### 🏠 Hero Section
- **Título animado** com efeito de digitação
- **Foto de perfil** com moldura circular e efeito parallax
- **CTAs** com efeito ripple
- **Partículas animadas** no background
- **Ícones sociais** com hover effects

### 👤 Sobre Mim
- **História profissional** detalhada
- **Trajetória de carreira** e formação
- **Destaque para projetos** principais
- **Animações suaves** de entrada

### 🛠️ Stacks e Ferramentas
- **Grid de tecnologias** com ícones coloridos
- **Categorização** por área (Front, Back, etc.)
- **Hover effects** com scale e glow
- **Cards padronizados** com altura consistente

### 💪 Habilidades
- **4 categorias principais**: Front-end, Back-end, UI/UX, API
- **Descrições detalhadas** de cada área
- **Highlights** com badges
- **Tecnologias** por categoria
- **Gradientes coloridos** por habilidade

### 📊 Resultados
- **Estatísticas animadas** com contadores
- **4 métricas principais**: Projetos, Tecnologias, Anos de Estudo, Formações
- **Ícones grandes** com gradientes
- **Animações de entrada** sequenciais

### 🌟 Soft Skills
- **Carrossel horizontal** com Swiper
- **10 soft skills** principais
- **Ícones coloridos** para cada skill
- **Navegação** com setas e paginação

### 🔧 Ferramentas e Metodologias
- **8 categorias** de ferramentas
- **Carrossel responsivo** com breakpoints
- **Descrições** de cada categoria
- **Tags** de tecnologias

### 💼 Projetos
- **Cards grandes** com imagem e conteúdo
- **KPIs** destacados
- **Problema/Solução** para cada projeto
- **Tecnologias** utilizadas
- **Links** para repositórios

### 📧 Contato
- **Formulário** com validação
- **React Hook Form** + Zod
- **Honeypot** anti-spam
- **Rate limiting** no backend
- **Toast notifications** de feedback

### 🔗 Footer
- **Links de navegação** centralizados
- **Redes sociais** com ícones animados
- **CTA** para WhatsApp
- **Botão scroll to top** flutuante
- **Copyright** e informações

---

## ⚡ Performance

### Otimizações Implementadas
- ✅ **Image optimization** com Next.js Image
- ✅ **Code splitting** automático por rota
- ✅ **Lazy loading** de componentes
- ✅ **CSS purging** com Tailwind
- ✅ **Bundle size** otimizado
- ✅ **Font optimization** com next/font
- ✅ **Static generation** onde possível

### Métricas Esperadas
- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

---

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
# Opcional: URL do site para SEO
NEXT_PUBLIC_SITE_URL=https://seu-site.com

# Opcional: API Key do Resend para emails
RESEND_API_KEY=your_resend_api_key
```

### Personalização

#### Cores
Edite `tailwind.config.ts` para personalizar as cores:

```typescript
colors: {
  navy: {
    900: '#0F172A',
    // ...
  },
  accent: '#8B9DFF',
}
```

#### Conteúdo
- **Hero**: Edite `src/components/Hero.tsx`
- **Sobre**: Edite `src/components/About.tsx`
- **Projetos**: Edite `src/components/Projects.tsx`
- **Contato**: Configure API em `src/app/api/contact/route.ts`

---

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

### Adaptações
- **Menu mobile** com drawer
- **Grids responsivos** que se adaptam
- **Imagens otimizadas** por tamanho
- **Tipografia escalável**
- **Touch gestures** otimizados

---

## 🌐 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório** no [Vercel](https://vercel.com)
2. **Configure as variáveis** de ambiente
3. **Deploy automático** a cada push

### Outras Plataformas

#### Netlify
```bash
npm run build
# Faça upload da pasta .next
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade
npm run lint         # Executa ESLint
```

---

## 🎨 Screenshots

### Desktop
![Desktop View](screenshots/desktop.png)

### Mobile
![Mobile View](screenshots/mobile.png)

### Animações
![Animations](screenshots/animations.gif)

---

## 🚀 Próximas Melhorias

- [ ] Modo claro/escuro toggle
- [ ] Internacionalização (i18n)
- [ ] Blog integrado
- [ ] Dashboard de analytics
- [ ] Testes automatizados
- [ ] PWA support
- [ ] Dark mode persistente

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Lucas Lima**

- 🌐 Website: [Em breve]
- 💼 LinkedIn: [lucas-lima-789970372](https://www.linkedin.com/in/lucas-lima-789970372/)
- 🐙 GitHub: [@lucaaslimadev](https://github.com/lucaaslimadev)
- 📧 Email: [Entre em contato via formulário]

---

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela excelente framework
- [Tailwind CSS](https://tailwindcss.com/) pelos estilos
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- [Lucide](https://lucide.dev/) pelos ícones
- Comunidade open source ❤️

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela! ⭐**

Feito com ❤️ por [Lucas Lima](https://github.com/lucaaslimadev)

</div>

