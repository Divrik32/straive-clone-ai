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
        title="Sustainability For A Better Tomorrow"
        subtitle="Environmental, Social, and Governance strategies that reflect our shared dedication to a more sustainable and equitable future."
      />
      <EsgCommitments />
      <EsgCertifications />
      <EsgSocialGovernance />
      <EsgIndividuality />
      <EsgWellnessComms />
    </div>
  );
}
