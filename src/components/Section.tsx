import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  tag,
  heading,
  headingClass = "max-w-[24ch]",
  id,
  children,
}: {
  tag: string;
  heading: string;
  headingClass?: string;
  id?: string;
  children?: ReactNode;
}) {
  return (
    <Container>
      <section id={id} className="border-t border-line py-9 sm:py-14">
        <p className="mb-4 label">{tag}</p>
        <h2
          className={`mb-5 text-[clamp(23px,3.2vw,32px)] leading-[1.16] font-bold tracking-[-0.028em] ${headingClass}`}
        >
          {heading}
        </h2>
        {children}
      </section>
    </Container>
  );
}
