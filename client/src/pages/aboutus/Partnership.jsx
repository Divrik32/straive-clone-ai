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
        title="Transform Your Business with Cloud Innovation"
        subtitle="Collaborate With Straive to Drive Innovation and Growth"
        cta="Explore Partnership Opportunities"
      />

      <section className="bg-white pt-14 md:pt-20 pb-4">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#10162B]">
            Driving Excellence with Advanced Cloud Solutions
          </h2>
          <p className="text-sm text-[#4a4a5a] leading-relaxed">
            Straive is a leading cloud ecosystem partner that connects businesses with advanced
            cloud technologies from leading platforms. Our expertise in identifying the perfect
            blend between our partner&rsquo;s strengths and our own enables seamless integration
            and scalability. By leveraging these strategic partnerships, we deliver innovative
            cloud solutions that drive growth, enhance efficiency, and improve customer
            satisfaction.
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
