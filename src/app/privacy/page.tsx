'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Suraj Voice ("we," "us," "our," or "Company") operates the Suraj Voice website and application.
                This page informs you of our policies regarding the collection, use, and disclosure of personal data
                when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white/70">
                <li>Personal Data: Name, email address, usage data</li>
                <li>Cookies and Tracking Data: To enhance user experience</li>
                <li>Voice Data: Text you provide for voice generation</li>
              </ul>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
              <p>Suraj Voice uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white/70">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
              </ul>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
                protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-4 text-accent-400">support@surajvoice.com</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
