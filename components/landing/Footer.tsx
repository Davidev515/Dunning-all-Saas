import Link from 'next/link'

const navigation = {
  product: [
    { name: 'Recursos', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Preços', href: '#pricing' },
    { name: 'API', href: '#' },
  ],
  company: [
    { name: 'Sobre', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'Contato', href: '#' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '#' },
    { name: 'Documentação', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Suporte', href: '#' },
  ],
  legal: [
    { name: 'Privacidade', href: '#' },
    { name: 'Termos', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Licenças', href: '#' },
  ],
}

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
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
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
            <div className="flex space-x-6" aria-label="Redes sociais">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6 text-white group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6 text-white group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6 text-white group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6 text-white group-hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-bold leading-6 text-white mb-6">Produto</h3>
                <ul className="space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-bold leading-6 text-white mb-6">Empresa</h3>
                <ul className="space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-bold leading-6 text-white mb-6">Suporte</h3>
                <ul className="space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-bold leading-6 text-white mb-6">Legal</h3>
                <ul className="space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm leading-5 text-gray-400">
              &copy; 2024 DunningAI. Todos os direitos reservados.
            </p>
            <div className="mt-4 sm:mt-0 flex items-center space-x-6">
              <span className="text-sm text-gray-400">Feito com ❤️ no Brasil</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">Sistema Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}




