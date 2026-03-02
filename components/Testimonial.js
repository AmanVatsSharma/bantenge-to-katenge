'use client'

export default function Testimonial({ name, city, text, stars = 5 }) {
  return (
    <div className="testimonial-card rounded-2xl p-6">
      <div className="flex mb-3">
        {Array(stars).fill(0).map((_, i) => <span key={i} className="text-gold text-lg">★</span>)}
      </div>
      <p className="text-cream/90 font-hindi text-base leading-relaxed mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center">
          <span className="text-saffron font-bold text-sm">{name[0]}</span>
        </div>
        <div>
          <div className="text-cream font-bold text-sm font-hindi">{name}</div>
          <div className="text-cream/50 text-xs">{city}</div>
        </div>
      </div>
    </div>
  )
}
