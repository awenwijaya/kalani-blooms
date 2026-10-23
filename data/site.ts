import type { NavItem, Social } from "@/types";

const normalizeUrl = (value: string) => value.replace(/\/+$/, "");

const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = normalizeUrl(
  process.env.NEXT_PUBLIC_SITE_URL || (vercelProductionHost ? `https://${vercelProductionHost}` : "http://localhost:3000"),
);

/** Only the production deployment should be indexed; Vercel previews and local dev stay out of search results */
const deploymentEnv = process.env.VERCEL_ENV ?? (process.env.NODE_ENV === "production" ? "production" : "development");

export const siteConfig = {
  name: "Kalani Blooms",
  title: "Kalani Blooms | Florist & Buket Bunga di Bali",
  description:
    "Florist di Bali: Batubulan, Canggu, Dalung, dan Denpasar. Buket bunga segar & artificial, custom bouquet, standing flower, dan pengantaran bunga.",
  url: siteUrl,
  indexable: deploymentEnv === "production",
  locale: "id_ID",
  /**
   * Show each branch phone number on the page. Google only accepts structured data that matches visible content,
   * so branch phones are added to the SEO markup only while this is true.
   */
  showBranchPhone: true,
  /** Business phone in international format, e.g. "+6281234567890". Leave empty to omit it from the SEO markup. */
  phone: "",
  /** schema.org opening hours, e.g. ["Mo-Su 08:00-20:00"]. Leave empty to omit it from the SEO markup. */
  openingHours: [] as string[],
  /** Areas around the branches, used as areaServed in the SEO markup */
  serviceAreas: ["Bali", "Denpasar", "Badung", "Gianyar"],
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
  /** In-page anchor of the order section (hero button scrolls here) */
  orderSectionHref: "#order",
  /** External order link used by the button inside the order section, e.g. https://wa.me/62xxxxxxxxxx */
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
  { platform: "tiktok", handle: "kalaniblooms", href: "https://www.tiktok.com/@kalaniblooms" },
];
