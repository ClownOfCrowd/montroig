import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type LifestyleProps = {
  text: SiteText["lifestyle"];
};

export default function Lifestyle({ text }: LifestyleProps) {
  return (
    <section className="bg-primary section-pad" aria-labelledby="lifestyle-title">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-190 space-y-6 text-center">
            <h2 id="lifestyle-title" className="text-3xl font-semibold text-stone-50 sm:text-4xl">
              {text.title}
            </h2>
            <p className="text-xl leading-9 text-stone-100 sm:text-2xl">{text.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
