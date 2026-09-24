import {
  ShieldCheck,
  Cpu,
  Lightbulb,
  Handshake,
  TrendingUp,
  Network,
  ServerCog,
  Bot,
  Gauge,
  Workflow,
  CloudCog,
} from "lucide-react";
import ContactForm from "../../components/ContactForm";

const CHALLENGES = [
  "High volume of repetitive support requests increasing operational workload",
  "Complex IT infrastructure requiring continuous monitoring and maintenance",
  "Growing cybersecurity risks across applications, systems, and business data",
  "Fragmented tools and systems making IT visibility and decision-making difficult",
];

const SOLUTIONS = [
  {
    title: "AI-Powered Service Desk",
    bullets: [
      "Intelligent ticket classification and routing",
      "AI-assisted support and faster issue resolution",
    ],
  },
  {
    title: "Proactive IT Operations",
    bullets: [
      "Real-time infrastructure and application monitoring",
      "Automated alerts and predictive issue detection",
    ],
  },
  {
    title: "Cloud & Infrastructure Management",
    bullets: [
      "Scalable cloud infrastructure and deployment workflows",
      "Performance monitoring and operational optimization",
    ],
  },
  {
    title: "IT Automation",
    bullets: [
      "Automate repetitive operational processes",
      "Connect applications and systems through intelligent workflows",
    ],
  },
];

const DIFFERENTIATORS = [
  { icon: TrendingUp, title: "Data-Driven Operations" },
  { icon: Lightbulb, title: "AI-First Approach" },
  { icon: Cpu, title: "Automation & Efficiency" },
  { icon: Bot, title: "Intelligent IT Support" },
  { icon: Handshake, title: "Collaborative Delivery" },
  { icon: Gauge, title: "Continuous Optimization" },
];

const INFRASTRUCTURE = [
  {
    icon: ShieldCheck,
    title: "Security-Focused IT Operations",
  },
  {
    icon: ServerCog,
    title: "Scalable Infrastructure Management",
  },
  {
    icon: Network,
    title: "Connected & Interoperable Systems",
  },
  {
    icon: Gauge,
    title: "AI-Powered Monitoring & Analytics",
  },
  {
    icon: Bot,
    title: "AI-Assisted IT Support",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure & DevOps",
  },
];

const CAPABILITIES = [
  "IT Service Management",
  "AI-Powered Service Desk",
  "Cloud & Infrastructure Operations",
  "DevOps & Deployment Automation",
  "Cybersecurity & Monitoring",
  "IT Process Automation",
];

const USE_CASES = [
  {
    title: "AI-Powered IT Support",
    text: "Use AI assistants and intelligent workflows to handle common support requests, route issues, and help teams resolve problems faster.",
  },
  {
    title: "Infrastructure Monitoring",
    text: "Monitor applications, servers, cloud resources, and infrastructure to improve visibility and identify potential issues earlier.",
  },
  {
    title: "DevOps Automation",
    text: "Automate deployment, application operations, environment management, and repetitive development workflows.",
  },
  {
    title: "Business Continuity",
    text: "Create reliable operational processes and monitoring capabilities that help technology teams maintain business-critical systems.",
  },
];

export default function ITTechOps() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(120deg, #06111f 0%, #0a2338 55%, #0a3a4a 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.35),transparent_55%)]" />

        <div className="relative section-container py-16 md:py-20">
          <h1 className="text-2xl md:text-4xl font-semibold mb-3 max-w-xl">
            Intelligent IT Operations for Modern Businesses
          </h1>

          <p className="text-sm text-white/70 mb-6 max-w-md">
            Combine AI, automation, cloud technologies, and proactive
            monitoring to build reliable and efficient IT operations.
          </p>

          <button className="btn-pill btn-orange text-[11px] px-6 py-3 uppercase">
            Talk to an Expert
          </button>
        </div>
      </section>

      {/* Video */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h2 className="text-xl font-semibold text-[#10162B] text-center mb-8">
            Scale IT Operations with Intelligent Automation
          </h2>

          <div className="max-w-2xl mx-auto relative h-56 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/YCtWpfjD5eY"
              title="Intelligent IT Operations"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white pb-14">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/it-challenges.jpg"
            alt="Modern IT operations challenges"
            className="h-56 w-full rounded-lg object-cover order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-[#10162B] mb-5">
              Solving Modern IT Operations Challenges
            </h3>

            <ul className="space-y-3">
              {CHALLENGES.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-2 text-sm text-[#4a4a5a]"
                >
                  <span className="text-brand-orange">&#8226;</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white pb-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">
            AI-Powered IT Operations Solutions
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.title}
                className="grid grid-cols-[auto_1fr] rounded-lg overflow-hidden"
              >
                <div className="bg-brand-orange text-white p-5 w-40 flex flex-col justify-center">
                  <p className="text-sm font-semibold leading-snug">
                    {solution.title}
                  </p>
                </div>

                <div className="bg-black/5 p-5 flex flex-col justify-center gap-2">
                  {solution.bullets.map((bullet) => (
                    <p
                      key={bullet}
                      className="text-[12px] text-[#4a4a5a] flex gap-2"
                    >
                      <span className="text-brand-orange">&#10003;</span>
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Science Advantage */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-4">
            A Smarter Approach to IT Operations
          </h3>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-2xl mb-10">
            Work Science combines AI, automation, engineering, and operational
            expertise to help organizations build more efficient and
            responsive IT environments. Our approach focuses on reducing
            repetitive work, improving visibility, and creating reliable
            technology operations.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {DIFFERENTIATORS.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />

                  <p className="text-sm text-[#2a2a3a]">{title}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/it-advantage-1.jpg"
                alt="Intelligent IT operations"
                className="h-40 w-full rounded-lg object-cover"
              />

              <img
                src="/images/it-advantage-2.webp"
                alt="AI-powered IT operations"
                className="h-40 w-full rounded-lg object-cover mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] text-center mb-10">
            IT Operations Capabilities
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CAPABILITIES.map((capability) => (
              <div
                key={capability}
                className="border border-black/10 rounded-lg p-5 flex items-center gap-3"
              >
                <ServerCog className="w-5 h-5 text-brand-orange shrink-0" />

                <p className="text-sm font-medium text-[#2a2a3a]">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-[#f7f7f9] py-14">
        <div className="section-container">
          <h3 className="text-xl md:text-2xl font-semibold text-[#10162B] mb-3">
            Future-Ready IT Infrastructure
          </h3>

          <p className="text-sm text-[#4a4a5a] leading-relaxed max-w-2xl mb-8">
            Build a secure, scalable, and connected technology foundation
            supported by intelligent monitoring, automation, cloud
            infrastructure, and AI-assisted operations.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INFRASTRUCTURE.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-4 flex items-start gap-3 border border-black/5"
              >
                <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />

                <p className="text-[12px] font-medium text-[#2a2a3a]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-14">
        <div className="section-container">
          <h3 className="text-xl font-semibold text-[#10162B] text-center mb-8">
            Intelligent IT Operations Use Cases
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {USE_CASES.map((item) => (
              <div
                key={item.title}
                className="border border-black/10 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Workflow className="w-5 h-5 text-brand-orange" />

                  <h4 className="text-sm font-semibold text-[#10162B]">
                    {item.title}
                  </h4>
                </div>

                <p className="text-[12px] text-[#4a4a5a] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-orange text-white py-10">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Build Smarter IT Operations
            </h3>

            <p className="text-sm text-white/90 max-w-xl">
              Bring AI, automation, cloud infrastructure, and intelligent
              monitoring together to create more efficient technology
              operations.
            </p>
          </div>

          <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase shrink-0">
            Talk to Our Experts
          </button>
        </div>
      </section>

      <ContactForm />
    </>
  );
}