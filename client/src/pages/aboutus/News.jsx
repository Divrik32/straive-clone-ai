import InsightsHeroDark from "../../components/insightspage/InsightsHeroDark";
import NewsCardGrid from "../../components/aboutuspage/NewsCardGrid";

const NEWS = [
  {
    date: "May 15, 2026",
    title: "Beyond Automation: Building the Right Operating Model for Enterprise AI",
    excerpt:
      "Organizations are moving AI into production, making strong operating practices, governance, and execution increasingly important.",
    img: "/images/thought-leadership-banking-ai.png",
  },
  {
    date: "May 1, 2026",
    title: "The Rise of Agentic AI in Modern Business Operations",
    excerpt:
      "Organizations are exploring agentic AI to support workflows, decision-making, and operational efficiency across functions.",
    img: "/images/cx-hero-mockup.webp",
  },
  {
    date: "March 28, 2026",
    title: "Overcoming Fragmented Data for Enterprise AI",
    excerpt:
      "Connected, trusted, and accessible data remains an important foundation for delivering meaningful enterprise AI outcomes.",
    img: "/images/cm-tech-dashboard.jpg",
  },
  {
    date: "March 20, 2026",
    title: "Closing the Last-Mile Gap in Enterprise AI",
    excerpt:
      "Moving from experimentation to production requires the right combination of technology, data, processes, and organizational readiness.",
    img: "/images/dm-case-author-database.webp",
  },
  {
    date: "March 17, 2026",
    title: "Why Enterprise AI Initiatives Struggle to Scale",
    excerpt:
      "Successful AI adoption depends on more than models. Data quality, workflows, governance, and change management all play important roles.",
    img: "/images/usecase-financial-services.webp",
  },
  {
    date: "February 12, 2026",
    title: "Building the Infrastructure for Sustainable AI Adoption",
    excerpt:
      "Organizations need disciplined operating models and strong foundations to turn AI experimentation into sustainable business value.",
    img: "/images/thought-leadership-clinical-data.webp",
  },
  {
    date: "February 8, 2026",
    title: "From AI Experimentation to Enterprise Scale",
    excerpt:
      "As AI capabilities continue to evolve, organizations are focusing on the practical requirements needed to scale AI across real business workflows.",
    img: "/images/pharma-case-1.webp",
  },
  {
    date: "February 5, 2026",
    title: "Building Responsible and Scalable Enterprise AI",
    excerpt:
      "Responsible AI adoption requires strong governance, reliable data, clear processes, and people who understand how to work with emerging technologies.",
    img: "/images/sr-case-1.webp",
  },
  {
    date: "January 25, 2026",
    title: "Using Data and Technology to Reduce Supply Chain Waste",
    excerpt:
      "Better data visibility and intelligent technology can help organizations improve planning, reduce waste, and strengthen supply chain operations.",
    img: "/images/pharma-case-2.webp",
  },
  {
    date: "January 13, 2026",
    title: "Rethinking Enterprise AI Strategy",
    excerpt:
      "AI initiatives need to move beyond isolated pilots and become part of practical, measurable business workflows.",
    img: "/images/menu-industries.jpg",
  },
  {
    date: "November 25, 2025",
    title: "Turning Operational Data Into Business Intelligence",
    excerpt:
      "Organizations can unlock valuable insights by connecting operational data with analytics, automation, and modern AI capabilities.",
    img: "/images/accelerator-llm-foundry.jpg",
  },
  {
    date: "November 10, 2025",
    title: "The Next Phase of Global Technology Innovation",
    excerpt:
      "Global technology teams are evolving their operating models as organizations invest more deeply in AI, analytics, and digital transformation.",
    img: "/images/menu-services.webp",
  },
  {
    date: "November 10, 2025",
    title: "The Role of AI in Sustainable Operations",
    excerpt:
      "AI and data-driven solutions can help organizations identify operational improvements while supporting more responsible resource use.",
    img: "/images/cpg-hero-bg.jpg",
  },
  {
    date: "September 26, 2025",
    title: "AI, Data, and the Changing Enterprise Landscape",
    excerpt:
      "Recent developments across AI, data, technology, and business operations continue to reshape how organizations plan for the future.",
    img: "/images/bfs-usecase-1.webp",
  },
  {
    date: "May 27, 2025",
    title: "Turning AI Investment Into Business Value",
    excerpt:
      "Successful AI programs require more than technology investment. Strong strategy, execution, data, and organizational alignment are equally important.",
    img: "/images/accelerator-sparta-ai.jpg",
  },
  {
    date: "May 2, 2025",
    title: "Building More Resilient Supply Chains",
    excerpt:
      "Data, analytics, and digital technologies are helping manufacturers improve visibility, planning, and resilience across complex supply chains.",
    img: "/images/msc-case-1.webp",
  },
  {
    date: "April 1, 2025",
    title: "How AI Is Transforming Pharmaceutical Operations",
    excerpt:
      "Artificial intelligence and advanced analytics are creating new opportunities across pharmaceutical research, manufacturing, and operations.",
    img: "/images/pharma-case-3.webp",
  },
  {
    date: "January 7, 2025",
    title: "Generative AI Trends Shaping the Enterprise",
    excerpt:
      "Generative AI continues to influence how organizations approach productivity, knowledge management, automation, and customer experiences.",
    img: "/images/thought-leadership-aim-research-award.webp",
  },
  {
    date: "January 1, 2025",
    title: "Preparing Supply Chains for a Changing Business Environment",
    excerpt:
      "Organizations are strengthening supply chain visibility and resilience to better respond to disruption and changing market conditions.",
    img: "/images/retail-hero-bg.jpg",
  },
  {
    date: "September 10, 2018",
    title: "Taking the Leap Into Digital Transformation",
    excerpt:
      "Organizations continue to evolve by combining technology, innovation, and new operating approaches to create sustainable business value.",
    img: "/images/success-fintech-compliance.jpg",
  },
];

export default function News() {
  return (
    <>
      <InsightsHeroDark
        title="Work Science in the News"
        watermark="News"
      />

      <div className="section-container pt-8">
        <p className="text-sm text-[#4a4a5a] max-w-xl">
          Explore the latest news, perspectives, and updates from Work Science.
        </p>
      </div>

      <NewsCardGrid items={NEWS} />
    </>
  );
}