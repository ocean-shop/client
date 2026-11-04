import type { CabinetSectionHeaderProps } from "./types/cabinet-section-header.types";

export const CabinetSectionHeader = ({ title, children }: CabinetSectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[15.5px] font-semibold text-foreground">{title}</h2>
      {children}
    </div>
  );
};
