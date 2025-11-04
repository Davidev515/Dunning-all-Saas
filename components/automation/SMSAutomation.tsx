'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  DevicePhoneMobileIcon,
  PlusIcon,
  PlayIcon,
  PauseIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

const smsTemplates = [
  {
    id: 1,
    name: 'Urgente - Cartão Recusado',
    content: '{nome}, seu pagamento de R$ {valor} falhou. Atualize: {link_pagamento} (válido por 24h)',
    status: 'active',
    sent: 45,
    delivered: 43,
    recovered: 8,
    rate: 18.6,
  },
  {
    id: 2,
    name: 'PIX Falhou',
    content: '{nome}, seu PIX de R$ {valor} não foi processado. Tente novamente: {link_pagamento}',
    status: 'active',
    sent: 23,
    delivered: 22,
    recovered: 4,
    rate: 18.2,
  },
  {
    id: 3,
    name: 'Última Chance',
    content: '{nome}, última chance! Seu pagamento de R$ {valor} falhou. Evite cancelamento: {link_pagamento}',
    status: 'paused',
    sent: 12,
    delivered: 11,
    recovered: 3,
    rate: 27.3,
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

export function SMSAutomation() {
  const [isCreating, setIsCreating] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">SMS</h2>
          <p className="text-gray-600">
            Configure mensagens SMS para situações urgentes
          </p>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="btn btn-primary"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Novo Template
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DevicePhoneMobileIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Enviados</p>
              <p className="text-2xl font-bold text-gray-900">80</p>
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
            <div className="p-2 bg-green-100 rounded-lg">
              <DevicePhoneMobileIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Entregues</p>
              <p className="text-2xl font-bold text-gray-900">76</p>
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
            <div className="p-2 bg-success-100 rounded-lg">
              <DevicePhoneMobileIcon className="h-6 w-6 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Recuperados</p>
              <p className="text-2xl font-bold text-gray-900">15</p>
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
            <div className="p-2 bg-primary-100 rounded-lg">
              <DevicePhoneMobileIcon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-gray-900">19.7%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Templates */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Templates de SMS
        </h3>
        <div className="space-y-4">
          {smsTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      {template.name}
                    </h4>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        template.status
                      )}`}
                    >
                      {getStatusText(template.status)}
                    </span>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-3">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                      {template.content}
                    </pre>
                    <div className="text-xs text-gray-500 mt-2">
                      Caracteres: {template.content.length}/160
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {template.sent}
                      </div>
                      <div className="text-xs text-gray-500">Enviados</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">
                        {template.delivered}
                      </div>
                      <div className="text-xs text-gray-500">Entregues</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-success-600">
                        {template.recovered}
                      </div>
                      <div className="text-xs text-gray-500">Recuperados</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-primary-600">
                        {template.rate}%
                      </div>
                      <div className="text-xs text-gray-500">Taxa</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  {template.status === 'active' ? (
                    <button className="p-2 text-gray-400 hover:text-warning-600 transition-colors">
                      <PauseIcon className="h-4 w-4" />
                    </button>
                  ) : (
                    <button className="p-2 text-gray-400 hover:text-success-600 transition-colors">
                      <PlayIcon className="h-4 w-4" />
                    </button>
                  )}
                  
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  
                  <button className="p-2 text-gray-400 hover:text-danger-600 transition-colors">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SMS Configuration */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Configurações de SMS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Provedor de SMS
            </label>
            <select className="input">
              <option>Twilio</option>
              <option>Zenvia</option>
              <option>TotalVoice</option>
              <option>Personalizado</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account SID
            </label>
            <input
              type="text"
              className="input"
              placeholder="Seu Account SID"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auth Token
            </label>
            <input
              type="password"
              className="input"
              placeholder="Seu Auth Token"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de Origem
            </label>
            <input
              type="tel"
              className="input"
              placeholder="+55 11 99999-9999"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Limite de Envios/Hora
            </label>
            <input
              type="number"
              className="input"
              placeholder="50"
              defaultValue="50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horário de Envio
            </label>
            <select className="input">
              <option>24 horas</option>
              <option>8h às 18h</option>
              <option>9h às 17h</option>
              <option>Personalizado</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end space-x-4">
          <button className="btn btn-secondary">
            Testar Conexão
          </button>
          <button className="btn btn-primary">
            Salvar Configurações
          </button>
        </div>
      </div>

      {/* SMS Best Practices */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Melhores Práticas para SMS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
              <h4 className="font-medium text-success-900 mb-2">
                ✅ Faça
              </h4>
              <ul className="text-sm text-success-700 space-y-1">
                <li>• Seja direto e objetivo</li>
                <li>• Use máximo 160 caracteres</li>
                <li>• Inclua link de pagamento</li>
                <li>• Defina prazo de ação</li>
                <li>• Use para situações urgentes</li>
              </ul>
            </div>
            
            <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <h4 className="font-medium text-primary-900 mb-2">
                🎯 Estratégia
              </h4>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>• Envie apenas em casos críticos</li>
                <li>• Combine com outros canais</li>
                <li>• Respeite horário comercial</li>
                <li>• Personalize com nome do cliente</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-danger-50 border border-danger-200 rounded-lg">
              <h4 className="font-medium text-danger-900 mb-2">
                ❌ Evite
              </h4>
              <ul className="text-sm text-danger-700 space-y-1">
                <li>• Mensagens muito longas</li>
                <li>• Envios em horário inadequado</li>
                <li>• Spam ou excesso de mensagens</li>
                <li>• Links quebrados</li>
                <li>• Tom muito formal</li>
              </ul>
            </div>
            
            <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <h4 className="font-medium text-warning-900 mb-2">
                ⚠️ Importante
              </h4>
              <ul className="text-sm text-warning-700 space-y-1">
                <li>• SMS tem custo por mensagem</li>
                <li>• Use apenas para urgência</li>
                <li>• Teste antes de ativar</li>
                <li>• Monitore taxa de entrega</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Create Template Modal */}
      {isCreating && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Novo Template SMS
                  </h3>
                  <button
                    onClick={() => setIsCreating(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Template
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Ex: Urgente - Cartão Recusado"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem SMS
                    </label>
                    <textarea
                      rows={3}
                      className="input"
                      placeholder="Digite sua mensagem SMS..."
                      maxLength={160}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Use variáveis: {'{nome}'}, {'{valor}'}, {'{link_pagamento}'} • Máximo 160 caracteres
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Condição de Envio
                    </label>
                    <select className="input">
                      <option>Cartão Recusado</option>
                      <option>PIX Falhou</option>
                      <option>Boleto Vencido</option>
                      <option>Última Tentativa</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgência
                    </label>
                    <select className="input">
                      <option>Alta - Enviar imediatamente</option>
                      <option>Média - Aguardar 2 horas</option>
                      <option>Baixa - Aguardar 4 horas</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    onClick={() => setIsCreating(false)}
                    className="btn btn-secondary"
                  >
                    Cancelar
                  </button>
                  <button className="btn btn-primary">
                    Criar Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}













