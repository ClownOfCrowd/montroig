import { useState } from "react";

import Container from "@/components/Container";
import type { SiteText } from "@/content/siteText";

type HeroProps = {
  onOpenLeadModal: () => void;
  text: SiteText["hero"];
};

const HERO_POSTER = "/hero-seafront.svg";
const HERO_VIDEO_MP4 = "/hero-frontline.mp4";

export default function Hero({ onOpenLeadModal, text }: HeroProps) {
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO_POSTER}')` }}
      aria-labelledby="hmain"
    >
      {!videoError ? (
        <video
          id="p1"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          onError={() => setVideoError(true)}
          style={{ filter: "brightness(0.9) blur(0px)" }}
        >
          <source src={HERO_VIDEO_MP4} type="video/mp4" />
        </video>
      ) : null}

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%)" }}
        aria-hidden="true"
      />

      <Container>
        <div className="hero-content-enter relative z-10 w-full py-20 md:py-24" style={{ transform: "translateY(6vh)" }}>
          <div className="max-w-175 space-y-7 px-0">
            <p className="text-sm uppercase tracking-[0.22em] text-accent">{text.kicker}</p>
            <h1 id="hmain" className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              {text.title}
            </h1>
            <p id="hsub" className="max-w-175 text-base leading-relaxed text-stone-100 sm:text-lg">
              {text.subtitle}
            </p>
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <button
                id="hcta1"
                type="button"
                onClick={onOpenLeadModal}
                className="rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:opacity-85 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] sm:text-base"
              >
                {text.primaryCta}
              </button>
              <button
                id="hcta2"
                type="button"
                onClick={() => {
                  const investorSection = document.getElementById("investor-title");
                  investorSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-md border border-white/75 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:opacity-85 sm:text-base"
              >
                {text.secondaryCta}
              </button>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-5 flex justify-center">
            <div className="hero-scroll-indicator" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
