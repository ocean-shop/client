import Image from "next/image";
import Link from "next/link";
import { formatProductPriceHelper } from "@/app/shared/products/helpers/format-product-price";
import { CABINET_FAVORITES_PATH } from "../../../../constants/cabinet.constants";
import {
  CABINET_RECENT_FAVORITES_IMAGE_SIZES,
  CABINET_RECENT_FAVORITES_LIMIT,
  CABINET_RECENT_FAVORITES_LINK_LABEL,
  CABINET_RECENT_FAVORITES_TITLE,
} from "./constants/cabinet-recent-favorites.constants";
import type { CabinetRecentFavoritesProps } from "./types/cabinet-recent-favorites.types";

export function CabinetRecentFavorites({ products }: CabinetRecentFavoritesProps) {
  return (
    <section className="flex flex-col gap-3.5 rounded-2xl bg-background p-[18px] lg:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[15.5px] font-semibold text-foreground">
          {CABINET_RECENT_FAVORITES_TITLE}
        </h2>
        <Link href={CABINET_FAVORITES_PATH} className="text-[13.5px] font-semibold text-accent">
          {CABINET_RECENT_FAVORITES_LINK_LABEL}
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-3.5">
        {products.slice(0, CABINET_RECENT_FAVORITES_LIMIT).map((product) => (
          <Link key={product.id} href={product.href} className="flex flex-col gap-2">
            <div className="relative h-[120px] overflow-hidden rounded-xl bg-footer lg:h-[140px]">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes={CABINET_RECENT_FAVORITES_IMAGE_SIZES}
                  className="object-cover"
                />
              )}
            </div>
            <span className="text-[13.5px] font-medium leading-[1.35] text-foreground">
              {product.name}
            </span>
            <span className="font-heading text-[14.5px] font-semibold text-foreground">
              {formatProductPriceHelper(product.price)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
