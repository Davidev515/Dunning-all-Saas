'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'

export function CTA() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/40 via-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-pink-500/40 to-transparent rounded-full blur-2xl animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/30 to-transparent rounded-full blur-xl animate-ping" style={{animationDuration: '6s'}}></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:80px_80px] animate-pulse"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full blur-sm animate-ping" style={{animationDuration: '5s'}}></div>
      </div>

      <div className="relative px-6 py-28 sm:px-6 sm:py-36 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              🚀 Comece Agora
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-white leading-[1.08]">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                recuperar sua receita?
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-2xl leading-[1.7] text-gray-200 font-normal tracking-[-0.01em]"
            >
              Comece hoje e veja a diferença em 30 dias.{' '}
              <span className="text-yellow-300 font-semibold">
                Garantia de ROI ou seu dinheiro de volta.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
            >
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl font-semibold text-slate-900 bg-white rounded-xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-white/15 transition-all duration-300 hover:scale-[1.02] border border-white/10"
              >
                <span className="relative z-10 flex items-center">
                  Começar Gratuitamente
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <a
                href="https://wa.me/5549991960333?text=Olá! Gostaria de falar com um especialista sobre o DunningAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl font-semibold text-white border border-white/20 rounded-xl backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:border-white/30 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-white/10"
              >
                <span className="relative z-10 flex items-center">
                  💬 Falar com Especialista
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </motion.div>

            {/* Microcopy under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-sm text-white/70"
            >
              Sem cartão de crédito • Cancelar quando quiser
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <CheckIcon className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors duration-300">Setup em 15min</div>
                <div className="text-blue-200 text-lg group-hover:text-blue-100 transition-colors duration-300">Integração automática</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <CheckIcon className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-white font-bold text-xl mb-2 group-hover:text-green-300 transition-colors duration-300">Garantia de ROI</div>
                <div className="text-green-200 text-lg group-hover:text-green-100 transition-colors duration-300">3x o investimento ou devolvemos</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <CheckIcon className="h-8 w-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">Suporte 24/7</div>
                <div className="text-purple-200 text-lg group-hover:text-purple-100 transition-colors duration-300">Especialistas sempre disponíveis</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}



