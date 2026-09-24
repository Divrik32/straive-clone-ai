import AboutPageHero from "../../components/aboutuspage/AboutPageHero";
import EsgCommitments from "../../components/aboutuspage/EsgCommitments";
import EsgCertifications from "../../components/aboutuspage/EsgCertifications";
import EsgSocialGovernance from "../../components/aboutuspage/EsgSocialGovernance";
import EsgIndividuality from "../../components/aboutuspage/EsgIndividuality";
import EsgWellnessComms from "../../components/aboutuspage/EsgWellnessComms";

export default function ESG() {
  return (
    <div id="top">
      <AboutPageHero
        theme="green"
        eyebrow="ESG"
        title="Building a More Sustainable Future"
        subtitle="Our approach to environmental responsibility, social impact, ethical governance, and long-term sustainable growth."
      />

      <EsgCommitments />
      <EsgCertifications />
      <EsgSocialGovernance />
      <EsgIndividuality />
      <EsgWellnessComms />
    </div>
  );
}