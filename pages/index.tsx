import { useState } from "react";

import Advisor from "@/components/Advisor";
import CTA from "@/components/CTA";
import Concept from "@/components/Concept";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Investment from "@/components/Investment";
import Investor from "@/components/Investor";
import LeadForm from "@/components/LeadForm";
import LeadModal from "@/components/LeadModal";
import Lifestyle from "@/components/Lifestyle";
import Location from "@/components/Location";
import Price from "@/components/Price";
import Process from "@/components/Process";
import PropertyLayout from "@/components/PropertyLayout";
import Reveal from "@/components/Reveal";
import ScrollPrompt from "@/components/ScrollPrompt";
import StatsBar from "@/components/StatsBar";
import StickyCTA from "@/components/StickyCTA";
import VisualBreak from "@/components/VisualBreak";
import Vision from "@/components/Vision";
import { siteText, type LanguageCode } from "@/content/siteText";

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>("ES");
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const text = siteText[language];

  const openLeadModal = () => setIsLeadModalOpen(true);
  const closeLeadModal = () => setIsLeadModalOpen(false);

  const htmlLang = language === "ES" ? "es" : language === "RU" ? "ru" : "en";

  return (
    <main id="top" lang={htmlLang} className={`pb-24 md:pb-20 lang-${language.toLowerCase()}`}>
      <Header
        language={language}
        text={text}
        onLanguageChange={setLanguage}
        onOpenLeadModal={openLeadModal}
      />
      <Hero onOpenLeadModal={openLeadModal} text={text.hero} />
      <ImageGallery text={text.gallery} />
      <StatsBar text={text.stats} />
      <Concept text={text.concept} />
      <VisualBreak
        kicker={text.breaks.kicker}
        title={text.breaks.firstTitle}
        subtitle={text.breaks.firstSubtitle}
        image="/break-frontline.svg"
      />
      <PropertyLayout text={text.property} />
      <Investment text={text.investment} />
      <Vision text={text.vision} />
      <Investor text={text.investor} />
      <Advisor onPrimaryAction={openLeadModal} onSecondaryAction={openLeadModal} text={text.advisor} />

      <section className="bg-secondary section-pad" aria-labelledby="lead-capture-title">
        <Container>
          <Reveal className="mx-auto max-w-215 rounded-2xl border border-slate-300/70 bg-white p-6 md:p-10">
            <h2 id="lead-capture-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {text.leadCapture.title}
            </h2>
            <p className="mt-2 text-base text-muted sm:text-lg">{text.leadCapture.subtitle}</p>
            <div className="mt-6">
              <LeadForm text={text.leadForm} />
            </div>
          </Reveal>
        </Container>
      </section>

      <VisualBreak
        kicker={text.breaks.kicker}
        title={text.breaks.secondTitle}
        subtitle={text.breaks.secondSubtitle}
        image="/break-landscale.svg"
      />
      <Location text={text.location} />
      <Process text={text.process} />
      <Lifestyle text={text.lifestyle} />
      <Price text={text.price} />
      <CTA formText={text.leadForm} title={text.cta.title} />

      <Footer text={text} />

      <StickyCTA onOpenModal={openLeadModal} title={text.sticky.title} buttonLabel={text.sticky.button} />
      <ScrollPrompt
        onOpenModal={openLeadModal}
        title={text.prompt.title}
        buttonLabel={text.prompt.button}
        dismissLabel={text.prompt.dismiss}
      />
      <LeadModal isOpen={isLeadModalOpen} onClose={closeLeadModal} text={text.leadModal} formText={text.leadForm} />
    </main>
  );
}
