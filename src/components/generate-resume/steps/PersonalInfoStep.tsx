import { useFormContext } from "react-hook-form";
import type { ResumeData } from "@/interfaces";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { getErrorMessage } from "@/utils";

export function PersonalInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ResumeData>();

  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.NAME")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.name")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.NAME_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.name && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.name,
                fieldKey: "NAME",
                minLength: 3,
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.LAST_NAME")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.lastName")}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.LAST_NAME_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.lastName && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.lastName,
                fieldKey: "LAST_NAME",
                minLength: 3,
              })}
            </p>
          )}
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-3">
            {t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.PROFESSIONAL_TITLE"
            )}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.professionalTitle")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.PROFESSIONAL_TITLE_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.professionalTitle && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.professionalTitle,
                fieldKey: "PROFESSIONAL_TITLE",
                minLength: 3,
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.EMAIL")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("personalInfo.email")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.EMAIL_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.email && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.email,
                fieldKey: "EMAIL",
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.PHONE")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("personalInfo.phone")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.PHONE_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.phone && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.phone,
                fieldKey: "PHONE",
                minLength: 9,
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.COUNTRY")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.country")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.COUNTRY_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.country && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.country,
                fieldKey: "COUNTRY",
                minLength: 3,
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.CITY")}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("personalInfo.city")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.CITY_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.city && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.city,
                fieldKey: "CITY",
                minLength: 3,
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.WEBSITE")}{" "}
          </label>
          <input
            type="url"
            {...register("personalInfo.website")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.WEBSITE_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.website && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.website,
                fieldKey: "WEBSITE",
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.LINKEDIN")}{" "}
          </label>
          <input
            type="url"
            {...register("personalInfo.linkedin")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.LINKEDIN_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.linkedin && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.linkedin,
                fieldKey: "LINKEDIN",
              })}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t("GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.GITHUB")}{" "}
          </label>
          <input
            type="url"
            {...register("personalInfo.github")}
            className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all"
            placeholder={t(
              "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.GITHUB_PLACEHOLDER"
            )}
          />
          {errors.personalInfo?.github && (
            <p className="mt-3 ml-1 text-sm text-red-500">
              {getErrorMessage({
                t,
                error: errors.personalInfo.github,
                fieldKey: "GITHUB",
              })}
            </p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t(
            "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.PROFESSIONAL_SUMMARY"
          )}{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("personalInfo.professionalSummary")}
          rows={6}
          className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent transition-all resize-none"
          placeholder={t(
            "GENERATE_RESUME.FORM_STEPS.PERSONAL_INFO.FIELDS.PROFESSIONAL_SUMMARY_PLACEHOLDER"
          )}
        />
        {errors.personalInfo?.professionalSummary && (
          <p className="mt-3 ml-1 text-sm text-red-500">
            {getErrorMessage({
              t,
              error: errors.personalInfo.professionalSummary,
              fieldKey: "PROFESSIONAL_SUMMARY",
              minLength: 50,
            })}
          </p>
        )}
      </div>
    </motion.div>
  );
}
