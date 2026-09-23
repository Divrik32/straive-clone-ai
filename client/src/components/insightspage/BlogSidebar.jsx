import { Search } from "lucide-react";

const RECENT_POSTS = [
  "What Is Agentic AI Implementation? Strategies, Frameworks, and Best Practices for Enterprises",
  "8 Signs Your Royalty and Payout Operations Need a Structural Fix",
  "Enterprise Guide to Data Cleaning: Benefits, Components, and Best Practices",
  "What Is Autonomous AI? Use Cases, Benefits & Enterprise Examples",
  "Rethinking Support in Research Publishing: From Self-Service to Specialist Expertise",
];

const CATEGORIES = [
  "Awards",
  "Banking & Finance",
  "Commercial Banking",
  "Customer Experience",
  "Data & Analytics",
  "Generative AI",
  "Manufacturing",
  "News and Analyst Recognitions",
  "Pharma & Life Sciences",
  "Thought Leadership",
  "Uncategorized",
];

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search here"
          className="w-full border border-black/15 rounded-md py-2.5 pl-4 pr-10 text-[13px] text-[#3a3a4a] focus:outline-none focus:ring-1 focus:ring-brand-orange"
        />
        <Search className="w-4 h-4 text-[#7a7a8a] absolute right-3.5 top-1/2 -translate-y-1/2" />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#10162B] mb-4 pb-2 border-b border-black/10">
          Recent Posts
        </h3>
        <ul className="space-y-3">
          {RECENT_POSTS.map((post) => (
            <li key={post}>
              <a
                href="#"
                className="text-[12.5px] leading-snug text-[#4a4a5a] hover:text-brand-orange transition-colors"
              >
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#10162B] mb-4 pb-2 border-b border-black/10">
          Categories
        </h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <a
                href="#"
                className="text-[12.5px] text-[#4a4a5a] hover:text-brand-orange transition-colors"
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
