import InsightsHero from "../../components/insightspage/InsightsHero";
import EventCardGrid from "../../components/insightspage/EventCardGrid";

const EVENTS = [
  { title: "SSP 2026", location: "Chula Vista, CA, USA", date: "May 27\u201329, 2026", excerpt: "The future of publishing will be shaped by organizations that successfully operationalize AI at scale.", img: "/images/event-1.webp" },
  { title: "Peak 2026", location: "Las Vegas, USA", date: "April 20\u201322, 2026", excerpt: "AI in sports isn't a future play \u2014 it's already on the field. Straive is delivering 8\u201312% improvement in ticket yield...", img: "/images/event-2.webp" },
  { title: "ASU+GSV 2026", location: "Manchester, San Diego, CA", date: "April 12\u201315, 2026", excerpt: "LearningMate, a Straive company, is a proud sponsor of ASU+GSV 2026. Connect with us to explore AI-driven...", img: "/images/event-3.webp" },
  { title: "London Book Fair", location: "London, UK", date: "March 10\u201312, 2026", excerpt: "Explore the publishing world and content workflows with Straive at the London Book Fair 2026. Learn how...", img: "/images/event-4.webp" },
  { title: "PyConf", location: "Hyderabad, India", date: "March 14\u201315, 2026", excerpt: "At PyConf 2026 in Hyderabad, Straive's Anand S, LLM Psychologist, and TEDx speaker, is delivering an inspiring...", img: "/images/event-5.webp" },
  { title: "FABCON", location: "Atlanta, USA", date: "March 16\u201320, 2026", excerpt: "From data engineering to advanced analytics and AI integration within Microsoft Fabric, Straive helps...", img: "/images/event-6.webp" },
  { title: "InvestOps Europe 2026", location: "London, UK", date: "Sep 16\u201317, 2026", excerpt: "InvestOps Europe 2026 brings investment operations leaders together to rethink efficiency, resilience, and...", img: "/images/event-7.webp" },
  { title: "1EdTech Conference 2026", location: "Thessaloniki, Greece", date: "Sep 13\u201317, 2026", excerpt: "The future of education will be shaped by institutions and learning businesses that can turn AI ambition into practice.", img: "/images/event-8.webp" },
  { title: "AIFS 2026", location: "155 Bishopsgate, London", date: "September 8\u20139, 2026", excerpt: "AI is moving from experimentation to enterprise execution. Meet Straive at AIFS 2026 as we explore how financial...", img: "/images/event-9.jpg" },
  { title: "MHC Vegas", location: "ARIA Resort & Casino, Las Vegas", date: "March 16\u201319, 2026", excerpt: "MHC Vegas 2026 is the flagship global conference for professionals across payments, fraud prevention, and e-...", img: "/images/event-10.jpg" },
];

export default function Events() {
  return (
    <>
      <InsightsHero title="Upcoming Events" img="/images/insights-hero-events.jpg" />
      <EventCardGrid items={EVENTS} />
    </>
  );
}
