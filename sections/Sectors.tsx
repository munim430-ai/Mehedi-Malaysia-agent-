'use client';

import Link from 'next/link';
import { ArrowRight, Factory, HardHat, Store, Trees, UtensilsCrossed, type LucideIcon } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import sectorsData from '@/data/sectors.json';

const iconMap: Record<string, LucideIcon> = {
  HardHat,
  Factory,
  Trees,
  UtensilsCrossed,
  Store,
};

export function Sectors() {
  return (
    <section id="sectors" className="scroll-mt-24 bg-white py-24 dark:bg-navy-900 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Sectors We Serve
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
            Deep Expertise Where Malaysia Needs It Most
          </h2>
        </ScrollReveal>

        <div className="scrollbar-none -mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 xl:grid-cols-5">
          {sectorsData.map((sector, i) => {
            const Icon = iconMap[sector.icon] ?? HardHat;
            return (
              <ScrollReveal key={sector.id} delay={i * 0.06}>
                <div className="group relative flex h-full min-w-[260px] snap-start flex-col rounded-2xl border border-navy-900/8 bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift dark:border-white/10 dark:bg-navy-800 lg:min-w-0">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold tracking-tighter text-navy-900 dark:text-white">
                    {sector.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-teal">{sector.openRoles} Open Roles</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary dark:text-slate-400">
                    {sector.description}
                  </p>
                  <Link
                    href={`/jobs?sector=${sector.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-dark dark:text-white"
                  >
                    Explore Roles
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
