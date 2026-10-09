import type { CardTone } from "@/types";
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
