'use client'

import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2.5 text-sm font-bold text-blue-700 shadow-sm border border-blue-100/50"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Recuperação Inteligente
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.03em] text-gray-900 leading-[1.08]">
              Tudo que você precisa para{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                reduzir o churn
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-[1.75] text-gray-600 font-normal tracking-[-0.01em] mt-6">
              Plataforma de <strong className="text-gray-900 font-semibold">IA + automação multicanal</strong> para recuperar clientes antes do cancelamento por falha de pagamento.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs sm:text-sm">
              {[
                'IA avançada',
                'WhatsApp • Email • SMS',
                'Integração em 15min',
                'LGPD Ready'
              ].map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-full border border-gray-200/80 bg-white/60 backdrop-blur-sm px-4 py-1.5 text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  {badge}
                </motion.span>
              ))}
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -6 }}
                role="article"
                className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200/80 focus-within:ring-2 focus-within:ring-blue-500/30 h-full overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.05) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}></div>

                {/* Icon Container - Enhanced */}
                <div className="relative z-10 mb-6">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl shadow-xl ring-4 ring-blue-50 group-hover:ring-blue-100 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 overflow-hidden">
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <feature.icon className="relative z-10 h-8 w-8 sm:h-9 sm:w-9 text-white drop-shadow-lg" aria-hidden="true" />
                  </div>
                </div>

                {/* Content - Enhanced */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500 tracking-[-0.02em] leading-tight">
                    {feature.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-[1.7] group-hover:text-gray-700 transition-colors duration-500 font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125 shadow-lg"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150 shadow-md"></div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          className="mt-28 sm:mt-32"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-[2.5rem] p-10 sm:p-12 lg:p-16 text-center shadow-2xl border border-white/10">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"></div>

            {/* Animated Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-white/25 to-transparent rounded-full blur-3xl animate-pulse" style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)'
            }}></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-pink-400/40 to-transparent rounded-full blur-2xl animate-pulse" style={{
              animationDuration: '4s',
              background: 'radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)'
            }}></div>
            <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-radial from-blue-400/30 to-transparent rounded-full blur-2xl animate-pulse" style={{
              animationDuration: '6s',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
            }}></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 sm:mb-14"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-md px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-white shadow-lg border border-white/30 mb-8"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400 shadow-lg"></span>
                  </span>
                  <span className="tracking-wide">Diferenciais</span>
                </motion.div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.1] tracking-[-0.03em]">
                  Por que escolher o{' '}
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                    DunningAI
                  </span>
                  ?
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-blue-50/90 max-w-3xl mx-auto leading-relaxed font-medium">
                  Plataforma única que combina <strong className="text-white font-bold">IA avançada</strong> e{' '}
                  <strong className="text-white font-bold">automação multicanal</strong> para recuperar receita
                  automaticamente, com segurança e escala.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-16 sm:mt-20">
                {[
                  {
                    icon: '⚡',
                    title: 'Setup em 15min',
                    description: 'Integração automática com seus sistemas',
                    subtitle: 'Sem configuração complexa',
                    gradientFrom: 'from-yellow-400',
                    gradientTo: 'to-orange-500',
                    glowFrom: 'from-yellow-300',
                    glowTo: 'to-orange-400',
                    delay: 0.8
                  },
                  {
                    icon: '🛡️',
                    title: 'Garantia Total',
                    description: 'ROI de 300% ou devolvemos seu dinheiro',
                    subtitle: 'Sem riscos para você',
                    gradientFrom: 'from-red-400',
                    gradientTo: 'to-pink-500',
                    glowFrom: 'from-red-300',
                    glowTo: 'to-pink-400',
                    delay: 1.0
                  },
                  {
                    icon: '🚀',
                    title: 'Resultados Imediatos',
                    description: 'Veja a diferença na primeira semana',
                    subtitle: 'ROI instantâneo',
                    gradientFrom: 'from-blue-400',
                    gradientTo: 'to-cyan-500',
                    glowFrom: 'from-blue-300',
                    glowTo: 'to-cyan-400',
                    delay: 1.2
                  }
                ].map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: benefit.delay }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group relative text-center"
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/20"></div>

                    {/* Icon Container - Enhanced */}
                    <div className={`relative inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo} rounded-3xl mb-6 sm:mb-8 shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 overflow-hidden`}>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.glowFrom} ${benefit.glowTo} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative z-10 text-4xl sm:text-5xl filter drop-shadow-2xl">{benefit.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight tracking-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-blue-50/95 text-lg sm:text-xl mb-3 font-medium leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="text-sm sm:text-base text-blue-100/80 font-medium">
                        {benefit.subtitle}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150 shadow-lg`}></div>
                    <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-br ${benefit.gradientFrom} ${benefit.gradientTo} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-200 shadow-md`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}




