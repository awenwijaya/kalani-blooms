import { branches } from "@/data/branches";
import { services } from "@/data/services";
import { siteConfig, socials } from "@/data/site";
import { getBranchMapsUrl } from "@/lib/maps";
import type { Branch } from "@/types";

const { url, name, title, description, keywords, phone, showBranchPhone, openingHours, serviceAreas } = siteConfig;

const absoluteUrl = (path: string) => `${url}${path}`;

/** Stable @id values so the nodes of the graph can reference each other */
const ids = {
  website: `${url}/#website`,
  webpage: `${url}/#webpage`,
  organization: `${url}/#organization`,
  logo: `${url}/#logo`,
  primaryImage: `${url}/#primaryimage`,
  branch: (branch: Branch) => `${url}/#cabang-${branch.name.toLowerCase()}`,
};

/** Same name as the Google Business Profile listing (NAP consistency) */
const getBranchName = (branch: Branch) => branch.businessName ?? `${name} Florist - ${branch.name}`;

/** Adds the value only when the condition is truthy, so empty fields never end up in the markup */
const when = <T extends object>(condition: unknown, value: T) => (condition ? value : {});

const hoursMarkup = when(openingHours.length > 0, { openingHours });

/** Branch phone (only when it is visible on the page), falling back to the general business phone (if any) */
const getBranchPhone = (branch: Branch) => (showBranchPhone && branch.phone) || phone;

/** One ContactPoint per branch that has a phone number */
const contactPoints = branches.flatMap((branch) => {
  const telephone = getBranchPhone(branch);

  return telephone
    ? [
        {
          "@type": "ContactPoint",
          name: getBranchName(branch),
          telephone,
          contactType: "customer service",
          availableLanguage: "id",
        },
      ]
    : [];
});

/**
 * schema.org graph for the home page:
 * WebSite + WebPage + logo/image + Florist (brand) + one Florist per branch (local business).
 */
export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url,
        name,
        description,
        inLanguage: "id-ID",
        publisher: { "@id": ids.organization },
      },
      {
        "@type": "WebPage",
        "@id": ids.webpage,
        url,
        name: title,
        description,
        inLanguage: "id-ID",
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.organization },
        primaryImageOfPage: { "@id": ids.primaryImage },
      },
      {
        "@type": "ImageObject",
        "@id": ids.logo,
        url: absoluteUrl("/icon.png"),
        contentUrl: absoluteUrl("/icon.png"),
        width: 512,
        height: 512,
        caption: name,
      },
      {
        "@type": "ImageObject",
        "@id": ids.primaryImage,
        url: absoluteUrl("/opengraph-image.png"),
        contentUrl: absoluteUrl("/opengraph-image.png"),
        width: 1200,
        height: 630,
        caption: `${name} - Gift & Flower Gallery`,
      },
      {
        "@type": "Florist",
        "@id": ids.organization,
        name,
        alternateName: `${name} - Gift & Flower Gallery`,
        description,
        url,
        logo: { "@id": ids.logo },
        image: { "@id": ids.primaryImage },
        keywords: keywords.join(", "),
        sameAs: socials.map(({ href }) => href),
        areaServed: serviceAreas.map((area) => ({ "@type": "AdministrativeArea", name: area })),
        subOrganization: branches.map((branch) => ({ "@id": ids.branch(branch) })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Layanan ${name}`,
          itemListElement: services.map(({ title: serviceTitle, description: serviceDescription }) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: serviceTitle,
              description: serviceDescription,
              provider: { "@id": ids.organization },
            },
          })),
        },
        ...when(phone, { telephone: phone }),
        ...when(contactPoints.length > 0, { contactPoint: contactPoints }),
        ...hoursMarkup,
      },
      ...branches.map((branch) => ({
        "@type": "Florist",
        "@id": ids.branch(branch),
        name: getBranchName(branch),
        url: absoluteUrl("/#temukan-kami"),
        image: absoluteUrl(branch.image.src),
        parentOrganization: { "@id": ids.organization },
        hasMap: getBranchMapsUrl(branch),
        address: {
          "@type": "PostalAddress",
          ...when(branch.streetAddress, { streetAddress: branch.streetAddress }),
          addressLocality: branch.locality,
          addressRegion: "Bali",
          ...when(branch.postalCode, { postalCode: branch.postalCode }),
          addressCountry: "ID",
        },
        ...when(branch.mapsUrl, { sameAs: [branch.mapsUrl] }),
        ...when(branch.geo, {
          geo: {
            "@type": "GeoCoordinates",
            latitude: branch.geo?.latitude,
            longitude: branch.geo?.longitude,
          },
        }),
        ...when(getBranchPhone(branch), { telephone: getBranchPhone(branch) }),
        ...hoursMarkup,
      })),
    ],
  };
}
