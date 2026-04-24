import { useI18n } from "@/lib/i18n";
import { Instagram, Facebook, Twitter, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-espresso text-cream pt-20 pb-8" style={{backgroundColor: "hsl(var(--espresso))", color: "hsl(var(--cream))"}}>
      <div className="container grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <h3 className="font-serif text-3xl mb-2">Atelier <span className="text-gold" style={{color: "hsl(var(--gold))"}}>Café</span></h3>
          <p className="text-xs tracking-luxe uppercase text-cream/60" style={{color: "hsl(var(--cream) / 0.6)"}}>Where art meets coffee</p>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe uppercase text-gold mb-5 flex items-center gap-2" style={{color: "hsl(var(--gold))"}}>
            <MapPin className="w-3.5 h-3.5" /> {t("foot.visit")}
          </h4>
          <p className="text-sm text-cream/80 leading-relaxed" style={{color: "hsl(var(--cream) / 0.8)"}}>{t("foot.address")}</p>
          <p className="text-sm text-cream/80 mt-2" style={{color: "hsl(var(--cream) / 0.8)"}}>+20 100 123 4567</p>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe uppercase text-gold mb-5 flex items-center gap-2" style={{color: "hsl(var(--gold))"}}>
            <Clock className="w-3.5 h-3.5" /> {t("foot.hours")}
          </h4>
          <p className="text-sm text-cream/80 leading-relaxed" style={{color: "hsl(var(--cream) / 0.8)"}}>{t("foot.hours1")}</p>
          <p className="text-sm text-cream/80 mt-1" style={{color: "hsl(var(--cream) / 0.8)"}}>{t("foot.hours2")}</p>
        </div>

        <div>
          <h4 className="text-xs tracking-luxe uppercase text-gold mb-5" style={{color: "hsl(var(--gold))"}}>{t("foot.follow")}</h4>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-espresso transition-all duration-500"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container border-t border-cream/10 pt-6 text-center">
        <p className="text-xs tracking-luxe uppercase text-cream/50" style={{color: "hsl(var(--cream) / 0.5)"}}>{t("foot.rights")}</p>
      </div>
    </footer>
  );
};
