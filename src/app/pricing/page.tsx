'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for trying out',
      features: [
        '5 generations per month',
        'Basic voices',
        'MP3 download',
        '1,000 character limit',
        'Community support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '9.99',
      description: 'For regular users',
      features: [
        '100 generations per month',
        'All voices',
        'MP3 & MP4 download',
        '5,000 character limit',
        'Email support',
        'Priority queue',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Premium',
      price: '29.99',
      description: 'For power users',
      features: [
        'Unlimited generations',
        'All premium voices',
        'MP3 & MP4 download',
        '10,000 character limit',
        'Voice cloning',
        'Priority support',
        'API access',
        'Custom voices',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Simple <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose the perfect plan for your voice generation needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 transition-all ${
                  plan.popular
                    ? 'glass-dark ring-2 ring-accent-500 md:scale-105'
                    : 'glass-dark hover:bg-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-accent text-white px-3 py-1 rounded-full inline-block text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-white/60 ml-2">/month</span>
                </div>
                <Link href="/voice-studio">
                  <button
                    className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                      plan.popular ? 'btn-primary' : 'btn-secondary'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <Check size={18} className="text-accent-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="glass-dark p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-8 gradient-text">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Can I upgrade or downgrade my plan anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'Yes, all paid plans come with a 7-day free trial. No credit card required.',
                },
                {
                  q: 'What happens if I exceed my limit?',
                  a: 'Your generations will be queued or you can upgrade to a higher plan for more capacity.',
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-6 last:border-b-0">
                  <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                  <p className="text-white/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
