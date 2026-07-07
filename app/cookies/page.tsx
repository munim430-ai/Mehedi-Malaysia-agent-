import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Cookie Policy for ${siteConfig.name}.`,
};

export default function CookiesPage() {
  return (
    <div className="container pb-24 pt-32">
      <h1 className="font-heading text-4xl font-bold tracking-tighter text-navy-900 dark:text-white">
        Cookie Policy
      </h1>
      <div className="prose mt-8 max-w-2xl text-text-secondary dark:text-slate-400">
        <p>
          This website uses minimal local storage (not third-party tracking cookies) to remember
          your theme preference and whether you have already seen our newsletter signup prompt.
        </p>
        <p className="mt-4">
          We do not use this storage for advertising or cross-site tracking purposes.
        </p>
      </div>
    </div>
  );
}
