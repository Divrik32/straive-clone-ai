import BlogPostGrid from "../../components/insightspage/BlogPostGrid";
import BlogSidebar from "../../components/insightspage/BlogSidebar";

const BLOGS = [
  {
    title: "In-House Architecture? Here's how the structural framework governs how an enterprise organizes, stores, and extracts value from data across multiple analytical computing environments.",
    excerpt: "In-house architecture is the structural framework that determines how an enterprise organizes, stores, and extracts value from data across multiple analytical computing environments.",
    img: "/images/dm-case-author-database.webp",
    date: "September 11, 2026",
  },
  {
    title: "What Is Agentic AI Implementation? Strategies, Frameworks, and Best Practices for Enterprises",
    excerpt: "Agentic AI implementation is the engineering practice of designing, deploying, and governing autonomous systems that execute multi-step workflows across an organization.",
    img: "/images/usecase-financial-services.webp",
    date: "September 11, 2026",
  },
  {
    title: "How Data Analytics Solutions Are Modernizing Data Warehouse Architectures, Best Practices, and Impact",
    excerpt: "Data warehouse types are technical and architectural roadblocks teams face when moving from siloed storage to a modernized, validated, and query-ready warehouse.",
    img: "/images/cx-case-1.webp",
    date: "September 10, 2026",
  },
  {
    title: "8 Signs Your Royalty and Payout Operations Need a Structural Fix",
    excerpt: "A royalty desk quickly learns that \u201cpayment problem\u201d covers very different stories. Money may not yet be due, it may have been released and returned, or the payee record may have changed.",
    img: "/images/msc-case-2.webp",
    date: "September 10, 2026",
  },
  {
    title: "Enterprise Guide to Data Cleaning: Benefits, Components, and Best Practices for Enterprises",
    excerpt: "Bad data drains enterprise budgets through inaccurate forecasting, software outages, and broken AI initiatives. Business leaders need dependable information to make strategic choices.",
    img: "/images/pharma-case-1.webp",
    date: "September 9, 2026",
  },
  {
    title: "What Is Autonomous AI? Use Cases, Benefits & Enterprise Examples",
    excerpt: "Autonomous AI is software engineered to perceive environments, make reasoned decisions, and execute multi-step tasks with minimal human intervention.",
    img: "/images/sr-case-2.webp",
    date: "September 8, 2026",
  },
  {
    title: "Rethinking Support in Research Publishing: From Self-Service to Specialist Expertise",
    excerpt: "The author should not have to wait for a person to retrieve information the publisher already holds. Self-service can confirm the relevant agreement, explain the conditions, and show what the author needs to do next.",
    img: "/images/cx-case-2.webp",
    date: "September 7, 2026",
  },
  {
    title: "Top 10 Data Governance Companies in 2026",
    excerpt: "Enterprise data strategy in 2026 demands active operational stewardship. This evaluation assesses the top data governance companies in 2026, analyzes key market shifts, and provides a clear selection framework.",
    img: "/images/bfs-usecase-1.webp",
    date: "September 3, 2026",
  },
  {
    title: "Top 10 AI Agent Development Companies in 2026",
    excerpt: "Enterprises are deploying autonomous agents that reason, plan, and execute operations. This guide analyzes top AI agent development companies in 2026, evaluating their technical foundations, system integration capabilities, and enterprise readiness.",
    img: "/images/msc-case-1.webp",
    date: "September 3, 2026",
  },
  {
    title: "Engineering the Intelligent Future of Scientific Publishing",
    excerpt: "For more than three centuries, scientific publishers have served as the custodians of scholarly communication. Their value was built on curating, validating, and distributing knowledge. But in the age of generative AI...",
    img: "/images/sr-case-1.webp",
    date: "September 3, 2026",
  },
];

export default function Blogs() {
  return (
    <>
      <section className="bg-[#f4f4f6] py-10 md:py-14">
        <div className="section-container">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#2a2a3a]">Our Blogs</h1>
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
