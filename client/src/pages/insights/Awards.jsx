import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const AWARDS = [
  {
    title: "Brandon Hall Awards 2026",
    excerpt:
      "Recognition across multiple categories highlighting innovation in learning, onboarding, and workforce development.",
    img: "/images/award-20years.jpg",
  },
  {
    title: "Top GCC Recognition 2026",
    excerpt:
      "Recognition highlighting excellence in talent, operations, workplace innovation, and global capability center practices.",
    img: "/images/award-aiconic.jpg",
  },
  {
    title: "Globee Awards for Artificial Intelligence 2026",
    excerpt:
      "Recognition celebrating achievements in artificial intelligence innovation and enterprise applications.",
    img: "/images/award-edison.jpg",
  },
  {
    title: "AI Innovation Recognition for Fraud Prevention",
    excerpt:
      "Recognition highlighting the use of advanced AI technologies to support fraud detection and prevention.",
    img: "/images/award-rising-star.jpg",
  },
  {
    title: "IDEA X AIW3 Awards 2026",
    excerpt:
      "Recognition celebrating organizations contributing to digital innovation and AI-led transformation.",
    img: "/images/award-20years.jpg",
  },
  {
    title: "Global Brand Award 2026",
    excerpt:
      "Recognition highlighting innovation and technology capabilities in AI and digital transformation.",
    img: "/images/award-aiconic.jpg",
  },
  {
    title: "We Love Tech Awards",
    excerpt:
      "Recognition celebrating organizations and technology solutions delivering meaningful digital innovation.",
    img: "/images/award-edison.jpg",
  },
  {
    title: "World Fintech Awards 2026",
    excerpt:
      "Recognition highlighting innovation and technology-led transformation across financial services.",
    img: "/images/award-rising-star.jpg",
  },
  {
    title: "AIM 40 Under 40 Awards 2026",
    excerpt:
      "Recognition celebrating hands-on AI and technology talent contributing to the evolution of enterprise AI.",
    img: "/images/award-20years.jpg",
  },
  {
    title: "Microsoft AI Platform Specialization",
    excerpt:
      "Recognition reflecting technical capabilities in building and delivering solutions using Microsoft's AI platform.",
    img: "/images/award-aiconic.jpg",
  },
  {
    title: "Asia-Pacific Stevie Awards 2026",
    excerpt:
      "Recognition celebrating innovation and business achievements across the Asia-Pacific region.",
    img: "/images/award-edison.jpg",
  },
  {
    title: "Financial Times Top 500 Recognition",
    excerpt:
      "Recognition highlighting organizations across the Asia-Pacific business and employment landscape.",
    img: "/images/award-rising-star.jpg",
  },
  {
    title: "AIM Top 50 Firms for Data Scientists",
    excerpt:
      "Recognition highlighting organizations creating strong environments for data science professionals and innovation.",
    img: "/images/award-20years.jpg",
  },
  {
    title: "Minsky Award for Excellence in AI",
    excerpt:
      "Recognition highlighting innovation and responsible application of artificial intelligence across enterprise workflows.",
    img: "/images/award-aiconic.jpg",
  },
  {
    title: "BFSI Fraud Prevention Recognition",
    excerpt:
      "Recognition highlighting technology-led approaches to fraud prevention and risk mitigation across financial services.",
    img: "/images/award-edison.jpg",
  },
  {
    title: "Recognition for Agentic AI Services",
    excerpt:
      "Recognition highlighting capabilities in agentic AI services and enterprise AI transformation.",
    img: "/images/award-rising-star.jpg",
  },
  {
    title: "Fraud Prevention Solution Recognition",
    excerpt:
      "Recognition highlighting innovative approaches to anti-fraud and risk mitigation across the BFSI sector.",
    img: "/images/award-20years.jpg",
  },
  {
    title: "Global Waste Management Awards 2025",
    excerpt:
      "Recognition highlighting technology and innovation supporting modern waste management practices.",
    img: "/images/award-aiconic.jpg",
  },
  {
    title: "AI Impact Awards 2025",
    excerpt:
      "Recognition celebrating practical AI innovation and enterprise-ready solutions designed for real-world impact.",
    img: "/images/award-edison.jpg",
  },
  {
    title: "Top Firms for Women in Tech 2025",
    excerpt:
      "Recognition highlighting organizations working to create supportive environments and opportunities for women in technology.",
    img: "/images/award-rising-star.jpg",
  },
];

export default function Awards() {
  return (
    <>
      <InsightsHero
        title="Awards"
        img="/images/insights-hero-whitepapers.jpg"
      />

      <InsightsCardGrid items={AWARDS} />
    </>
  );
}