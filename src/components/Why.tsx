import { Section } from "./Section";

export function Why() {
  return (
    <Section tag="Why it's broken" heading="Documentation asks you to predict which detail will matter.">
      <p className="mb-4 max-w-[58ch]">
        Researchers rebuild experiments afterward from memory, paper notes, and scattered files.
        That's 20 to 30 minutes each, and it still leaves out what didn't seem important at the
        time.
      </p>
      <p className="mb-7 max-w-[58ch]">
        When a result fails, nobody knows whether the cause was a reagent lot, an incubation time, a
        handling step, or an undocumented deviation. So the experiment gets repeated. Usually nobody
        was careless: the work spanned multiple days, stations, and researchers, and no system
        captured the whole picture.
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-[18px]">
        <b className="text-[clamp(30px,4.4vw,44px)] leading-none font-bold tracking-[-0.04em]">
          $28B
        </b>
        <span className="max-w-[50ch] font-mono text-[12.5px] leading-[1.65] text-soft">
          estimated annual cost of irreproducible preclinical research in the US. Undocumented
          conditions are among the leading, most fixable causes.
        </span>
      </div>
    </Section>
  );
}
