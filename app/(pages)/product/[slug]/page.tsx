import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PRODUCT_CATEGORY_SEARCH_PARAM } from "@/app/shared/products/constants/products.constants";
import { buildProductHrefHelper } from "@/app/shared/products/helpers/build-product-href";
import { ProductView } from "../components/product-view/product-view";
import { buildProductBreadcrumbItemsHelper } from "../helpers/build-product-breadcrumb-items";
import { buildProductMetadataHelper } from "../helpers/build-product-metadata";
import { getProductByRouteParamHelper } from "../helpers/get-product-by-route-param";
import { PRODUCT_PAGE_CLASS_NAME } from "../constants/product.constants";

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  // Memoized with the page's own request, so the product is fetched once per render.
  const product = await getProductByRouteParamHelper(slug);

  return product ? buildProductMetadataHelper(product) : {};
}

export default async function ProductPage({ params, searchParams }: PageProps<"/product/[slug]">) {
  const [{ slug }, resolvedSearchParams] = await Promise.all([params, searchParams]);
  const product = await getProductByRouteParamHelper(slug);

  if (!product) notFound();

  const categoryParam = resolvedSearchParams[PRODUCT_CATEGORY_SEARCH_PARAM];
  const categorySlug = typeof categoryParam === "string" ? categoryParam : undefined;

  // Links from before slugs carry the product id; they move to the slug address for good.
  if (product.slug !== slug) permanentRedirect(buildProductHrefHelper(product.slug, categorySlug));

  const breadcrumbItems = await buildProductBreadcrumbItemsHelper(product.name, categorySlug);

  return (
    <div className={PRODUCT_PAGE_CLASS_NAME}>
      <ProductView product={product} breadcrumbItems={breadcrumbItems} />
    </div>
  );
}
