import { MaterialIcon } from "../material-icon/material-icon";
import type { SuccessMessageProps } from "./types/success-message.types";

/** Confirms under a form or a list that a change went through. */
export const SuccessMessage = ({ children }: SuccessMessageProps) => {
  return (
    <div className="flex items-center gap-2 text-[13.5px] font-medium text-accent" role="status">
      <MaterialIcon name="check_circle" className="text-[18px]" />
      {children}
    </div>
  );
};
