import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";
import Image from "next/image";

const galleryImages = [
  { title: "Primera linea del mar", image: "/gallery-sea.svg", className: "md:col-span-2 md:row-span-2 min-h-[260px] md:min-h-[520px]" },
  { title: "Vistas desde la parcela", image: "/gallery-viewpoint.svg", className: "min-h-[220px] md:min-h-[250px]" },
  { title: "Terrazas abiertas", image: "/gallery-terrace.svg", className: "min-h-[220px] md:min-h-[250px]" },
  { title: "Escala del terreno", image: "/gallery-land.svg", className: "min-h-[220px] md:min-h-[250px]" },
  { title: "Atardecer mediterraneo", image: "/gallery-sunset.svg", className: "min-h-[220px] md:min-h-[250px]" },
];

type ImageGalleryProps = {
  text: SiteText["gallery"];
};

export default function ImageGallery({ text }: ImageGalleryProps) {
  return (
    <section className="bg-secondary section-pad" aria-labelledby="gallery-title">
      <Container>
        <Reveal className="space-y-7">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{text.kicker}</p>
            <h2 id="gallery-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {text.title}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {galleryImages.map((item, index) => (
              <article key={item.title} className={`media-frame group ${item.className}`}>
                <Image
                  src={item.image}
                  alt={text.items[index]?.title ?? item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="media-image object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pb-4 pt-10">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-100">
                    {text.items[index]?.title ?? item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
