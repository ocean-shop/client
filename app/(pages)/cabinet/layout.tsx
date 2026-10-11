import { AuthUserProvider } from "@/app/core/providers/auth-user-provider/auth-user-provider";
import { requireAuthUser } from "@/app/shared/auth/helpers/require-auth-user";
import { CabinetMobileNav } from "./components/cabinet-mobile-nav/cabinet-mobile-nav";
import { CabinetSidebar } from "./components/cabinet-sidebar/cabinet-sidebar";
import { CABINET_PAGE_CLASS_NAME } from "./constants/cabinet.constants";

export default async function CabinetLayout({ children }: LayoutProps<"/cabinet">) {
  const user = await requireAuthUser();

  return (
    <AuthUserProvider user={user}>
      <div className={CABINET_PAGE_CLASS_NAME}>
        <CabinetMobileNav />

        <div className="mx-auto w-full max-w-page flex-1 px-4 pb-8 pt-4 lg:grid lg:grid-cols-[272px_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-10 lg:pb-16 lg:pt-7">
          <CabinetSidebar />
          <div className="flex min-w-0 flex-col">{children}</div>
        </div>
      </div>
    </AuthUserProvider>
  );
}
