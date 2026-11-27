import { SitePage } from "@/components/SitePage";
import { lastFetched } from "@/lib/updates";

export default function BrainfuckLayout({ children }: { children: React.ReactNode }) {
  return (
    <SitePage
      subsite={{ name: "brainfuck", href: "/brainfuck" }}
      tagline="a time-travelling IDE with a live tape preview"
      lastFetched={lastFetched("brainfuck")}
    >
      {children}
    </SitePage>
  );
}
