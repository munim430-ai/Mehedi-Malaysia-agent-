import { Search, Users, ClipboardCheck, PlaneTakeoff } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We understand your role requirements or career goals in detail before sourcing begins.',
  },
  {
    icon: Users,
    title: 'Sourcing',
    description: 'Access our 50,000+ candidate database across construction, manufacturing, plantation and F&B.',
  },
  {
    icon: ClipboardCheck,
    title: 'Documentation & Visa',
    description: 'BMET clearance, medical screening and Malaysia work visa processing handled end to end.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Deployment',
    description: 'Flight coordination, on-arrival onboarding, and ongoing follow-up support in Malaysia.',
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-navy-900 py-24 sm:py-32">
      <div className="container">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            How It Works
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Our Recruitment Process
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A structured, transparent path from first contact to deployment in Malaysia.
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark text-navy-900 shadow-gold">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="mb-2 font-heading text-xs font-bold tracking-widest text-gold">
                  STEP {i + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold tracking-tighter text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
