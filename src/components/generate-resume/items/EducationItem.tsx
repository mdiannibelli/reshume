import type { EducationItem, ResumeData } from "@/interfaces";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { getErrorMessage } from "@/utils";
import { AdditionalAreasEnum, StepKeysEnum } from "@/enums";
import { cn } from "@/lib/utils";
import { validateEndDate } from "@/helpers";
import { useStepperItem } from "@/hooks";

export function EducationItem({ field, index, onRemove }: EducationItem) {
    const {
      register,
      control,
      formState: { errors },
      setValue,
      trigger,
    } = useFormContext<ResumeData>();
    
    const { t } = useTranslation();
    const { inProgress, startDate, endDate, handleDropdown, handleModal, isDropdownOpen } = useStepperItem({ control, stepKey: AdditionalAreasEnum.EDUCATION, index, trigger });
    
    useEffect(() => {
      if (inProgress) {
        setValue(`${AdditionalAreasEnum.EDUCATION}.${index}.endDate`, "");
        trigger(`${AdditionalAreasEnum.EDUCATION}.${index}.endDate`);
      }
    }, [inProgress, index, setValue, trigger]);
  
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
                    <p className="mt-3 mb-6 ml-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.institution,
                        fieldKey: "INSTITUTION",
                        minLength: 3,
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
                    <p className="mt-3 mb-6 ml-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.title,
                        fieldKey: "TITLE",
                        minLength: 3,
                        stepKey: StepKeysEnum.EDUCATION,
                        })}
                    </p>
                    )}
                </div>
    
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE")} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <input
                        type="month"
                        {...register(`education.${index}.startDate`, {
                            required: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED", {
                            field: t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE"),
                            }),
                        })}
                        className={cn(
                            "w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer",
                            !startDate && "[&::-webkit-datetime-edit-text]:opacity-0 [&::-webkit-datetime-edit-month-field]:opacity-0 [&::-webkit-datetime-edit-day-field]:opacity-0 [&::-webkit-datetime-edit-year-field]:opacity-0"
                        )}
                        />
                        {!startDate && (
                            <>
                            <div className="absolute inset-0 flex items-center px-4 pointer-events-none z-10">
                                <span className="text-white/25 text-sm">
                                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE_PLACEHOLDER")}
                                </span>
                            </div>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                                <svg className="w-5 h-5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </>
                        )}
                    </div>
                    {errors.education?.[index]?.startDate && (
                    <p className="mt-3 mb-6 ml-1 text-sm text-red-500">
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
                    <div className="relative">
                        <input
                        type="month"
                        {...register(`education.${index}.endDate`, {
                            validate: (value: string | undefined) => validateEndDate({
                              value: value as string,
                              inProgress,
                              stepKey: StepKeysEnum.EDUCATION,
                              t,
                            }),
                        })}
                        disabled={inProgress}
                        className={cn(
                            "w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer",
                            !endDate && "[&::-webkit-datetime-edit-text]:opacity-0 [&::-webkit-datetime-edit-month-field]:opacity-0 [&::-webkit-datetime-edit-day-field]:opacity-0 [&::-webkit-datetime-edit-year-field]:opacity-0"
                        )}
                        />
                        {!endDate && !inProgress && (
                           <>
                            <div className="absolute inset-0 flex items-center px-4 pointer-events-none z-10">
                                <span className="text-white/25 text-sm">
                                    {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.END_DATE_PLACEHOLDER")}
                                </span>
                            </div>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-20">
                             <svg className="w-5 h-5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                             </svg>
                         </div>
                         </>
                        )}
                    </div>
                    {errors.education?.[index]?.endDate && (
                    <p className="mt-3 mb-6 ml-1 text-sm text-red-500">
                        {getErrorMessage({
                        t,
                        error: errors.education[index]?.endDate,
                        fieldKey: "END_DATE",
                        stepKey: StepKeysEnum.EDUCATION,
                        })}
                    </p>
                    )}
                </div>
    
                <div className="md:col-span-2 flex items-center mb-8 p-1">
                    <label className="flex items-center cursor-pointer group">
                        <input
                        type="checkbox"
                        {...register(`education.${index}.inProgress`)}
                        className="sr-only peer"
                        />
                        <div className="relative w-4 h-4 bg-black border-2 border-white/20 rounded transition-all duration-200 peer-checked:bg-red-500 peer-checked:border-red-500 peer-focus:ring-1 peer-focus:ring-red-500/50 peer-focus:ring-offset-2 peer-focus:ring-offset-black group-hover:border-white/40 peer-checked:group-hover:border-red-400">
                            <svg 
                                className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.IN_PROGRESS")}
                        </span>
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