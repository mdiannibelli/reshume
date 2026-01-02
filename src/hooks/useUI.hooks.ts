import type { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsGeneratingPDFAction,
  setIsPDFModalOpenAction,
} from "@/store/slices/ui.slice";

export function useUI() {
  const dispatch = useDispatch<AppDispatch>();
  const isGeneratingPDF = useSelector(
    (state: RootState) => state.ui.isGeneratingPDF
  );
  const isPDFModalOpen = useSelector(
    (state: RootState) => state.ui.isPDFModalOpen
  );

  const setIsGeneratingPDF = (isGenerating: boolean) =>
    dispatch(setIsGeneratingPDFAction(isGenerating));

  const setIsPDFModalOpen = (isPDFModalOpen: boolean) =>
    dispatch(setIsPDFModalOpenAction(isPDFModalOpen));

  return {
    isGeneratingPDF,
    isPDFModalOpen,
    setIsGeneratingPDF,
    setIsPDFModalOpen,
  };
}
