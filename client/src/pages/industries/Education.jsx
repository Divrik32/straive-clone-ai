import { Database, LineChart, Bot } from "lucide-react";

import IndustryHero from "../../components/industrypage/IndustryHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import ContactForm from "../../components/ContactForm";

const ACCELERATOR_CHECKLIST = [
  "Enrollment",
  "Admissions",
  "Counseling",
  "Financial Aid",
  "Learning",
  "Coaching Support",
];

const INDUSTRIES = [
  {
    name: "Public Sector: State & Local Education Agencies",
    img: "/images/edu-industries-image1.webp",
    description:
      "Fragmented SIS, LMS, and assessment data can make it difficult for education agencies to identify important trends and support timely reporting.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Connect relevant education data sources.",
      "Automate validation and reporting workflows.",
      "Build dashboards and analytics for operational decision-making.",
    ],
  },
  {
    name: "Higher Education",
    img: "/images/edu-industries-image2.webp",
    description:
      "Institutions often manage data across admissions, financial aid, learning, and student-success platforms.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Unified student data platforms across the enrollment lifecycle.",
      "Analytics for retention and student success.",
      "Streamlined financial aid and advising workflows.",
    ],
  },
  {
    name: "K-12 Virtual & Charter Schools",
    img: "/images/edu-industries-image3.webp",
    description:
      "Virtual and charter schools need scalable data-driven operations across learning, administration, and reporting.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Managed data and analytics workflows.",
      "Automated compliance and attendance reporting.",
      "Personalized learning insights.",
    ],
  },
  {
    name: "Workforce & Learning Development",
    img: "/images/edu-industries-image4.webp",
    description:
      "Organizations need to connect learning activity with skills development, workforce readiness, and program outcomes.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Skills-based learning analytics.",
      "Outcome tracking across training programs.",
      "AI-powered content recommendations.",
    ],
  },
  {
    name: "EdTech",
    img: "/images/edu-industries-image5.webp",
    description:
      "EdTech platforms need scalable content, personalization, analytics, and intelligent product workflows.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Scalable content engineering and tagging.",
      "AI-assisted learning pathways.",
      "Platform engineering and analytics support.",
    ],
  },
];

const CAPABILITIES = [
  {
    icon: Database,
    title: "Data Analytics",
  },
  {
    icon: LineChart,
    title: "Data-Informed Operations",
  },
  {
    icon: Bot,
    title: "AI Service Centers",
  },
];

export default function Education() {
  return (
    <>
      <IndustryHero
        title="AI & Data Solutions That Improve Educational Outcomes"
        subtitle="Operationalized data for scalable education outcomes."
        buttons={["Explore Solutions", "Book a Demo"]}
      />

      <ServiceIntro
        heading="From AI Pilots to Enterprise-Wide Transformation"
        body="Work Science helps education organizations operationalize AI and data across curriculum, learner success, platform engineering, analytics, and administrative workflows."
      />

      <section id="solutions-section" className="scroll-mt-24">
        <section className="bg-white pb-14">
          <div className="section-container grid md:grid-cols-2 gap-10 items-center">
            <div className="h-64 rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="/images/edu-accelerator-image.webp"
                alt="AI Accelerators for Education"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
                AI Accelerators for Every Workflow
              </h2>

              <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5">
                Purpose-built AI capabilities can support education workflows
                across the learner and institutional lifecycle. These
                accelerators can help reduce repetitive work, surface useful
                insights, and give education teams more time for higher-value
                activities.
              </p>

              <ul className="grid grid-cols-2 gap-2 mb-5">
                {ACCELERATOR_CHECKLIST.map((c) => (
                  <li
                    key={c}
                    className="text-[13px] text-[#2a2a3a] flex gap-2"
                  >
                    <span className="text-emerald-500">&#10003;</span>
                    {c}
                  </li>
                ))}
              </ul>

              <p className="text-[12px] text-[#7a7a8a] leading-relaxed">
                AI capabilities can be integrated with existing education
                systems and workflows while maintaining appropriate human
                review, security, and governance.
              </p>
            </div>
          </div>
        </section>

        <ToolkitTabs
          heading="Industries We Serve"
          tabs={INDUSTRIES}
        />

        <section className="bg-[#0A0E1F] text-white py-16">
          <div className="section-container">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-12">
              Our Capabilities
            </h2>

            <div className="grid sm:grid-cols-3 gap-8">
              {CAPABILITIES.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center gap-4 bg-white/5 rounded-lg p-8"
                >
                  <Icon
                    className="w-8 h-8 text-brand-orange"
                    strokeWidth={1.5}
                  />

                  <p className="text-sm font-medium">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustryBanner
          heading="Ready to operationalize AI and data across your educational institution?"
          text="Contact us to schedule a strategic consultation."
          buttonLabel="Book a Demo"
        />
      </section>

      <section id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </section>
    </>
  );
}