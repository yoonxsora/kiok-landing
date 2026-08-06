import { Container } from "./Container";
import type { DiffRow, RunComparison } from "../lib/types";

const valueTone: Record<DiffRow["kind"], { field: string; before: string; after: string }> = {
  same: { field: "text-faint", before: "text-soft", after: "text-soft" },
  changed: { field: "text-ink", before: "text-was", after: "text-now font-medium" },
  outcome: { field: "text-ink", before: "text-was", after: "text-now font-medium" },
};

function Row({ row }: { row: DiffRow }) {
  const tone = valueTone[row.kind];
  return (
    <div
      className={[
        "grid grid-cols-1 gap-x-4 border-b border-line py-2.5 font-mono text-[13px] leading-[1.5] last:border-b-0",
        "sm:grid-cols-[106px_1fr_1fr] sm:py-2",
        row.kind === "outcome" ? "pt-3.5 sm:pt-3.5" : "",
      ].join(" ")}
    >
      <span className={`${tone.field} text-[10.5px] tracking-[0.1em] uppercase sm:text-[13px] sm:tracking-normal sm:normal-case`}>
        {row.field}
      </span>
      <span className={tone.before}>
        <span className="text-faint sm:hidden">46 · </span>
        {row.before}
      </span>
      <span className={tone.after}>
        <span className="text-faint sm:hidden">47 · </span>
        {row.after}
      </span>
    </div>
  );
}

export function RunDiff({ comparison }: { comparison: RunComparison }) {
  const changes = comparison.rows.filter((r) => r.kind === "changed").length;

  return (
    <Container className="pb-12 sm:pb-20">
      <div className="rounded-[3px] border border-line bg-panel">
        <div className="flex flex-wrap items-baseline gap-x-[18px] gap-y-1 border-b border-line px-5 py-3.5 label">
          <b className="font-medium text-ink">{comparison.protocol}</b>
          <span>
            Run {comparison.fromRun} → Run {comparison.toRun}
          </span>
          <span>
            {changes} change{changes === 1 ? "" : "s"}
          </span>
        </div>

        <div className="px-5 pt-1 pb-3.5">
          <div className="hidden grid-cols-[106px_1fr_1fr] gap-x-4 border-b border-line py-3 font-mono text-[10.5px] tracking-[0.12em] text-faint uppercase sm:grid">
            <span>field</span>
            <span>Run {comparison.fromRun}</span>
            <span>Run {comparison.toRun}</span>
          </div>
          {comparison.rows.map((row) => (
            <Row key={row.field} row={row} />
          ))}
        </div>
      </div>

      <p className="mt-3.5 max-w-[64ch] font-mono text-[12px] leading-[1.7] text-faint">
        {comparison.caption}
      </p>
    </Container>
  );
}
