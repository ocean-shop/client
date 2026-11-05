import { HOME_ABOUT_STATS } from "./constants/home-about-stats.constants";

export const HomeAboutStats = () => {
  return (
    <dl className="grid grid-cols-3 gap-2 lg:col-start-1 lg:row-start-5 lg:max-w-[520px] lg:gap-3.5">
      {HOME_ABOUT_STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col-reverse justify-end gap-[3px] rounded-xl bg-background px-2.5 py-3 lg:gap-1 lg:rounded-2xl lg:bg-surface-soft lg:px-5 lg:py-4"
        >
          <dt className="text-[11.5px] text-muted lg:text-[13px]">{stat.label}</dt>
          <dd className="font-heading text-base font-semibold text-accent lg:text-[22px]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};
