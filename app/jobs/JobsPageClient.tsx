'use client';

import { useSearchParams } from 'next/navigation';
import { JobsBoard } from '@/sections/JobsBoard';

export function JobsPageClient() {
  const searchParams = useSearchParams();
  const sector = searchParams.get('sector') ?? '';

  return (
    <JobsBoard
      initialSector={sector}
      title="All Open Positions"
      subtitle="Filter by location, sector or job type to find the right fit."
    />
  );
}
