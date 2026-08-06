import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { RunDiff } from "./components/RunDiff";
import { Bench } from "./components/Bench";
import { Why } from "./components/Why";
import { DesignPartners } from "./components/DesignPartners";
import { Footer } from "./components/Footer";
import { westernBlot } from "./data/runDiff";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RunDiff comparison={westernBlot} />
        <Bench />
        <Why />
        <DesignPartners />
      </main>
      <Footer />
    </>
  );
}
