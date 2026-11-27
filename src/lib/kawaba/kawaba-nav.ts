import type { NavItem } from "@/components/SiteNav";

// The overview lives at /kawaba, which the "kawaba" half of the wordmark
// links to, so the nav keeps to five items.
export const kawabaNav: NavItem[] = [
  { label: "dictionary", href: "/kawaba/dictionary" },
  { label: "phonology", href: "/kawaba/phonology" },
  { label: "morphology", href: "/kawaba/morphology" },
  { label: "word classes", href: "/kawaba/word-classes" },
  { label: "clauses", href: "/kawaba/clauses" },
];
