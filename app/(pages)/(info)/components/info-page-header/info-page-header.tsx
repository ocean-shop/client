import type { InfoPageHeaderProps } from "./types/info-page-header.types";

export const InfoPageHeader = ({ title, lead, meta }: InfoPageHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-pretty font-heading text-[21px] font-semibold leading-[1.2] tracking-[-.025em] text-foreground lg:text-[28px]">
        {title}
      </h1>
      {lead && (
        <p className="max-w-[640px] text-pretty text-sm leading-[1.6] text-muted lg:text-[15px]">
          {lead}
        </p>
      )}
      {meta && <div className="text-[13.5px] text-muted-light">{meta}</div>}
    </div>
  );
};
