import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  sectionId,
  className,
  resetStyles = false,
}: {
  children: React.ReactNode;
  sectionId?: string;
  className?: string;
  resetStyles?: boolean;
}) {
  return (
    <section
      id={sectionId}
      className={cn(
        "relative flex min-h-screen flex-col items-center pb-24 pt-32 md:py-52 overflow-hidden w-full rounded-md z-0",
        resetStyles &&
          "rounded-none overflow-visible min-h-0 p-0 md:p-0 flex-none",
        className
      )}
    >
      {children}
    </section>
  );
}
