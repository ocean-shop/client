import type { CabinetPageHeaderProps } from "./types/cabinet-page-header.types";

/** Title of a cabinet section, with a line about it underneath. */
export const CabinetPageHeader = ({ title, text, isTextAlwaysVisible }: CabinetPageHeaderProps) => {
  return (
    <div className={`flex-col gap-1.5 ${isTextAlwaysVisible ? "flex" : "hidden lg:flex"}`}>
      <h1 className="hidden font-heading text-2xl font-semibold tracking-[-.025em] text-foreground lg:block">
        {title}
      </h1>
      {text && <p className="text-sm text-muted">{text}</p>}
    </div>
  );
};
