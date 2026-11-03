import { DesktopHero } from "./components/desktop-hero/desktop-hero";
import { MobileHero } from "./components/mobile-hero/mobile-hero";

export const Hero = () => {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
};
