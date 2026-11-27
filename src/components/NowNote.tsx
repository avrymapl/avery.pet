import type { Now } from "@/lib/now";

export function NowNote({ note }: { note: Now }) {
  return (
    <div className="ap-now">
      <span className="ap-now__label">now</span>
      {note.text}
      <span className="ap-now__date">
        updated <time dateTime={note.updated}>{note.updated}</time>
      </span>
    </div>
  );
}
