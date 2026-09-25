/** Placeholder matching {@link ProductCard}'s footprint so the grid keeps its height while loading. */
export function ProductCardSkeleton() {
  return (
    <div aria-hidden className="flex animate-pulse flex-col gap-3 rounded-2xl bg-background p-3.5">
      <div className="h-[240px] rounded-xl bg-surface-strong" />

      <div className="flex flex-col gap-2">
        <div className="h-4 rounded bg-surface-strong" />
        <div className="h-4 w-2/3 rounded bg-surface-strong" />
      </div>

      <div className="h-[18px] w-24 rounded bg-surface-strong" />

      <div className="h-11 rounded-[10px] bg-surface-strong" />
    </div>
  );
}
