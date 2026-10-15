import { notFound } from "next/navigation";
import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CABINET_ORDERS_PATH } from "../../../constants/cabinet.constants";
import { getOrderProducts } from "../api/get-order-products";
import { getUserOrder } from "../api/get-user-order";
import { toUserOrderViewHelper } from "../helpers/to-user-order-view";
import { CabinetOrderPage } from "./components/cabinet-order-page/cabinet-order-page";

export default async function CabinetOrderDetailsPage({
  params,
}: PageProps<"/cabinet/orders/[orderId]">) {
  const { orderId } = await params;
  await requireAuthUser(`${CABINET_ORDERS_PATH}/${orderId}`);
  const order = await getUserOrder(orderId);

  if (!order) notFound();

  const products = await getOrderProducts([order]);

  return <CabinetOrderPage order={toUserOrderViewHelper(order, products)} />;
}
