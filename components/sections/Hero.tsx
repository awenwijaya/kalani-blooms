import Image from "next/image";
import { decorOne, decorTwo, heroBg, heroOne, logoTagline } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="beranda" className="relative isolate">
      <Decoration src={decorOne} className="-top-20 left-0" />
      <Decoration src={decorTwo} className="right-0 top-93" />
      <Sparkle size="sm" className="left-1/3 top-54 hidden md:block" />
      <Sparkle size="sm" className="right-6 top-4 md:right-34 md:top-54" />
      <Sparkle size="md" className="-bottom-4 left-3/4 hidden md:block" />
      <Sparkle size="sm" className="bottom-8 left-5/6 hidden md:block" />

      <Container className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:pb-28 lg:pt-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <Image src={logoTagline} alt="Kalani Blooms - Gift & Flower Gallery" sizes="(min-width: 1024px) 432px, 256px" className="h-auto w-64 lg:w-108" />

          <h1>
            Every Flower <span className="text-secondary">Matters</span>
          </h1>

          <div className="space-y-4">
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

          <Button href={siteConfig.orderSectionHref} className="w-full">
            Pesan Sekarang
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end">
          <Image src={heroBg} alt="" aria-hidden sizes="(min-width: 1024px) 45vw, 90vw" className="absolute -top-4 right-0 h-auto w-9/10" />
          <Image
            src={heroOne}
            alt="Buket bunga lily dan anyelir dengan wrapping pink"
            priority
            sizes="(min-width: 1024px) 50vw, 448px"
            className="relative h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
