import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const RECOGNITIONS = [
  {
    title: "Work Science Recognized for Excellence in Agentic AI Services",
    excerpt:
      "Recognition highlighting strong capabilities in agentic AI, enterprise automation, and AI-led transformation.",
    img: "/images/ar-card-1.webp",
    badge: "AI Research",
  },
  {
    title: "Work Science Recognized for Excellence in Data & AI Services",
    excerpt:
      "Recognition highlighting capabilities across data engineering, analytics, AI, and enterprise transformation.",
    img: "/images/ar-card-2.webp",
    badge: "Industry Research",
  },
  {
    title: "Work Science Recognized for Data Engineering Capabilities",
    excerpt:
      "Recognition highlighting expertise in modern data engineering, data platforms, and scalable analytics solutions.",
    img: "/images/ar-card-3.webp",
    badge: "AI Research",
  },
  {
    title: "Work Science Capabilities Featured in Intelligent Automation Research",
    excerpt:
      "Our intelligent automation capabilities help organizations transform document-heavy and operational workflows.",
    img: "/images/ar-card-4.webp",
    badge: "Industry Research",
  },
  {
    title: "Work Science Recognized for AI & Analytics Capabilities",
    excerpt:
      "Our AI and analytics capabilities support organizations in improving customer experiences and operational efficiency.",
    img: "/images/ar-card-5.webp",
    badge: "Industry Research",
  },
  {
    title: "Work Science Intelligent Document Processing Capabilities",
    excerpt:
      "Our document processing capabilities help organizations extract, classify, and manage information from complex documents.",
    img: "/images/ar-card-6.webp",
    badge: "Industry Research",
  },
  {
    title: "Work Science Featured for Data, AI, and Digital Transformation Capabilities",
    excerpt:
      "Our technology and domain expertise help organizations modernize operations and build scalable digital solutions.",
    img: "/images/ar-card-7.webp",
    badge: "Industry Research",
  },
];

export default function AnalystRecognitions() {
  return (
    <>
      <InsightsHero
        title="Analyst Recognitions"
        img="/images/insights-hero-analyst.webp"
      />

      <InsightsCardGrid items={RECOGNITIONS} />
    </>
  );
}