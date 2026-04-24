import { FormEvent, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Check } from "lucide-react";

export const Reservation = () => {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const newErr: Record<string, boolean> = {};
    ["name", "phone", "date", "time", "guests"].forEach((k) => {
      if (!fd.get(k)) newErr[k] = true;
    });
    setErrors(newErr);
    if (Object.keys(newErr).length === 0) {
      setDone(true);
      e.currentTarget.reset();
      setTimeout(() => setDone(false), 4500);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 px-1 text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300";

  return (
    <section id="reserve" className="py-28 md:py-40 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-14 reveal">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">{t("res.kicker")}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground font-light mb-6">{t("res.title")}</h2>
          <span className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">{t("res.sub")}</p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-8 md:grid-cols-2 reveal" noValidate>
          <div className="md:col-span-2">
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
              {t("res.name")}
            </label>
            <input name="name" type="text" className={`${inputCls} ${errors.name ? "border-destructive" : ""}`} />
          </div>
          <div>
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
              {t("res.phone")}
            </label>
            <input name="phone" type="tel" className={`${inputCls} ${errors.phone ? "border-destructive" : ""}`} />
          </div>
          <div>
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
              {t("res.guests")}
            </label>
            <select name="guests" className={`${inputCls} ${errors.guests ? "border-destructive" : ""}`} defaultValue="">
              <option value="" disabled></option>
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
              {t("res.date")}
            </label>
            <input name="date" type="date" className={`${inputCls} ${errors.date ? "border-destructive" : ""}`} />
          </div>
          <div>
            <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
              {t("res.time")}
            </label>
            <input name="time" type="time" className={`${inputCls} ${errors.time ? "border-destructive" : ""}`} />
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="px-12 py-4 gradient-gold text-espresso uppercase text-xs tracking-luxe font-medium hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5"
            >
              {t("res.submit")}
            </button>
          </div>

          {done && (
            <div className="md:col-span-2 flex items-center justify-center gap-3 text-gold animate-fade-up">
              <Check className="w-5 h-5" />
              <span className="font-serif italic text-lg">{t("res.success")}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
