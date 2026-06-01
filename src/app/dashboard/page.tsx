'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Download, Share2, Trash2, LogOut } from 'lucide-react'

export default function DashboardPage() {
  const userGenerations = [
    {
      id: 1,
      text: 'Welcome to Suraj Voice',
      voice: 'English Female Premium',
      duration: '00:05',
      createdAt: '2 hours ago',
    },
    {
      id: 2,
      text: 'This is an amazing text to speech service',
      voice: 'Hindi Male Premium',
      duration: '00:08',
      createdAt: '5 hours ago',
    },
    {
      id: 3,
      text: 'Suraj Voice makes voice generation easy',
      voice: 'English Male Premium',
      duration: '00:06',
      createdAt: '1 day ago',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="animate-slide-up">
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, <span className="gradient-text">Suraj</span>!
              </h1>
              <p className="text-white/60">Manage your voice generations and account</p>
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <LogOut size={20} />
              Logout
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Generations', value: '45', subtext: 'this month' },
              { label: 'Remaining', value: '55', subtext: 'from 100' },
              { label: 'Plan', value: 'Pro', subtext: 'renews in 18 days' },
              { label: 'Favorites', value: '12', subtext: 'saved voices' },
            ].map((stat, i) => (
              <div key={i} className="glass-dark p-6 rounded-xl">
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-white/40">{stat.subtext}</p>
              </div>
            ))}
          </div>

          {/* Recent Generations */}
          <div className="glass-dark p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Recent Generations</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Text</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Voice</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Duration</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Date</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userGenerations.map((gen) => (
                    <tr key={gen.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white truncate">{gen.text}</td>
                      <td className="py-4 px-4 text-white/80">{gen.voice}</td>
                      <td className="py-4 px-4 text-white/80">{gen.duration}</td>
                      <td className="py-4 px-4 text-white/60">{gen.createdAt}</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-accent-400 hover:text-accent-300">
                            <Download size={18} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-accent-400 hover:text-accent-300">
                            <Share2 size={18} />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-red-400 hover:text-red-300">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Account Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="glass-dark p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Account Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm mb-1">Email</p>
                  <p className="text-white font-medium">surajkadam@example.com</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Plan</p>
                  <p className="text-white font-medium">Pro Plan</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Member Since</p>
                  <p className="text-white font-medium">January 15, 2024</p>
                </div>
              </div>
            </div>

            <div className="glass-dark p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-secondary py-3 text-left">Change Password</button>
                <button className="w-full btn-secondary py-3 text-left">Upgrade Plan</button>
                <button className="w-full btn-secondary py-3 text-left">Download Data</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
