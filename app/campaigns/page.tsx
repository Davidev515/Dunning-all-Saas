'use client'

import { useState } from 'react'
import { CampaignCard } from '@/components/campaigns/CampaignCard'
import { CreateCampaignModal } from '@/components/campaigns/CreateCampaignModal'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'

const campaigns = [
  {
    id: 1,
    name: 'Cobrança WhatsApp - Cartão Expirado',
    type: 'whatsapp',
    status: 'active',
    sent: 156,
    delivered: 142,
    recovered: 23,
    recoveryRate: 16.2,
    lastSent: '2024-01-15T10:30:00Z',
    createdAt: '2024-01-10T09:00:00Z',
  },
  {
    id: 2,
    name: 'Email de Cobrança - Falha PIX',
    type: 'email',
    status: 'paused',
    sent: 89,
    delivered: 85,
    recovered: 12,
    recoveryRate: 14.1,
    lastSent: '2024-01-14T15:45:00Z',
    createdAt: '2024-01-08T14:30:00Z',
  },
  {
    id: 3,
    name: 'SMS Urgente - Cartão Recusado',
    type: 'sms',
    status: 'active',
    sent: 45,
    delivered: 43,
    recovered: 8,
    recoveryRate: 18.6,
    lastSent: '2024-01-15T11:15:00Z',
    createdAt: '2024-01-12T16:20:00Z',
  },
  {
    id: 4,
    name: 'WhatsApp - Boleto Vencido',
    type: 'whatsapp',
    status: 'stopped',
    sent: 234,
    delivered: 201,
    recovered: 45,
    recoveryRate: 22.4,
    lastSent: '2024-01-13T09:00:00Z',
    createdAt: '2024-01-05T11:15:00Z',
  },
]

export default function CampaignsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [filter, setFilter] = useState<'all' | 'active' | 'paused' | 'stopped'>('all')

  const filteredCampaigns = campaigns.filter(campaign => {
    if (filter === 'all') return true
    return campaign.status === filter
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Campanhas</h1>
                <p className="mt-2 text-gray-600">
                  Gerencie suas campanhas de recuperação de receita
                </p>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="btn btn-primary"
              >
                Nova Campanha
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6">
            <div className="flex space-x-4">
              {[
                { key: 'all', label: 'Todas', count: campaigns.length },
                { key: 'active', label: 'Ativas', count: campaigns.filter(c => c.status === 'active').length },
                { key: 'paused', label: 'Pausadas', count: campaigns.filter(c => c.status === 'paused').length },
                { key: 'stopped', label: 'Paradas', count: campaigns.filter(c => c.status === 'stopped').length },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === filterOption.key
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filterOption.label} ({filterOption.count})
                </button>
              ))}
            </div>
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma campanha encontrada</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {filter === 'all' 
                    ? 'Comece criando sua primeira campanha de recuperação.'
                    : `Nenhuma campanha ${filter === 'active' ? 'ativa' : filter === 'paused' ? 'pausada' : 'parada'} encontrada.`
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <CreateCampaignModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  )
}













