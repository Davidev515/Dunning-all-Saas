'use client'

import { motion } from 'framer-motion'
import {
  LightBulbIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  TrendingUpIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

const insights = [
  {
    id: 1,
    type: 'success',
    title: 'Otimização de Horário',
    description: 'Clientes respondem 23% melhor entre 14h-16h',
    icon: ClockIcon,
    impact: 'Alto',
    recommendation: 'Ajustar envios para horário otimizado',
  },
  {
    id: 2,
    type: 'warning',
    title: 'Canal Subutilizado',
    description: 'WhatsApp tem 40% mais conversão que email',
    icon: TrendingUpIcon,
    impact: 'Médio',
    recommendation: 'Aumentar uso do WhatsApp',
  },
  {
    id: 3,
    type: 'info',
    title: 'Padrão de Comportamento',
    description: 'Clientes com falha em PIX respondem melhor a SMS',
    icon: UserGroupIcon,
    impact: 'Alto',
    recommendation: 'Criar campanha específica para PIX',
  },
  {
    id: 4,
    type: 'success',
    title: 'Mensagem Eficaz',
    description: 'Templates com emoji têm 15% mais abertura',
    icon: LightBulbIcon,
    impact: 'Médio',
    recommendation: 'Adicionar emojis aos templates',
  },
  {
    id: 5,
    type: 'warning',
    title: 'Taxa de Churn',
    description: 'Clientes de 3+ meses têm 60% menos chance de cancelar',
    icon: ExclamationTriangleIcon,
    impact: 'Alto',
    recommendation: 'Focar em clientes novos',
  },
]

const getInsightColor = (type: string) => {
  switch (type) {
    case 'success':
      return 'text-success-600 bg-success-50 border-success-200'
    case 'warning':
      return 'text-warning-600 bg-warning-50 border-warning-200'
    case 'info':
      return 'text-primary-600 bg-primary-50 border-primary-200'
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200'
  }
}

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'Alto':
      return 'bg-danger-100 text-danger-800'
    case 'Médio':
      return 'bg-warning-100 text-warning-800'
    case 'Baixo':
      return 'bg-success-100 text-success-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function AIInsights() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="p-2 bg-primary-100 rounded-lg">
              <ChartBarIcon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Taxa de Recuperação</p>
              <p className="text-2xl font-bold text-gray-900">48.2%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="p-2 bg-success-100 rounded-lg">
              <TrendingUpIcon className="h-6 w-6 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">ROI Médio</p>
              <p className="text-2xl font-bold text-gray-900">500%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="p-2 bg-warning-100 rounded-lg">
              <ClockIcon className="h-6 w-6 text-warning-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Tempo Médio</p>
              <p className="text-2xl font-bold text-gray-900">2.3h</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="p-2 bg-danger-100 rounded-lg">
              <UserGroupIcon className="h-6 w-6 text-danger-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Clientes Analisados</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Insights */}
      <div className="card p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Insights da IA
          </h3>
          <p className="text-sm text-gray-500">
            Análises inteligentes baseadas no comportamento dos seus clientes
          </p>
        </div>

        <div className="space-y-4">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <insight.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">
                      {insight.title}
                    </h4>
                    <p className="text-sm mt-1">
                      {insight.description}
                    </p>
                    <p className="text-xs mt-2 font-medium">
                      💡 {insight.recommendation}
                    </p>
                  </div>
                </div>
                
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImpactColor(
                    insight.impact
                  )}`}
                >
                  {insight.impact}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="btn btn-secondary">
          Exportar Relatório
        </button>
        <button className="btn btn-primary">
          Aplicar Recomendações
        </button>
      </div>
    </div>
  )
}













