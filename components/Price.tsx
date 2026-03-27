import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type PriceProps = {
  text: SiteText["price"];
};

export default function Price({ text }: PriceProps) {
  return (
    <section className="bg-secondary section-pad" aria-labelledby="price-title">
      <Container>
        <Reveal>
          <div className="rounded-xl bg-primary px-6 py-10 text-center md:px-10 md:py-14">
            <h2 id="price-title" className="text-5xl font-semibold text-stone-50 sm:text-6xl md:text-7xl">
              1.195.000 €
            </h2>
            <p className="mx-auto mt-6 max-w-175 text-base leading-8 text-stone-200 sm:text-lg">{text.description}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
