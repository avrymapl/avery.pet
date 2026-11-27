import Link from "next/link";
import type { Update } from "@/lib/updates";

export function UpdateLog({ entries }: { entries: Update[] }) {
  return (
    <ul className="ap-log">
      {entries.map((entry) => (
        <li key={`${entry.date}-${entry.text}`}>
          <time dateTime={entry.date}>{entry.date}</time>
          <span>
            {entry.text}
            {entry.link && (
              <>
                {" "}
                <Link href={entry.link.href}>{entry.link.label}</Link>
              </>
            )}
            {entry.after && ` ${entry.after}`}
          </span>
        </li>
      ))}
    </ul>
  );
}
