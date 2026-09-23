import InsightsHero from "../../components/insightspage/InsightsHero";
import VideoCardGrid from "../../components/insightspage/VideoCardGrid";

const VIDEOS = [
  { title: "Leadership Talks: Recouping AI Investments \u2014 Lower Costs, Higher Returns | Namit Sureka", excerpt: "Straive's President & Chief Analytics and AI Officer, Namit Sureka, explains how smart GenAI investments drive rapid ROI, cost...", img: "/images/vid-1.svg", videoUrl: "https://www.youtube.com/embed/9FQcN5QFSu8" },
  { title: "Straive at AIFS 2025: Operationalizing AI in Customer Experience & Compliance", excerpt: "At AIFS 2025, Straive's CEO Ankor Rai discusses how AI enhances customer experience and compliance through real-time...", img: "/images/vid-2.svg", videoUrl: "https://www.youtube.com/embed/VtFPCzQ8nUQ" },
  { title: "Leadership Talks: Why the Human-in-the-Loop Is Key to Operationalizing AI | Straive", excerpt: "Straive's President and Chief Analytics & AI Officer, Namit Sureka, shares expertise around how human-in-the-loop...", img: "/images/vid-3.svg", videoUrl: "https://www.youtube.com/embed/LZGXvyXuak0" },
  { title: "When Ops and AI Agents Work Together", excerpt: "How integrating generative AI systems into ops and AI agents drive scalable...", img: "/images/vid-4.svg", videoUrl: "https://www.youtube.com/embed/ukkjRXeNMdM" },
  { title: "Revolutionize Your Customer Experience with AI-powered CX Solutions | Straive", excerpt: "Discover how Straive's AI-powered CX solutions elevate customer interactions through intelligent automation, real-time...", img: "/images/vid-5.svg", videoUrl: "https://www.youtube.com/embed/WAefyDAW6RY" },
  { title: "Why 20% Impact Beats 100% Perfection in AI | Straive", excerpt: "Ankor Rai, CEO of Straive, explains why prioritizing the top 20% of AI initiatives delivers measurable outcomes...", img: "/images/vid-6.svg", videoUrl: "https://www.youtube.com/embed/rMgo8t-0gik" },
  { title: "The Rise of GenAI", excerpt: "This clip highlights how enterprise AI adoption and pilots are evolving into scale, agility, supply chain...", img: "/images/vid-7.svg", videoUrl: "https://www.youtube.com/embed/ukkjRXeNMdM" },
  { title: "GenAI for Enterprises with Naveen Gattu", excerpt: "Naveen Gattu reveals how GenAI is revolutionizing business operations, moving from pilots to scale in weeks.", img: "/images/vid-8.svg", videoUrl: "https://www.youtube.com/embed/FbrNgpG2i_k" },
  { title: "AI for Impact Ep 2: LLMs Tech Dilemma with Anand S", excerpt: "Anand S, Straive's Head of LLM Psychologist, intriguing notion that the world's LLM Language...", img: "/images/vid-9.svg", videoUrl: "https://www.youtube.com/embed/FbrNgpG2i_k" },
  { title: "Straive Forward \u2014 Chief Analytics Officer", excerpt: "Something big is coming... Stay tuned! We've been working on something behind the scenes and we're almost ready to reveal it...", img: "/images/vid-10.svg", videoUrl: "https://www.youtube.com/embed/t214j8xRZSo" },
  { title: "State of ESG Data Processes & Automation", excerpt: "How ESG solutions powered by end-to-end unstructured data platform (SDP) accelerate automation.", img: "/images/vid-11.svg", videoUrl: "https://www.youtube.com/embed/5mGfKgaiUAA" },
  { title: "Straive Digital Accessibility Overview \u2014 Digital Web Accessibility", excerpt: "Digital Web Accessibility or Accessibility means creating content that can be used by all. Find out why and how Straive has...", img: "/images/vid-12.svg", videoUrl: "https://www.youtube.com/embed/S4OnyQcReyM" },
];

export default function Videos() {
  return (
    <>
      <InsightsHero title="Videos" img="/images/insights-hero-videos.jpg" />
      <VideoCardGrid items={VIDEOS} />
    </>
  );
}
