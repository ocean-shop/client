import Link from "next/link";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import type { BreadcrumbProps } from "./types/breadcrumb.types";

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="flex flex-wrap items-center gap-[7px] text-[13px] text-muted-light">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-[7px]">
            {item.href && !isLast ? (
              <Link href={item.href} className="cursor-pointer hover:text-accent">
                {item.label}
              </Link>
            ) : item.onClick && !isLast ? (
              <button type="button" onClick={item.onClick} className="hover:text-accent">
                {item.label}
              </button>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
            {!isLast && <MaterialIcon name="chevron_right" className="text-[15px]" />}
          </div>
        );
      })}
    </div>
  );
};
