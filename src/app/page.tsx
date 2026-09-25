import HeroSection from '@/components/home/HeroSection';
import WhoWeSupport from '@/components/home/WhoWeSupport';
import ServicesBento from '@/components/home/ServicesBento';
import WhyKoina from '@/components/home/WhyKoina';
import HomeFAQ from '@/components/home/HomeFAQ';
import ClosingCTA from '@/components/home/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeSupport />
      <ServicesBento />
      <WhyKoina />
      <HomeFAQ />
      <ClosingCTA />
    </>
  );
}
