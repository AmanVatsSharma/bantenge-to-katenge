import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'धन-वापसी नीति — बंटेंगे तो कटेंगे',
  description: 'Refund policy',
}

export default function RefundPage() {
  return (
    <PageLayout title="धन-वापसी नीति">
      <div className="text-cream/80 font-hindi leading-relaxed space-y-4">
        <p>
          यह पृष्ठ जल्द ही अपडेट किया जाएगा। धन-वापसी नीति का विवरण यहाँ उपलब्ध होगा।
        </p>
        <p className="text-cream/60 text-sm">
          This page will be updated soon. Refund policy details will be available here.
        </p>
      </div>
    </PageLayout>
  )
}
