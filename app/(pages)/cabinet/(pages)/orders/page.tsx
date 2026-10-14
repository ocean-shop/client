import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CABINET_ORDERS_PATH } from "../../constants/cabinet.constants";
import { getOrderProducts } from "./api/get-order-products";
import { getUserOrders } from "./api/get-user-orders";
import { CabinetOrders } from "./components/cabinet-orders/cabinet-orders";
import { ORDERS_PAGE_SEARCH_PARAM } from "./constants/orders.constants";
import { parseOrdersPageHelper } from "./helpers/parse-orders-page";
import { toUserOrderViewHelper } from "./helpers/to-user-order-view";

export default async function CabinetOrdersPage({ searchParams }: PageProps<"/cabinet/orders">) {
  const user = await requireAuthUser(CABINET_ORDERS_PATH);
  const page = parseOrdersPageHelper((await searchParams)[ORDERS_PAGE_SEARCH_PARAM]);
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
}
