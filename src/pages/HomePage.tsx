import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ServicesGrid from '../components/ServicesGrid';
import WhyEimereSection from '../components/WhyEimereSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import ResultsSection from '../components/ResultsSection';
import ContactSection from '../components/ContactSection';
import ClosingCTASection from '../components/ClosingCTASection';

export default function HomePage() {
  return (
    <main>
      <div id="home">
        <HeroSection />
        <StatsBar />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="services">
        <ServicesGrid />
      </div>
      
      
      <div id="why-us">
        <WhyEimereSection />
      </div>
      
      <div id="process">
        <HowWeWorkSection />
      </div>
      
      <div id="case-studies">
        <ResultsSection />
      </div>
      
      <ClosingCTASection />
      
      <ContactSection />
    </main>
  );
}
