import ContactForm from "@/components/contaxt-form";
import HeroSection from "@/components/hero";
import PreviousWork from "@/components/previous-work";
import ProcessSection from "@/components/process-section";
import VideoSection from "@/components/video-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <VideoSection />
      <PreviousWork />
      <ProcessSection />
      <ContactForm />
    </div>
  );
}
