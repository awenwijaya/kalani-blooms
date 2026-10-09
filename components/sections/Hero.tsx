import Image from "next/image";
import { ellipseFilled, ellipseOutlinedLight, heroBg, heroOne, logoTagline } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden">
      <Decoration src={ellipseFilled} className="-left-1/4 -top-1/4 w-3/4" />
      <Decoration src={ellipseOutlinedLight} className="-left-1/4 -top-1/3 w-2/3" />
      <Sparkle size="sm" className="left-1/3 top-12 hidden lg:block" />
      <Sparkle size="sm" className="right-6 top-12 lg:right-12" />
      <Sparkle size="md" className="bottom-6 right-1/4 hidden md:block" />

      <Container className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:pb-28 lg:pt-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <Image src={logoTagline} alt="Kalani Blooms - Gift & Flower Gallery" className="h-auto w-64 lg:w-108" />

          <h1 className="text-4xl leading-display sm:text-5xl lg:text-7xl">
            Every Flower <span className="text-secondary">Matters</span>
          </h1>

          <div className="space-y-4 text-base lg:text-xl">
            <p>
              Kalani Blooms adalah florist di Bali yang menghadirkan rangkaian bunga untuk merayakan momen istimewa
              dan menyampaikan perasaan. Mulai dari hadiah ulang tahun, wisuda, anniversary, hingga ucapan terima
              kasih, setiap rangkaian dibuat dengan perhatian pada pilihan bunga, perpaduan warna, dan detail
              pembungkusnya.
            </p>
            <p>
              Kami menyediakan pilihan bunga segar dan artificial dengan berbagai gaya, dari buket sederhana hingga
              rangkaian berukuran besar. Pelanggan juga dapat menyesuaikan pesanan berdasarkan momen, warna favorit,
              dan budget.
            </p>
          </div>

          <Button href={siteConfig.orderUrl} className="w-full">
            Pesan Sekarang
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Image src={heroBg} alt="" aria-hidden className="absolute -top-4 right-0 h-auto w-9/10" />
          <Image
            src={heroOne}
            alt="Buket bunga lily dan anyelir dengan wrapping pink"
            priority
            className="relative h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
