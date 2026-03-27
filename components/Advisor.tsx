import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";
import Image from "next/image";

type AdvisorProps = {
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  text: SiteText["advisor"];
};

export default function Advisor({ onPrimaryAction, onSecondaryAction, text }: AdvisorProps) {
  return (
    <section className="bg-primary py-20 md:py-32" aria-labelledby="advisor-title">
      <Container>
        <Reveal className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="relative aspect-4/5">
              <Image
                src="/advisor-operator.svg"
                alt={text.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="media-image object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" aria-hidden="true" />
          </div>

          <div className="space-y-6 md:space-y-7">
            <p className="text-xs uppercase tracking-[0.12em] text-white/60">{text.kicker}</p>

            <h2 id="advisor-title" className="max-w-160 text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl md:text-5xl">
              {text.title}
            </h2>

            <div className="max-w-170 space-y-4 text-base leading-8 text-white/75 sm:text-lg">
              <p>{text.paragraph1}</p>
              <p>{text.paragraph2}</p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3">
              {text.trustMetrics.map((metric) => (
                <li key={metric} className="rounded-lg border border-white/15 bg-white/5 px-4 py-4 text-sm text-stone-100">
                  {metric}
                </li>
              ))}
            </ul>

            <p className="text-sm uppercase tracking-[0.16em] text-accent">{text.positioning}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onPrimaryAction}
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                {text.primaryCta}
              </button>
              <button
                type="button"
                onClick={onSecondaryAction}
                className="text-left text-sm font-semibold text-white/85 underline-offset-4 transition duration-300 hover:text-white hover:underline"
              >
                {text.secondaryCta}
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
