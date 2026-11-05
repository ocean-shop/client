import Link from "next/link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import type { CabinetStatCardProps } from "./types/cabinet-stat-card.types";

/** Shortcut to a cabinet section with its current state. On mobile the last card spans the row. */
export const CabinetStatCard = ({ href, icon, label, value, note }: CabinetStatCardProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2.5 rounded-2xl border border-background bg-background p-4 transition-colors last:col-span-2 hover:border-accent lg:p-5 lg:last:col-span-1"
    >
      <div className="flex items-center justify-between">
        <MaterialIcon name={icon} className="text-[22px] text-accent" />
        <MaterialIcon name="chevron_right" className="text-[20px] text-muted-light" />
      </div>
      <span className="text-sm text-muted">{label}</span>
      <span className="text-[15px] font-semibold leading-[1.35] text-foreground lg:text-base">
        {value}
      </span>
      <span className="text-[12.5px] leading-[1.4] text-muted-light">{note}</span>
    </Link>
  );
};
