import { Suspense } from "react";
import { Hero } from "./components/hero/hero";
import { PopularGrid } from "./components/popular-grid/popular-grid";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      {/* Its own Suspense boundary lets React hydrate the grid in a separate, shorter task. */}
      <Suspense>
        <PopularGrid />
      </Suspense>
    </div>
  );
}
