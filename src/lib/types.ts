export type RowKind = "same" | "changed" | "outcome";

export interface DiffRow {
  /** Field name as it appears in the protocol schema. */
  field: string;
  /** Value recorded in the earlier run. */
  before: string;
  /** Value recorded in the later run. */
  after: string;
  kind: RowKind;
}

export interface RunComparison {
  protocol: string;
  fromRun: number;
  toRun: number;
  rows: DiffRow[];
  /** One line explaining what the reader should take from the comparison. */
  caption: string;
}

export interface PartnerLead {
  email: string;
  lab: string;
}
