import type { ResumeData } from "./resume-form.interface";
import type { ReactNode } from "react";

export interface PDFPreviewProps {
    data: ResumeData;
    className?: string;
}

export interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
    resetKey?: string;
}

export interface ErrorBoundaryState {
    hasError: boolean;
}

export interface PDFPreviewModalProps {
    data: ResumeData;
    isOpen: boolean;
    onClose: () => void;
}