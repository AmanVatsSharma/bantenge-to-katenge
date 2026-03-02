import PageLayout from '@/components/PageLayout'

export const metadata = {
  title: 'गोपनीयता नीति — बंटेंगे तो कटेंगे',
  description: 'Privacy policy',
}

export default function PrivacyPage() {
  return (
    <PageLayout title="गोपनीयता नीति">
      <div className="text-cream/80 font-hindi leading-relaxed space-y-4">
        <p>
          यह पृष्ठ जल्द ही अपडेट किया जाएगा। गोपनीयता नीति का विवरण यहाँ उपलब्ध होगा।
        </p>
        <p className="text-cream/60 text-sm">
          This page will be updated soon. Privacy policy details will be available here.
        </p>
      </div>
    </PageLayout>
  )
}
