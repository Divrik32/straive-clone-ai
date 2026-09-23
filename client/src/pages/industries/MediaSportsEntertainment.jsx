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
  Award,
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
  { icon: Tv2, title: "Broadcasting & OTT", text: "Content operations, scheduling, and metadata solutions for broadcasters and streaming platforms." },
  { icon: Music4, title: "Streaming (Video & Music)", text: "We enable streaming, OTT, and AVOD platforms with AI-led content management, metadata, and recommendation." },
  { icon: Trophy, title: "Sports", text: "We help teams and leagues apply AI to fan experience, player performance analytics, and revenue growth, driven by data, video, and event insights." },
];

const CAPABILITIES = [
  { icon: Database, title: "Enterprise Data", text: "Build a governed data foundation with data engineering, management, and quality frameworks to enable scalable AI." },
  { icon: Radio, title: "Broadcasting & Programming", text: "Optimize scheduling, program matching, reconciliation, and AI-driven personalization across channels." },
  { icon: Tags, title: "Metadata & Attributes Management", text: "Standardize, enrich, and operationalize content metadata across multi-modal AI, metadata & taxonomy frameworks, and content merchandising." },
  { icon: ShieldCheck, title: "Rights & Revenue Integrity", text: "Ensure accuracy and compliance across rights, royalties, and revenue with automated validation and reconciliation." },
  { icon: Users, title: "Fan & Customer Analytics", text: "Fan and customer retention through fan intelligence, campaign personalization, and identity resolution, forecasting for competitive advantage." },
  { icon: HeartPulse, title: "Performance & Health Analytics", text: "Player performance, health, and availability insights using AI-driven predictive models and data." },
  { icon: Briefcase, title: "Commercial Ops", text: "Sales enablement, reconciliation, collections, and financial operations through automation and analytics." },
];

const IMPACT_STATS = [
  { title: "Speed to Value", value: "7-14 days", text: "to develop a working AI PoC" },
  { title: "Engagement", value: "20-35%", text: "increase in audience engagement through personalization" },
  { title: "Automation & Accuracy", value: "95%+", text: "accuracy in production-grade AI outputs" },
  { title: "Accelerators", value: "100+", text: "data and AI accelerators enabling faster build, deployment, and scale" },
  { title: "Efficiency & Speed", value: "50%", text: "improvement in operational efficiency while accelerating time to market by up to 60%" },
  { title: "Viewership Intelligence", value: "80%", text: "reduction in manual turnaround minutes" },
  { title: "Consumer Audience Intelligence", value: "10+ years", text: "of longitudinal audience intelligence engagement supporting evolving consumer behavior analysis" },
  { title: "Ad Intelligence & Classification", value: "20x", text: "faster ad creative classification, with client deployment timelines reduced from 15 weeks to 3 weeks" },
  { title: "AI-Powered EPG", value: "70%", text: "reduction in manual EPG content identification effort" },
];

const DIFFERENTIATORS = [
  { icon: Trophy, title: "Sports Domain Expertise", text: "Deep experience across major studios, news, and sports leagues." },
  { icon: Award, title: "Recognized Leaders in Generative AI by Analysts", text: "Structured prompt engineering and GenAI governance to deliver consistent, explainable, and production-ready AI output, recognized by industry analysts like ISG and AIM Research." },
  { icon: Rocket, title: "Operationalizing AI and Transformation at Scale", text: "We drive transformation by building end-to-end scale, not just embedded isolated experiments." },
  { icon: Zap, title: "Built for Speed of Value", text: "Combining rapid solutioning with deep engagement, unlocking measurable value fast." },
  { icon: Sparkles, title: "Proven Excellence in Client Operations Transition and Setup", text: "Executed large-scale transitions for global Media & Sports clients, driving minimal disruption and scalable operational setups aligned to strategic goals." },
  { icon: Handshake, title: "Hyperscaler & Ecosystem Partnerships", text: "Strong partnerships with AWS, Azure, Databricks, and Snowflake to deliver native, cost-optimized solutions." },
];

const VALUE_CHAIN = [
  {
    name: "AI Product Classification for Ad Intelligence",
    img: "/images/mse-usecase-image1.webp",
    description: "Challenge: Scaling the classification of millions of ad creatives with inconsistent manual tagging.",
    bulletsTitle: "Solution & Impact:",
    bullets: ["Solution: GenAI pipeline for automated classification with human-in-the-loop validation.", "Impact: 95%+ accuracy, 5x faster processing, 40% cost reduction."],
  },
  {
    name: "Program (EPG) Scheduling",
    img: "/images/mse-usecase-image2.webp",
    description: "Challenge: Manual EPG scheduling across hundreds of channels caused delays and errors.",
    bulletsTitle: "Solution & Impact:",
    bullets: ["Solution: AI-assisted scheduling engine with real-time conflict detection.", "Impact: 70% reduction in manual scheduling effort and fewer listing errors."],
  },
  {
    name: "Rights, Royalties & Revenue Integrity Operations",
    img: "/images/mse-usecase-image3.webp",
    description: "Challenge: Fragmented rights data led to royalty leakage and compliance risk.",
    bulletsTitle: "Solution & Impact:",
    bullets: ["Solution: Automated rights reconciliation and royalty validation workflows.", "Impact: Recovered significant leaked revenue and improved audit readiness."],
  },
  {
    name: "Powered Viewership Intelligence & Audience Analytics",
    img: "/images/mse-usecase-image4.webp",
    description: "Challenge: Disconnected viewership data across platforms limited audience insight.",
    bulletsTitle: "Solution & Impact:",
    bullets: ["Solution: Unified audience data layer with AI-driven segmentation.", "Impact: 20-35% increase in engagement through personalized recommendations."],
  },
  {
    name: "Powered Player Health Profiling & Risk Evaluation",
    img: "/images/mse-usecase-image5.webp",
    description: "Challenge: Limited visibility into player health and injury risk across a season.",
    bulletsTitle: "Solution & Impact:",
    bullets: ["Solution: Predictive player health and risk models built on performance and biometric data.", "Impact: Earlier risk detection and improved availability planning."],
  },
];

export default function MediaSportsEntertainment() {
  return (
    <>
      <IndustryHero
        title="From Studio to Screens: The Playbook for How Media, Sports & Entertainment Actually Works"
        subtitle="Subscriber monetization, and content analytics, wherever added to your stack, deployed in weeks."
        buttons={["Case Studies", "Book a Demo"]}
      />

      <ServiceIntro
        heading="AI-Enabled Media Matters"
        body="At Straive, we combine data, AI, and expert-in-the-loop to embed intelligence into strategy & workflows and deliver outcomes. Trusted by Fortune 500 media, sports and entertainment brands, we help transform content ecosystems into intelligent, scalable systems that drive engagement, efficiency, and revenue growth."
      />

      <IconCardGrid heading="Media Segments We Power with AI" items={SEGMENTS} columns={3} />

      <section className="bg-white pb-4">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-2">AI Capabilities Across Media, Sports & Entertainment</h2>
          <p className="text-sm text-[#4a4a5a] max-w-2xl mx-auto">
            Our capabilities are designed to support media enterprises across the full content, audience, and
            operations ecosystem.
          </p>
        </div>
      </section>
      <section className="bg-white pb-14">
  <div className="section-container">

    {/* Top Row: Image Left + Content Right */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-12">

      {/* Left Image */}
      <div className="w-full">
        <img
          src="/images/mse-capabilities-image1.webp"
          alt="Media, Sports and Entertainment AI capabilities"
          className="w-full h-[280px] md:h-[320px] object-cover rounded-sm"
        />
      </div>

      {/* Right Content */}
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

    {/* Bottom Row: Content Left + Image Right */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

      {/* Left Content */}
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

      {/* Right Image */}
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
        heading="AI Operationalization Partner for Media, Sports & Entertainment"
        body="Straive enables media enterprises to move beyond AI experimentation to production-grade, operationalized outcomes at scale."
      />

      <section className="bg-white pb-4">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#10162B]">Impact You Can Measure, Not Just Expected</h2>
        </div>
      </section>
      <section className="bg-white pb-14">
        <div className="section-container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMPACT_STATS.map((s) => (
            <div key={s.title} className="border border-black/10 rounded-lg p-5">
              <p className="text-lg font-bold text-brand-orange mb-1">{s.value}</p>
              <p className="text-sm font-semibold text-[#10162B] mb-1">{s.title}</p>
              <p className="text-[12px] text-[#4a4a5a] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <IconCardGrid items={DIFFERENTIATORS} columns={3} bg="bg-[#f7f7f9]" />

      <ToolkitTabs heading="Proven Impact Across the Media Value Chain" tabs={VALUE_CHAIN} />

      <ContactForm />
    </>
  );
}
