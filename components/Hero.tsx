import { Logo, Placeholder, Sparkle } from "./ui";

const links = ["Home", "Product", "Pages", "Blog", "Contact"];

function Navbar() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-[1640px] items-center justify-between px-6 py-6 lg:py-[59px]">
      <Logo />
      <nav className="hidden gap-8 text-2xl text-mocha md:flex lg:gap-14">
        {links.map((l, i) => (
          <a
            key={l}
            href="#"
            className={i === 0 ? "font-semibold text-maroon" : "hover:text-maroon"}
          >
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default function Hero() {
  return (
    <div className="relative">
      {/* Dekorasi latar */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-45.25 top-91.75 size-274.25 rounded-full bg-[#FFD3D3]/15 blur-[200px]" />
        <div className="absolute -left-210.5 -top-131.75 size-369.75 rounded-full border border-mocha/25" />
        <div className="absolute -left-230.25 -top-112.5 size-369.75 rounded-full border border-mocha/25" />
        <div className="absolute left-287.25 top-55.25 hidden h-186.5 w-157.75 bg-[linear-gradient(150deg,rgba(255,219,199,0.32)_0%,rgba(255,189,189,0.32)_100%)] xl:block" />
      </div>

      <Navbar />

      <section className="relative mx-auto flex w-full max-w-[1640px] flex-col items-center gap-12 px-6 py-10 lg:flex-row lg:justify-between">
        <Sparkle className="absolute left-2.5 top-10 size-9 text-mocha" />
        <div className="flex max-w-196 flex-col gap-6">
          <h1 className="text-5xl leading-tight text-maroon md:text-7xl md:leading-23.75">
            Every Flower <span className="text-mocha">Matters</span>
          </h1>
          <div className="max-w-190.75 space-y-6 font-body text-lg text-mocha md:text-xl">
            <p>
              Kalani Blooms adalah florist di Bali yang menghadirkan rangkaian
              bunga untuk merayakan momen istimewa dan menyampaikan perasaan.
              Mulai dari hadiah ulang tahun, wisuda, anniversary, hingga ucapan
              terima kasih, setiap rangkaian dibuat dengan perhatian pada
              pilihan bunga, perpaduan warna, dan detail pembungkusnya.
            </p>
            <p>
              Kami menyediakan pilihan bunga segar dan artificial dengan
              berbagai gaya, dari buket sederhana hingga rangkaian berukuran
              besar. Pelanggan juga dapat menyesuaikan pesanan berdasarkan
              momen, warna favorit, dan budget.
            </p>
          </div>
        </div>
        <Placeholder
          w={807}
          h={807}
          alt="Buket bunga Kalani Blooms"
          className="h-auto w-full max-w-201.75"
        />
      </section>
    </div>
  );
}
