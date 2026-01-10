import { Features, Hero, Stats } from "@/components";

export function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="relative -top-152 md:-top-86 lg:-top-64">
        <Stats />
        <Features />
      </div>
    </div>
  );
}
