import { AlertTriangle, Map, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '@/components/report/SectionHeading';

const importance = [
  {
    icon: ShieldCheck,
    title: 'Safety',
    text: 'A vehicle must know exactly where the drivable surface ends to avoid curbs, pedestrians on the shoulder, and oncoming traffic.',
  },
  {
    icon: Map,
    title: 'Navigation',
    text: 'Path planning depends on a reliable map of free space around the car, especially where lane paint is worn or missing.',
  },
  {
    icon: Zap,
    title: 'Speed of decisions',
    text: 'Per-pixel road masks give the planner a dense, real-time picture of the scene that is far richer than a few bounding boxes.',
  },
];

const challenges = [
  'Lighting and weather changes: night, glare, rain, snow, and shadows alter road appearance.',
  'Class imbalance: road pixels dominate some scenes while thin lane markings and curbs are rare.',
  'Visually similar surfaces: sidewalks, parking lots, and dirt shoulders can look like road.',
  'Real-time limits: the model must run many frames per second on in-car hardware.',
  'Generalization: a model trained in one city can perform poorly in another.',
];

const applications = [
  'Lane keeping and drivable-area detection for driver-assistance systems.',
  'Free-space mapping for path planning and collision avoidance.',
  'Automated map updates from fleet camera footage.',
  'Robotics and delivery vehicles operating on paved and unpaved surfaces.',
];

export default function ProblemSection() {
  return (
    <section className="space-y-12">
      <SectionHeading id="problem" number="1" title="Problem Statement">
        Defining the domain, why it matters, and what this study sets out to solve.
      </SectionHeading>

      <div className="space-y-4 text-lg leading-[1.5] text-slate-700">
        <h3 className="text-xl font-semibold text-slate-900">Background</h3>
        <p>
          Autonomous driving relies on perception: turning raw camera images into an understanding of the scene. Semantic
          segmentation is a perception task that assigns a class label to every pixel in an image, such as road, car,
          pedestrian, or sky. Road segmentation is the focused case of separating the drivable surface from everything else.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-900">Why it matters</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {importance.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <Icon className="h-5 w-5" />
              </span>
              <h4 className="font-semibold text-slate-900">{title}</h4>
              <p className="mt-2 text-sm leading-[1.5] text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-8">
        <h3 className="text-xl font-semibold text-slate-900">Objective</h3>
        <p className="mt-3 text-lg leading-[1.5] text-slate-700">
          Build and evaluate a deep learning model that labels each pixel of a street-level camera image as road or
          non-road, measure its accuracy with standard overlap metrics, and assess whether it is fast and reliable enough
          to inform driving decisions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Challenges
          </h3>
          <ul className="space-y-3 text-slate-700">
            {challenges.map((item) => (
              <li key={item} className="flex gap-3 leading-[1.5]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-900">Applications</h3>
          <ul className="space-y-3 text-slate-700">
            {applications.map((item) => (
              <li key={item} className="flex gap-3 leading-[1.5]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
