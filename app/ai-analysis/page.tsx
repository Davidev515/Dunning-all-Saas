'use client'

import { useState } from 'react'
import { AIInsights } from '@/components/ai/AIInsights'
import { CustomerBehavior } from '@/components/ai/CustomerBehavior'
import { OptimalTiming } from '@/components/ai/OptimalTiming'
import { MessageOptimization } from '@/components/ai/MessageOptimization'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'

export default function AIAnalysisPage() {
  const [activeTab, setActiveTab] = useState('insights')

  const tabs = [
    { id: 'insights', name: 'Insights da IA', component: AIInsights },
    { id: 'behavior', name: 'Comportamento', component: CustomerBehavior },
    { id: 'timing', name: 'Timing Otimizado', component: OptimalTiming },
    { id: 'messages', name: 'Otimização de Mensagens', component: MessageOptimization },
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || AIInsights

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Análise de IA</h1>
            <p className="mt-2 text-gray-600">
              Insights inteligentes para otimizar sua recuperação de receita
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <ActiveComponent />
        </div>
      </main>
    </div>
  )
}













