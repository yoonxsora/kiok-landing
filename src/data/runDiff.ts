import type { RunComparison } from "../lib/types";

export const westernBlot: RunComparison = {
  protocol: "Western blot · anti-pSTAT3",
  fromRun: 46,
  toRun: 47,
  caption:
    "Three changes between runs. One of them is why 46 came up blank, and no notebook can tell you which — because a notebook stores pages, not executions.",
  rows: [
    { field: "lysate", before: "RIPA, 30 µg", after: "RIPA, 30 µg", kind: "same" },
    { field: "gel", before: "4–12% Bis-Tris", after: "4–12% Bis-Tris", kind: "same" },
    { field: "blocking", before: "5% BSA / TBST", after: "5% milk / TBST", kind: "changed" },
    { field: "transfer", before: "wet, 90 min, 100 V", after: "wet, 60 min, 100 V", kind: "changed" },
    { field: "primary Ab", before: "1:1000, 4 °C o/n", after: "1:500, 4 °C o/n", kind: "changed" },
    { field: "exposure", before: "120 s", after: "120 s", kind: "same" },
    { field: "result", before: "no signal", after: "bands at 88 kDa", kind: "outcome" },
  ],
};
