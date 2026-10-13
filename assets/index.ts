import type { StaticImageData } from "next/image";

/** Files live in /public, so Next.js cannot read their size automatically */
const image = (src: string, width: number, height: number): StaticImageData => ({ src, width, height });

// Logos & hero
export const logo = image("/img/logo.png", 201, 32);
export const logoTagline = image("/img/logo-tagline.png", 726, 172);
export const heroOne = image("/img/hero-1.png", 703, 725);
export const heroTwo = image("/img/hero-2.png", 619, 651);

export const collection1 = image("/img/collection/1.jpg", 900, 900);
export const collection2 = image("/img/collection/2.jpg", 900, 900);
export const collection3 = image("/img/collection/3.jpg", 900, 900);
export const collection4 = image("/img/collection/4.jpg", 900, 900);
export const collection5 = image("/img/collection/5.jpg", 900, 900);

// Branches (placeholders, 800x600)
export const branchCanggu = image("/img/branches/canggu.jpg", 800, 600);
export const branchBatubulan = image("/img/branches/batubulan.jpg", 800, 600);
export const branchDenpasar = image("/img/branches/denpasar.jpg", 800, 600);

// Decorative SVG
export const heroBg = image("/svg/hero-bg.svg", 631, 746);
export const starFill = image("/svg/star-fill.svg", 62, 62);
export const ellipseFilled = image("/svg/ellipse-filled.svg", 1303, 1861);
export const ellipseOutlined = image("/svg/ellipse-outlined.svg", 320, 1480);
export const ellipseOutlinedLight = image("/svg/ellipse-outlined-light.svg", 624, 949);
export const decorOne = image("/svg/decor-1.svg", 1303, 1861);
export const decorTwo = image("/svg/decor-2.svg", 631, 2199);
export const decorThree = image("/svg/decor-3.svg", 919, 2199);
