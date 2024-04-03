import HomeHero from '@/components/home/HomeHero';
import HomeSectionOne from '@/components/home/HomeSectionOne';
import PortfolioSection from '@/components/home/PortfolioSection';
// import HomeHero from '@/components/home/HomeHeroCopy';
import SomeText from '@/components/home/SomeText';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSectionOne />
      {/* <SomeText /> */}
      <PortfolioSection />
    </>
  );
}
