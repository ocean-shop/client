import {
  MATERIAL_ICON_BASE_CLASS_NAME,
  MATERIAL_ICON_FILLED_STYLE,
} from "./constants/material-icon.constants";
import type { MaterialIconProps } from "./types/material-icon.types";

/**
 * A Material Symbols glyph; decorative by default, so give its button an `aria-label`.
 * Not named `icon.tsx`: under `app/` that file name is the App Router's icon route convention.
 */
export const MaterialIcon = ({ name, filled, className, style, ...props }: MaterialIconProps) => {
  return (
    <span
      aria-hidden
      {...props}
      style={filled ? { ...MATERIAL_ICON_FILLED_STYLE, ...style } : style}
      className={`${MATERIAL_ICON_BASE_CLASS_NAME} ${className ?? ""}`}
    >
      {name}
    </span>
  );
};
