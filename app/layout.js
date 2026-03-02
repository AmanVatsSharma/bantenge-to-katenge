import Script from 'next/script'
import { Cinzel, Tiro_Devanagari_Hindi } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cinzel',
})

const tiroHindi = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hindi',
})

export const metadata = {
  title: 'बंटेंगे तो कटेंगे — सनातन की रक्षा, हिंदुओं की एकता',
  description: 'योगी आदित्यनाथ जी की प्रेरणा से लिखी गई ऐतिहासिक पुस्तक। हिंदू एकता का संदेश, सनातन धर्म की रक्षा का मार्ग।',
  keywords: 'बंटेंगे तो कटेंगे, योगी आदित्यनाथ, सनातन धर्म, हिंदू एकता, हिंदू ebook',
  openGraph: {
    title: 'बंटेंगे तो कटेंगे — सनातन की रक्षा',
    description: 'हिंदू एकता का महामंत्र। अभी पढ़ें, अभी जागें।',
    type: 'website',
  }
}

export default function RootLayout({ children }) {
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''

  return (
    <html lang="hi" className={`${cinzel.variable} ${tiroHindi.variable}`}>
      <body>
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {children}
      </body>
    </html>
  )
}
