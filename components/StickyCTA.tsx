import Container from "@/components/Container";

type StickyCTAProps = {
  onOpenModal: () => void;
  title: string;
  buttonLabel: string;
};

export default function StickyCTA({ onOpenModal, title, buttonLabel }: StickyCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-slate-950/95 py-3 shadow-[0_-8px_28px_rgba(15,23,42,0.35)] backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-stone-100 sm:text-base">{title}</p>
        <button
          type="button"
          onClick={onOpenModal}
          className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition duration-300 hover:scale-[1.01] hover:opacity-90"
        >
          {buttonLabel}
        </button>
      </Container>
    </div>
  );
}
