'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    body: 'Recuperamos R$ 180.000 em receita perdida no primeiro mês. O ROI foi de 600%. A DunningAI se pagou em 2 semanas.',
    author: {
      name: 'Carlos Silva',
      handle: 'CEO, Academia FitLife',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Reduzimos o churn de 12% para 6% em 3 meses. A automação é perfeita e a IA escolhe sempre o melhor momento para cobrar.',
    author: {
      name: 'Ana Costa',
      handle: 'Diretora, CursoOnline Pro',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Setup em 15 minutos e funcionando perfeitamente. Recuperamos 40% dos cancelamentos por falha no pagamento. Incrível!',
    author: {
      name: 'Roberto Santos',
      handle: 'CTO, SaaS Analytics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-28 sm:py-36">
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
              💬 Depoimentos
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.02em] text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Resultados reais de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                clientes reais
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl leading-[1.7] text-gray-600 font-normal tracking-[-0.01em]">
              Veja como empresas como a sua estão recuperando milhões em receita perdida.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100/80 hover:border-blue-200/60">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quote Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                      <span className="text-2xl">💬</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <blockquote className="text-gray-900 text-lg leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300">
                      <p>"{testimonial.body}"</p>
                    </blockquote>
                    
                    <figcaption className="flex items-center gap-x-4 mb-6">
                      <div className="relative">
                        <img
                          className="h-12 w-12 rounded-full ring-4 ring-white shadow-lg group-hover:ring-blue-200 transition-all duration-300"
                          src={testimonial.author.image}
                          alt=""
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                          {testimonial.author.name}
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                            verificado
                          </span>
                        </div>
                        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {testimonial.author.handle}
                        </div>
                      </div>
                    </figcaption>
                    
                    <div className="flex items-center gap-x-1">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <motion.div
                          key={rating}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + rating * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <StarIcon
                            className="h-5 w-5 text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300"
                            aria-hidden="true"
                          />
                        </motion.div>
                      ))}
                      <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        5.0
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-yellow-400/30 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm mb-6">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
                  </span>
                  🏆 Resultados Comprovados
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  Junte-se a mais de{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    500 empresas
                  </span>
                </h3>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Que já recuperaram milhões em receita perdida com nossa plataforma.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
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
                  transition={{ duration: 0.6, delay: 1.2 }}
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
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl">⚡</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">15min</div>
                  <div className="text-purple-100 text-sm md:text-base font-semibold uppercase tracking-wide">Tempo de Setup</div>
                  <div className="text-purple-200 text-xs md:text-sm mt-2">Configuração instantânea</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}




