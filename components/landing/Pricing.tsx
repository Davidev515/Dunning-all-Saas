'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    href: '/dashboard',
    priceMonthly: 'R$ 97',
    description: 'Perfeito para pequenos negócios',
    features: [
      'Até 1.000 assinaturas',
      'Integração com 1 gateway',
      'WhatsApp + Email',
      'Dashboard básico',
      'Suporte por email',
      'Setup em 15 minutos',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    href: '/dashboard',
    priceMonthly: 'R$ 297',
    description: 'Ideal para empresas em crescimento',
    features: [
      'Até 10.000 assinaturas',
      'Integração com 3 gateways',
      'WhatsApp + Email + SMS',
      'IA avançada',
      'Dashboard completo',
      'Suporte prioritário',
      'Relatórios personalizados',
      'Webhooks',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    href: '/dashboard',
    priceMonthly: 'R$ 997',
    description: 'Para grandes empresas',
    features: [
      'Assinaturas ilimitadas',
      'Todos os gateways',
      'Todos os canais',
      'IA personalizada',
      'Dashboard customizado',
      'Suporte dedicado',
      'API completa',
      'Integração customizada',
      'SLA garantido',
    ],
    mostPopular: false,
  },
]

export function Pricing() {
  return (
    <div id="pricing" className="py-28 sm:py-36 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              💰 Preços Transparentes
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Escolha o plano{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ideal
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl leading-[1.7] text-gray-600 font-normal tracking-[-0.01em]">
              Comece grátis e pague apenas quando começar a recuperar receita.
              Garantia de ROI ou seu dinheiro de volta.
            </p>
          </motion.div>
        </div>
        
        <div className="isolate mx-auto mt-20 grid max-w-md grid-cols-1 gap-8 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -6 }}
              className={`relative rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                tier.mostPopular
                  ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white ring-2 ring-blue-400/50 scale-105 shadow-xl shadow-blue-500/20'
                  : 'bg-white ring-1 ring-gray-200/80 hover:ring-blue-300/60 hover:shadow-lg'
              }`}
            >
              {/* Enhanced Background Effects for Popular Plan */}
              {tier.mostPopular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-gradient-radial from-white/20 to-transparent rounded-full blur-2xl"></div>
                </>
              )}
              
              {tier.mostPopular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg"
                  >
                    ⭐ Mais Popular
                  </motion.div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-x-4 mb-6">
                  <h3 className={`text-3xl font-bold leading-8 ${
                    tier.mostPopular ? 'text-white' : 'text-gray-900'
                  }`}>
                  {tier.name}
                </h3>
                  {tier.mostPopular && (
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  )}
              </div>
              
                <p className={`text-lg leading-6 mb-8 ${
                  tier.mostPopular ? 'text-blue-100' : 'text-gray-600'
                }`}>
                {tier.description}
              </p>
              
                <div className="mb-8">
                  <div className="flex items-baseline gap-x-2">
                    <span className={`text-6xl font-bold tracking-tight ${
                      tier.mostPopular ? 'text-white' : 'text-gray-900'
                    }`}>
                  {tier.priceMonthly}
                </span>
                    <span className={`text-lg font-semibold leading-6 ${
                      tier.mostPopular ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                  /mês
                </span>
                  </div>
                  {tier.mostPopular && (
                    <div className="mt-2 text-blue-200 text-sm">
                      Economize R$ 1.200/ano vs. planos individuais
                    </div>
                  )}
                </div>
              
              <Link
                href={tier.href}
                  className={`group relative block w-full rounded-2xl px-8 py-5 text-center text-lg font-bold transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                      ? 'bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl border-2 border-white/20'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {tier.mostPopular ? '🚀 Começar Agora' : 'Começar Agora'}
                    {tier.mostPopular && <span className="ml-2">→</span>}
                  </span>
                  {!tier.mostPopular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  )}
              </Link>
              <div className={`mt-3 text-xs ${tier.mostPopular ? 'text-blue-100' : 'text-gray-500'}`}>
                Sem cartão de crédito • Cancele quando quiser
              </div>
              </div>
              
              <ul className={`mt-8 space-y-5 text-base leading-6 ${
                tier.mostPopular ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {tier.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-x-4 items-start group"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      tier.mostPopular ? 'bg-green-400' : 'bg-green-500'
                    } group-hover:scale-110 transition-transform duration-200`}>
                      <CheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold group-hover:text-blue-600 transition-colors duration-200">
                    {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-white/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-yellow-400/40 to-transparent rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-gradient-radial from-pink-400/30 to-transparent rounded-full blur-xl animate-ping" style={{animationDuration: '4s'}}></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center rounded-full bg-white/25 px-8 py-4 text-sm font-bold text-white backdrop-blur-md mb-8 shadow-lg"
                >
                  <span className="relative flex h-3 w-3 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                  </span>
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold">
                    🛡️ Garantia Total
                  </span>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold text-white mb-6"
                >
                  Garantia de ROI de{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    300%
                  </span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed"
                >
                  Se não recuperarmos pelo menos{' '}
                  <strong className="text-yellow-300 bg-yellow-300/20 px-2 py-1 rounded-lg">
                    3x o valor investido
                  </strong>{' '}
                  em 30 dias, devolvemos{' '}
                  <strong className="text-yellow-300 bg-yellow-300/20 px-2 py-1 rounded-lg">
                    100% do seu dinheiro
                  </strong>{' '}
                  sem perguntas.
                </motion.p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl mb-6 shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500 group-hover:scale-110">
                    <CheckIcon className="h-10 w-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">Sem compromisso</h4>
                  <p className="text-green-100 text-lg group-hover:text-green-200 transition-colors duration-300">Cancele a qualquer momento</p>
                  <div className="mt-3 text-green-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sem taxas ocultas</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl mb-6 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110">
                    <CheckIcon className="h-10 w-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Cancele quando quiser</h4>
                  <p className="text-blue-100 text-lg group-hover:text-blue-200 transition-colors duration-300">Sem taxas de cancelamento</p>
                  <div className="mt-3 text-blue-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Processo instantâneo</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl mb-6 shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                    <CheckIcon className="h-10 w-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">Suporte 24/7</h4>
                  <p className="text-purple-100 text-lg group-hover:text-purple-200 transition-colors duration-300">Especialistas sempre disponíveis</p>
                  <div className="mt-3 text-purple-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Resposta em minutos</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}




