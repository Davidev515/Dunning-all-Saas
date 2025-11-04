'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon, ClockIcon, PlusIcon } from '@heroicons/react/24/outline'

interface Integration {
  id: string
  name: string
  description: string
  logo: string
  status: 'connected' | 'not_connected'
  features: string[]
  setupTime: string
}

interface IntegrationCardProps {
  integration: Integration
  onConnect: () => void
}

export function IntegrationCard({ integration, onConnect }: IntegrationCardProps) {
  const isConnected = integration.status === 'connected'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={integration.logo}
            alt={integration.name}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {integration.name}
            </h3>
            <p className="text-sm text-gray-500">{integration.description}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {isConnected ? (
            <div className="flex items-center text-success-600">
              <CheckCircleIcon className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Conectado</span>
            </div>
          ) : (
            <div className="flex items-center text-gray-500">
              <ClockIcon className="h-5 w-5 mr-1" />
              <span className="text-sm">Não conectado</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>Setup em {integration.setupTime}</span>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Recursos:</h4>
          <div className="flex flex-wrap gap-2">
            {integration.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {isConnected ? (
          <div className="flex space-x-3">
            <button className="flex-1 btn btn-secondary text-sm">
              Configurar
            </button>
            <button className="flex-1 btn btn-danger text-sm">
              Desconectar
            </button>
          </div>
        ) : (
          <button
            onClick={onConnect}
            className="w-full btn btn-primary text-sm"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Conectar
          </button>
        )}
      </div>
    </motion.div>
  )
}













