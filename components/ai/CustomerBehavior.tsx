'use client'

import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const behaviorData = [
  { segment: 'Novos (0-3 meses)', response: 35, churn: 12 },
  { segment: 'Estabelecidos (3-12 meses)', response: 58, churn: 8 },
  { segment: 'Antigos (12+ meses)', response: 72, churn: 3 },
]

const channelPreference = [
  { name: 'WhatsApp', value: 45, color: '#10B981' },
  { name: 'Email', value: 30, color: '#3B82F6' },
  { name: 'SMS', value: 25, color: '#8B5CF6' },
]

const timeAnalysis = [
  { hour: '08:00', response: 12 },
  { hour: '10:00', response: 28 },
  { hour: '12:00', response: 35 },
  { hour: '14:00', response: 45 },
  { hour: '16:00', response: 42 },
  { hour: '18:00', response: 38 },
  { hour: '20:00', response: 25 },
]

const customerSegments = [
  {
    name: 'Clientes Novos',
    count: 234,
    description: '0-3 meses de assinatura',
    responseRate: '35%',
    riskLevel: 'Alto',
    recommendation: 'Foco em onboarding e suporte',
  },
  {
    name: 'Clientes Estabelecidos',
    count: 567,
    description: '3-12 meses de assinatura',
    responseRate: '58%',
    riskLevel: 'Médio',
    recommendation: 'Manter engajamento regular',
  },
  {
    name: 'Clientes Antigos',
    count: 446,
    description: '12+ meses de assinatura',
    responseRate: '72%',
    riskLevel: 'Baixo',
    recommendation: 'Foco em upselling',
  },
]

const getRiskColor = (risk: string) => {
  switch (risk) {
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

export function CustomerBehavior() {
  return (
    <div className="space-y-6">
      {/* Customer Segments */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {customerSegments.map((segment, index) => (
          <motion.div
            key={segment.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {segment.name}
              </h3>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(
                  segment.riskLevel
                )}`}
              >
                {segment.riskLevel}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Clientes</span>
                <span className="text-sm font-semibold">{segment.count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Taxa de Resposta</span>
                <span className="text-sm font-semibold text-primary-600">
                  {segment.responseRate}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {segment.description}
              </div>
              <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                💡 {segment.recommendation}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Response Rate by Segment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Taxa de Resposta por Segmento
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={behaviorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="segment" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="response" fill="#3B82F6" name="Taxa de Resposta (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Channel Preference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Preferência de Canal
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelPreference}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {channelPreference.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            {channelPreference.map((channel) => (
              <div key={channel.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: channel.color }}
                />
                <span className="text-sm text-gray-600">{channel.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Time Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Análise de Horário de Resposta
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timeAnalysis}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="response" fill="#10B981" name="Taxa de Resposta (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          💡 <strong>Insight:</strong> Melhor horário para envio é entre 14h-16h com 45% de resposta
        </div>
      </motion.div>

      {/* Behavioral Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Padrões Comportamentais Identificados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-success-100 rounded-lg">
                <UserGroupIcon className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Clientes Fiéis</h4>
                <p className="text-sm text-gray-600">
                  Clientes com 12+ meses respondem 72% das vezes e raramente cancelam
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-warning-100 rounded-lg">
                <ClockIcon className="h-5 w-5 text-warning-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Timing Crítico</h4>
                <p className="text-sm text-gray-600">
                  Primeiras 24h após falha de pagamento são cruciais para recuperação
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Canal Preferido</h4>
                <p className="text-sm text-gray-600">
                  WhatsApp tem 45% de preferência e maior taxa de conversão
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-2 bg-danger-100 rounded-lg">
                <DevicePhoneMobileIcon className="h-5 w-5 text-danger-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Urgência SMS</h4>
                <p className="text-sm text-gray-600">
                  SMS é mais eficaz para situações urgentes e cartões recusados
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
