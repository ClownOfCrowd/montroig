import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type VisionProps = {
  text: SiteText["vision"];
};

export default function Vision({ text }: VisionProps) {
  return (
    <section className="bg-primary section-pad" aria-labelledby="vision-title">
      <Container>
        <Reveal className="space-y-8">
          <h2 id="vision-title" className="max-w-175 text-3xl font-semibold text-stone-50 sm:text-4xl">
            {text.title}
          </h2>
          <ul className="grid gap-4 text-base sm:grid-cols-2 sm:text-lg">
            {text.options.map((option) => (
              <li
                key={option}
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-4 text-stone-100 transition duration-300 hover:scale-[1.03] hover:shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
              >
                <p className="text-xl">{option}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
