import type { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsGeneratingPDFAction } from "@/store/slices/ui.slice";

export function useUI() {
  const dispatch = useDispatch<AppDispatch>();
  const isGeneratingPDF = useSelector(
    (state: RootState) => state.ui.isGeneratingPDF
  );

  const setIsGeneratingPDF = (isGenerating: boolean) =>
    dispatch(setIsGeneratingPDFAction(isGenerating));

  return {
    isGeneratingPDF,
    setIsGeneratingPDF,
  };
}
