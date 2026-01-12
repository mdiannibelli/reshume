import { SectionWrapper } from "@/layouts";
import { AtsOptimized } from "./features/AtsOptimized";
import { InstantGeneration } from "./features/InstantGeneration";
import { Templates } from "./features/Templates";

export function Features() {
  return (
    <SectionWrapper
      sectionId="features"
      resetStyles
      className="mt-24 lg:mt-36 pt-12 md:pt-32"
    >
      <div className="container mx-auto px-3 md:px-6 lg:px-8 relative flex flex-col md:gap-y-36 gap-y-24">
        <AtsOptimized />
        <InstantGeneration />
        <Templates />
      </div>
    </SectionWrapper>
  );
}
