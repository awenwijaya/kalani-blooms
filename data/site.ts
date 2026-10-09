import type { NavItem, Social } from "@/types";

export const siteConfig = {
  /** Replace with the WhatsApp / order link, e.g. https://wa.me/62xxxxxxxxxx */
  orderUrl: "https://linktr.ee/kalani.blooms?utm_source=linktree_profile_share&ltsid=9f10e645-c2b7-44bc-8b8e-acf191c7dbb5",
};

export const navigation: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Koleksi", href: "#koleksi" },
  { label: "Temukan Kami", href: "#temukan-kami" },
  { label: "Order", href: "#order" },
];

export const socials: Social[] = [
  { platform: "instagram", handle: "kalani.blooms", href: "https://www.instagram.com/kalani.blooms" },
  { platform: "tiktok", handle: "kalani.blooms", href: "https://www.tiktok.com/@kalani.blooms" },
];
