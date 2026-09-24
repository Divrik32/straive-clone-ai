import { Sparkles, Bot, Users2, Handshake, Newspaper } from "lucide-react";

export const MEGA_MENUS = {
  Services: {
    type: "columns",
    heading: "Powered By Agentic AI",
    columns: [
      [
        { label: "Data Management", path: "/services/data-management" },
        { label: "AI Design & Deployment", path: "/services/ai-design-deployment" },
        { label: "AI Customer Experience", path: "/services/ai-customer-experience" },
        { label: "Global Capability Center", path: "/services/global-capability-center" },
      ],
      [
        { label: "Insights and Analytics", path: "/services/insights-and-analytics" },
        { label: "IT & Tech-Ops", path: "/services/it-tech-ops" },
        { label: "Generative AI", path: "/services/generative-ai" },
        { label: "Agentic AI solutions", path: "/services/agentic-ai-solutions" },
      ],
    ],
    image: { img: "/images/menu-services.webp", alt: "Powered by Agentic AI" },
  },
Industries: {
  type: "columns",
  columns: [
    [
      {
        label: "Capital Markets",
        path: "/industries/capital-markets",
      },
      {
        label: "Banking & Financial Services",
        path: "/industries/banking-financial-services",
      },
      {
        label: "Energy & Utilities",
        path: "/industries/energy-utilities",
      },
      {
        label: "Pharma & Life Sciences",
        path: "/industries/pharma-life-sciences",
      },
      {
        label: "Science & Research",
        path: "/industries/science-research",
      },
    ],
    [
      {
        label: "Media, Sports and Entertainment",
        path: "/industries/media-sports-entertainment",
      },
      {
        label: "Education",
        path: "/industries/education",
      },
      {
        label: "Manufacturing & Supply Chain",
        path: "/industries/manufacturing-supply-chain",
      },
      {
        label: "Retail",
        path: "/industries/retail",
      },
      {
        label: "CPG",
        path: "/industries/cpg",
      },
    ],
  ],
  image: {
    img: "/images/menu-industries.jpg",
    alt: "Industries we serve",
  },
},
  Insights: {
    type: "columns",
    columns: [
      [
        { label: "Analyst Recognitions", path: "/insights/analyst-recognitions" },
        { label: "Events", path: "/insights/events" },
        { label: "E-books", path: "/insights/ebooks" },
        { label: "Videos", path: "/insights/videos" },
        { label: "Whitepapers", path: "/insights/whitepapers" },
      ],
      [
        { label: "Blogs", path: "/insights/blogs" },
        { label: "Case Studies", path: "/insights/case-studies" },
        { label: "Infographics", path: "/insights/infographics" },
        { label: "Brochures", path: "/insights/brochures" },
        { label: "Awards", path: "/insights/awards" },
      ],
    ],
    image: { img: "/images/menu-insights.jpg", alt: "Insights and resources" },
  },
  "About Us": {
    type: "cards",
    cards: [
      { label: "About us", img: "/images/menu-about-us.webp", alt: "About Straive", path: "/about-us" },
      { label: "ESG", img: "/images/menu-esg.jpg", alt: "ESG at Straive", path: "/about-us/esg" },
      { label: "News", img: "/images/menu-news.jpg", alt: "Straive news", path: "/about-us/news" },
      { label: "Partnership", img: "/images/menu-partnership.jpg", alt: "Straive partnerships", path: "/about-us/partnership" },
    ],
  },
};