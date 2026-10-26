import type { ContactsRequisitesProps } from "./types/contacts-requisites.types";

export const ContactsRequisites = ({ requisites }: ContactsRequisitesProps) => {
  return (
    <dl className="grid gap-x-7 gap-y-2.5 md:grid-cols-2">
      {requisites.map((requisite) => (
        <div key={requisite.label} className="flex flex-col gap-[3px]">
          <dt className="text-[12.5px] text-muted-light">{requisite.label}</dt>
          <dd className="text-sm font-medium text-foreground">{requisite.value}</dd>
        </div>
      ))}
    </dl>
  );
};
