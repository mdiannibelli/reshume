import {
  Contribute,
  Features,
  Hero,
  Pricing,
  Stats,
  FAQ,
  Suggestion,
} from "@/components";

export function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="relative pb-24">
        <Stats />
        <Features />
        <Pricing />
        <Contribute />
        <FAQ />
        <Suggestion />
      </div>
    </div>
  );
}
