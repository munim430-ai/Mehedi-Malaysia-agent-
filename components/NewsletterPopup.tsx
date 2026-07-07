'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterPopup() {
  const [show, setShow] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem('newsletter-dismissed')) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    window.sessionStorage.setItem('newsletter-dismissed', '1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(close, 1600);
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/70 px-4 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-lift dark:bg-navy-800"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 text-text-secondary hover:text-navy-900 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold-dark">
              <Mail className="h-6 w-6" />
            </div>

            {submitted ? (
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">
                  You&rsquo;re on the list!
                </h3>
                <p className="mt-2 text-sm text-text-secondary dark:text-slate-400">
                  Watch your inbox for weekly Malaysia job alerts and visa updates.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold tracking-tighter text-navy-900 dark:text-white">
                  Join 5,000+ professionals
                </h3>
                <p className="mt-2 text-sm text-text-secondary dark:text-slate-400">
                  Get weekly Malaysia job alerts, visa process updates and salary guides sent
                  straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <Input type="email" required placeholder="you@example.com" />
                  <Button type="submit" variant="gold" className="w-full">
                    Get Job Alerts
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
