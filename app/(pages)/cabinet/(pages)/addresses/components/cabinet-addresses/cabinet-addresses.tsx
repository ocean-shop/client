import { CabinetPageHeader } from "../../../../components/cabinet-page-header/cabinet-page-header";
import { CabinetAddressBook } from "./components/cabinet-address-book/cabinet-address-book";
import {
  CABINET_ADDRESSES_TEXT,
  CABINET_ADDRESSES_TITLE,
} from "./constants/cabinet-addresses.constants";
import type { CabinetAddressesProps } from "./types/cabinet-addresses.types";

/** The delivery addresses the user saved, and the form to add another. */
export const CabinetAddresses = ({ addresses }: CabinetAddressesProps) => {
  return (
    <div className="flex flex-col gap-4">
      <CabinetPageHeader title={CABINET_ADDRESSES_TITLE} text={CABINET_ADDRESSES_TEXT} />

      <CabinetAddressBook addresses={addresses} />
    </div>
  );
};
