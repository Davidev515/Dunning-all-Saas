'use client'

import { motion } from 'framer-motion'
import {
  PlayIcon,
  PauseIcon,
  StopIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Campaign {
  id: number
  name: string
  type: 'whatsapp' | 'email' | 'sms'
  status: 'active' | 'paused' | 'stopped'
  sent: number
  delivered: number
  recovered: number
  recoveryRate: number
  lastSent: string
  createdAt: string
}

interface CampaignCardProps {
  campaign: Campaign
}

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

const getTypeColor = (type: string) => {
  switch (type) {
    case 'whatsapp':
      return 'text-green-600 bg-green-100'
    case 'email':
      return 'text-blue-600 bg-blue-100'
    case 'sms':
      return 'text-purple-600 bg-purple-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const TypeIcon = getTypeIcon(campaign.type)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${getTypeColor(campaign.type)}`}>
            <TypeIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {campaign.name}
            </h3>
            <p className="text-sm text-gray-500 capitalize">
              {campaign.type}
            </p>
          </div>
        </div>
        
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
            campaign.status
          )}`}
        >
          {getStatusText(campaign.status)}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {campaign.sent.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">Enviados</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-success-600">
            {campaign.recovered}
          </div>
          <div className="text-xs text-gray-500">Recuperados</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">
            {campaign.recoveryRate}%
          </div>
          <div className="text-xs text-gray-500">Taxa</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">
            {campaign.delivered}
          </div>
          <div className="text-xs text-gray-500">Entregues</div>
        </div>
      </div>

      {/* Last Activity */}
      <div className="mb-4 text-sm text-gray-500">
        Último envio: {format(new Date(campaign.lastSent), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {campaign.status === 'active' ? (
            <button className="p-2 text-gray-400 hover:text-warning-600 transition-colors">
              <PauseIcon className="h-4 w-4" />
            </button>
          ) : (
            <button className="p-2 text-gray-400 hover:text-success-600 transition-colors">
              <PlayIcon className="h-4 w-4" />
            </button>
          )}
          
          <button className="p-2 text-gray-400 hover:text-danger-600 transition-colors">
            <StopIcon className="h-4 w-4" />
          </button>
          
          <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
            <EyeIcon className="h-4 w-4" />
          </button>
        </div>
        
        <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
          Ver detalhes
        </button>
      </div>
    </motion.div>
  )
}













