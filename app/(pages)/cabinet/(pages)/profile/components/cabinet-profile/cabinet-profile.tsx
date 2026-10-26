import { CabinetProfileContacts } from "./components/cabinet-profile-contacts/cabinet-profile-contacts";
import { CABINET_PROFILE_TEXT, CABINET_PROFILE_TITLE } from "./constants/cabinet-profile.constants";
import type { CabinetProfileProps } from "./types/cabinet-profile.types";

/** The user's personal details, which checkout fills in for them. */
export const CabinetProfile = ({ profile }: CabinetProfileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="hidden flex-col gap-1.5 lg:flex">
        <h1 className="font-heading text-2xl font-semibold tracking-[-.025em] text-foreground">
          {CABINET_PROFILE_TITLE}
        </h1>
        <p className="text-sm text-muted">{CABINET_PROFILE_TEXT}</p>
      </div>

      <CabinetProfileContacts profile={profile} />
    </div>
  );
};
