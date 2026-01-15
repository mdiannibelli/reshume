export interface DecoratorType {
  label: string;
  color: string;
}

export interface SelectorOption {
  id: string;
  name: string;
  description?: string;
  decorator?: DecoratorType;
}

export interface Selector<T extends SelectorOption> {
  options: T[];
  selectedOption: T | null;
  onSelect: (option: T | null) => void;
  placeholder: string;
  error?: boolean;
  onBlur?: () => void;
  className?: string;
}
