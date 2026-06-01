'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, Zap, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold">
              About <span className="gradient-text">Suraj Voice</span>
            </h1>
            <p className="text-xl text-white/70">
              Revolutionizing text-to-speech with AI-powered natural voices
            </p>
          </div>

          {/* Story */}
          <div className="glass-dark p-8 rounded-xl mb-12 space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-white/80 leading-relaxed">
              Suraj Voice was created with a vision to make professional voice generation accessible to everyone. We believe that natural-sounding AI voices shouldn't be expensive or complicated to use.
            </p>
            <p className="text-white/80 leading-relaxed">
              Our mission is to provide ultra-realistic voice synthesis that sounds like real human voice actors, empowering creators, businesses, and individuals to produce high-quality audio content effortlessly.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Zap, title: 'Innovation', desc: 'Cutting-edge AI technology' },
              { icon: Users, title: 'Accessible', desc: 'For everyone, everywhere' },
              { icon: Heart, title: 'Quality', desc: 'Premium voice quality' },
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="glass-dark p-6 rounded-xl text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent-400" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-white/60">{value.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Team */}
          <div className="glass-dark p-8 rounded-xl space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Team</h2>
            <p className="text-white/80">
              Built by passionate developers and AI enthusiasts dedicated to creating the best text-to-speech experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="font-semibold text-white">Suraj Kadam</p>
                <p className="text-white/60 text-sm">Founder & Developer</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="font-semibold text-white">AI Engineering Team</p>
                <p className="text-white/60 text-sm">Voice Synthesis Experts</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
