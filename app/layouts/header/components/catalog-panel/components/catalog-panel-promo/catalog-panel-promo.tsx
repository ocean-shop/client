import { Button } from "@/app/ui/button/button";
import { CATALOG_PANEL_PROMO } from "./constants/catalog-panel-promo.constants";

export const CatalogPanelPromo = () => {
  return (
    <div className="m-3.5 flex flex-col justify-center gap-3.5 rounded-xl bg-accent p-6.5 text-white">
      <span className="self-start rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold tracking-[.08em]">
        {CATALOG_PANEL_PROMO.badge}
      </span>
      <div className="font-heading text-[23px] font-semibold leading-[1.15] tracking-tight">
        {CATALOG_PANEL_PROMO.title}
      </div>
      <div className="text-[13.5px] leading-[1.5] text-accent-soft">
        {CATALOG_PANEL_PROMO.description}
      </div>
      <div className="flex items-baseline gap-2.5">
        <span className="font-heading text-[26px] font-semibold">{CATALOG_PANEL_PROMO.price}</span>
        <span className="text-[13.5px] text-accent-soft/80 line-through">
          {CATALOG_PANEL_PROMO.oldPrice}
        </span>
      </div>
      <Button variant="primary-inverse" size="auto" className="h-11 rounded-[10px] text-sm">
        {CATALOG_PANEL_PROMO.ctaLabel}
      </Button>
    </div>
  );
};
