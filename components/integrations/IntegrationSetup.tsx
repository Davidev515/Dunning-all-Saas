'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface IntegrationSetupProps {
  integrationId: string
  onBack: () => void
}

const integrationConfigs = {
  stripe: {
    name: 'Stripe',
    steps: [
      {
        title: 'Obter chaves da API',
        description: 'Acesse o dashboard do Stripe e copie suas chaves de API',
        fields: [
          { name: 'publishable_key', label: 'Chave Pública', type: 'text', required: true },
          { name: 'secret_key', label: 'Chave Secreta', type: 'password', required: true },
        ]
      },
      {
        title: 'Configurar webhooks',
        description: 'Configure o endpoint de webhook no Stripe',
        fields: [
          { name: 'webhook_secret', label: 'Webhook Secret', type: 'password', required: true },
        ]
      }
    ]
  },
  pagseguro: {
    name: 'PagSeguro',
    steps: [
      {
        title: 'Credenciais de API',
        description: 'Obtenha suas credenciais no painel do PagSeguro',
        fields: [
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'token', label: 'Token', type: 'password', required: true },
        ]
      }
    ]
  },
  asaas: {
    name: 'Asaas',
    steps: [
      {
        title: 'Token de API',
        description: 'Configure seu token de acesso no Asaas',
        fields: [
          { name: 'api_key', label: 'API Key', type: 'password', required: true },
          { name: 'environment', label: 'Ambiente', type: 'select', options: ['sandbox', 'production'], required: true },
        ]
      }
    ]
  },
  mercadopago: {
    name: 'Mercado Pago',
    steps: [
      {
        title: 'Credenciais de acesso',
        description: 'Configure suas credenciais do Mercado Pago',
        fields: [
          { name: 'access_token', label: 'Access Token', type: 'password', required: true },
          { name: 'public_key', label: 'Public Key', type: 'text', required: true },
        ]
      }
    ]
  }
}

export function IntegrationSetup({ integrationId, onBack }: IntegrationSetupProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const config = integrationConfigs[integrationId as keyof typeof integrationConfigs]
  const currentStepData = config.steps[currentStep]

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < config.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleConnect()
    }
  }

  const handleConnect = async () => {
    setIsConnecting(true)
    
    // Simular conexão
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsConnecting(false)
    setIsConnected(true)
  }

  const isStepValid = () => {
    return currentStepData.fields.every(field => 
      field.required ? formData[field.name] : true
    )
  }

  if (isConnected) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="card p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 bg-success-100 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="h-8 w-8 text-success-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Integração Conectada!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Sua integração com {config.name} foi configurada com sucesso. 
            Agora você pode começar a recuperar receita automaticamente.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={onBack}
              className="w-full btn btn-primary"
            >
              Voltar para Integrações
            </button>
            <button className="w-full btn btn-secondary">
              Configurar Campanhas
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="card p-6">
        <div className="flex items-center mb-6">
          <button
            onClick={onBack}
            className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Conectar {config.name}
            </h2>
            <p className="text-gray-600">
              Passo {currentStep + 1} de {config.steps.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center">
            {config.steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                {index < config.steps.length - 1 && (
                  <div
                    className={`h-1 w-16 mx-2 ${
                      index < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {currentStepData.title}
          </h3>
          <p className="text-gray-600 mb-6">
            {currentStepData.description}
          </p>

          <div className="space-y-4">
            {currentStepData.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-danger-500 ml-1">*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="input"
                  >
                    <option value="">Selecione...</option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="input"
                    placeholder={`Digite ${field.label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
          
          <button
            onClick={handleNext}
            disabled={!isStepValid() || isConnecting}
            className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isConnecting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Conectando...
              </div>
            ) : currentStep === config.steps.length - 1 ? (
              'Conectar'
            ) : (
              'Próximo'
            )}
          </button>
        </div>
      </div>
    </motion.div>
  )
}













