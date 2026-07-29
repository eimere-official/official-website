import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import WhatWeDo from '../components/WhatWeDo';
import ServicesGrid from '../components/ServicesGrid';
import IndustriesSection from '../components/IndustriesSection';
import WhyEimereSection from '../components/WhyEimereSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import ExpertTeamSection from '../components/ExpertTeamSection';
import ResultsSection from '../components/ResultsSection';
import CommitmentSection from '../components/CommitmentSection';
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
        <WhatWeDo />
      </div>
      
      <div id="services">
        <ServicesGrid />
      </div>
      
      <div id="industries">
        <IndustriesSection />
      </div>
      
      <div id="why-us">
        <WhyEimereSection />
      </div>
      
      <div id="process">
        <HowWeWorkSection />
      </div>
      
      <div id="team">
        <ExpertTeamSection />
      </div>
      
      <div id="case-studies">
        <ResultsSection />
      </div>
      
      <div id="commitment">
        <CommitmentSection />
      </div>
      
      <ClosingCTASection />
      
      <ContactSection />
    </main>
  );
}
