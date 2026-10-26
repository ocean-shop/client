import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CABINET_ORDERS_PATH } from "../../constants/cabinet.constants";
import { parseCabinetPageHelper } from "../../helpers/parse-cabinet-page";
import { getOrderProducts } from "./api/get-order-products";
import { getUserOrders } from "./api/get-user-orders";
import { CabinetOrders } from "./components/cabinet-orders/cabinet-orders";
import { ORDERS_PAGE_SEARCH_PARAM } from "./constants/orders.constants";
import { toUserOrderViewHelper } from "./helpers/to-user-order-view";

const CabinetOrdersPage = async ({ searchParams }: PageProps<"/cabinet/orders">) => {
  const user = await requireAuthUser(CABINET_ORDERS_PATH);
  const page = parseCabinetPageHelper((await searchParams)[ORDERS_PAGE_SEARCH_PARAM]);
  const response = await getUserOrders(user.id, page);
  const products = await getOrderProducts(response.items);

  return (
    <CabinetOrders
      key={page}
      orders={response.items.map((order) => toUserOrderViewHelper(order, products))}
      page={response.page}
      totalPages={response.totalPages}
    />
  );
};

export default CabinetOrdersPage;
