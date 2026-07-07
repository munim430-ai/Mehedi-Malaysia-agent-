import type { Metadata } from 'next';
import { Resources } from '@/sections/Resources';
import { FAQSection } from '@/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Resources & Salary Guide',
  description:
    'Download free Malaysia salary guides, visa process guides and career tips for Bangladeshi job seekers and Malaysian employers.',
};

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-16 text-center">
        <div className="container">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            Resource Center
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tighter text-white">
            Salary Guides &amp; Career Resources
          </h1>
        </div>
      </div>
      <Resources />
      <FAQSection />
    </div>
  );
}
