import type { EducationItem, ResumeData } from "@/interfaces";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useFormContext, useWatch, type Path } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { getErrorMessage } from "@/utils";
import { StepKeysEnum } from "@/enums";
import { cn } from "@/lib/utils";

export function EducationItem({ field, index, onRemove }: EducationItem) {
    const {
      register,
      control,
      formState: { errors },
      setValue,
      trigger,
    } = useFormContext<ResumeData>();
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    
    const { t } = useTranslation();
  
    const inProgress = useWatch({
      control,
      name: `education.${index}.inProgress`,
    });

    useEffect(() => {
      if (inProgress) {
        setValue(`education.${index}.endDate`, "");
        trigger(`education.${index}.endDate`);
      }
    }, [inProgress, index, setValue, trigger]);

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleModal = async () => {
        const fieldsToValidate = [
          `education.${index}.institution`,
          `education.${index}.title`,
          `education.${index}.startDate`,
        ] as string[];

        if (!inProgress) {
            fieldsToValidate.push(`education.${index}.endDate` as const);
        }

        const isValid = await trigger(fieldsToValidate as Path<ResumeData>[]);
        if (isValid) {
          setIsDropdownOpen(false);
        }
    };

    const validateEndDate = (value: string) => {
        if (!inProgress) {
            if (!value || value.trim().length === 0) {
                return t("GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED", {
                    field: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.END_DATE"),
                });
            }
        }
        return true;
    };
  
    return (
      <motion.div
        key={field.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        onClick={!isDropdownOpen ? handleDropdown : undefined}
        className={cn("p-6 flex-col border rounded-lg space-y-4 relative cursor-pointer bg-black border-white/5", !isDropdownOpen ? "hover:bg-red-600 duration-500 transition-colors" : "")}
      >
        <div className="flex justify-between items-center" onClick={handleDropdown}>
          <h4 className="text-md font-semibold text-white">{t("GENERATE_RESUME.FORM_STEPS.EDUCATION.TITLE")} #{index + 1}</h4>
            {isDropdownOpen && (
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="text-red-500 hover:text-red-400 text-sm transition-colors cursor-pointer"
              >
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.BUTTONS.DELETE")}
              </button>
            )}
        </div>
  
        <div className="grid gap-4">
          {
            isDropdownOpen ? (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-4 mt-8"
            >
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.INSTITUTION")} <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    {...register(`education.${index}.institution`, {
                        required: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED", {
                        field: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.INSTITUTION"),
                        }),
                    })}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder={t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.INSTITUTION_PLACEHOLDER")}
                    />
                    {errors.education?.[index]?.institution && (
                    <p className="mt-3 ml-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.institution,
                        fieldKey: "INSTITUTION",
                        stepKey: StepKeysEnum.EDUCATION,
                        })}
                    </p>
                    )}  
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.TITLE")} <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    {...register(`education.${index}.title`, {
                        required: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED", {
                        field: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.TITLE"),
                        }),
                    })}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder={t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.TITLE_PLACEHOLDER")}
                    />
                    {errors.education?.[index]?.title && (
                    <p className="mt-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.title,
                        fieldKey: "TITLE",
                        stepKey: StepKeysEnum.EDUCATION,
                        })}
                    </p>
                    )}
                </div>
    
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE")} <span className="text-red-500">*</span>
                    </label>
                    <input
                    type="month"
                    {...register(`education.${index}.startDate`, {
                        required: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED", {
                        field: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE"),
                        }),
                    })}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                    {errors.education?.[index]?.startDate && (
                    <p className="mt-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.startDate,
                        fieldKey: "START_DATE",
                        stepKey: StepKeysEnum.EDUCATION,
                        })}
                    </p>
                    )}
                </div>
    
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.END_DATE")} {" "}
                    {!inProgress && <span className="text-red-500">*</span>}
                    </label>
                    <input
                    type="month"
                    {...register(`education.${index}.endDate`, {
                        validate: (value: string | undefined) => validateEndDate(value as string),
                    })}
                    disabled={inProgress}
                    className={cn(
                        "w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                        inProgress && "bg-white/5"
                    )}
                    />
                    {errors.education?.[index]?.endDate && (
                    <p className="mt-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.endDate,
                        fieldKey: "END_DATE",
                        stepKey: StepKeysEnum.EDUCATION,
                        })}
                    </p>
                    )}
                </div>
    
                <div className="md:col-span-2 flex items-center">
                    <input
                    type="checkbox"
                    {...register(`education.${index}.inProgress`)}
                    className="w-4 h-4 text-red-500 bg-black border-white/10 rounded focus:ring-red-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-300">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.IN_PROGRESS")}
                    </label>
                </div>
    
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.DESCRIPTION")}
                    </label>
                    <textarea
                    {...register(`education.${index}.description`)}
                    rows={3}
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder={t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.DESCRIPTION_PLACEHOLDER")}
                    />
                </div>

                <div className="md:col-span-2">
                    <button type="button" onClick={handleModal} className="w-full px-4 py-3 bg-red-600 rounded-lg text-white placeholder-white/25 focus:outline-none duration-500 hover:bg-red-500 cursor-pointer focus:border-transparent transition-all">
                        {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.BUTTONS.SAVE")}
                    </button>
                </div>
            </motion.div>
            ) : 
            (
            <div className="absolute top-0 right-0 p-4">
                <button type="button" onClick={handleDropdown} className="w-full px-4 text-white">
                <RiArrowDropDownLine className="text-5xl" />
                </button>
            </div>
            )
          }
        </div>
      </motion.div>
    );
  }