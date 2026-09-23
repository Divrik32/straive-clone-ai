import InsightsHeroDark from "../../components/insightspage/InsightsHeroDark";
import NewsCardGrid from "../../components/aboutuspage/NewsCardGrid";

const NEWS = [
  {
    date: "May 15, 2026",
    title: "Beyond Automation: Why GenAI Operating Discipline Is the Key to Tomorrow's Software",
    excerpt: "Enterprises are moving GenAI into production faster than expected, yet operating discipline remains mixed.",
    img: "/images/thought-leadership-banking-ai.png",
  },
  {
    date: "May 1, 2026",
    title: "The Reverse Control Shift: Why Logistics Firms Are Betting on Agentic AI",
    excerpt: "While India-based teams are on the frontlines of the shift, headquarters is far from being left behind — indicating a function-by-function move.",
    img: "/images/cx-hero-mockup.webp",
  },
  {
    date: "March 28, 2026",
    title: "Overcoming Fragmented Data: What Will Decide AI's Future in Supply Chains",
    excerpt: "Enterprise AI doesn't have a technology problem. It has a fragmented-data problem holding back real business impact.",
    img: "/images/cm-tech-dashboard.jpg",
  },
  {
    date: "March 20, 2026",
    title: "The AI Last-Mile Problem: Why Enterprise AI Innovation Stumbles and How to Fix It",
    excerpt: "Most enterprise AI pilots stall between proof-of-concept and production — here's what closes the gap.",
    img: "/images/dm-case-author-database.webp",
  },
  {
    date: "March 17, 2026",
    title: "The Real Reason Most AI Projects Fail in Enterprises",
    excerpt: "MIT's headline that 95% of enterprise GenAI pilots fail sparked debate — the real reasons run deeper than the model.",
    img: "/images/usecase-financial-services.webp",
  },
  {
    date: "February 12, 2026",
    title: "Why Enterprise Success Hinges on Change Infrastructure and AI Discipline",
    excerpt: "Straive's CEO argues why the stall isn't about talent, but confident, disciplined change infrastructure.",
    img: "/images/thought-leadership-clinical-data.webp",
  },
  {
    date: "February 8, 2026",
    title: "Why Enterprise AI Stalls Before It Scales",
    excerpt: "Enterprise AI models are improving at an unprecedented pace, costs are falling, and access is no longer limited to a few.",
    img: "/images/pharma-case-1.webp",
  },
  {
    date: "February 5, 2026",
    title: "Enterprises Are Scaling GenAI Without the Operating Discipline It Needs: Straive CEO",
    excerpt: "People and businesses are obsessed with the potential of AI, but 80% of projects will fail — and it's not the model's fault.",
    img: "/images/sr-case-1.webp",
  },
  {
    date: "January 25, 2026",
    title: "Cold Chains Reducing Food and Pharma Waste",
    excerpt: "Technology and data science are at the crux of addressing food and pharma waste hurdles to ensure safe and speedy delivery.",
    img: "/images/pharma-case-2.webp",
  },
  {
    date: "January 13, 2026",
    title: "Why European Entrepreneurs Must Rethink Their AI Strategy",
    excerpt: "AI projects often look great in pilot and then fall apart once they're asked to run real workflows.",
    img: "/images/menu-industries.jpg",
  },
  {
    date: "November 25, 2025",
    title: "Digital Exhaust: The Behaviours Leaders Leave Behind",
    excerpt: "Data exhaust is one of the most overlooked signals in modern data streams — precisely because it's easy to ignore.",
    img: "/images/accelerator-llm-foundry.jpg",
  },
  {
    date: "November 10, 2025",
    title: "What's Ahead for India's GCC Surge: Why 2026 Will Be a Defining Year for Global Innovation",
    excerpt: "India's GCC boom is one of the real data streams in modern legacy, precisely because it plays to India's strengths.",
    img: "/images/menu-services.webp",
  },
  {
    date: "November 10, 2025",
    title: "What's the Next Phase of AI-Driven Waste Reduction?",
    excerpt: "As AI capability deepens, food and consumer goods companies are moving away from cost-centric lenses, driven instead by sustainability rigor.",
    img: "/images/cpg-hero-bg.jpg",
  },
  {
    date: "September 26, 2025",
    title: "September Round-up: AI's Impact on the Labor Market Hits the Headlines, While Big Tech Turns to Power Up Data Centers",
    excerpt: "A round-up from this week's newsletter, bringing insightful news and market moves from AI and labor economics.",
    img: "/images/bfs-usecase-1.webp",
  },
  {
    date: "May 27, 2025",
    title: "Why Most Investment in AI Is Underdelivered or Fail",
    excerpt: "People and businesses are obsessed with the potential of AI, but 80% of projects will fail — and it's not the model's fault.",
    img: "/images/accelerator-sparta-ai.jpg",
  },
  {
    date: "May 2, 2025",
    title: "How Climate Is Forcing Supply Chain Reinvention in Manufacturing",
    excerpt: "Strengthening supply chain resilience against climate risk must be a top priority for manufacturers in the years ahead.",
    img: "/images/msc-case-1.webp",
  },
  {
    date: "April 1, 2025",
    title: "What Does Industry 6.0 Mean for Pharmaceutical Manufacturing",
    excerpt: "The role of artificial intelligence is only growing throughout the pharmaceutical industry, reshaping manufacturing itself.",
    img: "/images/pharma-case-3.webp",
  },
  {
    date: "January 7, 2025",
    title: "How GenAI Will Revolutionize 2025: Top Trends to Watch",
    excerpt: "The concept gained massive popularity with the emergence of ChatGPT in 2023, and quickly became a hot topic across industries.",
    img: "/images/thought-leadership-aim-research-award.webp",
  },
  {
    date: "January 1, 2025",
    title: "Prepare for Europe's Supply Chain Troubles in 2025",
    excerpt: "Chain disruptions are a worry that can't be ignored for years, as chain reactions ripple across dependent industries.",
    img: "/images/retail-hero-bg.svg",
  },
  {
    date: "September 10, 2018",
    title: "SPI Global: Taking the Leap",
    excerpt: "In this era of IoT and start-ups, pioneering spirit is perhaps all a company needs to take the leap.",
    img: "/images/success-fintech-compliance.jpg",
  },
];

export default function News() {
  return (
    <>
      <InsightsHeroDark title="Straive in the News" watermark="News" />
      <div className="section-container pt-8">
        <p className="text-sm text-[#4a4a5a] max-w-xl">Straive&rsquo;s latest news and updates, here.</p>
      </div>
      <NewsCardGrid items={NEWS} />
    </>
  );
}
