// The update log: what changed, newest first, in my own words. The footer's
// "last fetched" date for each part of the site comes from here too, so adding
// an entry is all it takes to keep that date honest.

export type Section = "kawaba" | "brainfuck";

export interface Update {
  /** YYYY-MM-DD */
  date: string;
  /** Which subsite it touched. Leave it out for changes to the whole site. */
  section?: Section;
  text: string;
  /** Linked words, appended after the text. */
  link?: { label: string; href: string };
  /** Text after the link. */
  after?: string;
}

export const updates: Update[] = [
  {
    date: "2026-11-27",
    text: "redesigned the whole site around index cards and clover green",
  },
  {
    date: "2026-08-31",
    section: "kawaba",
    text: "new Kawaba page:",
    link: { label: "clauses", href: "/kawaba/clauses" },
  },
  {
    date: "2026-08-26",
    section: "brainfuck",
    text: "made a",
    link: { label: "brainfuck IDE", href: "/brainfuck" },
    after: "that can step backwards through time",
  },
  {
    date: "2026-08-25",
    section: "kawaba",
    text: "new Kawaba page:",
    link: { label: "word classes", href: "/kawaba/word-classes" },
  },
  {
    date: "2026-08-20",
    section: "kawaba",
    text: "rewrote compounding and lexicalisation in",
    link: { label: "morphology", href: "/kawaba/morphology" },
  },
  {
    date: "2026-08-11",
    section: "kawaba",
    text: "restructured the",
    link: { label: "Kawaba grammar", href: "/kawaba" },
    after: "into separate pages",
  },
];

/** The newest date that touched a section (or anything, with no section). */
export function lastFetched(section?: Section): string {
  const relevant = section
    ? updates.filter((update) => !update.section || update.section === section)
    : updates;
  return relevant.reduce((latest, update) => (update.date > latest ? update.date : latest), "");
}
