'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  PlusIcon,
  PlayIcon,
  PauseIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

const whatsappTemplates = [
  {
    id: 1,
    name: 'Cartão Expirado',
    content: 'Olá {nome}! 👋\n\nSeu pagamento de R$ {valor} não foi processado. Atualize seu cartão em 2 cliques:\n{link_pagamento}\n\nPrecisa de ajuda? Estou aqui! 😊',
    status: 'active',
    sent: 156,
    delivered: 142,
    recovered: 23,
    rate: 16.2,
  },
  {
    id: 2,
    name: 'Cartão Recusado',
    content: 'Oi {nome}! ⚠️\n\nSeu cartão foi recusado. Tente novamente ou use outro método:\n{link_pagamento}\n\nQualquer dúvida, me chame! 💬',
    status: 'active',
    sent: 89,
    delivered: 85,
    recovered: 12,
    rate: 13.5,
  },
  {
    id: 3,
    name: 'PIX Falhou',
    content: 'Olá {nome}! 🔄\n\nSeu PIX não foi processado. Tente novamente:\n{link_pagamento}\n\nSe persistir, use cartão de crédito.',
    status: 'paused',
    sent: 45,
    delivered: 43,
    recovered: 8,
    rate: 18.6,
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

export function WhatsAppAutomation() {
  const [isCreating, setIsCreating] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">WhatsApp Business</h2>
          <p className="text-gray-600">
            Configure templates e automações para WhatsApp
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
            <div className="p-2 bg-green-100 rounded-lg">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Enviados</p>
              <p className="text-2xl font-bold text-gray-900">290</p>
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
            <div className="p-2 bg-blue-100 rounded-lg">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Entregues</p>
              <p className="text-2xl font-bold text-gray-900">270</p>
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
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-success-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Recuperados</p>
              <p className="text-2xl font-bold text-gray-900">43</p>
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
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Taxa de Sucesso</p>
              <p className="text-2xl font-bold text-gray-900">15.9%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Templates */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Templates de Mensagem
        </h3>
        <div className="space-y-4">
          {whatsappTemplates.map((template, index) => (
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

      {/* WhatsApp Configuration */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Configurações do WhatsApp Business
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número do WhatsApp Business
            </label>
            <input
              type="tel"
              className="input"
              placeholder="+55 11 99999-9999"
              defaultValue="+55 11 99999-9999"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Token de Acesso
            </label>
            <input
              type="password"
              className="input"
              placeholder="Seu token do WhatsApp Business"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Webhook URL
            </label>
            <input
              type="url"
              className="input"
              placeholder="https://api.dunningai.com/webhook/whatsapp"
              defaultValue="https://api.dunningai.com/webhook/whatsapp"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Horário de Funcionamento
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

      {/* Create Template Modal */}
      {isCreating && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Novo Template WhatsApp
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
                      placeholder="Ex: Cartão Expirado"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      rows={6}
                      className="input"
                      placeholder="Digite sua mensagem..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Use variáveis: {`{nome}`, `{valor}`, `{link_pagamento}`}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Condição de Envio
                    </label>
                    <select className="input">
                      <option>Cartão Expirado</option>
                      <option>Cartão Recusado</option>
                      <option>PIX Falhou</option>
                      <option>Boleto Vencido</option>
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
