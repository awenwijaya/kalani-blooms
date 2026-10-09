import { Navbar } from "@/components/layout/Navbar";
import { CallToAction } from "@/components/sections/CallToAction";
import { Collection } from "@/components/sections/Collection";
import { Hero } from "@/components/sections/Hero";
import { Locations } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Collection />
        <Locations />
        <CallToAction />
      </main>
    </>
  );
}
