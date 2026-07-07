'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Briefcase, Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileMenu } from '@/components/nav/MobileMenu';

const employerLinks = [
  { label: 'Hire Workers', href: '/employers' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Sectors', href: '/#sectors' },
  { label: 'Success Stories', href: '/#testimonials' },
];

const candidateLinks = [
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Upload CV', href: '/contact#upload-cv' },
  { label: 'Career Tips', href: '/resources' },
  { label: 'Salary Guide', href: '/resources#salary-guide' },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 shadow-soft backdrop-blur-xl dark:bg-navy-900/80'
            : 'bg-transparent'
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-navy-900 shadow-gold`}
            >
              <Briefcase className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span
              className={`font-heading text-lg font-bold tracking-tighter ${
                scrolled ? 'text-navy-900 dark:text-white' : 'text-white'
              }`}
            >
              MS Global Manpower
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              {employerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    scrolled ? 'text-text-primary dark:text-slate-200' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="h-5 w-px bg-current opacity-20" />
            <div className="flex items-center gap-6">
              {candidateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    scrolled ? 'text-text-primary dark:text-slate-200' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle />
            <Link
              href="/employers#login"
              className={`text-sm font-medium hover:text-gold ${
                scrolled ? 'text-text-primary dark:text-slate-200' : 'text-white/90'
              }`}
            >
              Employer Login
            </Link>
            <Link href="/contact#upload-cv">
              <Button variant="gold" size="sm">
                <Sparkles className="h-4 w-4" />
                Submit Resume
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              scrolled ? 'text-navy-900 dark:text-white' : 'text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        employerLinks={employerLinks}
        candidateLinks={candidateLinks}
      />
    </>
  );
}
