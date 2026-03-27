import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";
import Image from "next/image";

type PropertyLayoutProps = {
  text: SiteText["property"];
};

export default function PropertyLayout({ text }: PropertyLayoutProps) {
  return (
    <section id="property" className="bg-primary section-pad" aria-labelledby="layout-title">
      <Container>
        <Reveal className="space-y-8">
          <h2 id="layout-title" className="max-w-175 text-3xl font-semibold text-stone-50 sm:text-4xl">
            {text.title}
          </h2>
          <div className="media-frame min-h-55 border border-white/20">
            <Image
              src="/property-scale.svg"
              alt="Sea-facing land scale"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 80vw"
              className="media-image object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/20 to-transparent p-6 md:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-200">{text.anchorLabel}</p>
                <p className="text-3xl font-semibold text-white sm:text-4xl">{text.anchorValue}</p>
              </div>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {text.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-lg border border-white/15 bg-white/5 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                <h3 className="text-xl font-semibold text-stone-50">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-200">{feature.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
