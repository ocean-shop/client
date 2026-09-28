import { PRODUCT_TAGS_LABEL } from "./constants/product-tags.constants";
import type { ProductTagsProps } from "./types/product-tags.types";

/** Tags are shown as plain labels: there is no tag route to send a visitor to yet. */
export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[13.5px] text-muted-light">{PRODUCT_TAGS_LABEL}</span>

      {tags.map((tag) => (
        <span
          key={tag.id}
          className="rounded-[20px] bg-accent-soft px-3 py-1.5 text-[13px] font-medium text-accent-dark"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}
