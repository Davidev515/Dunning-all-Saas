'use client'

import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'IA Inteligente',
    description: 'Analisa histórico e comportamento para escolher o melhor canal, horário e mensagem.',
    icon: CpuChipIcon,
  },
  {
    name: 'Integração Fácil',
    description: 'Conecta com Stripe, PagSeguro, Asaas em apenas 15 minutos.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Múltiplos Canais',
    description: 'WhatsApp, Email e SMS automatizados com templates personalizáveis.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'ROI Comprovado',
    description: 'ROI médio de 500% com recuperação instantânea de receita.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Analytics Avançado',
    description: 'Dashboard completo com métricas de recuperação e performance.',
    icon: ChartBarIcon,
  },
  {
    name: 'Tempo Real',
    description: 'Detecção instantânea de falhas de pagamento e ação imediata.',
    icon: ClockIcon,
  },
]

export function Features() {
  return (
    <div id="features" className="py-28 sm:py-36 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
              Recuperação Inteligente
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] text-gray-900 leading-[1.1]">
              Tudo que você precisa para{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                reduzir o churn
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-[1.7] text-gray-600 font-normal tracking-[-0.01em]">
              Plataforma de <strong className="text-gray-900">IA + automação multicanal</strong> para recuperar clientes antes do cancelamento por falha de pagamento.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-gray-500">
              <span className="rounded-full border border-gray-200 px-3 py-1">IA avançada</span>
              <span className="rounded-full border border-gray-200 px-3 py-1">WhatsApp • Email • SMS</span>
              <span className="rounded-full border border-gray-200 px-3 py-1">Integração em 15min</span>
              <span className="rounded-full border border-gray-200 px-3 py-1">LGPD Ready</span>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                role="article"
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/80 hover:border-blue-200/60 focus-within:ring-2 focus-within:ring-blue-500/40 h-full"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-5">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-md ring-2 ring-white group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 tracking-[-0.01em]">
                    {feature.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-[1.6] group-hover:text-gray-700 transition-colors duration-300 font-normal">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Enhanced Benefits Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-14 text-center shadow-2xl">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-pink-400/30 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm mb-6">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                  </span>
                  Diferenciais
                </div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Por que escolher o{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    DunningAI
                  </span>
                  ?
                </h3>
                <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
                  Plataforma única que combina <strong className="text-white">IA avançada</strong> e
                  <strong className="text-white"> automação multicanal</strong> para recuperar receita
                  automaticamente, com segurança e escala.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl mb-6 shadow-lg ring-4 ring-white/20 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl">⚡</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Setup em 15min</h4>
                  <p className="text-blue-100 text-lg">Integração automática com seus sistemas</p>
                  <div className="mt-4 text-sm text-blue-200">Sem configuração complexa</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl mb-6 shadow-lg ring-4 ring-white/20 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl">🛡️</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-pink-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Garantia Total</h4>
                  <p className="text-blue-100 text-lg">ROI de 300% ou devolvemos seu dinheiro</p>
                  <div className="mt-4 text-sm text-blue-200">Sem riscos para você</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl mb-6 shadow-lg ring-4 ring-white/20 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl">🚀</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Resultados Imediatos</h4>
                  <p className="text-blue-100 text-lg">Veja a diferença na primeira semana</p>
                  <div className="mt-4 text-sm text-blue-200">ROI instantâneo</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}




