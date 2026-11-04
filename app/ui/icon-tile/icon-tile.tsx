import { MaterialIcon } from "../material-icon/material-icon";
import {
  ICON_TILE_BASE_CLASS_NAME,
  ICON_TILE_DEFAULT_SIZE,
  ICON_TILE_SIZE_CLASS_NAMES,
} from "./constants/icon-tile.constants";
import type { IconTileProps } from "./types/icon-tile.types";

/** Icon on a soft accent square, leading a row or a card. */
export const IconTile = ({ name, size = ICON_TILE_DEFAULT_SIZE }: IconTileProps) => {
  return (
    <MaterialIcon
      name={name}
      className={`${ICON_TILE_BASE_CLASS_NAME} ${ICON_TILE_SIZE_CLASS_NAMES[size]}`}
    />
  );
};
