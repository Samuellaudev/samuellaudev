import HeroSection from '@/components/HomePage/HeroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import BlogSection from '@/components/HomePage/BlogSection';
import ProjectsSection from '@/components/HomePage/ProjectsSection';

export default function Home() {
  return (
    <div className="container sm:mt-32 mx-auto py-4 px-12">
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <ProjectsSection />
    </div>
  );
}
