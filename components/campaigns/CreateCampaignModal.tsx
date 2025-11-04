'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface CreateCampaignModalProps {
  isOpen: boolean
  onClose: () => void
}

const campaignTypes = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'Mensagens instantâneas com alta taxa de abertura',
    icon: '💬',
    color: 'border-green-200 bg-green-50 hover:bg-green-100',
    selectedColor: 'border-green-500 bg-green-100',
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Comunicação formal e profissional',
    icon: '📧',
    color: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
    selectedColor: 'border-blue-500 bg-blue-100',
  },
  {
    id: 'sms',
    name: 'SMS',
    description: 'Mensagens diretas para urgência',
    icon: '📱',
    color: 'border-purple-200 bg-purple-50 hover:bg-purple-100',
    selectedColor: 'border-purple-500 bg-purple-100',
  },
]

const triggerConditions = [
  {
    id: 'card_expired',
    name: 'Cartão Expirado',
    description: 'Quando o cartão de crédito expira',
  },
  {
    id: 'card_declined',
    name: 'Cartão Recusado',
    description: 'Quando o pagamento é recusado',
  },
  {
    id: 'pix_failed',
    name: 'PIX Falhou',
    description: 'Quando o PIX não é processado',
  },
  {
    id: 'boleto_overdue',
    name: 'Boleto Vencido',
    description: 'Quando o boleto não é pago',
  },
]

export function CreateCampaignModal({ isOpen, onClose }: CreateCampaignModalProps) {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null)
  const [campaignName, setCampaignName] = useState('')
  const [message, setMessage] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      handleCreate()
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleCreate = async () => {
    setIsCreating(true)
    
    // Simular criação da campanha
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsCreating(false)
    onClose()
    
    // Reset form
    setStep(1)
    setSelectedType(null)
    setSelectedCondition(null)
    setCampaignName('')
    setMessage('')
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedType !== null
      case 2:
        return selectedCondition !== null
      case 3:
        return campaignName.trim() !== '' && message.trim() !== ''
      default:
        return false
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Nova Campanha
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center">
                    {[1, 2, 3].map((stepNumber) => (
                      <div key={stepNumber} className="flex items-center">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            stepNumber <= step
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {stepNumber}
                        </div>
                        {stepNumber < 3 && (
                          <div
                            className={`h-1 w-16 mx-2 ${
                              stepNumber < step ? 'bg-primary-600' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 1: Select Type */}
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Escolha o canal de comunicação
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {campaignTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedType(type.id)}
                          className={`p-4 rounded-lg border-2 text-left transition-colors ${
                            selectedType === type.id
                              ? type.selectedColor
                              : type.color
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{type.icon}</span>
                            <div>
                              <div className="font-medium text-gray-900">
                                {type.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {type.description}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Select Condition */}
                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Quando acionar a campanha?
                    </h3>
                    <div className="space-y-3">
                      {triggerConditions.map((condition) => (
                        <button
                          key={condition.id}
                          onClick={() => setSelectedCondition(condition.id)}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                            selectedCondition === condition.id
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 bg-white hover:bg-gray-50'
                          }`}
                        >
                          <div className="font-medium text-gray-900">
                            {condition.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {condition.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Configure Message */}
                {step === 3 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Configure a mensagem
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome da Campanha
                        </label>
                        <input
                          type="text"
                          value={campaignName}
                          onChange={(e) => setCampaignName(e.target.value)}
                          className="input"
                          placeholder="Ex: Cobrança WhatsApp - Cartão Expirado"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mensagem
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          className="input"
                          placeholder="Digite sua mensagem personalizada..."
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Use variáveis como {`{nome}`, `{valor}`, `{link_pagamento}`} para personalizar
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={step === 1 ? onClose : handleBack}
                    className="btn btn-secondary"
                  >
                    {step === 1 ? 'Cancelar' : 'Voltar'}
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={!canProceed() || isCreating}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCreating ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Criando...
                      </div>
                    ) : step === 3 ? (
                      'Criar Campanha'
                    ) : (
                      'Próximo'
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
