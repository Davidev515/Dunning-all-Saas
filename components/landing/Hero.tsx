'use client'

import Link from 'next/link'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

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
              className="inline-flex items-center rounded-full border border-white/15 bg-white/8 backdrop-blur-xl px-5 py-2.5 text-[11px] font-semibold text-white/90 shadow-md shadow-black/25"
            >
              <span className="relative flex h-2.5 w-2.5 mr-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
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
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-[-0.03em] text-white leading-[1.06] font-sans"
            >
              <span className="block mb-1">Recupere até</span>
              <span className="block relative mb-1">
                <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(147,51,234,0.4)]">
                  48% do churn perdido
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-2 -right-2 text-2xl"
                >
                  🚀
                </motion.div>
              </span>
              <span className="block">automaticamente</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-[1.75] text-gray-200 font-normal tracking-[-0.015em] px-4"
            >
              Nossa IA identifica o melhor canal, horário e mensagem para cada cliente.
              <span className="block mt-2 text-sm sm:text-base text-gray-300/80">
                Setup em 15min • Garantia de ROI de 300% • Conformidade com a LGPD.
              </span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10"
            >
              <Link
                href="/dashboard"
                className="group relative inline-flex items-center justify-center px-9 py-4.5 sm:px-11 sm:py-5.5 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.01] hover:from-blue-500 hover:to-purple-500 border border-white/10"
              >
                <span className="relative z-10 flex items-center">
                  🚀 Começar Gratuitamente
                  <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </Link>
              
              <a 
                href="https://wa.me/5549991488073?text=Olá! Gostaria de saber mais sobre o DunningAI"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-9 py-4.5 sm:px-11 sm:py-5.5 text-base sm:text-lg font-semibold text-white border border-white/15 rounded-xl backdrop-blur-xl bg-white/5 hover:bg-white/8 hover:border-white/25 transition-all duration-300 hover:scale-[1.01] shadow-md shadow-black/15 hover:shadow-lg hover:shadow-white/5"
              >
                <PlayIcon className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
                <span className="relative z-10">Ver Demo</span>
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            {/* Microcopy under CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/45 text-xs sm:text-sm mt-7 font-medium tracking-wide flex items-center justify-center flex-wrap gap-2"
            >
              <span className="mr-1 text-yellow-400/90" aria-hidden>★★★★★</span>
              <span className="mr-1.5">Avaliação média 4,9/5</span>
              <span className="text-white/30">•</span>
              <span>Sem cartão de crédito</span>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pt-12"
            >
              <div className="mx-auto max-w-5xl">
                <div className="text-white/40 text-[10px] sm:text-xs mb-5 font-semibold tracking-[0.08em] uppercase">Confiado por 500+ empresas</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-items-center text-white/35">
                  <span className="text-sm sm:text-base font-medium tracking-[0.02em]">FitLife</span>
                  <span className="text-sm sm:text-base font-medium tracking-[0.02em]">CursoOnline</span>
                  <span className="text-sm sm:text-base font-medium tracking-[0.02em]">SaaS Analytics</span>
                  <span className="text-sm sm:text-base font-medium tracking-[0.02em]">PagoTech</span>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-[11px] text-white/45 font-medium">
                <span className="rounded-full border border-white/8 px-3.5 py-1.5 backdrop-blur-sm bg-white/4 hover:bg-white/6 transition-colors duration-200">Setup em 15min</span>
                <span className="rounded-full border border-white/8 px-3.5 py-1.5 backdrop-blur-sm bg-white/4 hover:bg-white/6 transition-colors duration-200">Garantia 300% ROI</span>
                <span className="rounded-full border border-white/8 px-3.5 py-1.5 backdrop-blur-sm bg-white/4 hover:bg-white/6 transition-colors duration-200">LGPD Ready</span>
                <span className="rounded-full border border-white/8 px-3.5 py-1.5 backdrop-blur-sm bg-white/4 hover:bg-white/6 transition-colors duration-200">Suporte 24/7</span>
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
        className="mx-auto max-w-7xl px-6 lg:px-8 pb-28 sm:pb-32"
      >
        <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              colorFrom: 'from-blue-400',
              colorTo: 'to-cyan-400',
              value: '48%',
              label: 'Redução do Churn',
              hint: 'Comprovado cientificamente',
              emoji: '📉',
            },
            {
              colorFrom: 'from-green-400',
              colorTo: 'to-emerald-400',
              value: 'R$ 2.4M',
              label: 'Receita Recuperada',
              hint: 'Em clientes ativos',
              emoji: '💰',
            },
            {
              colorFrom: 'from-yellow-400',
              colorTo: 'to-orange-400',
              value: '15min',
              label: 'Tempo de Setup',
              hint: 'Integração automática',
              emoji: '⚡',
            },
            {
              colorFrom: 'from-pink-400',
              colorTo: 'to-rose-400',
              value: '500%',
              label: 'ROI Médio',
              hint: 'Retorno garantido',
              emoji: '🚀',
            },
              ].map((kpi, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.015, y: -4 }}
              className="group relative bg-gradient-to-br from-slate-800/60 via-purple-900/40 to-slate-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-7 sm:p-8 text-center hover:border-white/10 hover:from-slate-800/70 hover:via-purple-900/50 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
              aria-label={kpi.label}
            >
              {/* Gradient overlay based on KPI color */}
              <div className={`absolute inset-0 bg-gradient-to-br ${kpi.colorFrom}/10 ${kpi.colorTo}/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                    <span className="text-2xl" aria-hidden>{kpi.emoji}</span>
                  </div>
                </div>
                
                {/* Main Value */}
                <div className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r ${kpi.colorFrom.replace('from','from')} ${kpi.colorTo.replace('to','to')} bg-clip-text text-transparent tracking-[-0.04em] mb-1`}>
                  {kpi.value}
                </div>
                
                {/* Label */}
                <div className="mt-3 text-xs sm:text-sm font-bold text-white/95 uppercase tracking-[0.08em] mb-1.5">
                  {kpi.label}
                </div>
                
                {/* Hint */}
                <div className="text-[11px] sm:text-xs text-gray-400/75 font-medium tracking-wide">
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



