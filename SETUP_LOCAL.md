# Guia de Configuração do Ambiente de Desenvolvimento Local

Este documento fornece instruções detalhadas para configurar e executar o projeto DunningAI em um ambiente de desenvolvimento local.

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** versão 18 ou superior
- **npm** (incluído com Node.js) ou **yarn**
- **Git** (para clonar o repositório, se aplicável)

### Verificar Instalações

```bash
node --version    # Deve retornar v18.x.x ou superior
npm --version     # Deve retornar 9.x.x ou superior
```

---

## 🚀 Instalação Rápida

### Método 1: Configuração Automática (Recomendado)

Execute o script de configuração automática:

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-env.ps1
```

Este script irá:
- Gerar automaticamente um `NEXTAUTH_SECRET` seguro
- Criar o arquivo `.env.local` com todas as configurações necessárias
- Configurar o banco de dados SQLite para desenvolvimento

### Método 2: Configuração Manual

Siga os passos abaixo para configuração manual.

---

## 📝 Configuração Detalhada

### Passo 1: Instalação de Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

**Tempo estimado:** 2-5 minutos (dependendo da conexão)

### Passo 2: Configuração de Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

#### Variáveis Obrigatórias

```env
# NextAuth.js - Autenticação e Sessão
NEXTAUTH_SECRET=<gerar-string-aleatoria-32-caracteres>
NEXTAUTH_URL=http://localhost:3000

# Database - Configuração do Banco de Dados
DATABASE_URL="file:./dev.db"
```

#### Variáveis Opcionais (Integrações)

```env
# Stripe - Gateway de Pagamento
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# WhatsApp Business API
WHATSAPP_API_KEY=your_api_key_here
WHATSAPP_PHONE_NUMBER=+5511999999999

# Email Service Provider
EMAIL_SERVICE_API_KEY=your_email_api_key
EMAIL_FROM_ADDRESS=noreply@dunningai.com

# SMS Service Provider
SMS_API_KEY=your_sms_api_key
SMS_FROM_NUMBER=+5511999999999
```

#### Geração de NEXTAUTH_SECRET

**PowerShell:**
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

**Git Bash / Linux:**
```bash
openssl rand -base64 32
```

**Online (Alternativa):**
- Acesse: https://generate-secret.vercel.app/32

### Passo 3: Configuração do Banco de Dados

#### Opção A: SQLite (Recomendado para Desenvolvimento)

SQLite é a opção mais simples para desenvolvimento local:

```bash
# Gerar cliente Prisma
npx prisma generate

# Criar banco de dados e aplicar migrations
npx prisma migrate dev --name init

# Ou usar db push para desenvolvimento rápido (sem migrations)
npx prisma db push
```

#### Opção B: PostgreSQL

1. Instale e configure PostgreSQL localmente
2. Crie um banco de dados:
   ```sql
   CREATE DATABASE dunningai;
   ```
3. Atualize o `.env.local`:
   ```env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/dunningai?schema=public"
   ```
4. Execute as migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

#### Opção C: MySQL

1. Instale e configure MySQL localmente
2. Crie um banco de dados:
   ```sql
   CREATE DATABASE dunningai;
   ```
3. Atualize o `.env.local`:
   ```env
   DATABASE_URL="mysql://usuario:senha@localhost:3306/dunningai"
   ```
4. Execute as migrations:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

### Passo 4: Executar o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em: **http://localhost:3000**

---

## 🔧 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot-reload |
| `npm run build` | Gera build otimizado para produção |
| `npm run start` | Inicia servidor de produção (requer build) |
| `npm run lint` | Executa análise estática de código (ESLint) |

### Comandos Prisma Adicionais

| Comando | Descrição |
|---------|-----------|
| `npx prisma generate` | Gera o cliente Prisma baseado no schema |
| `npx prisma migrate dev` | Cria e aplica migrations |
| `npx prisma db push` | Sincroniza schema com banco (sem migrations) |
| `npx prisma studio` | Abre interface visual do banco de dados |

---

## ⚠️ Considerações Importantes

### Desenvolvimento Local

1. **Variáveis Mínimas**: Para visualizar a interface, apenas `NEXTAUTH_SECRET` e `NEXTAUTH_URL` são necessários
2. **Banco de Dados**: Funcionalidades que dependem de dados podem não funcionar sem o banco configurado
3. **Integrações**: As integrações externas (Stripe, WhatsApp, etc.) são opcionais e só são necessárias para testar funcionalidades específicas

### Segurança

- **Nunca commite** o arquivo `.env.local` no Git
- Use variáveis de ambiente diferentes para desenvolvimento e produção
- Mantenha suas chaves de API seguras e não as compartilhe

---

## 🐛 Solução de Problemas

### Erro: "NEXTAUTH_SECRET is not set"

**Causa:** Arquivo `.env.local` não encontrado ou variável não configurada.

**Solução:**
1. Verifique se o arquivo `.env.local` existe na raiz do projeto
2. Certifique-se de que `NEXTAUTH_SECRET` está definido
3. Execute o script de configuração: `.\setup-env.ps1`

### Erro: "DATABASE_URL is not set"

**Causa:** Variável de banco de dados não configurada.

**Solução:**
1. Adicione `DATABASE_URL` ao arquivo `.env.local`
2. Para desenvolvimento rápido, use: `DATABASE_URL="file:./dev.db"`

### Erro: "Port 3000 is already in use"

**Causa:** Outro processo está usando a porta 3000.

**Solução 1:** Encerre o processo existente
```powershell
# Windows
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

**Solução 2:** Use uma porta alternativa
```bash
npm run dev -- -p 3001
```

### Erro: "Prisma Client not generated"

**Causa:** Cliente Prisma não foi gerado após mudanças no schema.

**Solução:**
```bash
npx prisma generate
```

### Erro: "Module not found" ou problemas de dependências

**Causa:** Dependências não instaladas ou corrompidas.

**Solução:**
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Recursos Adicionais

- **Documentação Next.js**: https://nextjs.org/docs
- **Documentação Prisma**: https://www.prisma.io/docs
- **Documentação NextAuth.js**: https://next-auth.js.org
- **SQLite**: https://www.sqlite.org/docs.html

---

## 🆘 Suporte

Se você encontrar problemas não cobertos neste guia:

1. Verifique o [README.md](./README.md) principal
2. Consulte a documentação oficial das tecnologias utilizadas
3. Abra uma issue no repositório do projeto

---

**Última atualização:** Dezembro 2024
**Versão do documento:** 1.0
