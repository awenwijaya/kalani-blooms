import type { Branch } from "@/types";

export const getMapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

/** Prefers the real Google Maps place link; falls back to an address search */
export const getBranchMapsUrl = ({ mapsUrl, address }: Pick<Branch, "mapsUrl" | "address">) =>
  mapsUrl ?? getMapsUrl(address);
