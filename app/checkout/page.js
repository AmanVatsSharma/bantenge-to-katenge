import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'Checkout — बंटेंगे तो कटेंगे',
  description: 'Complete your purchase',
}

export default function CheckoutPage() {
  return (
    <PageLayout title="Checkout — जल्द होगा उपलब्ध">
      <div className="text-cream/80 font-hindi leading-relaxed space-y-4">
        <p>
          भुगतान प्रणाली जल्द ही उपलब्ध होगी। कृपया अपनी रुचि के लिए धन्यवाद।
        </p>
        <p className="text-cream/60 text-sm">
          Payment gateway coming soon. Thank you for your interest.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 bg-saffron hover:bg-saffron-light text-white font-bold font-hindi px-6 py-3 rounded-full transition-all"
        >
          वापस मुख्य पृष्ठ पर जाएं
        </Link>
      </div>
    </PageLayout>
  )
}
