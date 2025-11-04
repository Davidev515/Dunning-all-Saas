'use client'

import { useState, useEffect } from 'react'
import { DashboardHeader } from '@/components/dashboard/DashboardHeader'
import { StatsCards } from '@/components/dashboard/StatsCards'
import { RevenueChart } from '@/components/dashboard/RevenueChart'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { CampaignsList } from '@/components/dashboard/CampaignsList'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats Overview */}
          <StatsCards />
          
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Revenue Chart */}
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            
            {/* Quick Actions */}
            <div>
              <QuickActions />
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Recent Activity */}
            <RecentActivity />
            
            {/* Campaigns */}
            <CampaignsList />
          </div>
        </div>
      </main>
    </div>
  )
}













