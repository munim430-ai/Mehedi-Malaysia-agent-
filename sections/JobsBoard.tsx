'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, MapPin, Briefcase, Clock, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ScrollReveal';
import { formatCurrency } from '@/lib/utils';
import jobsData from '@/data/jobs.json';
import sectorsData from '@/data/sectors.json';

const jobTypes = ['Full-time', 'Contract'];
const levels = ['Entry', 'Mid', 'Senior'];

interface JobsBoardProps {
  limit?: number;
  showSearch?: boolean;
  initialSector?: string;
  title?: string;
  subtitle?: string;
}

export function JobsBoard({
  limit,
  showSearch = true,
  initialSector = '',
  title = 'Featured Jobs in Malaysia',
  subtitle = 'Verified openings from Malaysian employers, updated weekly.',
}: JobsBoardProps) {
  const [keyword, setKeyword] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [sector, setSector] = React.useState(initialSector);
  const [activeChips, setActiveChips] = React.useState<string[]>([]);
  const [visibleCount, setVisibleCount] = React.useState(limit ?? 8);

  const locations = React.useMemo(
    () => Array.from(new Set(jobsData.map((j) => j.location.split(',')[0].trim()))),
    []
  );

  const toggleChip = (chip: string) => {
    setActiveChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  };

  const filteredJobs = React.useMemo(() => {
    return jobsData.filter((job) => {
      const matchesKeyword =
        !keyword ||
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase());
      const matchesLocation = !location || job.location.includes(location);
      const matchesSector = !sector || job.sector === sector;
      const matchesChips =
        activeChips.length === 0 ||
        activeChips.every((chip) =>
          jobTypes.includes(chip) ? job.type === chip : job.level === chip
        );
      return matchesKeyword && matchesLocation && matchesSector && matchesChips;
    });
  }, [keyword, location, sector, activeChips]);

  const jobsToShow = filteredJobs.slice(0, visibleCount);

  return (
    <section id="jobs" className="scroll-mt-24 bg-surface py-24 dark:bg-navy-950 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Job Board
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-slate-400">{subtitle}</p>
        </ScrollReveal>

        {showSearch && (
          <ScrollReveal delay={0.1}>
            <div className="mb-6 grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 shadow-soft dark:bg-navy-800 sm:grid-cols-4">
              <div className="relative sm:col-span-2">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
                <Input
                  placeholder="Job title or company"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="pl-11"
                />
              </div>
              <Select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </Select>
              <Select value={sector} onChange={(e) => setSector(e.target.value)}>
                <option value="">All Sectors</option>
                {sectorsData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="mb-10 flex flex-wrap gap-2">
              {[...jobTypes, ...levels].map((chip) => (
                <button
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                    activeChips.includes(chip)
                      ? 'border-gold bg-gold text-navy-900'
                      : 'border-navy-900/10 bg-white text-text-secondary hover:border-gold/50 dark:border-white/10 dark:bg-navy-800 dark:text-slate-300'
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        {jobsToShow.length === 0 ? (
          <p className="py-16 text-center text-text-secondary dark:text-slate-400">
            No roles match your filters right now. Try broadening your search or set a job alert
            below.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobsToShow.map((job, i) => (
              <ScrollReveal key={job.id} delay={(i % 6) * 0.05}>
                <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-gold">
                      {job.company.charAt(0)}
                    </div>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tighter text-navy-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary dark:text-slate-400">{job.company}</p>

                  <div className="mt-4 flex flex-col gap-2 text-sm text-text-secondary dark:text-slate-400">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-gold-dark" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5 text-gold-dark" />
                      {formatCurrency(job.salaryMin, job.currency)} - {formatCurrency(job.salaryMax, job.currency)}/month
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-gold-dark" />
                      Posted {job.postedDaysAgo} day{job.postedDaysAgo !== 1 ? 's' : ''} ago
                    </span>
                  </div>

                  <Link href={`/contact?job=${job.id}#upload-cv`} className="mt-6">
                    <Button variant="navy" className="w-full">
                      Apply Now
                    </Button>
                  </Link>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        )}

        {filteredJobs.length > visibleCount && (
          <div className="mt-10 flex justify-center">
            <Button variant="outline-navy" onClick={() => setVisibleCount((v) => v + 6)}>
              Load More Jobs
            </Button>
          </div>
        )}

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-navy-900 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-tighter text-white">
              Don&rsquo;t see the right role yet?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Set a job alert and we&rsquo;ll notify you the moment a matching Malaysia position
              opens up.
            </p>
          </div>
          <Link href="/contact#upload-cv">
            <Button variant="gold" className="shrink-0">
              <Bell className="h-4 w-4" />
              Set Job Alert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
