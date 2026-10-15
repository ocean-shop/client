"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb } from "@/app/ui/breadcrumb/breadcrumb";
import { INFO_HOME_LABEL, INFO_HOME_PATH } from "../../constants/info.constants";
import { findInfoMenuEntryHelper } from "../../helpers/find-info-menu-entry";

/** Desktop trail "Головна → group → page"; mobile shows the chip row instead. */
export function InfoBreadcrumb() {
  const entry = findInfoMenuEntryHelper(usePathname());

  if (!entry) return null;

  return (
    <div className="hidden lg:block">
      <Breadcrumb
        items={[
          { label: INFO_HOME_LABEL, href: INFO_HOME_PATH },
          { label: entry.group.title, href: entry.group.href },
          { label: entry.item.label },
        ]}
      />
    </div>
  );
}
