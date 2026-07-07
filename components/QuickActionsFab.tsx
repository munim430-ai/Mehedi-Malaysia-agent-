'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, MessageCircle, FileUp, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { whatsappLink } from '@/lib/site';

const actions = [
  {
    label: 'Call Now',
    icon: Phone,
    href: 'tel:+8801646794359',
    color: 'bg-navy-900',
  },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: whatsappLink('Hi, I would like to speak with MS Global Manpower.'),
    color: 'bg-teal',
    external: true,
  },
  {
    label: 'Upload CV',
    icon: FileUp,
    href: '/contact#upload-cv',
    color: 'bg-gold',
  },
];

export function QuickActionsFab() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 lg:hidden">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.8 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="rounded-full bg-navy-900 px-3 py-1.5 text-xs font-medium text-white shadow-soft">
                {action.label}
              </span>
              {action.external ? (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lift ${action.color}`}
                >
                  <action.icon className="h-5 w-5" />
                </a>
              ) : (
                <Link
                  href={action.href}
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lift ${action.color}`}
                >
                  <action.icon className="h-5 w-5" />
                </Link>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Quick actions"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-900 shadow-gold transition-transform active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
}
