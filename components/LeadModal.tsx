import { useEffect } from "react";

import LeadForm from "@/components/LeadForm";
import type { SiteText } from "@/content/siteText";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: SiteText["leadModal"];
  formText: SiteText["leadForm"];
};

export default function LeadModal({ isOpen, onClose, text, formText }: LeadModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.35)] md:p-8">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">{text.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{text.subtitle}</p>
          </div>
          <button
            type="button"
            aria-label={text.close}
            className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-100"
            onClick={onClose}
          >
            {text.close}
          </button>
        </div>
        <LeadForm onSubmit={onClose} text={formText} />
      </div>
    </div>
  );
}
