import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DunningAI - Agente de Cobrança e Retenção de Assinaturas',
  description: 'Recupere até 48% do churn com nossa IA que automatiza cobrança e retenção de assinaturas',
  keywords: 'dunning, cobrança, retenção, assinaturas, SaaS, churn, pagamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}

