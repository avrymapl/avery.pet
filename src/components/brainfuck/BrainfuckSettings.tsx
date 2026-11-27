"use client";

import { useState } from "react";
import { useBrainfuckSettings, clampTapeLength } from "@/lib/brainfuck/useSettings";
import { MAX_TAPE_LENGTH, type CellWidth } from "@/lib/brainfuck/machine";

export function BrainfuckSettings() {
  const { settings, update } = useBrainfuckSettings();
  // While the field is being edited, its own text wins so partially typed
  // numbers aren't clamped out from under the cursor; blurring drops the
  // override and shows the committed setting again.
  const [tapeLengthDraft, setTapeLengthDraft] = useState<string | null>(null);
  const tapeLengthText = tapeLengthDraft ?? String(settings.tapeLength);

  const commitTapeLength = (text: string) => {
    setTapeLengthDraft(text);
    const parsed = Number(text);
    if (text !== "" && Number.isFinite(parsed)) {
      update({ tapeLength: clampTapeLength(parsed) });
    }
  };

  return (
    <section aria-label="settings" className="flex flex-wrap items-end gap-x-6 gap-y-3">
      <label className="flex flex-col gap-1">
        <span className="ap-field__label">tape length</span>
        <input
          type="number"
          min={1}
          max={MAX_TAPE_LENGTH}
          step={1}
          value={tapeLengthText}
          onChange={(event) => commitTapeLength(event.target.value)}
          onBlur={() => setTapeLengthDraft(null)}
          className="ap-input is-compact w-32"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="ap-field__label">cell width</span>
        <select
          value={settings.cellWidth}
          onChange={(event) => update({ cellWidth: Number(event.target.value) as CellWidth })}
          className="ap-input is-compact cursor-pointer"
        >
          <option value={8}>8-bit (0–255)</option>
          <option value={16}>16-bit (0–65,535)</option>
          <option value={32}>32-bit (0–4,294,967,295)</option>
        </select>
      </label>

      <label className="checkbox pb-1">
        <input
          type="checkbox"
          checked={settings.wrap}
          onChange={(event) => update({ wrap: event.target.checked })}
        />
        pointer wraps around
      </label>
    </section>
  );
}
