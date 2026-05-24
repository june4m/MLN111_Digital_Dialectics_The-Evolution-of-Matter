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

/**
 * All content sections share a single page background (--bg-page).
 * Light mode: #F8FAFC  |  Dark mode: #0F172A
 * Cards inside sections use bg-white dark:bg-slate-800 for elevation.
 * Footer is intentionally distinct: bg-blue-950 (both modes).
 */
function App() {
  return (
    <div
      className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      <Navbar />

      {/* Hero has its own gradient — no wrapper */}
      <HeroSection />

      {/* All content sections share the same page background */}
      <SectionWrapper><TimelineSection /></SectionWrapper>
      <SectionWrapper><AncientMaterialismSection /></SectionWrapper>
      <SectionWrapper><ScientificRevolutionSection /></SectionWrapper>
      <SectionWrapper><MatterDissolvesSimulation /></SectionWrapper>
      <SectionWrapper><LeninDefinitionSection /></SectionWrapper>
      <SectionWrapper><CategoryInstanceActivity /></SectionWrapper>
      <SectionWrapper><QuizSection /></SectionWrapper>
      <SectionWrapper><ReferencesSection /></SectionWrapper>

      {/* Footer is its own distinct color */}
      <Footer />
    </div>
  );
}

export default App;
