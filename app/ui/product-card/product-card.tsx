import Link from "next/link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { ProductCardMedia } from "./components/product-card-media/product-card-media";
import { PRODUCT_CARD_SIZE_STYLES } from "./constants/product-card.constants";
import type { ProductCardProps } from "./types/product-card.types";

export const ProductCard = ({ product, size = "default", cta, favorite }: ProductCardProps) => {
  const styles = PRODUCT_CARD_SIZE_STYLES[size];

  return (
    <div className={`flex flex-col bg-background ${styles.root}`}>
      <ProductCardMedia product={product} styles={styles} favorite={favorite} />

      {product.rating !== undefined && product.reviews !== undefined && (
        <div className="flex items-center gap-[5px] text-[12.5px] text-muted-light">
          <MaterialIcon name="star" filled className="text-sm text-accent" />
          <b className="font-semibold text-foreground">{product.rating}</b>({product.reviews})
        </div>
      )}

      <Link
        href={product.href}
        className={`text-pretty font-medium text-foreground hover:text-accent ${styles.name}`}
      >
        {product.name}
      </Link>

      <div className="flex items-baseline gap-[9px]">
        <span className={`font-heading font-semibold text-foreground ${styles.price}`}>
          {product.price}
        </span>
        {product.oldPrice && (
          <span className={`text-muted-light line-through ${styles.oldPrice}`}>
            {product.oldPrice}
          </span>
        )}
      </div>

      {cta}
    </div>
  );
};
