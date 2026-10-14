import type { CabinetAddressCardProps } from "./types/cabinet-address-card.types";

export function CabinetAddressCard({ address }: CabinetAddressCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-[14px] border-[1.5px] border-border-soft bg-background p-4">
      <div className="flex items-center gap-2.5">
        <span className="font-symbols text-xl text-accent">{address.icon}</span>
        <span className="min-w-0 flex-1 text-[14.5px] font-semibold text-foreground">
          {address.title}
        </span>
      </div>
      <span className="break-words text-[13.5px] leading-normal text-muted">{address.address}</span>
    </div>
  );
}
