import { branchBatubulan, branchCanggu, branchDenpasar } from "@/assets";
import type { Branch } from "@/types";

export const branches: Branch[] = [
  {
    name: "Canggu",
    address: "Jl. Raya Anyar No.4, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
    image: branchCanggu,
    tone: "peach",
  },
  {
    name: "Batubulan",
    address: "Jl. Raya Batubulan No.111, Batubulan, Kec. Sukawati, Kabupaten Gianyar, Bali 80582",
    image: branchBatubulan,
    tone: "primary",
  },
  {
    name: "Denpasar",
    address: "Jl. Tukad Yeh Aya No.41, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80234",
    image: branchDenpasar,
    tone: "secondary",
  },
];
