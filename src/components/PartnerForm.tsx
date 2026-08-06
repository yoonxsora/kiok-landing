import { useState, type FormEvent } from "react";
import { site } from "../lib/site";
import type { PartnerLead } from "../lib/types";

type Status = { tone: "error" | "ok"; message: string } | null;

function mailtoFor(lead: PartnerLead): string {
  const subject = `Design partner — ${lead.lab || lead.email}`;
  const body = `Email: ${lead.email}\nLab: ${lead.lab || "—"}\n\nWhat we run most often:`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function PartnerForm() {
  const [lead, setLead] = useState<PartnerLead>({ email: "", lab: "" });
  const [status, setStatus] = useState<Status>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!lead.email.includes("@") || lead.email.indexOf("@") < 1) {
      setStatus({ tone: "error", message: "Add an email address so we can reply." });
      return;
    }

    if (!site.formEndpoint) {
      window.location.href = mailtoFor(lead);
      setStatus({ tone: "ok", message: "Opening your mail app. Send it and we'll reply within a day." });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus({ tone: "ok", message: "Thanks — we'll reply within a day." });
      setLead({ email: "", lab: "" });
    } catch {
      setStatus({ tone: "error", message: "Something went wrong. Email us directly at " + site.email });
    } finally {
      setSending(false);
    }
  }

  const field =
    "min-w-0 flex-[1_1_220px] border-0 border-b border-ink bg-transparent px-0.5 py-2.5 text-[16px] text-ink placeholder:text-faint focus:border-b-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ink";

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="mb-3 flex max-w-[540px] flex-wrap gap-2.5">
        <input
          type="email"
          value={lead.email}
          onChange={(e) => setLead({ ...lead, email: e.target.value })}
          placeholder="you@lab.edu"
          aria-label="Email address"
          className={field}
        />
        <input
          type="text"
          value={lead.lab}
          onChange={(e) => setLead({ ...lead, lab: e.target.value })}
          placeholder="Lab or company"
          aria-label="Lab or company"
          className={field}
        />
        <button
          type="submit"
          disabled={sending}
          className="cursor-pointer rounded-[2px] border border-ink bg-ink px-5 py-2.5 text-[15px] font-medium text-bg hover:bg-[#26302B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-60"
        >
          {sending ? "Sending…" : "Become a design partner"}
        </button>
      </form>

      <p className="font-mono text-[12px] text-faint">We reply within a day.</p>

      {status && (
        <p
          role="status"
          className={`mt-2.5 font-mono text-[12.5px] ${status.tone === "ok" ? "text-now" : "text-was"}`}
        >
          {status.message}
        </p>
      )}
    </>
  );
}
