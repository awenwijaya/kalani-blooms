import type { StaticImageData } from "next/image";

export type CardTone = "peach" | "primary" | "brown" | "secondary";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  tone: CardTone;
  column: "left" | "right";
};

export type CollectionItem = {
  id: string;
  image: StaticImageData;
  alt: string;
};

export type Branch = {
  name: string;
  /** Business name exactly as on the Google Business Profile listing, e.g. "Kalani Blooms Florist - Canggu" */
  businessName?: string;
  /** Full address shown to visitors */
  address: string;
  /** Google Maps place link (Share > Copy link on the branch listing). Falls back to an address search. */
  mapsUrl?: string;
  /** Branch phone/WhatsApp in international format, e.g. "+6281234567890". Used for the SEO markup. */
  phone?: string;
  /** Structured address parts, used for schema.org markup */
  streetAddress?: string;
  locality: string;
  postalCode?: string;
  /** Coordinates of the store (from its Google Maps listing), used for local SEO */
  geo?: { latitude: number; longitude: number };
  image: StaticImageData;
  tone: CardTone;
};

export type SocialPlatform = "instagram" | "tiktok";

export type Social = {
  platform: SocialPlatform;
  handle: string;
  href: string;
};
