'use client'

import { motion } from 'framer-motion'
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

const data = [
  { month: 'Jan', recovered: 12000, lost: 8000 },
  { month: 'Fev', recovered: 15000, lost: 6000 },
  { month: 'Mar', recovered: 18000, lost: 5000 },
  { month: 'Abr', recovered: 22000, lost: 4000 },
  { month: 'Mai', recovered: 24580, lost: 3200 },
  { month: 'Jun', recovered: 28000, lost: 2800 },
]

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Receita Recuperada vs Perdida
        </h3>
        <p className="text-sm text-gray-500">
          Comparação mensal da eficácia da recuperação
        </p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: '#6B7280' }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickLine={{ stroke: '#6B7280' }}
              tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value, name) => [
                `R$ ${value.toLocaleString()}`,
                name === 'recovered' ? 'Recuperada' : 'Perdida'
              ]}
              labelFormatter={(label) => `Mês: ${label}`}
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="recovered"
              stackId="1"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="lost"
              stackId="2"
              stroke="#EF4444"
              fill="#EF4444"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-success-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Receita Recuperada</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-danger-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Receita Perdida</span>
        </div>
      </div>
    </motion.div>
  )
}













