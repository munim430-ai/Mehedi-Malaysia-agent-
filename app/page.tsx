import { Hero } from '@/sections/Hero';
import { TrustBar } from '@/sections/TrustBar';
import { Services } from '@/sections/Services';
import { Sectors } from '@/sections/Sectors';
import { JobsBoard } from '@/sections/JobsBoard';
import { Testimonials } from '@/sections/Testimonials';
import { Process } from '@/sections/Process';
import { Resources } from '@/sections/Resources';
import { FAQSection } from '@/sections/FAQSection';
import { AboutTeaser } from '@/sections/AboutTeaser';
import { ContactSection } from '@/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Sectors />
      <JobsBoard limit={6} />
      <Testimonials />
      <Process />
      <Resources />
      <FAQSection />
      <AboutTeaser />
      <ContactSection />
    </>
  );
}
