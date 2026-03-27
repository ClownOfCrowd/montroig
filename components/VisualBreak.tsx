import Reveal from "@/components/Reveal";
import Image from "next/image";

type VisualBreakProps = {
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function VisualBreak({ kicker, title, subtitle, image }: VisualBreakProps) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden" aria-label={title}>
      <Image
        src={image}
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="media-image object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" aria-hidden="true" />
      <Reveal className="relative z-10 mx-auto flex min-h-[58vh] w-full max-w-300 items-end px-6 py-12 md:py-16">
        <div className="max-w-160 space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-200">{kicker}</p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
          <p className="text-base text-stone-100 sm:text-lg">{subtitle}</p>
        </div>
      </Reveal>
    </section>
  );
}
