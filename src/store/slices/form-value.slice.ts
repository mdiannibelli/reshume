import type { ResumeDataSchema } from "@/models";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loadStateFromLocalStorage } from "../storage/form-value.storage";

const getInitialState = (): ResumeDataSchema => {
  const savedState = loadStateFromLocalStorage();
  if (savedState) {
    return JSON.parse(JSON.stringify(savedState));
  }

  return {
    personalInfo: {
      name: "",
      lastName: "",
      professionalTitle: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      website: "",
      linkedin: "",
      github: "",
      behance: "",
      professionalSummary: "",
    },
    education: [],
    experience: [],
    skills: [],
    language: "",
    wantIcons: false,
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
    addPersonalInfo: (
      state,
      action: PayloadAction<ResumeDataSchema["personalInfo"]>
    ) => {
      state.personalInfo = { ...action.payload };
    },
    addEducation: (
      state,
      action: PayloadAction<ResumeDataSchema["education"]>
    ) => {
      state.education = JSON.parse(JSON.stringify(action.payload));
    },
    addExperience: (
      state,
      action: PayloadAction<ResumeDataSchema["experience"]>
    ) => {
      state.experience = JSON.parse(JSON.stringify(action.payload));
    },
    addSkill: (state, action: PayloadAction<ResumeDataSchema["skills"]>) => {
      state.skills = JSON.parse(JSON.stringify(action.payload));
    },
    updateLanguage: (
      state,
      action: PayloadAction<ResumeDataSchema["language"]>
    ) => {
      state.language = action.payload;
    },
    updateWantIcons: (
      state,
      action: PayloadAction<ResumeDataSchema["wantIcons"]>
    ) => {
      state.wantIcons = action.payload;
    },
    resetFormValues: () => getInitialState(),
  },
});

export const {
  updateFormValues,
  addPersonalInfo,
  addEducation,
  addExperience,
  addSkill,
  resetFormValues,
  updateLanguage,
  updateWantIcons,
} = formValueSlice.actions;

export default formValueSlice.reducer;
