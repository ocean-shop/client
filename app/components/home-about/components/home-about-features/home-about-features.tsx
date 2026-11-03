import { HOME_ABOUT_FEATURES } from "./constants/home-about-features.constants";

export const HomeAboutFeatures = () => {
  return (
    <ul className="flex flex-col gap-2.5 lg:grid lg:grid-cols-3 lg:gap-3.5">
      {HOME_ABOUT_FEATURES.map((feature) => (
        <li
          key={feature.title}
          className="flex gap-3 rounded-[14px] bg-background p-3.5 lg:gap-4 lg:rounded-2xl lg:bg-surface-soft lg:p-5"
        >
          <span
            aria-hidden
            className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-accent-soft font-symbols text-xl text-accent lg:h-11 lg:w-11 lg:rounded-xl lg:text-[22px]"
          >
            {feature.icon}
          </span>

          <div className="flex flex-col gap-[3px] lg:gap-1">
            <span className="text-sm font-semibold text-foreground lg:text-[15px]">
              {feature.title}
            </span>
            <span className="text-[12.5px] leading-[1.5] text-muted lg:text-[13.5px]">
              {feature.text}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
