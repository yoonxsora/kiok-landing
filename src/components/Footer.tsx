import { Container } from "./Container";
import { site } from "../lib/site";

export function Footer() {
  return (
    <Container>
      <footer className="flex flex-wrap justify-between gap-x-6 gap-y-1.5 border-t border-line pt-[18px] pb-10 label">
        <span>
          {site.name} — from {site.gloss.replace(" · ", " / ")}, memory
        </span>
        <span>{site.location}</span>
        <a href={`mailto:${site.email}`} className="no-underline hover:text-ink">
          {site.email}
        </a>
      </footer>
    </Container>
  );
}
