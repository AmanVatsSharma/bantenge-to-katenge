'use client'

import Link from 'next/link'

export default function PageLayout({ title, children }) {
  return (
    <main className="min-h-screen sacred-bg om-pattern py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold hover:text-saffron transition-colors mb-8 font-hindi"
        >
          ← वापस जाएं
        </Link>
        <div className="rounded-2xl p-8 md:p-12 border border-gold/20 bg-maroon/20">
          <h1 className="text-gold font-hindi text-2xl md:text-3xl font-bold mb-6">{title}</h1>
          {children}
        </div>
      </div>
    </main>
  )
}
