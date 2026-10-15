import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CABINET_PROFILE_PATH } from "../../constants/cabinet.constants";
import { getUserProfile } from "./api/get-user-profile";
import { CabinetProfile } from "./components/cabinet-profile/cabinet-profile";

export default async function CabinetProfilePage() {
  const user = await requireAuthUser(CABINET_PROFILE_PATH);
  const profile = await getUserProfile(user.id);

  return <CabinetProfile profile={profile} />;
}
