import type { UserShippingView } from "../../../../../types/addresses.types";

export type CabinetAddressBookProps = {
  addresses: UserShippingView[];
};

/** The last change that went through, confirmed under the list. */
export type CabinetAddressBookStatus = "saved" | "main" | "removed";
