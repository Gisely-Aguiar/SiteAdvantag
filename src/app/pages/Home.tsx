import { HeroCarousel } from "../components/HeroCarousel";
import { VideoSection } from "../components/VideoSection";
import { WhyAdvantagSection } from "../components/WhyAdvantagSection";
import { ClientsSection } from "../components/ClientsSection";
import { ServicesSection } from "../components/ServicesSection";
import { RFIDSection } from "../components/RFIDSection";
import { CABSection } from "../components/CABSection";
import { ApplicationsSection } from "../components/ApplicationsSection";
import { CommitmentSection } from "../components/CommitmentSection";
import { TimelineSection } from "../components/TimelineSection";
import { PartnersSection } from "../components/PartnersSection";
import { ContactSection } from "../components/ContactSection";
import { CustomizationSection } from "../components/Personalizacao";
import { ConsultingSection } from "../components/Consultoria";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <VideoSection />
      <WhyAdvantagSection />
      <ClientsSection />
      <ServicesSection />
      <RFIDSection />
      <CABSection />
      <ApplicationsSection />
      <CustomizationSection />
      <ConsultingSection />
      <CommitmentSection />
      <TimelineSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}
