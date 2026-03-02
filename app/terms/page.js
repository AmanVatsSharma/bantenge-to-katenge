import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'नियम और शर्तें — बंटेंगे तो कटेंगे',
  description: 'Terms and conditions',
}

export default function TermsPage() {
  return (
    <PageLayout title="नियम और शर्तें">
      <div className="text-cream/80 font-hindi leading-relaxed space-y-4">
        <p>
          यह पृष्ठ जल्द ही अपडेट किया जाएगा। नियम और शर्तों का विवरण यहाँ उपलब्ध होगा।
        </p>
        <p className="text-cream/60 text-sm">
          This page will be updated soon. Terms and conditions will be available here.
        </p>
      </div>
    </PageLayout>
  )
}
