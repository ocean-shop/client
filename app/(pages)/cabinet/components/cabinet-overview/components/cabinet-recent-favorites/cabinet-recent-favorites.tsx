import Link from "next/link";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { ProductThumbnail } from "@/app/ui/product-thumbnail/product-thumbnail";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { CABINET_FAVORITES_PATH } from "../../../../constants/cabinet.constants";
import { CabinetSectionHeader } from "../../../cabinet-section-header/cabinet-section-header";
import {
  CABINET_RECENT_FAVORITES_IMAGE_SIZES,
  CABINET_RECENT_FAVORITES_LIMIT,
  CABINET_RECENT_FAVORITES_LINK_LABEL,
  CABINET_RECENT_FAVORITES_TITLE,
} from "./constants/cabinet-recent-favorites.constants";
import type { CabinetRecentFavoritesProps } from "./types/cabinet-recent-favorites.types";

export const CabinetRecentFavorites = ({ products }: CabinetRecentFavoritesProps) => {
  return (
    <SurfaceCard as="section" className="flex flex-col gap-3.5">
      <CabinetSectionHeader title={CABINET_RECENT_FAVORITES_TITLE}>
        <Link href={CABINET_FAVORITES_PATH} className="text-[13.5px] font-semibold text-accent">
          {CABINET_RECENT_FAVORITES_LINK_LABEL}
        </Link>
      </CabinetSectionHeader>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-3.5">
        {products.slice(0, CABINET_RECENT_FAVORITES_LIMIT).map((product) => (
          <Link key={product.id} href={product.href} className="flex flex-col gap-2">
            <ProductThumbnail
              image={product.image}
              alt={product.name}
              sizes={CABINET_RECENT_FAVORITES_IMAGE_SIZES}
              className="h-[120px] rounded-xl lg:h-[140px]"
            />
            <span className="text-[13.5px] font-medium leading-[1.35] text-foreground">
              {product.name}
            </span>
            <span className="font-heading text-[14.5px] font-semibold text-foreground">
              {formatProductPriceHelper(product.price)}
            </span>
          </Link>
        ))}
      </div>
    </SurfaceCard>
  );
};
