'use client'

export default function BookCover() {
  return (
    <div className="book-3d w-64 md:w-80 mx-auto">
      <div className="relative" style={{
        background: 'linear-gradient(135deg, #4A0000 0%, #800000 40%, #CC3300 70%, #FF6B00 100%)',
        borderRadius: '4px 12px 12px 4px',
        padding: '2px',
        boxShadow: '4px 0 8px rgba(0,0,0,0.5) inset'
      }}>
        {/* Spine shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l" style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.5), transparent)'
        }} />
        
        <div className="relative p-6 md:p-8 text-center" style={{
          background: 'linear-gradient(160deg, #8B0000 0%, #600000 50%, #3D0000 100%)',
          borderRadius: '2px 10px 10px 2px',
          border: '3px solid #FFD700',
          minHeight: '380px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'
        }}>
          {/* Top ornament */}
          <div className="w-full text-center">
            <div className="text-gold text-3xl mb-2" style={{ fontFamily: 'serif' }}>ॐ</div>
            <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
          </div>

          {/* Main title */}
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <div className="text-xs text-gold/70 mb-3 tracking-widest uppercase font-sans">Sanatan Raksha Series</div>
            
            <div className="mb-2">
              <span className="text-5xl md:text-6xl font-hindi font-bold leading-tight block" style={{
                background: 'linear-gradient(180deg, #FFE44D, #FFD700, #CC8800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
              }}>
                बंटेंगे
              </span>
              <span className="text-3xl md:text-4xl text-cream/80 font-hindi block">तो</span>
              <span className="text-5xl md:text-6xl font-hindi font-bold leading-tight block" style={{
                background: 'linear-gradient(180deg, #FFE44D, #FFD700, #CC8800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
              }}>
                कटेंगे
              </span>
            </div>

            <div className="w-full h-px my-3" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
            
            <div className="text-cream/80 text-xs font-hindi text-center leading-relaxed">
              हिंदू एकता का महामंत्र
            </div>
          </div>

          {/* Yogi ji mention */}
          <div className="w-full">
            <div className="w-full h-px mb-3" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
            <div className="text-gold text-xs font-hindi text-center">
              योगी आदित्यनाथ जी की प्रेरणा से
            </div>
            <div className="text-cream/60 text-xs font-sans text-center mt-1">
              — INSPIRED BY YOGI ADITYANATH —
            </div>
            <div className="flex justify-center mt-3 gap-3 text-lg">
              <span>🪷</span>
              <span className="text-gold" style={{ fontFamily: 'serif' }}>ॐ</span>
              <span>🪷</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
