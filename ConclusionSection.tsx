import SectionHeading from '@/components/report/SectionHeading';

const findings = [
  'Semantic segmentation turns each camera frame into a precise map of drivable road, which is directly useful for planning.',
  'A pretrained encoder-decoder model reaches usable accuracy quickly, but robustness to weather, lighting, and new cities is the main open problem.',
  'Overlap-based metrics and visual inspection of failures together give a more honest picture than a single accuracy number.',
];

export default function ConclusionSection() {
  return (
    <section className="space-y-10">
      <SectionHeading id="conclusion" number="5" title="Conclusion" />
      <ul className="space-y-4">
        {findings.map((item) => (
          <li key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
            <p className="text-lg leading-[1.5] text-slate-700">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
