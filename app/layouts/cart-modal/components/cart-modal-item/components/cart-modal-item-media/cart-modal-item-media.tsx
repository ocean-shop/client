import Image from "next/image";
import Link from "next/link";
import type { CartModalItemMediaProps } from "./types/cart-modal-item-media.types";

export const CartModalItemMedia = ({
  href,
  name,
  image,
  discountPercent,
  onNavigate,
}: CartModalItemMediaProps) => {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-label={name}
      className="relative h-[72px] w-[72px] flex-none overflow-hidden rounded-xl bg-footer lg:h-[88px] lg:w-[88px]"
    >
      {image && <Image src={image} alt={name} fill sizes="88px" className="object-cover" />}

      {discountPercent !== undefined && (
        <span className="absolute left-1.5 top-1.5 rounded-[5px] bg-background px-1.5 py-0.5 text-[10.5px] font-bold text-accent">
          −{discountPercent}%
        </span>
      )}
    </Link>
  );
};
