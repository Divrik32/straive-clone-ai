import InsightsHero from "../../components/insightspage/InsightsHero";
import VideoCardGrid from "../../components/insightspage/VideoCardGrid";

const VIDEOS = [
  {
    title: "Leadership Talks: Recouping AI Investments — Lower Costs, Higher Returns",
    excerpt:
      "Explore how thoughtful AI investments can improve operational efficiency, reduce costs, and create measurable business value.",
    img: "/images/vid-1.svg",
    videoUrl: "https://www.youtube.com/embed/1rl6HZbqbOY",
  },
  {
    title: "Operationalizing AI in Customer Experience & Compliance",
    excerpt:
      "Explore how AI can enhance customer experience, compliance, and operational decision-making through intelligent automation.",
    img: "/images/vid-2.svg",
    videoUrl: "https://www.youtube.com/embed/iy4ZgO_-bC4",
  },
  {
    title: "Why the Human-in-the-Loop Is Key to Operationalizing AI",
    excerpt:
      "Understand how human expertise and AI systems can work together to improve reliability, governance, and business outcomes.",
    img: "/images/vid-3.svg",
    videoUrl: "https://www.youtube.com/embed/iy4ZgO_-bC4",
  },
  {
    title: "When Operations and AI Agents Work Together",
    excerpt:
      "Explore how generative AI systems and intelligent agents can work alongside operations teams to support scalable workflows.",
    img: "/images/vid-4.svg",
    videoUrl: "https://www.youtube.com/embed/sWH0T4Zez6I",
  },
  {
    title: "Revolutionize Customer Experience with AI-Powered CX Solutions",
    excerpt:
      "Discover how AI-powered customer experience solutions can improve interactions through intelligent automation and real-time insights.",
    img: "/images/vid-5.svg",
    videoUrl: "https://www.youtube.com/embed/a-8d2beV8w0",
  },
  {
    title: "Why Focused AI Initiatives Can Create Business Impact",
    excerpt:
      "Explore how organizations can prioritize AI initiatives around practical business outcomes and measurable value.",
    img: "/images/vid-6.svg",
    videoUrl: "https://www.youtube.com/embed/4l9_RMRNMPQ",
  },
  {
    title: "The Rise of GenAI",
    excerpt:
      "Explore how enterprise AI adoption is evolving from experimentation and pilots toward scalable implementation.",
    img: "/images/vid-7.svg",
    videoUrl: "https://www.youtube.com/embed/sWH0T4Zez6I",
  },
  {
    title: "GenAI for Enterprises with Naveen Gattu",
    excerpt:
      "Explore how generative AI is changing business operations and helping organizations move from pilots toward enterprise scale.",
    img: "/images/vid-8.svg",
    videoUrl: "https://www.youtube.com/embed/3fN49nVQmYU",
  },
  {
    title: "AI for Impact: LLM Technology and Business",
    excerpt:
      "Explore the evolving role of large language models and the opportunities and challenges they create for organizations.",
    img: "/images/vid-9.svg",
    videoUrl: "https://www.youtube.com/embed/3fN49nVQmYU",
  },
  {
    title: "Work Science Forward — Chief Analytics Officer",
    excerpt:
      "Explore perspectives on the future of analytics, AI, digital transformation, and intelligent business operations.",
    img: "/images/vid-10.svg",
    videoUrl: "https://www.youtube.com/embed/MijKdmvHQv0",
  },
  {
    title: "State of ESG Data Processes & Automation",
    excerpt:
      "Explore how ESG data platforms and automation can improve sustainability reporting and operational processes.",
    img: "/images/vid-11.svg",
    videoUrl: "https://www.youtube.com/embed/SHDR2MDwBSY",
  },
  {
    title: "Digital Accessibility Overview — Digital Web Accessibility",
    excerpt:
      "Explore digital accessibility and understand how organizations can create content and experiences that are usable by everyone.",
    img: "/images/vid-12.svg",
    videoUrl: "https://www.youtube.com/embed/g53xa-ICcQ4",
  },
];

export default function Videos() {
  return (
    <>
      <InsightsHero
        title="Videos"
        img="/images/insights-hero-videos.jpg"
      />

      <VideoCardGrid items={VIDEOS} />
    </>
  );
}