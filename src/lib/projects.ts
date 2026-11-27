// The catalogue of things i've made. Numbers go in the order i started the
// projects and are never reused or renumbered.

export type Shelf = "LING" | "TOOL" | "WIKI" | "GAME" | "MUSIC" | "ART" | "VIDEO";

export type Status = "ongoing" | "prototype" | "kennel" | "done";

export interface Project {
  slug: string;
  /** Catalogue number, shown as three digits. */
  no: number;
  shelf: Shelf;
  /** The project's own casing. */
  title: string;
  /** One line, lowercase, no full stop. */
  description: string;
  status: Status;
  href: string;
}

export const projects: Project[] = [
  {
    slug: "kawaba",
    no: 3,
    shelf: "LING",
    title: "Kawaba",
    description: "the language of parts – a minimalist oligosynthetic constructed language",
    status: "ongoing",
    href: "/kawaba",
  },
  {
    slug: "brainfuck",
    no: 7,
    shelf: "TOOL",
    title: "brainfuck IDE",
    description: "a time-travelling IDE for brainfuck – full execution trace with live tape preview",
    status: "kennel",
    href: "/brainfuck",
  },
];

export function catalogueNumber(project: Project): string {
  return `no. ${String(project.no).padStart(3, "0")} · ${project.shelf}`;
}
