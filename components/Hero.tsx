import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type HeroProps = {
  onOpenLeadModal: () => void;
  text: SiteText["hero"];
};

export default function Hero({ onOpenLeadModal, text }: HeroProps) {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-seafront.svg')" }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/55 to-black/35" aria-hidden="true" />
      <Container>
        <Reveal className="relative z-10 section-pad">
          <div className="max-w-150 space-y-7 pb-6 md:pb-10">
            <p className="text-sm uppercase tracking-[0.22em] text-accent">{text.kicker}</p>
            <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              {text.title}
            </h1>
            <p className="max-w-155 text-base leading-relaxed text-stone-100 sm:text-lg">
              {text.subtitle}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="button"
                onClick={onOpenLeadModal}
                className="rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:text-base"
              >
                {text.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => {
                  const investorSection = document.getElementById("investor-title");
                  investorSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-md border border-white/75 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:opacity-90 sm:text-base"
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
