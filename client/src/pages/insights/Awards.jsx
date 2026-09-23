import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const AWARDS = [
  { title: "Brandon Hall Awards 2026", excerpt: "Brandon Hall Awards recognized in the New Teacher and Onboarding Series, across three categories.", img: "/images/award-20years.jpg" },
  { title: "Recognized as a Top GCC 2026", excerpt: "The GCC Workplace Innovation Summit & Awards recognizes Global Capability Centers demonstrating excellence in talent and operations.", img: "/images/award-aiconic.jpg" },
  { title: "Winner of the Globee® Awards for Artificial Intelligence 2026", excerpt: "The Globee® Awards for Artificial Intelligence recognize measurable achievements in artificial intelligence innovation.", img: "/images/award-edison.jpg" },
  { title: "Alconic Awards — Transforming Fraud with Graph AI", excerpt: "Recognized in the Best Use of AI in Tech category for deploying advanced AI that helps payment providers stop fraud.", img: "/images/award-rising-star.jpg" },
  { title: "Winner of the IDEA X AIW3 Awards 2026", excerpt: "The IDEA X AIW3 Awards 2026, also known as the Indian Digital Enabler Awards 2026, recognize organizations.", img: "/images/award-20years.jpg" },
  { title: "Straive Wins Global Brand Award 2026", excerpt: "Straive has been recognized at the Global Brand Awards 2026 in the Technology — AI Operationalization category.", img: "/images/award-aiconic.jpg" },
  { title: "We Love Tech Awards", excerpt: "We Love Tech Awards recognize organizations and products delivering meaningful technology.", img: "/images/award-edison.jpg" },
  { title: "2nd World Fintech Awards 2026", excerpt: "The World Fintech Summit Awards recognize organizations driving innovation and measurable impact.", img: "/images/award-rising-star.jpg" },
  { title: "Setting the Benchmark in Applied AI: Straive Recognized at AIM 40 Under 40 Awards 2026", excerpt: "The AIM 40 Under 40 AI Builders Awards 2026, held during MLDS 2026 in Bangalore, recognize hands-on AI talent.", img: "/images/award-20years.jpg" },
  { title: "Straive Strengthens Its AI Leadership With Microsoft AI Platform Specialization", excerpt: "Straive has achieved the Microsoft AI Platform Specialization, a recognition awarded to partners demonstrating technical depth.", img: "/images/award-aiconic.jpg" },
  { title: "Asia-Pacific Stevie Awards 2026", excerpt: "Straive is proud to be recognized as a Bronze Stevie Award winner in the 2026 Asia-Pacific Stevie Awards.", img: "/images/award-edison.jpg" },
  { title: "Straive Featured in the Financial Times Top 500", excerpt: "Straive is proud to be named among the Top 500 Best Employers Asia-Pacific by the Financial Times.", img: "/images/award-rising-star.jpg" },
  { title: "AIM Top 50 Firms for Data Scientists", excerpt: "Highlighting Straive's excellence in creating outstanding environments for data science talent and certification.", img: "/images/award-20years.jpg" },
  { title: "Minsky Award for Excellence in AI by Cypher — GCC AI Visionaries", excerpt: "A testament to Straive's pioneering work in embedding responsible artificial intelligence across enterprise workflows.", img: "/images/award-aiconic.jpg" },
  { title: "Straive Takes Top Honors for AI-Led Fraud Prevention at ObserveNow BFSI Excellence Forum", excerpt: "Straive has been awarded the Best Fraud Prevention Solution in BFSI at the ObserveNow BFSI Excellence Forum.", img: "/images/award-edison.jpg" },
  { title: "Straive Joins the Ranks of Global Leaders in Agentic AI Research", excerpt: "In a defining moment for our AI journey, Straive has been named a Leader in the PeMa Quadrant for Agentic AI Services.", img: "/images/award-rising-star.jpg" },
  { title: "Best Fraud Prevention Solution in BFSI — March 2026", excerpt: "Honoured for innovative anti-fraud and risk mitigation solutions across the BFSI landscape.", img: "/images/award-20years.jpg" },
  { title: "EEF Global Waste Management Awards 2025", excerpt: "Recognized for outstanding contributions to waste management technology worldwide.", img: "/images/award-aiconic.jpg" },
  { title: "AI Impact Awards 2025", excerpt: "Recognizing our bold strides in the Resilient City, with an evergreen-designed, enterprise-ready LLM solution.", img: "/images/award-edison.jpg" },
  { title: "Analytics India Magazine's Top 20 Best Firms for Women in Tech 2025", excerpt: "Straive is proud to be named one of the Top 20 Best Firms for Women to Work For 2025 by AIM.", img: "/images/award-rising-star.jpg" },
];

export default function Awards() {
  return (
    <>
      <InsightsHero title="Awards" img="/images/insights-hero-whitepapers.jpg" />
      <InsightsCardGrid items={AWARDS} />
    </>
  );
}
