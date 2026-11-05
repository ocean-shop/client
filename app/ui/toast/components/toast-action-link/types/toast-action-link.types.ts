import type { ToastAction } from "@/app/ui/toast/types/toast.types";

export type ToastActionLinkProps = {
  action: ToastAction;
  /** The variant's text colour, so the action matches the title. */
  colorClassName: string;
};
