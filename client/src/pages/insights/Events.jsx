import InsightsHero from "../../components/insightspage/InsightsHero";
import EventCardGrid from "../../components/insightspage/EventCardGrid";

const EVENTS = [
  {
    title: "SSP 2026",
    location: "Chula Vista, CA, USA",
    date: "May 27–29, 2026",
    excerpt:
      "Explore how organizations can operationalize AI, modernize content workflows, and create scalable digital experiences.",
    img: "/images/event-1.webp",
  },
  {
    title: "Peak 2026",
    location: "Las Vegas, USA",
    date: "April 20–22, 2026",
    excerpt:
      "Discover how AI, analytics, and intelligent automation are transforming sports and entertainment operations.",
    img: "/images/event-2.webp",
  },
  {
    title: "ASU+GSV 2026",
    location: "Manchester, San Diego, CA",
    date: "April 12–15, 2026",
    excerpt:
      "Explore AI-driven approaches to education, learning technology, digital platforms, and student experiences.",
    img: "/images/event-3.webp",
  },
  {
    title: "London Book Fair",
    location: "London, UK",
    date: "March 10–12, 2026",
    excerpt:
      "Explore publishing technology, content workflows, metadata, and AI-enabled solutions for the modern publishing ecosystem.",
    img: "/images/event-4.webp",
  },
  {
    title: "PyConf",
    location: "Hyderabad, India",
    date: "March 14–15, 2026",
    excerpt:
      "Connect with technology professionals and explore practical applications of Python, AI, data, and modern software engineering.",
    img: "/images/event-5.webp",
  },
  {
    title: "FABCON",
    location: "Atlanta, USA",
    date: "March 16–20, 2026",
    excerpt:
      "Explore data engineering, advanced analytics, and AI integration across modern Microsoft data platforms.",
    img: "/images/event-6.webp",
  },
  {
    title: "InvestOps Europe 2026",
    location: "London, UK",
    date: "Sep 16–17, 2026",
    excerpt:
      "Connect with investment operations leaders exploring technology, automation, resilience, and operational efficiency.",
    img: "/images/event-7.webp",
  },
  {
    title: "1EdTech Conference 2026",
    location: "Thessaloniki, Greece",
    date: "Sep 13–17, 2026",
    excerpt:
      "Explore how education and learning organizations can turn AI initiatives into practical solutions and measurable outcomes.",
    img: "/images/event-8.webp",
  },
  {
    title: "AIFS 2026",
    location: "155 Bishopsgate, London",
    date: "September 8–9, 2026",
    excerpt:
      "Explore how enterprises are moving from AI experimentation toward scalable implementation across business operations.",
    img: "/images/event-9.jpg",
  },
  {
    title: "MHC Vegas",
    location: "ARIA Resort & Casino, Las Vegas",
    date: "March 16–19, 2026",
    excerpt:
      "Explore technology and automation trends across payments, fraud prevention, financial operations, and customer experience.",
    img: "/images/event-10.jpg",
  },
];

export default function Events() {
  return (
    <>
      <InsightsHero
        title="Upcoming Events"
        img="/images/insights-hero-events.jpg"
      />

      <EventCardGrid items={EVENTS} />
    </>
  );
}