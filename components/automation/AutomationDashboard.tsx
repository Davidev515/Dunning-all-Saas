'use client'

import { motion } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  PlayIcon,
  PauseIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'

const automationStats = [
  {
    name: 'WhatsApp',
    icon: ChatBubbleLeftRightIcon,
    status: 'active',
    sent: 156,
    delivered: 142,
    recovered: 23,
    rate: 16.2,
    color: 'text-green-600 bg-green-100',
  },
  {
    name: 'Email',
    icon: EnvelopeIcon,
    status: 'active',
    sent: 89,
    delivered: 85,
    recovered: 12,
    rate: 14.1,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    name: 'SMS',
    icon: DevicePhoneMobileIcon,
    status: 'paused',
    sent: 45,
    delivered: 43,
    recovered: 8,
    rate: 18.6,
    color: 'text-purple-600 bg-purple-100',
  },
]

const performanceData = [
  { day: 'Seg', whatsapp: 45, email: 28, sms: 15 },
  { day: 'Ter', whatsapp: 52, email: 32, sms: 18 },
  { day: 'Qua', whatsapp: 48, email: 30, sms: 12 },
  { day: 'Qui', whatsapp: 61, email: 35, sms: 22 },
  { day: 'Sex', whatsapp: 55, email: 31, sms: 19 },
  { day: 'Sáb', whatsapp: 38, email: 25, sms: 14 },
  { day: 'Dom', whatsapp: 42, email: 28, sms: 16 },
]

const recentActivities = [
  {
    id: 1,
    type: 'success',
    channel: 'WhatsApp',
    message: 'João Silva atualizou o cartão e pagou R$ 97,00',
    time: '2 minutos atrás',
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    type: 'warning',
    channel: 'Email',
    message: 'Maria Santos - cartão expirado, enviando WhatsApp',
    time: '15 minutos atrás',
    icon: ExclamationTriangleIcon,
  },
  {
    id: 3,
    type: 'info',
    channel: 'SMS',
    message: 'SMS de cobrança enviado para 23 clientes',
    time: '1 hora atrás',
    icon: ClockIcon,
  },
  {
    id: 4,
    type: 'success',
    channel: 'WhatsApp',
    message: 'Ana Costa pagou R$ 297,00 após SMS personalizado',
    time: '2 horas atrás',
    icon: CheckCircleIcon,
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
      return 'Ativo'
    case 'paused':
      return 'Pausado'
    case 'stopped':
      return 'Parado'
    default:
      return 'Desconhecido'
  }
}

const getActivityColor = (type: string) => {
  switch (type) {
    case 'success':
      return 'text-success-600 bg-success-50'
    case 'warning':
      return 'text-warning-600 bg-warning-50'
    case 'info':
      return 'text-primary-600 bg-primary-50'
    default:
      return 'text-gray-600 bg-gray-50'
  }
}

export function AutomationDashboard() {
  return (
    <div className="space-y-6">
      {/* Channel Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {automationStats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stat.name}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      stat.status
                    )}`}
                  >
                    {getStatusText(stat.status)}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {stat.status === 'active' ? (
                  <button className="p-1 text-gray-400 hover:text-warning-600">
                    <PauseIcon className="h-4 w-4" />
                  </button>
                ) : (
                  <button className="p-1 text-gray-400 hover:text-success-600">
                    <PlayIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.sent}
                </div>
                <div className="text-xs text-gray-500">Enviados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600">
                  {stat.recovered}
                </div>
                <div className="text-xs text-gray-500">Recuperados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {stat.rate}%
                </div>
                <div className="text-xs text-gray-500">Taxa</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.delivered}
                </div>
                <div className="text-xs text-gray-500">Entregues</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Performance Semanal por Canal
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="whatsapp"
                stroke="#10B981"
                strokeWidth={3}
                name="WhatsApp"
              />
              <Line
                type="monotone"
                dataKey="email"
                stroke="#3B82F6"
                strokeWidth={3}
                name="Email"
              />
              <Line
                type="monotone"
                dataKey="sms"
                stroke="#8B5CF6"
                strokeWidth={3}
                name="SMS"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Atividades Recentes
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    {activity.channel}
                  </span>
                  <span className="text-xs text-gray-500">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {activity.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Ações Rápidas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Configurar WhatsApp</div>
                <div className="text-sm text-gray-500">Templates e automação</div>
              </div>
            </div>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Configurar Email</div>
                <div className="text-sm text-gray-500">Templates e sequências</div>
              </div>
            </div>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DevicePhoneMobileIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Configurar SMS</div>
                <div className="text-sm text-gray-500">Mensagens e timing</div>
              </div>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  )
}
