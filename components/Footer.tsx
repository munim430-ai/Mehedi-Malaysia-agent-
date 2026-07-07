import Link from 'next/link';
import { Briefcase, Facebook, MessageCircle, Mail, ShieldCheck } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/lib/site';

const employerLinks = [
  { label: 'Hire Workers', href: '/employers' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Sectors We Serve', href: '/#sectors' },
  { label: 'Success Stories', href: '/#testimonials' },
  { label: 'Employer FAQ', href: '/#faq' },
];

const candidateLinks = [
  { label: 'Find Jobs in Malaysia', href: '/jobs' },
  { label: 'Upload CV', href: '/contact#upload-cv' },
  { label: 'Visa Process Guide', href: '/resources' },
  { label: 'Salary Guide', href: '/resources#salary-guide' },
  { label: 'Worker FAQ', href: '/#faq' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-navy-900">
                <Briefcase className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-heading text-lg font-bold tracking-tighter text-white">
                MS Global Manpower
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}. Sourcing verified Bangladeshi talent for Malaysian employers
              across construction, manufacturing, plantation and hospitality.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink('Hi, I would like to know more about MS Global Manpower.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              For Employers
            </p>
            <ul className="flex flex-col gap-3">
              {employerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              For Job Seekers
            </p>
            <ul className="flex flex-col gap-3">
              {candidateLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-heading text-sm font-semibold uppercase tracking-widest text-white">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-2 text-xs text-slate-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{siteConfig.license}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; 2026 MS Global Manpower. All rights reserved. | Licensed Overseas Employment Agency</p>
          <p>Kuala Lumpur, Malaysia &middot; Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
