import HeroSection from './components/HomePage/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/HomePage/AboutSection';
import ProjectsSection from './components/HomePage/ProjectsSection';
import EmailSection from './components/HomePage/EmailSection';
import FooterSection from './components/HomePage/FooterSection';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-2 sm:mt-32 mx-auto py-4 px-12">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
