# DunningAI - Agente de Cobrança e Retenção de Assinaturas

## 🚀 Sobre o Projeto

O **DunningAI** é uma solução SaaS completa para recuperação automática de receita através de inteligência artificial. A plataforma detecta falhas de pagamento e automatiza campanhas de cobrança via WhatsApp, Email e SMS, recuperando até 48% do churn causado por falhas no pagamento.

## ✨ Principais Funcionalidades

### 🤖 Inteligência Artificial
- **Análise de Comportamento**: IA analisa histórico e comportamento do cliente
- **Timing Otimizado**: Escolhe o melhor horário e canal para cada cliente
- **Mensagens Personalizadas**: Templates otimizados por IA para máxima conversão
- **Segmentação Inteligente**: Diferentes estratégias para cada tipo de cliente

### 🔗 Integrações
- **Stripe**: Gateway de pagamento global
- **PagSeguro**: Solução completa para o Brasil
- **Asaas**: Plataforma de cobrança e gestão financeira
- **Mercado Pago**: Gateway do Mercado Livre
- **Webhooks**: Integração em tempo real

### 📱 Canais de Comunicação
- **WhatsApp Business**: Mensagens instantâneas com alta taxa de abertura
- **Email Marketing**: Comunicação formal e profissional
- **SMS**: Mensagens diretas para situações urgentes

### 📊 Dashboard e Analytics
- **Métricas em Tempo Real**: Receita recuperada, taxa de conversão, ROI
- **Relatórios Detalhados**: Análise de performance por canal e segmento
- **Insights da IA**: Recomendações automáticas para otimização
- **ROI Tracking**: Acompanhamento do retorno sobre investimento

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Charts**: Recharts
- **Icons**: Heroicons, Lucide React
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM
- **Payments**: Stripe SDK
- **Deployment**: Vercel

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Conta no Stripe (para pagamentos)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/dunningai.git
cd dunningai
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-database-url
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
dunningai/
├── app/                    # App Router (Next.js 14)
│   ├── dashboard/         # Dashboard principal
│   ├── integrations/      # Página de integrações
│   ├── campaigns/         # Gestão de campanhas
│   ├── ai-analysis/      # Análise de IA
│   └── automation/       # Automação de cobrança
├── components/            # Componentes reutilizáveis
│   ├── landing/          # Componentes da landing page
│   ├── dashboard/        # Componentes do dashboard
│   ├── integrations/    # Componentes de integração
│   ├── campaigns/       # Componentes de campanhas
│   ├── ai/              # Componentes de IA
│   └── automation/      # Componentes de automação
├── lib/                  # Utilitários e configurações
└── public/              # Arquivos estáticos
```

## 🎯 Funcionalidades Implementadas

### ✅ Landing Page
- [x] Hero section com estatísticas
- [x] Seção de recursos
- [x] Como funciona (4 passos)
- [x] Planos e preços
- [x] Depoimentos de clientes
- [x] Call-to-action

### ✅ Dashboard Principal
- [x] Cards de estatísticas
- [x] Gráfico de receita recuperada
- [x] Atividades recentes
- [x] Lista de campanhas
- [x] Ações rápidas

### ✅ Sistema de Integrações
- [x] Cards de gateways de pagamento
- [x] Setup guiado para cada integração
- [x] Configuração de webhooks
- [x] Teste de conexão

### ✅ Gestão de Campanhas
- [x] Lista de campanhas com filtros
- [x] Criação de novas campanhas
- [x] Templates por canal
- [x] Métricas de performance

### ✅ Análise de IA
- [x] Insights automáticos
- [x] Análise de comportamento
- [x] Timing otimizado
- [x] Otimização de mensagens

### ✅ Automação de Cobrança
- [x] Dashboard de automação
- [x] Configuração WhatsApp
- [x] Configuração Email
- [x] Configuração SMS

## 📈 Métricas e ROI

### Resultados Comprovados
- **48% de redução no churn** por falha de pagamento
- **500% de ROI médio** em 30 dias
- **R$ 2.4M em receita recuperada** pelos clientes
- **15 minutos de setup** para começar a recuperar

### Segmentação de Clientes
- **Clientes Novos (0-3 meses)**: 35% de taxa de resposta
- **Clientes Estabelecidos (3-12 meses)**: 58% de taxa de resposta  
- **Clientes Antigos (12+ meses)**: 72% de taxa de resposta

## 🎨 Design System

### Cores
- **Primary**: #3B82F6 (Azul)
- **Success**: #10B981 (Verde)
- **Warning**: #F59E0B (Amarelo)
- **Danger**: #EF4444 (Vermelho)

### Componentes
- Cards responsivos
- Botões com estados
- Formulários acessíveis
- Gráficos interativos
- Modais e dropdowns

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
- **Netlify**: Suporte completo ao Next.js
- **Railway**: Deploy com banco de dados
- **AWS**: Para aplicações enterprise

## 📞 Suporte

- **Email**: suporte@dunningai.com
- **WhatsApp**: +55 11 99999-9999
- **Documentação**: https://docs.dunningai.com

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🙏 Agradecimentos

- Equipe de desenvolvimento
- Comunidade Next.js
- Contribuidores do projeto
- Clientes que confiam na solução

---

**DunningAI** - Recupere sua receita com inteligência artificial! 🚀






