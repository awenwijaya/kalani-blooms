import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="font-heading tracking-eyebrow text-secondary">404</p>
      <h1>Halaman tidak ditemukan</h1>
      <p className="max-w-md">Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
      <Button href="/" size="md">
        Kembali ke Beranda
      </Button>
    </main>
  );
}
