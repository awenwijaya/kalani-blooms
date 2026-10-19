import type { StaticImageData } from "next/image";

/** Files live in /public, so Next.js cannot read their size automatically */
const image = (src: string, width: number, height: number): StaticImageData => ({ src, width, height });

// Logos & hero
export const logo = image("/img/logo.png", 201, 32);
export const logoTagline = image("/img/logo-tagline.png", 726, 172);
export const heroOne = image("/img/hero-1.png", 703, 725);
export const heroTwo = image("/img/hero-2.png", 619, 651);

// Collection (900x900 square crops)
export const collection1 = image("/img/collection/1.jpeg", 900, 900);
export const collection2 = image("/img/collection/2.jpeg", 900, 900);
export const collection3 = image("/img/collection/3.jpeg", 900, 900);
export const collection4 = image("/img/collection/4.jpeg", 900, 900);
export const collection5 = image("/img/collection/5.jpeg", 900, 900);
export const collection6 = image("/img/collection/6.jpeg", 600, 600);
export const collection7 = image("/img/collection/7.jpeg", 600, 600);
export const collection8 = image("/img/collection/8.jpeg", 600, 600);
export const collection9 = image("/img/collection/9.jpeg", 600, 600);
export const collection10 = image("/img/collection/10.jpeg", 600, 600);
export const collection11 = image("/img/collection/11.jpeg", 600, 600);

// Branches
export const branchBatubulan = image("/img/branches/batubulan.jpeg", 1000, 750);
export const branchCanggu = image("/img/branches/canggu.jpeg", 1000, 750);
export const branchDalung = image("/img/branches/dalung.jpeg", 1000, 750);
export const branchDenpasar = image("/img/branches/denpasar.jpeg", 1000, 750);

// Decorative SVG
export const heroBg = image("/svg/hero-bg.svg", 631, 746);
export const starFill = image("/svg/star-fill.svg", 62, 62);
export const decorOne = image("/svg/decor-1.svg", 1303, 1861);
export const decorTwo = image("/svg/decor-2.svg", 631, 2199);
export const decorThree = image("/svg/decor-3.svg", 919, 2199);
