import { InfoBreadcrumb } from "./components/info-breadcrumb/info-breadcrumb";
import { InfoMobileNav } from "./components/info-mobile-nav/info-mobile-nav";
import { InfoSidebar } from "./components/info-sidebar/info-sidebar";
import { INFO_PAGE_CLASS_NAME } from "./constants/info.constants";

/** Shared frame of the static pages for buyers and about the company. */
const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={INFO_PAGE_CLASS_NAME}>
      <InfoMobileNav />

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col gap-[18px] px-4 pb-8 pt-4 lg:px-10 lg:pb-16 lg:pt-[26px]">
        <InfoBreadcrumb />

        <div className="lg:grid lg:grid-cols-[272px_minmax(0,1fr)] lg:items-start lg:gap-8">
          <InfoSidebar />
          <div className="flex min-w-0 flex-col gap-3.5 lg:gap-[18px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoLayout;
