import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type InvestorProps = {
  text: SiteText["investor"];
};

export default function Investor({ text }: InvestorProps) {
  const scenarios = text.scenarios.map((scenario, index) => ({
    ...scenario,
    height: index === 0 ? "h-24" : index === 1 ? "h-36" : "h-48",
    accent: index === 0 ? "bg-emerald-500" : index === 1 ? "bg-amber-500" : "bg-sky-500",
    highlight: index === 1,
  }));

  return (
    <section id="investment" className="bg-secondary section-pad" aria-labelledby="investor-title">
      <Container>
        <Reveal className="space-y-10 rounded-2xl border border-slate-300/70 bg-white/80 p-6 md:p-10">
          <header className="space-y-3">
            <h2 id="investor-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {text.title}
            </h2>
            <p className="max-w-170 text-base text-muted sm:text-lg">
              {text.subtitle}
            </p>
          </header>

          <section aria-labelledby="key-metrics-title" className="space-y-4">
            <h3 id="key-metrics-title" className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {text.keyMetricsTitle}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {text.keyMetrics.map((metric) => (
                <article key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="revenue-scenarios-title" className="space-y-5">
            <h3 id="revenue-scenarios-title" className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {text.revenueTitle}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {scenarios.map((scenario) => (
                <article
                  key={scenario.name}
                  className={`rounded-lg border p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.14)] ${
                    scenario.highlight ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
                  }`}
                >
                  <h4 className="text-lg font-semibold text-slate-900">{scenario.name}</h4>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {scenario.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xl font-semibold text-slate-900">{scenario.result}</p>
                </article>
              ))}
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4 md:p-6">
              <div className="flex h-64 items-end justify-between gap-4 md:gap-8">
                {scenarios.map((scenario) => (
                  <div key={`${scenario.name}-bar`} className="flex flex-1 flex-col items-center justify-end gap-3">
                    <div className={`w-full max-w-20 rounded-t-md ${scenario.accent} ${scenario.height}`} aria-hidden="true" />
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-600 sm:text-sm">{scenario.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="value-creation-title" className="space-y-3">
            <h3 id="value-creation-title" className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {text.valueTitle}
            </h3>
            <ul className="grid gap-2 text-base text-muted md:grid-cols-2">
              {text.opportunities.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <p className="text-sm text-slate-500">{text.disclaimer}</p>
        </Reveal>
      </Container>
    </section>
  );
}
