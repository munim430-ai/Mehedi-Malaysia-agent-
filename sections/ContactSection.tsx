'use client';

import * as React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, UploadCloud, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { siteConfig, whatsappLink } from '@/lib/site';

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [fileName, setFileName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="upload-cv" className="scroll-mt-24 bg-surface py-24 dark:bg-navy-950 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
            Book a Free 30-Minute Consultation
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-slate-400">
            Whether you&rsquo;re hiring or job-hunting, tell us what you need and we&rsquo;ll
            respond within one business day.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal>
            <Card className="p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="mb-4 h-14 w-14 text-teal" />
                  <h3 className="font-heading text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-text-secondary dark:text-slate-400">
                    We&rsquo;ve received your details. Our team will reach out within one
                    business day to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input required placeholder="Full name" name="name" />
                  <Input required type="email" placeholder="Email address" name="email" />
                  <Input required placeholder="Phone / WhatsApp number" name="phone" />
                  <Input placeholder="Company (if hiring)" name="company" />
                  <Textarea
                    required
                    placeholder="Tell us about the role you're hiring for, or the job you're looking for..."
                    name="message"
                    className="sm:col-span-2"
                  />
                  <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-navy-900/15 px-4 py-8 text-center transition-colors hover:border-gold dark:border-white/15 sm:col-span-2">
                    <UploadCloud className="h-6 w-6 text-gold-dark" />
                    <span className="text-sm font-medium text-text-primary dark:text-slate-300">
                      {fileName || 'Upload your CV or a job description (PDF, DOC)'}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                    />
                  </label>
                  <Button type="submit" variant="gold" size="lg" className="sm:col-span-2">
                    Book My Free Consultation
                  </Button>
                </form>
              )}
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-col gap-5">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy-900 dark:text-white">
                    Our Offices
                  </p>
                  <p className="mt-1 text-sm text-text-secondary dark:text-slate-400">
                    {siteConfig.addressMalaysia}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-slate-400">
                    {siteConfig.addressBangladesh}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy-900 dark:text-white">
                    Phone / WhatsApp
                  </p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-text-secondary transition-colors hover:text-gold-dark dark:text-slate-400"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900/5 text-navy-900 dark:bg-white/10 dark:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-text-secondary transition-colors hover:text-gold-dark dark:text-slate-400"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy-900 dark:text-white">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm text-text-secondary dark:text-slate-400">
                    {siteConfig.hours}
                  </p>
                </div>
              </div>
            </Card>

            <a
              href={whatsappLink('Hi, I would like to book a free consultation.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="teal" className="w-full">
                <MessageCircle className="h-4 w-4" />
                Chat With Us on WhatsApp
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
