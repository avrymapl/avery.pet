// What i'm up to, and when i wrote it. If this gets more than a couple of
// months old, update it or set it to null: a stale now note is worse than none.

export interface Now {
  text: string;
  /** YYYY-MM-DD */
  updated: string;
}

export const now: Now | null = {
  text: "redesigning my website and building nuclear reactors in minecraft",
  updated: "2026-11-27",
};
