import { Car } from 'lucide-react';
import ProblemSection from '@/components/report/ProblemSection';
import MethodologySection from '@/components/report/MethodologySection';
import ImplementationSection from '@/components/report/ImplementationSection';
import ResultsSection from '@/components/report/ResultsSection';
import ConclusionSection from '@/components/report/ConclusionSection';
import ReferencesSection from '@/components/report/ReferencesSection';

const sections = [
  { id: 'problem', label: 'Problem Statement' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'results', label: 'Results' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'references', label: 'References' },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
          <a href="#top" className="flex shrink-0 items-center gap-2 font-semibold text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
              <Car className="h-4 w-4" />
            </span>
            Road Segmentation
          </a>
          <ul className="flex flex-1 gap-1 overflow-x-auto text-sm">
            {sections.map((section) => (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  className="block rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-800"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header id="top" className="relative isolate overflow-hidden bg-slate-900">
        <img
          src="https://images.pexels.com/photos/32461216/pexels-photo-32461216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="A self-driving car navigating a city street"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30" />
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-300">Case Study | Artificial Intelligence</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-6xl">
            Road Segmentation for Autonomous Vehicles
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.5] text-slate-200">
            How deep learning models learn to tell drivable road apart from everything else in a camera frame, and what that means for safe self-driving.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-24 px-6 py-20">
        <ProblemSection />
        <MethodologySection />
        <ImplementationSection />
        <ResultsSection />
        <ConclusionSection />
        <ReferencesSection />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-slate-500">
          Road Segmentation for Autonomous Vehicles | Case Study
        </div>
      </footer>
    </div>
  );
}

export default App;
