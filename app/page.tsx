import { Hero } from "./components/hero/hero";
import { PopularGrid } from "./components/popular-grid/popular-grid";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <PopularGrid />
    </div>
  );
}
