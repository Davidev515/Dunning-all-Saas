<#
.SYNOPSIS
    Script de configuração automática do ambiente de desenvolvimento local
    para o projeto DunningAI.

.DESCRIPTION
    Este script automatiza a criação do arquivo .env.local com todas as
    variáveis de ambiente necessárias para executar o projeto localmente.
    Gera automaticamente um NEXTAUTH_SECRET seguro e configura o banco de
    dados SQLite para desenvolvimento.

.PARAMETER Force
    Sobrescreve o arquivo .env.local existente sem solicitar confirmação.

.EXAMPLE
    .\setup-env.ps1
    Executa o script e solicita confirmação se o arquivo já existir.

.EXAMPLE
    .\setup-env.ps1 -Force
    Executa o script e sobrescreve qualquer arquivo .env.local existente.
#>

param(
    [switch]$Force
)

# Configuração de encoding para suportar caracteres especiais
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

# Cores para output
function Write-Info {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Cyan
}

function Write-Success {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host $Message -ForegroundColor Red
}

# Banner
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DunningAI - Setup de Ambiente Local  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se está na raiz do projeto
if (-not (Test-Path "package.json")) {
    Write-Error "ERRO: Arquivo package.json não encontrado."
    Write-Error "Execute este script na raiz do projeto."
    exit 1
}

Write-Info "Verificando ambiente..."

# Verificar Node.js
try {
    $nodeVersion = node --version
    Write-Success "Node.js encontrado: $nodeVersion"
} catch {
    Write-Error "ERRO: Node.js não encontrado. Instale Node.js 18+ antes de continuar."
    exit 1
}

# Verificar npm
try {
    $npmVersion = npm --version
    Write-Success "npm encontrado: v$npmVersion"
} catch {
    Write-Error "ERRO: npm não encontrado."
    exit 1
}

Write-Host ""

# Verificar se .env.local já existe
$envFileExists = Test-Path ".env.local"

if ($envFileExists) {
    if (-not $Force) {
        Write-Warning "AVISO: Arquivo .env.local já existe neste diretório."
        $response = Read-Host "Deseja sobrescrever? (s/N)"

        if ($response -ne "s" -and $response -ne "S" -and $response -ne "y" -and $response -ne "Y") {
            Write-Info "Operação cancelada. Nenhuma alteração foi feita."
            exit 0
        }
    } else {
        Write-Warning "Arquivo .env.local existente será sobrescrito (modo Force)."
    }
}

Write-Info "Gerando configurações..."

# Gerar NEXTAUTH_SECRET seguro (32 caracteres alfanuméricos)
$secret = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
Write-Success "NEXTAUTH_SECRET gerado com sucesso"

# Conteúdo do arquivo .env.local
$envContent = @"
# ============================================
# DunningAI - Configuração de Ambiente Local
# ============================================
# Este arquivo contém variáveis de ambiente para desenvolvimento local.
# NUNCA commite este arquivo no controle de versão.
#
# Gerado automaticamente em: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
# ============================================

# --------------------------------------------
# NextAuth.js - Autenticação e Sessão
# --------------------------------------------
NEXTAUTH_SECRET=$secret
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
"@

# Criar arquivo .env.local
try {
    $envContent | Out-File -FilePath ".env.local" -Encoding utf8 -NoNewline
    Write-Success "Arquivo .env.local criado com sucesso!"
} catch {
    Write-Error "ERRO: Falha ao criar arquivo .env.local"
    Write-Error $_.Exception.Message
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Configuração Concluída com Sucesso!  " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Info "Próximos passos:"
Write-Host ""
Write-Host "  1. Configurar Banco de Dados:" -ForegroundColor White
Write-Host "     npx prisma generate" -ForegroundColor Gray
Write-Host "     npx prisma migrate dev" -ForegroundColor Gray
Write-Host ""
Write-Host "  2. Iniciar Servidor de Desenvolvimento:" -ForegroundColor White
Write-Host "     npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "  3. Acessar a Aplicação:" -ForegroundColor White
Write-Host "     http://localhost:3000" -ForegroundColor Gray
Write-Host ""

Write-Info "Documentação completa disponível em: SETUP_LOCAL.md"
Write-Host ""
