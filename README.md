# FácilZap Turbinado - Landing Page

Site profissional para a plataforma FácilZap Turbinado, com widgets avançados para WhatsApp Business.

## 🚀 Estrutura do Projeto

```
├── client/                 # Frontend React + TypeScript
│   ├── src/
│   │   ├── components/    # Componentes React (Header, Footer, etc)
│   │   ├── pages/         # Páginas (Home, NotFound)
│   │   ├── contexts/      # Context API (Temas, etc)
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilitários
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   │   └── images/        # Assets estáticos (logo, imagens)
│   └── index.html
│
├── server/                 # Backend Express.js
│   └── index.ts
│
├── shared/                 # Código compartilhado
│   └── const.ts
│
├── patches/                # Patches de dependências
│   └── wouter@3.7.1.patch
│
├── netlify.toml            # Configuração Netlify
├── vite.config.ts          # Configuração Vite
├── tsconfig.json           # TypeScript config
├── package.json            # Dependências e scripts
└── pnpm-lock.yaml          # Lock file (pnpm)
```

## 📋 Arquivos Essenciais

| Arquivo | Propósito |
|---------|-----------|
| `netlify.toml` | Configuração de build e deploy no Netlify |
| `vite.config.ts` | Configuração do bundler Vite |
| `package.json` | Dependências e scripts npm/pnpm |
| `tsconfig.json` | Configuração TypeScript |
| `.gitignore` | Arquivos ignorados pelo Git |

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor dev em http://localhost:5173

# Build
pnpm build        # Compila para produção (gera pasta dist/)

# Preview
pnpm preview      # Visualiza build localmente

# Linting
pnpm check        # Verifica tipos TypeScript
pnpm format       # Formata código com Prettier
```

## 🌐 Deploy

### Netlify (Automático)
1. Push para `main` no GitHub
2. Netlify detecta automaticamente e faz o build
3. Site publicado em: https://fzturbinado.netlify.app/

**Configuração:**
- Build: `pnpm run build`
- Publish: `dist/public`
- Node: 18+

## 🎨 Tecnologias

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Build**: Vite 7
- **Backend**: Express.js
- **Hospedagem**: Netlify
- **Versionamento**: Git + GitHub

## 📦 Fluxo de Desenvolvimento

1. **Local**: `pnpm dev` → Editar código
2. **Teste**: Abrir http://localhost:5173
3. **Commit**: `git add` + `git commit`
4. **Push**: `git push origin main`
5. **Deploy**: Netlify automático

## 🔐 Variáveis de Ambiente

Criar arquivo `.env.local` (não commitado):

```env
# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
```

## 📝 Notas

- ⚠️ Pasta `dist/` é gerada automaticamente (ignorada pelo Git)
- ⚠️ Pasta `node_modules/` é gerada por `pnpm install`
- ✅ Use `pnpm` em vez de `npm` (configurado no package.json)
