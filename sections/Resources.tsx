'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, FileText, X, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollReveal } from '@/components/ScrollReveal';
import resourcesData from '@/data/resources.json';

export function Resources() {
  const [activeResource, setActiveResource] = React.useState<(typeof resourcesData)[number] | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const closeModal = () => {
    setActiveResource(null);
    setSubmitted(false);
  };

  return (
    <section id="salary-guide" className="scroll-mt-24 bg-surface py-24 dark:bg-navy-950 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
            Resource Center
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
            Salary Guides &amp; Insights
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-slate-400">
            Free, downloadable resources for employers and job seekers navigating Malaysia
            employment.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resourcesData.map((resource, i) => (
            <ScrollReveal key={resource.id} delay={(i % 4) * 0.06}>
              <Card className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-gold-dark dark:bg-white/10">
                  <FileText className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="mb-3 w-fit">
                  {resource.category}
                </Badge>
                <h3 className="font-heading text-base font-semibold tracking-tighter text-navy-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-text-secondary dark:text-slate-400">
                  {resource.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-text-secondary dark:text-slate-500">
                    PDF &middot; {resource.fileSize}
                  </span>
                  <Button size="sm" variant="ghost" onClick={() => setActiveResource(resource)}>
                    <Download className="h-4 w-4" />
                    Get PDF
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/70 px-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-lift dark:bg-navy-800"
            >
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-5 top-5 text-text-secondary hover:text-navy-900 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-teal" />
                  <h3 className="font-heading text-xl font-bold tracking-tighter text-navy-900 dark:text-white">
                    Check your inbox
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-slate-400">
                    We&rsquo;ve sent &ldquo;{activeResource.title}&rdquo; to your email address.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-xl font-bold tracking-tighter text-navy-900 dark:text-white">
                    Download: {activeResource.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary dark:text-slate-400">
                    Enter your details and we&rsquo;ll send the PDF straight to your inbox.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-6 flex flex-col gap-3"
                  >
                    <Input required placeholder="Full name" />
                    <Input required type="email" placeholder="Email address" />
                    <Button type="submit" variant="gold" className="w-full">
                      Download PDF
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
