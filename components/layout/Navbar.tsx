"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { logo } from "@/assets";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navigation[0].href);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Highlight the menu item of the section that is crossing the middle of the viewport
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        // Fixed bar: at the very top it is transparent with Figma-like spacing above the logo;
        // after scrolling it shrinks and gets the blurred background + shadow
        "fixed inset-x-0 top-0 z-50 flex items-center transition-all duration-300",
        isScrolled
          ? "h-(--header-height) bg-cream/90 shadow-sm backdrop-blur-sm"
          : "h-(--header-top-height) pt-2 lg:pt-5",
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#beranda" aria-label="Kalani Blooms - Beranda">
          <Image
            src={logo}
            alt="Kalani Blooms"
            priority
            sizes="(min-width: 1536px) 200px, (min-width: 1024px) 160px, 132px"
            className="h-auto w-33 lg:w-40 2xl:w-50"
          />
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex lg:gap-10 2xl:gap-14">
          {navigation.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              aria-current={activeHref === href ? "location" : undefined}
              className={cn(
                "font-heading text-base transition-colors hover:text-primary 2xl:text-lg",
                activeHref === href ? "font-semibold text-primary" : "text-secondary",
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="text-primary md:hidden"
        >
          {isOpen ? <CloseIcon className="size-8" /> : <MenuIcon className="size-8" />}
        </button>
      </Container>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigasi utama"
          className="absolute inset-x-0 top-full flex flex-col gap-1 bg-cream px-5 pb-5 shadow-lg md:hidden"
        >
          {navigation.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 font-heading text-lg",
                activeHref === href ? "font-semibold text-primary" : "text-secondary",
              )}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
