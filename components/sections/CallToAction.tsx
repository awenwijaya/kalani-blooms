import Image from "next/image";
import { decorThree, heroOne, logoTagline } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Glow, Sparkle } from "@/components/ui/Decoration";
import { socialIcons } from "@/components/ui/icons";
import { siteConfig, socials } from "@/data/site";

export function CallToAction() {
  return (
    <section id="order" className="relative isolate bg-linear-to-b from-transparent to-blush/30 py-16 lg:py-20 2xl:py-28">
      <Sparkle size="md" className="left-1/2 top-4" />
      <Sparkle size="md" className="right-24 top-4" />
      <Sparkle size="md" className="bottom-4 left-1/3" />
      <Sparkle size="md" className="bottom-4 right-12" />
      <Glow className="-left-60 top-24 size-160 md:-left-121 md:top-2 md:size-275" />
      <Glow className="-right-60 bottom-0 size-160 md:-right-90 md:bottom-auto md:top-195 md:size-275" />
      {/* Extra soft glow behind the flower on mobile */}
      <Glow className="left-1/2 top-12 size-100 -translate-x-1/2 md:hidden" />
      {/* Rings on the right edge, like the desktop reference; on md+ they come from decor-3 in the Locations section */}
      <Decoration src={decorThree} className="right-0 top-1/3 w-115 opacity-30 md:hidden" />

      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative flex flex-col items-center gap-4">
          <Sparkle size="md" className="right-4 top-1/3 lg:hidden" />
          <Image
            src={heroOne}
            alt="Buket bunga lily dan anyelir dengan wrapping pink"
            sizes="(min-width: 1536px) 500px, (min-width: 1024px) 384px, 320px"
            className="h-auto w-64 sm:w-80 lg:w-96 2xl:w-125"
          />
          <Image
            src={logoTagline}
            alt="Kalani Blooms - Gift & Flower Gallery"
            sizes="(min-width: 1536px) 732px, (min-width: 1024px) 516px, 280px"
            className="h-auto w-70 lg:w-129 2xl:w-183" />
        </div>

        <div className="relative flex flex-col items-center gap-6 text-center lg:items-end lg:text-right">
          <Sparkle size="md" className="-top-9 right-1/4 lg:hidden" />
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
                    <Icon className="size-6 text-primary 2xl:size-7" />
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
