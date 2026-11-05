import type Link from "next/link";
import type { ButtonSize, ButtonVariant } from "@/app/ui/button/types/button.types";

export type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Material Symbols name rendered after the label, e.g. `arrow_forward`. */
  trailingIcon?: string;
};
