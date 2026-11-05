import { HomeAboutFeatures } from "./components/home-about-features/home-about-features";
import { HomeAboutStats } from "./components/home-about-stats/home-about-stats";
import {
  HOME_ABOUT_DESCRIPTION,
  HOME_ABOUT_EYEBROW_LABEL,
  HOME_ABOUT_PHOTO_CAPTION,
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

          <HomeAboutStats />
        </div>

        <HomeAboutFeatures />
      </div>
    </section>
  );
};
