import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import DataManagement from "./pages/services/DataManagement";
import AIDesignDeployment from "./pages/services/AIDesignDeployment";
import AICustomerExperience from "./pages/services/AICustomerExperience";
import GlobalCapabilityCenter from "./pages/services/GlobalCapabilityCenter";
import InsightsAndAnalytics from "./pages/services/InsightsAndAnalytics";
import ITTechOps from "./pages/services/ITTechOps";
import GenerativeAI from "./pages/services/GenerativeAI";
import AgenticAISolutions from "./pages/services/AgenticAISolutions";
import CapitalMarkets from "./pages/industries/CapitalMarkets";
import BankingFinancialServices from "./pages/industries/BankingFinancialServices";
import EnergyUtilities from "./pages/industries/EnergyUtilities";
import PharmaLifeSciences from "./pages/industries/PharmaLifeSciences";
import ScienceResearch from "./pages/industries/ScienceResearch";
import MediaSportsEntertainment from "./pages/industries/MediaSportsEntertainment";
import Education from "./pages/industries/Education";
import ManufacturingSupplyChain from "./pages/industries/ManufacturingSupplyChain";
import Retail from "./pages/industries/Retail";
import CPG from "./pages/industries/CPG";
import AnalystRecognitions from "./pages/insights/AnalystRecognitions";
import Events from "./pages/insights/Events";
import Ebooks from "./pages/insights/Ebooks";
import Videos from "./pages/insights/Videos";
import Whitepapers from "./pages/insights/Whitepapers";
import Blogs from "./pages/insights/Blogs";
import CaseStudies from "./pages/insights/CaseStudies";
import Infographics from "./pages/insights/Infographics";
import Brochures from "./pages/insights/Brochures";
import Awards from "./pages/insights/Awards";
import AboutUs from "./pages/aboutus/AboutUs";
import ESG from "./pages/aboutus/ESG";
import News from "./pages/aboutus/News";
import Partnership from "./pages/aboutus/Partnership";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/data-management" element={<DataManagement />} />
          <Route path="/services/ai-design-deployment" element={<AIDesignDeployment />} />
          <Route path="/services/ai-customer-experience" element={<AICustomerExperience />} />
          <Route path="/services/global-capability-center" element={<GlobalCapabilityCenter />} />
          <Route path="/services/insights-and-analytics" element={<InsightsAndAnalytics />} />
          <Route path="/services/it-tech-ops" element={<ITTechOps />} />
          <Route path="/services/generative-ai" element={<GenerativeAI />} />
          <Route path="/services/agentic-ai-solutions" element={<AgenticAISolutions />} />
          <Route path="/industries/capital-markets" element={<CapitalMarkets />} />
          <Route path="/industries/banking-financial-services" element={<BankingFinancialServices />} />
          <Route path="/industries/energy-utilities" element={<EnergyUtilities />} />
          <Route path="/industries/pharma-life-sciences" element={<PharmaLifeSciences />} />
          <Route path="/industries/science-research" element={<ScienceResearch />} />
          <Route path="/industries/media-sports-entertainment" element={<MediaSportsEntertainment />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/manufacturing-supply-chain" element={<ManufacturingSupplyChain />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/cpg" element={<CPG />} />
          <Route path="/insights/analyst-recognitions" element={<AnalystRecognitions />} />
          <Route path="/insights/events" element={<Events />} />
          <Route path="/insights/ebooks" element={<Ebooks />} />
          <Route path="/insights/videos" element={<Videos />} />
          <Route path="/insights/whitepapers" element={<Whitepapers />} />
          <Route path="/insights/blogs" element={<Blogs />} />
          <Route path="/insights/case-studies" element={<CaseStudies />} />
          <Route path="/insights/infographics" element={<Infographics />} />
          <Route path="/insights/brochures" element={<Brochures />} />
          <Route path="/insights/awards" element={<Awards />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/esg" element={<ESG />} />
          <Route path="/about-us/news" element={<News />} />
          <Route path="/about-us/partnership" element={<Partnership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
