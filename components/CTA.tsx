import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import type { SiteText } from "@/content/siteText";

type CTAProps = {
  formText: SiteText["leadForm"];
  title: string;
};

export default function CTA({ formText, title }: CTAProps) {
  return (
    <section id="contact" className="bg-primary section-pad" aria-labelledby="cta-title">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-215 space-y-8 rounded-xl border border-white/20 bg-white/5 p-6 text-center md:p-10">
            <h2 id="cta-title" className="text-3xl font-semibold text-stone-50 sm:text-4xl">
              {title}
            </h2>
            <LeadForm theme="dark" text={formText} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
