import BlogPostGrid from "../../components/insightspage/BlogPostGrid";
import BlogSidebar from "../../components/insightspage/BlogSidebar";

const BLOGS = [
  {
    title:
      "In-House Architecture: How Enterprise Data Architecture Organizes and Delivers Value",
    excerpt:
      "Explore how enterprise architecture organizes, stores, manages, and extracts value from data across multiple analytical environments.",
    img: "/images/dm-case-author-database.webp",
    date: "September 11, 2026",
  },
  {
    title:
      "What Is Agentic AI Implementation? Strategies, Frameworks, and Best Practices for Enterprises",
    excerpt:
      "Explore the engineering practices, frameworks, and governance considerations involved in designing and deploying enterprise AI agents.",
    img: "/images/usecase-financial-services.webp",
    date: "September 11, 2026",
  },
  {
    title:
      "How Data Analytics Solutions Are Modernizing Data Warehouse Architectures",
    excerpt:
      "Explore modern approaches to data warehouse architecture, data validation, analytics, and query-ready enterprise data.",
    img: "/images/cx-case-1.webp",
    date: "September 10, 2026",
  },
  {
    title: "8 Signs Your Royalty and Payout Operations Need a Structural Review",
    excerpt:
      "Explore common challenges across royalty, payout, payment, and payee management operations and how structured workflows can improve them.",
    img: "/images/msc-case-2.webp",
    date: "September 10, 2026",
  },
  {
    title:
      "Enterprise Guide to Data Cleaning: Benefits, Components, and Best Practices",
    excerpt:
      "Explore how dependable, validated, and well-structured data supports forecasting, analytics, software systems, and AI initiatives.",
    img: "/images/pharma-case-1.webp",
    date: "September 9, 2026",
  },
  {
    title: "What Is Autonomous AI? Use Cases, Benefits & Enterprise Examples",
    excerpt:
      "Explore how autonomous AI systems perceive information, reason about tasks, and execute multi-step workflows with limited human intervention.",
    img: "/images/sr-case-2.webp",
    date: "September 8, 2026",
  },
  {
    title:
      "Rethinking Support in Research Publishing: From Self-Service to Specialist Expertise",
    excerpt:
      "Explore how self-service capabilities and specialist support can improve author experiences across modern publishing workflows.",
    img: "/images/cx-case-2.webp",
    date: "September 7, 2026",
  },
  {
    title: "Data Governance in 2026: Key Capabilities and Selection Considerations",
    excerpt:
      "Explore the key capabilities organizations should consider when building an effective enterprise data governance strategy.",
    img: "/images/bfs-usecase-1.webp",
    date: "September 3, 2026",
  },
  {
    title: "AI Agent Development: Enterprise Capabilities and Considerations",
    excerpt:
      "Explore how enterprises are designing AI agents that reason, plan, integrate with systems, and execute operational workflows.",
    img: "/images/msc-case-1.webp",
    date: "September 3, 2026",
  },
  {
    title: "Engineering the Intelligent Future of Scientific Publishing",
    excerpt:
      "Explore how scientific publishing is evolving through AI, automation, structured data, and intelligent content workflows.",
    img: "/images/sr-case-1.webp",
    date: "September 3, 2026",
  },
];

export default function Blogs() {
  return (
    <>
      <section className="bg-[#f4f4f6] py-10 md:py-14">
        <div className="section-container">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#2a2a3a]">
            Our Blogs
          </h1>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="section-container grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BlogPostGrid items={BLOGS} />
          </div>

          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
}