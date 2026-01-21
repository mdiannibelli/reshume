import type { EducationItem, ResumeData } from "@/interfaces";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { getErrorMessage } from "@/utils";
import { AdditionalAreasEnum, StepKeysEnum } from "@/enums";
import { cn } from "@/lib/utils";
import { validateEndDate } from "@/helpers";
import { useStepperItem } from "@/hooks";
import { VscClose } from "react-icons/vsc";
import { DatePicker } from "@/shared/components";

export function EducationItem({ field, index, onRemove }: EducationItem) {
  const {
    register,
    control,
    formState: { errors },
    setValue,
    trigger,
  } = useFormContext<ResumeData>();

  const { t } = useTranslation();
  const {
    inProgress,
    handleDropdown,
    handleModal,
    isDropdownOpen,
  } = useStepperItem({
    control,
    stepKey: AdditionalAreasEnum.EDUCATION,
    index,
    trigger,
  });

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
      className={cn(
        "p-6 flex-col border rounded-lg space-y-4 relative cursor-pointer bg-(--background) border-(--border)",
        !isDropdownOpen
          ? "hover:bg-(--primary)/25 duration-500 transition-colors"
          : ""
      )}
    >
      <div
        className="flex justify-between items-center"
        onClick={handleDropdown}
      >
        <h4 className="text-md font-semibold text-(--text-primary)">
          {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.TITLE")} #{index + 1}
        </h4>
        {isDropdownOpen && (
          <button
            type="button"
            aria-label="Delete education"
            onClick={() => onRemove(index)}
            className="text-(--primary) hover:text-(--primary-hover) transition-colors cursor-pointer bg-(--primary) rounded-full p-2"
          >
            <VscClose className="text-xl text-(--text-primary)" />
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {isDropdownOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 bg-(--background-secondary) border border-(--border) rounded-lg space-y-4 mt-8"
          >
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.INSTITUTION")}{" "}
                <span className="text-(--primary)">*</span>
              </label>
              <input
                type="text"
                {...register(`education.${index}.institution`, {
                  required: t(
                    "GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED",
                    {
                      field: t(
                        "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.INSTITUTION"
                      ),
                    }
                  ),
                })}
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.INSTITUTION_PLACEHOLDER"
                )}
              />
              {errors.education?.[index]?.institution && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
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
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.TITLE")}{" "}
                <span className="text-(--primary)">*</span>
              </label>
              <input
                type="text"
                {...register(`education.${index}.title`, {
                  required: t(
                    "GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED",
                    {
                      field: t(
                        "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.TITLE"
                      ),
                    }
                  ),
                })}
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.TITLE_PLACEHOLDER"
                )}
              />
              {errors.education?.[index]?.title && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
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
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE")}{" "}
                <span className="text-(--primary)">*</span>
              </label>
              <Controller
                name={`education.${index}.startDate`}
                control={control}
                rules={{
                  required: t(
                    "GENERATE_RESUME.FORM_STEPS.EDUCATION.ERRORS.REQUIRED",
                    {
                      field: t(
                        "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE"
                      ),
                    }
                  ),
                }}
                render={({ field }) => (
                  <DatePicker
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder={t(
                      "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.START_DATE_PLACEHOLDER"
                    )}
                    error={!!errors.education?.[index]?.startDate}
                  />
                )}
              />
              {errors.education?.[index]?.startDate && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
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
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.END_DATE")}{" "}
                {!inProgress && <span className="text-(--primary)">*</span>}
              </label>
              <Controller
                name={`education.${index}.endDate`}
                control={control}
                rules={{
                  validate: (value: string | undefined) =>
                    validateEndDate({
                      value: value as string,
                      inProgress,
                      stepKey: StepKeysEnum.EDUCATION,
                      t,
                    }),
                }}
                render={({ field }) => (
                  <DatePicker
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder={t(
                      "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.END_DATE_PLACEHOLDER"
                    )}
                    disabled={inProgress}
                    error={!!errors.education?.[index]?.endDate}
                  />
                )}
              />
              {errors.education?.[index]?.endDate && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
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
                <div className="relative w-4 h-4 bg-(--background-secondary) border-2 border-(--border) rounded transition-all duration-200 peer-checked:bg-(--primary) peer-checked:border-(--primary) peer-focus:ring-1 peer-focus:ring-(--primary)/50 peer-focus:ring-offset-2 peer-focus:ring-offset-(--background-secondary) group-hover:border-(--border)/40 peer-checked:group-hover:border-(--primary)-400">
                  <svg
                    className="absolute inset-0 w-full h-full text-(--text-primary) opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-medium text-(--text-secondary) group-hover:text-(--text-primary) transition-colors">
                  {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.IN_PROGRESS")}
                </span>
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.DESCRIPTION")}
              </label>
              <textarea
                {...register(`education.${index}.description`)}
                rows={3}
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all resize-none"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.EDUCATION.FIELDS.DESCRIPTION_PLACEHOLDER"
                )}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="button"
                aria-label="Save education"
                onClick={handleModal}
                className="font-medium w-full px-4 py-3 bg-(--primary) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none duration-500 hover:bg-(--primary-hover) cursor-pointer focus:border-transparent transition-all"
              >
                {t("GENERATE_RESUME.FORM_STEPS.EDUCATION.BUTTONS.SAVE")}
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="absolute top-0 right-0 p-4">
            <button
              type="button"
              aria-label="Open education"
              onClick={handleDropdown}
              className="w-full px-4 text-(--text-primary)"
            >
              <RiArrowDropDownLine className="text-5xl" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
