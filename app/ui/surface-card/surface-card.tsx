import {
  SURFACE_CARD_BASE_CLASS_NAME,
  SURFACE_CARD_DEFAULT_ELEMENT,
  SURFACE_CARD_DEFAULT_PADDING,
  SURFACE_CARD_PADDING_CLASS_NAMES,
} from "./constants/surface-card.constants";
import type { SurfaceCardProps } from "./types/surface-card.types";

/** White rounded panel that sits on the tinted page background. */
export const SurfaceCard = ({
  as: Tag = SURFACE_CARD_DEFAULT_ELEMENT,
  padding = SURFACE_CARD_DEFAULT_PADDING,
  className,
  children,
}: SurfaceCardProps) => {
  return (
    <Tag
      className={`${SURFACE_CARD_BASE_CLASS_NAME} ${SURFACE_CARD_PADDING_CLASS_NAMES[padding]} ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
};
