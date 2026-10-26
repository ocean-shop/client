import type { Metadata } from "next";
import { Suspense } from "react";
import { SEO_DEFAULT_OPEN_GRAPH } from "./shared/seo/constants/seo.constants";
import { Hero } from "./components/hero/hero";
import { HomeAbout } from "./components/home-about/home-about";
import { HomeLoyalty } from "./components/home-loyalty/home-loyalty";
import { PopularGrid } from "./components/popular-grid/popular-grid";

// Title and description stay the root layout defaults; only the address needs pinning here.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...SEO_DEFAULT_OPEN_GRAPH, url: "/" },
};

const Home = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      {/* Its own Suspense boundary lets React hydrate the grid in a separate, shorter task. */}
      <Suspense>
        <PopularGrid />
      </Suspense>
      <HomeAbout />
      <HomeLoyalty />
    </div>
  );
};

export default Home;
