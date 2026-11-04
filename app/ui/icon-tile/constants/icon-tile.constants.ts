import type { IconTileSize } from "../types/icon-tile.types";

export const ICON_TILE_DEFAULT_SIZE: IconTileSize = "md";

export const ICON_TILE_BASE_CLASS_NAME =
  "flex flex-none items-center justify-center rounded-[11px] bg-accent-soft text-[21px] text-accent";

export const ICON_TILE_SIZE_CLASS_NAMES: Record<IconTileSize, string> = {
  md: "size-10",
  lg: "size-[42px]",
};
