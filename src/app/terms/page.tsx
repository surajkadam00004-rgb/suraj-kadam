'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms & Conditions</h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">1. Terms</h2>
              <p>
                By accessing the Suraj Voice website and using our service, you accept these terms and conditions in full.
                If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">2. License to Use Website</h2>
              <p>
                Unless otherwise stated, Suraj Voice and/or its licensors own the intellectual property rights for all
                material on the website. All intellectual property rights are reserved. You may view and print pages from
                the website for personal use, subject to restrictions set in these terms and conditions.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p>You must not:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white/70">
                <li>Republish material from this website without proper attribution</li>
                <li>Sell, rent, or sub-license material from this website</li>
                <li>Reproduce, duplicate, or copy material for commercial purposes</li>
                <li>Redistribute content unless content is specifically made for redistribution</li>
              </ul>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>
                The information on this website is provided on an "as is" basis. Suraj Voice makes no representations or
                warranties in relation to this website or the information and materials provided. Suraj Voice will not be
                liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for
                any indirect, special, or consequential loss, or for any business losses, loss of revenue, income, profits,
                or anticipated savings.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">5. Modifications to Terms</h2>
              <p>
                Suraj Voice may revise these terms for its website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these terms.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you
                irrevocably submit to the exclusive jurisdiction of the courts located there.
              </p>
            </section>

            <section className="glass-dark p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
              <p className="mt-4 text-accent-400">support@surajvoice.com</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
