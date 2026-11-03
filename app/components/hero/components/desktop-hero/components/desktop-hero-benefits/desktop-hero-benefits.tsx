import { DESKTOP_HERO_BENEFITS } from "./constants/desktop-hero-benefits.constants";

export const DesktopHeroBenefits = () => {
  return (
    <div className="bg-accent">
      <div className="mx-auto flex max-w-page gap-11 px-10 py-5 text-[13.5px] text-accent-soft">
        {DESKTOP_HERO_BENEFITS.map((benefit) => (
          <span key={benefit.title} className="flex items-center gap-2">
            <span className="font-symbols text-[19px] text-accent-soft">{benefit.icon}</span>
            {benefit.title}
          </span>
        ))}
      </div>
    </div>
  );
};
