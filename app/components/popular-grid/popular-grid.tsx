import { ProductCard } from "../../ui/product-card/product-card";
import {
  POPULAR_GRID_PRODUCTS,
  POPULAR_GRID_TABS,
  POPULAR_GRID_TITLE,
} from "./constants/popular-grid.constants";

export function PopularGrid() {
  return (
    <section className="bg-surface-soft">
      <div className="mx-auto max-w-page px-10 pb-16 pt-14">
        <div className="flex flex-col gap-4 pb-7 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <h2 className="font-heading text-[28px] font-semibold tracking-[-.025em] text-foreground">
            {POPULAR_GRID_TITLE}
          </h2>

          <div className="flex flex-wrap items-center gap-5 text-sm">
            {POPULAR_GRID_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={
                  tab.isActive
                    ? "border-b-2 border-accent pb-0.5 font-semibold text-accent"
                    : "border-b-2 border-transparent pb-0.5 text-muted-light hover:text-accent"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {POPULAR_GRID_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
