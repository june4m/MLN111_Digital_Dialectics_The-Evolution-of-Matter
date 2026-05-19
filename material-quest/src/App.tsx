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
    <main className="bg-slate-950 text-slate-100">
      <HeroSection />
      <TimelineSection />
      <AncientMaterialismSection />
      <ScientificRevolutionSection />
      <MatterDissolvesSimulation />
      <LeninDefinitionSection />
      <CategoryInstanceActivity />
      <QuizSection />
      <ReferencesSection />
    </main>
  );
}

export default App;
