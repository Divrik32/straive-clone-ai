import InsightsHeroDark from "../../components/insightspage/InsightsHeroDark";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const CASE_STUDIES = [
  { title: "Transforming Faculty Support and Lead Qualification for a Leading Learning Digital Platform Publisher", excerpt: "A leading digital platform publisher required round-the-clock, high-quality lead qualification and faculty engagement support.", img: "/images/cx-case-1.webp" },
  { title: "Streamlining Front-Office Support for a Leading Education Publisher", excerpt: "An education publisher needed to modernize front-office operations while cutting response times and cost-to-serve.", img: "/images/cx-case-2.webp" },
  { title: "Scaling Economical Lead Qualification and Customer Support for an Insurance Provider", excerpt: "An insurance provider partnered with Straive to scale lead qualification and support operations economically.", img: "/images/cx-case-3.webp" },
  { title: "Generated High-Quality Author Database and Insights for a Global Publisher", excerpt: "A global scholarly publisher needed a structured, deduplicated author database to power discovery and outreach.", img: "/images/dm-case-author-database.webp" },
  { title: "Streamlined Data Extraction From Complex, High-Volume Documents", excerpt: "Straive engineered an AI-assisted extraction pipeline to convert unstructured documents into governed, structured data.", img: "/images/dm-case-data-extraction.jpg" },
  { title: "Expanding a Strategic Partnership Across Private Equity Operations", excerpt: "A global private equity firm expanded its engagement with Straive to cover due diligence and portfolio reporting.", img: "/images/msc-case-3.webp" },
  { title: "A Leading Global Manufacturing Company Reduced Carbon Emissions by 85%", excerpt: "Advanced analytics and process re-engineering helped the manufacturer hit an aggressive sustainability target.", img: "/images/msc-case-1.webp" },
  { title: "A Leading Food Manufacturer Reduced Downtime, Lifting Production Efficiency by 20%", excerpt: "Predictive maintenance models and real-time monitoring cut unplanned downtime across production lines.", img: "/images/msc-case-2.webp" },
  { title: "Accuracy by 95%: Modernizing Monograph Management for Global Pharmaceuticals", excerpt: "Straive modernized monograph workflows for a global pharmaceutical company, lifting accuracy and throughput.", img: "/images/pharma-case-1.webp" },
  { title: "Cutting Costs by 6.5% While Shrinking Carbon Footprint: A Pharma Success in EMEA Distribution", excerpt: "A pharma distributor combined route optimization and data-led planning to reduce cost and emissions together.", img: "/images/pharma-case-2.webp" },
  { title: "Saving $5.2M Annually: Advanced NLP Revolutionized Drug Labeling for Regulatory Affairs", excerpt: "An NLP-driven labeling pipeline slashed manual review time and accelerated regulatory submissions.", img: "/images/pharma-case-3.webp" },
  { title: "Compliance Excellence for a Leading Publisher's Taylor & Francis Project", excerpt: "Straive delivered end-to-end editorial and compliance support for a major scholarly publishing programme.", img: "/images/sr-case-1.webp" },
  { title: "AI-Driven Transformation of Collections Support for eBook Publishing", excerpt: "An AI-enabled workflow modernized collections support, improving turnaround for a leading eBook publisher.", img: "/images/sr-case-2.webp" },
  { title: "Trusted Scientific Practices: Strengthening Research Integrity at Scale", excerpt: "Straive built a scalable research-integrity screening process to safeguard scholarly publishing standards.", img: "/images/sr-case-3.webp" },
  { title: "Global Beverage Bottling Firm Reduced Manufacturing Cost by Simulating Operational Levers", excerpt: "Scenario modeling let the bottler test operational levers virtually before committing capital.", img: "/images/cpg-case-1.webp" },
  { title: "Portfolio Brand Performance Analysis for a Global CPG Company in the SEA Market", excerpt: "A unified performance-analytics view helped the CPG major reallocate marketing spend across its portfolio.", img: "/images/cpg-case-2.webp" },
  { title: "Enhancing Marketing Creative ROI Through Improved Performance Insights", excerpt: "A global food, snack, and beverage company improved creative ROI with granular performance insight.", img: "/images/cpg-case-3.webp" },
  { title: "Real-Time Price Intelligence for a Brazilian Food Retailer", excerpt: "A real-time pricing engine helped the retailer react to competitor moves within hours instead of weeks.", img: "/images/retail-case-3.webp" },
];

export default function CaseStudies() {
  return (
    <>
      <InsightsHeroDark title="Case Study" watermark="Case Study" />
      <InsightsCardGrid items={CASE_STUDIES} />
    </>
  );
}
