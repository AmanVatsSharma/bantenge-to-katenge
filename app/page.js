'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackPixel } from '@/lib/pixel'
import StickyBar from '@/components/StickyBar'
import BookCover from '@/components/BookCover'
import CountdownTimer from '@/components/CountdownTimer'
import Testimonial from '@/components/Testimonial'
import BenefitItem from '@/components/BenefitItem'
import Flames from '@/components/Flames'

export default function HomePage() {
  const ctaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleCTAClick = () => {
    trackPixel('InitiateCheckout', { value: 197, currency: 'INR', content_name: 'बंटेंगे तो कटेंगे' })
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePurchase = () => {
    trackPixel('Purchase', { value: 197, currency: 'INR', content_name: 'बंटेंगे तो कटेंगे' })
    window.location.href = '/checkout'
  }

  return (
    <main className="min-h-screen sacred-bg om-pattern">
      <StickyBar onCTAClick={handleCTAClick} />

      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #FF6B00, transparent)', filter: 'blur(60px)' }} />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #FFD700, transparent)', filter: 'blur(60px)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-maroon/50 border border-gold/30 rounded-full px-5 py-2 mb-8">
              <span className="text-gold text-lg">ॐ</span>
              <span className="text-gold font-hindi text-sm">नमो नारायण — जय सनातन</span>
              <span className="text-gold text-lg">ॐ</span>
            </div>

            <div className="bg-saffron/15 border border-saffron/40 rounded-xl px-6 py-3 mb-8 max-w-2xl mx-auto">
              <p className="text-saffron font-hindi font-bold text-sm md:text-base">
                ⚠️ यह पुस्तक हर हिंदू के लिए अनिवार्य है — जानिए क्यों हम बंटते हैं और इसका क्या परिणाम होता है
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="mb-6">
                <div className="shimmer-text font-hindi text-5xl md:text-7xl font-bold leading-tight">
                  बंटेंगे तो कटेंगे
                </div>
                <div className="text-cream/80 font-hindi text-xl md:text-2xl mt-3">
                  — हिंदू एकता का महामंत्र
                </div>
              </h1>

              <Flames />

              <p className="text-cream/80 font-hindi text-lg leading-relaxed mb-8 max-w-lg">
                योगी आदित्यनाथ जी के ऐतिहासिक शब्दों से प्रेरित — यह पुस्तक सनातन धर्म की रक्षा, 
                हिंदू समाज की एकता, और भारत माता के गौरव की अमर गाथा है।
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  ['१०,०००+', 'पाठक'],
                  ['४.९/५', 'रेटिंग'],
                  ['२४७', 'पृष्ठ'],
                ].map(([num, label], i) => (
                  <div key={i} className="text-center p-3 rounded-xl border border-gold/20 bg-maroon/20">
                    <div className="stat-number text-gold text-xl font-bold">{num}</div>
                    <div className="text-cream/60 font-hindi text-xs">{label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="text-cream/40 text-xl line-through font-sans">₹499</span>
                  <span className="text-gold text-5xl font-bold font-sans">₹197</span>
                  <div className="bg-saffron rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-bold">60% OFF</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCTAClick}
                  className="cta-pulse w-full md:w-auto bg-gradient-to-r from-saffron to-saffron-light hover:from-saffron-light hover:to-gold text-white font-bold font-hindi text-xl px-10 py-5 rounded-2xl transition-all duration-300 shadow-2xl transform hover:scale-105"
                >
                  🔥 अभी पढ़ें — ebook डाउनलोड करें 🔥
                </button>

                <div className="flex items-center gap-2 justify-center md:justify-start text-cream/50 text-sm">
                  <span>🔒</span>
                  <span className="font-hindi">सुरक्षित भुगतान | तुरंत डाउनलोड</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <BookCover />
              
              <div className="max-w-xs text-center p-5 rounded-2xl" style={{
                background: 'linear-gradient(135deg, rgba(128,0,0,0.4), rgba(74,0,0,0.6))',
                border: '1px solid rgba(255,215,0,0.3)'
              }}>
                <div className="text-gold text-4xl mb-2">"</div>
                <p className="text-cream font-hindi text-base leading-relaxed italic">
                  बंटेंगे तो कटेंगे — यह केवल एक नारा नहीं, यह हिंदुओं के अस्तित्व की चेतावनी है।
                </p>
                <div className="mt-4 pt-4 border-t border-gold/20">
                  <div className="text-saffron font-hindi font-bold text-sm">— योगी आदित्यनाथ</div>
                  <div className="text-cream/50 text-xs">मुख्यमंत्री, उत्तर प्रदेश</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK LAUNCH / PROMOTION IMAGE ───────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center reveal mb-10">
            <div className="lotus-divider mb-6">
              <span className="text-gold font-hindi text-2xl font-bold">पुस्तक विमोचन — योगी जी के साथ</span>
            </div>
            <p className="text-cream/70 font-hindi text-base max-w-2xl mx-auto">
              योगी आदित्यनाथ जी द्वारा इस पुस्तक का विमोचन — देश को सन्देश: बंटेंगे तो कटेंगे
            </p>
          </div>
          <div className="reveal rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl" style={{
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(255,215,0,0.15)'
          }}>
            <Image
              src="/images/book-promotion.jpeg"
              alt="योगी आदित्यनाथ जी के साथ बंटेंगे तो कटेंगे पुस्तक विमोचन — देश को सन्देश"
              width={1600}
              height={835}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="text-center text-cream/50 font-hindi text-sm mt-4">
            लेखक: इन्द्रसिंह खिवाड़ा
          </p>
        </div>
      </section>

      {/* ── URGENCY BANNER ─────────────────────────────────────────────── */}
      <section className="py-8 bg-maroon/40 border-y border-gold/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-hindi text-lg font-bold mb-4">
            ⏳ यह विशेष मूल्य सीमित समय के लिए — अभी समाप्त होने वाला है
          </p>
          <CountdownTimer />
          <p className="text-cream/60 font-hindi text-sm mt-4">
            इस समय <span className="text-saffron font-bold">१२४ लोग</span> इस पेज पर हैं और इस ebook को देख रहे हैं
          </p>
        </div>
      </section>

      {/* ── ABOUT THE BOOK ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center reveal mb-16">
            <div className="lotus-divider mb-6">
              <span className="text-gold font-hindi text-2xl font-bold">पुस्तक के बारे में</span>
            </div>
            <p className="text-cream/70 font-hindi text-lg max-w-2xl mx-auto leading-relaxed">
              यह केवल एक ebook नहीं — यह हर हिंदू के लिए एक जागरण है, एक आह्वान है, एक दर्पण है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal">
            {[
              { icon: '🕉️', title: 'सनातन की जड़ें', desc: 'जानिए हमारी संस्कृति, हमारे धर्म की गहराई — और क्यों आज इसकी रक्षा सबसे जरूरी है।' },
              { icon: '⚔️', title: 'एकता ही शक्ति है', desc: 'इतिहास के वो क्षण जब हम बंटे और जब हमने एकता से अपने को बचाया — सीखें उन सबकों से।' },
              { icon: '🏛️', title: 'राजनीतिक जागरूकता', desc: 'वर्तमान भारत में हिंदू समाज के सामने खड़ी चुनौतियों का निडर और तथ्यपरक विश्लेषण।' },
              { icon: '🪷', title: 'योगी जी की प्रेरणा', desc: 'योगी आदित्यनाथ जी के विचारों, भाषणों और संदेशों की गहरी व्याख्या और उनका महत्त्व।' },
              { icon: '🔱', title: 'धर्म रक्षा का मार्ग', desc: 'हर हिंदू व्यक्ति अपने जीवन में सनातन धर्म की रक्षा कैसे करे — व्यावहारिक मार्गदर्शन।' },
              { icon: '🌺', title: 'भारत माँ का गौरव', desc: 'भारत की आत्मा सनातन में बसती है — जानिए कैसे हम उसे जीवित और शक्तिशाली रखें।' },
            ].map((item, i) => <BenefitItem key={i} {...item} />)}
          </div>
        </div>
      </section>

      {/* ── YOGI SECTION ──────────────────────────────────────────────── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(128,0,0,0.3) 0%, rgba(74,0,0,0.5) 100%)'
        }} />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center reveal mb-12">
            <div className="lotus-divider mb-6">
              <span className="text-gold font-hindi text-2xl font-bold">योगी आदित्यनाथ — प्रेरणास्रोत</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">
            {[
              { quote: '"हिंदू एकता ही हमारी सबसे बड़ी शक्ति है। बंटे तो मिटे।"', context: 'लखनऊ रैली, 2023' },
              { quote: '"सनातन धर्म अमर है — इसे कोई नहीं मिटा सकता जब तक हम एकजुट हैं।"', context: 'अयोध्या उद्घाटन' },
              { quote: '"जो राम को नहीं मानते, वो अयोध्या को भी नहीं समझ सकते।"', context: 'विधानसभा भाषण' },
            ].map((q, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{
                background: 'linear-gradient(160deg, rgba(255,107,0,0.12), rgba(128,0,0,0.2))',
                border: '1px solid rgba(255,215,0,0.25)'
              }}>
                <div className="text-saffron text-5xl mb-4" style={{ fontFamily: 'serif', lineHeight: 1 }}>"</div>
                <p className="text-cream font-hindi text-base leading-relaxed italic mb-4">{q.quote}</p>
                <p className="text-gold/60 text-xs font-sans">{q.context}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl reveal" style={{
            background: 'linear-gradient(135deg, rgba(255,107,0,0.1), rgba(128,0,0,0.2))',
            border: '1px solid rgba(255,215,0,0.2)'
          }}>
            <h3 className="text-center text-gold font-hindi text-xl font-bold mb-8">
              योगी जी की उपलब्धियाँ जो इस पुस्तक की नींव हैं
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ['राम मंदिर', 'निर्माण में योगदान'],
                ['काशी विश्वनाथ', 'कॉरिडोर निर्माण'],
                ['UP में कानून व्यवस्था', 'ऐतिहासिक सुधार'],
                ['धर्म रक्षा', 'निरंतर संकल्प'],
              ].map(([title, sub], i) => (
                <div key={i} className="text-center">
                  <div className="text-saffron font-hindi font-bold text-base mb-1">{title}</div>
                  <div className="text-cream/50 font-hindi text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center reveal mb-12">
            <div className="lotus-divider mb-6">
              <span className="text-gold font-hindi text-2xl font-bold">आपको क्या मिलेगा?</span>
            </div>
          </div>

          <div className="space-y-4 reveal">
            {[
              { title: 'बंटेंगे तो कटेंगे — मुख्य ebook (PDF)', value: '₹499', included: true },
              { title: 'सनातन धर्म की रक्षा — बोनस गाइड', value: '₹199', included: true },
              { title: 'हिंदू एकता — ऑडियो सारांश (MP3)', value: '₹149', included: true },
              { title: 'योगी जी के ५० प्रेरणादायक उद्धरण — PDF', value: '₹99', included: true },
              { title: '३० दिन का मनी-बैक गारंटी', value: '', included: true, highlight: true },
            ].map((item, i) => (
              <div key={i} className={`flex items-center justify-between p-5 rounded-xl ${item.highlight
                ? 'bg-saffron/10 border border-saffron/40'
                : 'bg-maroon/20 border border-gold/15'
                }`}>
                <div className="flex items-center gap-3">
                  <span className={`text-xl ${item.included ? 'text-green-400' : 'text-red-400'}`}>
                    {item.included ? '✅' : '❌'}
                  </span>
                  <span className={`font-hindi text-base ${item.highlight ? 'text-saffron font-bold' : 'text-cream'}`}>
                    {item.title}
                  </span>
                </div>
                {item.value && (
                  <span className="text-gold/70 font-sans font-bold">{item.value}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl text-center reveal" style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,107,0,0.1))',
            border: '2px solid rgba(255,215,0,0.4)'
          }}>
            <div className="text-cream/70 font-hindi text-sm mb-2">कुल मूल्य:</div>
            <div className="text-cream/50 text-3xl line-through font-sans mb-1">₹946</div>
            <div className="shimmer-text text-6xl font-bold font-sans mb-3">₹197</div>
            <div className="text-gold font-hindi text-sm">मात्र आज के लिए यह विशेष मूल्य</div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-maroon/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center reveal mb-12">
            <div className="lotus-divider mb-6">
              <span className="text-gold font-hindi text-2xl font-bold">पाठकों की राय</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 reveal">
            <Testimonial name="राजेश शर्मा" city="लखनऊ, UP" text="इस पुस्तक ने मेरी आँखें खोल दीं। हर हिंदू को यह पढ़नी चाहिए। योगी जी के विचारों की इतनी सुंदर व्याख्या पहले कभी नहीं पढ़ी।" />
            <Testimonial name="प्रिया सिंह" city="वाराणसी, UP" text="सनातन धर्म की रक्षा के बारे में इतनी स्पष्ट और तर्कसंगत बात पहली बार पढ़ी। इसे पूरे परिवार ने पढ़ा।" />
            <Testimonial name="अमित पांडेय" city="प्रयागराज, UP" text="बंटेंगे तो कटेंगे का अर्थ अब मैं सच में समझा। यह नारा नहीं, एक जीवन दर्शन है। लेखक को धन्यवाद।" />
            <Testimonial name="सुमित गुप्ता" city="गोरखपुर, UP" text="योगी जी की प्रेरणा से लिखी यह पुस्तक वास्तव में असाधारण है। हर पृष्ठ पर ज्ञान और ऊर्जा मिलती है।" />
            <Testimonial name="नीता देवी" city="मथुरा, UP" text="महिलाओं के नजरिये से भी यह पुस्तक बहुत प्रासंगिक है। धर्म रक्षा में हमारी भी भूमिका बताई गई है।" />
            <Testimonial name="विकास तिवारी" city="अयोध्या, UP" text="राम मंदिर के बाद यह पुस्तक पढ़ी। दोनों ने मिलकर मेरे हिंदुत्व को नई शक्ति दी। जय श्री राम!" />
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center reveal">
          <div className="inline-block">
            <div className="guarantee-badge p-1 rounded-full inline-block mb-6">
              <div className="guarantee-inner w-40 h-40 p-4">
                <div className="text-3xl mb-1">🛡️</div>
                <div className="text-gold font-bold text-sm font-sans">30 DAY</div>
                <div className="text-gold font-bold text-xs font-sans">MONEY BACK</div>
                <div className="text-gold font-bold text-xs font-sans">GUARANTEE</div>
              </div>
            </div>
          </div>
          <h2 className="text-gold font-hindi text-2xl font-bold mb-4">
            पूर्ण धन-वापसी की गारंटी
          </h2>
          <p className="text-cream/70 font-hindi text-lg leading-relaxed">
            यदि ३० दिनों के भीतर आपको यह पुस्तक पसंद नहीं आई, तो हम आपका पूरा पैसा वापस कर देंगे। 
            कोई सवाल नहीं, कोई झंझट नहीं। हमें पूरा विश्वास है कि यह पुस्तक आपका जीवन बदल देगी।
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section ref={ctaRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, #4A0000, #800000, #CC3300)'
        }} />
        <div className="absolute top-8 left-8 text-gold/10 text-9xl" style={{ fontFamily: 'serif' }}>ॐ</div>
        <div className="absolute bottom-8 right-8 text-gold/10 text-9xl" style={{ fontFamily: 'serif' }}>ॐ</div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="text-5xl mb-6">🔥</div>
          <h2 className="shimmer-text font-hindi text-3xl md:text-5xl font-bold leading-tight mb-6">
            अब समय आ गया है — जागो, एकजुट हो, सनातन को बचाओ
          </h2>
          <p className="text-cream/80 font-hindi text-lg leading-relaxed mb-10">
            यह पुस्तक पढ़कर आप सिर्फ एक reader नहीं बनते — आप एक <strong className="text-saffron">सनातन योद्धा</strong> बन जाते हैं।
            अपने परिवार, अपने समाज, और अपने धर्म की रक्षा का संकल्प लीजिए।
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-cream/40 text-2xl line-through">₹499</span>
              <span className="text-gold text-7xl font-bold font-sans">₹197</span>
            </div>

            <button
              onClick={handlePurchase}
              className="cta-pulse w-full md:w-auto bg-gradient-to-r from-saffron-dark via-saffron to-saffron-light text-white font-bold font-hindi text-2xl px-14 py-6 rounded-2xl transition-all duration-300 shadow-2xl transform hover:scale-105 block mx-auto"
            >
              🔥 अभी खरीदें और डाउनलोड करें 🔥
            </button>

            <p className="text-cream/50 font-hindi text-sm">
              ✅ तुरंत डाउनलोड &nbsp;|&nbsp; 🔒 सुरक्षित भुगतान &nbsp;|&nbsp; 🛡️ ३० दिन मनी-बैक
            </p>

            <Flames />

            <div className="mt-8 p-6 rounded-xl border border-gold/20 bg-black/20">
              <div className="text-gold font-hindi text-lg font-bold mb-2">
                🙏 जय श्री राम | जय महादेव | जय भारत माता
              </div>
              <div className="text-cream/50 font-hindi text-sm">
                सनातन अमर है — हम अमर हैं — बस एकजुट रहें
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="py-8 border-t border-gold/10 bg-black/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-gold text-2xl mb-4" style={{ fontFamily: 'serif' }}>ॐ</div>
          <p className="text-cream/40 font-hindi text-sm mb-4">
            सर्वाधिकार सुरक्षित © 2024 | बंटेंगे तो कटेंगे
          </p>
          <div className="flex justify-center gap-6 text-cream/30 text-xs font-hindi">
            <Link href="/privacy" className="hover:text-gold transition-colors">गोपनीयता नीति</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">नियम और शर्तें</Link>
            <Link href="/refund" className="hover:text-gold transition-colors">धन-वापसी नीति</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">संपर्क करें</Link>
          </div>
          <p className="text-cream/20 text-xs mt-4">
            This site is not part of the Facebook website or Facebook Inc. | Not endorsed by Yogi Adityanath
          </p>
        </div>
      </footer>
    </main>
  )
}
