'use client'

export default function Flames() {
  return (
    <div className="flex justify-center gap-2 my-4">
      {['🔥', '🪔', '🔥'].map((e, i) => (
        <span key={i} className="flicker text-2xl" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
      ))}
    </div>
  )
}
