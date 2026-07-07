'use client';

import * as React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ScrollReveal';
import testimonialsData from '@/data/testimonials.json';

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const perView = 3;

  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const visible = Array.from({ length: perView }, (_, i) => testimonialsData[(index + i) % testimonialsData.length]);

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-24 dark:bg-navy-900 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Success Stories
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
            Trusted by Workers and Employers Alike
          </h2>
        </ScrollReveal>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {visible.map((t) => (
            <Card key={t.id} className="flex flex-col p-7">
              <Quote className="mb-4 h-8 w-8 text-gold/40" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-text-primary dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-heading text-sm font-semibold text-navy-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-text-secondary dark:text-slate-400">{t.role}</p>
                </div>
                <Badge variant={t.type === 'employer' ? 'teal' : 'gold'}>
                  {t.type === 'employer' ? 'Employer' : 'Worker'}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonialsData.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-gold' : 'w-2 bg-navy-900/15 dark:bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
