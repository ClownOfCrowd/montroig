import { FormEvent } from "react";
import type { SiteText } from "@/content/siteText";

type LeadFormProps = {
  theme?: "light" | "dark";
  onSubmit?: () => void;
  text: SiteText["leadForm"];
};

export default function LeadForm({ theme = "light", onSubmit, text }: LeadFormProps) {
  const isDark = theme === "dark";

  const fieldClassName = isDark
    ? "w-full rounded-md border border-white/35 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
    : "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none";

  const submitClassName = isDark
    ? "w-full rounded-md bg-white px-5 py-3 text-base font-semibold text-slate-900 transition duration-300 hover:scale-[1.01] hover:opacity-90"
    : "w-full rounded-md bg-slate-900 px-5 py-3 text-base font-semibold text-white transition duration-300 hover:scale-[1.01] hover:opacity-90";

  const supportTextClassName = isDark ? "text-sm text-stone-200" : "text-sm text-slate-600";
  const trustTextClassName = isDark ? "text-sm text-stone-100" : "text-sm text-slate-700";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          <span className={isDark ? "text-stone-100" : "text-slate-800"}>{text.nameLabel}</span>
          <input type="text" name="name" required className={fieldClassName} placeholder={text.namePlaceholder} />
        </label>
        <label className="space-y-2 text-sm font-medium">
          <span className={isDark ? "text-stone-100" : "text-slate-800"}>{text.emailLabel}</span>
          <input type="email" name="email" required className={fieldClassName} placeholder={text.emailPlaceholder} />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium">
        <span className={isDark ? "text-stone-100" : "text-slate-800"}>{text.phoneLabel}</span>
        <input type="tel" name="phone" className={fieldClassName} placeholder={text.phonePlaceholder} />
      </label>

      <button type="submit" className={submitClassName}>
        {text.submit}
      </button>

      <p className={supportTextClassName}>{text.supportText}</p>

      <ul className={`grid gap-2 ${trustTextClassName}`}>
        {text.trust.map((item) => (
          <li key={item}>✔ {item}</li>
        ))}
      </ul>
    </form>
  );
}
