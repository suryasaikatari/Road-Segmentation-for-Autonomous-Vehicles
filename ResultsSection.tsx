import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';
import SectionHeading from '@/components/report/SectionHeading';

const strengths = [
  'Pixel-level masks give the planner dense free-space information, not just object boxes.',
  'Pretrained backbones converge quickly, so useful accuracy appears within a few epochs.',
  'Clear visual outputs make it easy to check whether the model is looking at the right surface.',
];

const weaknesses = [
  'Performance drops at night, in heavy rain, and when lane paint is worn away.',
  'Boundaries between road and sidewalk or curb are often blurry at low resolution.',
  'A model trained on one dataset can lose accuracy on footage from a different city or camera.',
];

const insights = [
  'Overlap metrics such as IoU are more informative than pixel accuracy, because road often fills most of the frame.',
  'Errors cluster at the edges of the road and in shadowed regions, which points to data augmentation and higher input resolution as the most useful levers.',
  'Combining training data from several datasets is a practical route to better generalization.',
];

export default function ResultsSection() {
  return (
    <section className="space-y-12">
      <SectionHeading id="results" number="4" title="Results Analysis and Discussion">
        This section interprets what the trained model did well, where it failed, and what those patterns imply for
        real-world use.
      </SectionHeading>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-6 py-3 font-semibold">Metric</th>
              <th className="px-6 py-3 font-semibold">Validation</th>
              <th className="px-6 py-3 font-semibold">Test</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {['Road IoU', 'Pixel accuracy', 'F1 / Dice', 'Frames per second'].map((metric) => (
              <tr key={metric} className="transition-colors hover:bg-slate-50">
                <td className="px-6 py-4 font-medium text-slate-900">{metric}</td>
                <td className="px-6 py-4 text-slate-400">Enter from your run</td>
                <td className="px-6 py-4 text-slate-400">Enter from your run</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Strengths
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-[1.5] text-slate-700">
            {strengths.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <XCircle className="h-5 w-5 text-rose-600" />
            Weaknesses
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-[1.5] text-slate-700">
            {weaknesses.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          Key insights
        </h3>
        <ol className="space-y-4">
          {insights.map((item, index) => (
            <li key={item} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <span className="font-mono text-sm font-semibold text-teal-700">0{index + 1}</span>
              <p className="leading-[1.5] text-slate-700">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
