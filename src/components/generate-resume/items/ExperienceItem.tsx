import type { Experience, ResumeData } from "@/interfaces";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { getErrorMessage } from "@/utils";
import { AdditionalAreasEnum, StepKeysEnum } from "@/enums";
import { cn } from "@/lib/utils";
import { validateEndDate } from "@/helpers";
import { useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { useStepperItem } from "@/hooks";
import { DatePicker } from "@/shared/components";

export function ExperienceItem({
  field,
  index,
  onRemove,
}: {
  field: Experience;
  index: number;
  onRemove: (index: number) => void;
}) {
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
    stepKey: AdditionalAreasEnum.EXPERIENCE,
    index,
    trigger,
  });

  useEffect(() => {
    if (inProgress) {
      setValue(`${AdditionalAreasEnum.EXPERIENCE}.${index}.endDate`, "");
      trigger(`${AdditionalAreasEnum.EXPERIENCE}.${index}.endDate`);
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
          {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.TITLE")} #{index + 1}
        </h4>
        {isDropdownOpen && (
          <button
            type="button"
            aria-label="Delete experience"
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
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.COMPANY")}{" "}
                <span className="text-(--primary)">*</span>
              </label>
              <input
                type="text"
                {...register(`experience.${index}.company`, {
                  required: t(
                    "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.ERRORS.REQUIRED",
                    {
                      field: t(
                        "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.COMPANY"
                      ),
                    }
                  ),
                })}
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.COMPANY_PLACEHOLDER"
                )}
              />
              {errors.experience?.[index]?.company && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
                  {getErrorMessage({
                    t,
                    error: errors.experience[index]?.company,
                    fieldKey: "COMPANY",
                    minLength: 3,
                    stepKey: StepKeysEnum.EXPERIENCE,
                  })}
                </p>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.POSITION")}{" "}
                <span className="text-(--primary)">*</span>
              </label>
              <input
                type="text"
                {...register(`experience.${index}.position`, {
                  required: t(
                    "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.ERRORS.REQUIRED",
                    {
                      field: t(
                        "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.POSITION"
                      ),
                    }
                  ),
                })}
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.POSITION_PLACEHOLDER"
                )}
              />
              {errors.experience?.[index]?.position && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
                  {getErrorMessage({
                    t,
                    error: errors.experience[index]?.position,
                    fieldKey: "POSITION",
                    minLength: 3,
                    stepKey: StepKeysEnum.EXPERIENCE,
                  })}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.START_DATE")}{" "}
                <span className="text-(--primary)">*</span>
              </label>
              <Controller
                name={`experience.${index}.startDate`}
                control={control}
                rules={{
                  required: t(
                    "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.ERRORS.REQUIRED",
                    {
                      field: t(
                        "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.START_DATE"
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
                      "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.START_DATE_PLACEHOLDER"
                    )}
                    error={!!errors.experience?.[index]?.startDate}
                  />
                )}
              />
              {errors.experience?.[index]?.startDate && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
                  {getErrorMessage({
                    t,
                    error: errors.experience[index]?.startDate,
                    fieldKey: "START_DATE",
                    stepKey: StepKeysEnum.EXPERIENCE,
                  })}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.END_DATE")}{" "}
                {!inProgress && <span className="text-(--primary)">*</span>}
              </label>
              <Controller
                name={`experience.${index}.endDate`}
                control={control}
                rules={{
                  validate: (value: string | undefined) =>
                    validateEndDate({
                      value: value as string,
                      inProgress,
                      stepKey: StepKeysEnum.EXPERIENCE,
                      t,
                    }),
                }}
                render={({ field }) => (
                  <DatePicker
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder={t(
                      "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.END_DATE_PLACEHOLDER"
                    )}
                    disabled={inProgress}
                    error={!!errors.experience?.[index]?.endDate}
                  />
                )}
              />
              {errors.experience?.[index]?.endDate && (
                <p className="mt-3 mb-6 ml-1 text-sm text-(--primary)">
                  {getErrorMessage({
                    t,
                    error: errors.experience[index]?.endDate,
                    fieldKey: "END_DATE",
                    stepKey: StepKeysEnum.EXPERIENCE,
                  })}
                </p>
              )}
            </div>

            <div className="md:col-span-2 flex items-center mb-8 p-1">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  {...register(`experience.${index}.inProgress`)}
                  className="sr-only peer"
                />
                <div className="relative w-4 h-4 bg-(--background-secondary) border-2 border-(--border) rounded transition-all duration-200 peer-checked:bg-(--primary) peer-checked:border-(--primary) peer-focus:ring-1 peer-focus:ring-(--primary)/50 peer-focus:ring-offset-2 peer-focus:ring-offset-(--background-secondary) group-hover:border-(--border)/40 peer-checked:group-hover:border-(--primary)">
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
                  {t(
                    "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.IN_PROGRESS"
                  )}
                </span>
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-(--text-secondary) mb-2">
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.DESCRIPTION")}
              </label>
              <textarea
                {...register(`experience.${index}.description`)}
                rows={4}
                className="w-full px-4 py-3 bg-(--background-secondary) border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent transition-all resize-none"
                placeholder={t(
                  "GENERATE_RESUME.FORM_STEPS.EXPERIENCE.FIELDS.DESCRIPTION_PLACEHOLDER"
                )}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="button"
                aria-label="Save experience"
                onClick={handleModal}
                className="w-full px-4 py-3 bg-(--primary) rounded-lg text-(--text-primary) focus:outline-none duration-500 hover:bg-(--primary-hover) cursor-pointer focus:border-transparent transition-all"
              >
                {t("GENERATE_RESUME.FORM_STEPS.EXPERIENCE.BUTTONS.SAVE")}
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="absolute top-0 right-0 p-4">
            <button
              type="button"
              aria-label="Open experience"
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
