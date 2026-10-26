import { formatDatePickerLabelHelper } from "@/app/ui/date-picker/helpers/format-date-picker-label";
import { formatCabinetPhoneHelper } from "../../../../../../../helpers/format-cabinet-phone";
import {
  CABINET_PROFILE_CONTACTS_EMPTY_VALUE,
  CABINET_PROFILE_CONTACTS_INFO_LABELS,
} from "../constants/cabinet-profile-contacts.constants";
import type { CabinetProfileInfoItem } from "../types/cabinet-profile-contacts.types";

export const buildCabinetProfileInfoHelper = (
  fullName: string | null,
  phone: string | null,
  birthday: string | null,
  email: string | null
): CabinetProfileInfoItem[] => {
  return [
    {
      label: CABINET_PROFILE_CONTACTS_INFO_LABELS.fullName,
      value: fullName?.trim() || CABINET_PROFILE_CONTACTS_EMPTY_VALUE,
    },
    {
      label: CABINET_PROFILE_CONTACTS_INFO_LABELS.phone,
      value: phone ? formatCabinetPhoneHelper(phone) : CABINET_PROFILE_CONTACTS_EMPTY_VALUE,
    },
    {
      label: CABINET_PROFILE_CONTACTS_INFO_LABELS.birthday,
      value: formatDatePickerLabelHelper(birthday) ?? CABINET_PROFILE_CONTACTS_EMPTY_VALUE,
    },
    {
      label: CABINET_PROFILE_CONTACTS_INFO_LABELS.email,
      value: email ?? CABINET_PROFILE_CONTACTS_EMPTY_VALUE,
    },
  ];
};
