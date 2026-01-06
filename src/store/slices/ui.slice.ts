import type { UIState } from "@/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UIState = {
  isGeneratingPDF: false,
  isPDFModalOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsGeneratingPDFAction: (state, action: PayloadAction<boolean>) => {
      state.isGeneratingPDF = action.payload;
    },
    setIsPDFModalOpenAction: (state, action: PayloadAction<boolean>) => {
      state.isPDFModalOpen = action.payload;
    },
  },
});

export const { setIsGeneratingPDFAction, setIsPDFModalOpenAction } =
  uiSlice.actions;

export default uiSlice.reducer;
