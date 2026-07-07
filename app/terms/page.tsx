import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="container pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold tracking-tighter text-navy-900 dark:text-white">
        Terms of Service
      </h1>
      <div className="prose mt-8 max-w-2xl text-text-secondary dark:text-slate-400">
        <p>
          By using this website or engaging {siteConfig.name} for recruitment services, you agree
          to work with us in accordance with applicable Bangladeshi and Malaysian recruitment
          regulations, including BMET and BAIRA guidelines.
        </p>
        <p className="mt-4">
          All service fees are disclosed transparently prior to the start of documentation. We
          reserve the right to decline any placement that does not meet our verification
          standards for either candidates or employers.
        </p>
        <p className="mt-4">
          These terms are governed by the laws of Bangladesh and Malaysia as applicable to
          overseas employment services.
        </p>
      </div>
    </div>
  );
}
