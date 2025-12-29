import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  isGeneratingPDF: boolean;
}

const initialState: UIState = {
  isGeneratingPDF: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsGeneratingPDFAction: (state, action: PayloadAction<boolean>) => {
      state.isGeneratingPDF = action.payload;
    },
  },
});

export const { setIsGeneratingPDFAction } = uiSlice.actions;

export default uiSlice.reducer;
