import type { InfoCardProps } from "./types/info-card.types";

/** White section of an info page with its own heading. */
export function InfoCard({ title, subtitle, children }: InfoCardProps) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl bg-background p-[18px] lg:p-6">
      <h2 className="text-base font-semibold text-foreground lg:text-[17px]">{title}</h2>
      {subtitle && <p className="text-[13px] leading-[1.55] text-muted-light">{subtitle}</p>}
      {children}
    </section>
  );
}
