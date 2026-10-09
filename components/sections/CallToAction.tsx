import Image from "next/image";
import { heroOne, logoTagline } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Glow, Sparkle } from "@/components/ui/Decoration";
import { socialIcons } from "@/components/ui/icons";
import { siteConfig, socials } from "@/data/site";

export function CallToAction() {
  return (
    <section id="order" className="relative isolate py-16 lg:py-28">
      <Glow className="-left-121 top-2" />
      <Glow className="-right-90 top-195" />
      <Sparkle size="md" className="left-9/20 top-109 hidden lg:block" />
      <Sparkle size="md" className="left-1/2 top-54 hidden lg:block" />
      <Sparkle size="md" className="bottom-12 right-23 hidden md:block" />

      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={heroOne}
            alt="Buket bunga lily dan anyelir dengan wrapping pink"
            sizes="(min-width: 1024px) 512px, 320px"
            className="h-auto w-64 sm:w-80 lg:w-lg"
          />
          <Image
            src={logoTagline}
            alt="Kalani Blooms - Gift & Flower Gallery"
            sizes="(min-width: 1024px) 768px, 288px"
            className="h-auto w-72 lg:w-3xl" />
        </div>

        <div className="flex flex-col items-center gap-6 text-center lg:items-end lg:text-right">
          <h2 className="max-w-3xl">
            Wujudkan Momen Bermakna <span className="text-secondary">Hari Ini</span>
          </h2>
          <p className="max-w-3xl">
            Jangan biarkan hari spesialnya berlalu begitu saja. Pesan rangkaian bunga di Kalani Blooms sekarang dan
            sampaikan perasaan yang sulit diungkapkan dengan kata-kata.
          </p>

          <div className="flex w-full max-w-3xl flex-col gap-4 lg:gap-5">
            <Button href={siteConfig.orderUrl} className="w-full">
              Pesan Sekarang
            </Button>

            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {socials.map(({ platform, handle, href }) => {
                const Icon = socialIcons[platform];

                return (
                  <Button key={platform} href={href} variant="secondary">
                    <Icon className="size-6 text-primary lg:size-7" />
                    {handle}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
