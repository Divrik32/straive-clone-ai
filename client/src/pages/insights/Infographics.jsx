import InsightsHeroDark from "../../components/insightspage/InsightsHeroDark";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const INFOGRAPHICS = [
  {
    title: "The Power of Data in Debt Collection",
    excerpt:
      "Explore how data-driven approaches can improve visibility, decision-making, and operational workflows across debt collection.",
    img: "/images/msc-case-2.webp",
  },
  {
    title: "Ethical Principles in Research",
    excerpt:
      "Explore the principles of research integrity, transparency, accountability, and responsible scholarly practices.",
    img: "/images/sr-case-3.webp",
  },
  {
    title: "Improving the Usability of Unstructured Data",
    excerpt:
      "Explore how unstructured data can be transformed into useful information and actionable business insights.",
    img: "/images/dm-case-data-extraction.jpg",
  },
  {
    title: "Ensuring Research Integrity",
    excerpt:
      "Explore the practices publishers can use to support high-quality, rigorous, transparent, and reproducible research.",
    img: "/images/sr-case-1.webp",
  },
  {
    title: "Data Annotation: The Backbone of Machine Learning",
    excerpt:
      "Explore how data annotation helps machine learning systems identify patterns, process information, and improve model performance.",
    img: "/images/cx-case-1.webp",
  },
  {
    title: "The Practice of Transferring Scholarly Manuscripts",
    excerpt:
      "Explore how cascading peer review can support authors and publishers when manuscripts move between journals.",
    img: "/images/sr-case-2.webp",
  },
  {
    title: "Preventing Research Misconduct",
    excerpt:
      "Explore research misconduct, responsible research practices, and approaches for maintaining integrity throughout the research lifecycle.",
    img: "/images/pharma-case-2.webp",
  },
  {
    title: "The Rise of eLearning",
    excerpt:
      "Explore the evolution of digital learning and how technology is transforming education and learning experiences.",
    img: "/images/msc-case-1.webp",
  },
  {
    title: "Transforming Learning Experiences With MOOCs",
    excerpt:
      "Explore how technology and modern learning platforms can create scalable and engaging digital education experiences.",
    img: "/images/pharma-case-1.webp",
  },
  {
    title: "Improving the Peer Review Process",
    excerpt:
      "Explore how modern technology can help publishers manage increasing submission volumes while maintaining review quality.",
    img: "/images/cpg-case-3.webp",
  },
  {
    title: "Making PDF Content Accessible",
    excerpt:
      "Explore approaches for making PDF documents more accessible and usable across digital publishing environments.",
    img: "/images/dm-case-author-database.webp",
  },
  {
    title: "How the Pandemic Changed Scholarly Communication",
    excerpt:
      "Explore how the COVID-19 pandemic accelerated changes in scholarly communication, research, and information sharing.",
    img: "/images/cx-case-2.webp",
  },
];

export default function Infographics() {
  return (
    <>
      <InsightsHeroDark
        title="Infographics"
        watermark="Infographics"
      />

      <InsightsCardGrid items={INFOGRAPHICS} />
    </>
  );
}