import { ShieldCheck } from 'lucide-react';

const clients = [
  'Prestige Bina Construction',
  'Cempaka Electronics',
  'Golden Harvest Plantation',
  'Sakura F&B Group',
  'Selatan Glove Industries',
  'Permata Hospitality',
  'Menara Jaya Builders',
  'Ladang Makmur Agro',
];

export function TrustBar() {
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="border-b border-navy-900/5 bg-white py-12 dark:border-white/5 dark:bg-navy-900">
      <div className="container mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary dark:text-slate-400">
          Trusted by employers across Malaysia
        </p>
        <div className="flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2">
          <ShieldCheck className="h-4 w-4 text-teal" />
          <span className="text-xs font-medium text-teal">
            Registered Overseas Employment Agency &middot; BMET &amp; BAIRA
          </span>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {marqueeItems.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight text-navy-900/25 dark:text-white/20"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
