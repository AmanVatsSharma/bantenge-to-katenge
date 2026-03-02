import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'संपर्क करें — बंटेंगे तो कटेंगे',
  description: 'Contact us',
}

export default function ContactPage() {
  return (
    <PageLayout title="संपर्क करें">
      <div className="text-cream/80 font-hindi leading-relaxed space-y-4">
        <p>
          यह पृष्ठ जल्द ही अपडेट किया जाएगा। संपर्क करने का विवरण यहाँ उपलब्ध होगा।
        </p>
        <p className="text-cream/60 text-sm">
          This page will be updated soon. Contact details will be available here.
        </p>
      </div>
    </PageLayout>
  )
}
