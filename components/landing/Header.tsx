'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm shadow-black/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">DunningAI</span>
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">D</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">DunningAI</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
            Recursos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
            Como Funciona
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
            Preços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#testimonials" className="text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group">
            Depoimentos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/dashboard"
            className="group relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-[1.02] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span className="relative z-10">Entrar</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">&rarr;</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">DunningAI</span>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">DunningAI</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#features"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Recursos
                  </a>
                  <a
                    href="#how-it-works"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Como Funciona
                  </a>
                  <a
                    href="#pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Preços
                  </a>
                  <a
                    href="#testimonials"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Depoimentos
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    href="/dashboard"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Entrar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

