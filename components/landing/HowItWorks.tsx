'use client'

import { motion } from 'framer-motion'
import {
  LinkIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    id: 1,
    name: 'Integração',
    description: 'Conecte seu gateway de pagamento (Stripe, PagSeguro, Asaas) em minutos.',
    icon: LinkIcon,
    color: 'bg-primary-600',
  },
  {
    id: 2,
    name: 'IA Analisa',
    description: 'Nossa IA analisa o histórico e comportamento de cada cliente automaticamente.',
    icon: CpuChipIcon,
    color: 'bg-success-600',
  },
  {
    id: 3,
    name: 'Automação',
    description: 'Sistema envia mensagens personalizadas via WhatsApp, Email ou SMS no momento ideal.',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-warning-600',
  },
  {
    id: 4,
    name: 'Resultados',
    description: 'Acompanhe a recuperação de receita em tempo real com métricas detalhadas.',
    icon: ChartBarIcon,
    color: 'bg-danger-600',
  },
]

export function HowItWorks() {
  return (
    <div id="how-it-works" className="py-28 sm:py-36 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              ⚙️ Como Funciona
            </div>
            <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Em{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                4 passos simples
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-[1.7] text-gray-600 font-normal tracking-[-0.01em]">
              Configure uma vez e deixe nossa IA trabalhar 24/7 para recuperar seus clientes.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/80 hover:border-blue-200/60 ring-0 focus-within:ring-2 focus-within:ring-blue-500/40 h-full">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.id}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6 flex justify-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${
                      step.id === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      step.id === 2 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                      step.id === 3 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      'bg-gradient-to-br from-red-500 to-red-600'
                    }`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {step.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 translate-x-4 rounded-full">
                    <div className="absolute right-0 top-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-y-1 shadow-lg"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-radial from-white/20 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                </span>
                Resultado: ROI Instantâneo
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-8">
                Veja os{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  resultados
                </span>{' '}
                em tempo real
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl">📈</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">48%</div>
                  <div className="text-green-100 text-sm md:text-base font-semibold uppercase tracking-wide">Redução do Churn</div>
                  <div className="text-green-200 text-xs md:text-sm mt-2">Comprovado cientificamente</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl">💰</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">R$ 2.4M</div>
                  <div className="text-blue-100 text-sm md:text-base font-semibold uppercase tracking-wide">Receita Recuperada</div>
                  <div className="text-blue-200 text-xs md:text-sm mt-2">Em clientes ativos</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl">🚀</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-red-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">500%</div>
                  <div className="text-orange-100 text-sm md:text-base font-semibold uppercase tracking-wide">ROI Médio</div>
                  <div className="text-orange-200 text-xs md:text-sm mt-2">Retorno garantido</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Começar em 15min
            </a>
            <a
              href="https://wa.me/5549991488073?text=Olá! Gostaria de ver uma demonstração do DunningAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50"
            >
              Falar com especialista
            </a>
          </div>
          <div className="mt-3 text-sm text-gray-500">Sem desenvolvedor necessário • Integração guiada</div>
        </motion.div>
      </div>
    </div>
  )
}




