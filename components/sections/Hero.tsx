import Image from "next/image";
import { decorOne, decorTwo, heroBg, heroOne, logoTagline } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="beranda" className="relative isolate pt-(--header-top-height)">
      <Decoration src={decorOne} className="left-0 top-0 w-180 md:w-325" />
      <Decoration src={decorTwo} className="right-0 top-56 w-80 md:top-113 md:w-158" />
      <Sparkle size="sm" className="right-6 top-24 lg:right-34 lg:top-74" />
      <Sparkle size="md" className="-bottom-4 left-3/4" />
      <Sparkle size="sm" className="bottom-8 left-5/6" />

      <Container className="grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:pb-20 lg:pt-8 2xl:pb-28 2xl:pt-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="relative w-fit">
            <Sparkle size="sm" className="-right-4 -top-10" />
            <Image src={logoTagline} alt="Kalani Blooms - Gift & Flower Gallery" sizes="(min-width: 1536px) 424px, (min-width: 1024px) 312px, 248px" className="h-auto w-62 lg:w-78 2xl:w-106" />
          </div>

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

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg lg:justify-self-end 2xl:max-w-2xl">
          <Image src={heroBg} alt="" aria-hidden sizes="(min-width: 1024px) 460px, 90vw" className="absolute -top-4 right-0 h-auto w-9/10" />
          <Image
            src={heroOne}
            alt="Buket bunga lily dan anyelir dengan wrapping pink"
            priority
            sizes="(min-width: 1536px) 672px, (min-width: 1024px) 512px, 448px"
            className="relative h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
