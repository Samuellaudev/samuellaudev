import HeroSection from './components/HomePage/HeroSection';
import AboutSection from './components/HomePage/AboutSection';
import ProjectsSection from './components/HomePage/ProjectsSection';
import EmailSection from './components/HomePage/EmailSection';

export default function Home() {
  return (
    <div className="container mt-2 sm:mt-32 mx-auto py-4 px-12">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </div>
  );
}
