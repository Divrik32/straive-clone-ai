import InsightsHeroDark from "../../components/insightspage/InsightsHeroDark";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const INFOGRAPHICS = [
  { title: "The Power of Data in Debt Collection", excerpt: "Empower your debt collection process with Straive's cutting-edge data-driven solutions and practices.", img: "/images/msc-case-2.webp" },
  { title: "Ethical Principles in Research: Fostering Trust, Transparency, and Accountability", excerpt: "Research integrity refers to the adherence of ethical principles and practices throughout the research lifecycle.", img: "/images/sr-case-3.webp" },
  { title: "Improving Usability of Unstructured Data", excerpt: "Unstructured data, in its raw form, is poor on usability. However, the insights derived from it could be transformational.", img: "/images/dm-case-data-extraction.jpg" },
  { title: "Ensuring Research Integrity", excerpt: "Publishers should publish only high-quality research that provides a comprehensive, rigorous, and reproducible account of the work.", img: "/images/sr-case-1.webp" },
  { title: "Data Annotation Is the Backbone of Machine Learning (ML)", excerpt: "Data annotation helps ML models process large volumes of data, identify anomalies, test correlations, and learn from patterns.", img: "/images/cx-case-1.webp" },
  { title: "The Practice of Transferring Scholarly Manuscripts", excerpt: "Cascading peer review helps manuscript transfer benefit the author when an article is rejected from a particular journal.", img: "/images/sr-case-2.webp" },
  { title: "Preventing Research Misconduct", excerpt: "The term \u201cresearch misconduct\u201d refers to fabrication, falsification, or plagiarism in proposing, performing, or reviewing research.", img: "/images/pharma-case-2.webp" },
  { title: "The Rise of eLearning in 2022 and Beyond", excerpt: "Straive has been a strategic content partner of publishers and information providers across all delivery formats.", img: "/images/msc-case-1.webp" },
  { title: "Transforming Learning Experiences With MOOCs", excerpt: "With over 30 years of expertise in designing EdTech solutions, Straive has enabled players in the higher education segment.", img: "/images/pharma-case-1.webp" },
  { title: "Peer Review Management \u2014 Improve Your Peer Review Process With Straive", excerpt: "Peer review is vital in establishing an article's quality and suitability for publication. Increasing submissions makes managing it harder.", img: "/images/cpg-case-3.webp" },
  { title: "Making PDF Accessible", excerpt: "Portable Document Format (PDF) files have become increasingly popular for digital publishing and other services that prevent effort loss.", img: "/images/dm-case-author-database.webp" },
  { title: "How Has the Pandemic Changed Scholarly Communication?", excerpt: "As the COVID-19 pandemic became more and more widespread, knowledge concerning the virus and its impact grew rapidly.", img: "/images/cx-case-2.webp" },
];

export default function Infographics() {
  return (
    <>
      <InsightsHeroDark title="Infographics" watermark="Infographics" />
      <InsightsCardGrid items={INFOGRAPHICS} />
    </>
  );
}
