import HeroSection from '@/components/HomePage/HeroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import BlogSection from '@/components/HomePage/BlogSection';
import PortfolioSection from '@/components/HomePage/PortfolioSection';

export default function Home() {
  return (
    <div className="container sm:mt-32 mx-auto py-4 px-6">
      <HeroSection />
      <AboutSection />
      {/* <BlogSection /> */}
      <PortfolioSection />
    </div>
  );
}
