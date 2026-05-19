import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import AncientMaterialismSection from './components/AncientMaterialismSection';
import ScientificRevolutionSection from './components/ScientificRevolutionSection';
import MatterDissolvesSimulation from './components/MatterDissolvesSimulation';
import LeninDefinitionSection from './components/LeninDefinitionSection';
import CategoryInstanceActivity from './components/CategoryInstanceActivity';
import QuizSection from './components/QuizSection';
import ReferencesSection from './components/ReferencesSection';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Navbar />

      <HeroSection />

      <SectionWrapper><TimelineSection /></SectionWrapper>
      <SectionWrapper><AncientMaterialismSection /></SectionWrapper>
      <SectionWrapper><ScientificRevolutionSection /></SectionWrapper>
      <SectionWrapper><MatterDissolvesSimulation /></SectionWrapper>
      <SectionWrapper><LeninDefinitionSection /></SectionWrapper>
      <SectionWrapper><CategoryInstanceActivity /></SectionWrapper>
      <SectionWrapper><QuizSection /></SectionWrapper>
      <SectionWrapper><ReferencesSection /></SectionWrapper>

      <Footer />
    </div>
  );
}

export default App;
