import { CabinetAddressBook } from "./components/cabinet-address-book/cabinet-address-book";
import {
  CABINET_ADDRESSES_TEXT,
  CABINET_ADDRESSES_TITLE,
} from "./constants/cabinet-addresses.constants";
import type { CabinetAddressesProps } from "./types/cabinet-addresses.types";

/** The delivery addresses the user saved, and the form to add another. */
export function CabinetAddresses({ addresses }: CabinetAddressesProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="hidden flex-col gap-1.5 lg:flex">
        <h1 className="font-heading text-2xl font-semibold tracking-[-.025em] text-foreground">
          {CABINET_ADDRESSES_TITLE}
        </h1>
        <p className="text-sm text-muted">{CABINET_ADDRESSES_TEXT}</p>
      </div>

      <CabinetAddressBook addresses={addresses} />
    </div>
  );
}
