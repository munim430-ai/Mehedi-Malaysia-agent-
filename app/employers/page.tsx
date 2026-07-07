import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Services } from '@/sections/Services';
import { Sectors } from '@/sections/Sectors';
import { Process } from '@/sections/Process';
import { Testimonials } from '@/sections/Testimonials';
import { FAQSection } from '@/sections/FAQSection';
import { ContactSection } from '@/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Hire Verified Bangladeshi Workers',
  description:
    'Partner with MS Global Manpower to source verified, work-ready Bangladeshi workers for construction, manufacturing, plantation and F&B roles in Malaysia.',
};

const guarantees = [
  'Pre-screened, skills-verified candidates',
  'BMET-compliant documentation on every hire',
  '90-day replacement guarantee',
  'Bulk hiring support for factories & estates',
];

export default function EmployersPage() {
  return (
    <div className="pt-20">
      <section className="bg-navy-900 py-20">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              For Malaysian Employers
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Build Your Workforce With Verified Talent
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              From single hires to bulk factory or estate deployment, we manage sourcing,
              documentation and visa processing so you can focus on running your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {guarantees.map((g) => (
                <span
                  key={g}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-teal" />
                  {g}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <Link href="#consultation">
                <Button variant="gold" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="login" className="bg-surface py-4 dark:bg-navy-950">
        <div className="container flex items-center justify-center gap-2 py-4 text-sm text-text-secondary dark:text-slate-400">
          <LogIn className="h-4 w-4" />
          Existing employer partner? Contact your account manager directly via WhatsApp for the
          fastest response, or reach out below.
        </div>
      </section>

      <Services />
      <Sectors />
      <Process />
      <Testimonials />
      <FAQSection />
      <div id="consultation">
        <ContactSection />
      </div>
    </div>
  );
}
