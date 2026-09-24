import AboutPageHero from "../../components/aboutuspage/AboutPageHero";
import HyperscalerPartners from "../../components/HyperscalerPartners";
import PartnershipTabs from "../../components/aboutuspage/PartnershipTabs";
import CustomerSuccessStories from "../../components/aboutuspage/CustomerSuccessStories";
import ContactForm from "../../components/ContactForm";

export default function Partnership() {
  return (
    <>
      <AboutPageHero
        theme="navy"
        eyebrow="Technology Partnerships"
        title="Transform Your Business with Cloud and AI Innovation"
        subtitle="Collaborate with Work Science to build scalable, data-driven, and intelligent technology solutions."
        cta="Explore Partnership Opportunities"
      />

      <section className="bg-white pt-14 md:pt-20 pb-4">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B]">
            Driving Innovation Through Technology Partnerships
          </h2>

          <p className="text-sm text-[#4a4a5a] leading-relaxed">
            Work Science brings together cloud platforms, data technologies,
            artificial intelligence, and enterprise systems to help
            organizations modernize their technology landscape. By combining
            our engineering and domain expertise with leading technology
            ecosystems, we help businesses build scalable solutions that
            support innovation, efficiency, and long-term growth.
          </p>
        </div>
      </section>

      <HyperscalerPartners />
      <PartnershipTabs />
      <CustomerSuccessStories />
      <ContactForm />
    </>
  );
}