import type { UserShippingView } from "../../../../../../../types/addresses.types";

export type CabinetAddressCardProps = {
  address: UserShippingView;
  onSetMain: () => void;
  onRemove: () => void;
  /** While any address is being changed, so two requests never race. */
  disabled?: boolean;
};
