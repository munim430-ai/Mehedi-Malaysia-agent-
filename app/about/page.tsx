import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ScrollReveal';
import teamData from '@/data/team.json';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'MS Global Manpower is a Malaysia-based recruitment agency led by Mehedi Sarker, connecting Bangladeshi workers with verified Malaysian employers.',
};

export default function AboutPage() {
  const founder = teamData[0];
  const team = teamData.slice(1);

  return (
    <div className="pt-20">
      <section className="bg-navy-900 py-20 text-center">
        <div className="container">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            About Us
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tighter text-white sm:text-5xl">
            Built on Trust, Between Two Countries
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-navy-900 sm:py-28">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-text-secondary dark:text-slate-400">
              MS Global Manpower was founded to solve a problem that plagues overseas recruitment
              in Bangladesh: the gap between what workers are promised and what they actually
              receive in Malaysia. We work only with verified Malaysian employers holding valid
              foreign worker quota approval, and every candidate we place has been screened for
              skills, health clearance and genuine intent to work.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary dark:text-slate-400">
              Because our founder is based in Malaysia — not operating remotely from Dhaka alone —
              we can visit worksites, verify conditions, and stay accountable to both sides of
              every placement. That accountability is why employers return for repeat bulk
              hiring, and why workers refer their friends and family to us.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary dark:text-slate-400">
              Our mission is straightforward: honest, transparent, end-to-end recruitment between
              Bangladesh and Malaysia — for construction sites, factory floors, plantations and
              hospitality venues alike.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]">
            <ScrollReveal>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gold/10 blur-3xl" />
                <div className="relative aspect-square overflow-hidden rounded-full border-4 border-gold/50 shadow-lift">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="384px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gold px-5 py-2 shadow-gold">
                  <Award className="h-4 w-4 text-navy-900" />
                  <span className="text-xs font-bold text-navy-900">Founder</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                {founder.name}
              </h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-gold" />
                {founder.role}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                {founder.bio}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-navy-900 sm:py-28">
        <div className="container">
          <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Our Team
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
              The People Behind Every Placement
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.08}>
                <Card className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy-900/5 text-2xl font-bold text-navy-900 dark:bg-white/10 dark:text-white">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-heading text-base font-semibold tracking-tighter text-navy-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold-dark">{member.role}</p>
                  <p className="mt-3 text-sm text-text-secondary dark:text-slate-400">{member.bio}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
