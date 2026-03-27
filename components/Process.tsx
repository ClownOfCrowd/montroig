import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type ProcessProps = {
  text: SiteText["process"];
};

export default function Process({ text }: ProcessProps) {
  return (
    <section id="process" className="bg-primary section-pad" aria-labelledby="process-title">
      <Container>
        <Reveal className="space-y-8">
          <h2 id="process-title" className="text-3xl font-semibold text-stone-50 sm:text-4xl">
            {text.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/12">
            {text.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/12 bg-white/5 p-5 transition duration-300 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] md:rounded-none md:border-y md:border-white/12 md:border-x-0"
              >
                <p className="text-4xl font-semibold text-white/30">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-semibold text-stone-50">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-200">{step.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
