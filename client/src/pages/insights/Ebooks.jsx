import InsightsHero from "../../components/insightspage/InsightsHero";
import InsightsCardGrid from "../../components/insightspage/InsightsCardGrid";

const EBOOKS = [
  { title: "How to Ensure Sensitive Patient Data Privacy in Clinical Trials?", excerpt: "This playbook explores how Straive's Anonymization helps pharmaceutical companies ensure sensitive patient data...", img: "/images/eb-1.webp" },
  { title: "The Ultimate Guide to Data-Driven Fleet Management", excerpt: "Discover how data analytics, telematics, and AI are revolutionizing fleet management in this eBook. Learn...", img: "/images/eb-2.webp" },
  { title: "Redefining Your Peer Review Experience", excerpt: "Peer review is an integral part of the publication process as it provides academics with a seal of approval up...", img: "/images/eb-3.webp" },
  { title: "Intelligent Document Processing \u2014 Playbook to the Executives", excerpt: "Manually capturing, extracting, and processing unstructured data from various documents and in diverse...", img: "/images/eb-4.webp" },
  { title: "Data \u2014 Structured and Unstructured \u2014 Is the Key to Meaningful Insights", excerpt: "Download our eBook to know more about unstructured data classification \u2014 text, public & visual intelligence, and...", img: "/images/eb-5.webp" },
  { title: "Accessibility Success Depends on Accessibility Strategy", excerpt: "Accessibility, we often start by considering \u2018what\u2019 must be done to make digital content and services...", img: "/images/eb-6.jpg" },
  { title: "Straive \u2014 Helping Organizations Achieve True Digital Acceleration", excerpt: "Digital transformation necessitates businesses to keep up with the most recent advancements to deliver a...", img: "/images/eb-7.webp" },
  { title: "Emerging Content Formats", excerpt: "The future belongs to alternative content formats like videos, podcasts, posters, infographics, plain-language...", img: "/images/eb-8.webp" },
];

export default function Ebooks() {
  return (
    <>
      <InsightsHero title="E-books" img="/images/insights-hero-ebooks.webp" />
      <InsightsCardGrid items={EBOOKS} />
    </>
  );
}
