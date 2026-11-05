import type { BranchTone, CardTone } from "@/types";
import type { ButtonVariant } from "./Button";

type ToneStyle = {
  surface: string;
  title: string;
  description: string;
  button: ButtonVariant;
};

export const cardTones: Record<CardTone, ToneStyle> = {
  peach: { surface: "bg-peach", title: "text-ink", description: "text-caption", button: "primary" },
  primary: { surface: "bg-primary", title: "text-white", description: "text-white", button: "secondary" },
  brown: { surface: "bg-brown", title: "text-white", description: "text-white", button: "secondary" },
  secondary: { surface: "bg-secondary", title: "text-white", description: "text-white", button: "primary" },
};

/**
 * Branch cards: a single tonal ramp (dark to light) built from the brand palette.
 * Dark cards use white text with a light button, light cards use wine text with a wine button.
 */
export const branchTones: Record<BranchTone, ToneStyle> = {
  wine: { surface: "bg-primary", title: "text-white", description: "text-white", button: "light" },
  mauve: { surface: "bg-mauve", title: "text-white", description: "text-white", button: "light" },
  rose: { surface: "bg-secondary", title: "text-primary", description: "text-primary", button: "primary" },
  peach: { surface: "bg-peach", title: "text-primary", description: "text-body", button: "primary" },
};
