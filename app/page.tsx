import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Waterproofing from '@/components/Waterproofing';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termite Control in Dehradun | Anti-Termite Treatment with 10-Yr Warranty',
  description:
    'Expert termite control in Dehradun by Doon Earth Solution. Anti-termite piping, drill-fill-seal & soil treatment with written multi-year warranty. Free inspection. Call now.',
  keywords: [
    'termite control Dehradun',
    'anti termite treatment Dehradun',
    'pest control Dehradun',
    'pre construction termite treatment Dehradun',
    'termite treatment near me',
    'anti termite piping Dehradun',
  ],
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Waterproofing />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
