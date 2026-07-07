import Image from 'next/image';
import Link from 'next/link';
import { Award, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

export function AboutTeaser() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-gold/50 shadow-lift">
                <Image
                  src="/images/mehedi-hasan.jpg"
                  alt="Mehedi Sarker, Founder of MS Global Manpower"
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              Meet Your Recruiter
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Mehedi Sarker
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-gold" />
              Founder &amp; Lead Recruitment Consultant &middot; Based in Malaysia
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Living and working directly in Malaysia gives Mehedi first-hand insight into what
              employers actually need — and what workers actually experience once they arrive.
              That on-the-ground perspective shapes every placement MS Global Manpower makes,
              from candidate screening in Dhaka to onboarding on the factory floor in Selangor.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              His vision is simple: recruitment that&rsquo;s honest on both ends — verified
              employers for workers, and verified, work-ready talent for employers.
            </p>
            <Link href="/about">
              <Button variant="gold" className="mt-8">
                Read Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
