"use client";

import { useState } from "react";
import { useAuthUser } from "@/app/shared/auth/hooks/use-auth-user";
import { Button } from "@/app/ui/button/button";
import { MaterialIcon } from "@/app/ui/material-icon/material-icon";
import { SuccessMessage } from "@/app/ui/success-message/success-message";
import { SurfaceCard } from "@/app/ui/surface-card/surface-card";
import { CabinetSectionHeader } from "../../../../../../components/cabinet-section-header/cabinet-section-header";
import { CabinetProfileEditForm } from "./components/cabinet-profile-edit-form/cabinet-profile-edit-form";
import { CabinetProfileInfo } from "./components/cabinet-profile-info/cabinet-profile-info";
import {
  CABINET_PROFILE_CONTACTS_EDIT_LABEL,
  CABINET_PROFILE_CONTACTS_SAVED_LABEL,
  CABINET_PROFILE_CONTACTS_TITLE,
} from "./constants/cabinet-profile-contacts.constants";
import { buildCabinetProfileInfoHelper } from "./helpers/build-cabinet-profile-info";
import type { CabinetProfileContactsProps } from "./types/cabinet-profile-contacts.types";

/**
 * The user's name, phone and birthday, read-only until "Редагувати" is pressed. Users who signed in with a
 * phone and never saved another one see their login number, so checkout has it from the start.
 */
export const CabinetProfileContacts = ({ profile }: CabinetProfileContactsProps) => {
  const user = useAuthUser();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const phone = profile.phoneNumber ?? user.mobileNumber;

  const handleEdit = () => {
    setIsSaved(false);
    setIsEditing(true);
  };

  const handleSaved = () => {
    setIsEditing(false);
    setIsSaved(true);
  };

  return (
    <SurfaceCard as="section" className="flex flex-col gap-[18px]">
      <CabinetSectionHeader title={CABINET_PROFILE_CONTACTS_TITLE}>
        {!isEditing && (
          <Button
            variant="text"
            size="auto"
            onClick={handleEdit}
            className="!gap-1.5 text-[13.5px]"
          >
            <MaterialIcon name="edit" className="text-[17px]" />
            {CABINET_PROFILE_CONTACTS_EDIT_LABEL}
          </Button>
        )}
      </CabinetSectionHeader>

      {isEditing ? (
        <CabinetProfileEditForm
          profile={profile}
          phone={phone}
          email={user.email}
          onCancel={() => setIsEditing(false)}
          onSaved={handleSaved}
        />
      ) : (
        <CabinetProfileInfo
          items={buildCabinetProfileInfoHelper(
            profile.fullName,
            phone,
            profile.birthday,
            user.email
          )}
        />
      )}

      {isSaved && <SuccessMessage>{CABINET_PROFILE_CONTACTS_SAVED_LABEL}</SuccessMessage>}
    </SurfaceCard>
  );
};
