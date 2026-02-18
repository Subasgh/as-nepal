
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { LessonsCareerTabs } from "@/components/LessonsCareerTabs";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LessonsCareerTabs />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
