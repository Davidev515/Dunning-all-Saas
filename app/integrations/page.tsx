'use client'

import { useState } from 'react'
import { IntegrationCard } from '@/components/integrations/IntegrationCard'
import { IntegrationSetup } from '@/components/integrations/IntegrationSetup'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'

interface Integration {
  id: string
  name: string
  description: string
  logo: string
  status: 'connected' | 'not_connected'
  features: string[]
  setupTime: string
}

const integrations: Integration[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Gateway de pagamento global com suporte a cartões, PIX e boleto',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    status: 'connected',
    features: ['Cartões internacionais', 'PIX instantâneo', 'Webhooks', 'Analytics'],
    setupTime: '5 minutos',
  },
  {
    id: 'pagseguro',
    name: 'PagSeguro',
    description: 'Solução completa de pagamentos para o Brasil',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    status: 'not_connected',
    features: ['PIX', 'Boleto', 'Cartão de crédito', 'Débito online'],
    setupTime: '10 minutos',
  },
  {
    id: 'asaas',
    name: 'Asaas',
    description: 'Plataforma de cobrança e gestão financeira',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    status: 'not_connected',
    features: ['Cobrança recorrente', 'PIX', 'Boleto', 'Cartão'],
    setupTime: '15 minutos',
  },
  {
    id: 'mercadopago',
    name: 'Mercado Pago',
    description: 'Gateway de pagamento do Mercado Livre',
    logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
    status: 'not_connected',
    features: ['PIX', 'Cartão', 'Boleto', 'QR Code'],
    setupTime: '8 minutos',
  },
]

export default function IntegrationsPage() {
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Integrações</h1>
            <p className="mt-2 text-gray-600">
              Conecte seus gateways de pagamento para automatizar a recuperação de receita
            </p>
          </div>

          {selectedIntegration ? (
            <IntegrationSetup
              integrationId={selectedIntegration}
              onBack={() => setSelectedIntegration(null)}
            />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {integrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onConnect={() => setSelectedIntegration(integration.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}













