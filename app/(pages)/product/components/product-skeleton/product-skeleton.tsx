import { NavigationProgressReporter } from "@/app/core/navigation-progress/components/navigation-progress-reporter/navigation-progress-reporter";
import {
  PRODUCT_CONTENT_CLASS_NAME,
  PRODUCT_PAGE_CLASS_NAME,
  PRODUCT_SKELETON_MAIN_CLASS_NAME,
} from "../../constants/product.constants";

/** Stand-in for the product page while the product is still on the server. */
export function ProductSkeleton() {
  return (
    <div className={PRODUCT_PAGE_CLASS_NAME}>
      <NavigationProgressReporter />

      <div className={PRODUCT_CONTENT_CLASS_NAME}>
        <div className="flex animate-pulse flex-col-reverse gap-3 lg:grid lg:grid-cols-[84px_1fr] lg:gap-3.5">
          <div className="flex gap-2.5 lg:flex-col">
            <div className="h-[72px] w-[72px] rounded-xl bg-background lg:h-[84px] lg:w-full" />
            <div className="h-[72px] w-[72px] rounded-xl bg-background lg:h-[84px] lg:w-full" />
            <div className="h-[72px] w-[72px] rounded-xl bg-background lg:h-[84px] lg:w-full" />
          </div>

          <div className={PRODUCT_SKELETON_MAIN_CLASS_NAME} />
        </div>

        <div className="flex animate-pulse flex-col gap-5">
          <div className="h-[13px] w-52 rounded bg-surface-strong" />
          <div className="h-8 w-3/4 rounded bg-surface-strong" />
          <div className="h-[76px] rounded-2xl bg-background" />
          <div className="h-[52px] rounded-xl bg-background" />
          <div className="h-[92px] rounded-[14px] bg-background" />
          <div className="h-[140px] rounded-2xl bg-background" />
        </div>
      </div>
    </div>
  );
}
