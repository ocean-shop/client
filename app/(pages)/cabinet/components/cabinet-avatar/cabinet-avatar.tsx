import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { CABINET_USER_FALLBACK_ICON } from "../../constants/cabinet.constants";
import type { CabinetAvatarProps } from "./types/cabinet-avatar.types";

/** Round badge with the user's initial, or a person icon when there is no email to take it from. */
export const CabinetAvatar = ({ initial, className }: CabinetAvatarProps) => {
  return (
    <span
      aria-hidden
      className={`flex flex-none items-center justify-center rounded-full bg-accent font-bold text-white ${className ?? ""}`}
    >
      {initial ?? <MaterialIcon name={CABINET_USER_FALLBACK_ICON} className="text-[22px]" />}
    </span>
  );
};
