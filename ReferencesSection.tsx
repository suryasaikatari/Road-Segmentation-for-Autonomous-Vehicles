import SectionHeading from '@/components/report/SectionHeading';

const references = [
  'Long, J., Shelhamer, E., & Darrell, T. (2015). Fully Convolutional Networks for Semantic Segmentation. CVPR.',
  'Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. MICCAI.',
  'Badrinarayanan, V., Kendall, A., & Cipolla, R. (2017). SegNet: A Deep Convolutional Encoder-Decoder Architecture for Image Segmentation. IEEE TPAMI.',
  'Chen, L.-C., Papandreou, G., Kokkinos, I., Murphy, K., & Yuille, A. L. (2018). DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs. IEEE TPAMI.',
  'Chen, L.-C., Zhu, Y., Papandreou, G., Schroff, F., & Adam, H. (2018). Encoder-Decoder with Atrous Separable Convolution for Semantic Image Segmentation. ECCV.',
  'Zhao, H., Shi, J., Qi, X., Wang, X., & Jia, J. (2017). Pyramid Scene Parsing Network. CVPR.',
  'He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep Residual Learning for Image Recognition. CVPR.',
  'Cordts, M., et al. (2016). The Cityscapes Dataset for Semantic Urban Scene Understanding. CVPR.',
  'Geiger, A., Lenz, P., & Urtasun, R. (2012). Are we ready for Autonomous Driving? The KITTI Vision Benchmark Suite. CVPR.',
  'Fritsch, J., Kuehnl, T., & Geiger, A. (2013). A New Performance Measures and Evaluation Benchmark for Road Detection Algorithms. ITSC.',
  'Brostow, G. J., Fauqueur, J., & Cipolla, R. (2009). Semantic Object Classes in Video: A High-Definition Ground Truth Database. Pattern Recognition Letters.',
  'PyTorch torchvision documentation, DeepLabV3 models: https://pytorch.org/vision/stable/models/deeplabv3.html',
  'Cityscapes dataset: https://www.cityscapes-dataset.com/',
  'KITTI road benchmark: https://www.cvlibs.net/datasets/kitti/eval_road.php',
];

export default function ReferencesSection() {
  return (
    <section className="space-y-10">
      <SectionHeading id="references" number="6" title="References / Bibliography" />
      <ol className="list-decimal space-y-3 pl-6 text-sm leading-[1.5] text-slate-600 marker:font-semibold marker:text-slate-400">
        {references.map((ref) => (
          <li key={ref} className="break-words pl-2">
            {ref}
          </li>
        ))}
      </ol>
    </section>
  );
}
