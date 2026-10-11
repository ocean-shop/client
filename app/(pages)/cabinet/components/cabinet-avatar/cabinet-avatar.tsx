import { CABINET_USER_FALLBACK_ICON } from "../../constants/cabinet.constants";
import type { CabinetAvatarProps } from "./types/cabinet-avatar.types";

/** Round badge with the user's initial, or a person icon when there is no email to take it from. */
export function CabinetAvatar({ initial, className }: CabinetAvatarProps) {
  return (
    <span
      aria-hidden
      className={`flex flex-none items-center justify-center rounded-full bg-accent font-bold text-white ${className ?? ""}`}
    >
      {initial ?? <span className="font-symbols text-[22px]">{CABINET_USER_FALLBACK_ICON}</span>}
    </span>
  );
}
