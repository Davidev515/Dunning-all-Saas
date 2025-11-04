'use client'

import { motion } from 'framer-motion'
import {
  PlusIcon,
  CogIcon,
  ChartBarIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    name: 'Nova Campanha',
    description: 'Criar campanha de cobrança',
    icon: PlusIcon,
    href: '/campaigns/new',
    color: 'bg-primary-600 hover:bg-primary-700',
  },
  {
    name: 'Configurações',
    description: 'Gateway e integrações',
    icon: CogIcon,
    href: '/settings',
    color: 'bg-gray-600 hover:bg-gray-700',
  },
  {
    name: 'Relatórios',
    description: 'Analytics detalhados',
    icon: ChartBarIcon,
    href: '/reports',
    color: 'bg-success-600 hover:bg-success-700',
  },
  {
    name: 'Clientes',
    description: 'Gerenciar assinaturas',
    icon: UserGroupIcon,
    href: '/customers',
    color: 'bg-warning-600 hover:bg-warning-700',
  },
]

const channels = [
  {
    name: 'WhatsApp',
    icon: ChatBubbleLeftRightIcon,
    status: 'active',
    count: 156,
  },
  {
    name: 'Email',
    icon: EnvelopeIcon,
    status: 'active',
    count: 89,
  },
  {
    name: 'SMS',
    icon: DevicePhoneMobileIcon,
    status: 'paused',
    count: 45,
  },
]

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {/* Quick Actions */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Ações Rápidas
        </h3>
        <div className="space-y-3">
          {actions.map((action, index) => (
            <motion.a
              key={action.name}
              href={action.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${action.color} mr-3`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {action.name}
                </div>
                <div className="text-xs text-gray-500">
                  {action.description}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Channel Status */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Status dos Canais
        </h3>
        <div className="space-y-3">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-200"
            >
              <div className="flex items-center">
                <channel.icon className="h-5 w-5 text-primary-600 mr-3" />
                <span className="text-sm font-medium text-gray-900">
                  {channel.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {channel.count} envios
                </span>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    channel.status === 'active'
                      ? 'bg-success-100 text-success-800'
                      : 'bg-warning-100 text-warning-800'
                  }`}
                >
                  {channel.status === 'active' ? 'Ativo' : 'Pausado'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Performance Summary */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Resumo de Performance
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Taxa de Recuperação</span>
            <span className="text-lg font-semibold text-success-600">48.2%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">ROI Médio</span>
            <span className="text-lg font-semibold text-primary-600">500%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tempo Médio de Resposta</span>
            <span className="text-lg font-semibold text-warning-600">2.3h</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}













