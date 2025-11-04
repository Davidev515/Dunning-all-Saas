'use client'

import { useState } from 'react'
import { AutomationDashboard } from '@/components/automation/AutomationDashboard'
import { WhatsAppAutomation } from '@/components/automation/WhatsAppAutomation'
import { EmailAutomation } from '@/components/automation/EmailAutomation'
import { SMSAutomation } from '@/components/automation/SMSAutomation'
import { Header } from '@/components/dashboard/DashboardHeader'

export default function AutomationPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', component: AutomationDashboard },
    { id: 'whatsapp', name: 'WhatsApp', component: WhatsAppAutomation },
    { id: 'email', name: 'Email', component: EmailAutomation },
    { id: 'sms', name: 'SMS', component: SMSAutomation },
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || AutomationDashboard

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Automação de Cobrança</h1>
            <p className="mt-2 text-gray-600">
              Configure e monitore suas automações de recuperação de receita
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
