# बंटेंगे तो कटेंगे — Landing Page (Next.js)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

---

## 🔌 Meta Pixel Setup

1. Copy `.env.example` to `.env.local`
2. Set `NEXT_PUBLIC_META_PIXEL_ID` to your actual Pixel ID from Meta Business Manager

Events already tracked:
- `PageView` — on every visit
- `InitiateCheckout` — when CTA button is clicked  
- `Purchase` — when final buy button is clicked

---

## 💳 Payment Gateway

Replace the placeholder checkout page at `app/checkout/page.js` with your Razorpay / PayU / Cashfree integration. Or in `app/page.js` → `handlePurchase()`, change `window.location.href = '/checkout'` to your payment gateway URL.

### Razorpay Example:
```js
const options = {
  key: 'YOUR_RAZORPAY_KEY',
  amount: 19700, // in paise
  currency: 'INR',
  name: 'बंटेंगे तो कटेंगे',
  handler: function(response) {
    fbq('track', 'Purchase', { value: 197, currency: 'INR' })
    window.location.href = '/thank-you'
  }
}
const rzp = new window.Razorpay(options)
rzp.open()
```

---

## 🎨 Customization

| File | What to change |
|------|---------------|
| `app/globals.css` | Colors, fonts, animations |
| `app/page.js` | All content, prices, testimonials |
| `tailwind.config.js` | Theme colors |

### To change price:
Search for `₹197` and `₹499` in `app/page.js`

---

## 📁 File Structure

```
├── app/
│   ├── layout.js           # Meta Pixel + next/font
│   ├── page.js             # Main landing page
│   ├── globals.css         # All custom styles
│   ├── checkout/page.js    # Checkout placeholder
│   ├── privacy/page.js     # Privacy policy
│   ├── terms/page.js       # Terms and conditions
│   ├── refund/page.js      # Refund policy
│   └── contact/page.js     # Contact
├── components/
│   ├── StickyBar.js
│   ├── BookCover.js
│   ├── CountdownTimer.js
│   ├── Testimonial.js
│   ├── BenefitItem.js
│   ├── Flames.js
│   └── PageLayout.js
├── lib/
│   └── pixel.js           # Meta Pixel tracking
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

---

## ✅ Features
- ⚡ Next.js 14 App Router
- 🔥 Meta Pixel integrated
- 📱 Fully responsive (mobile-first)
- 🎯 High-converting sections: Hero, Urgency, Benefits, Testimonials, Guarantee, CTA
- ⏳ Live countdown timer
- 🛒 Pixel events: PageView, InitiateCheckout, Purchase
- 🌙 Sacred saffron & maroon theme
- 🔡 Hindi (Devanagari) typography throughout
- ✨ Animations: shimmer gold text, floating book, flame flicker, scroll reveal

**जय श्री राम 🙏**
