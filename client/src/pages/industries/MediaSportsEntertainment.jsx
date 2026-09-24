import {
  Tv2,
  Music4,
  Trophy,
  Database,
  Radio,
  Tags,
  ShieldCheck,
  Users,
  HeartPulse,
  Briefcase,
  Zap,
  Rocket,
  Sparkles,
  Handshake,
} from "lucide-react";

import IndustryHero from "../../components/industrypage/IndustryHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import IconCardGrid from "../../components/servicepage/IconCardGrid";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import ContactForm from "../../components/ContactForm";

const SEGMENTS = [
  {
    icon: Tv2,
    title: "Broadcasting & OTT",
    text: "Content operations, scheduling, and metadata solutions for broadcasters and streaming platforms.",
  },
  {
    icon: Music4,
    title: "Streaming (Video & Music)",
    text: "AI-led content management, metadata, analytics, and workflow solutions for streaming platforms.",
  },
  {
    icon: Trophy,
    title: "Sports",
    text: "Data and AI solutions for fan experience, player performance analytics, content, and commercial operations.",
  },
];

const CAPABILITIES = [
  {
    icon: Database,
    title: "Enterprise Data",
    text: "Build a reliable data foundation with data engineering, management, and quality frameworks to support analytics and AI.",
  },
  {
    icon: Radio,
    title: "Broadcasting & Programming",
    text: "Support scheduling, program matching, reconciliation, and intelligent programming workflows across channels.",
  },
  {
    icon: Tags,
    title: "Metadata & Attributes Management",
    text: "Standardize, enrich, and operationalize content metadata across taxonomies, catalogs, and content workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Rights & Revenue Integrity",
    text: "Support rights, royalties, revenue, and compliance workflows through automated validation and reconciliation.",
  },
  {
    icon: Users,
    title: "Fan & Customer Analytics",
    text: "Use audience and customer data to understand engagement, retention, personalization, and behavior.",
  },
  {
    icon: HeartPulse,
    title: "Performance & Health Analytics",
    text: "Apply analytics and predictive models to support player performance, health, and availability workflows.",
  },
  {
    icon: Briefcase,
    title: "Commercial Operations",
    text: "Support sales, reconciliation, collections, and financial operations through analytics and automation.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Trophy,
    title: "Media & Sports Domain Understanding",
    text: "Solutions designed around the content, audience, operational, and commercial workflows of media and sports organizations.",
  },
  {
    icon: Sparkles,
    title: "Practical Generative AI",
    text: "Apply generative AI to suitable workflows with structured prompts, human oversight, and appropriate governance.",
  },
  {
    icon: Rocket,
    title: "Operational AI",
    text: "Move from experimentation toward practical AI solutions that fit existing business processes and systems.",
  },
  {
    icon: Zap,
    title: "Faster Workflow Automation",
    text: "Identify repetitive activities where automation and intelligent assistance can improve day-to-day operations.",
  },
  {
    icon: Sparkles,
    title: "Human-in-the-Loop Operations",
    text: "Keep domain experts involved in workflows where human review, validation, or judgment is important.",
  },
  {
    icon: Handshake,
    title: "Flexible Technology Integration",
    text: "Design solutions around existing enterprise applications, data platforms, APIs, and operational environments.",
  },
];

const VALUE_CHAIN = [
  {
    name: "AI Product Classification for Ad Intelligence",
    img: "/images/mse-usecase-image1.webp",
    description:
      "AI-assisted classification can help organize large volumes of advertising and media content.",
    bulletsTitle: "Solution Approach:",
    bullets: [
      "Automated classification pipelines with human-in-the-loop validation.",
      "Structured metadata and category assignment for downstream analytics.",
    ],
  },
  {
    name: "Program (EPG) Scheduling",
    img: "/images/mse-usecase-image2.webp",
    description:
      "AI-assisted scheduling can help teams manage programming information across multiple channels.",
    bulletsTitle: "Solution Approach:",
    bullets: [
      "Automated scheduling support and conflict detection.",
      "Structured programming data for easier operational management.",
    ],
  },
  {
    name: "Rights, Royalties & Revenue Integrity Operations",
    img: "/images/mse-usecase-image3.webp",
    description:
      "Fragmented rights and royalty information can make validation and reconciliation difficult.",
    bulletsTitle: "Solution Approach:",
    bullets: [
      "Automated rights reconciliation workflows.",
      "Data validation and structured reporting for audit and operational use.",
    ],
  },
  {
    name: "Viewership Intelligence & Audience Analytics",
    img: "/images/mse-usecase-image4.webp",
    description:
      "Disconnected audience information can make it difficult to build a consistent view of engagement.",
    bulletsTitle: "Solution Approach:",
    bullets: [
      "Unified audience data structures.",
      "AI-assisted segmentation and analytics for audience intelligence.",
    ],
  },
  {
    name: "Player Health Profiling & Risk Evaluation",
    img: "/images/mse-usecase-image5.webp",
    description:
      "Sports organizations can use performance and health data to support player monitoring and planning.",
    bulletsTitle: "Solution Approach:",
    bullets: [
      "Predictive analytics using available performance and health data.",
      "Earlier identification of relevant patterns for planning and review.",
    ],
  },
];

export default function MediaSportsEntertainment() {
  return (
    <>
      <IndustryHero
        title="AI & Data Solutions for Media, Sports & Entertainment"
        subtitle="Use data, analytics, and AI to improve content operations, audience intelligence, and commercial workflows."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <ServiceIntro
        heading="AI-Enabled Media Intelligence"
        body="Work Science combines data, AI, analytics, and human expertise to help media, sports, and entertainment organizations improve content workflows, audience intelligence, and operational decision-making."
      />

      <section id="solutions-section" className="scroll-mt-24">
        <IconCardGrid
          heading="Media Segments We Support with AI"
          items={SEGMENTS}
          columns={3}
        />

        <section className="bg-white pb-4">
          <div className="section-container text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-2">
              AI Capabilities Across Media, Sports & Entertainment
            </h2>

            <p className="text-sm text-[#4a4a5a] max-w-2xl mx-auto">
              Our capabilities support content, audience, data, and operational
              workflows across the media and entertainment ecosystem.
            </p>
          </div>
        </section>

        <section className="bg-white pb-14">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12">
              <div className="w-full">
                <img
                  src="/images/mse-capabilities-image1.webp"
                  alt="Media, Sports and Entertainment AI capabilities"
                  className="w-full h-[280px] md:h-[320px] object-cover rounded-sm"
                />
              </div>

              <div className="space-y-5">
                {CAPABILITIES.slice(0, 4).map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <Icon
                            size={25}
                            strokeWidth={1.5}
                            className="text-brand-orange"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#10162B] mb-1">
                          {item.title}
                        </h3>

                        <p className="text-[11px] md:text-[12px] text-[#4a4a5a] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              <div className="space-y-5">
                {CAPABILITIES.slice(4).map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 flex items-center justify-center">
                          <Icon
                            size={25}
                            strokeWidth={1.5}
                            className="text-brand-orange"
                          />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#10162B] mb-1">
                          {item.title}
                        </h3>

                        <p className="text-[11px] md:text-[12px] text-[#4a4a5a] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full">
                <img
                  src="/images/mse-capabilities-image2.webp"
                  alt="AI in sports and entertainment"
                  className="w-full h-[280px] md:h-[320px] object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        <ServiceIntro
          heading="AI Operationalization for Media, Sports & Entertainment"
          body="Move from isolated AI experiments toward practical, production-ready workflows. Work Science helps organizations identify suitable use cases, connect relevant data, and introduce AI with appropriate human oversight."
        />

        <IconCardGrid
          items={DIFFERENTIATORS}
          columns={3}
          bg="bg-[#f7f7f9]"
        />

        <ToolkitTabs
          heading="AI & Data Applications Across the Media Value Chain"
          tabs={VALUE_CHAIN}
        />
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}