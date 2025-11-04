export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 sm:pt-28 lg:px-8 lg:pt-36">
        <div className="space-y-8 max-w-2xl">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur opacity-75"></div>
            </div>
            <span className="text-2xl font-bold text-white">DunningAI</span>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 max-w-md font-medium">
            Recupere até{' '}
            <span className="text-blue-400 font-semibold">48% do churn</span>{' '}
            com nossa IA que automatiza cobrança e retenção de assinaturas.
          </p>
          <div className="mt-6 space-y-2 text-sm text-gray-300">
            <p><strong className="text-white">Email:</strong> <a href="mailto:daviwiliamdarosa@gmail.com" className="hover:text-blue-400 transition-colors">daviwiliamdarosa@gmail.com</a></p>
            <p><strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/5549991960333" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">+55 49 99196-0333</a></p>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm leading-5 text-gray-400">
              &copy; 2025 DunningAI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}




