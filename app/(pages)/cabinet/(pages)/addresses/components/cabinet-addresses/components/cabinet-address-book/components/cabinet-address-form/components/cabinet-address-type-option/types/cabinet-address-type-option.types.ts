import type { CabinetAddressType } from "../../../types/cabinet-address-form.types";

export type CabinetAddressTypeOptionProps = {
  option: CabinetAddressType;
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
};
