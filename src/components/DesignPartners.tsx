import { Section } from "./Section";
import { PartnerForm } from "./PartnerForm";

export function DesignPartners() {
  return (
    <Section
      id="partners"
      tag="Design partners"
      heading="We're looking for labs that run the same protocol a hundred times."
    >
      <p className="mb-7 max-w-[52ch] text-soft">
        If you've lost a week to a result you couldn't trace, we want to watch you work. Nothing to
        migrate — we sit underneath the notebook you already use.
      </p>
      <PartnerForm />
    </Section>
  );
}
