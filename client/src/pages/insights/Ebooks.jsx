import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const EBOOKS = [
  {
    title: "Protecting Sensitive Patient Data in Clinical Trials",
    excerpt:
      "Explore practical approaches for protecting sensitive healthcare and clinical trial data through modern data management and privacy techniques.",
    img: "/images/eb-1.webp",
  },
  {
    title: "The Ultimate Guide to Data-Driven Fleet Management",
    excerpt:
      "Discover how data analytics, telematics, and AI can improve fleet visibility, planning, maintenance, and operational decision-making.",
    img: "/images/eb-2.webp",
  },
  {
    title: "Redefining Your Peer Review Experience",
    excerpt:
      "Explore how modern technology and intelligent workflows can improve the peer review process and support scholarly publishing.",
    img: "/images/eb-3.webp",
  },
  {
    title: "Intelligent Document Processing — Playbook for Executives",
    excerpt:
      "Learn how intelligent document processing can automate the capture, extraction, classification, and processing of unstructured information.",
    img: "/images/eb-4.webp",
  },
  {
    title: "Data — Structured and Unstructured — Is the Key to Meaningful Insights",
    excerpt:
      "Explore approaches for turning structured and unstructured data into meaningful insights through classification, analytics, and AI.",
    img: "/images/eb-5.webp",
  },
  {
    title: "Accessibility Success Depends on Accessibility Strategy",
    excerpt:
      "Understand the importance of accessibility strategy when creating digital content and services that can be used by everyone.",
    img: "/images/eb-6.jpg",
  },
  {
    title: "Helping Organizations Achieve True Digital Acceleration",
    excerpt:
      "Explore how modern technology, automation, data, and AI can help organizations accelerate digital transformation.",
    img: "/images/eb-7.webp",
  },
  {
    title: "Emerging Content Formats",
    excerpt:
      "Explore the evolution of alternative content formats including video, podcasts, infographics, plain-language content, and interactive experiences.",
    img: "/images/eb-8.webp",
  },
];

export default function Ebooks() {
  return (
    <>
      <InsightsHero
        title="E-books"
        img="/images/insights-hero-ebooks.webp"
      />

      <InsightsCardGrid items={EBOOKS} />
    </>
  );
}