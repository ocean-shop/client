/** Holds the layout while the placed order is read from browser storage. */
export function CheckoutSuccessSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-5 lg:gap-7">
      <div className="flex flex-col items-center gap-3 lg:gap-3.5">
        <div className="h-16 w-16 rounded-full bg-background lg:h-[76px] lg:w-[76px]" />
        <div className="h-7 w-72 max-w-full rounded-lg bg-background lg:h-9 lg:w-[420px]" />
        <div className="h-11 w-full max-w-[460px] rounded-lg bg-background" />
      </div>

      <div className="h-[420px] rounded-2xl bg-background lg:h-[340px]" />
    </div>
  );
}
