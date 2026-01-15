import type { ResumeDataSchema } from "@/models/resume.models";
import { TEMPLATES } from "@/constants/templates.constant";

export const loadStateFromLocalStorage = (): ResumeDataSchema | undefined => {
  try {
    const serializedState = localStorage.getItem("resumeFormData");
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState) as ResumeDataSchema;

    // Reconstruct the template.styles from the template id to avoid circular references
    if (parsedState.template?.id) {
      const templateFromConstants = TEMPLATES.find(
        (t) => t.id === parsedState.template.id
      );
      if (templateFromConstants) {
        parsedState.template = {
          ...parsedState.template,
          styles: templateFromConstants.styles,
        };
      }
    }

    return parsedState;
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

export const saveStateToLocalStorage = (state: ResumeDataSchema): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("resumeFormData", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};
