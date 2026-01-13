import { SectionWrapper } from "@/layouts";
import { AtsOptimized } from "./features/AtsOptimized";
import { InstantGeneration } from "./features/InstantGeneration";
import { Templates } from "./features/Templates";
import { Badge } from "@/components/ui";

export function Features() {
  return (
    <SectionWrapper sectionId="features" resetStyles>
      <Badge text="HOME.FEATURES.BADGE" className="mb-12" />
      <div className="container mx-auto px-3 md:px-6 lg:px-8 relative flex flex-col md:gap-y-36 gap-y-24">
        <AtsOptimized />
        <InstantGeneration />
        <Templates />
      </div>
    </SectionWrapper>
  );
}
