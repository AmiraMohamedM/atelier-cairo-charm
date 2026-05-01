import { FormEvent, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Check, AlertCircle, Loader2 } from "lucide-react";

type Step = "details" | "success";

interface ReservationData {
  fullName: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
}

export const Reservation = () => {
  const { t } = useI18n();
  const [step, setStep] = useState<Step>("details");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [reservationData, setReservationData] = useState<ReservationData | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const onSubmitDetails = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError(null);
    const form = e.currentTarget;

    const fd = new FormData(form);
    const newErr: Record<string, boolean> = {};
    ["name", "phone", "date", "time", "guests"].forEach((k) => {
      if (!fd.get(k)) newErr[k] = true;
    });
    setErrors(newErr);
    if (Object.keys(newErr).length > 0) return;

    const data: ReservationData = {
      fullName: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      guests: Number(fd.get("guests") || 1),
      date: String(fd.get("date") || ""),
      time: String(fd.get("time") || ""),
    };

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL ?? "http://localhost:5000"}/api/reservations`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (!result.success) throw new Error(result.message);

      setReservationData(data);
      setStep("success");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setServerError(`Could not submit reservation: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 px-1 text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300";

  return (
    <section id="reserve" className="py-28 md:py-40 bg-background">
      <div className="container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">
            {t("res.kicker")}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground font-light mb-6">
            {t("res.title")}
          </h2>
          <span className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">{t("res.sub")}</p>
        </div>

        {/* ── STEP 1: Reservation Details ── */}
        {step === "details" && (
          <form onSubmit={onSubmitDetails} className="grid gap-8 md:grid-cols-2 reveal" noValidate>
            {/* Full Name */}
            <div className="md:col-span-2">
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
                {t("res.name")}
              </label>
              <input name="name" type="text" className={`${inputCls} ${errors.name ? "border-destructive" : ""}`} />
              {errors.name && <p className="text-destructive text-[10px] mt-1 tracking-wide">Required</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
                {t("res.phone")}
              </label>
              <input name="phone" type="tel" className={`${inputCls} ${errors.phone ? "border-destructive" : ""}`} />
              {errors.phone && <p className="text-destructive text-[10px] mt-1 tracking-wide">Required</p>}
            </div>

            {/* Guests */}
            <div>
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
                {t("res.guests")}
              </label>
              <select name="guests" className={`${inputCls} ${errors.guests ? "border-destructive" : ""}`} defaultValue="">
                <option value="" disabled></option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              {errors.guests && <p className="text-destructive text-[10px] mt-1 tracking-wide">Required</p>}
            </div>

            {/* Date */}
            <div>
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
                {t("res.date")}
              </label>
              <input name="date" type="date" min={today} className={`${inputCls} ${errors.date ? "border-destructive" : ""}`} />
              {errors.date && <p className="text-destructive text-[10px] mt-1 tracking-wide">Required</p>}
            </div>

            {/* Time */}
            <div>
              <label className="text-[10px] tracking-luxe uppercase text-muted-foreground mb-2 block">
                {t("res.time")}
              </label>
              <input name="time" type="time" className={`${inputCls} ${errors.time ? "border-destructive" : ""}`} />
              {errors.time && <p className="text-destructive text-[10px] mt-1 tracking-wide">Required</p>}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                disabled={loading}
                className="px-12 py-4 gradient-gold text-espresso uppercase text-xs tracking-luxe font-medium hover:shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Submitting..." : "Reserve a Table →"}
              </button>
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="md:col-span-2 flex items-center justify-center gap-3 text-destructive animate-fade-up">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{serverError}</span>
              </div>
            )}
          </form>
        )}

        {/* ── STEP 2: Success ── */}
        {step === "success" && (
          <div className="text-center animate-fade-up py-12 space-y-6">
            <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto shadow-gold">
              <Check className="w-9 h-9 text-espresso" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground font-light">
              {t("res.success")}
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {reservationData && (
                <>
                  Your table for <strong className="text-foreground">{reservationData.guests}</strong> on{" "}
                  <strong className="text-foreground">{reservationData.date}</strong> at{" "}
                  <strong className="text-foreground">{reservationData.time}</strong> has been reserved.
                  We look forward to welcoming you at Atelier Café. ☕
                </>
              )}
            </p>
            <span className="gold-divider" />
            <button
              onClick={() => setStep("details")}
              className="mt-4 text-xs tracking-luxe uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              Make another reservation
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
