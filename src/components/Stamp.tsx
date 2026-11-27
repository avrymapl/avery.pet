import type { Status } from "@/lib/projects";

const STAMPS: Record<Status, { label: string; className: string }> = {
  ongoing: { label: "ongoing", className: "ap-stamp" },
  prototype: { label: "prototype", className: "ap-stamp is-prototype" },
  kennel: { label: "in the kennel", className: "ap-stamp is-kennel" },
  done: { label: "done", className: "ap-stamp is-done" },
};

// Inside .ap-grid the tilt is set per card position; elsewhere pass one
// between -3 and 3 degrees.
export function Stamp({ status, tilt }: { status: Status; tilt?: number }) {
  const { label, className } = STAMPS[status];
  return (
    <span
      className={className}
      style={tilt === undefined ? undefined : ({ "--tilt": `${tilt}deg` } as React.CSSProperties)}
    >
      {label}
    </span>
  );
}
