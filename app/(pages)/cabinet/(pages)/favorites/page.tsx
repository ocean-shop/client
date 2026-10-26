import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { getFavoriteProducts } from "@/app/shared/favorites/api/get-favorite-products";
import { mapProductToCardDataHelper } from "@/app/shared/products/helpers/map-product-to-card-data";
import { CABINET_FAVORITES_PATH } from "../../constants/cabinet.constants";
import { parseCabinetPageHelper } from "../../helpers/parse-cabinet-page";
import { CabinetFavorites } from "./components/cabinet-favorites/cabinet-favorites";
import { FAVORITES_PAGE_SEARCH_PARAM, FAVORITES_PAGE_SIZE } from "./constants/favorites.constants";

const CabinetFavoritesPage = async ({ searchParams }: PageProps<"/cabinet/favorites">) => {
  const user = await requireAuthUser(CABINET_FAVORITES_PATH);
  const page = parseCabinetPageHelper((await searchParams)[FAVORITES_PAGE_SEARCH_PARAM]);
  const response = await getFavoriteProducts(user.id, page, FAVORITES_PAGE_SIZE);

  return (
    <CabinetFavorites
      key={page}
      products={response.items.map((product) => mapProductToCardDataHelper(product))}
      total={response.total}
      page={response.page}
      totalPages={response.totalPages}
    />
  );
};

export default CabinetFavoritesPage;
