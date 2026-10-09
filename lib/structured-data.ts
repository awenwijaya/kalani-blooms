import { branches } from "@/data/branches";
import { services } from "@/data/services";
import { siteConfig, socials } from "@/data/site";
import { getMapsUrl } from "@/lib/maps";

const { url, name, description } = siteConfig;
const organizationId = `${url}/#organization`;

/** schema.org graph: WebSite + Florist (main business) + one Florist per branch */
export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name,
        inLanguage: "id-ID",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Florist",
        "@id": organizationId,
        name,
        alternateName: `${name} - Gift & Flower Gallery`,
        description,
        url,
        logo: `${url}/icon.png`,
        image: `${url}/opengraph-image.png`,
        sameAs: socials.map(({ href }) => href),
        areaServed: { "@type": "AdministrativeArea", name: "Bali" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Layanan ${name}`,
          itemListElement: services.map(({ title, description: serviceDescription }) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: title, description: serviceDescription },
          })),
        },
      },
      ...branches.map((branch) => ({
        "@type": "Florist",
        "@id": `${url}/#cabang-${branch.name.toLowerCase()}`,
        name: `${name} ${branch.name}`,
        url,
        parentOrganization: { "@id": organizationId },
        hasMap: getMapsUrl(branch.address),
        address: {
          "@type": "PostalAddress",
          streetAddress: branch.streetAddress,
          addressLocality: branch.locality,
          addressRegion: "Bali",
          postalCode: branch.postalCode,
          addressCountry: "ID",
        },
      })),
    ],
  };
}
