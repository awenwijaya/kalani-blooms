import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kalani Blooms",
  description: "Florist di Bali untuk buket bunga segar & artificial. Cocok untuk ulang tahun, wisuda, dan anniversary. Pesan custom sesuai warna dan budget.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
