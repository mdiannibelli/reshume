import type { ResumeDataSchema } from "@/models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "../storage/form-value.storage";
import { TEMPLATES } from "@/constants";

const getInitialState = (): ResumeDataSchema => {
  const savedState = loadStateFromLocalStorage();
  if (savedState) {
    return savedState;
  }

  return {
    personalInfo: {
      name: "John",
      lastName: "Doe",
      professionalTitle: "Software Engineer",
      email: "john.doe@example.com",
      phone: "+1 234 567 8900",
      country: "United States",
      city: "New York",
      website: "",
      linkedin: "",
      github: "",
      behance: "",
      professionalSummary: "",
    },
    education: [],
    experience: [],
    skills: [],
    languages: [],
    selectedCvLanguage: "",
    template: TEMPLATES[0] || {
      id: "",
      name: "",
      description: "",
      styles: {},
    },
    wantIcons: false,
    clearFieldsAfterGeneration: false,
  };
};

export const formValueSlice = createSlice({
  name: "form",
  initialState: getInitialState(),
  reducers: {
    updateFormValues: (
      state,
      action: PayloadAction<Partial<ResumeDataSchema>>
    ) => {
      const clonedPayload = JSON.parse(JSON.stringify(action.payload));
      return {
        ...state,
        ...clonedPayload,
      };
    },
    addPersonalInfoAction: (
      state,
      action: PayloadAction<ResumeDataSchema["personalInfo"]>
    ) => {
      state.personalInfo = { ...action.payload };
    },
    addEducationAction: (
      state,
      action: PayloadAction<ResumeDataSchema["education"]>
    ) => {
      state.education = JSON.parse(JSON.stringify(action.payload));
    },
    addExperienceAction: (
      state,
      action: PayloadAction<ResumeDataSchema["experience"]>
    ) => {
      state.experience = JSON.parse(JSON.stringify(action.payload));
    },
    addSkillAction: (
      state,
      action: PayloadAction<ResumeDataSchema["skills"]>
    ) => {
      state.skills = JSON.parse(JSON.stringify(action.payload));
    },
    addLanguageAction: (
      state,
      action: PayloadAction<ResumeDataSchema["languages"]>
    ) => {
      state.languages = JSON.parse(JSON.stringify(action.payload));
    },
    updateSelectedCvLanguageAction: (
      state,
      action: PayloadAction<ResumeDataSchema["selectedCvLanguage"]>
    ) => {
      state.selectedCvLanguage = action.payload;
    },
    updateWantIconsAction: (
      state,
      action: PayloadAction<ResumeDataSchema["wantIcons"]>
    ) => {
      state.wantIcons = action.payload;
    },
    updateClearFieldsAfterGenerationAction: (
      state,
      action: PayloadAction<ResumeDataSchema["clearFieldsAfterGeneration"]>
    ) => {
      state.clearFieldsAfterGeneration = action.payload;
    },
    updateTemplateAction: (
      state,
      action: PayloadAction<ResumeDataSchema["template"]>
    ) => {
      state.template = action.payload;
    },
    resetFormValuesAction: (state) => {
      state.selectedCvLanguage = "";
      state.wantIcons = false;
      state.clearFieldsAfterGeneration = false;
      state.personalInfo = {
        name: "",
        lastName: "",
        professionalTitle: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        professionalSummary: "",
        website: "",
        linkedin: "",
        github: "",
        behance: "",
      };
      state.template = {
        id: "",
        name: "",
        description: "",
        styles: {},
      };
      state.education = [];
      state.experience = [];
      state.skills = [];
      state.languages = [];
    },
  },
});

export const {
  updateFormValues,
  addPersonalInfoAction,
  addEducationAction,
  addExperienceAction,
  addSkillAction,
  addLanguageAction,
  resetFormValuesAction,
  updateSelectedCvLanguageAction,
  updateWantIconsAction,
  updateClearFieldsAfterGenerationAction,
  updateTemplateAction,
} = formValueSlice.actions;

export default formValueSlice.reducer;
