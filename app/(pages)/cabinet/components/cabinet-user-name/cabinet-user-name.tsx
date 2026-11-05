import type { CabinetUserNameProps } from "./types/cabinet-user-name.types";

/** Who is signed in, cut short rather than wrapped when the email is long. */
export const CabinetUserName = ({ title, subtitle, className }: CabinetUserNameProps) => {
  return (
    <div className={`flex min-w-0 flex-col ${className ?? ""}`}>
      <span className="truncate text-[15px] font-semibold text-foreground">{title}</span>
      {subtitle && <span className="truncate text-[12.5px] text-muted-light">{subtitle}</span>}
    </div>
  );
};
