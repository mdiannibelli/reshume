import type { SelectedTemplate } from "@/interfaces";
import { Classic, Empty, Modern } from "@/data/templates";

export const TEMPLATES: SelectedTemplate[] = [
  {
    id: "1",
    name: "TEMPLATES.CLASSIC.NAME",
    description: "TEMPLATES.CLASSIC.DESCRIPTION",
    styles: Classic,
    decorator: {
      label: "DECORATORS.FREE",
      color: "bg-(--success)",
    },
    tag: "classic",
  },
  {
    id: "2",
    name: "TEMPLATES.MODERN.NAME",
    description: "TEMPLATES.MODERN.DESCRIPTION",
    styles: Modern,
    decorator: {
      label: "DECORATORS.FREE",
      color: "bg-(--success)",
    },
    tag: "modern",
  },
  {
    id: "3",
    name: "TEMPLATES.EXECUTIVE.NAME",
    description: "TEMPLATES.EXECUTIVE.DESCRIPTION",
    styles: Empty,
    decorator: {
      label: "DECORATORS.UNAVAILABLE",
      color: "bg-(--error)",
    },
    tag: "executive",
  },
  {
    id: "4",
    name: "TEMPLATES.IMPACT.NAME",
    description: "TEMPLATES.IMPACT.DESCRIPTION",
    styles: Empty,
    decorator: {
      label: "DECORATORS.UNAVAILABLE",
      color: "bg-(--error)",
    },
    tag: "impact",
  },
];
