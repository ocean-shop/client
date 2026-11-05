import type { ModalProps } from "@/app/ui/modal/types/modal.types";

export type ModalHeaderProps = Pick<ModalProps, "title" | "subtitle" | "onClose"> & {
  closeLabel: string;
};
