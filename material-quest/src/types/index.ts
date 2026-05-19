export interface TimelineMilestone {
  id: string;
  title: string;
  period: string;
  explanation: string;
  icon: string; // Lucide icon name
}

export interface FiveElement {
  id: string;
  name: string;        // e.g. "Kim"
  character: string;   // Chinese character
  color: string;       // Tailwind color class
  explanation: string;
}

export interface PhilosopherCard {
  id: string;
  name: string;        // "Thales" | "Heraclitus"
  element: string;     // "Water" | "Fire"
  explanation: string;
}

export interface ScientificDiscovery {
  id: string;
  year: number;
  scientist: string;
  discovery: string;
  philosophicalImpact: string;
}

export interface LeninPhrase {
  id: string;
  phrase: string;
  explanation: string;
  example: string;
}

export interface ClassifyItem {
  id: string;
  name: string;
  correctCategory: 'philosophical' | 'concrete';
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Reference {
  id: string;
  title: string;
  year?: string;
  url?: string;
  description: string;
}
