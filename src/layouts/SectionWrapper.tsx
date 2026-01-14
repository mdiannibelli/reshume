import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  sectionId,
  className,
  resetStyles = false,
  noPadding = false,
}: {
  children: React.ReactNode;
  sectionId?: string;
  className?: string;
  resetStyles?: boolean;
  noPadding?: boolean;
}) {
  return (
    <section
      id={sectionId}
      className={cn(
        "relative flex flex-col items-center",
        !resetStyles && "min-h-screen",
        !noPadding && "pb-24 pt-32 md:py-36",
        "overflow-hidden w-full rounded-md z-0",
        resetStyles && "rounded-none overflow-visible min-h-0 flex-none",
        className
      )}
    >
      {children}
    </section>
  );
}
