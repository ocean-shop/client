import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import {
  MODAL_HEADER_CLASS_NAME,
  MODAL_HEADER_CLOSE_BUTTON_CLASS_NAME,
  MODAL_HEADER_TITLE_CLASS_NAME,
} from "./constants/modal-header.constants";
import type { ModalHeaderProps } from "./types/modal-header.types";

export const ModalHeader = ({ title, subtitle, closeLabel, onClose }: ModalHeaderProps) => {
  return (
    <div className={MODAL_HEADER_CLASS_NAME}>
      <div className="flex flex-1 items-baseline gap-2.5">
        <span className={MODAL_HEADER_TITLE_CLASS_NAME}>{title}</span>
        {subtitle && <span className="text-[13.5px] text-muted-light">{subtitle}</span>}
      </div>

      <Button
        variant="unstyled"
        size="auto"
        onClick={onClose}
        aria-label={closeLabel}
        className={MODAL_HEADER_CLOSE_BUTTON_CLASS_NAME}
      >
        <MaterialIcon name="close" className="text-[21px]" />
      </Button>
    </div>
  );
};
