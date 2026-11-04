import { formatDatePickerLabelHelper } from "@/app/ui/date-picker/helpers/format-date-picker-label";
import { formatCabinetPhoneHelper } from "../../../../../../../helpers/format-cabinet-phone";
import type { CabinetProfileInfoItem } from "../components/cabinet-profile-info/types/cabinet-profile-info.types";
import {
  CABINET_PROFILE_CONTACTS_EMPTY_VALUE,
  CABINET_PROFILE_CONTACTS_INFO_LABELS,
} from "../constants/cabinet-profile-contacts.constants";

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
