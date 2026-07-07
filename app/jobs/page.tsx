import type { Metadata } from 'next';
import { Suspense } from 'react';
import { JobsPageClient } from '@/app/jobs/JobsPageClient';

export const metadata: Metadata = {
  title: 'Find Jobs in Malaysia',
  description:
    'Browse verified Malaysia job openings for Bangladeshi workers in construction, manufacturing, plantation and F&B/hospitality sectors.',
};

export default function JobsPage() {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-16 text-center">
        <div className="container">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            Job Board
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tighter text-white">
            Find Your Next Job in Malaysia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Verified openings across construction, manufacturing, plantation and F&amp;B/hospitality —
            updated weekly by our Malaysia team.
          </p>
        </div>
      </div>
      <Suspense fallback={null}>
        <JobsPageClient />
      </Suspense>
    </div>
  );
}
