import Image from "next/image";
import Link from "next/link";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES } from "../../constants/header-search-panel.constants";
import {
  HEADER_SEARCH_PANEL_ITEM_NAME_CLASS_NAMES,
  HEADER_SEARCH_PANEL_ITEM_PRICE_CLASS_NAMES,
} from "./constants/header-search-panel-item.constants";
import type { HeaderSearchPanelItemProps } from "./types/header-search-panel-item.types";

export const HeaderSearchPanelItem = ({
  variant,
  item,
  isStale,
  onSelect,
}: HeaderSearchPanelItemProps) => {
  return (
    <Link
      href={buildProductHrefHelper(item.slug)}
      onClick={onSelect}
      className={`flex items-center gap-3 rounded-xl p-2 hover:bg-surface ${
        isStale ? "opacity-60" : ""
      }`}
    >
      <div className={HEADER_SEARCH_PANEL_IMAGE_CLASS_NAMES[variant]}>
        {item.image ? (
          <Image src={item.image} alt={item.name} sizes="56px" fill className="object-cover" />
        ) : (
          <MaterialIcon
            name="image"
            className="flex h-full items-center justify-center text-[22px] text-muted-light"
          />
        )}
      </div>

      <span className={`min-w-0 flex-1 ${HEADER_SEARCH_PANEL_ITEM_NAME_CLASS_NAMES[variant]}`}>
        {item.name}
      </span>

      <div className="flex flex-col items-end gap-0.5">
        <span className={HEADER_SEARCH_PANEL_ITEM_PRICE_CLASS_NAMES[variant]}>
          {formatProductPriceHelper(item.price)}
        </span>
        {item.oldPrice && (
          <span className="text-xs text-muted-light line-through">
            {formatProductPriceHelper(item.oldPrice)}
          </span>
        )}
      </div>
    </Link>
  );
};
