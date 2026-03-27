import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";
import Image from "next/image";

type LocationProps = {
  text: SiteText["location"];
};

export default function Location({ text }: LocationProps) {
  return (
    <section id="location" className="bg-secondary section-pad" aria-labelledby="location-title">
      <Container>
        <Reveal className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <div className="media-frame min-h-75 border border-slate-200 md:min-h-105" aria-hidden="true">
            <Image src="/location-aerial.svg" alt={text.aerialAlt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="media-image object-cover" />
          </div>
          <div className="max-w-162.5 space-y-5">
            <h2 id="location-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {text.title}
            </h2>
            <p className="text-base leading-8 text-muted sm:text-lg">{text.paragraph1}</p>
            <p className="text-base leading-8 text-muted sm:text-lg">{text.paragraph2}</p>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="media-frame min-h-44 border border-slate-100" aria-hidden="true">
                <Image src="/location-map.svg" alt={text.mapAlt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 40vw" className="media-image object-cover" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{text.mapLabel}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
