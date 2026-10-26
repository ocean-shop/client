import {
  HOME_ABOUT_DESCRIPTION,
  HOME_ABOUT_EYEBROW_LABEL,
  HOME_ABOUT_FEATURES,
  HOME_ABOUT_PHOTO_CAPTION,
  HOME_ABOUT_STATS,
  HOME_ABOUT_TITLE,
} from "./constants/home-about.constants";

export const HomeAbout = () => {
  return (
    <section className="bg-surface-soft lg:bg-background">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-4.5 pb-2 pt-8 lg:gap-10 lg:px-10 lg:pb-14 lg:pt-[72px]">
        {/* Mobile stacks the photo between the heading and the text; desktop moves it to a
            right column spanning every row, with the empty 1fr rows centering the left column. */}
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_repeat(4,auto)_1fr] lg:gap-x-12 lg:gap-y-5">
          <span className="text-xs font-semibold uppercase tracking-[.1em] text-accent lg:col-start-1 lg:row-start-2 lg:text-[12.5px]">
            {HOME_ABOUT_EYEBROW_LABEL}
          </span>

          <h2 className="text-pretty font-heading text-[21px] font-semibold leading-[1.2] tracking-[-.025em] text-foreground lg:col-start-1 lg:row-start-3 lg:text-[32px] lg:leading-[1.15] lg:tracking-[-.03em]">
            {HOME_ABOUT_TITLE}
          </h2>

          {/* Placeholder until the team or showroom photo arrives. */}
          <div className="flex h-[190px] items-end rounded-2xl bg-surface-strong p-3.5 lg:col-start-2 lg:row-span-full lg:h-[380px] lg:rounded-3xl lg:p-5">
            <span className="text-[12.5px] text-muted lg:text-[13px]">
              {HOME_ABOUT_PHOTO_CAPTION}
            </span>
          </div>

          <p className="text-pretty text-sm leading-[1.6] text-muted lg:col-start-1 lg:row-start-4 lg:max-w-[520px] lg:text-[15px]">
            {HOME_ABOUT_DESCRIPTION}
          </p>

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
        </div>

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
      </div>
    </section>
  );
};
