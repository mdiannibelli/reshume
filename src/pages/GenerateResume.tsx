import { SectionWrapper } from "@/layouts";
import { ResumeGenerator } from "@/components";

export function GenerateResume() {
  return (
    <SectionWrapper className="py-52 justify-start">
      <ResumeGenerator />
    </SectionWrapper>
  );
}
