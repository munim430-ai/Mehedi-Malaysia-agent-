import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="container pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold tracking-tighter text-navy-900 dark:text-white">
        Privacy Policy
      </h1>
      <div className="prose mt-8 max-w-2xl text-text-secondary dark:text-slate-400">
        <p>
          {siteConfig.name} collects personal information you provide directly to us — such as
          your name, contact details, CV and employment history — solely to facilitate job
          placement and recruitment services between Bangladesh and Malaysia.
        </p>
        <p className="mt-4">
          We do not sell your personal data. Information is shared only with prospective
          employers and relevant government authorities (such as BMET) as required to process
          your application and work visa.
        </p>
        <p className="mt-4">
          For questions about your data, contact us at{' '}
          <a href={`mailto:${siteConfig.email}`} className="text-gold-dark">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
