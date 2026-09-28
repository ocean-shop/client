import { notFound } from "next/navigation";
import { getProductById } from "@/app/shared/products/api/get-product-by-id";
import { PRODUCT_CATEGORY_SEARCH_PARAM } from "@/app/shared/products/constants/products.constants";
import { ProductView } from "../components/product-view/product-view";
import { buildProductBreadcrumbItemsHelper } from "../helpers/build-product-breadcrumb-items";
import { PRODUCT_PAGE_CLASS_NAME } from "../constants/product.constants";

export default async function ProductPage({
  params,
  searchParams,
}: PageProps<"/product/[productId]">) {
  const [{ productId }, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const product = await getProductById(productId);

  if (!product) notFound();

  const categoryParam = resolvedSearchParams[PRODUCT_CATEGORY_SEARCH_PARAM];
  const breadcrumbItems = await buildProductBreadcrumbItemsHelper(
    product.name,
    typeof categoryParam === "string" ? categoryParam : undefined
  );

  return (
    <div className={PRODUCT_PAGE_CLASS_NAME}>
      <ProductView product={product} breadcrumbItems={breadcrumbItems} />
    </div>
  );
}
