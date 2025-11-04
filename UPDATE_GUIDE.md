# 🔄 Guia de Atualização do Projeto

Este guia explica como manter o projeto atualizado e funcionando de forma otimizada.

---

## 📦 Atualização de Dependências

### Verificar Versões Desatualizadas

```bash
npm outdated
```

### Atualizar Dependências

#### Atualização Segura (Recomendado)
```bash
npm update
```

#### Atualização Completa
```bash
# Atualizar package.json manualmente ou usar:
npm install package@latest
```

#### Atualizar Todas as Dependências
```bash
npm install -g npm-check-updates
ncu -u
npm install
```

---

## 🚀 Melhorias Implementadas

### 1. Dependências Atualizadas

#### Principais Atualizações:
- **Next.js**: `14.0.0` → `14.2.5` (mais estável e rápido)
- **React**: `18.2.0` → `18.3.1` (melhorias de performance)
- **TypeScript**: `5.2.2` → `5.5.4` (novos recursos)
- **Prisma**: `5.6.0` → `5.19.1` (correções e melhorias)
- **Framer Motion**: `10.16.4` → `11.5.4` (nova versão major)
- **Stripe**: `14.5.0` → `17.1.0` (versão mais recente)
- **Axios**: `1.6.0` → `1.7.2` (correções de segurança)

### 2. Novos Scripts Adicionados

```json
{
  "type-check": "tsc --noEmit",
  "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\""
}
```

### 3. Prettier Configurado

- Formatação automática ao salvar
- Plugin Tailwind CSS para ordenar classes
- Configuração consistente em todo o projeto

### 4. Configurações do VS Code/Cursor

- Formatação automática
- Organização automática de imports
- Validação do Tailwind CSS
- Melhor suporte a TypeScript

---

## 🔧 Passos para Atualizar

### 1. Fazer Backup
```bash
git add .
git commit -m "Backup antes de atualização"
```

### 2. Atualizar Dependências
```bash
npm install
```

### 3. Verificar Tipos
```bash
npm run type-check
```

### 4. Executar Linter
```bash
npm run lint
```

### 5. Formatar Código
```bash
npm run format
```

### 6. Testar Build
```bash
npm run build
```

### 7. Testar Localmente
```bash
npm run dev
```

---

## ⚠️ Possíveis Problemas e Soluções

### Problema: Conflitos de Versão

**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: Erros de TypeScript

**Solução:**
```bash
npm run type-check
# Corrigir erros manualmente
```

### Problema: Framer Motion Breaking Changes

**Solução:**
- Versão 11.x tem algumas mudanças
- Verifique a [documentação de migração](https://www.framer.com/motion/migration/)
- Principal mudança: `motion.div` continua igual, mas algumas props mudaram

### Problema: Prisma Client Desatualizado

**Solução:**
```bash
npx prisma generate
```

---

## 📊 Checklist de Atualização

- [ ] Fazer backup do código
- [ ] Atualizar `package.json`
- [ ] Executar `npm install`
- [ ] Verificar tipos com `npm run type-check`
- [ ] Executar linter com `npm run lint`
- [ ] Formatar código com `npm run format`
- [ ] Testar build com `npm run build`
- [ ] Testar localmente com `npm run dev`
- [ ] Verificar funcionalidades principais
- [ ] Atualizar documentação se necessário
- [ ] Commit das mudanças

---

## 🔄 Atualizações Automáticas

### Usar Dependabot (GitHub)

Crie `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

### Usar Renovate

1. Instale o app Renovate no GitHub
2. Configure para atualizar automaticamente
3. Receba PRs com atualizações

---

## 📝 Notas de Versão

### Versão 1.0.0 → 1.1.0

**Melhorias:**
- ✅ Dependências atualizadas para versões mais recentes
- ✅ Prettier configurado para formatação automática
- ✅ Configurações do VS Code/Cursor otimizadas
- ✅ Scripts adicionais para type-check e format
- ✅ Melhor suporte a TypeScript 5.5

**Breaking Changes:**
- ⚠️ Framer Motion 11.x pode ter algumas mudanças menores
- Verifique a documentação se houver problemas

---

## 🆘 Suporte

Se encontrar problemas após atualizar:

1. Verifique os logs de erro
2. Consulte a documentação das dependências atualizadas
3. Verifique se há breaking changes
4. Reverta para a versão anterior se necessário

---

**Última atualização:** Dezembro 2024
**Próxima revisão:** Janeiro 2025



