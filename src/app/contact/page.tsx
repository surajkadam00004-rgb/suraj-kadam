'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-white/70">
              Have questions? We'd love to hear from you. Send us a message!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, title: 'Email', value: 'support@surajvoice.com' },
              { icon: Phone, title: 'Phone', value: '+91 XXX XXX XXXX' },
              { icon: MapPin, title: 'Location', value: 'India' },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <div key={i} className="glass-dark p-6 rounded-xl text-center">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-accent-400" />
                  <p className="text-white/60 text-sm mb-2">{contact.title}</p>
                  <p className="text-white font-semibold">{contact.value}</p>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="glass-dark p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-accent-500 resize-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-3 font-semibold flex items-center justify-center gap-2"
              >
                {isLoading ? 'Sending...' : <>Send Message <Send size={20} /></>}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
