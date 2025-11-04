'use client'

import { motion } from 'framer-motion'
import {
  PlayIcon,
  PauseIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

const campaigns = [
  {
    id: 1,
    name: 'Cobrança WhatsApp - Cartão Expirado',
    status: 'active',
    type: 'whatsapp',
    sent: 156,
    delivered: 142,
    recovered: 23,
    recoveryRate: '16.2%',
    lastSent: '2 horas atrás',
  },
  {
    id: 2,
    name: 'Email de Cobrança - Falha PIX',
    status: 'paused',
    type: 'email',
    sent: 89,
    delivered: 85,
    recovered: 12,
    recoveryRate: '14.1%',
    lastSent: '1 dia atrás',
  },
  {
    id: 3,
    name: 'SMS Urgente - Cartão Recusado',
    status: 'active',
    type: 'sms',
    sent: 45,
    delivered: 43,
    recovered: 8,
    recoveryRate: '18.6%',
    lastSent: '30 minutos atrás',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-success-100 text-success-800'
    case 'paused':
      return 'bg-warning-100 text-warning-800'
    case 'stopped':
      return 'bg-danger-100 text-danger-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return 'Ativa'
    case 'paused':
      return 'Pausada'
    case 'stopped':
      return 'Parada'
    default:
      return 'Desconhecido'
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'whatsapp':
      return ChatBubbleLeftRightIcon
    case 'email':
      return EnvelopeIcon
    case 'sms':
      return DevicePhoneMobileIcon
    default:
      return ChatBubbleLeftRightIcon
  }
}

export function CampaignsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Campanhas Ativas
        </h3>
        <p className="text-sm text-gray-500">
          Performance das suas campanhas de recuperação
        </p>
      </div>
      
      <div className="space-y-4">
        {campaigns.map((campaign, index) => {
          const TypeIcon = getTypeIcon(campaign.type)
          
          return (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <TypeIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {campaign.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Último envio: {campaign.lastSent}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      campaign.status
                    )}`}
                  >
                    {getStatusText(campaign.status)}
                  </span>
                  
                  <div className="flex items-center space-x-1">
                    {campaign.status === 'active' ? (
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <PauseIcon className="h-4 w-4" />
                      </button>
                    ) : (
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <PlayIcon className="h-4 w-4" />
                      </button>
                    )}
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {campaign.sent}
                  </div>
                  <div className="text-xs text-gray-500">Enviados</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {campaign.delivered}
                  </div>
                  <div className="text-xs text-gray-500">Entregues</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-success-600">
                    {campaign.recovered}
                  </div>
                  <div className="text-xs text-gray-500">Recuperados</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-primary-600">
                    {campaign.recoveryRate}
                  </div>
                  <div className="text-xs text-gray-500">Taxa</div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <div className="mt-6">
        <button className="w-full text-center text-sm font-medium text-primary-600 hover:text-primary-500">
          Ver todas as campanhas
        </button>
      </div>
    </motion.div>
  )
}













