import { Container } from "@/components/ui/Container";
import { navigation, siteConfig, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-secondary/30 py-8 text-sm text-caption">
      <Container className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Florist &amp; toko bunga di Bali.
        </p>

        <nav aria-label="Navigasi footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navigation.map(({ label, href }) => (
            <a key={href} href={href} className="transition-colors hover:text-primary">
              {label}
            </a>
          ))}
          {socials.map(({ platform, href }) => (
            <a
              key={platform}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize transition-colors hover:text-primary"
            >
              {platform}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
