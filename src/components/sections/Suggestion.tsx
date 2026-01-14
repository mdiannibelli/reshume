import { SectionWrapper } from "@/layouts";
import { ContactForSuggestion } from "./suggestion/ContactForSuggestion";

export function Suggestion() {
  return (
    <SectionWrapper
      noPadding
      resetStyles
      className="bg-(--background-secondary) pb-16"
    >
      <div className="container mx-auto px-3 md:px-6 lg:px-8 relative">
        <ContactForSuggestion />
      </div>
    </SectionWrapper>
  );
}
