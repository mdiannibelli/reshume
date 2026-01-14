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
      <div className="relative -top-152 md:-top-104 lg:-top-86">
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
