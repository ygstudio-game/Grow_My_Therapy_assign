import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBuilding from "@/components/sections/TrustBuilding";
import WhoIHelp from "@/components/sections/WhoIHelp";
import QuoteBand from "@/components/sections/QuoteBand";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import OurOffice from "@/components/sections/OurOffice";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBuilding />
        <WhoIHelp />
        <QuoteBand />
        <ExpertiseGrid />
        <About />
        <Services />
        <OurOffice />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
