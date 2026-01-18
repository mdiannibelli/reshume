import type { ResumeData } from "@/interfaces";

export function hasValidTemplateStyles(data: ResumeData): boolean {
    return !!(
        data?.template?.styles &&
        Object.keys(data.template.styles).length > 0 &&
        data.template.styles.page
    );
}