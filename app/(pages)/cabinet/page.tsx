import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CabinetOverview } from "./components/cabinet-overview/cabinet-overview";
import { getCabinetOverviewHelper } from "./helpers/get-cabinet-overview";

export default async function CabinetPage() {
  await requireAuthUser();
  const overview = await getCabinetOverviewHelper();

  return <CabinetOverview overview={overview} />;
}
