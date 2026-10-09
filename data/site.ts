import type { NavItem, Social } from "@/types";

export const siteConfig = {
  name: "Kalani Blooms",
  title: "Kalani Blooms | Florist & Buket Bunga di Bali",
  description:
    "Florist di Bali di Canggu, Batubulan, dan Denpasar. Buket bunga segar & artificial, custom bouquet, standing flower, dan pengantaran bunga.",
  /** Set NEXT_PUBLIC_SITE_URL in .env.local / hosting env (see .env.example) */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "id_ID",
  keywords: [
    // Main
    "Kalani Blooms",
    "florist Bali",
    "toko bunga Bali",
    "buket bunga Bali",
    "bunga segar Bali",
    "flower delivery Bali",
    // Location
    "florist Denpasar",
    "toko bunga Denpasar",
    "florist Sidakarya",
    "florist Batubulan",
    "florist Dalung",
    "florist Canggu",
    // Products & occasions
    "buket bunga wisuda Bali",
    "buket ulang tahun Bali",
    "buket anniversary Bali",
    "Korean bouquet Bali",
    "buket bunga artificial Bali",
    "flower box Bali",
    "buket cokelat Bali",
    "standing flower Bali",
    "custom bouquet Bali",
    "workshop merangkai bunga Bali",
  ],
  /** Replace with the WhatsApp / order link, e.g. https://wa.me/62xxxxxxxxxx */
  orderUrl: "https://linktr.ee/kalani.blooms?utm_source=linktree_profile_share&ltsid=9f10e645-c2b7-44bc-8b8e-acf191c7dbb5",
  orderSectionHref: "#order",
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
