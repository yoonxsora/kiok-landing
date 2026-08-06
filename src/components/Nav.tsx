import { Container } from "./Container";
import { site } from "../lib/site";

export function Nav() {
  return (
    <Container>
      <nav className="flex items-baseline justify-between gap-4 pt-7 label">
        <span>
          <b className="font-medium tracking-[0.09em] text-ink">{site.name}</b>
          <i
            title={site.glossTitle}
            className="ml-2.5 cursor-help border-l border-line-2 pl-2.5 not-italic tracking-[0.04em]"
          >
            {site.gloss}
          </i>
          <span className="ml-2.5 hidden sm:inline">{site.tagline}</span>
        </span>
        <a
          href="#partners"
          className="border-b border-line-2 pb-0.5 text-soft no-underline hover:border-ink hover:text-ink"
        >
          Design partners
        </a>
      </nav>
    </Container>
  );
}
