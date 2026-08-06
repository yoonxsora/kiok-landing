import { Container } from "./Container";

export function Hero() {
  return (
    <Container className="pt-12 pb-8 sm:pt-20 sm:pb-11">
      <h1 className="max-w-[20ch] text-[clamp(30px,5vw,50px)] leading-[1.12] font-bold tracking-[-0.032em]">
        You never know which detail mattered until the experiment fails.
      </h1>
      <p className="mt-6 max-w-[52ch] text-[clamp(16.5px,1.8vw,19.5px)] text-soft">
        Kiok records experiments as they happen and produces a complete, traceable record.{" "}
        <b className="font-medium text-ink">
          Every run is captured, so two runs can be compared like code.
        </b>
      </p>
    </Container>
  );
}
