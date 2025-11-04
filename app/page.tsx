import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Pricing } from '@/components/landing/Pricing'
import { Testimonials } from '@/components/landing/Testimonials'
import { CTA } from '@/components/landing/CTA'
import { Header } from '@/components/landing/Header'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

