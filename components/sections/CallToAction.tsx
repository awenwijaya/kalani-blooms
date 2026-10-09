import Image from "next/image";
import { ellipseFilled, heroOne, logoTagline } from "@/assets";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decoration, Sparkle } from "@/components/ui/Decoration";
import { socialIcons } from "@/components/ui/icons";
import { siteConfig, socials } from "@/data/site";

export function CallToAction() {
  return (
    <section id="order" className="relative isolate overflow-hidden py-16 lg:py-28">
      <Decoration src={ellipseFilled} className="-bottom-1/4 -left-1/4 w-3/4" />
      <Sparkle className="left-1/2 top-1/4 hidden lg:block" />
      <Sparkle className="bottom-1/3 left-1/2 hidden lg:block" />
      <Sparkle className="bottom-6 right-6 lg:right-12" />

      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-4">
          <Image src={heroOne} alt="Buket bunga Lily dan Anyelir dengan wrapping pink"
            className="h-auto w-64 sm:w-80 lg:w-lg" />
          <Image src={logoTagline} alt="Kalani Blooms - Gift & Flower Gallery" className="h-auto w-72 lg:w-3xl" />
        </div>

        <div className="flex flex-col items-center gap-6 text-center lg:items-end lg:text-right">
          <h2 className="max-w-3xl text-4xl leading-display sm:text-5xl lg:text-7xl">
            Wujudkan Momen Bermakna <span className="text-secondary">Hari Ini</span>
          </h2>

          <p className="max-w-3xl text-lg lg:text-3xl">
            Jangan biarkan hari spesialnya berlalu begitu saja. Pesan rangkaian bunga di Kalani Blooms sekarang dan sampaikan perasaan yang sulit diungkapkan dengan kata-kata.
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
                    <Icon className="size-8 text-primary lg:size-12" />
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
