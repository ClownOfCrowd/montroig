import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type StatsBarProps = {
  text: SiteText["stats"];
};

export default function StatsBar({ text }: StatsBarProps) {
  return (
    <section className="bg-primary section-pad" aria-label={text.ariaLabel}>
      <Container>
        <Reveal>
          <div className="grid gap-5 border-y border-white/20 py-6 sm:grid-cols-2 md:grid-cols-5 md:gap-0 md:py-8">
            {text.items.map((item, index) => (
              <div
                key={item.label}
                className={`space-y-2 px-1 py-3 md:px-6 ${index < text.items.length - 1 ? "md:border-r md:border-white/15" : ""}`}
              >
                <p className="text-3xl font-semibold leading-none text-white md:text-4xl">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-200">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
