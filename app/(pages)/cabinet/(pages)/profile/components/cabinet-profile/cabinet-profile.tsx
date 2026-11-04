import { CabinetPageHeader } from "../../../../components/cabinet-page-header/cabinet-page-header";
import { CabinetProfileContacts } from "./components/cabinet-profile-contacts/cabinet-profile-contacts";
import { CABINET_PROFILE_TEXT, CABINET_PROFILE_TITLE } from "./constants/cabinet-profile.constants";
import type { CabinetProfileProps } from "./types/cabinet-profile.types";

/** The user's personal details, which checkout fills in for them. */
export const CabinetProfile = ({ profile }: CabinetProfileProps) => {
  return (
    <div className="flex flex-col gap-4">
      <CabinetPageHeader title={CABINET_PROFILE_TITLE} text={CABINET_PROFILE_TEXT} />

      <CabinetProfileContacts profile={profile} />
    </div>
  );
};
