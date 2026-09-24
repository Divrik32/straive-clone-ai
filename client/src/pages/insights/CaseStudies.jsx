import InsightsHeroDark from "../../components/insightspage/InsightsHeroDark";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const CASE_STUDIES = [
  {
    title: "Transforming Faculty Support and Lead Qualification for a Learning Platform",
    excerpt:
      "A leading digital learning platform needed scalable support for lead qualification and faculty engagement.",
    img: "/images/cx-case-1.webp",
  },
  {
    title: "Streamlining Front-Office Support for an Education Publisher",
    excerpt:
      "An education publisher modernized front-office operations to improve response times and operational efficiency.",
    img: "/images/cx-case-2.webp",
  },
  {
    title: "Scaling Lead Qualification and Customer Support for an Insurance Provider",
    excerpt:
      "An insurance provider improved lead qualification and customer support through scalable operational workflows.",
    img: "/images/cx-case-3.webp",
  },
  {
    title: "Building a High-Quality Author Database for a Global Publisher",
    excerpt:
      "A global scholarly publisher needed a structured and deduplicated author database to support discovery and outreach.",
    img: "/images/dm-case-author-database.webp",
  },
  {
    title: "Streamlining Data Extraction From Complex, High-Volume Documents",
    excerpt:
      "An AI-assisted extraction workflow converted complex unstructured documents into structured and governed data.",
    img: "/images/dm-case-data-extraction.jpg",
  },
  {
    title: "Expanding Data and Analytics Support Across Private Equity Operations",
    excerpt:
      "A global private equity organization expanded its data and analytics workflows across due diligence and portfolio reporting.",
    img: "/images/msc-case-3.webp",
  },
  {
    title: "Manufacturing Carbon and Sustainability Optimization",
    excerpt:
      "Advanced analytics and process improvement supported a global manufacturing organization's sustainability initiatives.",
    img: "/images/msc-case-1.webp",
  },
  {
    title: "Food Manufacturing Downtime and Production Optimization",
    excerpt:
      "Predictive maintenance and real-time monitoring helped improve production reliability and operational efficiency.",
    img: "/images/msc-case-2.webp",
  },
  {
    title: "Modernizing Monograph Management for Global Pharmaceuticals",
    excerpt:
      "A pharmaceutical organization modernized monograph workflows to improve accuracy, consistency, and operational throughput.",
    img: "/images/pharma-case-1.webp",
  },
  {
    title: "Optimizing Pharma Distribution and Supply Chain Operations",
    excerpt:
      "Data-led planning and route optimization supported more efficient pharmaceutical distribution operations.",
    img: "/images/pharma-case-2.webp",
  },
  {
    title: "Modernizing Drug Labeling Workflows with NLP",
    excerpt:
      "An NLP-driven workflow helped streamline labeling operations and support regulatory processes.",
    img: "/images/pharma-case-3.webp",
  },
  {
    title: "Compliance Support for a Global Publishing Program",
    excerpt:
      "End-to-end editorial and compliance workflows supported a major scholarly publishing program.",
    img: "/images/sr-case-1.webp",
  },
  {
    title: "AI-Driven Transformation of Collections Support for eBook Publishing",
    excerpt:
      "An AI-enabled workflow modernized collections support and improved operational turnaround for digital publishing.",
    img: "/images/sr-case-2.webp",
  },
  {
    title: "Strengthening Research Integrity at Scale",
    excerpt:
      "A scalable research-integrity screening process helped safeguard scholarly publishing standards.",
    img: "/images/sr-case-3.webp",
  },
  {
    title: "Manufacturing Cost Optimization Through Operational Simulation",
    excerpt:
      "Scenario modeling helped a beverage manufacturer evaluate operational changes before committing resources.",
    img: "/images/cpg-case-1.webp",
  },
  {
    title: "Portfolio Brand Performance Analysis for a Global CPG Company",
    excerpt:
      "A unified performance analytics approach supported portfolio-level marketing and business decisions.",
    img: "/images/cpg-case-2.webp",
  },
  {
    title: "Improving Marketing Creative Performance for a Global CPG Company",
    excerpt:
      "Granular performance insights helped improve the evaluation and optimization of marketing creatives.",
    img: "/images/cpg-case-3.webp",
  },
  {
    title: "Real-Time Price Intelligence for a Brazilian Food Retailer",
    excerpt:
      "A real-time pricing solution helped the retailer monitor market changes and support faster pricing decisions.",
    img: "/images/retail-case-3.webp",
  },
];

export default function CaseStudies() {
  return (
    <>
      <InsightsHeroDark title="Case Studies" watermark="Case Studies" />

      <InsightsCardGrid items={CASE_STUDIES} />
    </>
  );
}