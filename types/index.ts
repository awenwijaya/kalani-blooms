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
  /** Full address shown to visitors */
  address: string;
  /** Structured address parts, used for schema.org markup */
  streetAddress: string;
  locality: string;
  postalCode: string;
  image: StaticImageData;
  tone: Extract<CardTone, "peach" | "primary" | "secondary">;
};

export type SocialPlatform = "instagram" | "tiktok";

export type Social = {
  platform: SocialPlatform;
  handle: string;
  href: string;
};
