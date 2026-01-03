import type { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsGeneratingPDFAction,
  setIsPDFModalOpenAction,
  setIsStickyBannerOpenAction,
} from "@/store/slices/ui.slice";

export function useUI() {
  const dispatch = useDispatch<AppDispatch>();
  const isGeneratingPDF = useSelector(
    (state: RootState) => state.ui.isGeneratingPDF
  );
  const isPDFModalOpen = useSelector(
    (state: RootState) => state.ui.isPDFModalOpen
  );

  const isStickyBannerOpen = useSelector(
    (state: RootState) => state.ui.isStickyBannerOpen
  );

  const setIsGeneratingPDF = (isGenerating: boolean) =>
    dispatch(setIsGeneratingPDFAction(isGenerating));

  const setIsPDFModalOpen = (isPDFModalOpen: boolean) =>
    dispatch(setIsPDFModalOpenAction(isPDFModalOpen));

  const setIsStickyBannerOpen = (isStickyBannerOpen: boolean) =>
    dispatch(setIsStickyBannerOpenAction(isStickyBannerOpen));

  return {
    isGeneratingPDF,
    isPDFModalOpen,
    isStickyBannerOpen,
    setIsGeneratingPDF,
    setIsPDFModalOpen,
    setIsStickyBannerOpen,
  };
}
