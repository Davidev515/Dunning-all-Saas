'use client'

import { motion } from 'framer-motion'
import {
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Receita Recuperada',
    value: 'R$ 24.580',
    change: '+12.5%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
    description: 'vs mês anterior',
  },
  {
    name: 'Taxa de Recuperação',
    value: '48.2%',
    change: '+5.3%',
    changeType: 'positive',
    icon: ChartBarIcon,
    description: 'clientes recuperados',
  },
  {
    name: 'Churn Reduzido',
    value: '6.8%',
    change: '-2.1%',
    changeType: 'positive',
    icon: ArrowDownIcon,
    description: 'vs mês anterior',
  },
  {
    name: 'Clientes Ativos',
    value: '1,247',
    change: '+8.2%',
    changeType: 'positive',
    icon: UserGroupIcon,
    description: 'assinaturas ativas',
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon
                className="h-8 w-8 text-primary-600"
                aria-hidden="true"
              />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpIcon
                        className="h-4 w-4 flex-shrink-0 self-center text-success-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDownIcon
                        className="h-4 w-4 flex-shrink-0 self-center text-danger-500"
                        aria-hidden="true"
                      />
                    )}
                    <span
                      className={
                        stat.changeType === 'positive'
                          ? 'text-success-500'
                          : 'text-danger-500'
                      }
                    >
                      {stat.change}
                    </span>
                  </div>
                </dd>
                <dd className="text-xs text-gray-500">{stat.description}</dd>
              </dl>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}













