'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [time, setTime] = useState({ h: 5, m: 47, s: 33 })
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = 5; m = 59; s = 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])
  const pad = n => String(n).padStart(2, '0')
  return (
    <div className="flex gap-3 justify-center items-center">
      {[['घंटे', time.h], ['मिनट', time.m], ['सेकंड', time.s]].map(([label, val], i) => (
        <div key={i} className="text-center">
          <div className="bg-maroon-dark border border-gold/30 rounded-lg px-3 py-2 min-w-[60px]">
            <span className="stat-number text-gold text-2xl font-bold">{pad(val)}</span>
          </div>
          <div className="text-xs text-cream/60 mt-1 font-hindi">{label}</div>
        </div>
      ))}
    </div>
  )
}
