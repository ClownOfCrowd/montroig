import { useEffect, useState } from "react";

type ScrollPromptProps = {
  onOpenModal: () => void;
  title: string;
  buttonLabel: string;
  dismissLabel: string;
};

export default function ScrollPrompt({ onOpenModal, title, buttonLabel, dismissLabel }: ScrollPromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) {
      return;
    }

    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        return;
      }

      const progress = window.scrollY / scrollHeight;
      if (progress >= 0.6) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-4 z-40 max-w-xs rounded-xl border border-slate-300 bg-white/95 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.2)] backdrop-blur-sm md:bottom-24 md:right-6">
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <button
        type="button"
        onClick={onOpenModal}
        className="mt-3 w-full rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition duration-300 hover:opacity-90"
      >
        {buttonLabel}
      </button>
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
      >
        {dismissLabel}
      </button>
    </div>
  );
}
