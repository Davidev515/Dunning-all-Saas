'use client'

import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

const activities = [
  {
    id: 1,
    type: 'success',
    title: 'Pagamento recuperado',
    description: 'João Silva atualizou o cartão e pagou R$ 97,00',
    time: '2 minutos atrás',
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    type: 'warning',
    title: 'Falha de pagamento detectada',
    description: 'Maria Santos - cartão expirado, enviando WhatsApp',
    time: '15 minutos atrás',
    icon: ExclamationTriangleIcon,
  },
  {
    id: 3,
    type: 'info',
    title: 'Campanha enviada',
    description: 'Email de cobrança enviado para 23 clientes',
    time: '1 hora atrás',
    icon: ClockIcon,
  },
  {
    id: 4,
    type: 'success',
    title: 'Receita recuperada',
    description: 'Ana Costa pagou R$ 297,00 após SMS personalizado',
    time: '2 horas atrás',
    icon: CurrencyDollarIcon,
  },
  {
    id: 5,
    type: 'warning',
    title: 'Tentativa de cobrança',
    description: 'Carlos Oliveira - 2ª tentativa de cobrança via WhatsApp',
    time: '3 horas atrás',
    icon: ExclamationTriangleIcon,
  },
]

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

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Atividade Recente
        </h3>
        <p className="text-sm text-gray-500">
          Últimas ações do sistema de recuperação
        </p>
      </div>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, index) => (
            <motion.li
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative pb-8">
                {index !== activities.length - 1 && (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${getActivityColor(
                        activity.type
                      )}`}
                    >
                      <activity.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                      {activity.time}
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6">
        <button className="w-full text-center text-sm font-medium text-primary-600 hover:text-primary-500">
          Ver todas as atividades
        </button>
      </div>
    </motion.div>
  )
}













