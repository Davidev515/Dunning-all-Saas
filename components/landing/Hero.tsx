'use client'

import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-slate-900"></div>

        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-blue-500/40 via-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-pink-500/40 to-transparent rounded-full blur-2xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/40 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-gradient-radial from-yellow-500/30 to-transparent rounded-full blur-xl animate-ping" style={{animationDuration: '8s'}}></div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative px-6 pt-36 pb-32 sm:pt-44 sm:pb-40 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center rounded-full border border-white/15 bg-white/8 backdrop-blur-xl px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white/90 shadow-md shadow-black/25"
            >
              <span className="relative flex h-3 w-3 sm:h-3.5 sm:w-3.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-green-500"></span>
              </span>
              <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent font-semibold">
                IA Ativa
              </span>
              <span className="mx-2 text-white/60">•</span>
              <span className="text-white/80 font-medium">Recuperando Receita Agora</span>
            </motion.div>

            {/* Enhanced Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-white leading-[1.05] font-sans"
            >
              <span className="block mb-2 text-white/95">Pronto para recuperar sua</span>
              <span className="block relative mb-2">
                <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(147,51,234,0.5)] font-black">
                  receita perdida?
                </span>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1, type: "spring" }}
                  className="absolute -top-3 -right-4 text-3xl sm:text-4xl"
                  aria-hidden="true"
                >
                  🚀
                </motion.div>
              </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-[1.8] text-gray-200/95 font-normal tracking-[-0.01em] px-4"
            >
              Comece hoje e veja a diferença em 30 dias.{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-semibold">
                Garantia de ROI ou seu dinheiro de volta.
              </span>
              <span className="block mt-3 text-sm sm:text-base text-gray-300/90 font-medium">
                Setup em 15min • Recupere até 48% do churn • Mais de 500 empresas confiam na plataforma
              </span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-12"
            >
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 rounded-2xl shadow-2xl shadow-blue-500/40 hover:shadow-3xl hover:shadow-blue-500/60 transition-all duration-500 hover:scale-[1.02] hover:from-blue-500 hover:via-blue-600 hover:to-purple-500 border border-white/20 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <span className="text-lg sm:text-xl" aria-hidden="true">🚀</span>
                  <span>Começar Gratuitamente</span>
                  <ArrowRightIcon className="ml-1 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-500" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              <a
                href="https://wa.me/5549991960333?text=Olá! Gostaria de saber mais sobre o DunningAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 text-base sm:text-lg font-bold text-white border-2 border-white/20 rounded-2xl backdrop-blur-xl bg-white/8 hover:bg-white/12 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-white/10 overflow-hidden"
              >
                <PlayIcon className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-125 transition-transform duration-500" aria-hidden="true" />
                <span className="relative z-10">Ver Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </motion.div>

            {/* Enhanced Microcopy under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/50 text-xs sm:text-sm mt-8 font-semibold tracking-wide flex items-center justify-center flex-wrap gap-3"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400/95" aria-hidden>★★★★★</span>
                <span className="text-white/90">4.9/5</span>
              </div>
              <span className="text-white/40" aria-hidden>•</span>
              <span className="text-white/70">Sem cartão de crédito</span>
              <span className="text-white/40" aria-hidden>•</span>
              <span className="text-white/70">Teste grátis por 14 dias</span>
            </motion.div>

            {/* Social Proof - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pt-16"
            >
              <div className="mx-auto max-w-5xl">
                <div className="text-white/50 text-[10px] sm:text-[11px] mb-6 font-bold tracking-[0.12em] uppercase letter-spacing-wider">
                  Confiado por mais de 500 empresas líderes
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
                  {['FitLife', 'CursoOnline', 'SaaS Analytics', 'PagoTech'].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05, opacity: 1 }}
                      className="text-white/60 hover:text-white/90 text-sm sm:text-base font-semibold tracking-[0.03em] transition-all duration-300 cursor-default"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Trust Badges - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="pt-10"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {[
                  { text: 'Setup em 15min', icon: '⚡' },
                  { text: 'Garantia 300% ROI', icon: '🛡️' },
                  { text: 'LGPD Ready', icon: '✓' },
                  { text: 'Suporte 24/7', icon: '💬' }
                ].map((badge, index) => (
                  <motion.span
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 sm:px-5 sm:py-2.5 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white/20 text-[10px] sm:text-[11px] text-white/70 hover:text-white/95 font-semibold tracking-[0.02em] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span className="text-xs sm:text-sm" aria-hidden="true">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-32 sm:pb-40"
      >
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              colorFrom: 'from-blue-400',
              colorTo: 'to-blue-500',
              gradientFrom: 'from-blue-500/20',
              gradientTo: 'to-cyan-500/20',
              value: '48%',
              label: 'Redução do Churn',
              hint: 'Comprovado cientificamente',
              emoji: '📉',
            },
            {
              colorFrom: 'from-cyan-400',
              colorTo: 'to-cyan-500',
              gradientFrom: 'from-cyan-500/20',
              gradientTo: 'to-purple-500/20',
              value: 'R$ 2.4M',
              label: 'Receita Recuperada',
              hint: 'Em clientes ativos',
              emoji: '💰',
            },
            {
              colorFrom: 'from-purple-400',
              colorTo: 'to-purple-500',
              gradientFrom: 'from-purple-500/20',
              gradientTo: 'to-pink-500/20',
              value: '15min',
              label: 'Tempo de Setup',
              hint: 'Integração automática',
              emoji: '⚡',
            },
            {
              colorFrom: 'from-pink-400',
              colorTo: 'to-pink-500',
              gradientFrom: 'from-pink-500/20',
              gradientTo: 'to-rose-500/20',
              value: '500%',
              label: 'ROI Médio',
              hint: 'Retorno garantido',
              emoji: '🚀',
            },
              ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 text-center transition-all duration-500"
              aria-label={kpi.label}
            >
              {/* Base Card Background - Radial Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 rounded-3xl"></div>

              {/* Radial Gradient Overlay - Subtle Center Light */}
              <div className="absolute inset-0 rounded-3xl opacity-60" style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
              }}></div>

              {/* Unified Color Gradient Overlay - Subtle */}
              <div className={`absolute inset-0 bg-gradient-to-br ${kpi.gradientFrom} ${kpi.gradientTo} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Border with Subtle Glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-500"></div>

              {/* Border Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${kpi.colorFrom} ${kpi.colorTo} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500 -z-10`}></div>

              {/* Enhanced Shadows */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-black/40 group-hover:shadow-3xl group-hover:shadow-purple-500/20 transition-all duration-500"></div>

              {/* Backdrop Blur Layer */}
              <div className="absolute inset-0 backdrop-blur-xl rounded-3xl"></div>

              <div className="relative z-10 w-full">
                {/* Harmonized Icon Container */}
                <div className="mb-5 sm:mb-6 flex justify-center">
                  <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 group-hover:border-white/30 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl overflow-hidden">
                    {/* Icon Background Gradient - Unified */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${kpi.colorFrom}/10 ${kpi.colorTo}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <span className="relative z-10 text-xl sm:text-2xl md:text-3xl filter drop-shadow-lg" aria-hidden>{kpi.emoji}</span>
                  </div>
                </div>

                {/* Harmonized Main Value - Professional Typography */}
                <div className="mb-4 sm:mb-5 px-3 sm:px-4 w-full min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold bg-gradient-to-br ${kpi.colorFrom} ${kpi.colorTo} bg-clip-text text-transparent tracking-[-0.015em] leading-[1.1]`} style={{
                    textShadow: '0 2px 30px rgba(0, 0, 0, 0.4)',
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.25))',
                    maxWidth: '100%',
                    overflow: 'visible',
                    wordSpacing: '0.05em'
                  }}>
                    {kpi.value}
                  </div>
                </div>

                {/* Harmonized Label */}
                <div className="mt-4 sm:mt-5 text-[10px] sm:text-xs md:text-sm font-bold text-white/95 uppercase tracking-[0.1em] mb-2 sm:mb-2.5 leading-tight px-1">
                  {kpi.label}
                </div>

                {/* Harmonized Hint */}
                <div className="text-[10px] sm:text-[11px] md:text-xs text-gray-300/75 font-medium tracking-[0.025em] leading-relaxed px-1">
                  {kpi.hint}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}



