import { body, f1, f2, f3, type CollieRun } from "@/lib/collie";

function Runs({ runs }: { runs: readonly CollieRun[] }) {
  return runs.map(([colour, x, y, width]) => (
    <rect key={`${x}-${y}`} className={`px-${colour}`} x={x} y={y} width={width} height={1} />
  ));
}

// The site's one mascot. It sits still until it's hovered, then wags its tail
// (pure css: frames 1 → 2 → 3 → 2 at 120ms each). One per page at most.
export function PixelCollie() {
  return (
    <span className="ap-collie" title="woof">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <g>
          <Runs runs={body} />
        </g>
        <g className="ap-collie__f1">
          <Runs runs={f1} />
        </g>
        <g className="ap-collie__f2">
          <Runs runs={f2} />
        </g>
        <g className="ap-collie__f3">
          <Runs runs={f3} />
        </g>
      </svg>
    </span>
  );
}
