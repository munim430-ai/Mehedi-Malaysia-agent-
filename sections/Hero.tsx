'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const stats = [
  { value: 2500, suffix: '+', label: 'Workers Placed' },
  { value: 150, suffix: '+', label: 'Malaysian Employers' },
  { value: 98, suffix: '%', label: 'Visa Approval Rate' },
  { value: 3, suffix: '', label: 'Core Sectors Served' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 bg-200 animate-gradient-shift"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-light" />
              </span>
              <span className="text-xs font-medium text-white/90">
                Live: 847 Open Positions in Malaysia
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tighter text-white sm:text-5xl lg:text-[56px]">
              Malaysia&rsquo;s Trusted Bridge to{' '}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Verified Bangladeshi Talent
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We connect Malaysian employers with skilled, work-ready Bangladeshi workers across
              Construction, Manufacturing, Plantation and F&amp;B/Hospitality — managing sourcing,
              documentation and visa processing end to end.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/employers">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <Briefcase className="h-5 w-5" />
                  I&rsquo;m Hiring Talent
                </Button>
              </Link>
              <Link href="/jobs">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <UserCheck className="h-5 w-5" />
                  Find My Next Job
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold tracking-tighter text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-gold/20 to-teal/10 blur-2xl" />
            <div className="animate-float">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[2.5rem] border-4 border-gold/40 shadow-lift sm:max-w-sm">
                <Image
                  src="/images/mehedi-hasan.jpg"
                  alt="Mehedi Sarker, Founder of MS Global Manpower"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, 384px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>
              <div className="mx-auto -mt-8 w-fit rounded-2xl border border-white/10 bg-navy-800/90 px-6 py-3 text-center shadow-lift backdrop-blur-sm">
                <p className="font-heading text-sm font-semibold text-white">Mehedi Sarker</p>
                <p className="text-xs text-gold">Founder &middot; Based in Malaysia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
