import {
  SHIPPING_ADDRESS_SEPARATOR,
  SHIPPING_CARRIER_ICONS,
  SHIPPING_CARRIER_LABELS,
} from "../constants/addresses.constants";
import type { UserShipping, UserShippingView } from "../types/addresses.types";

/** A line saved without a title, e.g. by an older client, is shown under the carrier's name. */
export function toUserShippingViewHelper({ id, method, address }: UserShipping): UserShippingView {
  const separatorIndex = address.indexOf(SHIPPING_ADDRESS_SEPARATOR);
  const hasTitle = separatorIndex > 0;

  return {
    id,
    icon: SHIPPING_CARRIER_ICONS[method],
    title: hasTitle ? address.slice(0, separatorIndex) : SHIPPING_CARRIER_LABELS[method],
    address: hasTitle ? address.slice(separatorIndex + SHIPPING_ADDRESS_SEPARATOR.length) : address,
  };
}
