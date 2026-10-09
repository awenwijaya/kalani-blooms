"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { logo } from "@/assets";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navigation } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 bg-cream/80 py-5 backdrop-blur-sm lg:py-8">
      <Container className="flex items-center justify-between">
        <Link href="#beranda" aria-label="Kalani Blooms - Beranda">
          <Image src={logo} alt="Kalani Blooms" priority className="h-auto w-36 lg:w-54" />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex lg:gap-14">
          {navigation.map(({ label, href }, index) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "font-heading text-lg transition-colors hover:text-primary lg:text-2xl",
                index === 0 ? "font-semibold text-primary" : "text-secondary",
              )}
            >
              {label}
            </Link>
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
          {navigation.map(({ label, href }, index) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "py-2 font-heading text-xl",
                index === 0 ? "font-semibold text-primary" : "text-secondary",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
