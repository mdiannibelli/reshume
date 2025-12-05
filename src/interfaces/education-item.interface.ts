export interface EducationItem {
  field: { id: string };
  index: number;
  onRemove: (index: number) => void;
}
