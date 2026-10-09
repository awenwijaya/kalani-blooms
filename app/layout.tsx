import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kalani Blooms | Gift & Flower Gallery",
  description:
    "Florist di Bali untuk buket bunga segar dan artificial, custom bouquet, standing flower, hingga pengantaran bunga.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jost.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
