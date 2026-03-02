'use client'

export default function BenefitItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-saffron/5 transition-colors">
      <div className="text-3xl flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-gold font-hindi font-bold text-lg mb-1">{title}</h3>
        <p className="text-cream/70 font-hindi text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
