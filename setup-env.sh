#!/bin/bash

#
# Script de configuração automática do ambiente de desenvolvimento local
# para o projeto DunningAI.
#
# Uso: ./setup-env.sh [--force]
#

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

# Funções de output
info() {
    echo -e "${CYAN}$1${NC}"
}

success() {
    echo -e "${GREEN}$1${NC}"
}

warning() {
    echo -e "${YELLOW}$1${NC}"
}

error() {
    echo -e "${RED}$1${NC}"
}

# Banner
echo ""
echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}  DunningAI - Setup de Ambiente Local  ${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# Verificar se está na raiz do projeto
if [ ! -f "package.json" ]; then
    error "ERRO: Arquivo package.json não encontrado."
    error "Execute este script na raiz do projeto."
    exit 1
fi

info "Verificando ambiente..."

# Verificar Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    success "Node.js encontrado: $NODE_VERSION"
else
    error "ERRO: Node.js não encontrado. Instale Node.js 18+ antes de continuar."
    exit 1
fi

# Verificar npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    success "npm encontrado: v$NPM_VERSION"
else
    error "ERRO: npm não encontrado."
    exit 1
fi

echo ""

# Verificar se .env.local já existe
FORCE_OVERWRITE=false
if [ "$1" == "--force" ] || [ "$1" == "-f" ]; then
    FORCE_OVERWRITE=true
fi

if [ -f ".env.local" ]; then
    if [ "$FORCE_OVERWRITE" = false ]; then
        warning "AVISO: Arquivo .env.local já existe neste diretório."
        read -p "Deseja sobrescrever? (s/N): " response
        if [[ ! "$response" =~ ^[sSyY]$ ]]; then
            info "Operação cancelada. Nenhuma alteração foi feita."
            exit 0
        fi
    else
        warning "Arquivo .env.local existente será sobrescrito (modo --force)."
    fi
fi

info "Gerando configurações..."

# Gerar NEXTAUTH_SECRET seguro (32 caracteres)
SECRET=$(openssl rand -base64 32 | tr -d "=+/" | cut -c1-32)

if [ -z "$SECRET" ]; then
    # Fallback se openssl não estiver disponível
    SECRET=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
fi

success "NEXTAUTH_SECRET gerado com sucesso"

# Data e hora atual
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Conteúdo do arquivo .env.local
cat > .env.local << EOF
# ============================================
# DunningAI - Configuração de Ambiente Local
# ============================================
# Este arquivo contém variáveis de ambiente para desenvolvimento local.
# NUNCA commite este arquivo no controle de versão.
#
# Gerado automaticamente em: $TIMESTAMP
# ============================================

# --------------------------------------------
# NextAuth.js - Autenticação e Sessão
# --------------------------------------------
NEXTAUTH_SECRET=$SECRET
NEXTAUTH_URL=http://localhost:3000

# --------------------------------------------
# Database - Configuração do Banco de Dados
# --------------------------------------------
# SQLite é usado por padrão para desenvolvimento local.
# Para usar PostgreSQL ou MySQL, altere a URL abaixo e execute:
# npx prisma generate && npx prisma migrate dev
DATABASE_URL="file:./dev.db"

# --------------------------------------------
# Stripe - Gateway de Pagamento (Opcional)
# --------------------------------------------
# Obtenha suas chaves em: https://dashboard.stripe.com/apikeys
# STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
# STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# --------------------------------------------
# WhatsApp Business API (Opcional)
# --------------------------------------------
# Configure após obter credenciais da API do WhatsApp Business
# WHATSAPP_API_KEY=your_whatsapp_api_key
# WHATSAPP_PHONE_NUMBER=+5511999999999

# --------------------------------------------
# Email Service Provider (Opcional)
# --------------------------------------------
# Configure seu provedor de email (SendGrid, Mailgun, etc.)
# EMAIL_SERVICE_API_KEY=your_email_service_api_key
# EMAIL_FROM_ADDRESS=noreply@dunningai.com

# --------------------------------------------
# SMS Service Provider (Opcional)
# --------------------------------------------
# Configure seu provedor de SMS (Twilio, AWS SNS, etc.)
# SMS_API_KEY=your_sms_api_key
# SMS_FROM_NUMBER=+5511999999999
EOF

success "Arquivo .env.local criado com sucesso!"

echo ""
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Configuração Concluída com Sucesso!  ${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

info "Próximos passos:"
echo ""
echo -e "${WHITE}  1. Configurar Banco de Dados:${NC}"
echo -e "${GRAY}     npx prisma generate${NC}"
echo -e "${GRAY}     npx prisma migrate dev${NC}"
echo ""
echo -e "${WHITE}  2. Iniciar Servidor de Desenvolvimento:${NC}"
echo -e "${GRAY}     npm run dev${NC}"
echo ""
echo -e "${WHITE}  3. Acessar a Aplicação:${NC}"
echo -e "${GRAY}     http://localhost:3000${NC}"
echo ""

info "Documentação completa disponível em: SETUP_LOCAL.md"
echo ""

