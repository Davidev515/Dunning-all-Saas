'use client'

import { motion } from 'framer-motion'
import { ClockIcon, CalendarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts'

const hourlyData = [
  { hour: '00:00', response: 5, conversion: 2 },
  { hour: '02:00', response: 3, conversion: 1 },
  { hour: '04:00', response: 2, conversion: 0 },
  { hour: '06:00', response: 8, conversion: 3 },
  { hour: '08:00', response: 15, conversion: 6 },
  { hour: '10:00', response: 25, conversion: 12 },
  { hour: '12:00', response: 35, conversion: 18 },
  { hour: '14:00', response: 45, conversion: 28 },
  { hour: '16:00', response: 42, conversion: 25 },
  { hour: '18:00', response: 38, conversion: 22 },
  { hour: '20:00', response: 28, conversion: 15 },
  { hour: '22:00', response: 18, conversion: 8 },
]

const weeklyData = [
  { day: 'Seg', response: 35, conversion: 18 },
  { day: 'Ter', response: 42, conversion: 22 },
  { day: 'Qua', response: 38, conversion: 20 },
  { day: 'Qui', response: 45, conversion: 28 },
  { day: 'Sex', response: 40, conversion: 25 },
  { day: 'Sáb', response: 25, conversion: 12 },
  { day: 'Dom', response: 20, conversion: 8 },
]

const optimalTimings = [
  {
    segment: 'Clientes Novos',
    bestTime: '14:00-16:00',
    bestDay: 'Quinta-feira',
    responseRate: '45%',
    reason: 'Maior engajamento durante horário comercial',
  },
  {
    segment: 'Clientes Estabelecidos',
    bestTime: '10:00-12:00',
    bestDay: 'Terça-feira',
    responseRate: '58%',
    reason: 'Preferem manhã para resolver questões financeiras',
  },
  {
    segment: 'Clientes Antigos',
    bestTime: '18:00-20:00',
    bestDay: 'Segunda-feira',
    responseRate: '72%',
    reason: 'Disponibilidade após horário de trabalho',
  },
]

const timingRecommendations = [
  {
    type: 'urgent',
    title: 'Falha de Pagamento',
    timing: 'Imediato',
    channels: ['WhatsApp', 'SMS'],
    description: 'Enviar em até 1 hora após falha detectada',
  },
  {
    type: 'follow_up',
    title: 'Primeiro Follow-up',
    timing: '2-4 horas',
    channels: ['Email', 'WhatsApp'],
    description: 'Segunda tentativa com mensagem personalizada',
  },
  {
    type: 'final',
    title: 'Última Tentativa',
    timing: '24-48 horas',
    channels: ['SMS', 'WhatsApp'],
    description: 'Mensagem de urgência com desconto',
  },
]

export function OptimalTiming() {
  return (
    <div className="space-y-6">
      {/* Optimal Timing Summary */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {optimalTimings.map((timing, index) => (
          <motion.div
            key={timing.segment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {timing.segment}
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-primary-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Melhor Horário
                  </div>
                  <div className="text-sm text-gray-600">{timing.bestTime}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-success-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Melhor Dia
                  </div>
                  <div className="text-sm text-gray-600">{timing.bestDay}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <ArrowTrendingUpIcon className="h-5 w-5 text-warning-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Taxa de Resposta
                  </div>
                  <div className="text-sm text-gray-600">{timing.responseRate}</div>
                </div>
              </div>
              
              <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                💡 {timing.reason}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hourly Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Performance por Hora
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="response"
                stackId="1"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.3}
                name="Taxa de Resposta (%)"
              />
              <Area
                type="monotone"
                dataKey="conversion"
                stackId="2"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
                name="Taxa de Conversão (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Taxa de Resposta</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Taxa de Conversão</span>
          </div>
        </div>
      </motion.div>

      {/* Weekly Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Performance por Dia da Semana
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="response"
                stroke="#3B82F6"
                strokeWidth={3}
                name="Taxa de Resposta (%)"
              />
              <Line
                type="monotone"
                dataKey="conversion"
                stroke="#10B981"
                strokeWidth={3}
                name="Taxa de Conversão (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Timing Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recomendações de Timing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timingRecommendations.map((recommendation, index) => (
            <div
              key={recommendation.type}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">
                  {recommendation.title}
                </h4>
                <span className="text-xs font-medium text-primary-600">
                  {recommendation.timing}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">
                {recommendation.description}
              </p>
              
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-700">
                  Canais Recomendados:
                </div>
                <div className="flex flex-wrap gap-1">
                  {recommendation.channels.map((channel) => (
                    <span
                      key={channel}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Timing Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Insights de Timing da IA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
              <h4 className="font-medium text-success-900 mb-2">
                🎯 Horário de Ouro
              </h4>
              <p className="text-sm text-success-700">
                Entre 14h-16h de terça a quinta-feira você tem 45% mais chances 
                de recuperar clientes. A IA detectou que este é o período de 
                maior engajamento.
              </p>
            </div>
            
            <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <h4 className="font-medium text-warning-900 mb-2">
                ⚡ Urgência Noturna
              </h4>
              <p className="text-sm text-warning-700">
                Para falhas de pagamento detectadas após 18h, aguarde até 8h 
                do próximo dia. Clientes respondem melhor no horário comercial.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <h4 className="font-medium text-primary-900 mb-2">
                📅 Padrão Semanal
              </h4>
              <p className="text-sm text-primary-700">
                Quinta-feira é o melhor dia da semana com 28% de conversão. 
                Evite domingos e segundas-feiras para campanhas não urgentes.
              </p>
            </div>
            
            <div className="p-4 bg-danger-50 border border-danger-200 rounded-lg">
              <h4 className="font-medium text-danger-900 mb-2">
                🚨 Timing Crítico
              </h4>
              <p className="text-sm text-danger-700">
                Primeiras 2 horas após falha são cruciais. Clientes que não 
                respondem neste período têm 60% menos chance de recuperação.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
