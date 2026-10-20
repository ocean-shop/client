import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CABINET_ADDRESSES_PATH } from "../../constants/cabinet.constants";
import { getUserShippings } from "./api/get-user-shippings";
import { CabinetAddresses } from "./components/cabinet-addresses/cabinet-addresses";
import { toUserShippingViewHelper } from "./helpers/to-user-shipping-view";

const CabinetAddressesPage = async () => {
  const user = await requireAuthUser(CABINET_ADDRESSES_PATH);
  const shippings = await getUserShippings(user.id);

  return <CabinetAddresses addresses={shippings.map(toUserShippingViewHelper)} />;
};

export default CabinetAddressesPage;
