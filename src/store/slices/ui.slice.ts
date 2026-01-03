import type { UIState } from "@/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UIState = {
  isGeneratingPDF: false,
  isPDFModalOpen: false,
  isStickyBannerOpen: true,
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
    setIsStickyBannerOpenAction: (state, action: PayloadAction<boolean>) => {
      state.isStickyBannerOpen = action.payload;
    },
  },
});

export const {
  setIsGeneratingPDFAction,
  setIsPDFModalOpenAction,
  setIsStickyBannerOpenAction,
} = uiSlice.actions;

export default uiSlice.reducer;
