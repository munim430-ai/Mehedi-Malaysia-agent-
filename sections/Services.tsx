import Link from 'next/link';
import { Building2, Check, UserCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const employerFeatures = [
  'End-to-end sourcing for construction, manufacturing, plantation & F&B roles',
  'Sector-specific worker screening and skills verification',
  'BMET-compliant documentation & visa processing coordination',
  'Replacement guarantee within 90 days',
];

const candidateFeatures = [
  'Access to verified, unadvertised Malaysia job openings',
  'CV preparation and interview coaching in Bangla & English',
  'Direct introductions to Malaysian hiring employers',
  'Post-arrival support during your first months in Malaysia',
];

export function Services() {
  return (
    <section className="bg-canvas py-24 dark:bg-navy-950 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
            One Agency, Two Missions
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-slate-400">
            Whether you&rsquo;re building a workforce or building a career, we manage the entire
            journey between Bangladesh and Malaysia.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <Card className="h-full p-2 transition-transform duration-300 hover:-translate-y-1.5">
              <div className="p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">
                  Foreign Worker Sourcing
                </h3>
                <p className="mt-2 text-text-secondary dark:text-slate-400">
                  For Malaysian Employers
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {employerFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                      <span className="text-sm text-text-primary dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/employers#consultation">
                  <Button variant="navy" className="mt-8 w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Card className="h-full border-gold/30 p-2 transition-transform duration-300 hover:-translate-y-1.5">
              <div className="p-6">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-navy-900">
                  <UserCheck className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">
                  Career Placement Services
                </h3>
                <p className="mt-2 text-text-secondary dark:text-slate-400">
                  For Bangladeshi Job Seekers
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {candidateFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                      <span className="text-sm text-text-primary dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#upload-cv">
                  <Button variant="gold" className="mt-8 w-full sm:w-auto">
                    Upload Your CV
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
