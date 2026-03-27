import { useEffect, useState } from "react";

import Container from "@/components/Container";
import type { LanguageCode, SiteText } from "@/content/siteText";

type HeaderProps = {
  language: LanguageCode;
  text: SiteText;
  onLanguageChange: (language: LanguageCode) => void;
  onOpenLeadModal: () => void;
};

const links = [
  { key: "property", href: "#property" },
  { key: "investment", href: "#investment" },
  { key: "location", href: "#location" },
  { key: "process", href: "#process" },
  { key: "contact", href: "#contact" },
] as const;

const languages: LanguageCode[] = ["ES", "EN", "RU"];

export default function Header({ language, text, onLanguageChange, onOpenLeadModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerClass = scrolled
    ? "h-16 border-b border-white/15 bg-slate-950/88 backdrop-blur-md"
    : "h-20 border-b border-transparent bg-transparent";

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const linkTracking = language === "RU" ? "tracking-[0.04em]" : "tracking-[0.06em]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${containerClass}`}>
      <Container className="flex h-full items-center justify-between gap-4">
        <a href="#top" className="text-xs font-semibold uppercase tracking-[0.07em] text-white sm:text-sm">
          {text.header.brand}
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`group relative text-xs font-medium uppercase text-white/90 transition hover:text-white/70 ${linkTracking}`}
              >
                {text.header.nav[link.key]}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-white/90">
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => onLanguageChange(code)}
                className={`relative px-1 py-1 transition hover:opacity-60 ${language === code ? "text-white" : "text-white/70"}`}
              >
                {code}
                {language === code ? <span className="absolute -bottom-0.5 left-0 h-px w-full bg-white" /> : null}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenLeadModal}
            className="hidden rounded-md border border-white/45 px-3 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-white transition hover:opacity-75 sm:block"
          >
            {text.header.requestDetails}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/35 text-white md:hidden"
            aria-label={text.header.menuLabel}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">{text.header.menuLabel}</span>
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-white transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-px w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-px w-5 bg-white transition ${menuOpen ? "-translate-y-2.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950/95 px-6 py-6 backdrop-blur-md md:hidden">
          <nav className="space-y-3">
            {links.map((link) => (
              <a
                key={`mobile-${link.key}`}
                href={link.href}
                className={`block text-sm font-semibold uppercase text-white/90 ${linkTracking}`}
                onClick={() => setMenuOpen(false)}
              >
                {text.header.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-white/90">
            {languages.map((code) => (
              <button
                key={`mobile-${code}`}
                type="button"
                onClick={() => {
                  onLanguageChange(code);
                  setMenuOpen(false);
                }}
                className={`relative px-1 py-1 transition hover:opacity-60 ${language === code ? "text-white" : "text-white/70"}`}
              >
                {code}
                {language === code ? <span className="absolute -bottom-0.5 left-0 h-px w-full bg-white" /> : null}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              onOpenLeadModal();
              setMenuOpen(false);
            }}
            className="mt-5 rounded-md border border-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.06em] text-white"
          >
            {text.header.requestDetails}
          </button>
        </div>
      ) : null}
    </header>
  );
}
