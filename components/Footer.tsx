import Container from "@/components/Container";
import type { SiteText } from "@/content/siteText";

type FooterProps = {
  text: SiteText;
};

export default function Footer({ text }: FooterProps) {
  const navItems = [
    { label: text.header.nav.property, href: "#property" },
    { label: text.header.nav.investment, href: "#investment" },
    { label: text.header.nav.location, href: "#location" },
    { label: text.header.nav.process, href: "#process" },
    { label: text.header.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#090d12] pt-16 pb-8 text-white" aria-labelledby="footer-brand-title">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 id="footer-brand-title" className="text-lg font-semibold text-white">
              {text.footer.brandTitle}
            </h3>
            <p className="text-sm leading-7 text-slate-300">{text.footer.brandDescription}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{text.footer.navTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{text.footer.contactTitle}</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>{text.footer.contactEmail}</li>
              <li>{text.footer.contactPhone}</li>
              <li>{text.footer.contactWhatsapp}</li>
              <li>{text.footer.contactLocation}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{text.footer.legalTitle}</h4>
            <p className="text-sm leading-7 text-slate-300">{text.footer.legalDisclaimer}</p>
            <div className="flex gap-4 text-sm text-slate-300">
              <a href="#" className="transition hover:text-white">
                {text.footer.privacy}
              </a>
              <a href="#" className="transition hover:text-white">
                {text.footer.terms}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-slate-400">{text.footer.copyright}</div>
      </Container>
    </footer>
  );
}
