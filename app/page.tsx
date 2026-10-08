import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { TopProducts } from "@/components/Products";
import { Collections, WhyChoose } from "@/components/WhyChoose";


export default function Home() {
  return (
    <main className="relative overflow-hidden bg-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-121 top-[62%] size-274.25 rounded-full bg-[#FFD3D3]/35 blur-[200px]" />
        <div className="absolute -right-75 top-[74%] size-274.25 rounded-full bg-[#FFD3D3]/35 blur-[200px]" />
      </div>

      <div className="relative">
        <Hero />
        <TopProducts />
        <WhyChoose />
        <Collections />
        <Footer />
      </div>
    </main>
  );
}
