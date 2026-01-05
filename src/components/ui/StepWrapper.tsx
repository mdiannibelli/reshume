import { cn } from "@/lib/utils";

export function StepWrapper({
  children,
  className,
  borderDisabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  borderDisabled?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-(--background) rounded-xl p-0 md:p-8 ",
        !borderDisabled && "md:border border-(--border)",
        className
      )}
    >
      {children}
    </div>
  );
}
