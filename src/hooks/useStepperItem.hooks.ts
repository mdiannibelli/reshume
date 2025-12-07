import type { UseStepperItemArgs } from "@/interfaces";
import type { ResumeData } from "@/interfaces";
import type { Path } from "react-hook-form";
import { useState } from "react";
import { useWatch } from "react-hook-form";

export function useStepperItem(args: UseStepperItemArgs) {
  const { control, stepKey, index, trigger } = args;
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const inProgressPath = `${stepKey}.${index}.inProgress` as Path<ResumeData>;
  const startDatePath = `${stepKey}.${index}.startDate` as Path<ResumeData>;
  const endDatePath = `${stepKey}.${index}.endDate` as Path<ResumeData>;

  const inProgress = useWatch({
    control,
    name: inProgressPath,
  }) as boolean;

  const startDate = useWatch({
    control,
    name: startDatePath,
  });

  const endDate = useWatch({
    control,
    name: endDatePath,
  });

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleModal = async () => {
    const fieldsToValidate = [
      `${stepKey}.${index}.institution`,
      `${stepKey}.${index}.title`,
      `${stepKey}.${index}.startDate`,
      `${stepKey}.${index}.company`,
      `${stepKey}.${index}.position`,
    ] as string[];

    if (!inProgress) {
      fieldsToValidate.push(`${stepKey}.${index}.endDate` as const);
    }

    const isValid = await trigger(fieldsToValidate as Path<ResumeData>[]);
    if (isValid) {
      setIsDropdownOpen(false);
    }
  };

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    inProgress,
    startDate,
    endDate,
    handleDropdown,
    handleModal,
  };
}
