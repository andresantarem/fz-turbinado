# 🚀 Configuração Vercel para FZ-Turbinado

## Passo 1: Importar Repositório
✅ **Já está feito** - Você selecionou:
- Repositório: `andresantarem/fz-turbinado`
- Branch: `main`
- Framework: Vite

## Passo 2: Configurações do Projeto

### General Settings
- **Project Name**: `fz-turbinado` (ou o nome que preferir)
- **Framework Preset**: Vite (já selecionado ✓)
- **Root Directory**: `./` (raiz do repositório)

### Build Command
```
pnpm run build
```

### Output Directory
```
dist/public
```

### Development Command
```
pnpm run dev
```

### Install Command
```
pnpm install
```

## Passo 3: Variáveis de Ambiente (se necessário)

Na aba "Environment Variables", adicione:

| Chave | Valor | Ambiente |
|-------|-------|----------|
| `VITE_API_URL` | `https://seu-dominio.com` | Production |
| `NODE_ENV` | `production` | Production |

> **Nota**: Se não tiver APIs externas, você pode deixar vazio por enquanto

## Passo 4: Node.js Version

Certifique-se de que está usando:
- **Node.js Version**: `20.x` (recomendado)

Na aba "Settings" → "Functions" → Node.js Version: `20.x`

## Passo 5: Domains

Após o deploy inicial (que é automático quando você confirmar):

1. Vá para "Domains"
2. Adicione seu domínio customizado (ex: `fz-turbinado.com`)
3. Configure o DNS conforme instruções da Vercel

## Resumo do Deploy

✅ **Configuração Automática**:
- `vercel.json` - Configuração personalizada do Vercel
- `.vercelignore` - Arquivos a ignorar no deploy
- Build otimizado com Vite
- Server Node.js (Express) incluído

✅ **Fluxo de Deploy**:
1. Você conecta o repositório na Vercel
2. Cada push em `main` dispara deploy automático
3. Vite compila o frontend → `dist/public`
4. Express server é empacotado → `dist/index.js`
5. Vercel publica tudo automaticamente

## Troubleshooting

### Se der erro "Build failed"
1. Verifique se `pnpm install` está funcionando
2. Procure por erros de TypeScript: `pnpm run check`
3. Teste a build localmente: `pnpm run build`

### Se as imagens não carregarem
- Coloque imagens em `/client/public/images/`
- Referencie como `/images/nome-arquivo.ext`

### Se o servidor não responder
- Verifique se `dist/index.js` está sendo gerado
- Confirmea porta está configurada corretamente em `server/index.ts`

---

**Pronto para deploy! 🎉**
Clique em "Deploy" na Vercel e aguarde ~2-3 minutos.
