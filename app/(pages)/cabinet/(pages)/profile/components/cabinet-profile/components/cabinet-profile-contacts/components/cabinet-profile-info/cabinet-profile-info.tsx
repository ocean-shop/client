import type { CabinetProfileInfoProps } from "./types/cabinet-profile-info.types";

export const CabinetProfileInfo = ({ items }: CabinetProfileInfoProps) => {
  return (
    <dl className="grid gap-3.5 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-[18px]">
      {items.map(({ label, value }) => (
        <div key={label} className="flex min-w-0 flex-col gap-1">
          <dt className="text-[12.5px] text-muted-light">{label}</dt>
          <dd className="break-words text-[14.5px] font-medium text-foreground">{value}</dd>
        </div>
      ))}
    </dl>
  );
};
