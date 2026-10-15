import type { UserShippingView } from "../../../../../../../types/addresses.types";

export type CabinetAddressRemoveModalProps = {
  /** Kept after closing, so the content doesn't vanish while the modal animates out. */
  address: UserShippingView | null;
  isOpen: boolean;
  isRemoving: boolean;
  onClose: () => void;
  onConfirm: () => void;
};
