import { Accordion } from '@/components/ui/accordion';
import { ScrollReveal } from '@/components/ScrollReveal';
import faqData from '@/data/faq.json';

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24 dark:bg-navy-900 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-dark">
              FAQ
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tighter text-navy-900 dark:text-white sm:text-4xl">
              Common Questions
            </h2>
            <p className="mt-4 text-lg text-text-secondary dark:text-slate-400">
              Answers for both employers hiring in Malaysia and Bangladeshi workers applying for
              roles.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Accordion items={faqData} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
