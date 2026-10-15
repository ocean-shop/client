import type { CabinetOrderInfoCardProps } from "./types/cabinet-order-info-card.types";

export function CabinetOrderInfoCard({ icon, label, title, lines }: CabinetOrderInfoCardProps) {
  return (
    <section className="flex min-w-0 flex-col gap-2 rounded-2xl bg-background p-[18px] lg:p-6">
      <h2 className="flex items-center gap-2 text-[12.5px] font-semibold text-accent">
        {/* Ligatures only match lowercase names, so the icon stays out of the uppercase label. */}
        <span className="font-symbols text-lg">{icon}</span>
        <span className="uppercase tracking-[.06em]">{label}</span>
      </h2>
      <span className="text-[14.5px] font-semibold text-foreground">{title}</span>
      {lines.map((line) => (
        <span key={line} className="break-words text-[13.5px] leading-normal text-muted">
          {line}
        </span>
      ))}
    </section>
  );
}
