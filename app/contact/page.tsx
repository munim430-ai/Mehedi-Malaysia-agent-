import type { Metadata } from 'next';
import { ContactSection } from '@/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact & Book a Consultation',
  description:
    'Get in touch with MS Global Manpower to hire verified Bangladeshi workers or apply for jobs in Malaysia. WhatsApp, email and consultation booking available.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
