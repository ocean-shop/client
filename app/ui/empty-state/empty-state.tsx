import Link from "next/link";
import { MaterialIcon } from "../material-icon/material-icon";
import { SurfaceCard } from "../surface-card/surface-card";
import { EMPTY_STATE_BASE_CLASS_NAME } from "./constants/empty-state.constants";
import type { EmptyStateProps } from "./types/empty-state.types";

/** What a list shows instead of its items, optionally with a way to go and find some. */
export const EmptyState = ({ label, icon, link, className }: EmptyStateProps) => {
  return (
    <SurfaceCard padding="none" className={`${EMPTY_STATE_BASE_CLASS_NAME} ${className ?? ""}`}>
      {icon && <MaterialIcon name={icon} className="text-[32px] text-muted-light" />}
      {label}
      {link && (
        <Link
          href={link.href}
          className="text-[13.5px] font-semibold text-accent hover:text-accent-dark"
        >
          {link.label}
        </Link>
      )}
    </SurfaceCard>
  );
};
