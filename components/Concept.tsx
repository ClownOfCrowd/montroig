import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type ConceptProps = {
  text: SiteText["concept"];
};

export default function Concept({ text }: ConceptProps) {
  return (
    <section className="bg-secondary section-pad" aria-labelledby="concept-title">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-175 space-y-8 text-center">
            <h2 id="concept-title" className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              {text.title}
            </h2>
            <p className="text-base leading-8 text-muted sm:text-lg">{text.paragraph1}</p>
            <p className="text-base leading-8 text-muted sm:text-lg">{text.paragraph2}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
