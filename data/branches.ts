import { branchBatubulan, branchCanggu, branchDalung, branchDenpasar } from "@/assets";
import type { Branch } from "@/types";

export const branches: Branch[] = [
  {
    name: "Batubulan",
    address: "Jl. Raya Batubulan No.111, Batubulan, Kec. Sukawati, Kabupaten Gianyar, Bali 80582",
    streetAddress: "Jl. Raya Batubulan No.111",
    locality: "Batubulan, Sukawati, Gianyar",
    postalCode: "80582",
    image: branchBatubulan,
    tone: "primary",
  },
  {
    name: "Canggu",
    address: "Jl. Raya Anyar No.4, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    streetAddress: "Jl. Raya Anyar No.4",
    locality: "Kerobokan, Kuta Utara, Badung",
    postalCode: "80361",
    image: branchCanggu,
    tone: "peach",
  },
  {
    name: "Dalung",
    // TODO: replace with the full street address (also fill streetAddress and postalCode for SEO markup)
    address: "Jl. Perum Dalung Permai No.2, Dalung, Kec. Kuta Utara, Kabupaten Badung",
    locality: "Dalung, Kuta Utara, Badung",
    image: branchDalung,
    tone: "brown",
    postalCode: "80361",
  },
  {
    name: "Denpasar",
    address: "Jl. Tukad Yeh Aya No.41, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80234",
    streetAddress: "Jl. Tukad Yeh Aya No.41",
    locality: "Panjer, Denpasar Selatan, Denpasar",
    postalCode: "80234",
    image: branchDenpasar,
    tone: "secondary",
  },
];
