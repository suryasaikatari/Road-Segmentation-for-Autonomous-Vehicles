import SectionHeading from '@/components/report/SectionHeading';

const steps = [
  {
    title: 'Data collection',
    text: 'Gather street-level images paired with pixel-accurate road masks from public autonomous driving datasets.',
  },
  {
    title: 'Preprocessing',
    text: 'Resize frames to a fixed resolution, normalize pixel values with ImageNet statistics, and apply random flips and brightness changes.',
  },
  {
    title: 'Model',
    text: 'Use an encoder-decoder network with a pretrained backbone so that it starts with general visual features.',
  },
  {
    title: 'Training',
    text: 'Optimize pixel-wise cross-entropy loss with the Adam optimizer, using a validation split to choose the best epoch.',
  },
  {
    title: 'Evaluation',
    text: 'Score predictions on held-out images using overlap and accuracy metrics, then inspect failure cases visually.',
  },
];

const models = [
  {
    name: 'FCN',
    idea: 'Replaces the final classification layers of a CNN with convolutions and upsamples to a full-size map.',
    strength: 'Simple, fast, and the foundation for later work.',
    weakness: 'Coarse boundaries because fine detail is lost during downsampling.',
  },
  {
    name: 'U-Net',
    idea: 'Encoder-decoder with skip connections that copy fine detail from early layers into the decoder.',
    strength: 'Sharp boundaries and strong results with limited data.',
    weakness: 'Memory-hungry at high resolution.',
  },
  {
    name: 'DeepLabV3',
    idea: 'Uses atrous (dilated) convolutions and multi-scale pooling to capture context without losing resolution.',
    strength: 'Strong accuracy on urban scenes; pretrained weights are readily available.',
    weakness: 'Heavier than lightweight alternatives; slower on small devices.',
  },
];

const metrics = [
  { name: 'Intersection over Union (IoU)', text: 'Overlap between predicted road and true road, divided by their combined area. The main score.' },
  { name: 'Pixel accuracy', text: 'Share of all pixels labeled correctly. Easy to read but flattered by large road areas.' },
  { name: 'F1 / Dice score', text: 'Balances precision and recall, which matters when road pixels are the minority class.' },
  { name: 'Frames per second', text: 'Inference speed on the target hardware, to judge real-time suitability.' },
];

export default function MethodologySection() {
  return (
    <section className="space-y-12">
      <SectionHeading id="methodology" number="2" title="Methodology / Approach">
        The study followed a standard supervised learning pipeline: labeled data in, a trained segmentation model out, and
        measured performance on images the model never saw during training.
      </SectionHeading>

      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-teal-300"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 leading-[1.5] text-slate-600">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-900">Models considered</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {models.map((model) => (
            <div key={model.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-teal-800">{model.name}</h4>
              <p className="mt-2 flex-1 text-sm leading-[1.5] text-slate-600">{model.idea}</p>
              <dl className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm">
                <div>
                  <dt className="font-semibold text-emerald-700">Strength</dt>
                  <dd className="text-slate-600">{model.strength}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-amber-700">Weakness</dt>
                  <dd className="text-slate-600">{model.weakness}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-900">Evaluation metrics</h3>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-6 py-3 font-semibold">Metric</th>
                <th className="px-6 py-3 font-semibold">What it tells us</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {metrics.map((metric) => (
                <tr key={metric.name} className="transition-colors hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{metric.name}</td>
                  <td className="px-6 py-4 leading-[1.5] text-slate-600">{metric.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
