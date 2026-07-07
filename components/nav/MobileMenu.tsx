'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsappLink } from '@/lib/site';

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  employerLinks: NavLink[];
  candidateLinks: NavLink[];
}

export function MobileMenu({ open, onClose, employerLinks, candidateLinks }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex flex-col bg-navy-900 text-white lg:hidden"
        >
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-navy-900">
                <Briefcase className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-heading text-lg font-bold tracking-tighter">
                MS Global Manpower
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="container flex flex-1 flex-col justify-center gap-10 pb-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
                For Employers
              </p>
              <div className="flex flex-col gap-4">
                {employerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="font-heading text-2xl font-semibold tracking-tighter"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
                For Job Seekers
              </p>
              <div className="flex flex-col gap-4">
                {candidateLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="font-heading text-2xl font-semibold tracking-tighter"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Link href="/contact#upload-cv" onClick={onClose}>
                <Button variant="gold" className="w-full">
                  Submit Resume
                </Button>
              </Link>
              <a href={whatsappLink('Hi, I would like to know more about job opportunities in Malaysia.')} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
