import { Database, LineChart, Bot } from "lucide-react";
import IndustryHero from "../../components/industrypage/IndustryHero";
import ServiceIntro from "../../components/servicepage/ServiceIntro";
import IndustryBanner from "../../components/industrypage/IndustryBanner";
import ToolkitTabs from "../../components/servicepage/ToolkitTabs";
import ContactForm from "../../components/ContactForm";

const ACCELERATOR_CHECKLIST = ["Enrollment", "Admissions", "Counseling", "Financial Aid", "Learning", "Coaching Support"];

const INDUSTRIES = [
  {
    name: "Public Sector: State & Local Education Agencies",
    img: "/images/edu-industries-image1.webp",
    description:
      "Fragmented SIS, LMS, and assessment data across districts and states prevent educators from identifying at-risk students while creating costly manual work for compliance reporting.",
    bulletsTitle: "How We Help:",
    bullets: [
      "Standards-based data solutions unify those systems",
      "Automate validation and reporting, and deliver early-warning models and accountability dashboards",
      "Reducing data management costs by 30% while equipping educators with timely insights to support every student",
    ],
  },
  {
    name: "Higher Education",
    img: "/images/edu-industries-image2.webp",
    description: "Institutions face siloed data across admissions, financial aid, and student success platforms, slowing time-to-insight for enrollment and retention decisions.",
    bulletsTitle: "How We Help:",
    bullets: ["Unified student data platforms across the enrollment lifecycle", "Predictive retention and success models", "Streamlined financial aid and advising workflows"],
  },
  {
    name: "K-12 Virtual & Charter Schools",
    img: "/images/edu-industries-image3.webp",
    description: "Virtual and charter schools need scalable, data-driven operations without the overhead of large in-house IT teams.",
    bulletsTitle: "How We Help:",
    bullets: ["Managed data and analytics operations", "Automated compliance and attendance reporting", "Personalized learning insights at scale"],
  },
  {
    name: "Workforce & Learning Development",
    img: "/images/edu-industries-image4.webp",
    description: "Organizations need to connect learning outcomes to workforce readiness and business impact.",
    bulletsTitle: "How We Help:",
    bullets: ["Skills-based learning analytics", "Outcome tracking across training programs", "AI-powered content recommendations"],
  },
  {
    name: "EdTech",
    img: "/images/edu-industries-image5.webp",
    description: "EdTech platforms need to scale content operations and personalization without ballooning costs.",
    bulletsTitle: "How We Help:",
    bullets: ["Scalable content engineering and tagging", "AI-personalized learning pathways", "Platform engineering and analytics support"],
  },
];

const CAPABILITIES = ["Data Analytics", "Data-Informed Operations", "AI Service Centers"];

export default function Education() {
  return (
    <>
      <IndustryHero
        title="AI & Data Solutions That Improve Educational Outcomes"
        subtitle="Operationalized data for scalable education outcomes."
        buttons={["Talk to a Specialist"]}
      />

      <ServiceIntro
        heading="Institution from AI Pilots to Enterprise-Wide Transformation"
        body="We operationalize AI and data across the education ecosystem - from curriculum design and learner success to platform engineering and analytics. By combining advanced AI accelerators, and global delivery, we ensure you achieve measurable improvement, institutional effectiveness, and operational efficiencies, at scale, across K-12, Higher Education, Public Sector Learning, and EdTech."
      />

      {/* Kadal AI Accelerators */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <div className="h-64 rounded-lg overflow-hidden order-2 md:order-1">
            <img src="/images/edu-accelerator-image.webp" alt="Kadal AI Accelerators" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">Kadal AI Accelerators for Every Workflow</h2>
            <p className="text-sm text-[#4a4a5a] leading-relaxed mb-5">
              Purpose-built to solve education challenges across the enterprise, Kadal includes a library of
              100+ agents that orchestrate dynamic workflows &mdash; from end-to-end course development to
              persistent bots that support students throughout their lifecycle. Reduce manual effort, surface
              high-value insights, and enable education experts to focus on pedagogy and strategy rather than
              repetitive tasks. Our AI accelerators span critical use cases including:
            </p>
            <ul className="grid grid-cols-2 gap-2 mb-5">
              {ACCELERATOR_CHECKLIST.map((c) => (
                <li key={c} className="text-[13px] text-[#2a2a3a] flex gap-2">
                  <span className="text-emerald-500">&#10003;</span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-[#7a7a8a] leading-relaxed">
              Whether you need an enterprise workbench to build your own agentic workflows or prefer our
              &ldquo;Service as Software&rdquo; model with managed AI pods, Kadal adapts to your operationalization
              needs. With its own CMS, security protocols, and governance guardrails, Kadal creates a safe,
              responsible AI environment that delivers better outcomes with greater consistency across your
              institution.
            </p>
          </div>
        </div>
      </section>

      <ToolkitTabs heading="Industries We Serve" tabs={INDUSTRIES} />

      {/* Our Capabilities dark section */}
      <section className="bg-[#0A0E1F] text-white py-16">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-12">Our Capabilities</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Data Analytics" },
              { icon: LineChart, title: "Data-Informed Operations" },
              { icon: Bot, title: "AI Service Centers" },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4 bg-white/5 rounded-lg p-8">
                <Icon className="w-8 h-8 text-brand-orange" strokeWidth={1.5} />
                <p className="text-sm font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustryBanner
        heading="Ready to operationalize AI and data across your educational institution?"
        text="Contact us to schedule a strategic consultation."
        buttonLabel="Know More"
      />

      <ContactForm />
    </>
  );
}
