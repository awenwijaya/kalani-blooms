import { Logo, Placeholder } from "./ui";

const columns = [
  { title: "Home", items: ["Product", "Pages", "Blog", "Contact"] },
  { title: "Products", items: ["Winter Collection", "Summer Collection", "Special Discount", "Top rated Products"] },
  { title: "Payment Method", items: ["Credit card", "Debit card", "Bank Transfer", "Paypal"] },
];

const socials = ["Instagram", "Facebook", "TikTok", "WhatsApp"];

export default function Footer() {
  return (
    <footer className="bg-white/90">
      <div className="mx-auto grid max-w-[1640px] gap-12 px-6 py-33.5 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_auto]">
        <div className="flex flex-col gap-6">
          <Logo className="-ml-2.5" />
          <p className="max-w-132 font-body text-xl text-mocha">
            Florist di Bali dengan rangkaian bunga segar dan artificial untuk
            setiap momen istimewa.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex size-11 items-center justify-center rounded-full bg-maroon text-sm text-white"
              >
                {s.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <nav key={c.title} className="flex flex-col gap-6 text-2xl">
            <span className="text-ink">{c.title}</span>
            {c.items.map((i) => (
              <a key={i} href="#" className="text-mocha hover:text-maroon">{i}</a>
            ))}
          </nav>
        ))}

        <div className="flex flex-col gap-4.75 text-2xl">
          <span className="text-ink">Get Online</span>
          <Placeholder w={219} h={166} alt="Get it online" className="h-auto w-54.75" />
        </div>
      </div>

      <div className="mx-auto max-w-[1640px] px-6">
        <hr className="border-[#B5B5B5]" />
        <div className="flex flex-col items-center justify-between gap-2 py-8 font-body text-xl sm:flex-row">
          <p className="text-mocha">© {new Date().getFullYear()} Kalani Blooms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
