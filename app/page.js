import { site } from "../content/site.config";
import HeroFront from "./components/HeroFront";

export default function Home() {
  return (
    <div id="home" className="stack-xl">
      {/* Hero */}
      <HeroFront />

      {/* Static landing only; slides open from header */}
    </div>
  );
}
