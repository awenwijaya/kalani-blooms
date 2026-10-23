import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CallToAction } from "@/components/sections/CallToAction";
import { Collection } from "@/components/sections/Collection";
import { Hero } from "@/components/sections/Hero";
import { Locations } from "@/components/sections/Locations";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="konten" className="overflow-clip">
        <Hero />
        <Services />
        <Collection />
        <Locations />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
