import HeroSection from '@/components/HomePage/HeroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import BlogSection from '@/components/HomePage/BlogSection';
import PortfolioSection from '@/components/HomePage/PortfolioSection';
import FooterSection from '@/components/HomePage/FooterSection';
import MarqueeDevIcons from '@/components/Animation/MarqueeDevIcons';
import SmoothScroll from '@/components/Animation/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="container sm:mt-32 mx-auto py-4 px-4">
        <HeroSection />
        <AboutSection />
        <MarqueeDevIcons />
        <BlogSection />
        <PortfolioSection />
        <FooterSection />
      </div>
    </SmoothScroll>
  );
}
