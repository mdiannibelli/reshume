import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store/form-store";
import {
  updateFormValues,
  resetFormValuesAction,
  addPersonalInfoAction,
  addEducationAction,
  addExperienceAction,
  addSkillAction,
  addLanguageAction,
  updateSelectedCvLanguageAction,
  updateWantIconsAction,
  updateClearFieldsAfterGenerationAction,
} from "@/store/slices/form-value.slice";
import type { ResumeDataSchema } from "@/models/resume.models";

export function useFormStore() {
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.form);

  return {
    formData,
    selectedCvLanguage: formData.selectedCvLanguage,
    updateFormValues: (data: ResumeDataSchema) =>
      dispatch(updateFormValues(data)),
    updatePersonalInfo: (data: ResumeDataSchema["personalInfo"]) =>
      dispatch(addPersonalInfoAction(data)),
    updateEducation: (data: ResumeDataSchema["education"]) =>
      dispatch(addEducationAction(data)),
    updateExperience: (data: ResumeDataSchema["experience"]) =>
      dispatch(addExperienceAction(data)),
    updateSkills: (data: ResumeDataSchema["skills"]) =>
      dispatch(addSkillAction(data)),
    updateLanguages: (data: ResumeDataSchema["languages"]) =>
      dispatch(addLanguageAction(data)),
    updateSelectedCvLanguage: (data: ResumeDataSchema["selectedCvLanguage"]) =>
      dispatch(updateSelectedCvLanguageAction(data)),
    updateWantIcons: (data: ResumeDataSchema["wantIcons"]) =>
      dispatch(updateWantIconsAction(data)),
    updateClearFieldsAfterGeneration: (
      data: ResumeDataSchema["clearFieldsAfterGeneration"]
    ) => dispatch(updateClearFieldsAfterGenerationAction(data)),
    resetForm: () => dispatch(resetFormValuesAction()),
  };
}
