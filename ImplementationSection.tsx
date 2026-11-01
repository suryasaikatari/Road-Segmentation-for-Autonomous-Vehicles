import { ImageIcon } from 'lucide-react';
import SectionHeading from '@/components/report/SectionHeading';

const datasets = [
  {
    name: 'KITTI Road Benchmark',
    details: [
      'Street-level images captured from a car in Karlsruhe, Germany, at roughly 1242 x 375 pixels.',
      'About 289 training images with road and lane annotations, plus a separate test set with hidden labels.',
      'Well suited to driving-specific evaluation and to comparing results with published benchmarks.',
    ],
  },
  {
    name: 'Cityscapes',
    details: [
      'About 5,000 finely annotated urban street scenes at 2048 x 1024 pixels, recorded across 50 cities.',
      'Pixel labels for 19 classes, including road, sidewalk, car, and pedestrian.',
      'Used to check how well the model generalizes to dense, varied city traffic.',
    ],
  },
];

const trainingCode = `import torch                                   # deep learning library
from torch.utils.data import DataLoader        # splits the dataset into batches
from torchvision.models.segmentation import deeplabv3_resnet50  # segmentation network
from dataset import RoadDataset                # loads (image, mask) pairs from the notebook
device = "cuda" if torch.cuda.is_available() else "cpu"  # use the GPU when available
model = deeplabv3_resnet50(weights=None, weights_backbone="DEFAULT", num_classes=2).to(device)  # 2 classes: road, not road
optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)  # updates the model weights
criterion = torch.nn.CrossEntropyLoss(ignore_index=255)    # pixel-wise loss, skips unlabeled pixels
loader = DataLoader(RoadDataset("train"), batch_size=4, shuffle=True)  # 4 images per step, shuffled
for epoch in range(10):                                    # go through the dataset 10 times
    model.train()                                          # switch the model to training mode
    for images, masks in loader:                           # take one batch of images and masks
        images, masks = images.to(device), masks.to(device)  # move the batch to the GPU or CPU
        logits = model(images)["out"]                      # predict a score for each class at each pixel
        loss = criterion(logits, masks)                    # measure how far predictions are from the labels
        optimizer.zero_grad()                              # clear gradients from the previous step
        loss.backward()                                    # compute how each weight should change
        optimizer.step()                                   # apply the change to the weights
    print(f"Epoch {epoch + 1} last batch loss: {loss.item():.4f}")  # report progress after each epoch`;

const iouCode = `def road_iou(pred, target):                  # overlap score between prediction and truth
    inter = ((pred == 1) & (target == 1)).sum().item()  # road pixels predicted correctly
    union = ((pred == 1) | (target == 1)).sum().item()  # road pixels from either source
    return inter / union if union else 1.0              # 1.0 means a perfect match`;

const figures = [
  'Sample input images alongside their ground-truth road masks',
  'Training and validation loss curves across epochs',
  'Predicted masks on test images, including failure cases',
];

export default function ImplementationSection() {
  return (
    <section className="space-y-12">
      <SectionHeading id="implementation" number="3" title="Implementation">
        The full experiment was run in Google Colab with a GPU runtime, using PyTorch and torchvision. The notebook
        contains every step from data loading to evaluation.
      </SectionHeading>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-900">Dataset description</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {datasets.map((dataset) => (
            <div key={dataset.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-teal-800">{dataset.name}</h4>
              <ul className="mt-3 space-y-2 text-sm leading-[1.5] text-slate-600">
                {dataset.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h3 className="font-semibold text-slate-900">Google Colab notebook</h3>
        <p className="mt-2 text-sm leading-[1.5] text-slate-700">
          Replace this line with the shareable link to your Colab notebook before submitting:{' '}
          <span className="font-mono">[Paste Google Colab link here]</span>
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">Core training code</h3>
        <p className="text-sm leading-[1.5] text-slate-600">
          The excerpt below shows the training loop with a comment on every line. The complete notebook is linked above.
        </p>
        <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-sm leading-[1.5] text-slate-100 shadow-sm">
          <code>{trainingCode}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">Evaluation code</h3>
        <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-sm leading-[1.5] text-slate-100 shadow-sm">
          <code>{iouCode}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">Output screenshots</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {figures.map((caption) => (
            <figure key={caption} className="space-y-3">
              <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white text-slate-400">
                <ImageIcon className="h-6 w-6" />
                <span className="text-xs">Screenshot to be added</span>
              </div>
              <figcaption className="text-sm leading-[1.5] text-slate-600">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
