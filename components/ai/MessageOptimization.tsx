'use client'

import { motion } from 'framer-motion'
import { ChatBubbleLeftRightIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const messagePerformance = [
  { template: 'Template A', openRate: 45, clickRate: 12, conversion: 8 },
  { template: 'Template B', openRate: 52, clickRate: 18, conversion: 14 },
  { template: 'Template C', openRate: 38, clickRate: 8, conversion: 5 },
  { template: 'Template D', openRate: 61, clickRate: 25, conversion: 19 },
]

const channelPerformance = [
  { channel: 'WhatsApp', openRate: 85, responseRate: 45, conversion: 28 },
  { channel: 'Email', openRate: 35, responseRate: 18, conversion: 12 },
  { channel: 'SMS', openRate: 95, responseRate: 25, conversion: 15 },
]

const optimalMessages = [
  {
    channel: 'WhatsApp',
    template: 'Olá {nome}! 👋\n\nSeu pagamento de R$ {valor} não foi processado. Atualize seu cartão em 2 cliques:\n{link_pagamento}\n\nPrecisa de ajuda? Estou aqui! 😊',
    performance: {
      openRate: 85,
      responseRate: 45,
      conversion: 28,
    },
    elements: ['Emoji no início', 'Tom pessoal', 'Link direto', 'Suporte disponível'],
  },
  {
    channel: 'Email',
    template: 'Assunto: ⚠️ Falha no pagamento - Ação necessária\n\nPrezado(a) {nome},\n\nIdentificamos uma falha no processamento do seu pagamento de R$ {valor}.\n\nPara manter sua assinatura ativa, atualize seus dados:\n{link_pagamento}\n\nAtenciosamente,\nEquipe de Suporte',
    performance: {
      openRate: 35,
      responseRate: 18,
      conversion: 12,
    },
    elements: ['Assunto com emoji', 'Tom formal', 'Call-to-action claro', 'Assinatura profissional'],
  },
  {
    channel: 'SMS',
    template: '{nome}, seu pagamento de R$ {valor} falhou. Atualize: {link_pagamento} (válido por 24h)',
    performance: {
      openRate: 95,
      responseRate: 25,
      conversion: 15,
    },
    elements: ['Mensagem curta', 'Urgência clara', 'Prazo definido', 'Link direto'],
  },
]

const messageElements = [
  {
    element: 'Emoji no início',
    impact: 'Alto',
    description: 'Aumenta abertura em 23%',
    recommendation: 'Use emojis relevantes ao contexto',
  },
  {
    element: 'Nome personalizado',
    impact: 'Alto',
    description: 'Melhora engajamento em 35%',
    recommendation: 'Sempre use o nome do cliente',
  },
  {
    element: 'Tom pessoal',
    impact: 'Médio',
    description: 'Aumenta resposta em 18%',
    recommendation: 'Evite linguagem muito formal',
  },
  {
    element: 'Urgência clara',
    impact: 'Alto',
    description: 'Melhora conversão em 42%',
    recommendation: 'Defina prazos específicos',
  },
  {
    element: 'Link direto',
    impact: 'Alto',
    description: 'Reduz fricção em 67%',
    recommendation: 'Use links curtos e claros',
  },
  {
    element: 'Suporte disponível',
    impact: 'Médio',
    description: 'Aumenta confiança em 28%',
    recommendation: 'Ofereça canais de suporte',
  },
]

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

export function MessageOptimization() {
  return (
    <div className="space-y-6">
      {/* Message Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Performance dos Templates
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={messagePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="template" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="openRate" fill="#3B82F6" name="Taxa de Abertura (%)" />
              <Bar dataKey="clickRate" fill="#10B981" name="Taxa de Clique (%)" />
              <Bar dataKey="conversion" fill="#F59E0B" name="Conversão (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Channel Performance */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {channelPerformance.map((channel, index) => (
          <motion.div
            key={channel.channel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center mb-4">
              {channel.channel === 'WhatsApp' && (
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600 mr-2" />
              )}
              {channel.channel === 'Email' && (
                <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
              )}
              {channel.channel === 'SMS' && (
                <DevicePhoneMobileIcon className="h-6 w-6 text-purple-600 mr-2" />
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                {channel.channel}
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Taxa de Abertura</span>
                <span className="text-sm font-semibold text-primary-600">
                  {channel.openRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Taxa de Resposta</span>
                <span className="text-sm font-semibold text-success-600">
                  {channel.responseRate}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Conversão</span>
                <span className="text-sm font-semibold text-warning-600">
                  {channel.conversion}%
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optimal Messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Mensagens Otimizadas por Canal
        </h3>
        <div className="space-y-6">
          {optimalMessages.map((message, index) => (
            <div key={message.channel} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">
                  {message.channel}
                </h4>
                <div className="flex space-x-4 text-sm">
                  <span className="text-primary-600">
                    Abertura: {message.performance.openRate}%
                  </span>
                  <span className="text-success-600">
                    Resposta: {message.performance.responseRate}%
                  </span>
                  <span className="text-warning-600">
                    Conversão: {message.performance.conversion}%
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg mb-3">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {message.template}
                </pre>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {message.elements.map((element) => (
                  <span
                    key={element}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Message Elements Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Análise de Elementos de Mensagem
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {messageElements.map((element, index) => (
            <div
              key={element.element}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">
                  {element.element}
                </h4>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImpactColor(
                    element.impact
                  )}`}
                >
                  {element.impact}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">
                {element.description}
              </p>
              
              <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                💡 {element.recommendation}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card p-6"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recomendações da IA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
              <h4 className="font-medium text-success-900 mb-2">
                ✅ Elementos que Funcionam
              </h4>
              <ul className="text-sm text-success-700 space-y-1">
                <li>• Emojis aumentam abertura em 23%</li>
                <li>• Nome personalizado melhora engajamento em 35%</li>
                <li>• Links diretos reduzem fricção em 67%</li>
                <li>• Urgência clara melhora conversão em 42%</li>
              </ul>
            </div>
            
            <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <h4 className="font-medium text-primary-900 mb-2">
                🎯 Estratégia por Canal
              </h4>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>• WhatsApp: Use tom pessoal e emojis</li>
                <li>• Email: Mantenha formalidade e clareza</li>
                <li>• SMS: Seja direto e urgente</li>
                <li>• Personalize por segmento de cliente</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <h4 className="font-medium text-warning-900 mb-2">
                ⚠️ Evite Estes Erros
              </h4>
              <ul className="text-sm text-warning-700 space-y-1">
                <li>• Mensagens muito longas (SMS > 160 chars)</li>
                <li>• Tom muito formal no WhatsApp</li>
                <li>• Falta de call-to-action claro</li>
                <li>• Não definir prazo de ação</li>
              </ul>
            </div>
            
            <div className="p-4 bg-danger-50 border border-danger-200 rounded-lg">
              <h4 className="font-medium text-danger-900 mb-2">
                🚨 Timing Crítico
              </h4>
              <ul className="text-sm text-danger-700 space-y-1">
                <li>• Primeira mensagem: Imediato</li>
                <li>• Follow-up: 2-4 horas</li>
                <li>• Última tentativa: 24-48 horas</li>
                <li>• Evite envios após 20h</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}













