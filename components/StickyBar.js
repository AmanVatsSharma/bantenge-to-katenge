'use client'

import { useEffect, useState } from 'react'

export default function StickyBar({ onCTAClick }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 sticky-bar transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gold text-xl">ॐ</span>
          <span className="font-hindi text-saffron font-bold text-sm md:text-base">बंटेंगे तो कटेंगे</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gold text-xs hidden md:block line-through opacity-60">₹499</span>
          <span className="text-saffron font-bold">₹197</span>
          <button
            onClick={onCTAClick}
            className="bg-saffron hover:bg-saffron-light text-white text-sm font-bold px-4 py-2 rounded-full transition-all"
          >
            अभी खरीदें
          </button>
        </div>
      </div>
    </div>
  )
}
