# 🚀 Extensões Recomendadas para Desenvolvimento

Este documento lista as extensões mais úteis para melhorar a produtividade e a experiência de desenvolvimento com o Cursor/VS Code.

---

## 📦 Extensões Essenciais

### 1. **TypeScript & JavaScript**
- **ES7+ React/Redux/React-Native snippets** - Snippets úteis para React
- **TypeScript Importer** - Importação automática de tipos
- **JavaScript and TypeScript Nightly** - Versão mais recente do TypeScript

### 2. **Tailwind CSS**
- **Tailwind CSS IntelliSense** - Autocomplete e linting para Tailwind
- **Headwind** - Organização automática de classes Tailwind

### 3. **React & Next.js**
- **ES7+ React/Redux/React-Native snippets**
- **Auto Rename Tag** - Renomeia tags HTML/JSX automaticamente
- **Bracket Pair Colorizer** - Melhora a visualização de parênteses/chaves

### 4. **Produtividade**
- **GitLens** - Visualização avançada do Git
- **Error Lens** - Mostra erros inline no código
- **Path Intellisense** - Autocomplete para caminhos de arquivos
- **Auto Import - ES6, TS, JSX, TSX** - Importação automática
- **Format on Save** - Formata código automaticamente ao salvar

### 5. **Qualidade de Código**
- **ESLint** - Linting para JavaScript/TypeScript
- **Prettier** - Formatador de código
- **SonarLint** - Detecção de bugs e code smells

### 6. **Visual & UI**
- **Material Icon Theme** - Ícones bonitos para arquivos
- **One Dark Pro** - Tema escuro popular
- **Bracket Pair Colorizer 2** - Colorização de brackets
- **Indent Rainbow** - Visualização de indentação

---

## 🤖 Extensões para IA e Automação

### 1. **Cursor AI** (Já incluído)
- O Cursor já vem com IA integrada, mas você pode melhorar:
  - Use `Cmd+K` (Mac) ou `Ctrl+K` (Windows) para edições com IA
  - Use `Cmd+L` para chat com IA
  - Use `Cmd+Shift+L` para seleção de código com IA

### 2. **GitHub Copilot** (Opcional)
- Se preferir usar junto com Cursor AI
- Suporte a autocomplete inteligente

### 3. **Codeium** (Alternativa)
- Autocomplete gratuito baseado em IA

---

## 🎨 Extensões para Design

### 1. **Tailwind CSS IntelliSense**
```
ID: bradlc.vscode-tailwindcss
```
- Autocomplete inteligente para classes Tailwind
- Mostra cores e valores ao passar o mouse
- Validação de classes

### 2. **Headwind**
```
ID: heybourn.headwind
```
- Organiza classes Tailwind automaticamente
- Ordena classes em ordem lógica

---

## 📝 Extensões para Documentação

### 1. **Markdown All in One**
- Atalhos, preview e formatação para Markdown

### 2. **Markdown Preview Enhanced**
- Preview avançado de Markdown com suporte a LaTeX, diagramas, etc.

---

## 🔧 Extensões para Configuração

### 1. **Settings Sync**
- Sincroniza configurações entre máquinas

### 2. **Project Manager**
- Gerencia múltiplos projetos facilmente

---

## 🚀 Como Instalar

### Método 1: Via Interface do Cursor
1. Abra o painel de extensões (`Ctrl+Shift+X` ou `Cmd+Shift+X`)
2. Pesquise pelo nome da extensão
3. Clique em "Install"

### Método 2: Via Command Palette
1. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
2. Digite "Extensions: Install Extensions"
3. Pesquise e instale

### Método 3: Via Terminal
```bash
# Exemplo para instalar Tailwind CSS IntelliSense
code --install-extension bradlc.vscode-tailwindcss
```

---

## ⚙️ Configurações Recomendadas

Adicione ao seu `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^\"'`]*)(?:'|\"|`)"]
  ],
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

---

## 📊 Extensões por Categoria

### Para Iniciantes
1. ✅ ESLint
2. ✅ Prettier
3. ✅ Error Lens
4. ✅ Tailwind CSS IntelliSense

### Para Intermediários
1. ✅ GitLens
2. ✅ Auto Import
3. ✅ Path Intellisense
4. ✅ Bracket Pair Colorizer

### Para Avançados
1. ✅ SonarLint
2. ✅ Project Manager
3. ✅ Settings Sync
4. ✅ Markdown Preview Enhanced

---

## 🎯 Top 10 Essenciais

1. **Tailwind CSS IntelliSense** - Essencial para Tailwind
2. **ESLint** - Qualidade de código
3. **Prettier** - Formatação automática
4. **Error Lens** - Visualização de erros
5. **GitLens** - Git avançado
6. **Auto Import** - Importação automática
7. **Path Intellisense** - Autocomplete de caminhos
8. **Material Icon Theme** - Ícones bonitos
9. **Bracket Pair Colorizer** - Visualização de brackets
10. **Format on Save** - Formatação automática

---

## 💡 Dicas

1. **Não instale muitas extensões** - Pode deixar o editor lento
2. **Use extensões nativas do Cursor** - A IA já está integrada
3. **Configure formatação automática** - Economiza muito tempo
4. **Use snippets** - Acelera desenvolvimento
5. **Mantenha extensões atualizadas** - Para melhor performance

---

**Última atualização:** Dezembro 2024


