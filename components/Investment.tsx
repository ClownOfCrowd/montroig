import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type InvestmentProps = {
  text: SiteText["investment"];
};

export default function Investment({ text }: InvestmentProps) {
  return (
    <section className="bg-secondary section-pad" aria-labelledby="investment-title">
      <Container>
        <Reveal className="space-y-8">
          <h2 id="investment-title" className="max-w-175 text-3xl font-semibold text-slate-900 sm:text-4xl">
            {text.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-7">
              <h3 className="text-2xl font-semibold text-slate-900">{text.leftTitle}</h3>
              <ul className="mt-5 space-y-3">
                {text.leftItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-md px-2 py-2 text-base leading-relaxed text-muted transition duration-300 hover:bg-slate-100"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-(--color-accent)" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-400/25 bg-slate-200 p-7">
              <h3 className="text-2xl font-semibold text-slate-900">{text.rightTitle}</h3>
              <ul className="mt-5 space-y-3">
                {text.rightItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-md px-2 py-2 text-base leading-relaxed text-slate-700 transition duration-300 hover:bg-white/60"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-700" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
